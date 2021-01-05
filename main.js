// Detecting button
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //to get the information about which button have been clicked.
    var buttonClicked = this.innerHTML;
    makeSound(buttonClicked);
  });
}

//Detecting Keyboard press
//keydown gives all the info about which key have been pressed and "key" gives the exact character you have pressed in keyboard
document.addEventListener("keydown", function (event) {
  var keyboardKey = event.key;
  console.log(keyboardKey);
  makeSound(keyboardKey);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom_1 = new Audio("sounds/tom-1.mp3"); //audio file with respect to "w"
      tom_1.play(); // play() function play the respective audio.
      break;

    case "a":
      var tom_2 = new Audio("sounds/tom-2.mp3");
      tom_2.play();
      break;

    case "s":
      var tom_3 = new Audio("sounds/tom-3.mp3");
      tom_3.play();
      break;

    case "d":
      var tom_4 = new Audio("sounds/tom-4.mp3");
      tom_4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(buttonName);
      break;
  }
}

// Method (A)
// document.querySelector(".w").addEventListener("click",handleEvent);
// document.querySelector(".a").addEventListener("click",handleEvent);
// document.querySelector(".s").addEventListener("click",handleEvent);
// document.querySelector(".d").addEventListener("click",handleEvent);
// document.querySelector(".j").addEventListener("click",handleEvent);
// document.querySelector(".k").addEventListener("click",handleEvent);
// document.querySelector(".l").addEventListener("click",handleEvent);

// function handleEvent(){
//     alert("Hi! there.")
// }

//not related to this project ...just some info about constructors
// function Calculate(num1,num2){
//     this.num1=num1;
//     this.num2=num2;
//     this.result=function (){
//         return this.num1+this.num2;
//     };
// }

// var amount=new Calculate(10,20);
// console.log(amount.result());
