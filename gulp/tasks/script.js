import * as $ from "../plugins.js";
import { makePlumber } from "../error.js";
import getConfig from "../../webpack.config.js";

export const js = () => {
  const config = getConfig();
  const {
    entry,
    output: { filename, path },
  } = config;

  return $.src(entry)
    .pipe(makePlumber("script"))
    .pipe($.webpackStream(config))
    .pipe($.rename(filename))
    .pipe($.dest(path));
};
