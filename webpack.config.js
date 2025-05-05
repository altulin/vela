import TerserPlugin from "terser-webpack-plugin";
import paths from "./gulp/paths.js";
import argv from "./gulp/argv.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const getConfig = () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const DESTINATION = `${paths.destination}/js`;

  return {
    entry: `./${paths.js}/main.js`,
    output: {
      filename: "script.js",
      path: path.resolve(__dirname, DESTINATION),
    },
    mode: "production",
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              beautify: !argv.minifyJs,
              indent_level: 2,
              max_line_len: 120,
            },
          },
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
        },
      ],
    },
  };
};

export default getConfig;
