function xmas (input) {

    let rollsPaper = Number(input[0]);
    let cloth = Number(input[1]);
    let glue = Number(input[2]);
    let discount = Number(input[3]);

    let priceRolls = rollsPaper * 5.80;
    let priceCloth = cloth * 7.20;
    let priceGlue = glue * 1.20;
    let discountPercentage = discount / 100;

    let sum = priceRolls + priceCloth + priceGlue;
    let discountSum = sum - sum * discountPercentage;

    console.log(discountSum.toFixed(3));
    
}
xmas(["2",
"3",
"2.5",
"25"])