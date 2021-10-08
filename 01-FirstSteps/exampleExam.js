function bookstore(input) {

    let packetPencils = Number(input[0]);
    let packetMarkers = Number(input[1]);
    let liquid = Number(input[2]);
    let discount = Number(input[3]) / 100;

    let totalSum = (packetPencils * 5.80) + (packetMarkers * 7.20) + (liquid * 1.20);
    let discountSum = totalSum - discount * totalSum;

    console.log(discountSum)



}
bookstore(["2", "3", "4", "25"])