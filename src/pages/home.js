function createTopContent() {
  const container = document.querySelector(".container");
  const h1 = document.querySelector("h1");
  h1.textContent = "Heart of japanese flavor";

  const topContainer = document.createElement("div");
  topContainer.className = "top-container";

  const textBox = document.createElement("div");
  textBox.className = "textbox";
  const title = document.createElement("h2");
  title.textContent = "The Soul of Authentic Taste";
  const para = document.createElement("p");
  para.textContent =
    "Welcome to Mishin — where every dish is crafted with the freshest ingredients and authentic care. Discover the true taste of Japan, served with mastery and tradition.";
  const button = document.createElement("button");
  button.className = "btn-cta";
  button.textContent = "Reserve a Table";
  const svgCode = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 10.5C2.5 10.6658 2.56584 10.8247 2.68305 10.942C2.80026 11.0592 2.95924 11.125 3.125 11.125H15.3664L10.8078 15.6828C10.7497 15.7409 10.7037 15.8098 10.6722 15.8857C10.6408 15.9616 10.6246 16.0429 10.6246 16.125C10.6246 16.2071 10.6408 16.2885 10.6722 16.3643C10.7037 16.4402 10.7497 16.5091 10.8078 16.5672C10.8659 16.6253 10.9348 16.6713 11.0107 16.7028C11.0866 16.7342 11.1679 16.7504 11.25 16.7504C11.3321 16.7504 11.4134 16.7342 11.4893 16.7028C11.5652 16.6713 11.6341 16.6253 11.6922 16.5672L17.3172 10.9422C17.3753 10.8842 17.4214 10.8152 17.4528 10.7393C17.4843 10.6635 17.5005 10.5821 17.5005 10.5C17.5005 10.4179 17.4843 10.3365 17.4528 10.2607C17.4214 10.1848 17.3753 10.1159 17.3172 10.0578L11.6922 4.43282C11.5749 4.31555 11.4158 4.24966 11.25 4.24966C11.0841 4.24966 10.9251 4.31555 10.8078 4.43282C10.6905 4.5501 10.6246 4.70916 10.6246 4.87501C10.6246 5.04086 10.6905 5.19992 10.8078 5.3172L15.3664 9.87501H3.125C2.95924 9.87501 2.80026 9.94086 2.68305 10.0581C2.56584 10.1753 2.5 10.3343 2.5 10.5Z" fill="#171717"/>
</svg>

  `;

  button.innerHTML += svgCode;
  textBox.appendChild(title);
  textBox.appendChild(para);
  textBox.appendChild(button);

  const topImage = document.createElement("div");
  topImage.className = "top-img";

  topContainer.appendChild(textBox);
  topContainer.appendChild(topImage);

  container.appendChild(topContainer);
}

function createBottomContent() {
  const container = document.querySelector(".container");
  const bottomContainer = document.createElement("div");
  bottomContainer.className = "bottom-container";

  const textBox = document.createElement("div");
  textBox.className = "textbox";
  const title = document.createElement("h2");
  title.textContent = "Meet the chef";
  const para = document.createElement("p");
  para.textContent =
    "Our head chef welcomes you with a personal message and shares the passion that inspires every dish we serve.";

  textBox.appendChild(title);
  textBox.appendChild(para);

  const bottomImage = document.createElement("div");
  bottomImage.className = "bottom-img";

  bottomContainer.appendChild(textBox);
  bottomContainer.appendChild(bottomImage);

  container.appendChild(bottomContainer);
}

function createHome() {
  createTopContent();
  createBottomContent();
}

export default createHome;
