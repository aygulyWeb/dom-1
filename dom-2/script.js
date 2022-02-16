// Создать изображение

// Добавить следующие свойства к изображению
// 1. Добавить атрибут source
// 2. Добавить атрибут width со значением 240
// 3. Добавить класс super
// 4. Добавить свойство alt со значением "Super Man"
// Поместить изображение внутрь элемента с классом wrapper
// Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами
// Поместить этот DIV до элемента <ul></ul>
// Добавить для 2-го параграфа класс text
// Удалить 1-й параграф

// Создать функцию generateAutoCard,которая принимает 3 аргумента: brand, color, year
// Функция должна возвращать разметку HTML:
// <div class="autocard">
//   <h2>BRAND YEAR</h2>
//   <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// </div>

// Создать новый DIV с классом autos
// Создать 3 карточки авто, используя функцию generateAutoCard
// const carsList = [
//     {brand: 'Tesla', year: 2015, color: 'Красный'},
//     {brand: 'Lexus', year: 2016, color: 'Серебристый'},
//     {brand: 'Nissan', year: 2012, color: 'Черный'},
// ]

// Поместить эти 3 карточки внутрь DIV с классом autos
// Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper
// Добавить кнопку Удалить на каждую карточку авто

// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки
// 2. Создать функцию удаления
// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку



const image = document.createElement('img');
const div = document.createElement('div');
const divP = document.createElement('div');
const divAuto = document.createElement('div');

divAuto.className = 'autos';
divP.className = 'pDiv';
divP.innerHTML = `<p></p>
				<p></p>`;
document.body.append(divP);
document.body.append(divAuto);

divP.insertAdjacentHTML('beforebegin', '<ul></ul>');
divP.children[1].classList.add('text');
divP.removeChild(divP.firstChild);

div.classList.add('wrapper');
image.src = './js.jpg';

image.setAttribute('width', '240px');
image.classList.add('super');
image.setAttribute('alt', 'Super Man');
document.body.append(div);
div.append(image);

function generateAutoCard(brand, color, year) {
	return `<div class="autocard">
				<h2>${brand} ${color}</h2>
				<p>Автомобиль ${brand} - ${year} года. Возраст авто - ${year} лет.</p>
				<button>Удалить</button>
			 </div>`;

};

const carsList = [
	{ brand: 'Tesla', year: 2015, color: 'Красный' },
	{ brand: 'Lexus', year: 2016, color: 'Серебристый' },
	{ brand: 'Nissan', year: 2012, color: 'Черный' },
];

const divH = carsList.map(elem => {
	return generateAutoCard(elem.brand, elem.color, elem.year);
}).join('');

divAuto.innerHTML = divH;
const btn = document.querySelectorAll('button');

function getRemove() {
	 document.querySelector('.autocard').remove();
};

btn.forEach(elem=>{
	elem.addEventListener('click', getRemove);
});

