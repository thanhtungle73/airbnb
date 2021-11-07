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
const headerSearchCustomerDesc = $(
  ".header-search__customer .header-search__desc"
);
const headerSearchPanelLocation = $(".search-panel__location");
const headerSearchPanelLocationVideo = $(".search-panel__location-btn-video");
const headerSearchPanelCustomer = $(".search-panel-customer");
const headerSearchPanelCustomerPlusBtn = $$(".search-panel-customer__plus");
const headerSearchPanelCustomerMinusBtn = $$(".search-panel-customer__minus");
const headerSearchPanelCustomerAdultNum = $(
  ".search-panel-customer__adult .search-panel-customer__num"
);
const headerSearchPanelCustomerKidNum = $(
  ".search-panel-customer__kid .search-panel-customer__num"
);
const headerSearchPanelCustomerChildNum = $(
  ".search-panel-customer__child .search-panel-customer__num"
);
const headerSearchPanelCustomerIcon = $(
  ".header-search__person-icon-container"
);
const headerSearchPanelCustomerNumber = $(".header-search__person-number");
const headerSearchPanelCalendarHeading = $$(".search-panel-calendar__heading");
const headerSearchPanelCalendarRow = $$(".search-panel-calendar__days-row");
const headerSearchPanelCalendarRowNext = $$(
  ".search-panel-calendar__days-row-next"
);
const headerSearchPanelCalendarDaysData = $$(
  ".search-panel-calendar__days-data"
);

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
        headerSearchPanelLocation.classList.remove(
          "search-panel__location--active"
        );
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
        headerSearchPanelCustomerIcon.classList.remove(
          "header-search__person-icon-container--active"
        );
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
          headerSearchPanelLocation.classList.add(
            "search-panel__location--active"
          );
        }

        //display header search customer panel
        if (e.classList.contains("header-search__customer")) {
          headerSearchPanelCustomer.classList.toggle(
            "search-panel-customer--active",
            !headerSearchPanelCustomer.classList.contains(
              "search-panel-customer--active"
            )
          );
          if (
            !headerSearchPanelCustomerNumber.classList.contains(
              "header-search__person-number--disable"
            )
          ) {
            headerSearchPanelCustomerIcon.classList.add(
              "header-search__person-icon-container--active"
            );
          } else {
            headerSearchPanelCustomerIcon.classList.remove(
              "header-search__person-icon-container--active"
            );
          }
          setTimeout(() => {
            headerSearchPanelCustomer.style.transform = "translateX(0)";
            headerSearchPanelCustomer.style.opacity = "1";
          }, 50);
        }
        e.classList.add("header-search__item--no-border");
        headerSearch.classList.add("header__search--active");
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
      headerSearchPanelLocation.classList.add("search-panel__location--active");
      if (!headerSearchPanelLocationVideo.ended) {
        headerSearchPanelLocationVideo.play();
      }
    };

    //handle when clicking plus btn on header search customer panel & logic
    headerSearchPanelCustomerPlusBtn.forEach((e, index) => {
      e.onclick = function () {
        e.previousElementSibling.innerText =
          Number(e.previousElementSibling.innerText) + 1;

        //adding the adult value to 1 when adding kid and child without adult
        if (
          ((e.closest(".search-panel-customer__kid") &&
            Number(e.previousElementSibling.innerText > 0)) ||
            (e.closest(".search-panel-customer__child") &&
              Number(e.previousElementSibling.innerText > 0))) &&
          Number(headerSearchPanelCustomerAdultNum.innerText) < 1
        ) {
          headerSearchPanelCustomerAdultNum.innerText = 1;
          headerSearchPanelCustomerAdultNum.previousElementSibling.classList.remove(
            "search-panel-customer__btn--disable"
          );
        }

        if (Number(e.previousElementSibling.innerText) <= 0) {
          headerSearchPanelCustomerMinusBtn[index].classList.add(
            "search-panel-customer__btn--disable"
          );
        } else if (
          Number(e.previousElementSibling.innerText) > 0 &&
          Number(e.previousElementSibling.innerText) <= 4
        ) {
          headerSearchPanelCustomerMinusBtn[index].classList.remove(
            "search-panel-customer__btn--disable"
          );
        } else if (
          Number(e.previousElementSibling.innerText) >= 5 &&
          (e.closest(".search-panel-customer__kid") ||
            e.closest(".search-panel-customer__child"))
        ) {
          e.classList.add("search-panel-customer__btn--disable");
          e.previousElementSibling.innerText = 5;
        } else if (
          Number(e.previousElementSibling.innerText) >= 5 &&
          Number(e.previousElementSibling.innerText) < 16 &&
          e.closest(".search-panel-customer__adult")
        ) {
          headerSearchPanelCustomerMinusBtn[index].classList.remove(
            "search-panel-customer__btn--disable"
          );
        } else {
          e.classList.add("search-panel-customer__btn--disable");
          e.previousElementSibling.innerText = 16;
        }
        _this.displayCustomerNum();
      };
    });

    //handle when clicking minus btn on header search customer panel & logic
    headerSearchPanelCustomerMinusBtn.forEach((e, index) => {
      e.onclick = function () {
        //check to see if the child and kid have value, then the adult cannot less than 1
        if (
          !(
            Number(e.nextElementSibling.innerText) < 2 &&
            e.closest(".search-panel-customer__adult") &&
            (Number(headerSearchPanelCustomerKidNum.innerText) > 0 ||
              Number(headerSearchPanelCustomerChildNum.innerText) > 0)
          )
        ) {
          e.nextElementSibling.innerText =
            Number(e.nextElementSibling.innerText) - 1;
        }

        if (Number(e.nextElementSibling.innerText) <= 0) {
          headerSearchPanelCustomerMinusBtn[index].classList.add(
            "search-panel-customer__btn--disable"
          );
          e.nextElementSibling.innerText = 0;
        } else if (Number(e.nextElementSibling.innerText) < 5) {
          headerSearchPanelCustomerPlusBtn[index].classList.remove(
            "search-panel-customer__btn--disable"
          );
        } else if (
          Number(e.nextElementSibling.innerText) < 16 &&
          Number(e.nextElementSibling.innerText) >= 5 &&
          e.closest(".search-panel-customer__adult")
        ) {
          headerSearchPanelCustomerPlusBtn[index].classList.remove(
            "search-panel-customer__btn--disable"
          );
        } else {
          headerSearchPanelCustomerPlusBtn[index].classList.remove(
            "search-panel-customer__btn--disable"
          );
        }
        _this.displayCustomerNum();
      };
    });

    //handle when clicking header search customer panel close icon
    headerSearchPanelCustomerIcon.onclick = function (e) {
      e.stopPropagation();
      _this.resetHeaderSearchPanelCustomerValue();
      headerSearchPanelCustomerNumber.classList.add(
        "header-search__person-number--disable"
      );
      headerSearchPanelCustomerIcon.classList.remove(
        "header-search__person-icon-container--active"
      );
      headerSearchCustomerDesc.classList.remove("header-search__desc--disable");
    };
  },

  isLeapYear: function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  },

  getFebDays: function (year) {
    return this.isLeapYear(year) ? 29 : 28;
  },

  renderCalendar: function (month, nextMonth, year) {
    const monthNames = [
      "tháng 1",
      "tháng 2",
      "tháng 3",
      "tháng 4",
      "tháng 5",
      "tháng 6",
      "tháng 7",
      "tháng 8",
      "tháng 9",
      "tháng 10",
      "tháng 11",
      "tháng 12",
    ];

    let daysOfMonth = [
      31,
      this.getFebDays(year),
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];

    let currentDate = new Date();
    let firstDay = new Date(year, month, 1);
    let firstDayNextMonth = new Date(year, nextMonth, 1);

    headerSearchPanelCalendarHeading.forEach((e, index) => {
      if (month + index <= 13) {
        e.innerText = `${monthNames[month + index]} năm ${year}`;
      } else {
        e.innerText = `${monthNames[nextMonth + index]} năm ${year + 1}`;
      }
    });

    for (let i = 0; i <= daysOfMonth[month] + firstDay.getDay() - 1; i++) {
      let day = document.createElement("td");
      if (i >= firstDay.getDay()) {
        day.classList.add("search-panel-calendar__days-data");
        day.innerHTML = i - firstDay.getDay() + 1;
      }

      headerSearchPanelCalendarRow.forEach((e) => {
         if (e.childElementCount <= 6) {
          e.appendChild(day);
          console.log(e)
        } else {
          return;
        }
      });
    }

    for (
      let i = 0;
      i <= daysOfMonth[nextMonth] + firstDayNextMonth.getDay() - 1;
      i++
    ) {
      let dayNext = document.createElement("td");
      if (i >= firstDayNextMonth.getDay()) {
        dayNext.classList.add("search-panel-calendar__days-data");
        dayNext.innerHTML = i - firstDayNextMonth.getDay() + 1;
      }

      headerSearchPanelCalendarRowNext.forEach((e) => {
        if (e.childElementCount <= 6) {
          e.appendChild(dayNext);
        } else {
          return;
        }
      });
    }
  },

  resetHeaderSearchPanelCustomerValue: function () {
    headerSearchPanelCustomerAdultNum.innerText = 0;
    headerSearchPanelCustomerKidNum.innerText = 0;
    headerSearchPanelCustomerChildNum.innerText = 0;

    headerSearchPanelCustomerAdultNum.previousElementSibling.classList.add(
      "search-panel-customer__btn--disable"
    );
    headerSearchPanelCustomerAdultNum.nextElementSibling.classList.remove(
      "search-panel-customer__btn--disable"
    );
    headerSearchPanelCustomerKidNum.previousElementSibling.classList.add(
      "search-panel-customer__btn--disable"
    );
    headerSearchPanelCustomerKidNum.nextElementSibling.classList.remove(
      "search-panel-customer__btn--disable"
    );
    headerSearchPanelCustomerChildNum.previousElementSibling.classList.add(
      "search-panel-customer__btn--disable"
    );
    headerSearchPanelCustomerChildNum.nextElementSibling.classList.remove(
      "search-panel-customer__btn--disable"
    );
  },

  displayCustomerNum: function () {
    if (
      (Number(headerSearchPanelCustomerAdultNum.innerText) > 0 ||
        Number(headerSearchPanelCustomerKidNum.innerText) > 0) &&
      Number(headerSearchPanelCustomerChildNum.innerText) < 1
    ) {
      headerSearchPanelCustomerNumber.classList.remove(
        "header-search__person-number--disable"
      );
      headerSearchPanelCustomerIcon.classList.add(
        "header-search__person-icon-container--active"
      );
      headerSearchCustomerDesc.classList.add("header-search__desc--disable");
      headerSearchPanelCustomerNumber.innerText = `${
        Number(headerSearchPanelCustomerAdultNum.innerText) +
        Number(headerSearchPanelCustomerKidNum.innerText)
      } khách`;
    } else if (Number(headerSearchPanelCustomerChildNum.innerText) > 0) {
      headerSearchPanelCustomerNumber.classList.remove(
        "header-search__person-number--disable"
      );
      headerSearchPanelCustomerIcon.classList.add(
        "header-search__person-icon-container--active"
      );
      headerSearchCustomerDesc.classList.add("header-search__desc--disable");
      headerSearchPanelCustomerNumber.innerText = `${
        Number(headerSearchPanelCustomerAdultNum.innerText) +
        Number(headerSearchPanelCustomerKidNum.innerText)
      } khách, ${Number(headerSearchPanelCustomerChildNum.innerText)} em bé`;
    } else {
      headerSearchPanelCustomerNumber.classList.add(
        "header-search__person-number--disable"
      );
      headerSearchPanelCustomerIcon.classList.remove(
        "header-search__person-icon-container--active"
      );
      headerSearchCustomerDesc.classList.remove("header-search__desc--disable");
    }
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
    headerSearch.classList.remove("header__search--active");
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
    let currDate = new Date();
    let currMonth = currDate.getMonth();
    let currYear = currDate.getFullYear();
    let nextMonth;
    if (currMonth + 1 <= 13) {
      nextMonth = currMonth + 1;
    } else {
      nextMonth = 0;
    }
    this.renderCalendar(currMonth, nextMonth, currYear);
    this.handleEvents();
  },
};

app.start();
