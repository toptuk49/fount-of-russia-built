import * as webpack from "webpack";
import { merge } from "webpack-merge";

import { config } from "./webpack.common";
import { devServer } from "./webpack";

const devConfig: webpack.Configuration = {
  mode: "development",
  devServer: devServer,
};

export default merge(config, devConfig);
