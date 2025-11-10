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
function runGame() {
    console.log("Hello, World!");
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
function displayAdditionQuestion() {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    document.getElementById("question").innerText = `${num1} + ${num2}`;
}
function displaySubtractionQuestion() {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    document.getElementById("question").innerText = `${num1} - ${num2}`;
}   
function displayMultiplicationQuestion() {
    let num1 = Math.floor(Math.random() * 12) + 1;
    let num2 = Math.floor(Math.random() * 12) + 1;
    document.getElementById("question").innerText = `${num1} * ${num2}`;

}
function displayDivisionQuestion() {
    let num1 = Math.floor(Math.random() * 12) + 1;  
    let num2 = Math.floor(Math.random() * 12) + 1;  
    let dividend = num1 * num2; 
    document.getElementById("question").innerText = `${dividend} / ${num1}`;
}
});
   