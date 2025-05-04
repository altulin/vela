import { width } from "./helpers.js";

export const toggleCatalog = () => {
  if (width < 769) return;
  const burger = document.querySelector(".burger__btn");
  const catalog = document.querySelector(".catalog__inner");

  if (!burger || !catalog) return;

  burger.addEventListener("click", function () {
    this.classList.toggle("burger__btn--active");
    catalog.classList.toggle("catalog__inner--active");
  });
};
