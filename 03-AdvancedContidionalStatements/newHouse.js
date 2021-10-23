function newHouse(input) {

    let flower = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let finalPrice = 0;

    switch (flower) {

        case "Roses": 
            if (flowerCount>80) {
                finalPrice = (flowerCount * 5) * 0.90;
            } else {
                finalPrice = flowerCount * 5
            } ; break;
        case "Dahlias":
            if (flowerCount>90) {
                finalPrice = (flowerCount * 3.80) * 0.85;
            } else {
                finalPrice = flowerCount * 3.80;
            } ; break;
        case "Tulips":
            if (flowerCount>80) {
                finalPrice = (flowerCount * 2.80) * 0.85;
            } else {
                finalPrice = flowerCount * 2.80;
            } ; break; 
        case "Narcissus":
            if (flowerCount<120) {
                finalPrice = (flowerCount * 3) + (flowerCount * 3)*0.15;
            } else {
                finalPrice = flowerCount * 3;
            } ; break;
        case "Gladiolus":
            if (flowerCount<80) {
                finalPrice = flowerCount * 2.50 + (flowerCount * 2.50)*0.20;
            } else {
                finalPrice = flowerCount * 2.50;
            } ; break;
        
    }
        if (budget>=finalPrice) {
            console.log(`Hey, you have a great garden with ${flowerCount} ${flower} and ${(budget-finalPrice).toFixed(2)} leva left.`)
        } else {
            console.log(`Not enough money, you need ${(finalPrice-budget).toFixed(2)} leva more.`)
        }

}
newHouse(["Roses",
"55",
"250"])





//Роза	Далия	Лале	Нарцис	Гладиола
//5	   3.80	   2.80	      3	      2.50
