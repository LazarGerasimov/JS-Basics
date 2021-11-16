function computerFirm (input){
    let N = Number(input[0]);
 
    let sales = 0;
    
    let rating = 0;
    let ratingCounter = 0;
 
    let index = 1;
    let command = input[index];
 
    while (index<=N){
        let currentModel = input[index]+'';
        let currentRating = currentModel[2];
        let a1 = currentModel[0];
        let a2 = currentModel[1];
        let result = a1 + a2 + '';
        let currentSales = Number(result);
 
        switch(currentRating){
            case "2":
                rating+=2;
                ratingCounter++;
                break;
            case "3":
                rating+=3;
                ratingCounter++;
                sales += currentSales*0.50;
                break;
            case "4":
                rating+=4;
                ratingCounter++;
                sales += currentSales*0.70;
                break;
            case "5":
                rating+=5;
                ratingCounter++;
                sales += currentSales*0.85;
                break;
            case "6":
                rating+=6;
                ratingCounter++;
                sales += currentSales;
                break;
        }
        index++
        command = input[index];
       
 
        
    }
    let averageRatingAllPCU = rating/ratingCounter;
    console.log(sales.toFixed(2));
    console.log(averageRatingAllPCU.toFixed(2));
    
}

computerFirm(["5",
"122",
"156",
"202",
"214",
"185"])
