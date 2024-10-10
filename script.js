const cardImage = document.getElementById("card-image");
const pDescription = document.getElementById("p-description");
const card = document.querySelector(".wilder-card");

const person = [
  {
    id: 1,
    name: "Abdou Cissé",
    age: 38,
    img: "./assets/images/Abdou.jpg",
    avatar: "./assets/avatar/abdou.jpg",
    stack: "HTML",
    description:
      "Abdou, jeune vieux de 38ans, soif de connaissances dans des domaines divers et variés. Eternel écrivain en herbe, j'écris souvent des éditos et analyses politiques à mes heures perdues. Passionné de la Tech, je me forge à explorer les métiers de la Tech dans une reconversion en cours.",
    quote: "L'effort fait les forts",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
  },
  {
    id: 2,
    name: "Cédric Righi",
    age: 20,
    img: "./assets/images/Justine.jpg",
    avatar: "./assets/avatar/cedric.jpg",
    stack: "JS",
    description:
      "Passionné par l’informatique et la technologie, j’aime explorer des sujets techniques tout en gardant une touche d’humour dans ma vie quotidienne. Toujours à la recherche de nouveaux défis et d’apprentissages, j’aime varier les plaisirs entre logique et créativité.",
    quote: "Je vais vous prendre une glace blanche avec les SmicSmac.",
    levelHtml: 100,
    levelCss: 100,
    levelJs: 100,
  },
  {
    id: 3,
    name: "Charlotte Albouy",
    age: 24,
    img: "./assets/images/Charlotte.jpg",
    avatar: "./assets/avatar/charlotte.jpg",
    stack: "CSS",
    description:
      "Toujours de bonne humeur, je m'adapte facilement dans un nouvel environnement.",
    quote: "Better late than ugly.",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
  },
  {
    id: 5,
    name: "Florentin Monteil",
    age: 24,
    img: "./assets/images/Flo.jpg",
    avatar: "./assets/avatar/flo.jpg",
    stack: "CSS",
    description:
      "Toujours de bonne humeur, je m'adapte facilement dans un nouvel environnement.",
    quote: "Better late than ugly.",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
  },
];

const grid = document.querySelector(".grid");

person.forEach((element) => {
  const image = document.createElement("img");
  grid.appendChild(image);
  image.src = `${element.avatar}`;

  image.addEventListener("click", () => {
    card.classList.add("wilder-card-active");
    card.classList.remove("wilder-card");
    cardImage.src = element.img;
    pDescription.textContent = element.description;
  });
});
