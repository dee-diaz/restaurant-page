class Nav {
  constructor(tabs) {
    this.tabs = tabs;
    this.currentTab = tabs[0];
    this._createNav();
    this._cache = { tabs: document.querySelectorAll(".nav-link") };
    this._renderActiveTab();
    this._bindEvents();
  }


  _createNav() {
    const navEl = document.querySelector("nav");
    const navList = document.createElement("ul");
    navList.className = "nav-links";

    this.tabs.forEach(tab => {
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
    if (!e.target.classList.contains("nav-link")) return;
    this.currentTab = e.target.getAttribute("data-tab"); 
    this._cache.tabs.forEach(tab => tab.classList.remove("active"));
    this._renderActiveTab();
  }

  _renderActiveTab() {
    const activeButton = document.querySelector(`[data-tab="${this.currentTab}"]`);
    activeButton?.classList.add("active");
  }
}

export default Nav;
