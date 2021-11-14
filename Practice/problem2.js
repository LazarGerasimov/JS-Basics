function santa (input) {

    let daysGone = Number(input[0]);
    let foodInKg = Number(input[1]);
    let deer1FoodinKg = Number(input[2]);
    let deer2FoodinKg = Number(input[3]);
    let deer3FoodinKg = Number(input[4]);

    let totalFoodDeer1 = daysGone * deer1FoodinKg;
    let totalFoodDeer2 = daysGone * deer2FoodinKg;
    let totalFoodDeer3 = daysGone * deer3FoodinKg;

    let totalFoodNeeded = totalFoodDeer1 + totalFoodDeer2 + totalFoodDeer3;

    if(totalFoodNeeded <= foodInKg ) {
        console.log(`${Math.floor(foodInKg - totalFoodNeeded)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(totalFoodNeeded - foodInKg)} more kilos of food are needed.`)
    }

}
santa(["5",
"10",
"2.1",
"0.8",
"11"])
