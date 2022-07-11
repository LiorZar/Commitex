//-------------------------------------------------------------------
// in this set of work, you have some other code written for you.
// please accept it as a black box
//-------------------------------------------------------------------
// you get here the number system, LEFT = -10, RIGHT = 10, TOP = 10, BOTTOM = -10
// LEFT     the x lowest value
// RIGHT    the x highest value
// TOP      the y higest value
// BOTTOM   the y lowest value
// PX       the size of a point
//-------------------------------------------------------------------
// You get a function the sets a points color
// examples:
//    setPoint( -3.12, 4, "red" ); // will set the point in (-3.12, 4) to red color
//    setPoint( 2.5, 2.5, "green" ); // will set the pixel in (2.5, 2.5) to green color
//-------------------------------------------------------------------
// Mouse left click will zoom in the number system
// Mouse right click will zoom out
//-------------------------------------------------------------------
// after you write your answer u need to set your function inside
// render variable (see example1)
//-------------------------------------------------------------------
//-------------------------------------------------------------------
//-------------------------------------------------------------------
// example1
// y = sin(x)
//-------------------------------------------------------------------
function example1() {
	var x, y;
	for (x = LEFT; x < RIGHT; x += PX * 0.1) {
		y = x * x;
		setPoint(x, y, "red");
	}
}
render = example1;

// ex1
// write a function that fills a horizontal line the color red
function ex1() {}
//render = ex1;

// ex2
// write a function that fills a vertical line the color red
function ex2() {}
//render = ex2;

// ex3
// write a function that draws a rectangle
function ex3() {}
//render = ex3;

// ex4
// write a function that draws a diagonal line
function ex4() {}
//render = ex4;

// ex5
// write a function that draws a line, between two points a, b, with some color
function drawLine(a, b, color) {}
//drawLine( {x:10, y:10}, {x:50, y:50}, "red" );

// ex6
// use the function you wrote in ex5(drawLine) to draw rectangle, like ex2
function ex6() {}
//render = ex6;

// ex7
// write a function that draws a filled rectangle
function ex7() {}
//render = ex7;

// ex8
// write a function that fills all pixels with green
function ex8() {}
//render = ex8;

// ex9
// write a function that fills a circle
function ex9() {}
//render = ex9;

// ex10
// write a function that go over all pixels and if i > j red else green
function ex10() {}
//render = ex10;

// ex11
// write a function that go over all pixels and if i*i > j red else green
function ex11() {}
//render = ex11;

// ex12
// write a function that go over all pixels and if i*i + j*j > 16 red
function ex12() {}
//render = ex12;
