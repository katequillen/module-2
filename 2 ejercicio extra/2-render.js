const data = {
  palettes: [
    {
      id: "1-93-po",
      name: "Tardis Blue",
      from: "Doctor Who",
      colors: ["003A6E", "9B9A99", "000000", "FFFFFF", "6F4500"],
    },
    {
      id: "2-54-ha",
      name: "Millenium Falcon",
      from: "Star Wars",
      colors: ["B6B6BE", "D8D7D4", "413A31", "746C66", "A32D2C"],
    },
    {
      id: "3-02-ma",
      name: "Battlestar Galactica",
      from: "Battlestar Galactica",
      colors: ["080F19", "1B2E3F", "364269", "3D6973", "E5635F"],
    },
    {
      id: "4-87-mm",
      name: "Serenity",
      from: "Firefly",
      colors: ["3C5375", "7285A6", "96AABF", "F1DB7E", "0C0C0C"],
    },
    {
      id: "5-44-sw",
      name: "Nostromo",
      from: "Alien",
      colors: ["08070C", "F4F3F5", "121828", "464F75", "9ABEF2"],
    },
  ],
};

data.palettes[0];

const paletteList = document.querySelector(".js__palette-list");

paletteList.innerHTML += "";

<li class="palette__list-item">
  <h3 class="item__name">${paletteList.name}</h3>
  <p>Origen:${paletteList.from}</p>
  <div class="item__colors-box">
    <span>Colores:</span>
    <ul class="item__colors-list">${htmlColors}</ul>
  </div>
</li>;
