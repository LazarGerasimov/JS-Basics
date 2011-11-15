function solve (input) {

    let numberPeople = Number(input[0]);
    let season = input[1];
    let price = 0;
    

    switch(season) {
        case "spring":
            if(numberPeople<=5) {
                price = numberPeople * 50;
            } else {
                price = numberPeople * 48;
            } break;
        case "summer":
            if(numberPeople<=5) {
                price = numberPeople * 48.50;
            } else {
                price = numberPeople * 45.00;
            } break;
        case "autumn":
            if(numberPeople<=5) {
                price = numberPeople * 60.00;
            } else {
                price = numberPeople * 49.50;
            } break;
        case "winter":
            if(numberPeople<=5) {
                price = numberPeople * 86.00;
            } else { 
                price = numberPeople * 85.00;
            } break;
    }

    if(season === "summer") {
        price = price * 0.85;
    }

    if(season === "winter") {
        price = price + price*0.08;
    }

    console.log(`${price.toFixed(2)} leva.`)

}
solve(["20",
"winter"])

