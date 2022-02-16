// Создать div+
// Добавить к нему класс wrapper+
// Поместить его внутрь тэга body+
// Создать заголовок H1 "DOM (Document Object Model)"+
// Добавить H1 перед DIV с классом wrapper+
// Создать список <ul></ul>+
// Добавить в него 3 элемента с текстом "один, два, три"+
// Поместить список внутрь элемента с классом wrapper+

const div = document.createElement('div');
const title = document.createElement('h1');
const list = `<ul>
			<li>один</li>
			<li>два</li>
			<li>три</li>
			</ul>`;


document.body.append(div);
document.body.append(title);

div.classList.add('wrapper');
div.innerHTML = list;
title.after(div);
title.innerHTML = "DOM (Document Object Model)";



