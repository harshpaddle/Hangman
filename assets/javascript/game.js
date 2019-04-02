$(document).ready(function() {

  var wordBank = "Nets Knicks Celtics Chargers Buccaneers Seahawks RedBulls Cardinals Warriors Nuggets Hornets Mavericks Pelicans Devils Canucks BlackHawks Senators".split(" ");
  var wins = 0;
  var losses = 0;
  var guessesLeft = 5;
  var guessedLetters = [];
  var theWord = '';
  var alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");
  var placeHolders = [];

  console.log(wins)

  // new game function
  function newGame() {
    guessesLeft = 5;
    guessedLetters = [];
    theWord = wordBank[Math.ceil(Math.random() * wordBank.length)];
    console.log(theWord);
    placeHolders = placeDashes(theWord);
    document.getElementById("dashes").innerHTML = placeHolders.join(" ");
  };

  // placing dashes on the page
  function placeDashes(word) {
    var dashes = [];
    for (var i = 0; i < word.length; i++) {
      dashes.push("_")
    }
    return dashes;
  }

  // matching letters with letters of theWord

  function matchLetter(letter) {
    for (var i = 0; i < theWord.length; i++) {
      
      var char = theWord[i];
      if ((char.toLowerCase() === letter.toLowerCase())) {
        guessedLetters.push(letter);
        placeHolders[i] = letter;
      } if ((!guessedLetters.includes(letter))) {
        guessedLetters.push(letter);
        guessesLeft--;
      }
      // if ((theWord[i].toLowerCase() === letter)) {
      //   console.log(theWord[i]);
      //   placeHolders[i] = letter;
      //   guessedLetters.push(letter);
      //   console.log("why isn't this hitting")
      // } 
      // else if (!guessedLetters.includes(letter)) {
      //   guessedLetters.push(letter);
      //   guessesLeft--;
      // }
    }
  }

  $(".new-game").on("click", newGame());

  document.onkeyup = function (event) {
    
    if (alphabets.includes((event.key).toLowerCase())) {
      matchLetter(event.key);
      console.log("its hitting")
    } else {
      alert("press valid alphabet")
    };

    if (guessesLeft === 0) {
      alert("you lost");
      newGame();
      losses++;
    }

    if (theWord === placeHolders.join(" ")) {
      alert("you got this one");
      newGame();
      wins++;
    }
    
    console.log(placeHolders, guessesLeft, guessedLetters);

    document.getElementById("dashes").innerHTML = placeHolders.join(" ");
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("remaining-guesses").innerHTML = guessesLeft; 

  }
  
});

function palindrome?(word) {
  var reversed = '';
  for (var i = word.length - 1; i >= 0; i++) {
    reversed += word[i];

  }

  return reversed === word;
}