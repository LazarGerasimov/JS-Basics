function solve (input) {

    let number = Number(input[0]);
    let textNum = "" + number;
    let lastDigit = Number(textNum[2]);
    let isValid = false;
   
    for (a = 1; a <= 9; a++) {
        for (b = 9; b >=a; b--) {
            for (c = 0; c <= 9; c++) {
                for (d = 9; d >=c; d--) {
                    let sumABCD = a + b + c + d;
                    let multiABCD = a * b * c * d;

                    if (sumABCD === multiABCD && lastDigit === 5) {
                        console.log(`${a}${b}${c}${d}`);
                        isValid = true;
                        break;
                    } else if ((multiABCD / sumABCD) === 3 && number % 3 === 0) {
                        console.log(`${d}${c}${b}${a}`);
                        isValid = true;
                        break;
                    }    
                }
            }
        }
    }
    
    if (!isValid) {
        console.log(`Nothing found`)
    }
}
solve(["145"])