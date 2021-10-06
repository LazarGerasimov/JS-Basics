function degrees(input) {
    let degreeC = Number(input[0]);
    let degreeF = degreeC * 1.8 + 32
    let decimalDegreeF = degreeF.toFixed(2)
    console.log(decimalDegreeF)

}
degrees(["25"])