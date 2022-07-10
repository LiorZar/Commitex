console.clear();

//global variable for internal usage.
var __canvas = document.getElementById("canvas");
var __context = __canvas.getContext("2d");
var size = __canvas.width * 1.0;
var res = 100.0;
__canvas.height = size;
var __center = { x: 0.0, y: 0.0, scale: 2.0 };
__canvas.addEventListener("click", __zoomin, false);
__canvas.addEventListener("contextmenu", __zoomout, false);


// internal functions
function i2x(i) { return __center.x + (__center.scale * (i - size / 2)) / size; }
function x2i(x) { return (x - __center.x) * size / __center.scale + size / 2; }
function j2y(j) { return __center.y + (__center.scale * (size / 2 - j)) / size; }
function y2j(y) { return size / 2 - (y - __center.y) * size / __center.scale; }

function pixel2point(i, j) { return { x: i2x(i), y: j2y(j) }; }
function point2pixel(x, y) { return { i: x2i(x), j: y2j(y) }; }

function isEqual(a, b) { return Math.abs(a - b) < 0.01; }
function __zoomin(event) {
    var pnt = pixel2point(event.offsetX, event.offsetY);
    console.log(pnt);
    // __center.x = pnt.x;
    // __center.y = pnt.y;
    // __center.scale /= 4;
    //console.log(__center);

}
function __zoomout(event) {
    event.preventDefault();
    // __center.scale *= 2;
    //console.log(__center);
}

// internal function to set a pixel color
function setPixel(x, y, color) {
    __context.fillStyle = color;
    __context.fillRect(x, y, 1, 1);
}

