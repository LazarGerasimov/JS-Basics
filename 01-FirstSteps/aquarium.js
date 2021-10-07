function aquarium(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let volume = length * width * height;
    let volumeLitres = volume / 1000;
    let litresNeeded = volumeLitres * (1 - 0.17)
    
    console.log(litresNeeded)

}
aquarium(["85","75","47","17"])