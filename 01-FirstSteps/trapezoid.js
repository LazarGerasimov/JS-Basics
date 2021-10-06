function trap(input) {

    let b1 = Number(input[0]);
    let b2 = Number(input[1]);
    let h = Number(input[2]);

    let formula = (b1 + b2) * h / 2
    let formula2 = formula.toFixed(2)
    console.log(formula2)

}
trap(["8","13","7"])