console.clear();

// returns a random nunmber between [0,n)
function Random(n) {
  return Math.floor(Math.random() * n);
}

function FullName(obj) {
  obj.fullname = obj.name + " " + obj.last;
}
var myObj = {};

myObj.name = "Lior";
myObj.last = "Zar";

console.log(myObj);
FullName(myObj);
console.log(myObj);
