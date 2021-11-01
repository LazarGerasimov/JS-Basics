function solve(input) {
    
    let index = 0;
    let name = input[index];
    index++;
    
    let i = 1;
    
    let badGradeCounter = 0;
    let sumGrade = 0;
    let isExcluded = false; 
    
    while(i <= 12){
        let tempGrade = Number(input[index]);
        index++;
        
        if (tempGrade < 4.00) {
            badGradeCounter++;
            if (badGradeCounter >=2) {
                isExcluded = true;
                console.log(`${name} has been excluded at ${i} grade`)
                break; 
            }
            continue;
        }
        
        sumGrade+= tempGrade;
        i++;
    }
    
    if (!isExcluded) {
        
    let avg = sumGrade / 12; 
    console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`)
    }

    
 //При успешно завършване на 12-ти клас да се отпечата : 
//"{име на ученика} graduated. Average grade: {средната оценка от цялото обучение}"
//В случай, че ученикът е изключен от училище, да се отпечата:
//"{име на ученика} has been excluded at {класа, в който е бил изключен} grade"
   
}