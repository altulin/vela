import {
  body,
  header,
  link_js,
  fake,
  submenu,
  width,
  header_main_nav,
  fake_link,
  fake_right,
  fake_active,
} from "./helpers.js";

const backFake = (e) => {
  const id = e.target.dataset.id;

  const blocks = Array.from(header.querySelectorAll(`.${fake}`));
  const el = blocks.find((el) => el.dataset.id === id);
  el.classList.remove(fake_active);
  el.classList.add(fake_right);
};

const createFake = async (title, list, id) => {
  const divEl = document.createElement("div");
  divEl.classList.add(fake);
  divEl.classList.add(fake_right);
  const a = document.createElement("a");
  a.classList.add(fake_link);
  a.innerHTML = title;
  a.dataset.id = id;
  a.addEventListener("click", backFake);
  divEl.dataset.id = id;
  divEl.appendChild(a);
  divEl.appendChild(list);
  header.appendChild(divEl);
};

export const mobMenu = () => {
  if (width > 769) return;

  const burger = body.querySelector(".burger__btn");
  const menu = body.querySelector("#menu");
  const jsEl = Array.from(header.querySelectorAll(`.${link_js}`));

  const links = jsEl.filter((item) => {
    if (item.nextElementSibling && item.closest(`.${header_main_nav}`)) {
      return item.nextElementSibling.classList.contains(submenu);
    }
  });

  links.forEach(async (item) => {
    const title = item.querySelector("span").innerHTML;
    const list = item.nextElementSibling;
    const id = item.dataset.id;
    await createFake(title, list, id);

    item.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      const blocks = Array.from(header.querySelectorAll(`.${fake}`));
      const el = blocks.find((el) => el.dataset.id === id);
      el.classList.remove(fake_right);
      el.classList.add(fake_active);
    });
  });

  burger.addEventListener("click", () => {
    body.classList.toggle("page-body--overflow");
    menu.classList.toggle("nav--open");

    if (burger.classList.contains("nav--open")) {
      const blocks = Array.from(header.querySelectorAll(`.${fake_right}`));

      blocks.forEach((item) => item.classList.remove(fake_right));
    }
  });
};
