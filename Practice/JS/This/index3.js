console.clear();
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// now that we are familer with objects and methods, we will start writing a module of our own
// by the end of this exerices we will have a fully point module working
// we will write the point object 3 diffrent way to learn and understand the problems with it
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// first the exact same one from before
// write an object called Point who has to fields x, y
// the Point will have the following methods:
// add( dx, dy ), will add to the current x and y values dx and dy
// sub( dx, dy ), will subtract to the current x and y values dx and dy
// mul( v ), will duplicate the current x and y by v
// div( v ), will divide the current x and y by v
// length(), will return the distance from the 0,0, reference (sqrt(x*x + y*y))
// NOTE: this will be the first time you will work with this idea, so fill free to ask for my help
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
{
	// i added this scope because we do another point later

	let point = {
		x: 0,
		y: 0,
		add: function (dx, dy) {
			this.x += dx;
			this.y += dy;
		},
		sub: function (dx, dy) {
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
		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y);
		},
	};

	point.add(10, 10);
	console.log(point, point.length());
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// the code above is very nice but it is not very useful.
// if we wanted to create another point, we will need to copy the enitre code again
// so how do we solve this issue
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
{
	let point1 = {
		x: 0,
		y: 0,
		add: null,
		sub: null,
		mul: null,
		div: null,
		length: null,
	};
	let point2 = {
		x: 0,
		y: 0,
		add: null,
		sub: null,
		mul: null,
		div: null,
		length: null,
	};
	console.log(point1);
	console.log(point2);

	function Add(dx, dy) {
		this.x += dx;
		this.y += dy;
	}
	point1.add = Add; // we take the function and we use it
	point2.add = Add; // we take the function and we use it again

	point1.add(10, 10); // the this here will be point1
	point2.add(20, 20); // the this here will be point2

	console.log("point1 ", point1);
	console.log("point2 ", point2);

	//ex1
	// add the rest of the functions (sub, mul, div, length)
	// and fill point1 and point2
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// so far so good, so now we can reuse the functions we wrote to all point objects we create
// but still we need to remember to fill the correct fields with the correspending function
// very annoying and we can make mistake this way
// so will try something new
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
{
	// step 1, copy the code of Add, Sub, Mul, Div, Length from above to here

	// ex2
	// now, the function below should create a point and return it
	// it should fill all the fields with the corrsepding values, x, y, add, sub, mul, div, length
	function CreatePoint() {
		let p = {};
		return p;
	}

	// now i will use the function u created,
	// the code below will not work until u finish ex2
	let point1 = CreatePoint();
	let point2 = CreatePoint();

	point1.add(33, 44);
	point2.add(12, 66);

	console.log("point1 ", point1, point1.length());
	console.log("point2 ", point2, point1.length());
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// much nicer now we can create points with a single function call.
// we are resusing code that we wrote
// but there is a small risk the Add, Sub, Div ... function are globally declared
// so we cannot use those names anymore
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
{
	// ex3
	// same as ex2 but this time we will declare the Add, Sub, Div function inside the CreatePoint function
	// yes will create a function within a function
	// this way those function are only known to who ever calls Create Point and this is what we want
	function CreatePoint() {
		let p = {};
		return p;
	}

	let point1 = CreatePoint();
	let point2 = CreatePoint();

	point1.add(33, 44);
	point2.add(12, 66);

	console.log("point1 ", point1, point1.length());
	console.log("point2 ", point2, point2.length());
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// very nice
// now we do it all over again but with some changes
//
// ex4
// 1. create a function that creates a point, CreatePoint
// 2. this function gets two parameters x and y and fills the create points with these values
// 3. the Point will have the following methods:
//      add( p ), will add to the current x and y values p.x and p.y (add one point to another point)
//      sub( p ), will subtract to the current x and y values p.x and p.y
//      mul( v ), will duplicate the current x and y by v
//      div( v ), will divide the current x and y by v
//      length(), will return the distance from the 0,0, reference (sqrt(x*x + y*y))
// don't use a scope now. will continue adding features to the current CreatePoint
//------------------------------------------------------------------------------------------------------------------------------------------------------------//

let point1 = CreatePoint(10, 20);
let point2 = CreatePoint(30, 40);
let point3 = CreatePoint(50, 60);

point1.mul(10);
point2.add(point1);
point3.sub(point2);

console.log("point1 ", point1, point1.length());
console.log("point2 ", point2, point2.length());
console.log("point3 ", point3, point3.length());

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// ex5 bonus
// add following methods:
//  copy( p ), will copy the x and y values of p int the current object
//  clone(), will return a clone of this point. in other words will create a new point with the same x, y values
//------------------------------------------------------------------------------------------------------------------------------------------------------------//

point1.copy(point2);
let point4 = point3.clone();
point4.x += 1;
console.log("point1 ", point1, point1.length());
console.log("point2 ", point2, point2.length());
console.log("point3 ", point3, point3.length());
console.log("point4 ", point4, point4.length());
