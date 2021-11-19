function solve (input) {

    let num = Number(input[0]);
    let textNum = "" + num;
    let aA = Number(textNum[2]);
    let bB = Number(textNum[1]);
    let cC = Number(textNum[0]);

    for (a = 1; a <= aA; a++) {
        for (b = 1; b <= bB; b++) {
            for (c = 1; c <= cC; c++) {
                console.log(`${a} * ${b} * ${c} = ${a*b*c};`);
            }
        }
    }

}
solve(["324"])