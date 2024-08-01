
function getComputerChoice() {
    value = Math.floor((Math.random() * 3) + 1);
    if (value === 1)
        return 'rock';
    else if (value === 2)
        return 'scissors';
    else if (value === 3)
        return 'paper';
}



function getHumanChoice() {
    let userChoice = prompt('Choose rock, paper or scissors: ').toLowerCase();
    while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
        userChoice = prompt('Choose rock, paper or scissors: ').toLowerCase;
    }
    alert("Your choice has been made")
    return userChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log('tie')
        return 'tie'
    }
    else if (
        (playerChoice == 'rock' && computerChoice == 'scissors') ||
        (playerChoice == 'scissors' && computerChoice == 'paper') ||
        (playerChoice == 'paper' && computerChoice == 'rock')) {
        humanScore++;
        console.log('Player wins')
        return "Player"
    }
    else {
        computerScore++;
        console.log('Computer wins')
        return "Computer"
    }

}


// let playerChoice = getHumanChoice()
// console.log(`You chose ${playerChoice}`)
// let computerChoice = getComputerChoice()
// console.log(`Computer chose ${computerChoice}`)

// console.log(playRound(playerChoice, computerChoice))

function playGame() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = getHumanChoice()
        console.log(`You chose ${playerChoice}`)
        let computerChoice = getComputerChoice()
        console.log(`Computer chose ${computerChoice}`)
        playRound(playerChoice, computerChoice)
        console
        console.log(humanScore, computerScore)
    }
}

playGame();