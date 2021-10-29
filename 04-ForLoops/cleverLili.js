function solve(input) {

    let lilisAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let singeToyPrice = Number(input[2]);
    let toysCounter = 0;
    let stolenMoney = 0;
    let savedMoney = 0;
    let addedMoney = 10;

    for (let i = 1; i <= lilisAge; i++) {
    
        if (i % 2 === 0) {
            savedMoney = savedMoney + addedMoney;
            addedMoney = addedMoney + 10;
            stolenMoney = stolenMoney + 1;
        } else if (i % 2 !== 0) {
            toysCounter = toysCounter + 1;
        }
    }

    let totalMoneyFromToys = singeToyPrice * toysCounter
    let totalSavedMoney = (savedMoney + totalMoneyFromToys) - stolenMoney;

    if (totalSavedMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalSavedMoney - washingMachinePrice).toFixed(2)}`)
    } else if (totalSavedMoney < washingMachinePrice) {
        console.log(`No! ${(washingMachinePrice - totalSavedMoney).toFixed(2)}`)
    }
}
solve(["21","1570.98","3"])
