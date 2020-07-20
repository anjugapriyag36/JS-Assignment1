console.log("Day 3")

function odd_even() {

    var num = prompt("Enter a number");


    var res = num % 2 == 0 ? 'Even' : 'Odd';
    console.log(`The number entered is ${num} and  Number is ${res}`)
}

odd_even()
