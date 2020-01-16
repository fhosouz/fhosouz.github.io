

function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
  }

//var myImage = document.querySelector('img').onclick = function() {

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'imagens/api-management.png') 
    {
      myImage.setAttribute ('src','imagens/api-management2.png');
    } 
    else 
    {
      myImage.setAttribute ('src','imagens/api-management.png');
    }
}

var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

function setUserName() {
  var myName = prompt('Por favor, digite seu nome.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Bem vindo, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} 
else
 {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Bem vindo novamente, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}