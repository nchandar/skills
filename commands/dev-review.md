---
description: Review a diff, PR, or generated code for correctness and risk.
---

# Dev Review

Use the `dev-review` skill.

Request:
$ARGUMENTS

Instructions:
- Review the diff first, then inspect surrounding context.
- Question every changed line and then step back to system-level behavior.
- Lead with findings ordered by severity.
- Cite file paths and line numbers when possible.
- Include residual risk if no findings are found.
