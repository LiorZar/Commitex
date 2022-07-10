// ex1
// we wrote a function the convert any pixel to normal coordiange system "pixel2point"
// between [-10,-10]x[10,10]
// u can test it by clicking on the canvas

// draw the f(x) = x;
function ex1() {
    var x, y, j;
    for (var i = 0; i < size; ++i) {
        x = i2x(i);
        y = x;
        j = y2j(y);
        setPixel(i, j, "green");
    }
}
ex1();


// ex2
// draw the f(x) = x*x;
function ex2() {

}
// ex2();


// ex3
// draw the f(x) = sin(x);
function ex3() {

}
// ex3();


// ex4
// draw the f(x) = sin(1/x); x>0
function ex3() {

}
// ex4();


