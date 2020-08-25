import * as dotenv from "dotenv";
import { spawn } from "child_process";
import { resolveRoot } from "./utils/paths";

// TODO: auto find env file
dotenv.config({
  path: resolveRoot(".env.local"),
});

const appName = "emu";
const webDir = "web";
const apiDir = "api";

spawn("yarn", ["workspace", `@${appName}/${webDir}`, "dev"], {
  stdio: "inherit",
});
spawn("yarn", ["workspace", `@${appName}/${apiDir}`, "dev"], {
  stdio: "inherit",
});
