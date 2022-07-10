var nw = ["newyork1.jpg", "newyork2.jpg", "newyork3.jpg"];
var pa = ["paris1.jpg", "paris2.jpg", "paris3.jpg"];
var be = ["berlin1.jpg", "berlin2.jpg", "berlin3.jpg"];

function changeCity() {
  var imgDivHtml = document.querySelector("#img");

  var whichCity = document.querySelector("#id_gallery").value;
  console.log(whichCity);

  var finalArr;
  if (whichCity == "nw") finalArr = nw;
  if (whichCity == "pa") finalArr = pa;
  if (whichCity == "be") finalArr = be;

  var finalStr = "";
  for (var i = 0; i < finalArr.length; ++i) {
    finalStr = finalStr + '<img src="img/' + finalArr[i] + '" width="200px" height="200px" />';
  }

  imgDivHtml.innerHTML = finalStr;
}

/*function changeCity() {
  var imgDivHtml = document.querySelector("#img");
  var galleryHtml = document.querySelector("#id_gallery");
  var whichCity = galleryHtml.value;

  console.log(whichCity);

  var finalArr;
  if (whichCity == "nw") finalArr = nw;
  if (whichCity == "pa") finalArr = pa;
  if (whichCity == "be") finalArr = be;

  var finalStr = "";
  for (var i = 0; i < finalArr.length; ++i) {
    finalStr = finalStr + '<img src="img/' + finalArr[i] + '" width="200px" height="200px" />';
  }
  console.log(imgDivHtml.innerHTML);
  imgDivHtml.innerHTML = finalStr;
  console.log(imgDivHtml.innerHTML);

}*/
