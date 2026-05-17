import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

  return {
    config: async (config) => {
      config.skills = config.skills || {};
      config.skills.paths = config.skills.paths || [];
      if (!config.skills.paths.includes(skillsDir)) {
        config.skills.paths.push(skillsDir);
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
