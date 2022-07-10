console.clear();

// Note before u start.
// Read the exieces question one by one from file ex1, ex2, ex3
// come here and search for example on hot do things
// this is an help file to use as refrence

// Welcome to Arrays
// Array is a another type of object that can save data by index
// e.g [1, "lior", "oshrat", -7, 3.09] is an array with 5 elements.
// First element is in index 0 and equal to 1
// Second element is in index 1 and equal to "lior"
// etc...

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Creating Arrays
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log("-----Creating");
//------------------------------------------------------------------------------------------------------------------------------------------------------------//

var arr1 = []; // empty array
console.log(arr1);

var arr2 = [1, "lior", "oshrat", -7, 3.9]; // an array with 5 elements
console.log(arr2);

var arr3 = new Array(1, 2, 3); //this is another method, but for now let forget about it
console.log(arr3);

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log("\n");
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Accessing/Updating elemetns inside an array
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log("-----Accessing/Updating");
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log(arr2[1]); // index 1 means the second element
console.log(arr2[2]); // index 2 means the third element

arr2[0] = "hehe";
console.log(arr2);

arr2[8] = "x"; // index 8 will be create, but the rest of the missing indexes will get undefined
console.log(arr2);
console.log(arr2[5], arr2[6], arr2[7]); // 5, 6, 7 are undefined

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log("\n");
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Accessing/Updating array object
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log("-----Accessing/Updating Arry");
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// to access propeties or function of an array we use the opertator .
// to access the size of an array we use .length property
console.log(arr1.length); // arr1 is empty
console.log(arr2.length);

// you can change the length of an array by changing

//to add elements to an array u use a function/method called push
arr1.push("y"); // will add "y" to the end of the array
console.log(arr1);

arr2.push("z");
console.log(arr2);

//to remove elements from an array u use a function/method called pop
arr1.pop(); // will add "y" to the end of the array
console.log(arr1);

arr2.pop();
console.log(arr2);
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log("\n");
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
