export function createMenu() {
  const container = document.querySelector(".container");
  const h1 = document.querySelector("h1");
  h1.textContent = "Menu";

  const col1 = createList("Sushi & Sashimi", [
    "Salmon Nigiri (2 pcs) — $17",
    "Tuna Sashimi (6 pcs) — $24",
    "Eel Roll — $22",
    "Mishin Special Roll — $28",
    "Dragon Roll — $36",
    "Caterpillar Roll — $44",
    "Volcano Roll — $47",
  ]);

  const col2 = createList("Noodles & Rice", [
    "Tonkotsu Ramen — $25",
    "Shoyu Ramen — $24",
    "Tempura Udon — $24",
    "Yaki Soba — $33",
    "Curry Udon — $25",
    "Chahan (Fried Rice) — $12",
    "Gyudon — $16",
    "Katsu Curry Rice — $28",
  ]);

  const col3 = createList("Hot Dishes", [
    "Chicken Katsu — $15",
    "Beef Teriyaki — $18",
    "Unagi Don — $20",
    "Salmon Teriyaki — $19",
    "Karaage — $14",
    "Okonomiyaki — $12",
    "Shogayaki (Ginger pork sauté) — $16",
  ]);

  const col4 = createList("Desserts", [
    "Mochi Ice Cream — $7",
    "Matcha Cheesecake — $8",
    "Dorayaki — $6",
    "Matcha Tiramisu — $9",
    "Hōjicha Pudding — $7",
  ]);

  container.appendChild(col1);
  container.appendChild(col2);
  container.appendChild(col3);
  container.appendChild(col4);
}

function createList(listTitle, listItemsArr) {
  const col = document.createElement("div");
  col.className = "column";
  const h2 = document.createElement("h2");
  h2.textContent = listTitle;
  const list = document.createElement("ul");
  list.className = "menu-list";

  listItemsArr.forEach((item) => {
    const li = document.createElement("li");
    li.className = "menu-list-item";
    li.textContent = item;
    list.appendChild(li);
  });

  col.appendChild(h2);
  col.appendChild(list);

  return col;
}
