(() => {
  "use strict";
  const e = window.innerWidth, t = document.querySelector("body"), a = t.querySelector(".header"), r = "link-js", s = "link-js-active", n = "submenu", l = "fake", c = "fake--right", i = "fake--active", o = () => {
    if (e < 769) return;
    const t = document.querySelector("#header"), a = t.querySelector(".burger__btn"), r = t.querySelector(".catalog__inner");
    a && r && t && a.addEventListener("click", (function() {
      this.classList.toggle("burger__btn--active"), r.classList.toggle("catalog__inner--active"), 
      t.classList.toggle("header--catalog-open");
    }));
  }, d = ".submenu--main", u = "submenu__list", m = "catalog__inner", L = "submenu--fake", f = e => void 0 === e ? e : e.split("-").length, g = async () => {
    if (e < 769) return;
    (async () => {
      Array.from(document.querySelectorAll(d)).filter((e => e.classList.contains("submenu--header"))).forEach((e => {
        const t = e.parentNode, a = document.createElement("div"), r = e.className.split(" "), s = e.cloneNode(!0);
        s.className = "", s.classList.add(u), r.length > 0 && r.forEach((e => {
          a.classList.add(e);
        })), a.appendChild(s), t.appendChild(a), e.remove();
      }));
    })();
    const t = document.querySelector("header");
    Array.from(t.querySelectorAll(`.${r}`)).filter((e => null !== e.parentNode.querySelector(`.${n}`) && !e.classList.contains("nav__link--header"))).map((e => e.classList.add(s)));
    [ ...Array.from(t.querySelectorAll(`div${d}`)), ...Array.from(t.querySelectorAll(`.${m}`)) ].forEach((e => {
      e.addEventListener("mouseover", (a => {
        const r = e.classList.contains(m), n = a.target.classList.contains(s), l = a.target.classList.contains(L) && a.relatedTarget.classList.contains(L), c = r ? a.target.classList.contains("catalog__list") : a.target.classList.contains(u);
        if (l && f(a.relatedTarget.dataset.id) > f(a.target.dataset.id) && a.relatedTarget.remove(), 
        c && Array.from(t.querySelectorAll(`.${L}`)).forEach((e => e.remove())), n) {
          Array.from(t.querySelectorAll(`.${L}`)).forEach((e => {
            f(e.dataset.id) > f(a.target.dataset.id) && e.remove();
          }));
          if (Array.from(t.querySelectorAll(`.${L}`)).filter((e => e.dataset.id === a.target.dataset.id)).length > 0) return;
          Array.from(t.querySelectorAll(`.${L}`)).forEach((e => {
            f(e.dataset.id) === f(a.target.dataset.id) && e.remove();
          }));
          const e = a.target, s = document.createElement("p");
          s.classList.add("submenu__title"), s.innerHTML = e.querySelector("a span").innerHTML;
          const n = e.nextElementSibling.cloneNode(!0);
          n.prepend(s), n.classList.add(L), n.dataset.id = a.target.dataset.id;
          (r ? e.closest(".catalog__nav") : e.closest(d)).appendChild(n);
        }
      })), e.addEventListener("mouseleave", (() => {
        Array.from(t.querySelectorAll(`.${L}`)).forEach((e => e.remove()));
      }));
    }));
  }, y = e => {
    const t = e.target.dataset.id, r = Array.from(a.querySelectorAll(`.${l}`)).find((e => e.dataset.id === t));
    r.classList.remove(i), r.classList.add(c);
  }, v = () => {
    if (e > 769) return;
    const s = t.querySelector(".burger__btn"), o = t.querySelector("#menu");
    Array.from(a.querySelectorAll(`.${r}`)).filter((e => {
      if (e.nextElementSibling && e.closest(".header-main__nav")) return e.nextElementSibling.classList.contains(n);
    })).forEach((async e => {
      const t = e.querySelector("span").innerHTML, r = e.nextElementSibling, s = e.dataset.id;
      await (async (e, t, r) => {
        const s = document.createElement("div");
        s.classList.add(l), s.classList.add(c);
        const n = document.createElement("a");
        n.classList.add("fake__link"), n.innerHTML = e, n.dataset.id = r, n.addEventListener("click", y), 
        s.dataset.id = r, s.appendChild(n), s.appendChild(t), a.appendChild(s);
      })(t, r, s), e.addEventListener("click", (e => {
        const t = e.target.dataset.id, r = Array.from(a.querySelectorAll(`.${l}`)).find((e => e.dataset.id === t));
        r.classList.remove(c), r.classList.add(i);
      }));
    })), s.addEventListener("click", (() => {
      if (t.classList.toggle("page-body--overflow"), o.classList.toggle("nav--open"), 
      s.classList.contains("nav--open")) {
        Array.from(a.querySelectorAll(`.${c}`)).forEach((e => e.classList.remove(c)));
      }
    }));
  };
  document.addEventListener("DOMContentLoaded", (() => {
    g(), o(), v(), (() => {
      if (e < 769) return;
      let t = window.scrollY;
      window.addEventListener("scroll", (() => {
        const e = window.scrollY, r = e > t ? "down" : "up";
        e < 100 || (a.classList.remove("header--down"), a.classList.remove("header--up"), 
        a.classList.add(`header--${r}`), t = e > 0 ? e : 0);
      }));
    })();
  }));
})();