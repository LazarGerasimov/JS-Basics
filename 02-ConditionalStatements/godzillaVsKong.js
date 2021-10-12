function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let priceOutfitPerPerson = Number(input[2]);
    let decoration = budget * 0.1;
    
    if (statists > 150) {
        priceOutfitPerPerson = priceOutfitPerPerson - priceOutfitPerPerson*0.1;
    }

    let sumOutfit = priceOutfitPerPerson * statists;
    let totalCost = sumOutfit + decoration

   if (totalCost > budget) {
       console.log(`Not enough money!`)
       console.log(`Wingard needs ${(totalCost-budget).toFixed(2)} leva more.`)
   } 
    
   if (totalCost<=budget){
       console.log(`Action!`)
       console.log(`Wingard starts filming with ${(budget-totalCost).toFixed(2)} leva left.`)
   }

}
godzillaVsKong(["20000","120","55.5"])
