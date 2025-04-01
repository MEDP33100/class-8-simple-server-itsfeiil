const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const funFacts = [
    "Octopuses have three hearts!",
    "Bananas are berries, but strawberries aren't!",
    "Honey never spoils. Archaeologists found 3000-year-old honey still edible!",
    "A day on Venus is longer than a year on Venus!",
    "You can't hum while holding your nose (try it!).",
    "The Eiffel Tower can be 15 cm taller in the summer due to heat expansion."
];

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else if (req.url === "/funfact") {
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ fact: randomFact }));
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
