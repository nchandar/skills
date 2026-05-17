# Installing Dev Workflow Skills for OpenCode

## Installation

Add this repository to the `plugin` array in your `opencode.json`:

```json
{
  "plugin": ["dev-workflow-skills@git+https://github.com/niranjanchandarraj/dev-workflow-skills.git"]
}
```

Restart OpenCode after saving the config.

The plugin registers this repository's `skills/` directory automatically and injects a small bootstrap so the agent knows the `dev-*` workflow exists.

It also registers the repository's `commands/` directory as OpenCode commands, so entries like `/dev-cycle`, `/dev-plan`, and `/dev-debug` are available after restart.

## Verify

Use OpenCode's native `skill` tool to list the installed skills.

Suggested smoke tests:

- ask for the full workflow and confirm `dev-cycle` is available
- ask to list skills and confirm the `dev-*` catalog appears
- type `/dev-cycle` and confirm the command is available

## Manual Local Install

If you prefer a local path instead of a git-backed plugin spec:

```json
{
  "plugin": ["/absolute/path/to/dev-workflow-skills"]
}
```

## Notes

- OpenCode loads config-time changes on startup, not live. Restart after changing plugin config.
- This plugin is OpenCode-specific. Claude and Codex use their own plugin or skills mechanisms.
