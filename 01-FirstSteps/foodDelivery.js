function foodDelivery(input) {

    let chickenMeat = Number(input[0]);
    let fish = Number(input[1]);
    let vegan = Number(input[2]);

    let sumChickenMeat = chickenMeat * 10.35;
    let sumFish = fish * 12.40;
    let sumVegan = vegan * 8.15;
    let mealsPrice = sumChickenMeat + sumFish + sumVegan;
    let dessertPrice = mealsPrice * 0.2;
    let totalSum = mealsPrice + dessertPrice + 2.50;


    console.log(totalSum)

}

foodDelivery(["2","4","3"])