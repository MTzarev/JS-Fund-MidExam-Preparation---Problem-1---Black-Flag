function blackFlag(input) {
    let days = Number(input.shift());
    let daylyPludner = Number(input.shift());
    let expextedPludner = Number(input.shift());

    let totalPlunder = 0;
    for (let i = 1; i <= days; i++) {

        if (i % 3 === 0) {
            totalPlunder += daylyPludner + daylyPludner / 2;
        } else if (i % 5 !== 0 && i % 3 !== 0) {
            totalPlunder += daylyPludner;
        }
        if (i % 5 === 0) {
            totalPlunder += daylyPludner;
            totalPlunder = totalPlunder * 0.7;
        }
    }
    if (totalPlunder >= expextedPludner) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${((totalPlunder / expextedPludner) * 100).toFixed(2)}% of the plunder.`);
    }
}
//blackFlag((["5","40","100"]));
blackFlag((["10", "20", "380"]));