function solve(input) {

    let tournmanetsCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let inputL = input.length
    let tournamentPoints = 0;
    let wins = 0;

    for (i = 2; i < inputL; i++) {

        let rank = input[i];

        switch (rank) {
            case "W": tournamentPoints += 2000; wins++; break;
            case "F": tournamentPoints += 1200; break;
            case "SF": tournamentPoints += 720; break;

        }
    }
    let totalPoints = tournamentPoints + startingPoints
    let averagePoints = tournamentPoints / tournmanetsCount
    let percentWin = (wins / tournmanetsCount) * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`)
    console.log(`${(percentWin.toFixed(2))}%`)
}
solve(["5", "1400", "F", "SF", "W", "W", "SF"])
