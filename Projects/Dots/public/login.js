const loginForm = document.getElementById("LoginForm");
const registerForm = document.getElementById("RegisterForm");

function Login() {
	const name = document.getElementsByName("gname")[0].value;
	const passwd = document.getElementsByName("passwd")[0].value;
	console.log("login", name, passwd);
	return false;
}

function Register() {
	const fname = document.getElementsByName("fname")[0].value;
	const lname = document.getElementsByName("lname")[0].value;
	const gname = document.getElementsByName("new_gname")[0].value;
	const passwd = document.getElementsByName("new_passwd")[0].value;
	console.log("register", fname, lname, gname, passwd);
	return false;
}

function showLoginForm(name) {
	loginForm.style.display = name === "Login" ? "block" : "none";
	registerForm.style.display = name === "Register" ? "block" : "none";
}
