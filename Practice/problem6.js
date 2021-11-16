function solve (input) {

    let number = Number(input[0]);
    let textNum = "" + number;
    let lastDigit = Number(textNum[2]);



    for (a = 1; a <= 9; a++) {
        for(b = 9; b >= a; b--) {
            for (c = 0; c <= 9; c++) {
                for (d = 9; d >= c; d--) {
                    if((a + b + c + d) = (a * b * c * d) && lastDigit === 5) {
                        console.log(a + b + c + d)
                    }
                }
            }
        }
    }

}
solve["123"]