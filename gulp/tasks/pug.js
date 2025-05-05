/* eslint-disable no-undef */
import * as $ from "../plugins.js";
import argv from "../argv.js";
import { makePlumber } from "../error.js";
import paths from "../paths.js";

let emittyPug;

export const pug = () => {
  const SRC = `${paths.pug}/pages/*.pug`;
  const DESTINATION = paths.destination;

  if (!emittyPug) {
    emittyPug = $.emitty.setup("_src", "pug", {
      makeVinylFile: true,
    });
  }

  if (!argv.cache) {
    return $.src(SRC)
      .pipe(makePlumber("pug"))
      .pipe(
        $.pug({
          pretty: argv.minifyHtml ? false : "\t",
        })
      )
      .pipe($.dest(DESTINATION));
  }

  return new Promise((resolve, reject) => {
    emittyPug.scan(global.emittyPugChangedFile).then(() => {
      $.src(SRC)
        .pipe(makePlumber("pug"))
        .pipe(emittyPug.filter(global.emittyPugChangedFile))
        .pipe(
          $.pug({
            pretty: argv.minifyHtml ? false : "\t",
          })
        )
        .pipe($.dest(DESTINATION))
        .on("end", resolve)
        .on("error", reject);
    });
  });
};
