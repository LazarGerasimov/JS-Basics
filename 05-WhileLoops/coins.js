function coins (input) {

    let initialSumInsertedinLeva = Number(input[0]);
    let initialSumInCoins = initialSumInsertedinLeva * 100;
    let sumCoins = 0;
    let coinsCount = 0;
    let coins2leva = 0;
    let coins1lev = 0;
    let coins50st= 0;
    let coins20st = 0;
    let coins10st =0;
    let coins5st = 0;
    let coins2st = 0;
    let coins1st = 0;
    let leftover = 0;

    while (sumCoins <= initialSumInCoins) {

        if (initialSumInCoins >= 200 ) {
            coins2leva = Math.floor(initialSumInCoins / 100);
            coinsCount = coins2leva
        }



    }



}
coins(["1.23"])