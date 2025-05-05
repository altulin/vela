import MmenuLight from "mmenu-light";
import { width } from "./helpers.js";

//   burger.addEventListener("click", () => drawer.open());
//   // close.addEventListener("click", () => drawer.close());

export const mobMenu = () => {
  if (width > 768) return;

  const el = document.querySelector(".nav__list");
  const burger = document.querySelector(".burger__btn");

  if (!el || !burger) return;

  const menu = new MmenuLight(el, "(max-width: 768px)");
  const navigator = menu.navigation();
  const drawer = menu.offcanvas({
    position: "left",
  });

  burger.addEventListener("click", function () {
    if (this.classList.contains("open")) {
      this.classList.remove("open");
      drawer.close();
    } else {
      this.classList.add("open");
      drawer.open();
    }
  });
};
