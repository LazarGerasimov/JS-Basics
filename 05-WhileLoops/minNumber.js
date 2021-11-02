function solve (input) {

    let index = 0;
    let command = input[index];
    index++;
    
    let maxNumber = Number.MAX_SAFE_INTEGER;
    
    while(command !== "Stop") {
        let num = Number(command);
        
        if (num < maxNumber) {
            maxNumber = num;
        }
    command = input[index];
    index++;
    }
    console.log(maxNumber)
    
    
}