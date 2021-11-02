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
const headerSearchLocation = $(".header-search__location");
const headerSearchPanelLocation = $(".search-panel__location");
const headerSearchPanelLocationVideo = $(".search-panel__location-btn-video");
const headerSearchPanelCustomer = $(".search-panel-customer");
const headerSearchPanelCustomerPlusBtn = $(".search-panel-customer__plus");
const headerSearchPanelCustomerMinusBtn = $(".search-panel-customer__minus");
const headerSearchPanelCustomerNum = $(".search-panel-customer__num");

app = {
  handleEvents: function () {
    const _this = this;
    let headerSearchBtnWidth;

    //handle when clicking header search button
    headerSearch.onclick = function (e) {
      e.stopPropagation();
      headerSearchBtn.classList.add("header-search__btn--active");
      headerSearchBtnIcon.style.background = "unset";
    };

    //handle close header search items, button & navigation options when clicking outside
    document.onmouseup = function (e) {
      //close the header navbar options when clicking outside
      if (
        headerSearchBtn.classList.contains("header-search__btn--active") ||
        !e.target.closest(".header__navbar-right-item--js")
      ) {
        _this.resetSearchBtn();
        headerNavOptions.checked = false;
      }

      //close header menu items when clicking outside
      if (!e.target.closest(".header__search")) {
        _this.resetHeaderSearchItems();
        _this.resetHeaderSearchBorder();
      }

      //close header location panel when clicking outside
      if (
        !e.target.closest(".search-panel__location") &&
        !e.target.closest(".header-search__location")
      ) {
        headerSearchPanelLocation.style.display = "none";
        headerSearchPanelLocationVideo.load();
      }

      //close header customer panel when clicking outside
      if (
        !e.target.closest(".search-panel-customer ") &&
        !e.target.closest(".header-search__customer")
      ) {
        headerSearchPanelCustomer.classList.remove(
          "search-panel-customer--active"
        );
        headerSearchPanelCustomer.style.transform = "translateX(50%)";
        headerSearchPanelCustomer.style.opacity = "0";
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
        _this.removeHeaderSearchBorder(e);
      };
    });

    //handle when mouse out header search menu
    headerSearchItems.forEach((e) => {
      e.onmouseout = function () {
        if (!e.classList.contains("header-search__item--active")) {
          _this.resetCurrentHeaderSearchBorder(e);
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
        _this.resetHeaderSearchItems();
        _this.resetHeaderSearchBorder();

        if (e.previousElementSibling) {
          e.previousElementSibling.classList.add(
            "header-search__item--no-border"
          );
        }

        //display header search location panel
        if (e.classList.contains("header-search__location")) {
          if (!headerSearchPanelLocationVideo.ended) {
            headerSearchPanelLocationVideo.play();
          }
          headerSearchPanelLocation.style.display = "block";
        }

        //display header search customer panel
        if (e.classList.contains("header-search__customer")) {
          headerSearchPanelCustomer.classList.toggle(
            "search-panel-customer--active",
            !headerSearchPanelCustomer.classList.contains(
              "search-panel-customer--active"
            )
          );
          setTimeout(() => {
            headerSearchPanelCustomer.style.transform = "translateX(0)";
            headerSearchPanelCustomer.style.opacity = "1";
          }, 50);
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

    //handle display header search location panel when clicking header search btn
    headerSearchBtn.onclick = function (e) {
      e.stopPropagation();
      _this.resetHeaderSearchPanel();
      headerSearchBtnColor.style.width = 0;
      headerSearchBtnColor.style.height = 0;
      headerSearchPanelLocation.style.display = "block";
      if (!headerSearchPanelLocationVideo.ended) {
        headerSearchPanelLocationVideo.play();
      }
    };

    //handle when clicking plus btn on header search customer panel
    headerSearchPanelCustomerPlusBtn.onclick = function () {
      headerSearchPanelCustomerNum.innerText =
        Number(headerSearchPanelCustomerNum.innerText) + 1;
      if (Number(headerSearchPanelCustomerNum.innerText) <= 0) {
        headerSearchPanelCustomerMinusBtn.classList.add(
          "search-panel-customer__btn--disable"
        );
      } else if (
        Number(headerSearchPanelCustomerNum.innerText) > 0 &&
        Number(headerSearchPanelCustomerNum.innerText) <= 16
      ) {
        headerSearchPanelCustomerMinusBtn.classList.remove(
          "search-panel-customer__btn--disable"
        );
      } else {
        headerSearchPanelCustomerPlusBtn.classList.add(
          "search-panel-customer__btn--disable"
        );
        headerSearchPanelCustomerNum.innerText = 16;
      }
    };

    //handle when clicking minus btn on header search customer panel
    headerSearchPanelCustomerMinusBtn.onclick = function () {
      headerSearchPanelCustomerNum.innerText =
        Number(headerSearchPanelCustomerNum.innerText) - 1;
      if (Number(headerSearchPanelCustomerNum.innerText) <= 0) {
        headerSearchPanelCustomerMinusBtn.classList.add(
          "search-panel-customer__btn--disable"
        );
        headerSearchPanelCustomerPlusBtn.classList.remove(
          "search-panel-customer__btn--disable"
        );
        headerSearchPanelCustomerNum.innerText = 0;
      } else if (
        Number(headerSearchPanelCustomerNum.innerText) > 0 &&
        Number(headerSearchPanelCustomerNum.innerText) <= 16
      ) {
        headerSearchPanelCustomerMinusBtn.classList.remove(
          "search-panel-customer__btn--disable"
        );
      } else {
        headerSearchPanelCustomerPlusBtn.classList.add(
          "search-panel-customer__btn--disable"
        );
      }
    };
  },

  resetHeaderSearchPanel: function () {
    headerSearchPanelCustomer.classList.remove("search-panel-customer--active");
    headerSearchPanelCustomer.style.transform = "translateX(50%)";
    headerSearchPanelCustomer.style.opacity = "0";
  },

  resetCurrentHeaderSearchBorder: function (e) {
    if (e.previousElementSibling) {
      e.previousElementSibling.classList.remove(
        "header-search__item--no-border"
      );
    }
    e.classList.remove("header-search__item--no-border");
  },

  resetHeaderSearchBorder: function () {
    headerSearchItems.forEach((e) => {
      if (e.previousElementSibling) {
        e.previousElementSibling.classList.remove(
          "header-search__item--no-border"
        );
      }
      e.classList.remove("header-search__item--no-border");
    });
  },

  removeHeaderSearchBorder: function (e) {
    if (e.previousElementSibling) {
      e.previousElementSibling.classList.add("header-search__item--no-border");
    }
    e.classList.add("header-search__item--no-border");
  },

  resetHeaderSearchItems: function () {
    headerSearchItems.forEach((e) => {
      e.classList.remove("header-search__item--active");
    });
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
