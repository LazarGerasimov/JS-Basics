function solve(input) {

    let index = 0;

    let username = input[index];
    index++;

    let password = input[index]; 
    index++;

    let enteredPassword = input[index]; 
    index++;

    while (password !== enteredPassword) {
        enteredPassword = input[index];
        index++;
    }

    console.log(`Welcome ${username}!`)



}
solve(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
