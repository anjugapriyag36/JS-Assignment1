console.log("Methods of Datatypes");
// string
//charAt
let str = "Hello World";
let res = str.charAt(0)
console.log(res);
//concat
str2 = "Letsupgrade";
let res1 = str2.concat(str2)
console.log(res1);
//endswith
let str1 = "Hello world, welcome to the universe.";
let n = str1.endsWith("universe.");
console.log(n);
//fromCharCode
var res2 = String.fromCharCode(65);
console.log(res2);
//includes
var str3 = "Hello world, welcome to the universe.";
var n1 = str3.includes("world");
console.log(n1);
//match
var str4 = "The rain in SPAIN stays mainly in the plain";
var res3 = str4.match(/ain/g);
console.log(res3);
//repeat
var str5 = "Hello world!";
var res4 = str5.repeat(2);
console.log(res4);
//replace
var str6 = "Visit Microsoft!";
var res5 = str6.replace("Microsoft", "LetsUpgrade");
console.log(res5);
//search
var str7 = "Visit Letsupgrade!";
var n2 = str7.search("Letsupgrade!");
console.log(n2);
//split
var str7 = "How are you doing today?";
var res6 = str7.split(" ");
console.log(res6);

//Array 
//join
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var join = fruits.join(" * ");
console.log(join);
//pop
var pop = fruits.pop();
console.log(pop);
//push
var push = fruits.push("Kiwi");
console.log(push);
//shift
var x = fruits.shift();
console.log(x);
//unshift
var y = fruits.unshift("Lemon");
console.log(y);
//add
fruits[0] = "Kiwi";
console.log(fruits);
//delete
delete fruits[0];
console.log(fruits);
//splice
var z = fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(z);
//concat
let myBoys = ["Emil", "Tobias", "Linus"];
let myChildren2 = fruits.concat(myBoys);
console.log(myChildren2);
//concate two arrays
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren1 = arr1.concat(arr2, arr3);
console.log(myChildren1);
//slice
var citrus = fruits.slice(1);
console.log(citrus);
//sort
sort = fruits.sort();
console.log(sort);
//reverse
reverse = fruits.reverse();
console.log(reverse);
