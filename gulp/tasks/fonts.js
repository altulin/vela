import * as $ from "../plugins.js";
import { makePlumber } from "../error.js";
import paths from "../paths.js";

const SRC = paths.fonts;
const DESTINATION = `${paths.destination}/fonts`;
const ttf = `${SRC}/*.ttf`;

const convert = (plugin) => {
  return $.src(ttf, {
    encoding: false, // Important!
    removeBOM: false,
  })
    .pipe(makePlumber("fonts"))
    .pipe(plugin)
    .pipe($.dest(SRC));
};

export const ttf2Woff = () => {
  return convert($.ttf2woff());
};

export const ttf2Woff2 = () => {
  return convert($.ttf2woff2());
};

export const cleanTtf = () => {
  return $.deleteAsync([ttf]);
};

export const copyFonts = () => {
  return $.src(`${SRC}/**/*`).pipe($.dest(DESTINATION));
};
