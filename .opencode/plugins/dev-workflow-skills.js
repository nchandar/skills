import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const extractFrontmatter = (content) => {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: content };

  const frontmatter = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx <= 0) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
    frontmatter[key] = value;
  }

  return { frontmatter, body: match[2].trim() };
};

const loadCommands = (commandsDir) => {
  if (!fs.existsSync(commandsDir)) return {};

  const commands = {};
  for (const file of fs.readdirSync(commandsDir)) {
    if (!file.endsWith('.md')) continue;
    const name = file.replace(/\.md$/, '');
    const fullPath = path.join(commandsDir, file);
    const content = fs.readFileSync(fullPath, 'utf8');
    const { frontmatter, body } = extractFrontmatter(content);

    commands[name] = {
      description: frontmatter.description || `Run ${name}`,
      prompt: body.replace(/^# .*?\n\n/, '').trim()
    };
  }

  return commands;
};

const BOOTSTRAP = `<IMPORTANT>
You have dev workflow skills installed.

Use OpenCode's native skill tool to list and load them.

Preferred entry points:
- Use dev-cycle for end-to-end workflow control.
- Use dev-brainstorm for design work.
- Use dev-grill-with-docs when terminology and durable design memory matter.
- Use dev-plan for executable task breakdowns.
- Use dev-execute to carry a plan through implementation, review, and verification.
- Use dev-debug for unknown failures.
- Use dev-tdd for a single implementation slice.
</IMPORTANT>`;

export default async () => {
  const skillsDir = path.resolve(__dirname, '../../skills');
  const commandsDir = path.resolve(__dirname, '../../commands');
  const commands = loadCommands(commandsDir);

  return {
    config: async (config) => {
      config.skills = config.skills || {};
      config.skills.paths = config.skills.paths || [];
      if (!config.skills.paths.includes(skillsDir)) {
        config.skills.paths.push(skillsDir);
      }

      config.command = config.command || {};
      for (const [name, command] of Object.entries(commands)) {
        config.command[name] = command;
      }
    },

    'experimental.chat.messages.transform': async (_input, output) => {
      if (!output.messages.length) return;
      const firstUser = output.messages.find((m) => m.info.role === 'user');
      if (!firstUser || !firstUser.parts.length) return;
      if (firstUser.parts.some((p) => p.type === 'text' && p.text.includes('You have dev workflow skills installed'))) {
        return;
      }

      const ref = firstUser.parts[0];
      firstUser.parts.unshift({ ...ref, type: 'text', text: BOOTSTRAP });
    }
  };
};
