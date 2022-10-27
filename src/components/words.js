var tarot_Card = [
    "thefool",
    "themagician",
    "thehigh priestess",
    "theemperess",
    "theemperor",
    "thehierrophant",
    "thelovers",
    "thechariot",
    "justice",
    "thehermit",
    "thewheeloffortune",
    "strength",
    "thehangedman",
    "death",
    "temperance",
    "thedevil",
    "thetower",
    "thestar",
    "themoon",
    "thesun",
    "judgement",
    "theworld" 
]

function randomWord() {
    return tarot_Card[Math.floor(Math.random() * tarot_Card.length )]
} 

export { randomWord }