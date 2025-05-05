import * as $ from "../plugins.js";
import argv from "../argv.js";
import { makePlumber } from "../error.js";
import paths from "../paths.js";

export const scss = () => {
  const isDev = $.mode.development();
  const SRC = `${paths.scss}/style.scss`;
  const DESTINATION = `${paths.destination}/css/`;

  const postcssPlugins = [
    $.autoprefixer({
      grid: "autoplace",
    }),
    $.sortMediaQueries({
      sort: "desktop-first",
    }),
  ];

  if (!isDev) {
    postcssPlugins.push($.cssPrettify());
  }

  if (argv.minifyCss) {
    postcssPlugins.push(
      $.cssnano({
        preset: [
          "default",
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      })
    );
  }

  return $.src(SRC)
    .pipe(makePlumber("scss"))
    .pipe($.sourcemaps.init())
    .pipe($.sass().on("error", $.sass.logError))
    .pipe($.postcss(postcssPlugins))
    .pipe($.if(isDev, $.sourcemaps.write(".")))
    .pipe($.dest(DESTINATION));
};
