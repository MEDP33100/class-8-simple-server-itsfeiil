const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Array of fun facts
const funFacts = [
    "Octopuses have three hearts!",
    "Bananas are berries, but strawberries aren't!",
    "Honey never spoils. Archaeologists found 3000-year-old honey still edible!",
    "A day on Venus is longer than a year on Venus!",
    "You can't hum while holding your nose (try it!).",
    "The Eiffel Tower can be 15 cm taller in the summer due to heat expansion."
];

// Serve the static HTML file
app.use(express.static("public"));

// API route to get a random fun fact
app.get("/funfact", (req, res) => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    res.json({ fact: randomFact });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
