---
name: dev-worktree
description: Create or verify an isolated workspace before implementation when worktree-style isolation is desired. Use when the user wants branch or workspace isolation for longer-running work, when autonomous execution should avoid touching the current branch directly, or when existing worktree conventions should be respected.
---

# Dev Worktree

## Overview

Use this skill to set up or confirm an isolated workspace before implementation when that level of isolation is useful.

## When To Use

Use this skill when:

- the user wants worktree or branch isolation
- the work is long-running or invasive enough that isolation is safer
- the repository already has worktree conventions that should be respected

Do not use this skill when:

- the user is happy to work in place
- the extra setup would add more friction than value

## Workflow

1. Detect whether isolation already exists.
2. Respect existing repo or user conventions first.
3. Create or confirm the isolated workspace only if wanted.
4. Hand off to `dev-execute`.

## Outputs And Handoffs

Typical outputs:

- isolated workspace ready
- or explicit confirmation that work will proceed in place

Default handoff: `dev-execute`

## Common Mistakes

- Forcing worktree setup when the user did not ask for it.
- Ignoring existing repo conventions.
- Treating workspace setup as implementation progress.
