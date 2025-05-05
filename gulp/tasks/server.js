import * as $ from "../plugins.js";
import argv from "../argv.js";
import paths from "../paths.js";
import browser from "../browser.js";

export const server = (cb) => {
  let middleware = [];

  if (argv.spa) {
    middleware.push($.connectHistoryApiFallback());
  }

  browser.init({
    server: {
      baseDir: paths.dev,
    },
    notify: argv.notify,
    open: argv.open,
    port: argv.port,
    watch: true,
    // injectChanges: false,
    middleware,
  });
  cb();
};

export const reload = (cb) => {
  browser.reload();
  cb();
};
