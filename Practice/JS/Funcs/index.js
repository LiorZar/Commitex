console.clear();
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// functions
// Function are divided into two parts:
// declaration - when u declare what the function do and how many parameters it recives as input
// calling - when u call the function with diffrent inputs
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// syntax of declaretion
// function <name of the function>( <name of first parameter>, <name of second parameter>, ... ){}
// example:
// function Foo1( a, b ){}
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// syntax of calling
// <name of the function>( <value of first parameter>, <value of second parameter>, ... );
// example:
// Foo1( 12, "hello" );
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// example 1
// declaring a function that sum two parameter and console.log them
function SumLog(a, b) {
  let c = a + b;
  console.log("c =", c);
}
// calling the function
SumLog(1, 1);
SumLog(10, -1);
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// a function can also return a value. and u can use the value when calling the function
function SumReturn(a, b) {
  return a + b;
}
// the function above returns the sum of a and b, but how to use it?
// example 1
let x = SumReturn(10, 20);
console.log("x = ", x);

// example 2, without saving the return value into a variable (direct use)
console.log("x = ", SumReturn(30, 23));

// example 3, direct usage inside calculation
let y = 10 * SumReturn(12, 24);
console.log("y = ", y);

// example 4, direct usage advance
let z = SumReturn(1, 2) * SumReturn(2, SumReturn(3, 4));
console.log("z = ", z);

// use the examples above for refrence for the exierces bellow

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 1
// declare a function that gets one parameter and logs it
// call this function with 3 diffrent values
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
function parLog(a) {
  console.log(a);
}
parLog(1);
parLog(`r`);
parLog(`hi`);
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 2
// declare a function that gets one parameter and logs its square (x*x)
// call this function with 3 diffrent values
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
function square(a) {
  let c = a * a;
  console.log("a*a =", c);
}
square(12);

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 3
// declare a function that gets one parameter and returns its square
// call this function with 3 diffrent values and print the return values to the log
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
function numSqare(a) {
  return a * a;
}
// console.log(numSqare(2));
// console.log(numSqare(4));
// console.log(numSqare(6));
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 4
// declare a function that gets one parameter
// if it is 1 print Oran,
// if it is 2 print Arbel,
// if it is 3 print Refael
// other wise print wrong value
// call this function with 3 diffrent values
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
function PosOfKid(a) {
  if (a === 1) {
    console.log(`Oran`);
  } else if (a == 2) {
    console.log(`Arbel`);
  } else if (a == 3) {
    console.log(`Refael`);
  } else {
    console.log(`Wrong Value`);
  }
}
PosOfKid(2);
PosOfKid(3);
PosOfKid(5);
PosOfKid(1);
PosOfKid(-0.5);
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 5
// declare a function that gets two parameters and returns there multipication
// call this function with 3 diffrent values and print the return values to the log
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
function Multiple(a, b) {
  let c = a * b;
  return c;
}
console.log(`c=`, Multiple(2, 5));
console.log(`c=`, Multiple(0, 5));
x = Multiple(6, 7);
console.log(x);
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 6
// declare a function that gets two parameters and
// prints all the integers numbers between the number
// e.g 2, 6 will pring 2, 3, 4, 5, 6
// call this function with 3 diffrent values
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
function IntNum(e, f) {
  let x, y;
  if (e < f) {
    x = e;
    y = f;
  } else {
    x = f;
    y = e;
  }
  for (let i = x; i <= y; i++) {
    console.log(i);
  }
}
IntNum(2, 6);
IntNum(16, 8);

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 7
// declare a function that gets one parameter and calculare is factorial (n!)
// call this function with 3 diffrent values and print them to the log
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
function Factor(a) {
  let fact = 1;
  for (let i = a; i > 0; i--) {
    fact = fact * i;
  }
  console.log(fact);
}
console.log(`Qest7`);
Factor(4);
Factor(6);
Factor(1);

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 8
// declare a function that gets two parameters name "arr", and "v"
// the function should look for the value "v" inside array "arr"
// and return the index of "v" inside of the array
// if v do not exists return -1
// call this function with 3 diffrent values and print them to the log
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
function FindIndx(arr, v) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === v) {
      return i;
    }
  }

  return -1;
}
console.log(`Qest8`);
console.log(FindIndx([2, 3, 4, 5, 6], 2));
console.log(FindIndx([2, 3, 4, 5, 6], 5));
console.log(FindIndx([12, 3, 24, 5, 6], 7));
