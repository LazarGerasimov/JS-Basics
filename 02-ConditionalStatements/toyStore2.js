function toyStore(input) {

    let holidayPrice = Number(input[0]);
    let puzzleNumber = Number(input[1]);
    let dollsNumber = Number(input[2]);
    let teddyBearsNumber = Number(input[3])
    let minionsNumber = Number(input[4]);
    let trucksNumber = Number(input[5]);

    let totalPrice = puzzleNumber * 2.60 + dollsNumber * 3 + teddyBearsNumber * 4.10 + minionsNumber * 8.20 + trucksNumber * 2;
    let numberToys = puzzleNumber + dollsNumber + teddyBearsNumber + minionsNumber + trucksNumber;

    if (numberToys >= 50) {
        totalPrice = totalPrice - (totalPrice * 0.25);
    }

    let totalMoneyAfterRent = totalPrice - (totalPrice * 0.1);

    if (totalMoneyAfterRent >= holidayPrice) {
        console.log(`Yes! ${(totalMoneyAfterRent - holidayPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(holidayPrice - totalMoneyAfterRent).toFixed(2)} lv needed.`);
    }

}
toyStore(["40.8", "20", "25", "30", "50", "10"])
