console.clear();
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
function Rand(n) {
  // return values [0,n)
  return Math.floor(Math.random() * n);
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
function RandZ(n) {
  // return values [-n,n)
  return Math.floor((Math.random() * 2 - 1) * n);
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 1
// create an array with 10 random number
// print array to the log
// will use this array for the rest of the questions
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
let arr = [];
for (var i = 0; i < 10; i++) {
  //arr.push(Math.floor(Math.random() * 20)); // u r using random from Math object
  arr.push(Rand(20));
}

console.log(arr);
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 2
// sum all elements in the array and print the sum to the log
//------------------------------------------------------------------------------------------------------------------------------------------------------------//

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum); // great

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 3
// sum all elements that are divided by 3 in the array and print the sum to the log
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
let sumtThreeDivid = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    // better to use === and == look at cheatsheet
    sumtThreeDivid += arr[i];
  }
}

console.log(sumtThreeDivid); // great

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 4
// mutiple each elememnt in the array by 2 and print the array to the log
//------------------------------------------------------------------------------------------------------------------------------------------------------------//

let arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr2[i] = arr[i] * 2;
}
console.log(arr2); // i understand what u did
// but the ex was to mutiple by 2 the same array
// not save it to antoher array, need to be fixed

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 5
// print all element in the log in reverse order
let arr3 = [];
let k = arr.length - 1;
for (let j = 0; j < arr.length; j++) {
  if (k >= 0) {
    // great, u can write k >= 0
    arr3[j] = arr[k];
  }
  k--;
}
console.log(arr3); // again was asked just to print not to create a new array
//------------------------------------------------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 6
// find the index of element with the value equal to 4 (if there is no such element print -1)
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
let y = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 4) {
    y = 1;
    console.log(i);
    //break;
  }
}
// לא הצלחתי עם אלס מחוץ ללולאת הפור
// this is a great solution.
// there is a command called break that breaks the loop
if (y == 0) {
  console.log(-1);
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 7
// find the maximum value inside the array
let maximum = 0;
for (let i = 0; i < arr.length; i++) {
  if (maximum < arr[i]) {
    maximum = arr[i];
  }
}
console.log(maximum); // will not work for negetive numbers
// //------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 8
// find the maximum  and the minimum values inside the array
//------------------------------------------------------------------------------------------------------------------------------------------------------------//

let max = arr[0]; // very very nice
let min = arr[0]; // very very nice
for (let i = 0; i < arr.length; i++) {
  // i can start at 1 not 0
  if (max < arr[i]) {
    max = arr[i];
  }
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(max);
console.log(min);
// well done
// i suggest go over it, clean it a little
