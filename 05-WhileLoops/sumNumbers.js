function solve(input) {

    let index = 0;
    let n = Number(input[index]);
    index++;

    let sum = 0;
    let num = Number(input[index]);
    index++;

    sum+= num;

    while(sum < n) {
        num = Number(input[index]);
        index++;
        sum+=num;
    }
    console.log(sum)

}
solve(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

