console.clear();
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// By Value, By Reference, Funciton, Scopes & This
// in the exierces will learn to understand what we have learn so far but in a deeper manner
// this is more of written lecture than exireces but very important to understand it
// i suggest you test the concept learned here whil you read it
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// this Ex will be explaintion followed by hw
// so please do it as designed, read and solve
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// -- By Value vs By Reference --
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// so far we have learn of 6 diffrent possible types.
// 1. number
// 2. string
// 3. boolean (true, false)
// 4. function
// 5. object
// 6. array
// number, string and boolean are consider primitives and are always work in by "Value" fasion
// function, object and array all of them are techinaly some sort of object there for they are pass by "Reference"
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
{
	// HW1
	let x = 10;
	let y = x;
	x = 30;
	// before u unmark the line below try to guess what will it print
	//console.log("HW1", "x=" + x, "y=" + y);
}
// as we can see the value of 10 was copied from x into y
// when a value is copied we say it is by value
// let see the by refrence now to help us understand more
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
{
	// HW2
	let x = [10];
	let y = x;
	x[0] = 30;
	// before u unmark the line below try to guess what will it print
	//console.log("HW2", "x=" + x, "y=" + y);
}
// as you can see x was "copied" into by reference, in other word x and y are holding the same entity
// so if you change value "inside" of x it change the entity but y points to same entity
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
{
	// HW3
	let x = [10]; // the entity is the array created by [10] lets call this entity "The Array"
	let y = x; // y now hold the same entity
	x = 30; // but what are we doing now?????
	// before u unmark the line below try to guess what will it print
	//console.log("HW3", "x=" + x, "y=" + y);
}
// as you can see x was holding "The Array"
// than y = x so y is also holding "The Array"
// but after x = 30 x is no longer holding "The Array" it simply holding 30
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Focus:
// =
// the operator above (=) is called the assigment operator
// it is used like this:
// <place to store> = <value to store>
// examples:
{
	// 1.
	let x = 10; // the place we store into is x, the value/entity we store is 10
	//console.log( "x=" + x );

	// 2.
	let y = [10, 20]; // the place we store into is y, the value/entity we store is an array [10,20]
	//console.log( "y=" + y );

	// 3.
	y[0] = 30; // the place we store is not y, we are not replace the entity the y is holding
	// we are accessing the entity in y using a diffrent operator ([]) and then appying the assigment operator (=)
	// on the entity return from the prevois operator ([]) which will be the cell in the first index of the array
	//console.log( "y=" + y );

	//4.
	y = 30; // the place we is y, because the we use the assigment operator directly on y
	//console.log( "y=" + y );

	//5.
	y = { name: "Lior", num: 10 }; // the place we store into is y, the value/entity we store is a new object created by the operator {}
	//console.log("y=", y);

	//6.
	y.num = 20; // like 3. we are not assiging anything into y, we use the (.) operator to access the object that was inside y
	//console.log("y=", y);

	//7.
	// notice here z is a parameter same as calling var/let
	function z() {
		console.log("I'm z");
	}
	//console.log("z=== ", z);

	//8.
	// here we declare the varible manualy and assign the function into it. example 7. is just a short form of this exact code
	let f = function () {
		console.log("I'm f");
	};
	//console.log("f=== ", f);

	//9.
	f = z;
	// so what happens here.
	// 1. f is on the left side of an assigment operator
	// 2. z is on the fight side of an assigment operator
	// 3. this means we "copy" the entity inside z info f
	// 4. so now f and z holds the same function (entity)
	// so what the fuck happend to function that was in f before 9.
	// answer: it simply died, if nobody holds u in some parameter u died
	// in other word with no friends at all you die, stop existing
	//console.log("f=== ", f);
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Conclusion:
// we need to focus when we see an assigment operator to make sure we know what is being assigned and to what we are assigning too
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
{
	//HW4
	let x = [10, 20, 30];
	let y = [1, 2, 3];
	x[1] = y[2];
	y = x[0];
	//guess the print below
	//console.log("HW4", "x=", x, "y=", y);
}
{
	//HW5
	let x = { x: 10, y: 20 };
	let y = x.x;
	x.y = y;
	//guess the print below
	//console.log("HW5", "x=", x, "y=", y);
}
{
	//HW6
	let x = { x: 10, y: 20 };
	let y = x;
	y.y = 50;
	y.z = 10;
	//guess the print below
	//console.log("HW6", "x=", x, "y=", y);
}
{
	//HW7
	function x() {
		console.log("i was here");
	}
	let y = 133;
	x = y;
	//guess the print below
	//console.log("HW6", "x=", x, "y=", y);
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// now that we undersand more about by value and by refrence lets look on function parameter
// 1. function parameters are just variables. same as var/let
//      as variable they are underdefind until u assign them a value
// 2. from the function decleration only, you cannot understand what are the type of the parameters
//      we can understand parameter value only after the call not the decleration
// 3. parameter are passed by value or by reference is depend on what parameters u pass when called
//      if u pass primitives the will be by value, if u pass objects, functions, array they will be by value
//      Note: only string, number and boolean are primitives the rest are objects
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// examples:
{
	function foo(a) {
		a = a + 1;
		//console.log("a=", a); unrmark this
	}
	foo(1); // this is the same as writing a = 1 --> by value
	foo(1, 2, 3); // this is the same as writing a = 1 --> by value, the rest are ignored

	let x = 1;
	foo(x); // this is the same as writing a = x, and we know x is a number --> by value
	//console.log("x=", x); // as u can see x is no affect by the changes inside foo
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
{
	function foo(a) {
		a[0] = a[0] + 1;
		//console.log("a=", a); unrmark this
	}
	foo([1, 2, 3]); // this is the same as writing a = [1,2,3] --> by refrence, a is holding the array
	foo([1, 2, 3], 2, 3); // this is the same as writing a = [1,2,3] --> by refrence, the rest are ignored

	let x = [1, 2, 3];
	foo(x); // this is the same as writing a = x, and we know x is an array --> by refrence
	//console.log("x=", x); // as u can see x was changed foo
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// test your self with objects
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
