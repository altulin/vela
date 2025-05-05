import * as $ from "./plugins.js";
// import { parseTime } from "./parseTime.js";

const SRC = "./_src";
const DIST = "./dist";
const DEV = "./dev";
const IMG = `${SRC}/img`;

export default {
  scss: `${SRC}/scss`,
  js: `${SRC}/js`,
  pug: `${SRC}/pug`,
  fonts: `${SRC}/fonts`,
  raster: `${IMG}/raster`,
  webp: `${IMG}/webp`,
  sprite: `${IMG}/sprite`,
  svg: `${IMG}/svg`,
  // destination: $.mode.development() ? DEV : `${DIST}_${parseTime()}`,
  destination: $.mode.development() ? DEV : DIST,
  dist: DIST,
  dev: DEV,
};
