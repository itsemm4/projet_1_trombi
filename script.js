const cardImage = document.getElementById("card-image");
const pDescription = document.getElementById("p-description");
const citation = document.querySelector('blockquote')
const card = document.querySelector(".wilder-card");
const grid = document.querySelector(".grid");
const close = document.querySelector("#closing-cross");
const wilderName = document.querySelector(".wilder_name");
const wilderAge = document.querySelector(".wilder_age");
const iconStack = document.querySelector(".icon-stack");
const iconGenre = document.querySelector(".icon-genre");

const person = [
  {
    id: 1,
    name: "Abdou Cissé",
    age: 38,
    img: "./assets/images/Abdou.jpg",
    avatar: "./assets/avatar/abdou.jpg",
    stack: "./assets/icons/html_white.png",
    gender: "./assets/icons/whiteMale.png",
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
    stack: "./assets/icons/js_white.png",
    gender: "./assets/icons/whiteMale.png",
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
    age: 33,
    img: "./assets/images/Charlotte.jpg",
    avatar: "./assets/avatar/charlotte.jpg",
    stack: "./assets/icons/css_white.png",
    gender: "./assets/icons/whiteFemale.png",
    description:
      "Toujours de bonne humeur, je m'adapte facilement dans un nouvel environnement.",
    quote: "Better late than ugly.",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
  },
  {
    id: 4,
    name: "Emma Robinet",
    age: 28,
    img: "./assets/images/Charlotte.jpg",
    avatar: "./assets/avatar/emma.jpg",
    stack: "./assets/icons/html_white.png",
    gender: "./assets/icons/whiteFemale.png",
    description:
      "J'aime tout ce qui est à trait à l'Art (Photographie, Peinture, Digital etc.) et je ne peux pas me passer d'écouter de la musique.",
    quote:
      "Le bonheur, est-ce de se satisfaire du moment présent, quel qu'il soit ? Cela semble tout à la fois simple et difficile. - Vagabond",
    levelHtml: 100,
    levelCss: 100,
    levelJs: 100,
  },
  {
    id: 5,
    name: "Florentin Monteil",
    age: 39,
    img: "./assets/images/Flo.jpg",
    avatar: "./assets/avatar/flo.jpg",
    stack: "./assets/icons/js_white.png",
    gender: "./assets/icons/whiteMale.png",
    description:
      "Acheteur de formation, développeur web en devenir, toujours curieux et désireux d'apprendre, adepte de bons mots et de calembours, de bonne humeur et constamment à l'écoute des autres. Sinon j'ai aussi des défauts.",
    quote:
      "Ris, tout le monde rira avec toi, pleure et tu seras seul à pleurer.",
    levelHtml: 100,
    levelCss: 100,
    levelJs: 100,
  },
  {
    id: 6,
    name: "Julien Joecker",
    age: 28,
    img: "./assets/images/Flo.jpg",
    avatar: "./assets/avatar/julien.jpg",
    stack: "./assets/icons/js_white.png",
    gender: "./assets/icons/whiteMale.png",
    description:
      "Try harder, persévérant qui n'aime pas abandonner. Signe distinctif : oublie souvent de verrouiller son ordinateur.",
    quote:
      "Pour parler ? Au diable les misérables têtes d'œuf qui ont inventé le pourparler.",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
  },
  {
    id: 7,
    name: "Justine Cousin",
    age: 41,
    img: "./assets/images/Flo.jpg",
    avatar: "./assets/avatar/justine.jpg",
    stack: "./assets/icons/css_white.png",
    gender: "./assets/icons/whiteFemale.png",
    description: "Maman touche à tout. Qui aime apprendre de nouvelles choses.",
    quote:
      "La vie, c'est comme une boîte de chocolats, on ne sait jamais sur quoi on va tomber.",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
  },
  {
    id: 8,
    name: "Mike Hatchi",
    age: 23,
    img: "./assets/images/Flo.jpg",
    avatar: "./assets/avatar/mike.jpg",
    stack: "./assets/icons/js_white.png",
    gender: "./assets/icons/whiteMale.png",
    description:
      "Curieux et créatif, je trouve toujours des solutions avec une touche d’humour et de spontanéité. Ouvert et sociable, j'aime relever des défis tout en apportant une bonne dose de bonne humeur.",
    quote:
      "Toujours prêt à relever les défis… sauf ceux qui commencent avant 8h du matin.",
    levelHtml: 100,
    levelCss: 100,
    levelJs: 100,
  },
  {
    id: 9,
    name: "Radwan Osman",
    age: 24,
    img: "./assets/images/Flo.jpg",
    avatar: "./assets/avatar/radwan.jpg",
    stack: "./assets/icons/js_white.png",
    gender: "./assets/icons/whiteMale.png",
    description:
      "Je suis quelqu'un un peu tête en l'air du genre solitaire mais bonne ambiance , ma grande passion c'est le foot et j'adore vanner!",
    quote:
      "Ce ne sont pas les gens qui changent , ce sont les masques qui tombent",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
  },
  {
    id: 10,
    name: "Rémi Zickenheiner",
    age: 26,
    img: "./assets/images/Flo.jpg",
    avatar: "./assets/avatar/remi.jpg",
    stack: "./assets/icons/js_white.png",
    gender: "./assets/icons/whiteMale.png",
    description: "Je suis quelqu'un et c'est deja bien !",
    quote: "Kebab",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
  },
  {
    id: 11,
    name: "Sylvia Barraud",
    age: 34,
    img: "./assets/images/Flo.jpg",
    avatar: "./assets/avatar/sylvia.jpg",
    stack: "./assets/icons/js_white.png",
    gender: "./assets/icons/whiteFemale.png",
    description:
      "Curieuse et dynamique, j’adore apprendre et découvrir de nouvelles choses que ce soit professionnellement (notamment à travers la veille technologique) ou dans la sphère privée (la guitare, les langues, les voyages, la cuisine).  Aimant les responsabilités, je fais partie d’un groupe d’échange en anglais que j’ai plaisir à animer en tant qu’hôte.",
    quote:
      "There's always gonna be another mountain, I'm always gonna wanna make it move, Ain't about how fast I get there, Ain't about what's waiting on the other sid, It's the climb - Miley Cirus",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
  },
  {
    id: 12,
    name: "Thierry Lenepveu",
    age: 56,
    img: "./assets/images/Flo.jpg",
    avatar: "./assets/avatar/thierry.jpg",
    stack: "./assets/icons/js_white.png",
    gender: "./assets/icons/whiteMale.png",
    description:
      "Je suis quelqu'un de timide mais sérieux, avec une détermination inébranlable. J'avance avec persévérance vers les objectifs que je me suis fixé.",
    quote: "Je suis ton père.",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
  },
  {
    id: 13,
    name: "Tom Schricke",
    age: 23,
    img: "./assets/images/Flo.jpg",
    avatar: "./assets/avatar/tom.jpg",
    stack: "./assets/icons/js_white.png",
    gender: "./assets/icons/whiteMale.png",
    description: "A venir",
    quote: "A venir",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
  },
  {
    id: 14,
    name: "Arthur Heurtebise",
    age: 32,
    img: "./assets/images/Flo.jpg",
    avatar: "./assets/avatar/arthur.jpg",
    stack: "./assets/icons/js_white.png",
    gender: "./assets/icons/whiteMale.png",
    description:
      "Papa, musicien et formateur, il y a peu de choses que j'aime plus que de transmettre mon savoir sur des sujets variés. Depuis 2022, c'est le développement web à la Wild Code School ! En février 2025, j'aurai la fierté d'avoir contribué à la reconversion professionnelle de 58 développeurs, car c'est bien ce que j'aime par dessus tout dans mon métier : les rencontres et le contact humain.",
    quote:
      "The only thing I do know... is that we have to be kind. Please, be kind - especially when we don't know what's going on. - Everything, Everywhere, All at Once - The Daniels, 2022",
    levelHtml: 100,
    levelCss: 100,
    levelJs: 100,
  },
];

person.forEach((element) => {
  const image = document.createElement("img");
  grid.appendChild(image);
  image.src = `${element.avatar}`;

  image.addEventListener("click", () => {
    card.classList.add("wilder-card-active");
    card.classList.remove("wilder-card");
    cardImage.src = element.img;
    pDescription.textContent = element.description;
    citation.textContent = element.quote;
    wilderName.textContent = element.name;
    wilderAge.textContent = element.age;
    iconStack.src = element.stack;
    iconGenre.src = element.gender;
  });
});

close.addEventListener("click", function () {
  card.classList.remove("wilder-card-active");
  card.classList.add("wilder-card");
});
