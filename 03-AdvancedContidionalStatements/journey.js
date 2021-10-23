function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let finalSum = 0;


    if (budget<=100) {
        console.log(`Somewhere in Bulgaria`)
        if(season === "summer") {
            finalSum = budget * 0.30;
            console.log(`Camp - ${finalSum.toFixed(2)}`)
        } else if (season === "winter") {
            finalSum = budget * 0.70;
            console.log(`Hotel - ${finalSum.toFixed(2)}`)
        }

    } else if (budget<=1000) {
        console.log(`Somewhere in Balkans`)
        if(season === "summer") {
            finalSum = budget * 0.40;
            console.log(`Camp - ${finalSum.toFixed(2)}`)
        } else if (season === "winter") {
            finalSum = budget * 0.80;
            console.log(`Hotel - ${finalSum.toFixed(2)}`)
        }

    } else if (budget>1000) {
        console.log(`Somewhere in Europe`)
        finalSum = budget * 0.90;
        console.log(`Hotel - ${finalSum.toFixed(2)}`)

    }
    

}
journey(["800","winter"])