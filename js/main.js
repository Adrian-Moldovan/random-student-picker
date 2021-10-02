console.log('main.js loaded');


let students = [
    {
        name: "Floricica Dansatoarea",
        avatar: "https://unsplash.it/150/150",
        title: "Dr. Universitar Honoris Causa",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iste possimus aut, placeat fugiat reiciendis, aliquid.",
        stats: {
            points: 12,
            answers: 19,
            skipped: 5
        }
    },
    {
        name: "Dorian Popa",
        avatar: "https://unsplash.it/150/150",
        title: "Asist. Hâț Universitar",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iste possimus aut, placeat fugiat reiciendis, aliquid.",
        stats: {
            points: 10,
            answers: 15,
            skipped: 3
        }
    },
    {
        name: "Dorian Popa",
        avatar: "https://unsplash.it/150/150",
        title: "Asist. Hâț Universitar",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iste possimus aut, placeat fugiat reiciendis, aliquid.",
        stats: {
            points: 10,
            answers: 15,
            skipped: 3
        }
    },
];




const cardsContainer = document.querySelector('.cards-container');

for (let i = 0; i < students.length; i++) {
    createCard(cardsContainer, students[i]);
}
