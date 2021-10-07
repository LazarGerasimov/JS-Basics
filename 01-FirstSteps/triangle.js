function triangle(input) {
    let a = Number(input[0]);
    let h = Number(input[1]);
    let area = a * h / 2
    let decimalArea = area.toFixed(2)
    console.log(decimalArea)


}
triangle(["20","30"])