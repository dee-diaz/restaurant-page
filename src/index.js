import "./style.css";
import Nav from "./components/Nav";
import createHome from "./pages/home";
import logo from "./assets/img/logo.svg";
import { createReservations } from "./pages/reservations";

class App {
  constructor() {
    this._root = document.querySelector("#content");
    this.tabs = ["home", "menu", "reserve"];
    this.nav = new Nav(this.tabs);
    this._createLogo();
    this._createHeading();
    this._createContainer();
    this._activateCtaButton();
  }

  _createLogo() {
    const header = document.querySelector("header");
    const logoImg = document.createElement("img");
    logoImg.src = logo;
    header.appendChild(logoImg);
  }

  _createHeading() {
    const h1 = document.createElement("h1");
    this._root.appendChild(h1);
  }

  _createContainer() {
    const container = document.createElement("div");
    container.classList = "container";
    this._root.appendChild(container);
  }

  displayHomeTab() {
    const container = document.querySelector(".container");
    const home = createHome();
    container.appendChild(home);
  }

  _activateCtaButton() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-cta')) {
      this.nav.switchTab(e);
    }
  })
}
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.displayHomeTab();
});
