function eggs (input) {

let eggCounter1 = Number(input[0]);
let eggCounter2 = Number(input[1]);

let index = 2; 
let command = input[index];
index++;

let isPlayerOut = false;

while (command !== "End of battle") {
    let win = command;

    switch(win) {
        case "one": eggCounter2--;
        case "two": eggCounter1--;
    }

    if (eggCounter1 === 0) {
        console.log(`Player one is out of eggs. Player two has ${eggCounter2} eggs left.`);
        isPlayerOut = true;
        break;
    } else if (eggCounter2 === 0) {
        console.log(`Player two is out of eggs. Player one has ${eggCounter1} eggs left.`);
        isPlayerOut = true;
        break;
    }

    command = input[index];
    index++;
    }
    
    if (!isPlayerOut) {
        console.log(`Player one has ${eggsCounter1} eggs left.`)
        console.log(`Player two has ${eggsCounter2} eggs left.`)
    }
}

eggs(["2","6","one","two","two"])