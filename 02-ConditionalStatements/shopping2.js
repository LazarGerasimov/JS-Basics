function shopping(input) {

    let budgetAvailable = Number(input[0]);
    let gpuCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let moneyGpu = gpuCount * 250;
    let moneyCpu = (moneyGpu * 0.35) * cpuCount;
    let moneyRam = (moneyGpu * 0.10) * ramCount;
    let totalSum = moneyGpu + moneyCpu + moneyRam;

    if (gpuCount > cpuCount) {
        totalSum = totalSum - (totalSum*0.15);
    }

    if (budgetAvailable >= totalSum) {
        console.log(`You have ${(budgetAvailable-totalSum).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(totalSum-budgetAvailable).toFixed(2)} leva more!`)
    }


}
shopping(["920.45","3","1","1"])

