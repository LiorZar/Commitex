const req = new XMLHttpRequest();
req.open("GET", "http://localhost:5050/GetPlayers", true);

req.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    var arr = JSON.parse(this.response);
    var str = "";
    for (let i = 0; i < arr.length; ++i) {
      str += "<h1>" + arr[i] + "</h1>";
    }
    document.getElementById("res").innerHTML = str;
  }
};
req.send();
