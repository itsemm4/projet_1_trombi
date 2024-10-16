const cardImage = document.getElementById("card-image");
const pDescription = document.getElementById("p-description");
const citation = document.querySelector("blockquote");
const card = document.querySelector(".wilder-card");
const cardActive = document.querySelector(".wilder-card-active");
const grid = document.querySelector(".grid");
const close = document.querySelector("#closing-cross");
const wilderName = document.querySelector(".wilder_name");
const wilderAge = document.querySelector(".wilder_age");
const iconStack = document.querySelector(".icon-stack");
const iconGenre = document.querySelector(".icon-genre");
const htmlBar = document.querySelector(".html-content");
const cssBar = document.querySelector(".css-content");
const jsBar = document.querySelector(".js-content");
const cardHeader = document.querySelector(".wilder-card-header");
const cardDetails = document.querySelector(".details-card");
const cardNoHeader = document.querySelector(".card");
const blurBackground = document.querySelector(".blur-background");

const person = [
  {
    id: 1,
    name: "Abdou Cissé",
    age: 38,
    img: "./assets/images/abdou.png",
    avatar: "./assets/avatar/abdou.jpg",
    stack: "Html",
    gender: "./assets/icons/whiteMale.png",
    description:
      "Abdou, jeune vieux de 38ans, soif de connaissances dans des domaines divers et variés. Eternel écrivain en herbe, j'écris souvent des éditos et analyses politiques à mes heures perdues. Passionné de la Tech, je me forge à explorer les métiers de la Tech dans une reconversion en cours.",
    quote: "L'effort fait les forts",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
    isPerfect: false,
  },
  {
    id: 2,
    name: "Cédric Righi",
    age: 20,
    img: "./assets/images/cedric.png",
    avatar: "./assets/avatar/cedric.jpg",
    stack: "Js",
    gender: "./assets/icons/male.png",
    description:
      "Passionné par l’informatique et la technologie, j’aime explorer des sujets techniques tout en gardant une touche d’humour dans ma vie quotidienne. Toujours à la recherche de nouveaux défis et d’apprentissages, j’aime varier les plaisirs entre logique et créativité.",
    quote: "Je vais vous prendre une glace blanche avec les SmicSmac.",
    levelHtml: 100,
    levelCss: 100,
    levelJs: 100,
    isPerfect: true,
  },
  {
    id: 3,
    name: "Charlotte Albouy",
    age: 33,
    img: "./assets/images/charlotte.png",
    avatar: "./assets/avatar/charlotte.jpg",
    stack: "Css",
    gender: "./assets/icons/whiteFemale.png",
    description:
      "Toujours de bonne humeur, je m'adapte facilement dans un nouvel environnement.",
    quote: "Better late than ugly.",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
    isPerfect: false,
  },
  {
    id: 4,
    name: "Emma Robinet",
    age: 28,
    img: "./assets/images/emma.png",
    avatar: "./assets/avatar/emma.jpg",
    stack: "Html",
    gender: "./assets/icons/female.png",
    description:
      "J'aime tout ce qui est à trait à l'Art (Photographie, Peinture, Digital etc.) et je ne peux pas me passer d'écouter de la musique.",
    quote:
      "Le bonheur, est-ce de se satisfaire du moment présent, quel qu'il soit ? Cela semble tout à la fois simple et difficile. - Vagabond",
    levelHtml: 100,
    levelCss: 100,
    levelJs: 100,
    isPerfect: true,
  },
  {
    id: 5,
    name: "Florentin Monteil",
    age: 39,
    img: "./assets/images/flo.png",
    avatar: "./assets/avatar/flo.jpg",
    stack: "Js",
    gender: "./assets/icons/male.png",
    description:
      "Acheteur de formation, développeur web en devenir, toujours curieux et désireux d'apprendre, adepte de bons mots et de calembours, de bonne humeur et constamment à l'écoute des autres. Sinon j'ai aussi des défauts.",
    quote:
      "Ris, tout le monde rira avec toi, pleure et tu seras seul à pleurer.",
    levelHtml: 100,
    levelCss: 100,
    levelJs: 100,
    isPerfect: true,
  },
  {
    id: 6,
    name: "Julien Joecker",
    age: 28,
    img: "./assets/images/julien.png",
    avatar: "./assets/avatar/julien.jpg",
    stack: "Js",
    gender: "./assets/icons/whiteMale.png",
    description:
      "Try harder, persévérant qui n'aime pas abandonner. Signe distinctif : oublie souvent de verrouiller son ordinateur.",
    quote:
      "Pour parler ? Au diable les misérables têtes d'œuf qui ont inventé le pourparler.",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
    isPerfect: false,
  },
  {
    id: 7,
    name: "Justine Cousin",
    age: 41,
    img: "./assets/images/justine.png",
    avatar: "./assets/avatar/justine.jpg",
    stack: "Css",
    gender: "./assets/icons/whiteFemale.png",
    description: "Maman touche à tout. Qui aime apprendre de nouvelles choses.",
    quote:
      "La vie, c'est comme une boîte de chocolats, on ne sait jamais sur quoi on va tomber.",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
    isPerfect: false,
  },
  {
    id: 8,
    name: "Mike Hatchi",
    age: 23,
    img: "./assets/images/mike.png",
    avatar: "./assets/avatar/mike.jpg",
    stack: "Js",
    gender: "./assets/icons/male.png",
    description:
      "Curieux et créatif, je trouve toujours des solutions avec une touche d’humour et de spontanéité. Ouvert et sociable, j'aime relever des défis tout en apportant une bonne dose de bonne humeur.",
    quote:
      "Toujours prêt à relever les défis… sauf ceux qui commencent avant 8h du matin.",
    levelHtml: 100,
    levelCss: 100,
    levelJs: 100,
    isPerfect: true,
  },
  {
    id: 9,
    name: "Radwan Osman",
    age: 24,
    img: "./assets/images/radwan.png",
    avatar: "./assets/avatar/radwan.jpg",
    stack: "Js",
    gender: "./assets/icons/whiteMale.png",
    description:
      "Je suis quelqu'un un peu tête en l'air du genre solitaire mais bonne ambiance , ma grande passion c'est le foot et j'adore vanner!",
    quote:
      "Ce ne sont pas les gens qui changent , ce sont les masques qui tombent",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
    isPerfect: false,
  },
  {
    id: 10,
    name: "Rémi Zickenheiner",
    age: 26,
    img: "./assets/images/remi.png",
    avatar: "./assets/avatar/remi.jpg",
    stack: "Js",
    gender: "./assets/icons/whiteMale.png",
    description: "Je suis quelqu'un et c'est deja bien !",
    quote: "Kebab",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
    isPerfect: false,
  },
  {
    id: 11,
    name: "Sylvia Barraud",
    age: 34,
    img: "./assets/images/sylvia.png",
    avatar: "./assets/avatar/sylvia.jpg",
    stack: "Js",
    gender: "./assets/icons/whiteFemale.png",
    description:
      "Curieuse et dynamique, j’adore apprendre et découvrir de nouvelles choses que ce soit professionnellement (notamment à travers la veille technologique) ou dans la sphère privée (la guitare, les langues, les voyages, la cuisine).  Aimant les responsabilités, je fais partie d’un groupe d’échange en anglais que j’ai plaisir à animer en tant qu’hôte.",
    quote:
      "There's always gonna be another mountain, I'm always gonna wanna make it move, Ain't about how fast I get there, Ain't about what's waiting on the other sid, It's the climb - Miley Cirus",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
    isPerfect: false,
  },
  {
    id: 12,
    name: "Thierry Lenepveu",
    age: 56,
    img: "./assets/images/thierry.png",
    avatar: "./assets/avatar/thierry.jpg",
    stack: "Js",
    gender: "./assets/icons/whiteMale.png",
    description:
      "Je suis quelqu'un de timide mais sérieux, avec une détermination inébranlable. J'avance avec persévérance vers les objectifs que je me suis fixé.",
    quote: "Je suis ton père.",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
    isPerfect: false,
  },
  {
    id: 13,
    name: "Tom Schricke",
    age: 23,
    img: "./assets/images/tom.png",
    avatar: "./assets/avatar/tom.jpg",
    stack: "Js",
    gender: "./assets/icons/whiteMale.png",
    description: "A venir",
    quote: "A venir",
    levelHtml: 10,
    levelCss: 10,
    levelJs: 10,
    isPerfect: false,
  },
  {
    id: 14,
    name: "Arthur Heurtebise",
    age: 32,
    img: "./assets/images/Arthur.jpg",
    avatar: "./assets/avatar/arthur.jpg",
    stack: "Js",
    gender: "./assets/icons/male.png",
    description:
      "Papa, musicien et formateur, il y a peu de choses que j'aime plus que de transmettre mon savoir sur des sujets variés. Depuis 2022, c'est le développement web à la Wild Code School ! En février 2025, j'aurai la fierté d'avoir contribué à la reconversion professionnelle de 58 développeurs, car c'est bien ce que j'aime par dessus tout dans mon métier : les rencontres et le contact humain.",
    quote:
      "The only thing I do know... is that we have to be kind. Please, be kind - especially when we don't know what's going on. - Everything, Everywhere, All at Once - The Daniels, 2022",
    levelHtml: 100,
    levelCss: 100,
    levelJs: 100,
    isPerfect: true,
  },
];

const checkStack = (element, color) => {
  if (element.stack === "Html") {
      iconStack.src = `./assets/icons/html_${color}.png`;
    } else if (element.stack === "Css") {
      iconStack.src = `./assets/icons/css_${color}.png`;
    } else {
      iconStack.src = `./assets/icons/js_${color}.png`;
  }
};

person.forEach((element) => {
  const image = document.createElement("img");
  grid.appendChild(image);
  image.src = `${element.avatar}`;

  image.addEventListener("click", () => {
    blurBackground.classList.add("blur-background-active");
    blurBackground.classList.remove("blur-background");
    card.classList.add("wilder-card-active");
    card.classList.remove("wilder-card");
    cardImage.src = element.img;
    pDescription.textContent = element.description;
    citation.textContent = element.quote;
    wilderName.textContent = element.name;
    wilderAge.textContent = element.age;
    checkStack(element, 'white');
    iconGenre.src = element.gender;
    htmlBar.style.width = `${element.levelHtml}%`;
    cssBar.style.width = `${element.levelCss}%`;
    jsBar.style.width = `${element.levelJs}%`;
    console.log(element.isPerfect);

    card.style.boxShadow = "";
    cardHeader.style.background = "";
    cardDetails.style.background = "";
    cardNoHeader.style.background = "";
    cardNoHeader.style.border = "";
    cardHeader.style.boxShadow = "";
    cardNoHeader.style.boxShadow = "";
    card.style.color = "#ffffff";

    if (element.isPerfect) {
      const gradientBackground = "linear-gradient(45deg, rgba(255,247,171,1) 0%, rgba(211,215,254,1) 25%, rgba(196,245,255,1) 50%, rgba(236,255,212,1) 75%, rgba(248,201,255,1) 100%)";
      cardHeader.style.background = gradientBackground;
      cardDetails.style.background = gradientBackground;
      cardNoHeader.style.background = gradientBackground;
      cardNoHeader.style.border = "none";
      cardHeader.style.boxShadow = "0px 0px 15px 10px #FFF8B7";
      cardNoHeader.style.boxShadow = "0px 0px 15px 10px #FFF8B7";
      card.style.color = "#000000";
      checkStack(element, 'black');
    } else {
      card.style.boxShadow = "none";
      if (element.stack === "Html") {
        cardHeader.style.backgroundColor = "#C76048";
        cardDetails.style.backgroundColor = "#C76048";
        cardNoHeader.style.backgroundColor = "#E7916B";
        cardNoHeader.style.borderColor = "#C76048";
      } else if (element.stack === "Css") {
        cardHeader.style.backgroundColor = "#2958BB";
        cardDetails.style.backgroundColor = "#2958BB";
        cardNoHeader.style.backgroundColor = "#759BEE";
        cardNoHeader.style.borderColor = "#2958BB";
      } else {
        cardHeader.style.backgroundColor = "#D5AB3C";
        cardDetails.style.backgroundColor = "#D5AB3C";
        cardNoHeader.style.backgroundColor = "#F7D137";
        cardNoHeader.style.borderColor = "#D5AB3C";
      }
    }
  });
});

close.addEventListener("click", function () {
  card.classList.remove("wilder-card-active");
  card.classList.add("wilder-card");
  blurBackground.classList.add("blur-background");
  blurBackground.classList.remove("blur-background-active");
});
