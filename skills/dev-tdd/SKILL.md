---
name: dev-tdd
description: Implement features, fixes, and behavior changes with a disciplined red-green-refactor loop. Use before writing production code when adding behavior, fixing bugs, changing APIs, refactoring with behavioral risk, or executing a plan that requires tests, regression coverage, line-level implementation scrutiny, and proof that each change is necessary.
---

# Dev TDD

## Overview

Drive implementation from observable behavior. Write a failing test, confirm it fails for the right reason, implement the smallest change, confirm it passes, then review the diff at both line and system level.

This skill owns implementation discipline. It composes with `dev-plan`, `dev-review`, and language/framework diagnostics.

## Core Rules

- No production behavior change without a test or explicit user-approved exception.
- Test through public behavior whenever possible. Avoid testing private implementation details.
- Confirm red before green. A test that never failed did not prove the behavior.
- Implement the smallest code needed for the current test.
- Question every changed line: why is it needed, what behavior proves it, and what contract can it affect?
- After green, step back and review the whole design for coupling, clarity, and unintended scope.
- Stay generic. Detect test runner and commands from the repo; defer stack-specific tactics to language/framework skills.

## Workflow

### 1. Select the Next Behavior

Choose one thin behavior slice from the approved plan or current bug:

| Behavior | User/system value | Observable evidence | Risk |
|---|---|---|---|
| [behavior] | [why it matters] | [test/check] | low/medium/high |

If the behavior is too broad, split it before writing tests.

### 2. Locate the Test Surface

Inspect existing tests and conventions:

- Test framework and command.
- Existing fixtures/helpers.
- Public API, UI, command, integration, or service boundary to test through.
- Nearby regression tests for similar behavior.

Document the choice:

| Test surface | Why this surface | Command |
|---|---|---|
| `[test path or boundary]` | [behavior-level reason] | `[targeted command]` |

### 3. RED: Write the Failing Test

Write the smallest test that proves the desired behavior or reproduces the bug.

Good test properties:

- Names the behavior clearly.
- Has one primary reason to fail.
- Uses real code where practical.
- Avoids mocking the thing being tested.
- Covers the expected result and important error/edge path when relevant.

Run the targeted test and record:

| Check | Evidence |
|---|---|
| Test fails | command output shows failure |
| Failure reason is correct | missing/incorrect behavior, not typo/setup |
| Existing unrelated tests are not the cause | failure isolated |

If the test passes immediately, fix the test or choose a missing behavior. If it fails for setup/typo reasons, repair the test until it fails for the intended reason.

### 4. GREEN: Minimal Implementation

Implement only what the failing test requires.

For each changed file, keep a line-level reasoning table mentally or in notes for non-trivial changes:

| Changed area | Reason | Proving test |
|---|---|---|
| [condition/function/state] | [needed behavior] | [test name] |

Avoid:

- Extra options, abstractions, or generalized APIs not required by the test.
- Refactoring unrelated code while still red.
- Broad rewrites when a local change proves the behavior.

Run the targeted test. If it fails, change production code, not the test, unless the test is demonstrably wrong.

### 5. REFACTOR: Clean While Green

Only after the test passes:

- Remove duplication.
- Improve names and boundaries.
- Simplify conditions.
- Extract helpers only when they reduce real complexity.
- Keep public behavior unchanged.

Run the relevant tests after each meaningful cleanup.

### 6. Review the Slice

Before moving to the next behavior:

| Review layer | Questions |
|---|---|
| Line level | Is each changed line necessary, tested, named clearly, and free of accidental behavior? |
| Function/module level | Is responsibility clear and cohesive? |
| Boundary level | Are inputs, outputs, errors, permissions, and compatibility intentional? |
| System level | Does the change still match the approved design and avoid unnecessary scope? |

Use `dev-review` for deeper review after a complete task or slice.

### 7. Repeat and Finish

Repeat red-green-refactor for the next behavior. When all slices are complete, hand off to `dev-verify`.

## Exceptions

Ask the user before skipping test-first implementation for:

- Throwaway prototypes.
- Generated code.
- Pure documentation changes.
- Mechanical formatting-only changes.
- Configuration changes where no reasonable automated test exists.

If an exception is approved, still define manual verification evidence.

## Anti-Patterns

- Writing production code before a failing test.
- Adding tests after implementation and calling it TDD.
- Testing mocks instead of behavior.
- Keeping untested exploratory code as the final implementation.
- Refactoring while red.
- Adding abstractions for imagined future requirements.
