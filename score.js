// Iteration 5: Store the player score and display it on the game over screen
const scoreBox = document.getElementById("score-board")
let passcode = localStorage.getItem("squad-56");
scoreBox.innerHTML = passcode;


const playAgain = document.getElementById("play-again-button")
playAgain.onclick = () =>{
    window.location.href = "./game.html"
}
