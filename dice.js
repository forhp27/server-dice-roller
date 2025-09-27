function rollDice() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;

  const randomDice = "die" + randomNumber1 + ".png";
  const randomImageSource = "/dice/" + randomDice;
  const image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);

  const randomNumber2 = Math.floor(Math.random() * 6) + 1;
  const randomDice2 = "/dice/die" + randomNumber2 + ".png";
  const image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomDice2);
}

const button = document.querySelector("button");
button.addEventListener("click", rollDice);
