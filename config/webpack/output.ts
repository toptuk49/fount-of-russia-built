import * as path from "node:path";

import { WebpackTypes } from "./types";

const output = {
  path: path.resolve(__dirname, "./dist"),
  clean: true,
} satisfies WebpackTypes.Output;

export { output };
