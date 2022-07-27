const SEND_TIME = 200;
const canvas = document.getElementById("board");
const ctx = board.getContext("2d");

canvas.width = 1000;
canvas.height = 1000;

class Game {
	constructor() {
		this.currTime = Clock.currTime();
		this.lastTime = 0;
		this.TS = setInterval(this.frame, 20);
		this.players = {};
		this.currPlayer = null;
		canvas.addEventListener("mouseup", this.onMouseUp);
	}
	join() {
		this.currPlayer = new Dot(repository.userId, "red");
		this.players[this.currPlayer.id] = this.currPlayer;
		this.currPlayer.position.set(-100, -100);
		this.lastTime = this.currTime;
	}
	onData(data) {
		const oldPlayers = this.players;
		this.players = {};
		for (let id in data) {
			const player = oldPlayers[id] || new Dot(id);

			player.fill(data[id]);
			this.players[id] = player;
		}
	}
	sendInfo() {
		if (!this.currPlayer) return;
		if (this.currTime - this.lastTime < SEND_TIME) return;
		this.lastTime = this.currTime;

		repository.socket.emit("message", "me", this.currPlayer);
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

		const force = 200;
		this.currPlayer.apply({ x: dx * force, y: dy * force });
	}
	onMouseUp = (evt) => {
		if (!this.currPlayer) return;
		const rect = canvas.getBoundingClientRect();
		const pt = {
			x: ((evt.clientX - rect.left) / (rect.right - rect.left)) * canvas.width,
			y: ((evt.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height,
		};
		repository.socket.emit("message", "shoot", pt);
	};
	update() {
		for (let id in this.players) this.players[id].simulate();
	}
	collisionTest() {
		const dots = Object.values(this.players);

		const len = dots.length;
		for (let i = 0; i < len; ++i) {
			const d = dots[i];
			for (let j = i + 1; j < len; ++j) {
				dots[j].collisionTest(d);
			}
			d.boundTest();
			d.hpTest();
		}
	}
	draw() {
		ctx.fillStyle = "black";
		ctx.font = `${TEXT_SIZE}px Arial`;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		for (let id in this.players) this.players[id].draw(ctx);
	}
	frame = () => {
		this.currTime = Clock.currTime();
		this.checkInput();
		this.sendInfo();
		this.update();
		this.collisionTest();
		this.draw();
	};
}
repository.game = new Game();
