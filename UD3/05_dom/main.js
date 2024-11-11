// Listar todos los div
let allDivs = document.getElementsByTagName('div');
console.log(allDivs);

//Listar todos los elementos con style == ‘buttons’
let buttonsElements = document.querySelectorAll('.buttons');
console.log(buttonsElements);

//Listar 1 div con class == buttons
let oneDivWithButtons = document.querySelector('div.buttons');
console.log(oneDivWithButtons);

//Listar TODOS los divs con class == buttons
let allDivsWithButtons = document.querySelectorAll('div.buttons');
console.log(allDivsWithButtons);