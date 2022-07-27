console.clear();
function FARE_FIND(from, to, month) {
	return `https://www.ryanair.com/api/farfnd/3/oneWayFares/${from}/${to}/cheapestPerDay?market=en-ie&outboundMonthOfDate=${month}`;
}

const ResDiv = document.getElementById("res");
const TLV = "TLV";
//const AIRPORTS = ["BRI", "BLQ", "BGY", "FCO", "NAP", "TRN", "TSF"];
const AIRPORTS = ["SOF"];
const Months = ["2023-01-01", "2023-02-01", "2023-03-01"];
const RangeFrom = [new Date("2023-01-15"), new Date("2023-03-20")];
const RangeTo = [new Date("2023-01-21"), new Date("2023-03-30")];
const requests = [];
const DB = { to: [], back: [] };
let reqIdx = 0;
let currReq = null;

function FillRequests() {
	for (port of AIRPORTS) {
		for (m of Months) {
			requests.push({ p: port, from: TLV, to: port, m: m });
			requests.push({ p: port, from: port, to: TLV, m: m });
		}
	}
}
function nextRequest() {
	if (reqIdx >= requests.length) {
		done();
		return;
	}
	currReq = requests[reqIdx];
	reqURL = FARE_FIND(currReq.from, currReq.to, currReq.m);
	console.log(reqURL);
	const req = new XMLHttpRequest();
	req.open("GET", reqURL, true);

	req.onreadystatechange = function () {
		if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
			var data = JSON.parse(this.response);
			var arr = data.outbound.fares;
			parseFares(arr);
			reqIdx++;
			nextRequest();
		}
	};
	req.send();
}
function parseFares(arr) {
	console.log("parse", currReq.from, currReq.to, currReq.m);
	for (fare of arr) {
		if (!fare.price) continue;
		const f = {
			p: currReq.p,
			from: currReq.from,
			to: currReq.to,
			day: new Date(fare.day),
			price: Math.ceil(parseFloat(fare.price.value)),
		};
		if (f.from == TLV) {
			if (f.day < RangeFrom[0] || f.day > RangeFrom[1]) continue;
			DB.to.push(f);
		} else {
			if (f.day < RangeTo[0] || f.day > RangeTo[1]) continue;
			DB.back.push(f);
		}
	}
}
function getDay(d) {
	//return "" + (d.getDay() + 1) + "\\" + (d.getMonth() + 1);
	return d.toDateString();
}
function Head(f) {
	if (f) return document.createTextNode(`${f.p}, ${getDay(f.day)}`);
	return document.createTextNode(`*`);
}
function Fare(td, f, t) {
	const diffTime = t.day - f.day;
	if (diffTime <= 0) return;
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	const fare = f.price + t.price;
	td.appendChild(document.createTextNode(`${diffDays}, ${fare}N`));
	//if (fare > 100) td.style.background = "red";
	//else if (fare < 100) td.style.background = "green";

	if (diffDays > 10) td.style.color = "red";
	else if (diffDays < 5) td.style.color = "orange";

	//if (fare < 120 && diffDays <= 7 && diffDays >= 5) td.style.background = "yellow";
	if (fare < 200 && 4 <= diffDays && diffDays <= 6) td.style.background = "yellow";
}
function done() {
	const table = document.createElement("TABLE");
	table.border = "1";

	const tableBody = document.createElement("TBODY");
	table.appendChild(tableBody);

	var i, j;
	var tr = document.createElement("TR");
	tableBody.appendChild(tr);
	for (j = -1; j < DB.to.length; j++) {
		const C = DB.to[j];
		var td = document.createElement("TH");
		td.appendChild(Head(C));
		tr.appendChild(td);
	}

	for (i = 0; i < DB.back.length; i++) {
		const R = DB.back[i];
		var tr = document.createElement("TR");
		tableBody.appendChild(tr);

		var td = document.createElement("TH");
		td.appendChild(Head(R));
		tr.appendChild(td);

		for (j = 0; j < DB.to.length; j++) {
			const C = DB.to[j];
			var td = document.createElement("TD");
			Fare(td, C, R);
			tr.appendChild(td);
		}
	}
	ResDiv.appendChild(table);
}
FillRequests();
nextRequest();
//done();
