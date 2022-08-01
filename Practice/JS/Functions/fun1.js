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
// y = x*x
//-------------------------------------------------------------------
function example1() {
  var x, y;
  for (x = LEFT; x < RIGHT; x += PX * 0.1) {
    y = x * x;
    setPoint(x, y, "red");
  }
  console.log(`hi`);
}
// render = example1;

// ex1
// write a function that fills a horizontal line the color red
function ex1() {
  var x, y;
  for (x = LEFT; x < RIGHT; x += PX * 0.1) {
    y = 2;

    setPoint(x, y, "red");
  }
}
// render = ex1;

// ex2
// write a function that fills a vertical line the color red
function ex2() {
  var x, y;
  for (y = BOTTOM; y < TOP; y += PX * 0.1) {
    x = 2;
    setPoint(x, y, "red");
  }
}
// render = ex2;

// ex3
// write a function that draws a rectangle
function ex3() {
  var x, y;
  for (x = -5; x < 5; x += PX * 0.1) {
    y = 2;

    setPoint(x, y, "red");
  }
  for (x = -5; x < 5; x += PX * 0.1) {
    y = -2;

    setPoint(x, y, "red");
  }
  for (y = -2; y < 2; y += PX * 0.1) {
    x = -5;
    setPoint(x, y, "red");
  }
  for (y = -2; y < 2; y += PX * 0.1) {
    x = 5;
    setPoint(x, y, "red");
  }
}

// render = ex3;

// ex4
// write a function that draws a diagonal line
function ex4() {
  var x, y;
  for (x = LEFT; x < RIGHT; x += PX * 0.1) {
    y = 0.5 * x;
    setPoint(x, y, "red");
  }
}
// render = ex4;

// ex5
// write a function that draws a line, between two points a, b, with some color
function drawLineOriginal(a, b, color) {
  var m = (a.y - b.y) / (a.x - b.x);
  console.log(m);

  var n = a.y - m * a.x;
  console.log(n);

  var x, y;
  for (x = LEFT; x < RIGHT; x += PX * 0.1) {
    y = m * x + n;
    setPoint(x, y, "red");
  }
}

function drawLine(p1, p2, color) {
  // y = ax + b;
  var a = (p1.y - p2.y) / (p1.x - p2.x); // this is great
  console.log(a);

  var b = p1.y - a * p1.x; // this is also great
  console.log(b);

  var x, y;

  for (x = p1.x; x < p2.x; x += PX * 0.1) {
    // that the correct idea
    // it is good enough. but have a few issues that are not important
    // ok?
    y = a * x + b;
    setPoint(x, y, color); // set an aribitary pixel with a color in location x, y
  }
}
function ex5() {
  drawLine({ x: -5, y: -10 }, { x: 10, y: 10 }, "red");
}
render = ex5;

// ex6
// use the function you wrote in ex5(drawLine) to draw rectangle, like ex2
function drawRectangle(point1, point2, point3, point4) {
  drawLine(point1, point2, "red");
}
//render = drawRectangle;

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
