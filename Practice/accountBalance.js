function solve (input) {

    let index = 0;
    let command = input[index];
    let sum = 0;

    while (command !== "NoMoreMoney") {
        let depositedMoney = Number(command)
        if (depositedMoney < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        sum+=depositedMoney;
        console.log(`Increase: ${depositedMoney.toFixed(2)}`);
        

        index++;
        command = input[index];
    }

    console.log(`Total: ${sum.toFixed(2)}`)

}
solve(["5.51", 
"69.42",
"100",
"NoMoreMoney"])


