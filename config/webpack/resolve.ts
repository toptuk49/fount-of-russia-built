import * as path from "node:path";

import { WebpackTypes } from "./types";

const resolve = {
  extensions: [".tsx", ".ts", ".js"],
  alias: {
    "@images": path.resolve(process.cwd(), "src/images"),
    "@styles": path.resolve(process.cwd(), "src/styles"),
    "@scripts": path.resolve(process.cwd(), "src/scripts"),
    "@fonts": path.resolve(process.cwd(), "src/fonts"),
    "@public": path.resolve(process.cwd(), "public"),
  },
} satisfies WebpackTypes.Resolve;

export { resolve };
