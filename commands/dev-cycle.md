---
description: Run the full development cycle from idea to verified completion.
---

# Dev Cycle

Use the development workflow skills in sequence.

Request:
$ARGUMENTS

Default sequence:
1. Use `dev-brainstorm` if the goal, scope, design, or acceptance criteria are unclear.
2. Use `dev-plan` once the intent is approved or already clear.
3. Use `dev-tdd` to implement behavior slices with red-green-refactor.
4. Use `dev-review` after meaningful slices or when the final diff is ready.
5. Use `dev-verify` before declaring the work complete.

If the request is a bug with unknown root cause, start with `dev-debug`, then continue with TDD, review, and verify.
