var first = (Math.random()*6)+1;
var randomNumber1 = Math.floor(first);
var makeContainer = "./images/dice"+randomNumber1+".png";

var second = Math.random()*6;
var randomNumber2 = Math.floor(second +1);
var makeContainer2 = "./images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", makeContainer);
document.querySelector(".img2").setAttribute("src", makeContainer2);

if (randomNumber1 > randomNumber2){
   document.querySelector("h1").textContent = "Player 1 Wins 🥳";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins 🥳";
} else{
    document.querySelector("h1").textContent = "It's a Draw 😞";
}
