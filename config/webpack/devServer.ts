import * as path from "node:path";

import { WebpackTypes } from "./types";

const devServer = {
  static: path.join(__dirname, "dist"),
  watchFiles: {
    paths: ["src/**/*.*"],
    options: {
      usePolling: true,
    },
  },
} satisfies WebpackTypes.DevServer;

export { devServer };
