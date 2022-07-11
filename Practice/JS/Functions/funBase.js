console.clear();

//global variable for internal usage.
const __canvas = document.getElementById("canvas");
const __context = __canvas.getContext("2d");
const sizePX = __canvas.width * 1.0;

function empty(res) {}
var render = empty;

__canvas.height = sizePX;
var __center = { x: 0.0, y: 0.0, sizeMM: 10.0 };
__canvas.addEventListener("click", __zoomin, false);
__canvas.addEventListener("contextmenu", __zoomout, false);

function lerp(low, high, f) {
	return low * (1.0 - f) + high * f;
}
function ierp(low, high, f) {
	return (f - low) / (high - low);
}
var LEFT, RIGHT, TOP, BOTTOM, PX;
function L() {
	return __center.x - __center.sizeMM;
}
function R() {
	return __center.x + __center.sizeMM;
}
function T() {
	return __center.y + __center.sizeMM;
}
function B() {
	return __center.y - __center.sizeMM;
}

// internal functions
function i2x(i) {
	return lerp(L(), R(), ierp(0, sizePX, i));
}
function x2i(x) {
	return lerp(0, sizePX, ierp(L(), R(), x));
}
function j2y(j) {
	return lerp(T(), B(), ierp(0, sizePX, j));
}
function y2j(y) {
	return lerp(0, sizePX, ierp(T(), B(), y));
}

function pixel2point(i, j) {
	return { x: i2x(i), y: j2y(j) };
}
function point2pixel(x, y) {
	return { i: x2i(x), j: y2j(y) };
}

function isEqual(a, b) {
	return Math.abs(a - b) < 0.01;
}
function Render() {
	LEFT = L();
	RIGHT = R();
	TOP = T();
	BOTTOM = B();
	__context.fillStyle = "white";
	__context.fillRect(0, 0, sizePX, sizePX);
	PX = __center.sizeMM / sizePX;
	render();
}
function __zoomin(event) {
	var pnt = pixel2point(event.offsetX, event.offsetY);
	console.log(pnt);
	__center.x = pnt.x;
	__center.y = pnt.y;
	__center.sizeMM /= 4;
	console.log(__center);
	Render();
}
function __zoomout(event) {
	event.preventDefault();
	__center.sizeMM *= 2;
	console.log(__center);
	Render();
}

// internal function to set a pixel color
function setPixel(x, y, color) {
	__context.fillStyle = color;
	__context.fillRect(x, y, 1, 1);
}

// internal function to set a point color
function setPoint(x, y, color) {
	const i = x2i(x);
	const j = y2j(y);
	__context.fillStyle = color;
	__context.fillRect(i, j, 1, 1);
}
