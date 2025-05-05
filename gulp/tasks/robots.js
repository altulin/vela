import paths from "../paths.js";
import * as $ from "../plugins.js";
import argv from "../argv.js";

export const robots = () => {
  if (!argv.robots) return Promise.resolve();

  const isTest = $.mode.test();

  const SRC = `.robots.${isTest ? "development" : "production"}.txt`;
  const DESTINATION = paths.destination;

  return $.src(SRC).pipe($.rename("robots.txt")).pipe($.dest(DESTINATION));
};
