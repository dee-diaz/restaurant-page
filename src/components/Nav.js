import { createMenu } from "../pages/menu";
import createHome from "../pages/home";
import { createReservations } from "../pages/reservations";

class Nav {
  constructor(tabs) {
    this.tabs = tabs;
    this.currentTab = tabs[0];
    this._createNav();
    this._cache = {
      tabs: document.querySelectorAll(".nav-link"),
    };
    this._renderActiveTab();
    this._bindEvents();
  }

  _createNav() {
    const navEl = document.querySelector("nav");
    const navList = document.createElement("ul");
    navList.className = "nav-links";

    this.tabs.forEach((tab) => {
      const navItem = document.createElement("li");
      const navBtn = document.createElement("button");
      navBtn.className = "nav-link";
      navBtn.setAttribute("data-tab", tab);
      navBtn.textContent = tab;
      navItem.appendChild(navBtn);
      navList.appendChild(navItem);
    });
    navEl.appendChild(navList);
  }

  _bindEvents() {
    const navEl = document.querySelector("nav");
    navEl.addEventListener("click", this.switchTab.bind(this));
  }

  switchTab(e) {
    if (e.target.classList.contains("btn-cta")) {
      this.currentTab = "reserve";
    }
    else if (e.target.classList.contains("nav-link")) {
      this.currentTab = e.target.getAttribute("data-tab");
    }
    else {
      return;
    }
    this._cache.tabs.forEach((tab) => tab.classList.remove("active"));
    this._renderActiveTab();

    const container = document.querySelector(".container");
    container.innerHTML = "";

    if (this.currentTab === this.tabs[0]) {
      const home = createHome();
      container.appendChild(home);
      const button = document.querySelector(".btn-cta");
      button.addEventListener("click", this.switchTab.bind(this));
    } else if (this.currentTab === this.tabs[1]) {
      const menu = createMenu();
      container.appendChild(menu);
    } else {
      const reservations = createReservations();
      container.appendChild(reservations);
    }
  }

  _renderActiveTab() {
    const activeButton = document.querySelector(
      `[data-tab="${this.currentTab}"]`
    );
    activeButton?.classList.add("active");
  }
}

export default Nav;
