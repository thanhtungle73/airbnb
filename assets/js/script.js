const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const headerNavMidItems = $$(".header__navbar-mid-item");
const headerNavOptions = $("#header__navbar-right-item-checkbox");
const headerSearch = $(".header__search");
const headerSearchBtn = $(".header-search__btn");
const headerSearchTextBtn = $(".header-search__btn-label");
const headerSearchItems = $$(".header-search__item");
const headerSearchBtnColor = $(".header-search__color");
const headerSearchBtnIcon = $(".header-search__btn-icon");

app = {
  handleEvents: function () {
    const _this = this;
    let headerSearchBtnWidth;

    const resetHeaderSearchBorder = function (e) {
      /* headerSearchItems.forEach((e) => { */
      if (e.previousElementSibling) {
        e.previousElementSibling.classList.remove(
          "header-search__item--no-border"
        );
      }
      e.classList.remove("header-search__item--no-border");
      /* }); */
    };

    const removeHeaderSearchBorder = function (e) {
      if (e.previousElementSibling) {
        e.previousElementSibling.classList.add(
          "header-search__item--no-border"
        );
      }
      e.classList.add("header-search__item--no-border");
    };

    const resetHeaderSearchItems = function () {
      headerSearchItems.forEach((e) => {
        e.classList.remove("header-search__item--active");
      });
    };

    //handle when clicking header search button
    headerSearch.onclick = function (e) {
      e.stopPropagation();
      headerSearchBtn.classList.add("header-search__btn--active");
      headerSearchBtnIcon.style.background = "unset";
    };

    //handle close header search button & navigation options when clicking outside
    document.onmouseup = function (e) {
      if (
        headerSearchBtn.classList.contains("header-search__btn--active") ||
        !e.target.closest(".header__navbar-right-item--js")
      ) {
        _this.resetSearchBtn();
        headerNavOptions.checked = false;
      }
    };

    //handle when clicking middle header navbar items
    headerNavMidItems.forEach((e) => {
      e.onclick = function () {
        _this.resetHeaderMidItems();
        e.classList.add("header__navbar-mid-item--active");
      };
    });

    //handle when mouse over header search menu
    headerSearchItems.forEach((e) => {
      e.onmouseover = function () {
        removeHeaderSearchBorder(e);
      };
    });

    //handle when mouse out header search menu
    headerSearchItems.forEach((e) => {
      e.onmouseout = function () {
        if (!e.classList.contains("header-search__item--active")) {
          resetHeaderSearchBorder(e);
        }

        if (
          e.nextElementSibling &&
          e.nextElementSibling.classList.contains("header-search__item--active")
        ) {
          e.classList.add("header-search__item--no-border");
        }

        if (
          e.previousElementSibling &&
          e.previousElementSibling.classList.contains(
            "header-search__item--active"
          )
        ) {
          e.previousElementSibling.classList.add(
            "header-search__item--no-border"
          );
        }
      };
    });

    //handle when clicking header search items
    headerSearchItems.forEach((e) => {
      e.onclick = function () {
        resetHeaderSearchItems();

        //Reset
        headerSearchItems.forEach((element) => {
          if (element.previousElementSibling) {
            element.previousElementSibling.classList.remove(
              "header-search__item--no-border"
            );
          }
          element.classList.remove("header-search__item--no-border");
        });

        if (e.previousElementSibling) {
          e.previousElementSibling.classList.add(
            "header-search__item--no-border"
          );
        }
        e.classList.add("header-search__item--no-border");
        headerSearch.style.backgroundColor = "#f7f7f7";
        e.classList.add("header-search__item--active");
      };
    });

    //handle color moves according to the cursor when hovering mouse on header search btn
    headerSearchBtn.onmousemove = function (e) {
      if (headerSearchBtn.classList.contains("header-search__btn--active")) {
        headerSearchBtnWidth = headerSearchBtn.offsetWidth;
        let xMouse = e.offsetX;
        let yMouse = -headerSearchBtnWidth / 3;

        headerSearchBtnColor.style.width = headerSearchBtnWidth + "px";
        headerSearchBtnColor.style.height = headerSearchBtnWidth + "px";
        if (xMouse >= -64 && xMouse <= headerSearchBtnWidth) {
          headerSearchBtnColor.style.top = yMouse + "px";
          headerSearchBtnColor.style.left =
            xMouse - headerSearchBtnWidth / 3 + "px";
        } else {
          headerSearchBtnColor.style.top = -headerSearchBtnWidth / 3 + "px";
          headerSearchBtnColor.style.left = -headerSearchBtnWidth / 3 + "px";
        }
      }
    };

    //handle color back to initial position when mouse is left
    headerSearchBtn.onmouseleave = function () {
      headerSearchBtnColor.style.width = 0;
      headerSearchBtnColor.style.height = 0;
      headerSearchBtnColor.style.left = -headerSearchBtnWidth / 3 + "px";
      headerSearchBtnColor.style.top = -headerSearchBtnWidth / 3 + "px";
    };
  },

  resetSearchBtn: function () {
    headerSearchBtn.classList.remove("header-search__btn--active");
    headerSearchBtn.style.backgroundImage = "#ff385c";
  },

  resetHeaderMidItems: function () {
    headerNavMidItems.forEach((e) => {
      e.classList.remove("header__navbar-mid-item--active");
    });
  },

  start: function () {
    this.handleEvents();
  },
};

app.start();
