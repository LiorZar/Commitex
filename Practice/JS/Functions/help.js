console.clear();
// before we started lets understand what scope is.
// a scope is the curly bracles of a function
// easiet why to remeber is by is by one Rule
// all variable declared in a function are simply ignored


// example 1
console.log("------example 1");
var x = 5;              // global declared varaible. form this point it exist everywhere 
function Foo1() {
    var x = 10;         // local declared varaible. Exists only in the function, born here
    console.log(x);
}                       // and x dies here. it is not longer exist anymode

Foo1();                 // when calling function Foo1, we move to the scope of the function. so line 10 will use x declared in line 9
console.log(x);


// example 2
console.log("------example 2");
var y = 4;              // global declared varaible. form this point it exist everywhere 
function Foo2() {
    console.log(y);     // because no one declare a local y, it will use the global y.
}

Foo2();
console.log(y);

// example 3
console.log("------example 3");
var z = 3;              // global declared varaible. form this point it exist everywhere 
function Foo3() {
    console.log(z);     // in this example there is a z declare in this function. this means we cannot use the global z
    var z = 100;        // by declaring this z, we prevent access to the global z.
    console.log(z);
}
Foo3();
console.log(z);