function totalCommission(sales) {
    var totalsales;

    if (0 > sales <= 5000) {
        totalsales = 0.02;
    } else if (5001 >= sales <= 10000) {
        totalsales = 0.05;

    } else if (10001 >= sales <= 20000) {
        totalsales = 0.07;
    } else {
        totalsales = 0.10;
    }
    console.log(totalsales);
}



function calculateCommission(value1, totalCommission) {
    let commission = value1 * totalCommission;
    let commission1 = '$' + commission.toFixed(2);
    console.log(commission1);
}
