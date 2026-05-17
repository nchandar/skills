#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
CLAUDE_DIR="$HOME/.claude"
CODEX_DIR="$HOME/.codex"
OPENCODE_DIR="$HOME/.config/opencode"
OPENCODE_CONFIG="$OPENCODE_DIR/opencode.jsonc"

log() {
  printf '%s\n' "$1"
}

ensure_dir() {
  mkdir -p "$1"
}

link_entry() {
  local src="$1"
  local dest="$2"

  ensure_dir "$(dirname "$dest")"

  if [ -e "$dest" ] && [ ! -L "$dest" ]; then
    log "skip existing non-link: $dest"
    return
  fi

  ln -sfn "$src" "$dest"
  log "linked: $dest -> $src"
}

install_claude() {
  log "Installing for Claude Code"
  ensure_dir "$CLAUDE_DIR/skills"
  ensure_dir "$CLAUDE_DIR/commands"

  for skill_dir in "$ROOT_DIR"/skills/*; do
    [ -d "$skill_dir" ] || continue
    link_entry "$skill_dir" "$CLAUDE_DIR/skills/$(basename "$skill_dir")"
  done

  for command_file in "$ROOT_DIR"/commands/*.md; do
    [ -f "$command_file" ] || continue
    link_entry "$command_file" "$CLAUDE_DIR/commands/$(basename "$command_file")"
  done

  log "Claude Code install complete. Restart Claude Code to pick up new skills and commands."
}

install_codex() {
  log "Installing for Codex"
  ensure_dir "$CODEX_DIR/skills"

  for skill_dir in "$ROOT_DIR"/skills/*; do
    [ -d "$skill_dir" ] || continue
    link_entry "$skill_dir" "$CODEX_DIR/skills/$(basename "$skill_dir")"
  done

  log "Codex install complete. Restart Codex to pick up the updated skill catalog."
}

install_opencode() {
  log "Installing for OpenCode"
  ensure_dir "$OPENCODE_DIR"

  if [ ! -f "$OPENCODE_CONFIG" ]; then
    printf '{\n  "$schema": "https://opencode.ai/config.json"\n}\n' > "$OPENCODE_CONFIG"
    log "created: $OPENCODE_CONFIG"
  fi

  ROOT_DIR="$ROOT_DIR" OPENCODE_CONFIG="$OPENCODE_CONFIG" node <<'EOF'
const fs = require('fs')

const rootDir = process.env.ROOT_DIR
const configPath = process.env.OPENCODE_CONFIG
const source = fs.readFileSync(configPath, 'utf8')
const config = Function(`"use strict"; return (${source});`)()

config.plugin = Array.isArray(config.plugin) ? config.plugin : []
if (!config.plugin.includes(rootDir)) config.plugin.push(rootDir)

fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n')
EOF

  log "OpenCode install complete. Fully quit and restart OpenCode to load the plugin, skills, and commands."
}

usage() {
  cat <<'EOF'
Usage: ./scripts/install.sh claude|codex|opencode|all
EOF
}

main() {
  case "${1:-}" in
    claude)
      install_claude
      ;;
    codex)
      install_codex
      ;;
    opencode)
      install_opencode
      ;;
    all)
      install_claude
      install_codex
      install_opencode
      ;;
    *)
      usage
      exit 1
      ;;
  esac
}

main "$@"
