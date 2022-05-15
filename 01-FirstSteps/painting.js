function painting(input) {
    
    let nylon = Number(input[0]);
    let additionalNylon = nylon + 2;
    let totalNylon = additionalNylon * 1.50;
    
    let paint = Number(input[1]);
    let additionalPaint = paint + (paint * 0.1)
    let totalPaint = additionalPaint * 14.50
    
    let mixer = Number(input[2]);
    let totalMixer = mixer * 5
    
    let totalMaterials = totalNylon + totalPaint + totalMixer + 0.40
    let sumRepairs = (totalMaterials * 0.3) * 8
    let totalSum = totalMaterials + sumRepairs
    console.log(totalSum)


}

painting(["10","11 ","4","8"])