var tarot_Card = [
    "the fool",
    "the magician",
    "the high priestess",
    "the emperess",
    "the emperor",
    "the hierrophant",
    "the lovers",
    "the chariot",
    "justice",
    "the hermit",
    "the wheel of fortune",
    "strength",
    "the hanged man",
    "death",
    "temperance",
    "the devil",
    "the tower",
    "the star",
    "the moon",
    "the sun",
    "judgement",
    "the world" 
]

function randomWord() {
    return tarot_Card[Math.floor(Math.random() * tarot_Card.length )]
} 

export { randomWord }