function books(input) {

    let pagesPerBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysPerBook = Number(input[2]);
    let hoursPerDay = (pagesPerBook / pagesPerHour) / daysPerBook;

    console.log(hoursPerDay)


}
books(["212", "20", "2"])