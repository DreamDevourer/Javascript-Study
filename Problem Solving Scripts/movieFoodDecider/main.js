const fs = require('fs');

function randomMovie() {
    fs.readFile('./movies.json', 'utf8', (err, data) => {
        if (err) throw err;
        const movieJ = JSON.parse(data);
        console.log(movieJ);
        return movieJ[Math.floor(Math.random() * movieJ.length)];
    });
}

function randomFood() {
    fs.readFile('./food.json', 'utf8', (err, food) => {
        if (err) throw err;
        const foodJ = JSON.parse(food);
        console.log(foodJ);
        return foodJ[Math.floor(Math.random() * foodJ.length)];
    });
}

userChoice = "eat" //Would you like to eat or watch a movie?

if (userChoice == "eat" || userChoice == "food") {
    console.log(randomFood())
} else if (userChoice == "watch" || userChoice == "movie") {
    console.log(randomMovie())
} else {
    print("Please enter eat or watch")
}
