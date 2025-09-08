import "./style.css";
import Nav from "./components/Nav";

class App {
  constructor() {
    this.tabs = ["home", "menu", "reserve"];
    this.nav = new Nav(this.tabs);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
});
