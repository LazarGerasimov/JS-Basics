function shopping(input) {

    let budgetAvailable = Number(input[0]);
    let gpuCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let moneyGpu = gpuCount * 250;
    let moneyCpu = (moneyGpu * 0.35) * cpuCount;
    let moneyRam = (moneyGpu * 0.1) * ramCount;

    if (gpuCount > cpuCount) {
        discount = 0.15
    }

    let totalSum = moneyGpu + moneyCpu + moneyRam;
    let discountedSum = totalSum - (totalSum*discount);

    if (budgetAvailable > discountedSum) {
        console.log(`You have ${(budgetAvailable-discountedSum).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(discountedSum-budgetAvailable).toFixed(2)} leva more!`)
    }


}
shopping(["920.45","3","1","1"])

