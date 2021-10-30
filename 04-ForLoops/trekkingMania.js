function solve(input) {

    let groupsCount = Number(input[0]);
    let inputL = input.length;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    TotalclimbersCount = 0;

    for (i = 1; i < inputL; i++) {
        let climbersCount = Number(input[i]);
        TotalclimbersCount+=climbersCount
        
        if (climbersCount <= 5) {
            p1+= climbersCount;
        } else if (climbersCount <=12) {
            p2+=climbersCount;
        } else if (climbersCount <=25) {
            p3+=climbersCount;
        } else if (climbersCount <=40) {
            p4+=climbersCount;
        } else if (climbersCount >= 41) {
            p5+=climbersCount;
        }       
    } 

    let percentageMusala = (p1 / TotalclimbersCount) * 100;
    let percentageMonblan = (p2 / TotalclimbersCount) * 100; 
    let percentageKilimanjaro = (p3 / TotalclimbersCount) * 100;
    let percentageK2 = (p4 / TotalclimbersCount) * 100;
    let percentageEverest = (p5 / TotalclimbersCount) * 100;

    console.log(`${percentageMusala.toFixed(2)}%`)
    console.log(`${percentageMonblan.toFixed(2)}%`)
    console.log(`${percentageKilimanjaro.toFixed(2)}%`) 
    console.log(`${percentageK2.toFixed(2)}%`)
    console.log(`${percentageEverest.toFixed(2)}%`)
}
solve(["5",
"25",
"41",
"31",
"250",
"6"])


