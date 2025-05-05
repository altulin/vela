import { cleanDev, cleanBuild } from "./gulp/del/index.js";
import * as $ from "./gulp/plugins.js";
import * as t from "./gulp/tasks/index.js";
import paths from "./gulp/paths.js";
import * as t_img from "./gulp/tasks/img/index.js";

const watch = (cb) => {
  $.watch(`${paths.scss}/**/*.scss`, t.scss);
  $.watch(`${paths.pug}/**/*.pug`, t.pug);
  $.watch(`${paths.js}/**/*.js`, t.js);
  $.watch(paths.raster, t_img.optimizeRaster);
  $.watch(paths.webp, t_img.convertToWebP);
  $.watch(paths.sprite, $.series(t_img.makeSvgSprite));
  $.watch(paths.svg, t_img.svgMin);
  cb();
};

const fonts = (cb) => {
  // $.series(t.ttf2Woff, t.ttf2Woff2, t.cleanTtf, t.copyFonts)();
  $.series(t.cleanTtf, t.copyFonts)();
  cb();
};

const img = (cb) => {
  $.series(
    t_img.optimizeRaster,
    t_img.convertToWebP,
    t_img.makeSvgSprite,
    t_img.svgMin
  )();
  cb();
};

const develop = (cb) => {
  $.series(cleanDev, $.parallel(t.pug, t.scss, fonts, t.js, img))();
  cb();
};

export const development = (cb) => {
  $.series(develop, $.parallel(t.server, watch))();
  cb();
};

export const production = (cb) => {
  $.series(cleanBuild, $.parallel(develop, t.robots))();
  cb();
};
