
// VARIABLES    
//var wordsList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Botswana","Brazil","Brunei","Bulgaria","Burundi","Cambodia","Cameroon","Canada","Chad","Chile","China","Colombia","Comoros","Congo","Croatia","Cuba","Cyprus","Czechia","Denmark","Djibouti","Dominica","Ecuador","Egypt","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palau","Palestine","Panama","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Samoa","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","Spain","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","Uruguay","Uzbekistan","Vanuatu","Vatican","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
var wordsList = ["Brazil"];
var flagImages = ["ad.png", "ae.png", "af.png", "ag.png", "al.png", "am.png", "ao.png", "ar.png", "at.png", "au.png", "az.png", "ba.png", "bb.png", "bd.png", "be.png", "bf.png", "bg.png", "bh.png", "bi.png", "bj.png", "bn.png", "bo.png", "br.png", "bs.png", "bt.png", "bw.png", "by.png", "bz.png", "ca.png", "cd.png", "cf.png", "cg.png", "ch.png", "ci.png", "cl.png", "cm.png", "cn.png", "co.png", "cr.png", "cu.png", "cv.png", "cy.png", "cz.png", "de.png", "dj.png", "dk.png", "dm.png", "do.png", "dz.png", "ec.png", "ee.png", "eg.png", "eh.png", "er.png", "es.png", "et.png", "fi.png", "fj.png", "fm.png", "fr.png", "ga.png", "gb.png", "gd.png", "ge.png", "gh.png", "gm.png", "gn.png", "gq.png", "gr.png", "gt.png", "gw.png", "gy.png", "hn.png", "hr.png", "ht.png", "hu.png", "id.png", "ie.png", "il.png", "in.png", "iq.png", "ir.png", "is.png", "it.png", "jm.png", "jo.png", "jp.png", "ke.png", "kg.png", "kh.png", "ki.png", "km.png", "kn.png", "kp.png", "kr.png", "ks.png", "kw.png", "kz.png", "la.png", "lb.png", "lc.png", "li.png", "lk.png", "lr.png", "ls.png", "lt.png", "lu.png", "lv.png", "ly.png", "ma.png", "mc.png", "md.png", "me.png", "mg.png", "mh.png", "mk.png", "ml.png", "mm.png", "mn.png", "mr.png", "mt.png", "mu.png", "mv.png", "mw.png", "mx.png", "my.png", "mz.png", "na.png", "ne.png", "ng.png", "ni.png", "nl.png", "no.png", "np.png", "nr.png", "nz.png", "om.png", "pa.png", "pe.png", "pg.png", "ph.png", "pk.png", "pl.png", "pt.png", "pw.png", "py.png", "qa.png", "ro.png", "rs.png", "ru.png", "rw.png", "sa.png", "sb.png", "sc.png", "sd.png", "se.png", "sg.png", "si.png", "sk.png", "sl.png", "sm.png", "sn.png", "so.png", "sr.png", "st.png", "sv.png", "sy.png", "sz.png", "td.png", "tg.png", "th.png", "tj.png", "tl.png", "tm.png", "tn.png", "to.png", "tr.png", "tt.png", "tv.png", "tw.png", "tz.png", "ua.png", "ug.png", "us.png", "uy.png", "uz.png", "va.png", "vc.png", "ve.png", "vn.png", "vu.png", "ws.png", "ye.png", "za.png", "zm.png", "zw.png"];
var remainGuessCount = 10;
var chosenWord = [""];
var hiddenWordScreen = [""];
var guessedLetters = [""];
var gLetter = "";
var scoreWin = 0;
var scoreLose = 0;
var endGame = false;
var hiddenWordValidation = [""];

// Function do randomly select a word from the provided list and update global data
function wordSelectorArray() {
    var position = Math.floor(Math.random() * wordsList.length);
    var chWord = wordsList[position];
    for (var i = 0; i < chWord.length; i++) {
        hiddenWordScreen[i] = "_";
        chosenWord[i] = chWord[i].toUpperCase();
        hiddenWordValidation[i] = "*";
    }
    hiddenWordScreen = transArrayToSpan();
}

// Function to generate the path for the ramdon image to be displayed in the carousel
function generateImgPath() {
    for (var i = 1; i < 17; i++) {
        var tag = "flagImg" + i;
        var imgPos = Math.round(Math.random() * ((flagImages.length) - 1));
        document.getElementById(tag).src = "../Word_Guess_Name/assets/images/flags/" + flagImages[imgPos];
    }
}

// Function to add the span css to the hidden word at screen
function transArrayToSpan() {
    var str = hiddenWordScreen;
    for (var i = 0; i < str.length; i++) {
        str[i] = "<span class=\"hiddenL\">" + str[i] + "</span>";
    }
    return str;
}

// Update data to the screen
function updateData() {
    document.getElementById("hiddenWord").innerHTML = hiddenWordScreen;
    document.getElementById("guessLetter").innerHTML = gLetter;
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
    document.getElementById("remainingGuesses").innerHTML = remainGuessCount;
}

// Verify if guessed letter is part of the chosen word or guessed letters array
function guessLetterArray(letter) {
    var guessFlag = false;
    gLetter = letter;
    for (var i = 0; i < chosenWord.length; i++) {
        if (letter == chosenWord[i]) {
            guessFlag = true;
            hiddenWordScreen[i] = "<span class=\"discovered\">" + letter + "</span>";
            hiddenWordValidation[i] = letter;
        }
    }
    if (!guessFlag) {
        guessedLetters += "<span class=\"guessed\">" + letter + "</span>";
        remainGuessCount--;
    }
    updateData();
}

// RegExp to verify if the input is an alphabet
// Need review (doesnt work for function keys... ctrl, alt...)
function justLetters(input) {
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

//Function to verify if the new letter has already been entered 
function letterVerification(letterInput) {
    for (var i = 0; i < hiddenWordScreen.length; i++) {
        if (hiddenWordScreen[i].includes(">" + letterInput + "</")) {
            return true;
        }
    }
    for (var i = 0; i < guessedLetters.length; i++) {
        if (guessedLetters[i] == letterInput) {
            return true;
        }
    }
    return false;
}

// Function to verify if the input is an alphabet
function justLettersManual(input) {
    if (input === "A" || input === "B" || input === "C" || input === "D" || input === "E" || input === "F" ||
        input === "G" || input === "H" || input === "I" || input === "J" || input === "K" || input === "L" ||
        input === "M" || input === "N" || input === "O" || input === "P" || input === "Q" || input === "R" ||
        input === "S" || input === "T" || input === "U" || input === "V" || input === "W" || input === "X" ||
        input === "Y" || input === "Z") {
        return true;
    } else {
        return false;
    }
}

//Resetting game's variable to initial state
function resetGame() {
    hiddenWordScreen = [""];
    chosenWord = [""];
    remainGuessCount = 10;
    guessedLetters = [""];
    gLetter = "";
    endGame = false;
}

function playGame(input) {
    if (justLettersManual(input)) {   //checking if key entered is a letter
        if (letterVerification(input)) {   //checking if letter has been entered
            alert("You already typed this letter, please choose another.");
        } else {
            guessLetterArray(input);   //check if letter is part of the hidden word
        }
    }
}

function validateEndGame() {
    var flag = false;
    for (var i = 0; i < chosenWord.length; i++) {
        if (hiddenWordValidation[i] === chosenWord[i]) { //checking if the hidden and chosen words are the same to end the game
            scoreWin++;
            flag = true;
        } else {
            flag = false;
        }
    }
    if (remainGuessCount == 0) {  //checking if remaining guesses is empty to end the game
        scoreLose++;
        flag = true;
    }
    return flag;
}

function newGameStart() {
    resetGame();
    generateImgPath();
    wordSelectorArray();
    updateData();
}


//Main procedure
newGameStart();

document.onkeyup = function (event) {
    var userInput = event.key.toUpperCase();
    playGame(userInput);
    endGame = validateEndGame();
    if (endGame) {  //ending the currently game and starting a new one
        if (remainGuessCount == 0) { //warning the user that he lost due to not discover the hidden word
            alert("You LOSE");
        }
        alert("You WON");

        alert("NEW GAME");
        newGameStart();
    }



};
