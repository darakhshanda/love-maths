document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
// Add event listeners to each button 
  
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
        runGame("addition");
    }
    /**
     * The main game "loop", called when the script is first loaded
     * and after the user's answer has been processed
     */
function runGame( gameType) {
    // Generate two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    }else if (gameType === "subtraction") {
        displaySubtractionQuestion(num1, num2);
    } else if (gameType === "multiplication") {
        displayMultiplicationQuestion(num1, num2);
    } else if (gameType === "division") {
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}
function checkAnswer(){
    
    return true;
}
function calculateCorrectAnswer() {
    return 42;
}
function incrementScore() {
    let currentScore = parseInt(document.getElementById("score").innerText);
}
function incrementWrongAnswer() {
    let currentWrongScore = parseInt(document.getElementById("wrong-score").innerText);
}
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").innerText = operand1;
    document.getElementById("operand2").innerText = operand2;
    document.getElementById("operator").innerText = "+";    
   // document.getElementById("question").innerText = `${operand1} ${"+"} ${operand2}`;
}
function displaySubtractionQuestion(operand1, operand2) {

    document.getElementById("question").innerText = `${operand1} - ${operand2}`;
}
function displayMultiplicationQuestion(operand1, operand2) {

    document.getElementById("question").innerText = `${operand1} * ${operand2}`;

}
function displayDivisionQuestion(operand1, operand2) {

    document.getElementById("question").innerText = `${operand1} / ${operand2}`;
}
});
   