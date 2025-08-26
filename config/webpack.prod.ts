import * as webpack from "webpack";
import { merge } from "webpack-merge";

import { config } from "./webpack.common";
import { optimization, output } from "./webpack";

const prodConfig: webpack.Configuration = {
  mode: "production",
  output: output,
  optimization: optimization,
};

export default merge(config, prodConfig);
