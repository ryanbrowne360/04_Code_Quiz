const button = document.getElementById("button");
const timer = document.getElementById("timer")
const highscores = document.getElementById("highscores")
const buttonQ1 = document.getElementById("buttonq1");
const qDiv = document.getElementById("qDiv")
const introDiv = document.getElementById("introDiv")
const finalPage = document.getElementById('finalPage')
const quizContent = document.getElementById('quizContent')
const initialsSubmitBtn = document.getElementById('initialsSubmit')
const initialsInput = document.getElementById('initialsInput')
const displayScores = document.getElementById('displayScores')


const q1Button1 = document.getElementById("q1-1")
const q1Button2 = document.getElementById("q1-2")
const q1Button3 = document.getElementById("q1-3")
const q1Button4 = document.getElementById("q1-4")

const q2Button1 = document.getElementById("q2-1")
const q2Button2 = document.getElementById("q2-2")
const q2Button3 = document.getElementById("q2-3")
const q2Button4 = document.getElementById("q2-4")

const q3Button1 = document.getElementById("q3-1")
const q3Button2 = document.getElementById("q3-2")
const q3Button3 = document.getElementById("q3-3")
const q3Button4 = document.getElementById("q3-4")

const q4Button1 = document.getElementById("q4-1")
const q4Button2 = document.getElementById("q4-2")
const q4Button3 = document.getElementById("q4-3")
const q4Button4 = document.getElementById("q4-4")

const q5Button1 = document.getElementById("q5-1")
const q5Button2 = document.getElementById("q5-2")
const q5Button3 = document.getElementById("q5-3")
const q5Button4 = document.getElementById("q5-4")

const Q1 = document.getElementById("Q1")
const Q2 = document.getElementById("Q2")
const Q3 = document.getElementById("Q3")
const Q4 = document.getElementById("Q4")
const Q5 = document.getElementById("Q5")

var score = 0
var interval
var timeLeft = 60


button.onclick = function () {
    introDiv.style.display = "none";
    qDiv.style.display = "block";
    interval = setInterval(timeDecriment, 1000);
};



q1Button1.onclick = comp1to1
q1Button2.onclick = comp1to2
q1Button3.onclick = comp1to3
q1Button4.onclick = comp1to4

q2Button1.onclick = comp2to1
q2Button2.onclick = comp2to2
q2Button3.onclick = comp2to3
q2Button4.onclick = comp2to4

q3Button1.onclick = comp3to1
q3Button2.onclick = comp3to2
q3Button3.onclick = comp3to3
q3Button4.onclick = comp3to4

q4Button1.onclick = comp4to1
q4Button2.onclick = comp4to2
q4Button3.onclick = comp4to3
q4Button4.onclick = comp4to4

q5Button1.onclick = lastQuestionWrap
q5Button2.onclick = lastQuestionWrap
q5Button3.onclick = lastQuestionWrap
q5Button4.onclick = lastQuestionWrap

//questionid.value= and do the same for button id. Easier to do if in a li?
//maybe call a seperate function entirely for the button id's you know that have the wrong answer


//compare each question to each answer then execute the function that switches the question

function comp1to1() { compareAnswers(q1Button1, "Jquery", Q2, Q1) }
function comp1to2() { compareAnswers(q1Button2, "Jquery", Q2, Q1) }
function comp1to3() { compareAnswers(q1Button3, "Jquery", Q2, Q1) }
function comp1to4() { compareAnswers(q1Button4, "Jquery", Q2, Q1) }

function comp2to1() { compareAnswers(q2Button1, "#Example", Q3, Q2) }
function comp2to2() { compareAnswers(q2Button2, "#Example", Q3, Q2) }
function comp2to3() { compareAnswers(q2Button3, "#Example", Q3, Q2) }
function comp2to4() { compareAnswers(q2Button4, "#Example", Q3, Q2) }

function comp3to1() { compareAnswers(q3Button1, 'var exampleVariable = "Variable Declared"', Q4, Q3) }
function comp3to2() { compareAnswers(q3Button2, 'var exampleVariable = "Variable Declared"', Q4, Q3) }
function comp3to3() { compareAnswers(q3Button3, 'var exampleVariable = "Variable Declared"', Q4, Q3) }
function comp3to4() { compareAnswers(q3Button4, 'var exampleVariable = "Variable Declared"', Q4, Q3) }

function comp4to1() { compareAnswers(q4Button1, "It is a block of code that executes indicated computational tasks", Q5, Q4) }
function comp4to2() { compareAnswers(q4Button2, "It is a block of code that executes indicated computational tasks", Q5, Q4) }
function comp4to3() { compareAnswers(q4Button3, "It is a block of code that executes indicated computational tasks", Q5, Q4) }
function comp4to4() { compareAnswers(q4Button4, "It is a block of code that executes indicated computational tasks", Q5, Q4) }

function lastQuestionWrap() { lastQuestion(q5Button1, "For all of the above.") }
function lastQuestionWrap() { lastQuestion(q5Button2, "For all of the above.") }
function lastQuestionWrap() { lastQuestion(q5Button3, "For all of the above.") }
function lastQuestionWrap() { lastQuestion(q5Button4, "For all of the above.") }

function compareAnswers(choice, correctChoice, nextQ, lastQ) {
    if (choice.innerText == correctChoice) {
        nextQ.style.display = "block";
        lastQ.style.display = "none";
        score += 1
    }

    else {
        nextQ.style.display = "block";
        lastQ.style.display = "none";
        timeLeft -= 10
    }
}

function lastQuestion(choice, correctChoice) {
    if (choice.innerText == correctChoice) {
        score += 1
        quizEnd()
    }
}

function timeDecriment() {
    timeLeft--
    timer.innerHTML = timeLeft
    if (timer.innerHTML <= 0) {
        quizEnd();
        clearInterval(interval)
    }
}

function quizEnd() {
    qDiv.style.display = "none";
    finalPage.style.display = "block";
}

initialsSubmitBtn.onclick = function () {
    localStorage.setItem("initials", initialsInput.value)
    localStorage.setItem("score", score)
    displayScores.innerHTML = "INITIALS:" + " " + localStorage.getItem('initials') + " " + "SCORE:" + " " + localStorage.getItem('score')
    scores.style.display = 'block'

}

// Improvement Notes:
// how to save and pull multiple users scores...


// // GIVEN I am taking a code quiz
// // WHEN I click the start button
// // THEN a timer starts and I am presented with a question
// // WHEN I answer a question
// // THEN I am presented with another question
// // WHEN I answer a question incorrectly
// // THEN time is subtracted from the clock
// // WHEN all questions are answered or the timer reaches 0
// // THEN the game is over
// // WHEN the game is over
// // THEN I can save my initials and score 
