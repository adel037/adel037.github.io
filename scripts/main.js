let myHeading = document.querySelector('h1');
myHeading.textContent = 'Adrian De La Torre';

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Cherry-Blossom-Wallpaper.jpg') {
      myImage.setAttribute ('src','images/x6JeNye.jpg');
    } else {
      myImage.setAttribute ('src','images/Cherry-Blossom-Wallpaper.jpg');
    }
}

//--- user welcome 
// let myButton = document.querySelector('button');
// myHeading = document.querySelector('h1');
// function setUserName() {
//     let myName = prompt('Please enter your name.');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Mozilla is cool, ' + myName;
// }

// if(!localStorage.getItem('name')) {
//     setUserName();
// } 
// else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Welcome, ' + storedName;
// }

// //let user change username
// myButton.onclick = function() {
//     setUserName();
//   }
//---
