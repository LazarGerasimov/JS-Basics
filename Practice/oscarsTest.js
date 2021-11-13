function solve(input) {


    let nameNominee = input[0];
    let startingPoints = Number(input[1]);
    let judgesCount = Number(input[2]);
    let inputL = input.length;
    let addedPoints = 0;
     
    

    for (i = 3; i < inputL; i=i+2) {
        let judgeName = input[i];
        let pointsPerNameLength = judgeName.length;
        let judgePoints = Number(input[i + 1]);

        startingPoints= ((pointsPerNameLength*judgePoints) / 2) + startingPoints;
        
        if (startingPoints > 1250.5) {
            if (startingPoints > 1250.5) {
                console.log(`Congratulations, ${nameNominee} got a nominee for leading role with ${startingPoints.toFixed(1)}!`);
                break;
            }
            
        }       
    }

     if (startingPoints < 1250.5) {
        console.log(`Sorry, ${nameNominee} you need ${(1250.5 - startingPoints).toFixed(1)} more!`)
    }

}
solve(["Zahari Baharov",
"1205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
