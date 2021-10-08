    function deposit(input){
        let depositSum = Number(input[0])
        let period = Number(input[1])
        let interest = Number(input[2]) / 100
        let sum = depositSum + period * ((depositSum*interest)) /12
        console.log(sum)

    }
    deposit(["200", "3", "5.7"])