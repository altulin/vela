import { link_js, link_js_active, submenu, width } from "./helpers.js";

const headerEl = "header";
const submenu_main = ".submenu--main";
const submenu_header = "submenu--header";
const submenu_list = "submenu__list";
const nav_link_header = "nav__link--header";

const catalog_inner = "catalog__inner";
const submenu_fake = "submenu--fake";
const catalog_list = "catalog__list";
const submenu_title = "submenu__title";
const catalog_nav = "catalog__nav";

const changeEl = async () => {
  const list = Array.from(document.querySelectorAll(submenu_main));
  const submenuMain = list.filter((item) => {
    return item.classList.contains(submenu_header);
  });

  submenuMain.forEach((item) => {
    const parent = item.parentNode;
    const divEl = document.createElement("div");
    const classes = item.className.split(" ");
    const clone = item.cloneNode(true);
    clone.className = "";
    clone.classList.add(submenu_list);
    if (classes.length > 0) {
      classes.forEach((item) => {
        divEl.classList.add(item);
      });
    }

    divEl.appendChild(clone);
    parent.appendChild(divEl);
    item.remove();
  });
};

const getLenAttr = (dataId) => {
  if (dataId === undefined) return dataId;
  return dataId.split("-").length;
};

export const createMenu = async () => {
  if (width < 769) {
    return;
  }

  // создание сетки
  changeEl();
  const header = document.querySelector(headerEl);
  const jsEl = Array.from(header.querySelectorAll(`.${link_js}`));

  // все ссылки
  const links = jsEl.filter((el) => {
    return (
      el.parentNode.querySelector(`.${submenu}`) !== null &&
      !el.classList.contains(nav_link_header)
    );
  });

  links.map((i) => i.classList.add(link_js_active));

  // все обертки для вложенных меню
  const mainSubmenuList = [
    ...Array.from(header.querySelectorAll(`div${submenu_main}`)),
    ...Array.from(header.querySelectorAll(`.${catalog_inner}`)),
  ];

  mainSubmenuList.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      const isCatalog = item.classList.contains(catalog_inner);
      const toLink = e.target.classList.contains(link_js_active);
      const fromFakeToFake =
        e.target.classList.contains(submenu_fake) &&
        e.relatedTarget.classList.contains(submenu_fake);

      const toHome = isCatalog
        ? e.target.classList.contains(catalog_list)
        : e.target.classList.contains(submenu_list);

      // ховер на предидущий блок блок
      if (fromFakeToFake) {
        if (
          getLenAttr(e.relatedTarget.dataset.id) >
          getLenAttr(e.target.dataset.id)
        ) {
          e.relatedTarget.remove();
        }
      }

      //  ховер в начало
      if (toHome) {
        Array.from(header.querySelectorAll(`.${submenu_fake}`)).forEach(
          (item) => item.remove()
        );
      }

      // ховер на актив ссылку
      if (toLink) {
        Array.from(header.querySelectorAll(`.${submenu_fake}`)).forEach(
          (el) => {
            if (getLenAttr(el.dataset.id) > getLenAttr(e.target.dataset.id)) {
              el.remove();
            }
          }
        );

        const isOpenedFake =
          Array.from(header.querySelectorAll(`.${submenu_fake}`)).filter(
            (el) => el.dataset.id === e.target.dataset.id
          ).length > 0;

        if (isOpenedFake) {
          return;
        } else {
          Array.from(header.querySelectorAll(`.${submenu_fake}`)).forEach(
            (el) => {
              if (
                getLenAttr(el.dataset.id) === getLenAttr(e.target.dataset.id)
              ) {
                el.remove();
              }
            }
          );
        }

        // отрисовка субменю
        const link = e.target;
        const p = document.createElement("p");
        p.classList.add(submenu_title);
        p.innerHTML = link.querySelector("a span").innerHTML;
        const clone = link.nextElementSibling.cloneNode(true);
        clone.prepend(p);
        clone.classList.add(submenu_fake);
        clone.dataset.id = e.target.dataset.id;
        const parent = isCatalog
          ? link.closest(`.${catalog_nav}`)
          : link.closest(submenu_main);
        parent.appendChild(clone);
      }
    });

    //  все чистим
    item.addEventListener("mouseleave", () => {
      Array.from(header.querySelectorAll(`.${submenu_fake}`)).forEach((item) =>
        item.remove()
      );
    });
  });
};
