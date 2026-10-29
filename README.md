# Skills

Personal skills installed with `make install-claude`, `make install-codex` or `make install-opencode`.

Current skills:

- `init-claude-settings`: set up Claude Code settings on a new Mac.

The `dev-*` workflow skills (feature, debug, research, review, spawn) now live in the dotfiles repo under `agents/harness/` and install with `make harness` there. The old `dev-*` catalog is in this repo's git history before this commit.

Note: `.claude-plugin/`, `.codex-plugin/`, `.opencode/` and `package.json` still carry the old `dev-workflow-skills` plugin metadata and are unused.
