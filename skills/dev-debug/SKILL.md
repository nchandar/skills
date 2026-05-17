---
name: dev-debug
description: Diagnose bugs, regressions, flaky behavior, and unexpected failures with an evidence-first workflow before implementing a fix. Use when something is broken, a test fails unexpectedly, behavior differs from expectation, or root cause is unknown and the next step is to reproduce, isolate, and explain the failure.
---

# Dev Debug

## Overview

Debug by evidence, not guessing. Reproduce the failure, shrink it to the tightest useful case, build hypotheses, and explain the root cause before changing production behavior.

This skill owns diagnosis. It hands implementation to `dev-tdd` once the cause is understood.

## When To Use

Use this skill when:

- something is broken and the cause is not yet clear
- a test fails unexpectedly
- behavior is flaky, intermittent, or timing-sensitive
- the user asks to investigate, isolate, or diagnose a problem

Do not use this skill when:

- the behavior to implement is already known; use `dev-tdd`
- the user wants a broad design conversation; use `dev-brainstorm`

## Workflow

1. Capture the symptom, expected behavior, scope, and current evidence.
2. Find the shortest reproduction path.
3. Minimize the failure until the behavior is isolated enough to reason about.
4. Build a small hypothesis table and test the most likely explanation first.
5. Trace the root cause through the relevant inputs, state, contracts, and timing assumptions.
6. Summarize the diagnosis and the regression test that should prove it.
7. Hand off to `dev-tdd` for the actual fix.

Prefer instrumentation, assertions, logs, and targeted tests over broad rewrites. Do not patch based on vibes.

## Outputs And Handoffs

A good debug result should usually include:

- observed behavior
- expected behavior
- minimal reproduction path
- root cause summary
- proof for the diagnosis
- regression test idea

Default handoff: `dev-tdd`

After implementation, use `dev-review` and `dev-verify` to confirm the fix is correct and complete.

## Common Mistakes

- Fixing before reproducing.
- Changing multiple variables at once.
- Treating the stack trace location as the root cause without tracing inputs.
- Adding broad retries, sleeps, or null checks without explaining why they are correct.
- Stopping at "works now" without a regression test story.
