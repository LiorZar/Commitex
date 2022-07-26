const canvas = document.getElementById("board");
const ctx = board.getContext("2d");
canvas.width = 1000;
canvas.height = 1000;

class Game {
	constructor() {
		this.currTime = new Date().getTime();
		this.gameTime = 0;
		this.TS = setInterval(this.frame, 16);
		this.players = {};
		this.currPlayer = null;
	}
	join() {
		this.currPlayer = new Dot(repository.userId, "red");
		this.players[this.currPlayer.id] = this.currPlayer;
		this.currPlayer.position.set(500, 500);
	}
	checkInput() {
		if (!this.currPlayer) return;

		const left = keysPressed[65] || keysPressed[37];
		const right = keysPressed[68] || keysPressed[39];
		const up = keysPressed[87] || keysPressed[38];
		const down = keysPressed[83] || keysPressed[40];
		if (!left && !right && !up && !down) return;

		let dx = 0,
			dy = 0;
		if (left) dx = -1;
		if (right) dx = 1;
		if (up) dy = -1;
		if (down) dy = 1;

		const force = 10;
		this.currPlayer.apply({ x: dx * force, y: dy * force });
	}
	update() {
		const prevTime = this.currTime;
		this.currTime = new Date().getTime();
		const dt = (this.currTime - prevTime) / 1000.0;
		this.gameTime += dt;

		for (let id in this.players) this.players[id].simulate(dt);
	}
	draw() {
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		for (let id in this.players) this.players[id].draw(ctx);
	}
	frame = () => {
		this.checkInput();
		this.update();
		this.draw();
	};
}
repository.game = new Game();
