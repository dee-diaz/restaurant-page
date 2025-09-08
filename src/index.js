import "./style.css";
import Nav from "./components/Nav";
import createHome from "./pages/home";

class App {
  constructor() {
    this._root = document.querySelector("#content");
    this.tabs = ["home", "menu", "reserve"];
    this.nav = new Nav(this.tabs);
    this._createHeading();
    this._createContainer();
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
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  createHome();
});