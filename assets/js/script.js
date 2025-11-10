document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
// Add event listeners to each button 
  
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
    /**
     * The main game "loop", called when the script is first loaded
     * and after the user's answer has been processed
     */
function runGame() {
    // Generate two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}
function checkAnswer(){
    runGame()
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
function displayAdditionQuestion() {
    
    document.getElementById("question").innerText = `${num1} + ${num2}`;
}
function displaySubtractionQuestion() {
    
    document.getElementById("question").innerText = `${num1} - ${num2}`;
}   
function displayMultiplicationQuestion() {
   
    document.getElementById("question").innerText = `${num1} * ${num2}`;

}
function displayDivisionQuestion() {
   
    document.getElementById("question").innerText = `${dividend} / ${num1}`;
}
});
   