function function1() {
  let car = {
    manufacturer: "kia",
    model: "stonic",
    year: 2020,
    plate: "50058208",
  };

  console.log(car);
  console.log(Object.keys(car));
  car.manufacturer = "skoda";
  car.model = "octavia";
  console.log(car);
}

/*function1();*/

function function2() {
  let car = {
    manufacturer: "kia",
    model: "stonic",
    year: 2020,
    plate: "50058208",
  };
  var str = "";
  //   for (let [key, val] of Object.entries(car)) {
  //     str = str + "<li>" + key + " : " + val + "</li>";
  //   }
  for (var key in car) {
    str = str + "<li>" + key + " : " + car[key] + "</li>";
  }
  str = "<ul>" + str + "</ul>";
  console.log(str);
  var z = document.getElementById("cars");
  console.log(z.innerHTML);
  z.innerHTML = str;
}

function function3(obj) {
  //console.log(obj);
  for (var key in obj) {
    console.log(obj[key]);
  }
}

let car1 = {
  manufacturer: "Ford",
  model: "Focus",
  year: 2020,
  plate: "aaagb5",
};

let student1 = {
  firstName: "John",
  lastName: "Doe",
  city: "New York",
  AverageGrade: 85.72,
  email: "john123@gmail.com",
};

let user1 = {
  firstName: "John",
  lastName: "Doe",
  city: "New York",
  email: "john123@gmail.com",
  phone: "054-1234567",
  year: 2018,
};

function function3B() {
  function3(car1);
  function3(student1);
  function3(user1);
}
/*es4.............*/

let cars = [
  {
    manufacturer: "Mazda",
    model: "6",
    year: 2020,
    plate: "abc123",
  },
  {
    manufacturer: "Ford",
    model: "Focus",
    year: 2020,
    plate: "aaagb5",
  },
  {
    manufacturer: "Toyota",
    model: "Rav4",
    year: 2014,
    plate: "ghk111",
  },
  {
    manufacturer: "Mazda",
    model: "3",
    year: 2020,
    plate: "hse73j",
  },
  {
    manufacturer: "Subaru",
    model: "Outback",
    year: 2018,
    plate: "kdyb72",
  },
  {
    manufacturer: "Toyota",
    model: "Rav4",
    year: 2016,
    plate: "dzdi64",
  },
  {
    manufacturer: "Ford",
    model: "Focus",
    year: 2020,
    plate: "atg5aa",
  },
  {
    manufacturer: "Subaru",
    model: "Outback",
    year: 2019,
    plate: "oxt63c",
  },
  {
    manufacturer: "Toyota",
    model: "Rav4",
    year: 2014,
    plate: "eswi77",
  },
  {
    manufacturer: "Ford",
    model: "Focus",
    year: 2020,
    plate: "osr3h6",
  },
  {
    manufacturer: "Mazda",
    model: "3",
    year: 2020,
    plate: "wwjyx4",
  },
  {
    manufacturer: "Toyota",
    model: "Rav4",
    year: 2018,
    plate: "22i64d",
  },
  {
    manufacturer: "Mazda",
    model: "6",
    year: 2020,
    plate: "abc123",
  },
  {
    manufacturer: "Ford",
    model: "Focus",
    year: 2020,
    plate: "aaagb5",
  },
  {
    manufacturer: "Toyota",
    model: "Rav4",
    year: 2014,
    plate: "ghk111",
  },
  {
    manufacturer: "Mazda",
    model: "3",
    year: 2020,
    plate: "hse73j",
  },
  {
    manufacturer: "Subaru",
    model: "Outback",
    year: 2018,
    plate: "kdyb72",
  },
  {
    manufacturer: "Toyota",
    model: "Rav4",
    year: 2016,
    plate: "dzdi64",
  },
  {
    manufacturer: "Ford",
    model: "Focus",
    year: 2020,
    plate: "atg5aa",
  },
  {
    manufacturer: "Subaru",
    model: "Outback",
    year: 2019,
    plate: "oxt63c",
  },
  {
    manufacturer: "Toyota",
    model: "Rav4",
    year: 2014,
    plate: "eswi77",
  },
  {
    manufacturer: "Ford",
    model: "Focus",
    year: 2020,
    plate: "osr3h6",
  },
  {
    manufacturer: "Mazda",
    model: "3",
    year: 2020,
    plate: "wwjyx4",
  },
  {
    manufacturer: "Toyota",
    model: "Rav4",
    year: 2018,
    plate: "22i64d",
  },
];
function function4() {
  var allStr = "";
  for (var i = 0; i < cars.length; i++) {
    let carInArray = cars[i];
    //console.log(carInArray);

    var str = "";
    for (var key in carInArray) {
      str = str + "<li>" + key + " : " + carInArray[key] + "</li>";
    }
    str = "<ul>" + str + "</ul>";
    allStr = allStr + str;
  }

  console.log(allStr);

  var z = document.getElementById("arrayCars");
  z.innerHTML = allStr;
}

/* ex5................*/
function function5a() {
  var manu = document.querySelector("#input").value;
  var allStr = "";
  for (var i = 0; i < cars.length; i++) {
    var c = cars[i];

    if (manu == c.manufacturer) {
      var str = "";
      for (var key in c) {
        str = str + "<li>" + key + " : " + c[key] + "</li>";
      }
      str = "<ul>" + str + "</ul>";
      allStr = allStr + str;
    }
  }
  var z = document.getElementById("para");
  z.innerHTML = allStr;
}

function function5() {
  var allStr = "";
  for (var i = 0; i < cars.length; i++) {
    if (document.querySelector("#input").value == cars[i].manufacturer) {
      var str = "";
      for (var key in cars[i]) {
        str = str + "<li>" + key + " : " + cars[i][key] + "</li>";
      }
      str = "<ul>" + str + "</ul>";
      allStr = allStr + str;
    }
  }

  var z = document.getElementById("para");
  z.innerHTML = allStr;
}
/*
function <name>(para1, para2, par2)
{ // born here

    console()
    var a, b, c;


} // die here
name( value, value, value )
f(x) = x^2
f(x, y) = x^2 + y^2
f
*/
