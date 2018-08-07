var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.getElementsByTagName("li");

function listLength() {
	return items.length;
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
	btn.onclick = removeParent;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// returns event target element, <li></li>
function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}

// toggles .done class to target element
ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

function removeParent(event) {
	var target = getEventTarget(event);
	target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// add delete buttons to existing list
for(var i = 0; i < listLength(); i++) {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	items[i].appendChild(btn);
	btn.onclick=removeParent;
}