var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    /** 
     * 
     * 
     * @returns {string} Randomized choice of Rock Paper Scissors
     */

    let odds = Math.random();

    if (odds < (1/3)) {
        return "rock"
    } else if (odds > (2/3)) {
        return "scissors"
    } else {
        return "paper"
    }

};


function getHumanChoice() {
    let humanChoice = prompt("please enter your choice Rock, Paper or Scissors");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    let result = {
        scissors: {
            rock: "lose",
            scissors: "draw",
            paper: "win",
        },
        rock: {
            rock:"draw",
            scissors: "win",
            paper: "lose",
        },
        paper: {
            rock:"win",
            scissors: "lose",
            paper: "draw",
        }
    };
    return result[humanChoice][computerChoice];
};


function playGame(humanSelection) {
    for (let i=0; i<5; i++) {
        const computerSelection = getComputerChoice();
        let currentScore = playRound(humanSelection, computerSelection);
        console.log(currentScore);
        
    }
    if (humanScore > computerScore) {
        console.log("You Won")
    } else if (humanScore < computerScore) {
        console.log("You Lost")
    } else {
        console.log("Draw")
    }
}
var roundNumber = 1;
let x = document.querySelectorAll(".selectionCards div");
x.forEach(function(x) {
    x.addEventListener("click", function(e) {
        let x = document.querySelector(".roundNumber");
        roundNumber += 1;
        x.textContent = roundNumber;
        let humanChoice = e.currentTarget.className;//roundNumber.toString();
        const computerSelection = getComputerChoice();
        let currentScore = playRound(humanChoice, computerSelection);
        if (currentScore=="win") {
            humanScore += 1;
            let hs = document.querySelector(".humanScore div");
            hs.textContent = humanScore;
        } else if (currentScore=="lose") {
            let cs = document.querySelector(".computerScore div")
            computerScore += 1;
            cs.textContent = computerScore;
        }
    });
});


// Add a card to overlay to say that you have won
//Show a result for each round