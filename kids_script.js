//declaration of variables used in the setup of the game
const keyboard = document.querySelector(".keyboard");
const h4 = document.querySelector("h4");
const wordDisplay = document.querySelector(".word-display");
const chance = document.querySelector(".chance");
const img = document.querySelector(".img");

const gameended = document.querySelector(".GameEnded");
const gameendedimg = document.querySelector(".gameendedImg");
const answer = document.querySelector(".answer");
const h3 = document.querySelector("h3");
const h6 = document.querySelector("h6");

//initializing the count for the hanging of the stick man (hangman)
let count = 0;

//selection of word from wordlist
const randomIndex = Math.floor(Math.random() * wordList.length);
const { word, hint } = wordList[randomIndex];

for (var i = 97; i <= 122; i++) {

  let button = document.createElement("button");
  button.classList.add("btn");
  button.innerHTML = String.fromCharCode(i);
  keyboard.appendChild(button);
}

//iteractions on game ending
const gameEnded = (bool) => {
  if (bool) {
    gameended.classList.add("show");
    document.querySelector(".game").style.opacity = 0.8;
    answer.innerText = word;
  } else {
    gameended.classList.add("show");
    document.querySelector(".game").style.opacity = 0.8;
    gameendedimg.src = "/images/win.gif";
    h3.innerText="Congrats!"
    h6.innerText="You Guessed The Correct Answer!"
  }
};

//player wins, guesses the words rightly
const gameEndedwin = () => {
  const letterElem = document.querySelectorAll(".letter");
  var matchLetter = "";

  letterElem.forEach((v) => {
    matchLetter += v.innerText.toLowerCase();
  });
  if (matchLetter === word) {
    gameEnded(false);
  }
};

const matchWord = (val) => {
  const matches = [];
  console.log(word);
  word.split("").forEach((el, kids_mode) => {
    if (el === val.toLowerCase()) {
      matches.push(kids_mode);
    }
  });

  if (matches.length === 0) {
    count++;
    chance.innerText = `${count}/6`;
  } else {
    matches.forEach((v) => {
      const letterElem = document.querySelectorAll(".letter");
      letterElem[v].innerText = val;
      letterElem[v].classList.add("guess");
    });
  }
};

const loadQuestion = () => {
  h4.innerText = `Hint: ${hint}`;

  for (let i = 0; i < word.length; i++) {
    let liTag = document.createElement("li");
    liTag.classList.add("letter");
    wordDisplay.appendChild(liTag);
  }

  const buttonTag = document.querySelectorAll(".btn");
//drawing actions for hangman
  buttonTag.forEach((v) => {
    v.addEventListener("click", (e) => {
      matchWord(e.target.innerText);

      const letterElem = document.querySelectorAll(".letter");

      if (count >= 1 && count < 2) {
        img.src = "images/hangman-head.svg";
      } else if (count >= 2 && count < 3) {
        img.src = "images/hangman-body.svg";
      } else if (count >= 3 && count < 4) {
        img.src = "images/hangman-leftarm.svg";
      } else if (count >= 4 && count < 5) {
        img.src = "images/hangman-rightarm.svg";
      } else if (count >= 5 && count < 6) {
        img.src = "images/hangman-leftfoot.svg";
      } else if (count >= 6 && count < 7) {
        img.src = "images/hangman-rightfoot.svg";
        setTimeout(()=>{
          gameEnded(true);
        },200)
    
      }
      gameEndedwin();
    });
  });
};

loadQuestion();

    let button = document.createElement("button");
    button.classList.add("btn")
        button.innerHTML = String.fromCharCode(i);
        keyboard.appendChild(button);








