const loginForm = document.getElementById("LoginForm");
const registerForm = document.getElementById("RegisterForm");
repository.socket = io();
repository.socket.on("connect", () => {
	console.log("connect");
	ReLogin();
});

function ReLogin() {
	const gname = localStorage.getItem("gname");
	const passwd = localStorage.getItem("password");
	if (gname && passwd) Login(gname, passwd);
}

function Login(_name, _passwd) {
	const name = _name || document.getElementsByName("gname")[0].value;
	const passwd = _passwd || document.getElementsByName("passwd")[0].value;
	console.log("login", name, passwd);
	repository.socket.once("login", (success, data) => {
		console.log(success, data);
		if (success) {
			localStorage.setItem("gname", name);
			localStorage.setItem("password", passwd);
			repository.openPage(null, "Game");
			repository.userId = data;
		}
	});
	repository.socket.emit("login", name, passwd);
	return false;
}

function Register() {
	const fname = document.getElementsByName("fname")[0].value;
	const lname = document.getElementsByName("lname")[0].value;
	const gname = document.getElementsByName("new_gname")[0].value;
	const passwd = document.getElementsByName("new_passwd")[0].value;
	console.log("register", gname, passwd, fname, lname);
	repository.socket.once("register", (success, error) => {
		if (true === success) showLoginForm("Login");
	});
	repository.socket.emit("register", gname, passwd, fname, lname);
	return false;
}

function JoinGame() {
	repository.socket.once("join", (success) => {
		if (true === success) repository.game.join();
	});
	repository.socket.emit("join");
}

function showLoginForm(name) {
	loginForm.style.display = name === "Login" ? "block" : "none";
	registerForm.style.display = name === "Register" ? "block" : "none";
}
