#!/usr/bin/env node
import { Command } from "commander";
import { installCursorRules } from "../src/commands/install-rules-cursor";

const program = new Command();
program.name("pherder").description("Prompt Herder CLI").version("0.2.1");

program
  .command("install-rules <agent>")
  .description("Install rule-sets for a specific agent (e.g., cursor)")
  .option("-g, --global", "Install to global config directory")
  .option("-t, --target <dir>", "Target project directory")
  .option("-s, --source <dir>", "Override templates source directory")
  .action(
    (
      agent: string,
      options: { global?: boolean; target?: string; source?: string }
    ) => {
      if (agent !== "cursor") {
        console.error(`Unknown agent: ${agent}`);
        process.exit(1);
      }
      installCursorRules({
        global: options.global,
        targetDir: options.target,
        sourceDir: options.source,
      });
    }
  );

program.parse(process.argv);
