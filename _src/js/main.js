// import * as dotenv from "dotenv";

import { toggleCatalog } from "./modules/catalog.js";
import { createMenu } from "./modules/menu.js";
import { mobMenu } from "./modules/mobileMenu.js";
import { stickyHead } from "./modules/scroll.js";

const handler = () => {
  createMenu();
  toggleCatalog();
  mobMenu();
  stickyHead();
};

document.addEventListener("DOMContentLoaded", handler);
