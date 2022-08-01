console.clear();
// have fun
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// now we learn about the "this" keyword
// very important to understand scopes (prev ex). without good understand of scope very hard to understand this
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// before we start with explanation we must understand the javascript and most morden languages
// are object oriented languanges. because as human is much eaiser to understand modular things
// than list and list of code.
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// explation:
// "this" keyword is very simple, it repserent the current object in the current scope
// so if we write console.log(this). it will print the current object
// the current object by default is the window object.
// window object gives u functionality on the browser window
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
console.log("Current object= ", this);
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// in order to see a diffrent this we must:
// 1. create an object
// 2. add function to that object
// 3. check the this in the function
// note: function that a part of an object are called "Methods", but they are just function
//       it simply called this way to help us understand one another.
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
{
  // declaring and object with a method
  let ob = {
    name: "my first object",
    foo: function () {
      console.log("Current object= ", this);
    },
  };

  // calling that method
  ob.foo();
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// so we can see inside the method the "this" is the object the method belongs too
// that is nice, but why is it good for
// let remeber the object from the first exerices on objects
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
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
// there are two methods in this object logArray and runArray
// when we wrote it we assume the array of memebers will be passed as parameter
// very annoying
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// example: not exeirce
// will add to DB object the two methods without parameter but they will access inside memebers of the object
// this u understand?
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
DB.log = function () {
  for (let i = 0; i < this.memebers.length; ++i) console.log(this.memebers[i]);
};
console.log(`example1`);
DB.log();

DB.run = function (fnc) {
  for (let i = 0; i < this.memebers.length; ++i) fnc(this.memebers[i]);
};

function Age(memeber) {
  console.log(memeber.name, "age=", memeber.age);
}
console.log(`example2`);
DB.run(Age);

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//ex 1
// write an object called Point who has to fields x, y
// the Point will have the following methods:
// add( dx, dy ), will add to the current x and y values dx and dy
// sub( dx, dy ), will subtract to the current x and y values dx and dy
// mul( v ), will duplicate the current x and y by v
// div( v ), will divide the current x and y by v
// length(), will return the distance from the 0,0, reference (sqrt(x*x + y*y))
// NOTE: this will be the first time you will work with this idea, so fill free to ask for my help
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// breaking this question
// 1. create an object with two fileds x & y, give them value of 0, good
// 2. add a method to the object the method name should be "log", method doing nothing. now please
// 3. change the "log" method to print "Lior Was here".
// 4. call the method u just created
// 5. change the "log" method to print this keyword instead of "Lior was here"
// 6. // add( dx, dy ), will add to the current x and y values dx and dy,
// sub( dx, dy ), will subtract to the current x and y values dx and dy
// mul( v ), will duplicate the current x and y by v
// div( v ), will divide the current x and y by v
// play with it a little, without trying it your self it will not sit right in your brain
// length()
let point = {
  x: 0,
  y: 0,
  log: function (title) {
    console.log(title, this); // at current time "this" == point
  },
  add: function (dx, dy) {
    // so when ever this function will be called the x, y value of object point will be changed
    this.x += dx;
    this.y += dy;
  },
  sub: function (dx, dy) {
    // this is good
    this.x -= dx;
    this.y -= dy;
  },
  mul: function (v) {
    this.x *= v;
    this.y *= v;
  },
  div: function (v) {
    this.x /= v;
    this.y /= v;
  },
  length: function () {
    let leng = Math.sqrt(this.x * this.x + this.y * this.y); // exactly
    return leng;
  },
};
console.log("Point ex", point);
point.log("t1");
console.log("legnth=", point.length());
point.add(10, 0);
console.log("legnth=", point.length());
point.log("t2");
point.add(0, -10);
point.log("t3");
point.sub(20, 20);
point.log("t4"); //ok, calling a function must come with parentises (), if the function don't ge parameters u need empty ()
point.mul(100);
point.log("t5");
point.div(100);
point.log("t6");
console.log("legnth=", point.length());
// very nice, now next ex you cannot copy :) so will see KARZIYA, have fun
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//ex 2
// write an object called Arr with captical A :)
// he will have a single memeber called arr
// the Array will have the following methods:
// log(): will loop on the array and print each memeber
// sum(), will summerzie all memebers of the array and print the sum
// add( x ), will add each array memeber the value of x
// after your write your object the code below should work
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
let Arr = {
  arr: [],
  log: function () {
    for (i = 0; i < this.arr.length; i++) {
      // nice
      console.log(this.arr[i]);
    }
  },
  sum: function () {
    let summerzie = ``;
    for (i = 0; i < this.arr.length; i++) {
      // little extra (didn't ask for the ,), very nice
      summerzie += `,` + this.arr[i];
    }
    console.log(summerzie);
  },
  add: function (x) {
    for (i = 0; i < this.arr.length; i++) {
      this.arr[i] += x;
      //   console.log(this.arr[i]);
    }
  },
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
let names = ["Lior", "Oshrat", "Oran", "Arbel", "Refael"];
let nums = [12, 13, -40, 50, 60, 70, 200];

Arr.arr = names;
Arr.log();
Arr.sum();
Arr.add("-hello");
Arr.log();

Arr.arr = nums;
Arr.log();
Arr.sum();
Arr.add(1000);
Arr.log();
// //------------------------------------------------------------------------------------------------------------------------------------------------------------//
// start with this and let me know
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
