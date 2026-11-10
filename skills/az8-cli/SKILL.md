---
name: az8-cli
description: Install or update the official AZ8 CLI and operate AZ8 Studio safely through it. Use when a user asks an agent to set up AZ8 CLI; list or create AZ8 Projects; inspect, create, edit, organize, or undo Project Canvas content; run generation; transfer media; or collaborate through persistent Sessions. Do not use for source-code development of az8-cli itself.
---

# Use AZ8 CLI

Treat this Skill as a bootstrap and discovery adapter. Keep the CLI current when practical, then
load operational knowledge from the CLI so the instructions match the executable version.

## Bootstrap the CLI

1. Respect an explicit request not to install, update, or otherwise change the CLI.

2. Require Node.js 22.12 or newer before installing or updating. Check the active runtime:

   ```bash
   node --version
   ```

3. Resolve `az8` from `PATH`, if present, and inspect its version:

   ```bash
   command -v az8
   az8 --version
   ```

4. When npm and network access are available, discover the latest stable release:

   ```bash
   npm view @everfir/az8-cli dist-tags.latest
   ```

5. If `az8` is missing or older than the latest stable release, install or update it without asking
   for routine confirmation unless the user explicitly opted out:

   ```bash
   npm install -g @everfir/az8-cli@latest
   ```

   Do not use `sudo`, weaken package-manager security settings, or modify unrelated dependencies.
   Do not downgrade a newer development or prerelease build automatically.

6. Re-resolve `az8` and verify the effective version after any installation or update. If the
   latest release cannot be checked but a working `az8` is already available, continue with the
   installed version and report that freshness could not be verified. If installation is required
   but the Node.js version, package-manager permissions, or network access prevent it, explain the
   blocker and provide the exact install command instead of bypassing the CLI.

## Load version-matched guidance

1. Before the first AZ8 Project or Canvas action in the task, run:

   ```bash
   az8 guide
   ```

2. Read the complete output and follow it as the source of truth for platform concepts,
   authentication, interaction modes, SOPs, safety, recovery, and completion.

3. After reading the complete guide, load a task bundle when useful:

   ```bash
   az8 guide --task <task>
   ```

   Use `az8 guide --format json` when structured ingestion is more reliable.

4. If `az8 guide` is unavailable or invalid, stop. Do not fall back to raw HTTP, Yjs, repository
   source, npm README examples, remembered schemas, or guessed commands.

## Operate

- Follow the built-in guide for authentication and prefer `az8 login` when sign-in is required.
  Treat any operator-provisioned credential source as opaque. Never print, copy, or expose secrets.
- Query the selected Project's runtime capabilities exactly as the guide directs. Treat those
  descriptors as authoritative for available Operations and input schemas.
- Execute all Project and Canvas work through `az8`. Preserve structured results, Receipt
  identities, ordering, exit classification, and lifecycle semantics.
- Report unavailable or deferred capabilities honestly. Never bypass the CLI to approximate them.

## Keep the adapter thin

Do not add AZ8 domain explanations, Operation lists, schemas, generation recipes, retry rules, or
media behavior to this Skill. Add or correct that knowledge in the CLI's built-in Agent Guide and
release a new CLI version; this adapter should continue to delegate through `az8 guide`.
