function solve (input) {

    let openTabs = Number(input[0]);
    let salary = Number(input[1]);
    let inputL = input.length;
    


    for (let i = 2; i < inputL; i++) {
        let currentTab = input[i];

        switch(currentTab) {
            case "Facebook": salary = salary - 150;break;
            case "Instagram": salary = salary - 100; break;
            case "Reddit": salary = salary - 50; break;
        }
    
        
        if(salary <= 0) {
            console.log(`You have lost your salary.`); break;
        } 
        
        }

    if (salary>0) {
        console.log(salary); 
    }

}
solve(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])


