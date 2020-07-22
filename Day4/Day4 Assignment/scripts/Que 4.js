function showresult(choice) {
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);

    var r;
    var c = choice;

    switch (c) {
        case '1':
            r = n1 + n2;
            break;
        case '2':
            r = n1 - n2;
            break;
        case '3':
            r = n1 * n2;
            break;
        case '4':
            r = n1 / n2;
            break;
        case '5':
            r = Math.sqrt(n1);
            break;
        case '6':
            r = (n1 / n2) * 100;
        default:
            break;

    }
    document.getElementById('result').value = r;
}
