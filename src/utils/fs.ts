import { homedir } from "os";
import { resolve } from "path";

export function getConfigPath(): string {
  return process.env.XDG_CONFIG_HOME
    ? resolve(process.env.XDG_CONFIG_HOME)
    : resolve(homedir(), ".config");
}
