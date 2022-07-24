console.log("game");
const canvas = document.getElementById("board");
const ctx = board.getContext("2d");
const playersDB = {};
const keysPressed = {};
const TS = setInterval(frame, 16);

function init() {
	ctx.fillStyle = "black";
}
init();
function update() {}
function draw() {
	ctx.b;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function frame() {
	update();
	draw();
}
