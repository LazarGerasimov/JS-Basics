function hotelRoom (input) {

    let month = input[0];
    let nightsCount = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case "May":
        case "October": 
            studioPrice = nightsCount * 50;
            if (nightsCount > 7 && nightsCount <=14) {
                studioPrice = studioPrice * 0.95;
            } else if (nightsCount > 14){
                studioPrice = studioPrice * 0.70;
            } 
            apartmentPrice = nightsCount * 65; 
            if (nightsCount > 14) {
                apartmentPrice = apartmentPrice * 0.90;
            } break;

        case "June":
        case "September":
            studioPrice = nightsCount * 75.20;
            if (nightsCount > 14) {
                studioPrice = studioPrice * 0.80;
            }
            apartmentPrice = nightsCount * 68.70; 
            if (nightsCount > 14) {
                apartmentPrice = apartmentPrice * 0.90;
            } break;

        case "July":
        case "August":
            studioPrice = nightsCount * 76; 
            apartmentPrice = nightsCount * 77; 
            if (nightsCount > 14) {
                apartmentPrice = apartmentPrice * 0.90;
            } break;
    } 

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)

    


}
hotelRoom(["June","14"])