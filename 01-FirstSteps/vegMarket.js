function vegMarket(input) {

    let vegetablesKg = Number(input[0]);
    let fruitsKg = Number(input[1]);
    let totalVeg = vegetablesKg * Number(input[2]);
    let totalFruit = fruitsKg * Number(input[3]);
    let totalSumBGN = totalVeg + totalFruit
    console.log((totalSumBGN / 1.94).toFixed(2))


}
vegMarket(["0.194","19.4","10","10"])