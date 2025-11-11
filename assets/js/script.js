document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
// Add event listeners to each button 
  
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
                             
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
        document.getElementById("answer-box").addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                checkAnswer();
            }
        });
        runGame("addition");
    };
    /**
     * The main game "loop", called when the script is first loaded
     * and after the user's answer has been processed
     */
function runGame( gameType) {
          //clear answer box and focus on it
    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();
   
               
    // Generate two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    }else if (gameType === "subtract") {
        displaySubtractionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplicationQuestion(num1, num2);
    } else if (gameType === "division") {
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw new Error(`Unknown game type: ${gameType}. Aborting!`);
    }
}
/**
 * Checks the user's answer against the first element in the returned calculateCorrectAnswer array.
 * @returns {boolean} True if the answer is correct, false otherwise.
 */
function checkAnswer(){
    let userAnswer = document.getElementById("answer-box").value;
    let calculatedAnswer = calculateCorrectAnswer();
    //typecast user answer and calculated answer to integers
    let isCorrect = parseInt(userAnswer) === parseInt(calculatedAnswer[0]);
    // authenticate answer
    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
        return true;
    } else {
        alert(`Awww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}.`);
        incrementWrongAnswer();
        return false;
    }
    // Run the next question
    runGame(calculatedAnswer[1]);
}
/**
 * Gets the operands(the numbers) and the operator (plus, minus etc)
 * directly from DOM, and returns the correct answer.
 */
function calculateCorrectAnswer() {
    let operator = document.getElementById("operator").innerText;
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "/") {
        // check for division by zero
        if (operand1 === 0 || operand2 === 0) {
            alert("Division by zero is not allowed.");
            throw "Division by zero is not allowed. Aborting!";
        } else if (operand1 % operand2 === 0) { // check if division has no remainder
            return [(operand1 / operand2).toPrecision(3), "division"]; // return answer with 3 significant digits
        } else {
            return [operand1 / operand2, "division"]; // return exact integer answer in other cases
        }
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
    
}

/**
 * Gets the current score from the DOM and increments it by 1   
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}
/**
 * 
 */
function incrementWrongAnswer() {
    let oldIncorrectScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldIncorrectScore;
}
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").innerText = operand1;
    document.getElementById("operand2").innerText = operand2;
    document.getElementById("operator").innerText = "+";    
   // document.getElementById("question").innerText = `${operand1} + ${operand2}`;
}
function displaySubtractionQuestion(operand1, operand2) {

    document.getElementById("operator").innerText = "-";
    // check if operand1 is less than operand2 
    document.getElementById("operand1").innerText = operand1 > operand2 ? operand1 : operand2;
    // set operand2 to the smaller number
    document.getElementById("operand2").innerText = operand1 > operand2 ? operand2 : operand1;
    
}
function displayMultiplicationQuestion(operand1, operand2) {

    document.getElementById("operand1").innerText = operand1;
    document.getElementById("operand2").innerText = operand2;
    document.getElementById("operator").innerText = "x";

}
function displayDivisionQuestion(operand1, operand2) {
// check if operand1 is less than operand2
  document.getElementById("operand1").innerText = operand1 > operand2 ? operand1 : operand2;
    // set operand2 to the smaller number
    document.getElementById("operand2").innerText = operand1 > operand2 ? operand2 : operand1;
    
    document.getElementById("operator").innerText = "/";
}
});
   