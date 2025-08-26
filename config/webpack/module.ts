import { WebpackTypes } from "./types";

const module = {
  rules: [
    {
      test: /\.s?css$/,
      use: ["css-loader"],
    },
    {
      test: /\.(png|jpe?g|webp|svg)$/i,
      type: "asset/resource",
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
    },
    {
      test: /\.ico$/i,
      type: "asset/resource",
    },
  ],
} satisfies WebpackTypes.Module;

export { module };
