
// VARIABLES    
var wordsList = ["brazil","canada","mexico","cuba","france","italy"];
var remainGuessCount = 10;
var chosenWord = [""];
var hiddenWord = [""];
var guessedLetters = ""; 
var gLetter = "";
var scoreWin = 0;
var scoreLose = 0;
var endGame = false;

// FUNCTIONS
// Function do randomly select a word from the provided list and update global data
function wordSelector(){
    var position = Math.floor(Math.random() * wordsList.length);
    console.log(position);
    chosenWord = wordsList[position];
    for(var i=0;i<chosenWord.length;i++){
        hiddenWord += "_";
    }
}

// Function do randomly select a word from the provided list and update global data
function wordSelectorArray(){
    var position = Math.floor(Math.random() * wordsList.length);
    console.log(position);
    var chWord = wordsList[position];
    for(var i=0;i<chWord.length;i++){
        hiddenWord[i] = "_";
        chosenWord[i] = chWord[i];
    }
}

//Update data to the screen
function updateData(){
    document.getElementById("hiddenWord").innerHTML = hiddenWord;
    document.getElementById("guessLetter").innerHTML = gLetter;
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
    document.getElementById("remainingGuesses").innerHTML = remainGuessCount;
}

//Function used to update the hidden word by displaying the char entered
function replaceChar(index,newChar) {
    var str = hiddenWord;
    if(index > str.length-1) {
        return str;
    }
    return str.substr(0,index) + "<span>"+ newChar +"</span>" + str.substr(index+1);
}

//Verify if guessed letter is part of the chosen word
function guessLetter (letter) {
    var guessFlag = false;
    gLetter = letter;

    for(var i=0;i<chosenWord.length;i++){
        if (letter == chosenWord.charAt(i)) {
            guessFlag = true;
            hiddenWord = replaceChar(i,letter);
        }
    }
    if (!guessFlag) {
        guessedLetters += letter;
        remainGuessCount--;
    }
    updateData();
}

//Verify if guessed letter is part of the chosen word
function guessLetterArray (letter) {
    var guessFlag = false;
    gLetter = letter;

    for(var i=0;i<chosenWord.length;i++){
        if (letter == chosenWord[i]) {
            guessFlag = true;
            hiddenWord[i] = letter;
        }
    }
    if (!guessFlag) {
        guessedLetters += letter;
        remainGuessCount--;
    }
    updateData();
}

// RegExp to verify if the input is an alphabet
// Need review (doesnt work for function keys... ctrl, alt...)
function justLetters(input){
    var regex = /^[a-z]+$/;
    console.log("input recebido" + input);
    var result = regex.test(input);
    console.log(regex.test(input));
    alert(result);
    if (result) {
        return true;
    } else {
        return false;
    }
}

// Function to verify if the input is an alphabet
function justLettersManual(input){
    if (input === "a" || input === "b" || input === "c" || input === "d" || input === "e" || input === "f" || 
    input === "g" || input === "h" || input === "i" || input === "j" || input === "k" || input === "l" || 
    input === "m" || input === "n" || input === "o" || input === "p" || input === "q" || input === "r" || 
    input === "s" || input === "t" || input === "u" || input === "v" || input === "w" || input === "x" || 
    input === "y" || input === "z" ) {
        return true;
    } else {
        return false;
    }
}

//Resetting game's variable to initial state
function resetGame(){
    hiddenWord = [""];
    chosenWord = [""];
    remainGuessCount = 10;
    guessedLetters = "";
    gLetter = "";
    endGame = false;
}

 
wordSelectorArray();
updateData();

document.onkeyup = function(event) {
    
    var userInput = event.key.toLowerCase();
    console.log(userInput);
      if(justLettersManual(userInput)){
          guessLetterArray(userInput);
      } else {
          return;
      }
    
    updateData();   //last letter is not being updated 

    if (remainGuessCount==0){
        //alert("You lose");
        scoreLose++;
        endGame=true;
    } else if (hiddenWord===chosenWord){
        //alert("You won");
        scoreWin++;
        endGame = true;
    } 

    if(endGame){
        alert("NEW GAME");
        resetGame();
        wordSelector();
        updateData();
    }
};
