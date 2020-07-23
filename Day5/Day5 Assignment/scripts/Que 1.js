var inputArray = [];
var size = prompt("Enter number of element");
for (var i = 0; i < size; i++) {
    inputArray[i] = prompt('Enter Element' + (i + 1));

}
console.log(inputArray);
let odd = inputArray.filter(e1 => e1 % 2 != 0);
let oddCubes = inputArray.filter(e1 => e1 % 2 != 0).map(e1 => e1 ** 3);
console.log(odd);
console.log(oddCubes);
