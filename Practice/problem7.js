function solve (input) {

    let people = Number(input[0]);
    let nights = Number(input[1]);
    let transportCards = Number(input[2]);
    let numberMuseumTickets = Number(input[3]);

    let nightsPrice = people * nights;
    let priceTransportCards = Math.round(transportCards) * 1.60;
    let priceMuseums = numberMuseumTickets * 6;

    let totalSumPerPerson = nightsPrice + priceTransportCards + priceMuseums;
    let totalSumForAll = people * totalSumPerPerson;
    let addedSum = totalSumForAll + totalSumForAll * 0.25;

    console.log(totalSumForAll.toFixed(2))

    

}
solve(["131","9","33","46"])