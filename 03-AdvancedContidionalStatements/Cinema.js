function cinema (input) {

    let projectionType = input[0]; 
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let totalProfit = 0;

    switch (projectionType) {
        case "Premiere": 
        totalProfit = rows * columns * 12; break;
        case "Normal":
        totalProfit = rows * columns * 7.50; break; 
        case "Discount":
        totalProfit = rows * columns * 5; break; 

        
    } 

    console.log(totalProfit.toFixed(2));

}
cinema(["Discount","12","30"])