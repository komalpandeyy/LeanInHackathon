// script.js

let level2 = [
    [1, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 0],
    [1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0],
    [1, 1, 1, 0, 1, 1]
];

let mazearray = level2;

let maze = document.getElementById("maze-container");
let rat = document.getElementById("rat");

function setratposition(x, y) {
    rat.style.top = x + "px";
    rat.style.left = y + "px";
}

function setfoodposition(x, y) {
    let foodItems = document.getElementsByClassName("food");
    for (let i = 0; i < foodItems.length; i++) {
        foodItems[i].style.bottom = x + "px";
        foodItems[i].style.right = y + "px";
    }
}

function createMaze() {
    for (let i = 0; i < mazearray.length; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < mazearray[i].length; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");

            if (mazearray[i][j] == 0) {
                cell.classList.add("wall");
            }
            row.appendChild(cell);

            if (i == 0 && j == 0) {
                mazearray[i][j] = 2;
            }
        }
        maze.appendChild(row);
    }

    setratposition(0, 0);
    setfoodposition();
}

function setfoodpositions() {
    // Set positions for each food item (you can customize these positions)
    setfoodposition(100, 150, 'food1');
    setfoodposition(200, 300, 'food2');
    setfoodposition(300, 450, 'food3');
    setfoodposition(400, 600, 'food4');
    setfoodposition(500, 750, 'food5');
}

function getratposition() {
    let position = [-1, -1];
    for (let i = 0; i < mazearray.length; i++) {
        for (let j = 0; j < mazearray[i].length; j++) {
            if (mazearray[i][j] == 2) {
                position[0] = i;
                position[1] = j;
            }
        }
    }
    return position;
}

document.addEventListener("keydown", function (e) {
    let rat = document.getElementById("rat");
    let food = document.getElementsByClassName("food")[0];
    let ratleft = rat.offsetLeft;
    let rattop = rat.offsetTop;
    let foodleft = food.offsetLeft;
    let foodtop = food.offsetTop;
    let ratposition = getratposition();

    if (e.key == "ArrowRight" && ratleft < (mazearray.length - 1) * 75 && mazearray[ratposition[0]][ratposition[1] + 1] == 1) {
        // ratleft += 50;
        ratleft += 75;
        rat.style.left = ratleft + "px";
        mazearray[ratposition[0]][ratposition[1]] = 1;
        mazearray[ratposition[0]][ratposition[1] + 1] = 2;
    }

    if (e.key == "ArrowLeft" && ratleft > 0 && mazearray[ratposition[0]][ratposition[1] - 1] == 1) {
        // ratleft -= 50;
        ratleft -= 75;
        rat.style.left = ratleft + "px";
        mazearray[ratposition[0]][ratposition[1]] = 1;
        mazearray[ratposition[0]][ratposition[1] - 1] = 2;
    }

    if (e.key == "ArrowUp" && rattop > 0 && mazearray[ratposition[0] - 1][ratposition[1]] == 1) {
        // rattop -= 50;
        rattop -= 75;
        rat.style.top = rattop + "px";
        mazearray[ratposition[0]][ratposition[1]] = 1;
        mazearray[ratposition[0] - 1][ratposition[1]] = 2;
    }

    if (e.key == "ArrowDown" && rattop < (mazearray.length - 1) * 75 && mazearray[ratposition[0] + 1][ratposition[1]] == 1) {
        // rattop += 50;
        rattop += 75;
        rat.style.top = rattop + "px";
        mazearray[ratposition[0]][ratposition[1]] = 1;
        mazearray[ratposition[0] + 1][ratposition[1]] = 2;
    }

    let foodItems = document.getElementsByClassName("food");
    for (let i = 0; i < foodItems.length; i++) {
        let currentFood = foodItems[i];
        let currentFoodLeft = currentFood.offsetLeft;
        let currentFoodTop = currentFood.offsetTop;

        // if (ratleft == currentFoodLeft && rattop == currentFoodTop) {
        //     window.open("https://example.com", "_blank"); // Replace with your desired link
        // }
        if (
            ratleft >= currentFoodLeft - 25 &&
            ratleft <= currentFoodLeft + 25 &&
            rattop >= currentFoodTop - 25 &&
            rattop <= currentFoodTop + 25
        ) {
           alert("Congratulations !!! You have cleared the level")
        }
    }
});

// Add the createMaze function to be called when the body is loaded
document.body.onload = createMaze;


