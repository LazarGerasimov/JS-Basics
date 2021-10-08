function painting(input) {
    
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let mixer = Number(input[2]);
    let hoursNeeded = Number(input[3]);

    let materials = ((nylon+2)*1.50) + ((paint+(paint*0.1))*14.50) + (mixer*5) + 0.40
    let workers = (materials*0.3) * 8
    let totalSum = (materials + workers)
    
    
    console.log(totalSum)


}

painting(["10","11","4","8"])