// Get random numbers between 1 - 6
// Get a random dice
// Get images source with random dice
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomDice = "die" + randomNumber1 + ".png";
const randomImageSource = "/" + randomDice;

// Randomise player one dice
const image1 = document.querySelectorAll("img")[0];

// 👆 this selects all image tags and then chooses the first [index 0]

// Now target the attribute - src  of image1 and change set the image to random
image1.setAttribute("src", randomImageSource);

// Let's create another randomiser for player 2
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

// random dice for player 2
const randomDice2 = "/dice" + randomNumber2 + ".png";

// Let's randomise player two

const image2 = document.querySelectorAll("img")[1];
// 👆 this selects image tag [index 1]

// Now set element
image2.setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "😎 Player one wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player two wins 😎";
} else {
  document.querySelector("h1").innerHTML = "Draw! 🤝";
}

// Who wins?
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "😎 Player one wins"; // Change h1 text
  document.querySelector("h1").style.color = "#fefae0"; // Change h1 color
  document.body.style.backgroundColor = "#14213d"; // Change page background color
  document.querySelectorAll("p")[0].style.color = "#fefae0"; // Change the paragraph color like h1
  document.querySelectorAll("p")[0].style.textShadow = "0 0 30px #fefae0"; // Add a glow to the paragraph
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player two wins 😎";
  document.querySelector("h1").style.color = "#ffddd2";
  document.body.style.backgroundColor = "#3d405b";
  document.querySelectorAll("p")[1].style.color = "#ffddd2";
  document.querySelectorAll("p")[1].style.textShadow = "0 0 30px #ffddd2";
} else {
  document.querySelector("h1").innerHTML = "Draw! 🤝";
}

// Reset styles for the other paragraph for every refreshed
document.querySelectorAll("p")[1].style.color = "";
document.querySelectorAll("p")[1].style.textShadow = "";

// see it in action
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "😎 Player one wins"; // Change h1 text
  document.querySelector("h1").style.color = "#fefae0"; // Change h1 color
  document.body.style.backgroundColor = "#14213d"; // Change page background color
  document.querySelectorAll("p")[0].style.color = "#fefae0"; // Change the text color like h1
  document.querySelectorAll("p")[0].style.textShadow = "0 0 30px #fefae0"; // Add a glow to the text

  // Reset styles for the other paragraph for every refresh
  document.querySelectorAll("p")[1].style.color = "";
  document.querySelectorAll("p")[1].style.textShadow = "";
}

// Function to let the button roll the dice

function rollDice() {
  //add everything we've been doing so far
}

// Get the button element and add a click event listener
const button = document.querySelector("button"); // Get button
button.addEventListener("click", rollDice); //set a click event
