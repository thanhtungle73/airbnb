const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header = $(".header");
const headerNavbar = $(".header__navbar");
const headerNavbarMiddle = $(".header__navbar-list-middle");
const headerNavMidItems = $$(".header__navbar-mid-item");
const headerNavOptions = $("#header__navbar-right-item-checkbox");
const headerNavbarSearch = $(".header__navbar-search");
const headerSearch = $(".header__search");
const headerSearchBtn = $(".header-search__btn");
const headerSearchTextBtn = $(".header-search__btn-label");
const headerSearchItems = $$(".header-search__item");
const headerSearchBtnColor = $(".header-search__color");
const headerSearchBtnIcon = $(".header-search__btn-icon");
const headerSearchLocation = $(".header-search__location");
const searchLocationInput = $(".header-search__input");
const headerSearchLocationCloseBtn = $(
  ".header-search__location-icon-container"
);
const headerSearchCustomerDesc = $(
  ".header-search__customer .header-search__desc"
);
const searchRoomCheckIn = $(".header-search__room-checkIn");
const searchRoomCheckOut = $(".header-search__room-checkOut");
const searchRoomCheckInDesc = $(
  ".header-search__room-checkIn .header-search__desc"
);
const searchRoomCheckOutDesc = $(
  ".header-search__room-checkOut .header-search__desc"
);
const searchRoomCheckInDuration = $(
  ".header-search__room-checkIn .header-search__duration"
);
const searchRoomCheckOutDuration = $(
  ".header-search__room-checkOut .header-search__duration"
);
const headerSearchCalendarCheckIn = $(".header-search__room-checkIn");
const headerSearchCalendarCheckOut = $(".header-search__room-checkOut");
const headerSearchCalendarFlexible = $(".header-search__flexible");
const headerSearchRoomChkInCloseBtn = $(".header-search__room-checkIn-close");
const headerSearchRoomChkOutCloseBtn = $(".header-search__room-checkOut-close");
const headerSearchCheckIn = $(".header-search__checkIn");
const headerSearchCheckOut = $(".header-search__checkOut");
const headerSearchPanelLocation = $(".search-panel__location");
const headerSearchPanelLocationVideo = $(".search-panel__location-btn-video");
const searchPanelLocationFlexItem = $(".search-panel__location-flex");
const searchPanelLocationFlexText = $(".search-panel__location-flex-text");
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
const searchPanelCalendarHeaders = $$(".search-panel-calendar__header-content");
const searchPanelNormalCalendar = $(".search-panel-calendar__normal");
const searchPanelFlexibleCalendar = $(".search-panel-calendar-flexible");
const headerSearchPanelCalendarHeading = $$(".search-panel-calendar__heading");
const headerSearchPanelCalendar = $(".search-panel-calendar");
const headerSearchPanelCalendarDays = $(".search-panel-calendar__days");
const headerSearchPanelCalendarDaysNext = $(
  ".search-panel-calendar__days-next"
);
const headerSearchPanelCalendarNextBtn = $(
  ".search-panel-calendar__navigation-container-next"
);
const headerSearchPanelCalendarPreviousBtn = $(
  ".search-panel-calendar__navigation-container-previous"
);
const searchPanelFooterItem = $$(".search-panel-calendar__footer-item");
const searchPanelCalendarFlexLengthItems = $$(
  ".search-panel-calendar-flexible__lengths-item"
);
const searchPanelCalendarFlexLengthOption = $(
  ".search-panel-calendar-flexible__lengths-option"
);
const searchPanelCalendarFlexDateItems = $$(
  ".search-panel-calendar-flexible__dates-item"
);
const searchPanelCalendarFlexDateOption = $(
  ".search-panel-calendar-flexible__dates-option"
);
const searchCalendarFlexInfoLength = $(".header-search__flexible-info-lengths");
const searchCalendarFlexInfoDate = $(".header-search__flexible-info-dates");
const searchCustomer = $(".header-search__customer");
const searchDate = $(".header-search__date");
const futureGateWaysItems = $$(".future-gateways__item");
const futureGateWaysItemActive = $(
  ".future-gateways__item.future-gateways__item--active"
);
const futureGatewaysLine = $(".future-gateways__line");
const mobileTripNextBtn = $(".mobile-trip-category-navigation__next");
const mobileTripPrevBtn = $(".mobile-trip-category-navigation__prev");
const mobileTripContainer = $(".tablet-trip-container");
const mobileLiveNextBtn = $(".mobile-live-anywhere-navigation__next");
const mobileLivePrevBtn = $(".mobile-live-anywhere-navigation__prev");
const mobileLiveContainer = $(".live-anywhere__item-container");
const mobileFutureNextBtn = $(".mobile-future-gateways__navigation-next");
const mobileFuturePrevBtn = $(".mobile-future-gateways__navigation-prev");
const mobileFutureContainer = $(".future-gateways__list");
const mobileSearchHeader = $(".header-mobile__search");
const mobileHeaderNavbar = $(".header-mobile__navbar");
const mobileNavbarItems = $$(".header-mobile__navbar-item");

let currDate;
let currMonth;
let currYear;
let secondYear;
let secondMonth;

app = {
  calendarDataIndex: 0,
  mobilePreviousScroll: 0,

  handleEvents: function () {
    const _this = this;
    const limitAdults = 16;
    const limitKidChild = 5;
    const headerInfoHeight = 58;
    const futureOffsetLeftPadding = 10;
    const futureOffsetWidthPadding = 20;
    const dateTitles = $$(".search-panel-calendar-flexible__dates-title");
    let headerSearchBtnWidth;
    let mobileTripContainerScrollLeft;
    let mobileLiveContainerScrollLeft;
    let mobileFutureContainerScrollLeft;

    const resetSearchPanelCalendarSwitching = function () {
      searchPanelCalendarHeaders.forEach((element) => {
        element.classList.remove(
          "search-panel-calendar__header-content--active"
        );
      });
      searchPanelNormalCalendar.classList.remove(
        "search-panel-calendar__normal--active"
      );
      searchPanelFlexibleCalendar.classList.remove(
        "search-panel-calendar-flexible--active"
      );
      headerSearchCalendarCheckIn.classList.remove(
        "header-search__room--active"
      );
      headerSearchCalendarCheckOut.classList.remove(
        "header-search__room--active"
      );
      headerSearchCalendarFlexible.classList.remove(
        "header-search__flexible--active"
      );
    };
    const resetSearchPanelFlexLengthItems = function () {
      searchPanelCalendarFlexLengthItems.forEach((element) => {
        element.classList.remove(
          "search-panel-calendar-flexible__lengths-item--active"
        );
      });
    };
    const activeHeaderSearchLocationPanel = function () {
      if (!headerSearchPanelLocationVideo.ended) {
        headerSearchPanelLocationVideo.play();
      }
      headerSearchPanelLocation.classList.add("search-panel__location--active");
    };
    const handleCalendarFlexDateOutput = function (element) {
      if (
        element.classList.contains(
          "search-panel-calendar-flexible__dates-item--active"
        ) &&
        !searchPanelCalendarFlexDateOption.innerText.includes(element.innerText)
      ) {
        searchPanelCalendarFlexDateOption.innerText =
          searchPanelCalendarFlexDateOption.innerText +
          `, ${element.innerText}`;
      } else if (
        searchPanelCalendarFlexDateOption.innerText.includes(
          `, ${element.innerText}`
        )
      ) {
        searchPanelCalendarFlexDateOption.innerText =
          searchPanelCalendarFlexDateOption.innerText.replace(
            `, ${element.innerText}`,
            ""
          );
      } else {
        searchPanelCalendarFlexDateOption.innerText =
          searchPanelCalendarFlexDateOption.innerText.replace(
            `${element.innerText}`,
            ""
          );
      }

      //check to see if the "," in first index or not and remove
      if (searchPanelCalendarFlexDateOption.innerText.indexOf(",") == 0) {
        searchPanelCalendarFlexDateOption.innerText =
          searchPanelCalendarFlexDateOption.innerText.replace(", ", "");
      }
    };
    const showNavbarSearchBtnOnScrolled = function () {
      header.classList.remove("header--scrolled-show-background");
      headerNavbar.classList.add("header__navbar-scrolled");
      headerNavbarMiddle.classList.add("header__navbar-list-middle--scrolled");
      headerNavbarSearch.classList.add("header__navbar-search--scrolled");
      headerSearch.classList.add("header__search--scrolled");
      headerSearch.classList.remove("header__search--scrolled-show");
    };
    const mobileContentSectionScroll = function (
      mobileSectionContainerElement,
      mobileNextBtnElement,
      mobilePrevBtnElement,
      mobileContainerScrollLeftNum,
      strNextActiveClass,
      strPrevActiveClass
    ) {
      const mobileContainerScrollWidth =
        mobileSectionContainerElement.scrollWidth;
      mobileContainerScrollLeftNum = mobileSectionContainerElement.scrollLeft;
      const mobileContainerScrolled =
        mobileContainerScrollWidth - mobileSectionContainerElement.offsetWidth;

      if (mobileContainerScrollLeftNum >= mobileContainerScrolled - 10) {
        mobileContainerScrollLeftNum = mobileContainerScrolled;
        mobileNextBtnElement.classList.remove(strNextActiveClass);
        mobilePrevBtnElement.classList.add(strPrevActiveClass);
      } else if (mobileContainerScrollLeftNum <= 0) {
        mobileContainerScrollLeftNum = 0;
        mobileNextBtnElement.classList.add(strNextActiveClass);
        mobilePrevBtnElement.classList.remove(strPrevActiveClass);
      } else {
        mobilePrevBtnElement.classList.add(strPrevActiveClass);
        mobileNextBtnElement.classList.add(strNextActiveClass);
      }
    };

    //handle when clicking header search button
    headerSearch.onclick = function (e) {
      e.stopPropagation();
      headerSearchBtn.classList.add("header-search__btn--active");
      headerSearchBtnIcon.style.background = "unset";
    };

    //handle close header search items, button & navigation options when clicking outside
    //close the header navbar options when clicking outside
    document.addEventListener("mouseup", function (e) {
      if (!e.target.closest(".header__navbar-right-item--js")) {
        headerNavOptions.checked = false;
      }

      if (
        headerSearchBtn.classList.contains("header-search__btn--active") &&
        !e.target.closest(".header-search__btn") &&
        !e.target.closest(".header-search__person-icon-container")
      ) {
        _this.resetSearchBtn();
      }
    });

    //close header menu items when clicking outside
    document.addEventListener("mouseup", function (e) {
      if (!e.target.closest(".header__search")) {
        _this.resetHeaderSearchItems();
        _this.resetHeaderSearchBorder();
        _this.resetHeaderSearchRoomCloseBtn();
      }
    });

    //close header location panel when clicking outside
    document.addEventListener("mouseup", function (e) {
      if (
        !e.target.closest(".search-panel__location") &&
        !e.target.closest(".header-search__location")
      ) {
        headerSearchPanelLocation.classList.remove(
          "search-panel__location--active"
        );
        headerSearchPanelLocationVideo.load();
        headerSearchLocationCloseBtn.classList.remove(
          "header-search__location-icon-container--active"
        );
      }
    });

    //close header customer panel when clicking outside
    document.addEventListener("mouseup", function (e) {
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
    });

    //close header calendar panel when clicking outside
    document.addEventListener("mouseup", function (e) {
      if (
        !e.target.closest(".header-search__room") &&
        !e.target.closest(".search-panel-calendar")
      ) {
        headerSearchPanelCalendar.classList.remove(
          "search-panel-calendar--active"
        );
      }
    });

    //close search calendar exp panel when clicking outside
    document.addEventListener("mouseup", function (e) {
      if (
        !e.target.closest(".header-search__customer-exp--active") &&
        !e.target.closest(".search-panel-calendar")
      ) {
        headerSearchPanelCalendar.classList.remove(
          "search-panel-calendar-exp--active"
        );
      }
    });

    //close the scrolled header with search & navbar middle item
    document.addEventListener("mouseup", function (e) {
      if (
        !e.target.closest(".header") &&
        parseInt(getComputedStyle(header, "::before").height) > 0
      ) {
        showNavbarSearchBtnOnScrolled();
      }
    });

    //handle when clicking middle header navbar items
    headerNavMidItems.forEach((element) => {
      element.onclick = function () {
        console.log(searchRoomCheckIn.classList.contains("header-search__room--active"))
        _this.resetHeaderMidItems();
        element.classList.add("header__navbar-mid-item--active");

        if (element.classList.contains("header__navbar-mid-item-place")) {
          if (
            searchRoomCheckIn.classList.contains("header-search__room--active")
          ) {
            searchRoomCheckIn.classList.remove("header-search__room--active");
            searchRoomCheckOut.classList.remove("header-search__room--active");
            searchPanelNormalCalendar.classList.remove(
              "search-panel-calendar__normal--active"
            );
            searchPanelFlexibleCalendar.classList.add(
              "search-panel-calendar-flexible--active"
            );
            headerSearchCalendarFlexible.classList.add(
              "header-search__flexible--active"
            );
            searchPanelFlexibleCalendar.classList.add(
              "search-panel-calendar-flexible--active"
            );
          } else {
            resetSearchPanelCalendarSwitching();
            $(".search-panel-calendar__header-content").classList.add(
              "search-panel-calendar__header-content--active"
            );
            searchRoomCheckIn.classList.add("header-search__room--active");
            searchRoomCheckOut.classList.add("header-search__room--active");
            headerSearchCalendarFlexible.classList.remove(
              "header-search__item--active"
            );
            headerSearchCalendarFlexible.classList.remove(
              "header-search__flexible--active"
            );
            searchPanelFlexibleCalendar.classList.remove(
              "search-panel-calendar-flexible--active"
            );
            searchPanelNormalCalendar.classList.add(
              "search-panel-calendar__normal--active"
            );
          }
          searchCustomer.classList.remove(
            "header-search__customer-exp--active"
          );
          headerSearchPanelLocation.classList.remove(
            "search-panel__location-flex--active"
          );
        } else if (element.classList.contains("header__navbar-mid-item-exp")) {
          searchRoomCheckIn.classList.remove("header-search__room--active");
          searchRoomCheckOut.classList.remove("header-search__room--active");
          searchCustomer.classList.add("header-search__customer-exp--active");
          headerSearchPanelLocation.classList.add(
            "search-panel__location-flex--active"
          );
          headerSearchCalendarFlexible.classList.remove(
            "header-search__flexible--active"
          );
          searchPanelFlexibleCalendar.classList.remove(
            "search-panel-calendar-flexible--active"
          );
          searchPanelNormalCalendar.classList.add(
            "search-panel-calendar__normal--active"
          );
        } else {
          searchRoomCheckIn.classList.add("header-search__room--active");
          searchRoomCheckOut.classList.add("header-search__room--active");
          searchCustomer.classList.remove(
            "header-search__customer-exp--active"
          );
          headerSearchPanelLocation.classList.remove(
            "search-panel__location-flex--active"
          );
        }
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

    //handle events when clicking search items
    headerSearchItems.forEach((e) => {
      e.onclick = function () {
        _this.resetHeaderSearchItems();
        _this.resetHeaderSearchBorder();
        _this.resetHeaderSearchRoomCloseBtn(); //reset calendar close btn when clicking outside
        headerSearchLocationCloseBtn.classList.remove(
          "header-search__location-icon-container--active"
        );

        //active header search item when clicking
        e.classList.add("header-search__item--active");
        headerSearch.classList.add("header__search--active");
        _this.removeSeparateOfActiveSearchItem();

        //display header search location panel
        if (e.classList.contains("header-search__location")) {
          activeHeaderSearchLocationPanel();
        }

        //display close btn when header search location input has value
        if (
          searchLocationInput.value &&
          headerSearchLocation.classList.contains("header-search__item--active")
        ) {
          headerSearchLocationCloseBtn.classList.add(
            "header-search__location-icon-container--active"
          );
        } else {
          headerSearchLocationCloseBtn.classList.remove(
            "header-search__location-icon-container--active"
          );
        }

        //display header search customer panel
        if (
          e.classList.contains("header-search__customer") &&
          !e.classList.contains("header-search__customer-exp--active")
        ) {
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

        //display header search calendar panel
        if (
          (e.classList.contains("header-search__room") ||
            e.classList.contains("header-search__flexible")) &&
          $$(".search-panel-calendar__days-data--active").length > 0
        ) {
          headerSearchPanelCalendar.classList.add(
            "search-panel-calendar--active"
          );
          _this.resetHeaderSearchRoomCloseBtn();
          if (
            headerSearchCheckIn
              .closest(".header-search__room")
              .classList.contains("header-search__item--active") &&
            headerSearchCheckIn.classList.contains(
              "header-search__checkIn--active"
            )
          ) {
            headerSearchRoomChkInCloseBtn.classList.add(
              "header-search__room-close--active"
            );
          } else if (
            headerSearchCheckOut
              .closest(".header-search__room")
              .classList.contains("header-search__item--active") &&
            headerSearchCheckOut.classList.contains(
              "header-search__checkOut--active"
            )
          ) {
            headerSearchRoomChkOutCloseBtn.classList.add(
              "header-search__room-close--active"
            );
          } else {
            _this.resetHeaderSearchRoomCloseBtn();
          }
        } else if (
          (e.classList.contains("header-search__room") ||
            e.classList.contains("header-search__flexible")) &&
          $$(".search-panel-calendar__days-data--active").length <= 0
        ) {
          headerSearchPanelCalendar.classList.add(
            "search-panel-calendar--active"
          );
          _this.removeChildDays();
          _this.renderCalendar(..._this.resetDate());
        } else {
          headerSearchPanelCalendar.classList.remove(
            "search-panel-calendar--active"
          );
        }

        //display search experience calendar panel
        if (
          e.classList.contains("header-search__customer-exp--active") &&
          $$(".search-panel-calendar__days-data--active").length > 0
        ) {
          headerSearchPanelCalendar.classList.add(
            "search-panel-calendar-exp--active"
          );
        } else if (
          e.classList.contains("header-search__customer-exp--active") &&
          $$(".search-panel-calendar__days-data--active").length <= 0
        ) {
          headerSearchPanelCalendar.classList.add(
            "search-panel-calendar-exp--active"
          );
          _this.removeChildDays();
          _this.renderCalendar(..._this.resetDate());
        } else {
          headerSearchPanelCalendar.classList.remove(
            "search-panel-calendar-exp--active"
          );
        }
      };
    });

    //handle display close btn when header search location input has value onchange
    searchLocationInput.oninput = function () {
      if (
        searchLocationInput.value &&
        headerSearchLocation.classList.contains("header-search__item--active")
      ) {
        headerSearchLocationCloseBtn.classList.add(
          "header-search__location-icon-container--active"
        );
      } else {
        headerSearchLocationCloseBtn.classList.remove(
          "header-search__location-icon-container--active"
        );
      }
    };

    //handle insert text & display calendar when clicking search location flex nearby item
    searchPanelLocationFlexItem.onclick = function () {
      searchLocationInput.value = searchPanelLocationFlexText.innerText;
      _this.resetHeaderSearchItems();
      $(".header-search__customer-exp--active").classList.add(
        "header-search__item--active"
      );
      headerSearch.classList.add("header__search--active");
      _this.removeSeparateOfActiveSearchItem();
      headerSearchPanelCalendar.classList.add(
        "search-panel-calendar-exp--active"
      );
      _this.removeChildDays();
      _this.renderCalendar(..._this.resetDate());
    };

    //handle color moves according to the cursor when hovering mouse on header search btn
    headerSearchBtn.onmousemove = function (e) {
      if (headerSearchBtn.classList.contains("header-search__btn--active")) {
        headerSearchBtnWidth = headerSearchBtn.offsetWidth;
        let xMouse = e.offsetX;
        let yMouse = -headerSearchBtnWidth / 3;

        headerSearchBtnColor.style.width = headerSearchBtnWidth + "px";
        headerSearchBtnColor.style.height = headerSearchBtnWidth + "px";
        if (xMouse >= yMouse && xMouse <= headerSearchBtnWidth) {
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

        //adding the adult value to 1 when adding kid and child first
        if (
          ((e.closest(".search-panel-customer__kid") &&
            Number(e.previousElementSibling.innerText) > 0) ||
            (e.closest(".search-panel-customer__child") &&
              Number(e.previousElementSibling.innerText) > 0)) &&
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
          Number(e.previousElementSibling.innerText) >= limitKidChild &&
          (e.closest(".search-panel-customer__kid") ||
            e.closest(".search-panel-customer__child"))
        ) {
          e.classList.add("search-panel-customer__btn--disable");
          e.previousElementSibling.innerText = limitKidChild;
        } else if (
          Number(e.previousElementSibling.innerText) >= limitKidChild &&
          Number(e.previousElementSibling.innerText) < limitAdults &&
          e.closest(".search-panel-customer__adult")
        ) {
          headerSearchPanelCustomerMinusBtn[index].classList.remove(
            "search-panel-customer__btn--disable"
          );
        } else {
          e.classList.add("search-panel-customer__btn--disable");
          e.previousElementSibling.innerText = limitAdults;
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
        } else if (Number(e.nextElementSibling.innerText) < limitKidChild) {
          headerSearchPanelCustomerPlusBtn[index].classList.remove(
            "search-panel-customer__btn--disable"
          );
        } else if (
          Number(e.nextElementSibling.innerText) < limitAdults &&
          Number(e.nextElementSibling.innerText) >= limitKidChild &&
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

    //handle clear input location when clicking close button
    headerSearchLocationCloseBtn.onclick = function () {
      headerSearchLocationCloseBtn.classList.remove(
        "header-search__location-icon-container--active"
      );
      searchLocationInput.value = "";
    };

    //handle clear description and active date when clicking header search checkIn room close btn
    headerSearchRoomChkInCloseBtn.onclick = function () {
      const calendarDates = $$(".search-panel-calendar__days-data");
      _this.resetHeaderSearchRoomCloseBtn();
      _this.inactiveSearchChkInDayShowDescItem();
      _this.inactiveSearchChkOutDayShowDescItem();
      _this.resetSearchCalendarFooterItems();

      calendarDates.forEach((element) => {
        element.classList.remove("search-panel-calendar__days-data--active");
        element.classList.remove(
          "search-panel-calendar__days-data--active-second"
        );
      });

      searchRoomCheckInDuration.innerText = "";
      searchRoomCheckOutDuration.innerText = "";
      headerSearchCheckIn.innerText = "";
      headerSearchCheckOut.innerText = "";
    };

    //handle clear description and active date when clicking header search checkOut room close btn
    headerSearchRoomChkOutCloseBtn.onclick = function () {
      const calendarDates = $$(".search-panel-calendar__days-data");
      _this.resetHeaderSearchRoomCloseBtn();
      _this.inactiveSearchChkInDayShowDescItem();
      _this.inactiveSearchChkOutDayShowDescItem();
      _this.resetSearchCalendarFooterItems();

      calendarDates.forEach((element) => {
        element.classList.remove("search-panel-calendar__days-data--active");
        element.classList.remove(
          "search-panel-calendar__days-data--active-second"
        );
      });

      searchRoomCheckInDuration.innerText = "";
      searchRoomCheckOutDuration.innerText = "";
      headerSearchCheckIn.innerText = "";
      headerSearchCheckOut.innerText = "";
    };

    //handle clear when clicking header search customer panel close icon
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

    //handle when clicking next month button
    headerSearchPanelCalendarNextBtn.onclick = function () {
      ++currMonth;
      _this.removeChildDays();
      _this.renderCalendar(..._this.getCurrentDate());
    };

    //handle when clicking previous month button
    headerSearchPanelCalendarPreviousBtn.onclick = function () {
      --currMonth;
      _this.removeChildDays();
      _this.renderCalendar(..._this.getCurrentDate());
    };

    //handle display date duration when clicking day item in calendar__footer
    searchPanelFooterItem.forEach((element) => {
      element.onclick = function () {
        _this.resetSearchCalendarFooterItems();

        searchRoomCheckInDuration.innerText = `${element.innerText
          .slice(0, 3)
          .replace(/ /g, "")}`;
        searchRoomCheckOutDuration.innerText = `${element.innerText
          .slice(0, 3)
          .replace(/ /g, "")}`;

        element.classList.add("search-panel-calendar__footer-item--active");
        _this.checkActiveDaysAndAddDuration();
      };
    });

    //handle switching between normal & flexible calendar when clicking calendar header
    searchPanelCalendarHeaders.forEach((element, index) => {
      element.onclick = function () {
        resetSearchPanelCalendarSwitching();
        _this.resetHeaderSearchBorder();
        searchPanelCalendarFlexDateOption.innerText = "";

        element.classList.add("search-panel-calendar__header-content--active");
        if (index === 0) {
          //All header search room active or not
          if (
            !searchRoomCheckIn.classList.contains(
              "header-search__item--active"
            ) &&
            !searchRoomCheckOut.classList.contains(
              "header-search__item--active"
            )
          ) {
            _this.activeHeaderSearchCheckInItem();
          }
          headerSearchCalendarCheckIn.classList.add(
            "header-search__room--active"
          );
          headerSearchCalendarCheckOut.classList.add(
            "header-search__room--active"
          );
          headerSearchCalendarFlexible.classList.remove(
            "header-search__item--active"
          );
          headerSearchCalendarFlexible.classList.remove(
            "header-search__flexible--active"
          );
          searchPanelNormalCalendar.classList.add(
            "search-panel-calendar__normal--active"
          );
        } else {
          headerSearchCalendarFlexible.classList.add(
            "header-search__item--active"
          );
          //remove separate line of active search item
          headerSearchCalendarFlexible.classList.add(
            "header-search__item--no-border"
          );
          headerSearchLocation.classList.add("header-search__item--no-border");
          headerSearchCalendarCheckIn.classList.remove(
            "header-search__room--active"
          );
          headerSearchCalendarCheckOut.classList.remove(
            "header-search__room--active"
          );
          headerSearchCalendarFlexible.classList.add(
            "header-search__flexible--active"
          );
          searchPanelFlexibleCalendar.classList.add(
            "search-panel-calendar-flexible--active"
          );
          searchPanelCalendarFlexDateItems.forEach((e) => {
            handleCalendarFlexDateOutput(e);
          });

          //display calender flex date in search active item
          searchCalendarFlexInfoDate.innerText = Array.from(dateTitles)
            .map((element, index) => {
              if (
                element
                  .closest(".search-panel-calendar-flexible__dates-item")
                  .classList.contains(
                    "search-panel-calendar-flexible__dates-item--active"
                  ) &&
                index === 0
              ) {
                return `${element.innerText.slice(0, 3)}`;
              } else if (
                element
                  .closest(".search-panel-calendar-flexible__dates-item")
                  .classList.contains(
                    "search-panel-calendar-flexible__dates-item--active"
                  ) &&
                index >= 1 &&
                index <= 3
              ) {
                return `, ${element.innerText.slice(0, 3)}`;
              } else if (
                element
                  .closest(".search-panel-calendar-flexible__dates-item")
                  .classList.contains(
                    "search-panel-calendar-flexible__dates-item--active"
                  ) &&
                index > 3 &&
                index <= 4
              ) {
                return "...";
              } else {
                return;
              }
            })
            .join("");
        }

        _this.removeSeparateOfActiveSearchItem();
      };
    });

    //handle when clicking flexible lengths items
    searchPanelCalendarFlexLengthItems.forEach((element) => {
      element.onclick = function () {
        resetSearchPanelFlexLengthItems();
        element.classList.add(
          "search-panel-calendar-flexible__lengths-item--active"
        );
        searchPanelCalendarFlexLengthOption.innerText = element.innerText;
        searchCalendarFlexInfoLength.innerText = element.innerText;
      };
    });

    //handle when clicking flexible date items
    searchPanelCalendarFlexDateItems.forEach((element) => {
      let dateOutputArr;
      //get current flex dates into array
      const monthNameList = Array.from(dateTitles).map((element) => {
        return element.innerText.trim();
      });
      //sort the output month in ascending order
      const sortDisplayMonth = function (array) {
        array.sort((a, b) => {
          return monthNameList.indexOf(a) - monthNameList.indexOf(b);
        });
      };

      element.onclick = function () {
        const activeItems = $$(
          ".search-panel-calendar-flexible__dates-item--active"
        );

        if (
          activeItems.length == 1 &&
          !element.classList.contains(
            "search-panel-calendar-flexible__dates-item--active"
          )
        ) {
          element.classList.add(
            "search-panel-calendar-flexible__dates-item--active"
          );
          searchPanelCalendarFlexDateOption.innerText =
            searchPanelCalendarFlexDateOption.innerText +
            `, ${element.innerText}`;
        } else if (activeItems.length > 1) {
          element.classList.toggle(
            "search-panel-calendar-flexible__dates-item--active"
          );

          //handle output string and active item
          handleCalendarFlexDateOutput(element);
        } else {
          //always active at least one item
          element.classList.add(
            "search-panel-calendar-flexible__dates-item--active"
          );
          searchPanelCalendarFlexDateOption.innerText =
            searchPanelCalendarFlexDateOption.innerText;
        }

        dateOutputArr = searchPanelCalendarFlexDateOption.innerText.split(", ");
        sortDisplayMonth(dateOutputArr);
        searchPanelCalendarFlexDateOption.innerText = dateOutputArr.join(", ");
        //render flex month display in search item
        searchCalendarFlexInfoDate.innerText = dateOutputArr
          .map((element, index) => {
            if (index <= 3) {
              return ` ${element.slice(0, 3)}`;
            } else if (index == 4) {
              return "...";
            } else {
              return;
            }
          })
          .join(",");
      };
    });

    //handle when scrollTop to show fixed header
    window.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const mobileScrollTop = scrollTop;
      //mobile search - handle show search background when scrollTop
      if (scrollTop > 1) {
        mobileSearchHeader.classList.add("header-mobile__search--active");
      } else {
        mobileSearchHeader.classList.remove("header-mobile__search--active");
      }

      //mobile navbar - handle show/hide mobile navbar when scrollTop
      if (scrollTop > _this.mobilePreviousScroll) {
        mobileHeaderNavbar.classList.remove("header-mobile__navbar--active");
      } else {
        mobileHeaderNavbar.classList.add("header-mobile__navbar--active");
      }
      _this.mobilePreviousScroll = mobileScrollTop;

      //PC header search - handle collapse/expand header search on PC
      if (scrollTop >= headerInfoHeight) {
        showNavbarSearchBtnOnScrolled();
      } else {
        header.classList.remove("header--scrolled-show-background");
        headerNavbar.classList.remove("header__navbar-scrolled");
        headerNavbarMiddle.classList.remove(
          "header__navbar-list-middle--scrolled"
        );
        headerNavbarSearch.classList.remove("header__navbar-search--scrolled");
        headerSearch.classList.remove(
          "header__search--scrolled",
          "header__search--scrolled-show"
        );
        headerNavbarMiddle.classList.remove(
          "header__navbar-list-middle-scrolled--active"
        );
      }
    };

    //handle showing search when clicking navbar header search
    headerNavbarSearch.onclick = function () {
      header.classList.add("header--scrolled-show-background");
      headerNavbarMiddle.classList.remove(
        "header__navbar-list-middle--scrolled"
      );
      headerNavbarMiddle.classList.add(
        "header__navbar-list-middle-scrolled--active"
      );
      headerNavbarSearch.classList.remove("header__navbar-search--scrolled");
      headerSearch.classList.remove("header__search--scrolled");
      headerSearch.classList.add("header__search--scrolled-show");
      headerSearchLocation.classList.add("header-search__item--active");
      activeHeaderSearchLocationPanel();
    };

    //handle active tab and line when clicking future gateways activeItems
    futureGatewaysLine.style.left = futureGateWaysItemActive.offsetLeft + "px";
    futureGatewaysLine.style.width =
      futureGateWaysItemActive.clientWidth -
      futureOffsetWidthPadding -
      6 +
      "px";
    futureGateWaysItems.forEach((futureGateWaysItem) => {
      futureGateWaysItem.onclick = function () {
        if ($(".future-gateways__item.future-gateways__item--active")) {
          $(
            ".future-gateways__item.future-gateways__item--active"
          ).classList.remove("future-gateways__item--active");
        }
        futureGatewaysLine.style.left =
          this.offsetLeft + futureOffsetLeftPadding + "px";
        futureGatewaysLine.style.width =
          this.offsetWidth - futureOffsetWidthPadding + "px";
        futureGateWaysItem.classList.add("future-gateways__item--active");
      };
    });

    //mobile trip category slide - handle scrolling when clicking next button
    mobileTripNextBtn.onclick = function () {
      const mobileTripContainerScrollWidth = mobileTripContainer.scrollWidth;
      mobileTripContainerScrollLeft = mobileTripContainer.scrollLeft;

      mobileTripContainerScrollLeft += mobileTripContainerScrollWidth / 4;
      mobileTripPrevBtn.classList.add(
        "mobile-trip-category-navigation__prev--active"
      );
      mobileTripContainer.scrollLeft = mobileTripContainerScrollLeft;
    };

    //mobile trip category slide - handle scrollLeft when clicking prev button
    mobileTripPrevBtn.onclick = function () {
      const mobileTripContainerScrollWidth = mobileTripContainer.scrollWidth;
      mobileTripContainerScrollLeft = mobileTripContainer.scrollLeft;

      mobileTripContainerScrollLeft -= mobileTripContainerScrollWidth / 4;
      mobileTripNextBtn.classList.add(
        "mobile-trip-category-navigation__next--active"
      );
      mobileTripContainer.scrollLeft = mobileTripContainerScrollLeft;
    };

    //check and handle active next/prev btn when the trip category contain is scrolled
    mobileTripContainer.onscroll = function () {
      mobileContentSectionScroll(
        mobileTripContainer,
        mobileTripNextBtn,
        mobileTripPrevBtn,
        mobileTripContainerScrollLeft,
        "mobile-trip-category-navigation__next--active",
        "mobile-trip-category-navigation__prev--active"
      );
    };

    //mobile live anywhere slide - handle when clicking next button to scrollRight
    mobileLiveNextBtn.onclick = function () {
      const mobileLiveContainerScrollWidth = mobileLiveContainer.scrollWidth;
      mobileLiveContainerScrollLeft = mobileLiveContainer.scrollLeft;

      mobileLiveContainerScrollLeft += mobileLiveContainerScrollWidth / 4;
      mobileLivePrevBtn.classList.add(
        "mobile-live-anywhere-navigation__prev--active"
      );
      mobileLiveContainer.scrollLeft = mobileLiveContainerScrollLeft;
    };

    //mobile live anywhere slide - handle when clicking prev button to scrollLeft
    mobileLivePrevBtn.onclick = function () {
      mobileLiveContainerScrollLeft = mobileLiveContainer.scrollLeft;
      const mobileLiveContainerScrollWidth = mobileLiveContainer.scrollWidth;

      mobileLiveContainerScrollLeft -= mobileLiveContainerScrollWidth / 4;
      mobileLiveNextBtn.classList.add(
        "mobile-live-anywhere-navigation__next--active"
      );
      mobileLiveContainer.scrollLeft = mobileLiveContainerScrollLeft;
    };

    //check and handle active next/prev btn when the live anywhere contain is scrolled
    mobileLiveContainer.onscroll = function () {
      mobileContentSectionScroll(
        mobileLiveContainer,
        mobileLiveNextBtn,
        mobileLivePrevBtn,
        mobileLiveContainerScrollLeft,
        "mobile-live-anywhere-navigation__next--active",
        "mobile-live-anywhere-navigation__prev--active"
      );
    };

    //future gateways - handle when clicking next button to scrollRight
    mobileFutureNextBtn.onclick = function () {
      const mobileFutureContainerScrollWidth =
        mobileFutureContainer.scrollWidth;
      mobileFutureContainerScrollLeft = mobileFutureContainer.scrollLeft;

      mobileFutureContainerScrollLeft += mobileFutureContainerScrollWidth / 8;
      mobileFuturePrevBtn.classList.add(
        "mobile-future-gateways__navigation-prev--active"
      );
      mobileFutureContainer.scrollLeft = mobileFutureContainerScrollLeft;
    };

    //future gateways - handle when clicking prev button to scrollLeft
    mobileFuturePrevBtn.onclick = function () {
      mobileFutureContainerScrollLeft = mobileFutureContainer.scrollLeft;
      const mobileFutureContainerScrollWidth =
        mobileFutureContainer.scrollWidth;

      mobileFutureContainerScrollLeft -= mobileFutureContainerScrollWidth / 8;
      mobileFutureNextBtn.classList.add(
        "mobile-future-gateways__navigation-next--active"
      );
      mobileFutureContainer.scrollLeft = mobileFutureContainerScrollLeft;
    };

    //check and handle active next/prev btn when future gateways is scrolled
    mobileFutureContainer.onscroll = function () {
      mobileContentSectionScroll(
        mobileFutureContainer,
        mobileFutureNextBtn,
        mobileFuturePrevBtn,
        mobileFutureContainerScrollLeft,
        "mobile-future-gateways__navigation-next--active",
        "mobile-future-gateways__navigation-prev--active"
      );
    };

    //handle active mobile navbar item when clicking
    mobileNavbarItems.forEach((element) => {
      element.onclick = function () {
        if (
          $(".header-mobile__navbar-item.header-mobile__navbar-item--active")
        ) {
          $(
            ".header-mobile__navbar-item.header-mobile__navbar-item--active"
          ).classList.remove("header-mobile__navbar-item--active");
        }
        element.classList.add("header-mobile__navbar-item--active");
      };
    });
  },

  isLeapYear: function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  },

  getFebDays: function (year) {
    return this.isLeapYear(year) ? 29 : 28;
  },

  //start day from Monday
  convertWeekDaysFromMonday: function (firstDayOfMonth) {
    return (firstDayOfMonth.getDay() || 7) - 1;
  },

  renderCalendar: function (month, secondMonth, secondYear, year) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
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
    let firstDaySecondMonth = new Date(secondYear, secondMonth, 1);

    //render calender month & year heading
    headerSearchPanelCalendarHeading.forEach((e, index) => {
      if (month + index <= 11) {
        e.innerText = `${monthNames[month + index]} ${year}`;
      } else {
        e.innerText = `${monthNames[0]} ${secondYear}`;
      }
    });

    //render the first calendar in panel
    for (let i = 0; i <= daysOfMonth[month] + firstDay.getDay() - 1; i++) {
      let day = document.createElement("div");

      if (i >= firstDay.getDay()) {
        day.innerHTML = i - firstDay.getDay() + 1;
        if (
          (i - firstDay.getDay() + 1 < currentDate.getDate() &&
            year === currentDate.getFullYear() &&
            month === currentDate.getMonth()) ||
          (year === currentDate.getFullYear() &&
            month < currentDate.getMonth()) ||
          year < currentDate.getFullYear()
        ) {
          day.setAttribute(
            "class",
            "search-panel-calendar__days-data search-panel-calendar__days-data--disabled"
          );
        } else {
          day.classList.add("search-panel-calendar__days-data");
          day.setAttribute("onclick", "app.handleSelectCalendar(this);");
          day.setAttribute("data-index", `${i - firstDay.getDay() + 1}`);
        }
      } else {
        day.classList.add("search-panel-calendar__days-empty");
      }
      headerSearchPanelCalendarDays.appendChild(day);
    }

    //render the second calendar in panel
    for (
      let i = 0;
      i <= daysOfMonth[secondMonth] + firstDaySecondMonth.getDay() - 1;
      i++
    ) {
      let dayNext = document.createElement("div");
      dayNext.classList.add("search-panel-calendar__days-empty");
      if (i >= firstDaySecondMonth.getDay()) {
        dayNext.innerHTML = i - firstDaySecondMonth.getDay() + 1;
        if (
          (i - firstDaySecondMonth.getDay() + 1 < currentDate.getDate() &&
            secondYear === currentDate.getFullYear() &&
            secondMonth === currentDate.getMonth()) ||
          (secondYear === currentDate.getFullYear() &&
            secondMonth < currentDate.getMonth()) ||
          secondYear < currentDate.getFullYear()
        ) {
          dayNext.setAttribute(
            "class",
            "search-panel-calendar__days-data search-panel-calendar__days-data--disabled"
          );
        } else {
          dayNext.classList.add("search-panel-calendar__days-data");
          dayNext.setAttribute("onclick", "app.handleSelectCalendar(this);");
          dayNext.setAttribute(
            "data-index",
            `${10 * (i - firstDaySecondMonth.getDay() + 1)}`
          );
        }
      } else {
        dayNext.classList.add("search-panel-calendar__days-empty");
      }
      headerSearchPanelCalendarDaysNext.appendChild(dayNext);
    }
  },

  getCurrentDate: function () {
    secondMonth = currMonth + 1;

    if (currMonth > 11) {
      currMonth = 0;
      currYear = currYear + 1;
      secondMonth = currMonth + 1;
      secondYear = currYear;
    } else if (secondMonth > 11) {
      secondMonth = 0;
      secondYear = currYear + 1;
    } else if (currMonth < 0) {
      currMonth = 11;
      currYear = currYear - 1;
    } else if (secondMonth < 0) {
      secondMonth = 11;
      secondYear = currYear - 1;
    } else {
      secondYear = currYear;
    }

    return [currMonth, secondMonth, secondYear, currYear];
  },

  resetDate: function () {
    currDate = new Date();
    currMonth = currDate.getMonth();
    currYear = currDate.getFullYear();
    secondMonth = currMonth + 1;
    secondYear = currYear;

    this.getCurrentDate();
    return [currMonth, secondMonth, secondYear, currYear];
  },

  removeChildDays: function () {
    this.calendarDataIndex = 0;

    while (headerSearchPanelCalendarDays.hasChildNodes()) {
      headerSearchPanelCalendarDays.removeChild(
        headerSearchPanelCalendarDays.lastChild
      );
    }
    while (headerSearchPanelCalendarDaysNext.hasChildNodes()) {
      headerSearchPanelCalendarDaysNext.removeChild(
        headerSearchPanelCalendarDaysNext.lastChild
      );
    }
  },

  handleSelectCalendar: function (e) {
    const calendarActiveElements = $$(
      ".search-panel-calendar__days-data--active"
    );
    const calendarElements = $$(".search-panel-calendar__days-data");
    const headerSearchCheckInItem = headerSearchCheckIn.closest(
      ".header-search__room"
    );
    const headerSearchCheckOutItem = headerSearchCheckOut.closest(
      ".header-search__room"
    );
    const calendarHeadingTxt = e.closest(".search-panel-calendar__container")
      .firstElementChild.innerText;
    let calendarActiveElementsLength = calendarActiveElements.length;

    const resetFirstSelection = function () {
      calendarElements.forEach((element) => {
        element.classList.remove("search-panel-calendar__days-data--active");
      });
    };
    const resetSecondSelection = function () {
      calendarElements.forEach((element) => {
        element.classList.remove(
          "search-panel-calendar__days-data--active-second"
        );
      });
    };
    const resetAllSelection = function () {
      calendarElements.forEach((element) => {
        element.classList.remove(
          "search-panel-calendar__days-data--active-second"
        );
        element.classList.remove("search-panel-calendar__days-data--active");
      });
    };
    const activeHeaderSearchCheckOutItem = function () {
      headerSearchCheckOutItem.classList.add("header-search__item--no-border");
      headerSearchCheckOutItem.classList.add("header-search__item--active");
      headerSearch.classList.add("header__search--active");
    };
    const activeSearchChkInDayHideDescItem = function () {
      headerSearchCheckIn.classList.add("header-search__checkIn--active");
      searchRoomCheckInDesc.classList.add("header-search__desc--disable");
      headerSearchCheckIn
        .closest(".header-search__room-container")
        .classList.add("header-search__desc--disable");
    };
    const activeSearchChkOutDayHideDescItem = function () {
      headerSearchCheckOut.classList.add("header-search__checkOut--active");
      searchRoomCheckOutDesc.classList.add("header-search__desc--disable");
    };

    if (
      calendarActiveElementsLength <= 1 &&
      headerSearchCheckInItem.classList.contains("header-search__item--active")
    ) {
      resetFirstSelection();
      this.calendarDataIndex = e.dataset.index;
      this.resetHeaderSearchItems();
      this.resetHeaderSearchBorder();
      this.removeHeaderSearchBorder(headerSearchCheckOutItem);
      this.resetHeaderSearchRoomCloseBtn();
      activeHeaderSearchCheckOutItem();
      activeSearchChkInDayHideDescItem();
      e.classList.add("search-panel-calendar__days-data--active");

      if (
        headerSearchCheckInItem.classList.contains(
          "header-search__item--active"
        )
      ) {
        headerSearchRoomChkInCloseBtn.classList.add(
          "header-search__room-close--active"
        );
      } else if (
        headerSearchCheckOutItem.classList.contains(
          "header-search__item--active"
        ) &&
        headerSearchCheckOut.classList.contains(
          "header-search__checkOut--active"
        )
      ) {
        headerSearchRoomChkInCloseBtn.classList.remove(
          "header-search__room-close--active"
        );
        headerSearchRoomChkOutCloseBtn.classList.add(
          "header-search__room-close--active"
        );
      } else {
        this.resetHeaderSearchRoomCloseBtn();
      }

      headerSearchCheckIn.innerText = `${calendarHeadingTxt.slice(0, 3)} ${
        e.innerText
      }`;
    } else if (
      calendarActiveElementsLength < 2 &&
      calendarActiveElementsLength >= 0 &&
      Number(e.dataset.index) >= Number(this.calendarDataIndex) &&
      headerSearchCheckOutItem.classList.contains("header-search__item--active")
    ) {
      resetSecondSelection();
      this.resetHeaderSearchItems();
      this.resetHeaderSearchBorder();
      this.removeHeaderSearchBorder(headerSearchCheckOutItem);
      this.resetHeaderSearchRoomCloseBtn();
      activeSearchChkOutDayHideDescItem();
      e.classList.add("search-panel-calendar__days-data--active-second");

      !headerSearchCheckIn.classList.contains("header-search__checkIn--active")
        ? this.activeHeaderSearchCheckInItem()
        : activeHeaderSearchCheckOutItem();

      headerSearchCheckOutItem.classList.contains("header-search__item--active")
        ? headerSearchRoomChkOutCloseBtn.classList.add(
            "header-search__room-close--active"
          )
        : headerSearchRoomChkOutCloseBtn.classList.remove(
            "header-search__room-close--active"
          );

      headerSearchCheckOut.innerText = `${calendarHeadingTxt.slice(0, 3)} ${
        e.innerText
      }`;
    } else if (Number(e.dataset.index) < Number(this.calendarDataIndex)) {
      this.calendarDataIndex = e.dataset.index;
      resetAllSelection();
      this.resetHeaderSearchRoomCloseBtn();
      this.resetHeaderSearchItems();
      this.resetHeaderSearchBorder();
      this.removeHeaderSearchBorder(headerSearchCheckOutItem);
      this.inactiveSearchChkOutDayShowDescItem();
      activeSearchChkInDayHideDescItem();
      activeHeaderSearchCheckOutItem();
      e.classList.add("search-panel-calendar__days-data--active");

      if (
        headerSearchCheckOutItem.classList.contains(
          "header-search__item--active"
        ) &&
        headerSearchCheckOut.classList.contains(
          "header-search__checkOut--active"
        )
      ) {
        headerSearchRoomChkInCloseBtn.classList.remove(
          "header-search__room-close--active"
        );
        headerSearchRoomChkOutCloseBtn.classList.add(
          "header-search__room-close--active"
        );
      }

      headerSearchCheckIn.innerText = `${calendarHeadingTxt.slice(0, 3)} ${
        e.innerText
      }`;
    } else {
      resetAllSelection();
      this.resetHeaderSearchRoomCloseBtn();
      this.resetHeaderSearchItems();
      this.resetHeaderSearchBorder();
      this.inactiveSearchChkOutDayShowDescItem();
    }

    this.checkActiveDaysAndAddDuration();
  },

  removeSeparateOfActiveSearchItem: function () {
    headerSearchItems.forEach((element) => {
      if (element.classList.contains("header-search__item--active")) {
        element.classList.add("header-search__item--no-border");

        if (element.previousElementSibling) {
          element.previousElementSibling.classList.add(
            "header-search__item--no-border"
          );
        }
      }
    });
  },

  activeHeaderSearchCheckInItem: function () {
    const headerSearchCheckInItem = headerSearchCheckIn.closest(
      ".header-search__room"
    );
    headerSearchCheckInItem.classList.add("header-search__item--no-border");
    headerSearchCheckInItem.classList.add("header-search__item--active");
    headerSearch.classList.add("header__search--active");
  },

  inactiveSearchChkInDayShowDescItem: function () {
    headerSearchCheckIn.classList.remove("header-search__checkIn--active");
    searchRoomCheckInDesc.classList.remove("header-search__desc--disable");
  },

  inactiveSearchChkOutDayShowDescItem: function () {
    headerSearchCheckOut.classList.remove("header-search__checkOut--active");
    searchRoomCheckOutDesc.classList.remove("header-search__desc--disable");
  },

  checkActiveDaysAndAddDuration: function () {
    if (
      headerSearchCheckIn.classList.contains(
        "header-search__checkIn--active"
      ) &&
      headerSearchCheckOut.classList.contains("header-search__checkOut--active")
    ) {
      searchRoomCheckInDuration.classList.add(
        "header-search__duration--active"
      );
      searchRoomCheckOutDuration.classList.add(
        "header-search__duration--active"
      );
    } else if (
      headerSearchCheckIn.classList.contains("header-search__checkIn--active")
    ) {
      searchRoomCheckInDuration.classList.add(
        "header-search__duration--active"
      );
      searchRoomCheckOutDuration.classList.remove(
        "header-search__duration--active"
      );
    } else if (
      headerSearchCheckOut.classList.contains("header-search__checkOut--active")
    ) {
      searchRoomCheckOutDuration.classList.add(
        "header-search__duration--active"
      );
      searchRoomCheckInDuration.classList.remove(
        "header-search__duration--active"
      );
    } else {
      searchRoomCheckInDuration.classList.remove(
        "header-search__duration--active"
      );
      searchRoomCheckOutDuration.classList.remove(
        "header-search__duration--active"
      );
    }
  },

  resetHeaderSearchRoomCloseBtn: function () {
    headerSearchRoomChkInCloseBtn.classList.remove(
      "header-search__room-close--active"
    );
    headerSearchRoomChkOutCloseBtn.classList.remove(
      "header-search__room-close--active"
    );
  },

  resetSearchCalendarFooterItems: function () {
    searchPanelFooterItem.forEach((element) => {
      element.classList.remove("search-panel-calendar__footer-item--active");
      searchRoomCheckInDuration.classList.remove(
        "header-search__duration--active"
      );
      searchRoomCheckOutDuration.classList.remove(
        "header-search__duration--active"
      );
    });
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
      } guest`;
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
      } guest, ${Number(headerSearchPanelCustomerChildNum.innerText)} infants`;
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

  removePreviousHeaderSearchBorder: function (e) {
    if (e.previousElementSibling) {
      e.previousElementSibling.classList.add("header-search__item--no-border");
    }
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
    this.removeChildDays();
    this.renderCalendar(...this.resetDate());
    this.handleEvents();
  },
};

app.start();
