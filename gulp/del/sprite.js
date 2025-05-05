import * as $ from "../plugins.js";
import paths from "../paths.js";

export const cleanSprite = () => {
  return $.deleteAsync(`${paths.destination}/img/sprites.svg`);
};
