---
name: dev-plan
description: Convert an approved design, bug diagnosis, or clear requirement into an executable implementation plan before editing code. Use when the user wants a technical task breakdown, execution checklist, TDD-ready slices, or a step-by-step plan with file impact, tests, review gates, and verification.
---

# Dev Plan

## Overview

Turn approved intent into a plan that an engineer or agent can execute without guessing. The plan should break work into small verifiable slices, explain why each file changes, and make testing, review, and verification explicit.

This skill owns execution planning. It does not implement production code.

## When To Use

Use this skill when:

- the design is approved and implementation tasks need to be sequenced
- a bug is diagnosed and the fix needs a safe rollout plan
- the user asks to break work into steps, slices, or checklists

Do not use this skill when:

- the design is still unclear; use `dev-brainstorm` or `dev-grill-with-docs`
- the work should be executed now from an existing plan; use `dev-execute`

## Workflow

1. Confirm the goal, scope, constraints, and verification requirements.
2. Inspect the repository areas, tests, and commands that shape the implementation.
3. Choose the simplest implementation shape that fits the approved design.
4. Break the work into reviewable slices.
5. For each slice, list the affected files, the reason they change, the proving tests or checks, and the expected evidence.
6. Add review and verification gates.
7. Hand off to `dev-execute`.

Each task should usually answer:

- what behavior or outcome it delivers
- which files change and why
- which test or check proves it
- what review concern matters most

## Outputs And Handoffs

A plan should usually include:

- goal and scope
- existing system map
- task list in execution order
- test strategy
- review gates
- verification checklist
- open questions, if any remain

Default handoff: `dev-execute`

If the user asks for a durable plan artifact or the repo already has a convention, write the plan there. Otherwise keep it conversational.

## Common Mistakes

- Planning before the goal is actually clear.
- Creating tasks that are too large to review or verify independently.
- Listing files without saying why they change.
- Hiding uncertainty inside vague steps.
- Writing implementation code instead of a plan.
