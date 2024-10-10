const person = [
    {
        name: "Abdou",
        age: 24,
        img: "./assets/avatar/abdou.jpg",
        stack: "HTML",
        description: "Abdou, jeune vieux de 38ans, soif de connaissances dans des domaines divers et variés. Eternel écrivain en herbe, j'écris souvent des éditos et analyses politiques à mes heures perdues. Passionné de la Tech, je me forge à explorer les métiers de la Tech dans une reconversion en cours.",
        quote: "L'effort fait les forts",
        levelHtml: 40,
        levelCss: 40,
        levelJs: 20,
    },
    {
        name: "Abdou",
        age: 24,
        img: "./assets/avatar/emma.jpg",
        stack: "HTML",
        description: "Abdou, jeune vieux de 38ans, soif de connaissances dans des domaines divers et variés. Eternel écrivain en herbe, j'écris souvent des éditos et analyses politiques à mes heures perdues. Passionné de la Tech, je me forge à explorer les métiers de la Tech dans une reconversion en cours.",
        quote: "L'effort fait les forts",
        levelHtml: 40,
        levelCss: 40,
        levelJs: 20,
    },
    {
        name: "Abdou",
        age: 24,
        img: "./assets/avatar/mike.jpg",
        stack: "HTML",
        description: "Abdou, jeune vieux de 38ans, soif de connaissances dans des domaines divers et variés. Eternel écrivain en herbe, j'écris souvent des éditos et analyses politiques à mes heures perdues. Passionné de la Tech, je me forge à explorer les métiers de la Tech dans une reconversion en cours.",
        quote: "L'effort fait les forts",
        levelHtml: 40,
        levelCss: 40,
        levelJs: 20,
    }
]

const grid = document.querySelector('.grid')

person.forEach((element) => {
    const image = document.createElement('img')
    grid.appendChild(image);
    image.src = `${element.img}`;
})