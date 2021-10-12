function solve(input) { 

    let tvShowName = input[0];
    let episodeDuration = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let chillTime = breakTime / 4;
    let timeLeft = breakTime - lunchTime - chillTime;
    
    if (timeLeft >= episodeDuration) {
        console.log(`You have enough time to watch ${tvShowName} and left with ${Math.ceil(timeLeft-episodeDuration)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${tvShowName}, you need ${Math.ceil(episodeDuration - timeLeft)} more minutes.`)
    }


}
solve(["Teen Wolf","48","60"])

