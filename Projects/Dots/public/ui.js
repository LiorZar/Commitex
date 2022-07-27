function onKey(event, val) {
	keysPressed[event.keyCode] = val;
}
const Clock = {
	currTime: function () {
		return new Date().getTime();
	},
	seconds: function () {
		return new Date().getTime() * 0.001;
	},
};
repository.openPage = function (event, pageName) {
	let i;
	const pagecontent = document.getElementsByClassName("pagecontent"); // get all pages
	for (i = 0; i < pagecontent.length; i++) {
		pagecontent[i].style.display = "none"; // hide page
	}

	const pagelinks = document.getElementsByClassName("pagelinks"); // get all nav button
	for (i = 0; i < pagelinks.length; i++) {
		pagelinks[i].className = pagelinks[i].className.replace(" active", ""); // mark non active
	}

	document.getElementById(pageName).style.display = "block";
	if (event) event.currentTarget.className += " active"; // mark active the nav button we pressed
};

repository.openPage(null, "Home");
