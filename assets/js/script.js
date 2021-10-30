const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const headerSearchBtn = $(".header-search__btn");
const headerSearchTextBtn = $(".header-search__btn-label");
const headerSearchItemHover = $$('.header-search__hover');

app = {
  handleEvents: function () {
    const _this = this;

    //handle when clicking header search button
    headerSearchBtn.onclick = function () {
      headerSearchBtn.classList.add("header-search__btn-label--active");
    };

    //handle open header search button when clicking header search box & close when clicking outside
    document.onclick = function (e) {
      if (
        e.target.closest(".header-search__btn") ||
        e.target.closest(".header__search")
      ) {
        headerSearchBtn.classList.add("header-search__btn-label--active");
      } else {
        _this.resetSearchBtn();
      }
    };

    //handle when hover header search items

  },

  resetSearchBtn: function () {
    headerSearchBtn.classList.remove("header-search__btn-label--active");
    headerSearchBtn.style.backgroundImage = "#ff385c";
  },

  start: function () {
    this.handleEvents();
  },
};

app.start();
