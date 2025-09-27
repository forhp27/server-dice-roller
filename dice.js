function rollDice() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;

  const randomDice = "die" + randomNumber1 + ".png";
  const randomImageSource = "/dice/" + randomDice;
  const image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);

  const resultParagraph = document.querySelector("p");
  resultParagraph.textContent = `You rolled a ${randomNumber1}!`;
}

const button = document.querySelector("button");
button.addEventListener("click", rollDice);
