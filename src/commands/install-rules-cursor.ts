#!/usr/bin/env node
import { resolve, join } from "path";
import { copySync, ensureDirSync, readdirSync, statSync } from "fs-extra";
import { getConfigPath } from "../utils/fs";

// CLI argv parsing is done in bin/cli.ts — this file just exports the logic:

export async function installCursorRules(options: {
  global?: boolean;
  targetDir?: string;
  sourceDir?: string;
}) {
  // Determine target base folder
  const base = options.global
    ? resolve(getConfigPath(), "cursor", "rules")
    : resolve(options.targetDir || process.cwd(), ".cursor", "rules");

  ensureDirSync(base);

  // Where your prompt-templates live
  const srcRoot = resolve(
    options.sourceDir || resolve(__dirname, "../../../prompt-templates")
  );

  // Iterate task folders
  const tasks = readdirSync(srcRoot).filter((name) => {
    const p = join(srcRoot, name);
    return statSync(p).isDirectory();
  });

  let installed = 0;
  for (const task of tasks) {
    const taskDir = join(srcRoot, task);
    const modes = readdirSync(taskDir).filter((f) => f.endsWith(".md"));
    for (const file of modes) {
      const src = join(taskDir, file);
      // e.g. create-prd.autonomous.md
      const destName = `${task}.${file}`;
      const dest = join(base, destName);
      copySync(src, dest, { overwrite: true });
      console.log(`✓ ${destName}`);
      installed++;
    }
  }

  console.log(`\nInstalled ${installed} Cursor rule(s) to:\n  ${base}`);
}
