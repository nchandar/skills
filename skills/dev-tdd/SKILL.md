---
name: dev-tdd
description: Implement a behavior change with a disciplined red-green-refactor loop. Use when adding behavior, fixing an already-diagnosed bug, changing an API with behavioral risk, or executing a planned slice that should be proven by a failing test before production code changes.
---

# Dev TDD

## Overview

Drive implementation from observable behavior. Write the failing test, confirm the failure is meaningful, implement the smallest production change, then clean up while staying green.

This skill owns slice-by-slice implementation discipline. It does not own root-cause investigation for unknown failures; use `dev-debug` first when needed.

## When To Use

Use this skill when:

- implementing a planned behavior slice
- fixing a bug whose cause is already understood
- adding or changing externally visible behavior
- executing a plan that explicitly calls for test-first implementation

Do not use this skill when:

- the root cause is still unknown; use `dev-debug`
- the user only wants planning; use `dev-plan`

## Workflow

1. Select the smallest behavior slice that can be proven independently.
2. Choose the right test surface and command.
3. Write the failing test and confirm it fails for the intended reason.
4. Implement the smallest production change that makes the test pass.
5. Refactor only while green.
6. Review the slice for unnecessary scope or accidental behavior.
7. Repeat for the next slice.

Default rules:

- test through public behavior whenever practical
- avoid mocking the thing being tested
- do not generalize beyond the current failing test
- do not refactor unrelated code while red

## Outputs And Handoffs

A completed slice should usually leave behind:

- a failing test that was observed before implementation
- the minimal production change needed for green
- evidence from the targeted test and any nearby regression tests

Default handoffs:

- to `dev-review` after a meaningful slice or task
- to `dev-verify` when the implementation is complete

## Common Mistakes

- Writing production code before a failing test.
- Letting a test pass immediately and pretending it proved anything.
- Testing mocks instead of behavior.
- Adding abstractions for imagined future requirements.
- Refactoring while still red.
