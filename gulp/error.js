import * as $ from "./plugins.js";

export const makePlumber = (name) => {
  return $.plumber({
    errorHandler: $.notify.onError(function (err) {
      return {
        title: name,
        message: err.message,
      };
    }),
  });
};
