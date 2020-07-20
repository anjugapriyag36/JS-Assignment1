var mark = prompt("Enter a mark");
if (mark >= 90) {
    var res = 'A';
} else if (mark >= 80) {
    var res = 'B';
} else if (mark >= 70) {
    var res = 'C';
} else if (mark >= 60) {
    var res = 'D';
} else if (mark >= 50) {
    var res = 'E';
} else {
    var res = 'Fail';
}
console.log(`Marks are ${mark} and grade is ${res}`)



//Another Method using Ternary
var mark = prompt("Enter a mark");


var res = (mark >= 90) ? 'A' :
    (mark >= 80) ? 'B' :
    (mark >= 70) ? 'C' :
    (mark >= 60) ? 'D' :
    (mark >= 50) ? 'E' :
    'Fail';
console.log(`Marks are ${mark} and grade is ${res}`)



