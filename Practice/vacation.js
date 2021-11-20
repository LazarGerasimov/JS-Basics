function solve (input) {

    let moneyNeeded = Number(input[0]);
    let availableMoney = Number(input[1]);
    let totalDays = 0;
    let spendDays = 0;
    let index = 2; 
    let command = input[index];

    while(availableMoney < moneyNeeded) {
        totalDays++;
        index++;
        if(command === "spend") {
            spendDays++; 
            let moneySpent = Number(input[index]); // 3
            availableMoney = availableMoney - moneySpent;
            if (availableMoney < 0) {
                availableMoney = 0;
            }
            if (spendDays === 5) {
                console.log(`You can't save the money.`);
                console.log(`${totalDays}`);
                break;
            }

        } else if (command === "save") {
            spendDays = 0;
            let moneySaved = Number(input[index])
            availableMoney = availableMoney + moneySaved;
            
        }
        
        index++;
        command = input[index];
        
    }

    if(availableMoney >= moneyNeeded) {
        console.log(`You saved the money for ${totalDays} days.`)
    }


}
solve(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])
