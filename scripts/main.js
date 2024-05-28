// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Adrian De La Torre';

let myImage = document.querySelector('img');
myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/Adrian De La Torre_square.jpg') {
    myImage.setAttribute('src', 'images/square_alternate.jpg');
  } else {
    myImage.setAttribute('src', 'images/Adrian De La Torre_square.jpg');
  }
}

const effect = VANTA.BIRDS({
  el: "#element",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0xffffff,
  color1: 0xd6d6d6,
  color2: 0xedf1ff,
  colorMode: "lerpGradient",
  birdSize: 0.50,
  wingSpan: 10.00,
  speedLimit: 0.5,
  separation: 70.00,
  alignment: 21.00,
  cohesion: 90.00,
  quantity: 4.00
})

window.addEventListener('resize', function() {
  effect.resize();
});

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

var mybuttonUp = document.getElementById("myBtnUp");

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybuttonUp.style.display = "block";
  } else {
    mybuttonUp.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
