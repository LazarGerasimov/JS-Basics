function skiTrip (input) {

    let daysVisit = Number(input[0]);
    let propertyType = input[1];
    let rating = input[2];

    let roomForOnePersonPrice = 18.00;
    let apartmentPrice = 25.00;
    let presidentApartPrice = 35.00;

    let nightsVisit = daysVisit - 1;
    let totalPrice = 0;

    switch (propertyType) {

        case "room for one person":
            if (daysVisit < 10){
                totalPrice = nightsVisit * roomForOnePersonPrice;
            } else if (daysVisit >= 10 && daysVisit <= 15) {
                totalPrice = nightsVisit * roomForOnePersonPrice;
            } else if (daysVisit > 15) {
                totalPrice = nightsVisit * roomForOnePersonPrice;
            }; break

        case "apartment": 
            if (daysVisit < 10){
                totalPrice = nightsVisit * apartmentPrice * 0.70;
            } else if (daysVisit >= 10 && daysVisit <= 15) {
                totalPrice = nightsVisit * apartmentPrice * 0.65;
            } else if (daysVisit > 15) {
                totalPrice = nightsVisit * apartmentPrice * 0.50;
            }; break

        case "president apartment": 
            if (daysVisit < 10){
                totalPrice = nightsVisit * presidentApartPrice * 0.90;
            } else if (daysVisit >= 10 && daysVisit <= 15) {
                totalPrice = nightsVisit * presidentApartPrice * 0.85;
            } else if (daysVisit > 15) {
                totalPrice = nightsVisit * presidentApartPrice * 0.80;
            }; break
    }

    if (rating === "positive") {
        totalPrice = totalPrice + totalPrice*0.25;
    }

    if (rating === "negative") {
        totalPrice = totalPrice - totalPrice*0.10;
    }

    console.log(totalPrice.toFixed(2))

}
skiTrip(["30","president apartment","negative"])

