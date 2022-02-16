const summa = document.querySelector('.input__summa');
const srok = document.querySelector('.input__period');
const procent = document.querySelector('.input__rate');
const btn = document.querySelector('.btn-calc');
const select = document.querySelector('select');
const table = document.querySelector('th');


function getSumma() {

	let genSumma = summa.value * (procent.value / 100);
	let month = summa.value / srok.value;
	let monthProcent = genSumma / srok.value;
	let result = month + monthProcent;
	console.table(result);

	for (let i = 0; i < srok.value; i++) {
		month = summa.value / srok.value;
		console.log(`${i} месяц ${month} суммы`);
	}

	for (let j = 0; j < srok.value; j++) {
		monthProcent = genSumma / srok.value;
		console.log(`${j} процент за ${monthProcent} месяц`);
	}
}

btn.addEventListener('click', getSumma);


// // Аннуитетный
// let summa = 1000;
// let period = 12;
// let rate = 0.229;

// let ann = 0;
// let monthRate = rate / 12;
// let topPart = +(summa * monthRate).toFixed(2);
// let bottomPart = + (1 - (1 / Math.pow(monthRate + 1, period))).toFixed(2);
// ann = +(topPart / bottomPart).toFixed(2);

// console.log(ann);

// //Дифференциальный

// let diff = 0;
// let percents = 0;
// let remainSumma = summa;
// let mainDebt = +(summa / period).toFixed(2);

// for (let i = 0; i < period; i++) {
// 	console.log(`Долг: ${remainSumma}`);
// 	percents = +(remainSumma * monthRate).toFixed(2);
// 	console.log(`проценты:  ${percents}`);
// 	remainSumma -= +(mainDebt).toFixed(2);
// 	(remainSumma) = +(remainSumma).toFixed(2);
// 	diff = +(percents + mainDebt).toFixed(2);
// 	console.log(`Основной долг: ${mainDebt}`);
// 	console.log(`Ежемесячный платёж: ${diff}`);

// }

