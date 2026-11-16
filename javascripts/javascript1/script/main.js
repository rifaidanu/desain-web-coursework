var myHeading = document.querySelector('h1');
var button = document.querySelector('button');

myHeading.innerHTML = 'Hello World!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute ('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute ('src', 'images/firefox-icon.png')
    }
}

function setUserName () {
    var myName = prompt("plase enter your name : ")
    localStorage.setItem('name', myName)
    myHeading.innerHTML = 'Mozila Is Cool, ' + myName
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozila Is Cool, ' + storedName
}

button.onclick = function() {
    setUserName();
};