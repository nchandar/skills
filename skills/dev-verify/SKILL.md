---
name: dev-verify
description: Prove that completed work matches the approved intent before declaring it done. Use after implementation, bug fixes, refactors, reviews, or plan execution to run the right checks, inspect the final diff, compare against requirements, record evidence, and call out any remaining risk.
---

# Dev Verify

## Overview

Verification is the final proof step. Confirm the implementation matches the intended behavior, that tests and checks pass for the right reasons, and that any remaining risk is explicit.

This skill verifies completion. It does not expand scope or replace implementation review.

## When To Use

Use this skill when:

- implementation is nearly complete
- the final diff is ready to be checked against the plan or request
- the user wants proof that the work is actually done

Do not use this skill when:

- the code still needs a normal review pass; use `dev-review`
- the implementation is still being planned or built

## Workflow

1. Build a verification matrix from the design, plan, review findings, or user request.
2. Run the smallest relevant checks first, then broader checks if risk warrants it.
3. Inspect the final diff for unrelated edits, accidental behavior, or shallow test coverage.
4. Compare the result against the original requirement or plan.
5. Record residual risk for any unrun or inconclusive checks.
6. State clearly whether the work is verified.

## Outputs And Handoffs

Default verification output:

```markdown
Verification

| Check | Result | Evidence |
|---|---|---|
| [command/check] | pass/fail/not run | [short output or reason] |

Requirement Coverage:
| Requirement | Status | Evidence |
|---|---|---|
| [requirement] | done/partial/missing | [evidence] |

Residual Risk:
- [none, or specific risk]
```

If critical verification is missing, do not claim completion.

## Common Mistakes

- Declaring done because one targeted test passed.
- Ignoring warnings, skipped tests, or flaky output.
- Failing to compare the result against the original requirement.
- Treating manual checks as evidence without recording what was done.
- Hiding unrun checks.
