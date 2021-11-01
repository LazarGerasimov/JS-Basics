function solve (input) {

    let sumBadGrades = Number(input[0]);
    let index = 1; 
    let command = input[index]; 
    let numberOfProblems = 0;
    let sumGrades = 0;
    let numberBadGrades = 0;

    while (command !== "Enough") {

        numberOfProblems++;
        index++;

        let currentGrade = Number(input[index]);
        sumGrades+=currentGrade;

        if (currentGrade <= 4) {
            numberBadGrades++;
        }

        if (numberBadGrades >= sumBadGrades) {
            console.log(`You need a break, ${numberBadGrades} poor grades.`);
            break;
            
        }

        index++;
        command = input[index];

    }

    if (command === "Enough") {
        let avg = sumGrades / numberOfProblems;
        console.log(`Average score: ${avg.toFixed(2)}`)
        console.log(`Number of problems: ${numberOfProblems}`)
        index = index - 2;
        command = input[index];
        console.log(`Last problem: ${command}`)
    }


}
solve(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

