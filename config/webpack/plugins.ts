import * as HtmlBundlerPlugin from "html-bundler-webpack-plugin";

import { WebpackTypes } from "./types";

const plugins = [
  new HtmlBundlerPlugin({
    entry: {
      index: "./src/index.html",
    },
  }),
] satisfies WebpackTypes.Plugins;

export { plugins };
