// import * as dotenv from "dotenv";

import { toggleCatalog } from "./modules/catalog.js";
import { createMenu } from "./modules/menu.js";
import { mobMenu } from "./modules/mobileMenu.js";

const handler = () => {
  createMenu();
  toggleCatalog();
  mobMenu();
};

document.addEventListener("DOMContentLoaded", handler);
