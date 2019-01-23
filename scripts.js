const numberField = document.querySelector(".field");
const resultsText = document.querySelector(".text");

function howManyMichus() {
  const michuValue = 2310000;
  const worth = Math.round((this.value / michuValue) * 1000) / 1000;
  if(worth < 0.001) {
    resultsText.innerText = `Michu was cheap, but he wasn't that cheap!`
  } else {
    resultsText.innerText = `For that much you could have bought ${worth} Michus!`;
  }
}

numberField.addEventListener("input", howManyMichus);