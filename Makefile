SHELL := /bin/bash

.PHONY: install-claude install-codex install-opencode install-all

install-claude:
	./scripts/install.sh claude

install-codex:
	./scripts/install.sh codex

install-opencode:
	./scripts/install.sh opencode

install-all:
	./scripts/install.sh all
