# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**promptherder** (`pherder` CLI) - A TypeScript CLI tool for managing and transforming AI prompt templates. Currently in early development stage.

## Commands

### Development
```bash
pnpm install    # Install dependencies
pnpm build      # Compile TypeScript to JavaScript
pnpm dev        # Watch mode - recompiles on changes
pnpm start      # Run the compiled CLI
```

### Running the CLI
After building, the CLI is available as:
- During development: `pnpm start`
- After global install: `pherder`

**Note**: No linting or testing commands are currently configured.

## Architecture

### Directory Structure
- `bin/cli.ts` - CLI entry point with shebang
- `src/` - Main source directory (currently empty - implement core logic here)
- `dist/` - Compiled output (gitignored)

### Technology Stack
- TypeScript with strict mode enabled
- pnpm as package manager
- Targets ES2020, outputs CommonJS
- No runtime dependencies yet

### Key Configuration
- TypeScript config: Strict mode, includes `bin/` and `src/`, outputs to `dist/`
- Package exports binary as `pherder`
- Scoped package: `@agentherder/promptherder`

## Development Guidelines

1. Place core application logic in `src/` directory
2. The CLI entry point (`bin/cli.ts`) should remain minimal
3. Build before testing CLI functionality
4. Use `pnpm dev` for automatic recompilation during development