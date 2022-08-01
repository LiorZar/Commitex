console.clear();
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Objects
// Until this point we know we can of 3 value types:
// 1. number
// 2. string
// 3. boolean (true, false)
// 4. function
// We can store this values inside a variable and pass them as a parameter
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// examples
// var x = 10
// var y = "Lior"
// var f = function(a, b){ return a + b; }
// f( 10, 20 );
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Array can hold this values one after another in a straight index order
// example
// var arr=[1, 2, "Lior", f];
// to access a value inside of an array you need to know its index
// e.g arr[3], arr[i]
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Object
// Object is a way to hold values by name and not by index
// after you have an object u need to access it values
// so we have two syntaxes: creation and accessing (like array)
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// syntax of create
// { <name>:<value>, .... }
// in other word u begin with '{' than <name> than ':' than <value> than ',' as many as u like ending with '}'
// example:
// var o = { name:"Lior", age:20 }
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// syntax of accessing (two options)
// 1. <varaible holding the object>.<name of field>
//     e.g o.name, o.age
// 2. <varaible holding the object>[<name of field>]
//     e.g o["name"], o["age"]
// option two is more dynamic (see later)
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// syntax of deletion (two options)
// 1. delete <varaible holding the object>.<name of field>
//     e.g o.name, o.age
// 2. delete <varaible holding the object>[<name of field>]
//     e.g o["name"], o["age"]
// option two is more dynamic (see later)
// examples:
// let a = { x: 10, y: 20 };
// delete a.x;
// delete a["x"];
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// this will be a big object which will use in the exireces that follows
let DB = {
  name: "Zar Family",
  numberOfMemebers: 3,
  memebers: [
    {
      name: "Lior",
      age: 45,
      male: true,
      hobbies: ["Gaming", "Ski", "Roller Blades"],
    },
    {
      name: "Oshrat",
      age: 44,
      male: false,
      hobbies: ["Unknown"],
    },
    {
      name: "Oran",
      age: 17,
      male: false,
      hobbies: ["Drawing"],
    },
    {
      name: "Arbel",
      age: 14,
      male: false,
      hobbies: ["Marvel", "Books"],
    },
    {
      name: "Refael",
      age: 10,
      male: true,
      hobbies: ["Fortnite", "YouTube"],
    },
  ],
  logArray: function (array) {
    for (let i = 0; i < array.length; ++i) console.log(array[i]);
  },
  runArray: function (array, fnc) {
    for (let i = 0; i < array.length; ++i) fnc(array[i]);
  },
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// ex1
// log the name of DB
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log(`.....ex1`);
console.log(DB.name); // good
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// ex2
// log the first memeber of the family, not the name, the entire memeber
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log(`.....ex2`);
console.log(DB.memebers[0]); // good
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// ex3
// log the the entire DB
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log(`.....ex3`);
console.log(DB); // good
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// ex4
// fix the numberOfMemebers and print the DB
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log(`.......ex4`);
DB.numberOfMemebers = 5;
console.log(DB); // good
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// ex5
// print all memebers
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log(`......ex5`);

for (let i = 0; i < DB.memebers.length; i++) {
  console.log(DB.memebers[i]);
}
// u can press ctrl + click will put the cursor on the place he "thinks" there is an error
//index.js:130:15 <file name>:<line>:<column>
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// ex6
// sum the age of all memeber and print to the log
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log(`.....ex6`);

let sumAge = 0;
for (let i = 0; i < DB.memebers.length; ++i) {
  //   let v = DB.memebers[i].age; // do without an extra parameter
  //   console.log(v);
  sumAge += DB.memebers[i].age;
}
console.log(sumAge);
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// ex7
// sum all memebers names seperated by a comma and print to the log
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log(`......ex7`);

let allMemberNames = ``;
for (let i = 0; i < DB.memebers.length; ++i) {
  //   let n = DB.memebers[i].name; // do without an extra parameter
  //   console.log(n);
  allMemberNames += DB.memebers[i].name + `,`;
}
console.log(allMemberNames);
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// ex8
// add each memeber one year to age and log memebers array
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log(`......ex8`);
for (let i = 0; i < DB.memebers.length; i++) {
  DB.memebers[i].age++; // nice, do u know another option?? ++
}
console.log(DB.memebers);
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// ex9
// use the logArray to log memebers
// as u can see in lines 77, 80 you can aslo save function inside a parameter/filed on an object
// read the code of logArray and analyze what paramters it expect to get
// use the logArray to log memebers
// try, play, test, until it works
// i opened the old code for u "Funcs" so u can see what u did there maybe it will help
// 10 more min, if u don't success will give another hint
// 1. do u know how to log memebers???
// 2. this means u know how to access memebers parameter
// 3. do u know how to access logArray function
// 4. so now u need to call it

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log(`......ex9`);
DB.logArray(DB.memebers); // nice
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// ex10
// write a functions get one parameter of type object
// add a field to that object parameter called "data" with value "17.4"
// call the function 3 times with diffrent objects
// and log them before and after
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log(`......ex10`);
function addData(object) {
  object.data = 17.4;
}
addData(DB);
console.log(DB);
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// ex11
// delete numberOfMemebers and print DB to the log
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log(`......ex11`);

delete DB.numberOfMemebers;
console.log(DB);
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// ex12
// add a new field to DB called "Count" and set it to 5
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log(`......ex12`);
DB.Count = 5;
console.log(DB);
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// ex13
// add each memeber a new field called "profession" and set to the correct value
console.log(`......ex13`);
let profesArrey = [`software engineer`, `web developer`, `sudent`, `sudent`, `sudent`];
for (let i = 0; i < DB.memebers.length; i++) {
  DB.memebers[i].profession = profesArrey[i];
}
console.log(DB);
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// im here, and pressing ctrl+click on the error below, the cursor will jump to the error
// try your self, stay here
// look on debug console
// press ctrl + click on the error last line
