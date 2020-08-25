import * as fs from "fs";
import * as path from "path";

export const appRootDir = fs.realpathSync(process.cwd());
export const resolveRoot = (relativePath: string): string =>
  path.resolve(appRootDir, relativePath);

export const resolvePackage = (packageName: string): string =>
  resolveRoot(`packages/${packageName}`);
