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


function playGame() {
    for (let i=0; i<5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let currentScore = playRound(humanSelection, computerSelection);
        console.log(currentScore);
        if (currentScore=="win") {
            humanScore += 1;
        } else if (currentScore=="lose") {
            computerScore += 1;
        }
    }
    if (humanScore > computerScore) {
        console.log("You Won")
    } else if (humanScore < computerScore) {
        console.log("You Lost")
    } else {
        console.log("Draw")
    }
}

playGame();