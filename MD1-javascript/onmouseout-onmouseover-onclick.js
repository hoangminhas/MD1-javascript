let firstChange = document.getElementById('first');
firstChange.addEventListener("mouseover", moveover)
;

let secondChange = document.getElementById('first');
secondChange.addEventListener("mouseout", moveout);

let thirdChange = document.getElementById('first');
thirdChange.addEventListener("click", clickChange);

let clickItem = document.getElementById('second');
clickItem.addEventListener("click", click);

//write function for Events
function moveover() {
    firstChange.style.color = 'red';
}
function moveout() {
    secondChange.style.color = 'black';
}
function clickChange() {
    thirdChange.style.color = 'green';
    thirdChange.style.fontFamily = 'monospace';
}
function click() {
    alert("hello");
}