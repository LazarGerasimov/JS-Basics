function fishMarket(input) {

    let skumriqPricePerKg = Number(input[0]);
    let cacaPricePerKg = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let midiKg = Number(input[4]);

    let palamudPrice = skumriqPricePerKg + skumriqPricePerKg * 0.60;
    let sumPalamud = palamudPrice * palamudKg;
    let safridPrice = cacaPricePerKg + cacaPricePerKg * 0.80;
    let sumSafrid = safridPrice * safridKg
    let sumMidi = midiKg * 7.50;
    let total = sumPalamud + sumSafrid + sumMidi;


    console.log(total)
   
}
fishMarket(["6.90","4.20","1.5","2.5","1"])