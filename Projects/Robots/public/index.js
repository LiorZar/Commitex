let waiting = false;
const board = document.getElementById("board");
const ctx = board.getContext("2d");
const TS = setInterval(frame, 16);
const playersDB = {};
const keysPressed = {};
let playerName = "";
const url = window.location.href;

console.log(url);

function NewPlayer() {
  playerName = document.getElementById("name").value;
  const req = new XMLHttpRequest();
  req.open("POST", `${url}newPlayer?name=${playerName}`, true);
  req.send();
}

function MovePlayer(dx, dy) {
  const req = new XMLHttpRequest();
  req.open("POST", `${url}move?name=${playerName}&dx=${dx}&dy=${dy}`, true);
  req.send();
}
function onKey(event, val) {
  keysPressed[event.keyCode] = val;
}
function CheckPlayerMove() {
  if (!playerName) return;

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

  const speed = 2;
  MovePlayer(dx * speed, dy * speed);
}

function frame() {
  CheckPlayerMove();

  if (waiting) return;
  getPlayers();
}

function getPlayers() {
  waiting = true;
  const req = new XMLHttpRequest();

  req.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE) {
      if (this.status == 200) refreshPlayers(JSON.parse(this.response));
      waiting = false;
    }
  };

  req.open("GET", `${url}players`, true);
  req.send();
}

function refreshPlayers(players) {
  ctx.clearRect(0, 0, 1000, 1000);
  const len = players.length;
  for (let i = 0; i < len; ++i) {
    refreshPlayer(players[i]);
  }
}

function refreshPlayer(player) {
  const data = playersDB[player.name];
  if (!data) {
    createPlayer(player);
    return;
  }
  if (!data.img) return;

  //   ctx.beginPath();
  //   ctx.arc(player.x, player.y, 10, 0, 2 * Math.PI);
  //   ctx.stroke();
  ctx.drawImage(data.img, player.x, player.y, 64, 64);
}

function createPlayer(player) {
  playersDB[player.name] = {};
  var img = new Image();
  img.onload = function () {
    playersDB[player.name].img = img;
  };

  img.src = `http://robohash.org/${player.name}`;
}
