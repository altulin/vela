import * as $ from "../../plugins.js";
import argv from "../../argv.js";
import paths from "../../paths.js";
import { makePlumber } from "../../error.js";

export const convertToWebP = () => {
  const SRC = `${paths.webp}/*.{png,jpg}`;
  const DESTINATION = `${paths.destination}/img`;

  return $.src(SRC, { removeBOM: false })
    .pipe($.changed(DESTINATION))
    .pipe($.if(argv.cache, $.newer(SRC)))
    .pipe(makePlumber("webp"))
    .pipe($.webp())
    .pipe($.dest(DESTINATION));
};
