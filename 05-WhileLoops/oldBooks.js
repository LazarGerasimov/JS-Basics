function solve(input) {

    let favouriteBook = input[0]; 
    let index = 1;
    let nextBookName = input[index];
    let isBookFound = false;
    
    while(nextBookName !== "No More Books") {
        if (nextBookName === favouriteBook) {
            isBookFound = true; 
            break;
        }
        index++;
        nextBookName = input[index];
    }
    
    if (isBookFound === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
        
    }
    
    if(isBookFound === true) {
        console.log(`You checked ${index - 1} books and found it.`)  
    }




}