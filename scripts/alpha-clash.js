// function play() {
//   //step-1:hide the home screen.to hide the screen add the class hidden to the home section
//   const homeSection = document.getElementById("home-section");
//   homeSection.classList.add("hidden");
//   // console.log(homeSection.classList);
//   //step-2 show the playground
//   const playgroundSection = document.getElementById("playground-section");
//   playgroundSection.classList.remove("hidden");
// }

function continueGame() {
  //step-1:generate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log("Your random alphabet", alphabet);

  //set randomly generated alphabet to the screen
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  //set background color
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-section");
  showElementById("playground-section");
  continueGame();
}
