---
name: init-claude-settings
description: Bootstrap Niranjan's personal Claude Code settings on a new Mac. Writes the Catppuccin Mocha statusline script and applies settings.json (theme, voice, read-only permission allowlist). Safe to rerun — merges with existing settings rather than replacing them.
---

# Init Claude Settings

## Overview

Applies Niranjan's personal Claude Code configuration to the current machine. Run this on any new Mac or Omarchy install to get the same environment.

## What Gets Applied

1. **Statusline script** at `~/.claude/statusline-command.sh`
   - Catppuccin Mocha colors (24-bit ANSI)
   - Segments: path (󰉋), git branch (), session cost ($), context usage (󰾆), Pro rate limit (󰖠), time (󰥔)
   - Git and usage segments appear only when data is available

2. **`~/.claude/settings.json`** settings:
   - `statusLine` pointing to the script
   - `theme: dark`
   - Voice mode (hold-to-talk)
   - Read-only permission allowlist (no prompts for reads, git queries, web fetches)

## Workflow

1. Write the statusline script (create or overwrite).
2. Read existing `~/.claude/settings.json` (or start from `{}`).
3. Merge in the required settings — preserve any keys already present that aren't in this list.
4. Write the merged settings back.
5. Confirm what was written.

## Statusline Script Content

Write this exactly to `~/.claude/statusline-command.sh`:

```bash
#!/usr/bin/env bash
# Claude Code statusLine script
# Colors: Catppuccin Mocha via ANSI 24-bit truecolor escape codes

input=$(cat)
cwd=$(echo "$input" | jq -r '.cwd // .workspace.current_dir // empty')

# --- Catppuccin Mocha palette (24-bit ANSI) ---
fg_base="\e[38;2;30;30;46m"         # #1e1e2e base (dark)
bg_lavender="\e[48;2;180;190;254m"  # #b4befe path
bg_peach="\e[48;2;250;179;135m"     # #fab387 git
bg_mauve="\e[48;2;203;166;247m"     # #cba6f7 time
bg_yellow="\e[48;2;249;226;175m"    # #f9e2af cost
bg_blue="\e[48;2;137;180;250m"      # #89b4fa context
bg_green="\e[48;2;166;227;161m"     # #a6e3a1 rate limit ok
bg_red="\e[48;2;243;139;168m"       # #f38ba8 rate limit high
reset="\e[0m"

# --- Shortened path (max 3 levels, folder icon 󰉋) ---
if [ -n "$cwd" ]; then
  home="$HOME"
  display="${cwd/#$home/\~}"
  IFS='/' read -ra parts <<< "$display"
  total=${#parts[@]}
  if [ "$total" -le 3 ]; then
    short_path="$display"
  else
    short_path="…/${parts[$total-2]}/${parts[$total-1]}"
  fi
  path_part="${bg_lavender}${fg_base} 󰉋 ${short_path} ${reset}"
else
  path_part=""
fi

# --- Git branch + dirty indicators ---
git_part=""
if git -C "${cwd:-$PWD}" rev-parse --is-inside-work-tree --no-optional-locks 2>/dev/null | grep -q true; then
  branch=$(git -C "${cwd:-$PWD}" symbolic-ref --short HEAD 2>/dev/null \
           || git -C "${cwd:-$PWD}" rev-parse --short HEAD 2>/dev/null)
  staged=""
  unstaged=""
  porcelain=$(git -C "${cwd:-$PWD}" status --porcelain 2>/dev/null)
  if echo "$porcelain" | grep -qE '^[MADRC]'; then staged="+"; fi
  if echo "$porcelain" | grep -qE '^.[MDAU?]'; then unstaged="!"; fi
  stash_count=$(git -C "${cwd:-$PWD}" stash list 2>/dev/null | wc -l | tr -d ' ')
  stash_part=""
  if [ "$stash_count" -gt 0 ] 2>/dev/null; then stash_part=" *${stash_count}"; fi
  changes="${staged}${unstaged}"
  if [ -n "$changes" ]; then
    git_part="${bg_peach}${fg_base}  ${branch} [${changes}]${stash_part} ${reset}"
  else
    git_part="${bg_peach}${fg_base}  ${branch}${stash_part} ${reset}"
  fi
fi

# --- Session cost ---
cost_part=""
cost_raw=$(echo "$input" | jq -r '.cost.total_cost_usd // empty')
if [ -n "$cost_raw" ] && [ "$cost_raw" != "null" ]; then
  cost_fmt=$(printf "%.4f" "$cost_raw" 2>/dev/null)
  cost_part="${bg_yellow}${fg_base} \$ ${cost_fmt} ${reset}"
fi

# --- Context window usage ---
ctx_part=""
ctx_pct=$(echo "$input" | jq -r '.context_window.used_percentage // empty')
if [ -n "$ctx_pct" ] && [ "$ctx_pct" != "null" ]; then
  ctx_int=$(printf "%.0f" "$ctx_pct" 2>/dev/null)
  ctx_part="${bg_blue}${fg_base} 󰾆 ${ctx_int}% ${reset}"
fi

# --- Rate limit (5-hour window, Pro plan) ---
rate_part=""
rate_pct=$(echo "$input" | jq -r '.rate_limits.five_hour.used_percentage // empty')
if [ -n "$rate_pct" ] && [ "$rate_pct" != "null" ]; then
  rate_int=$(printf "%.0f" "$rate_pct" 2>/dev/null)
  rate_left=$((100 - rate_int))
  if [ "$rate_int" -ge 80 ]; then
    rate_bg="${bg_red}"
  else
    rate_bg="${bg_green}"
  fi
  rate_part="${rate_bg}${fg_base} 󰖠 ${rate_left}% left ${reset}"
fi

# --- Current time (HH:MM) ---
time_part="${bg_mauve}${fg_base} 󰥔 $(date +%H:%M) ${reset}"

# --- Assemble ---
parts_out=()
[ -n "$path_part" ] && parts_out+=("$path_part")
[ -n "$git_part"  ] && parts_out+=("$git_part")
[ -n "$cost_part" ] && parts_out+=("$cost_part")
[ -n "$ctx_part"  ] && parts_out+=("$ctx_part")
[ -n "$rate_part" ] && parts_out+=("$rate_part")
[ -n "$time_part" ] && parts_out+=("$time_part")

printf "%b" "$(IFS=' '; echo "${parts_out[*]}")"
```

## Settings to Merge Into ~/.claude/settings.json

Merge these keys. Do not remove keys that are already present and not listed here.

```json
{
  "statusLine": {
    "type": "command",
    "command": "bash ~/.claude/statusline-command.sh"
  },
  "theme": "dark",
  "voiceEnabled": true,
  "voice": {
    "enabled": true,
    "mode": "hold"
  },
  "permissions": {
    "allow": [
      "Read",
      "WebFetch",
      "WebSearch",
      "Bash(ls)",
      "Bash(ls *)",
      "Bash(cat *)",
      "Bash(find *)",
      "Bash(grep *)",
      "Bash(head *)",
      "Bash(tail *)",
      "Bash(wc *)",
      "Bash(echo *)",
      "Bash(which *)",
      "Bash(pwd)",
      "Bash(env)",
      "Bash(jq *)",
      "Bash(git status)",
      "Bash(git status *)",
      "Bash(git log)",
      "Bash(git log *)",
      "Bash(git diff)",
      "Bash(git diff *)",
      "Bash(git show)",
      "Bash(git show *)",
      "Bash(git stash list)",
      "Bash(git stash list *)",
      "Bash(git branch)",
      "Bash(git branch *)",
      "Bash(git remote *)",
      "Bash(git rev-parse *)",
      "Bash(git symbolic-ref *)",
      "Bash(git blame *)"
    ]
  }
}
```

## Notes

- The statusline script requires `jq` and `git` to be installed (both present on any standard Mac/Omarchy setup).
- Nerd Font is required for the icons (󰉋  󰾆 󰖠 󰥔) — Omarchy installs one by default.
- The `permissions.allow` array should be merged with any existing entries, not replaced.
- Cost/context/rate-limit segments appear only after the first API response in a session.
