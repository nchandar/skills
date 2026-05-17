---
description: Create or verify an isolated workspace before execution when worktree-style isolation is desired.
---

# Dev Worktree

Use the `dev-worktree` skill.

Request:
$ARGUMENTS

Instructions:
- Respect existing repo and user conventions first.
- Only create isolation when it is actually wanted.
- Hand off to `dev-execute` once the workspace decision is settled.
