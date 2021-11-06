function solve(input) {

    let target = 10000; 
    let sum = 0; 
    let index = 0;
    let command = input[index];

    while (command !== "Going home") {
        let steps = Number(command);
        sum+=steps;

        if(sum >= target) {
            console.log(`Goal reached! Good job!`);
            let difference = sum - target; 
            console.log(`${difference} steps over the goal!`);
            break;
        }

        index++;
        command = input[index];
    }

    if (command === "Going home") {

        let stepsToHome = Number(input[index + 1]);
        sum+=stepsToHome;

        if (sum >= target) {
            console.log(`Goal reached! Good job!`)
            let difference = sum - target;
            console.log(`${difference} steps over the goal!`)
        } else {
            let difference = target - sum;
            console.log(`${difference} more steps to reach goal.`)
        }

    }
}
solve(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])


 




