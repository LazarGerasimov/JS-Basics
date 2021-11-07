function building (input) {

    let x = Number(input[0]);
    let y = Number(input[1]);

    for (let i = x; i > 0; i--) {
        let res = ""
        for(let z = 0; z < y; z++) {
            if(i === x) {
                res+= "L" + i + z + " ";
            } else if (i % 2 === 0) {
                res+= "O" + i + z + " ";
            } else if (i % 2 !== 0) {
                res+= "A" + i + z + " ";
            }
            

            
        }
        console.log(res) 
    }

}
building(["6","4"])