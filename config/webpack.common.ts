import * as webpack from "webpack";

import { module, plugins, resolve } from "./webpack";

const config: webpack.Configuration = {
  module: module,
  plugins: plugins,
  resolve: resolve,
};

export { config };
