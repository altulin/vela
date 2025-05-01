import argv from "../../argv.js";
import path from "path";

export function svgoConfig(minify = argv.minifySvg) {
  return (file) => {
    const filename = path.basename(file.relative, path.extname(file.relative));

    return {
      js2svg: {
        pretty: minify,
        indent: 2,
      },
      plugins: [
        {
          name: "cleanupIDs",
          params: {
            minify: true,
            prefix: `${filename}-`,
          },
        },
        "removeTitle",
        {
          name: "removeViewBox",
          active: false,
        },
        "sortAttrs",
      ],
    };
  };
}

// .pipe(
//   cheerio({
//     run($) {
//       $("[fill]").removeAttr("fill");
//       $("[stroke]").removeAttr("stroke");
//       // $("[style]").removeAttr("style");
//     },
//     parserOptions: { xmlMode: true },
//   })
// )
