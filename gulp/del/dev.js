import * as $ from "../plugins.js";
import paths from "../paths.js";

export const cleanDev = () => {
  return $.deleteAsync(paths.dev);
};
