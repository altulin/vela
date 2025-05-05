import { header, width } from "./helpers.js";

export const stickyHead = () => {
  if (width < 769) {
    return;
  }

  let lastScrollY = window.scrollY;

  const updateScrollDirection = () => {
    const scrollY = window.scrollY;
    const direction = scrollY > lastScrollY ? "down" : "up";

    // if (lastScrollY < 50) return;

    if (scrollY < 100) {
      return;
    }

    header.classList.remove(`header--down`);
    header.classList.remove(`header--up`);
    header.classList.add(`header--${direction}`);

    lastScrollY = scrollY > 0 ? scrollY : 0;
  };
  window.addEventListener("scroll", updateScrollDirection); // add event listener
};
