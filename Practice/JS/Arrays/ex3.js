console.clear();
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 1
// create an two array with 10 number
// create an empty arr change change it length to 10 (e.g. arr.length = 10)
// will use this array for the rest of the questions
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let arr3 = [];
arr3.length = 10;

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 2
// sum array1 + array2 into array3
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
for (let i = 0; i < arr1.length; i++) {
  arr3[i] = arr1[i] + arr2[i];
}
console.log(`quest2`);
console.log(arr3); // nice
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 3
// sum array1 with reverse array2 into array3
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
let k = arr2.length - 1;
for (let i = 0; i < arr1.length; i++) {
  if (k >= 0) {
    arr3[i] = arr1[i] + arr2[k];
  }
  k--;
}
// here the same just shorter ******************
for (let i = 0, k = arr2.length - 1; i < arr1.length; i++, k--) {
  if (k >= 0) {
    arr3[i] = arr1[i] + arr2[k];
  }
}
console.log(`quest3`);
console.log(arr3); //nice
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 4
// push all even numbers from array1 and array2 into array3
// even values not indexes, use arr3.push
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
arr3 = []; // clears it or
arr3.length = 0;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 == 0) {
    arr3.push(arr1[i]);
  }
  if (arr2[i] % 2 == 0) {
    arr3.push(arr2[i]);
  }
}
console.log(`quest4`);
console.log(arr3); // great
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Question 5
// go over each element in array1 and add all elements from array2 into it
// ?????? ?????????? ???????????? ?????? ???????? ???????? ???? ???? ?????????????? ??2
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//???? ???????? ???????? ???????? ???? ???????? ???????????? ???????? + ???? ?????????????? ???????????? ?????? ??????????????

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log(`quest5`);
arr3 = [];
let sumArr2 = 0;

for (let i = 0; i < arr2.length; i++) {
  sumArr2 += arr2[i];
}
console.log(sumArr2);

for (let i = 0; i < arr2.length; i++) {
  arr3[i] = arr1[i] + sumArr2 - arr2[i];
}
console.log(arr3);
