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

//double everyones money

function doubleMoney() {
	data = data.map((user) => {
		return { ...user, money: user.money * 2 };
	});
	updateDOM();
}

//sort by richest

function sortByRichest() {
	data.sort((a, b) => b.money - a.money);

	updateDOM();
}

//add new obj to data arr
function addData(obj) {
	data.push(obj);

	updateDOM();
}

//update DOM

function updateDOM(providedData = data) {
	//clear main div
	main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';

	providedData.forEach((item) => {
		const element = document.createElement('div');
		element.classList.add('person');
		element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
			item.money
		)}`;
		main.appendChild(element);
	});
}
//Format number as money

function formatMoney(number) {
	return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//event listeners

addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);

//!examples
//map-- returns a new array

// const arr = [1, 2, 3, 4, 5];

// const arr2 = arr.map((item) => {
// 	return `Number ${item}`;
// });

// console.log(arr2);
//Array ["Number 1", "Number 2", "Number 3", "Number 4", "Number 5"]

//sort-- needs a compare function

// const arr = [1, 2, 110, 3, 4, 330];

// const sortedArr = arr.sort((a, b) => a - b);

// console.log(sortedArr);
