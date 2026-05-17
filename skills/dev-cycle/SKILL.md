---
name: dev-cycle
description: Run the full development workflow from request to reviewed and verified completion. Use when the user wants an end-to-end workflow controller that chooses the right dev-* entry point, routes through planning and execution, and ends with review and verification.
---

# Dev Cycle

## Overview

Use this skill as the top-level controller across Claude, Codex, and OpenCode. It decides which workflow skill should start the job, moves through the right handoffs, and only stops when the work is complete or a real blocker remains.

## When To Use

Use this skill when:

- the user wants the whole workflow handled end to end
- the starting point is unclear and should be chosen automatically
- the work should always end with review and verification

Do not use this skill when:

- the user explicitly wants a single skill only
- the task is purely conversational or informational

## Workflow

1. Choose the correct starting point:
   - `dev-brainstorm` for unclear changes
   - `dev-grill-with-docs` for doc-aware grilling
   - `dev-improve-architecture` for structural improvement work
   - `dev-debug` for unknown failures
   - `dev-plan` when design is already approved
   - `dev-tdd` for a single known slice
2. Follow the normal handoffs until the work reaches completion.
3. Ensure the work passes through `dev-review`.
4. Ensure the work passes through `dev-verify`.

Default posture: continue automatically until blocked or done.

## Outputs And Handoffs

This skill should end with:

- reviewed work via `dev-review`
- verified completion via `dev-verify`

If blocked, clearly state the blocker and the smallest decision or artifact needed to continue.

## Common Mistakes

- Starting at the wrong skill because the request was not classified first.
- Treating `dev-cycle` as a replacement for the underlying skills instead of a controller over them.
- Ending after implementation without review and verification.
