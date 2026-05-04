---
name: dev-verify
description: Prove that completed work matches the approved intent before declaring it done. Use after implementation, bug fixes, refactors, reviews, or plan execution to run/check relevant tests, inspect the final diff, compare against requirements, verify docs and operational concerns, record evidence, and identify residual risk.
---

# Dev Verify

## Overview

Verification is the final proof step. Confirm the implementation matches the approved design, tests pass for the right reasons, changed lines are intentional, and remaining risks are explicit.

This skill verifies completion; it does not expand scope.

## Core Rules

- Verify against intent, not just against green tests.
- Inspect the final diff line by line and the system behavior as a whole.
- Prefer automated evidence, but document manual evidence when automation is not practical.
- Run the smallest relevant checks first, then broader checks when risk warrants.
- Treat warnings, skipped tests, flaky results, and unrun checks as residual risk.
- Stay generic. Detect commands from the repo and use language/framework skills when applicable.
- Do not claim completion if critical verification is missing.

## Workflow

### 1. Build the Verification Matrix

Create a matrix from the design/plan/review:

| Requirement or risk | Evidence needed | Source |
|---|---|---|
| [behavior] | [test/manual check/log/metric] | design/plan/review |
| [edge case] | [test/check] | design/bug |

If no design/plan exists, infer from the user request and diff, then state assumptions.

### 2. Run Relevant Checks

Discover commands from repo tooling. Typical categories:

| Category | When to run | Evidence |
|---|---|---|
| Targeted tests | changed behavior or bug fix | focused pass |
| Nearby/regression tests | affected module/feature | pass |
| Typecheck/compile | typed or compiled project | pass |
| Lint/static analysis | repo uses it | pass or documented warnings |
| Build/package | delivery artifact affected | pass |
| Manual check | UI/integration/external system not fully automated | steps and observed result |

If a command cannot run, record why and what risk remains.

### 3. Inspect the Final Diff

Review final changes:

| Diff question | Expected answer |
|---|---|
| Does every changed line support the approved behavior, test, refactor, or docs? | yes |
| Are there unrelated edits? | no, or explicitly justified |
| Are public contracts, errors, and data flow intentional? | yes |
| Are tests meaningful and not just coverage theater? | yes |
| Are generated or lock files expected? | yes/no with reason |

Use `dev-review` if the diff needs a separate review pass.

### 4. Compare Against the Plan

| Plan item | Status | Evidence |
|---|---|---|
| [task/requirement] | done / partial / not done | [test/check/diff] |

For partial or missing items, do not bury them in a summary. State them as blockers or residual risk.

### 5. Check Delivery Concerns

Only include relevant rows:

| Concern | Verified? | Evidence or risk |
|---|---|---|
| Backward compatibility | yes/no/n/a | [evidence] |
| Migration/versioning | yes/no/n/a | [evidence] |
| Security/privacy | yes/no/n/a | [evidence] |
| Observability/errors | yes/no/n/a | [evidence] |
| Rollout/rollback | yes/no/n/a | [evidence] |
| Docs/user guidance | yes/no/n/a | [evidence] |

### 6. Final Verification Report

Use this format:

```markdown
Verification

| Check | Result | Evidence |
|---|---|---|
| [command/check] | pass/fail/not run | [short output or reason] |

Diff Review:
- [line-level/system-level conclusion]

Requirement Coverage:
| Requirement | Status | Evidence |
|---|---|---|
| [requirement] | done/partial/missing | [evidence] |

Residual Risk:
- [none, or specific unverified risk]
```

If everything required is verified, say the work is verified. If not, say exactly what remains.

## Anti-Patterns

- Declaring done because one targeted test passed.
- Ignoring skipped tests, warnings, or flaky output.
- Failing to compare against the original requirement.
- Treating manual testing as evidence without recording steps and result.
- Hiding unrun checks.
- Mixing new implementation work into final verification.
