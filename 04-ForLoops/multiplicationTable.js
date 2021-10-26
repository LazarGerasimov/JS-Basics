function solve(input) {

    let number = Number(input[0]);

    for (let a = 1; a<=10; a++) {
        console.log(`${a} * ${number} = ${a * number}`)
    }

}
solve(["5"])