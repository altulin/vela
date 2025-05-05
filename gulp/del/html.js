import * as $ from "../plugins.js";
import paths from "../paths.js";

export const cleanHtml = () => {
  return $.deleteAsync(`${paths.destination}/**/*.html`);
};
