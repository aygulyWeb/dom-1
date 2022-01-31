var colorArray = document.getElementsByClassName('table__column');

function getSelected() {
	let selectedValue = document.getElementById('selected').value;
	console.log(selectedValue)
}

let btn = document.getElementById('btn');
let color = document.getElementById('color');
btn.addEventListener('click', function () {
	colorArray[0].style.backgroundColor = color.value;
});



