const { sortAndDeduplicateDiagnostics } = require('typescript');

const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMilllionaresBtn = document.getElementById('show-millionares');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

//where we want to put all of the people
let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//fetch random user and add money

async function getRandomUser() {
	const res = await fetch('https://randomuser.me/api');
	const data = await res.json();

	console.log(data);
	//we grab the first item in the array
	const user = data.results[0];

	const newUser = {
		name: `${user.name.first} ${user.name.last}`,
		money: Math.floor(Math.random() * 1000000),
	};
	// console.log(newUser);
	addData(newUser);
}

//add new obj to data arr
function addData(obj) {
	data.push(obj);
}
