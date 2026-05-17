---
name: dev-execute
description: Execute an approved implementation plan task by task and route each slice through the right workflow skills. Use when a design or plan is ready and the work should move through implementation, debugging when needed, review, and final verification until complete or blocked.
---

# Dev Execute

## Overview

Use this skill to carry an approved plan through to completion. It is the execution orchestrator: it chooses the next task, routes implementation slices through `dev-tdd`, uses `dev-debug` when the cause of failure is unclear, and always ends with `dev-review` and `dev-verify`.

## When To Use

Use this skill when:

- an implementation plan is ready
- the work spans multiple tasks or slices
- the user wants the work carried through instead of only planned

Do not use this skill when:

- the design is still unclear; use `dev-brainstorm` or `dev-grill-with-docs`
- you only need a single implementation slice; use `dev-tdd`

## Workflow

1. Read the approved plan and identify the next executable slice.
2. For a normal implementation slice, use `dev-tdd`.
3. If the root cause is unclear, use `dev-debug` first, then return to `dev-tdd`.
4. Mark progress task by task and continue until complete or genuinely blocked.
5. Run `dev-review` before completion.
6. Run `dev-verify` before declaring the work done.

Default posture: continue automatically until blocked or complete. Do not stop for unnecessary check-ins.

## Outputs And Handoffs

This skill should leave behind:

- completed plan tasks or clear blocker status
- evidence from implementation checks
- a review pass via `dev-review`
- a completion proof via `dev-verify`

## Common Mistakes

- Treating planning as execution.
- Using this skill for a single isolated slice that should just go through `dev-tdd`.
- Skipping review or verification.
- Stopping after implementation without carrying the work to completion.
