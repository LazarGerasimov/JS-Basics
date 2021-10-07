function basketball(input) {

    let trainingCharge = Number(input[0])
    let sneakers = trainingCharge - (trainingCharge * 0.4);
    let clothes = sneakers - (sneakers * 0.20);
    let ball = clothes / 4; 
    let accessories = ball / 5;
    let totalSum = trainingCharge + sneakers + clothes + ball + accessories;
    
    
    console.log(totalSum)

}
basketball(["365"])