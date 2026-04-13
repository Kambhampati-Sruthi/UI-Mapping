const cards = [
  {
    banner: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Ocean Breeze",
    description: "Experience the calming waves and fresh sea air at beautiful coastal destinations."
  },
  {
    banner: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    title: "Mountain Adventure",
    description: "Explore breathtaking mountain landscapes and enjoy thrilling outdoor activities."
  },
  {
    banner: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    title: "City Lights",
    description: "Dive into the vibrant life of modern cities filled with culture, food, and nightlife."
  },
  {
    banner: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Forest Escape",
    description: "Reconnect with nature in peaceful forests surrounded by greenery and wildlife."
  }
];
var btn1 = document.querySelector("#btn");
var container = document.querySelector("#container");

btn1.addEventListener("click", () => {
   container.innerHTML="";
  cards.forEach((c) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let imgel = document.createElement("img");
    imgel.src = c.banner;
    card.appendChild(imgel);

    let titleel = document.createElement("h2");
    titleel.innerHTML = c.title;
    card.appendChild(titleel);

    let desc = document.createElement("p");
    desc.innerHTML = c.description;
    card.appendChild(desc);

    container.appendChild(card);
  });
});

    