import { width } from "./helpers.js";

export const toggleCatalog = () => {
  if (width < 769) return;
  const header = document.querySelector("#header");
  const burger = header.querySelector(".burger__btn");
  const catalog = header.querySelector(".catalog__inner");

  if (!burger || !catalog || !header) return;

  burger.addEventListener("click", function () {
    this.classList.toggle("burger__btn--active");
    catalog.classList.toggle("catalog__inner--active");
    header.classList.toggle("header--catalog-open");
  });
};
