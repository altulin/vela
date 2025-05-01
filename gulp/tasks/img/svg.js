import * as $ from "../../plugins.js";
import paths from "../../paths.js";
import { makePlumber } from "../../error.js";
import { svgoConfig } from "./svgoConfig.js";

export const svgMin = () => {
  const SRC = `${paths.svg}/*.svg`;
  const DESTINATION = `${paths.destination}/img`;

  return $.src(SRC)
    .pipe(makePlumber("svg"))
    .pipe($.svgmin(svgoConfig()))
    .pipe($.dest(DESTINATION));
};
