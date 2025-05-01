import * as $ from "../plugins.js";
import paths from "../paths.js";

export const cleanBuild = () => {
  return $.deleteAsync(`${paths.dist}_**`);
};
