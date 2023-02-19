let playerChoice = "";
let computerChoice = "";
let winner = "";
let computerScore = 0;
let playerScore = 0;


document.querySelector('#rock').addEventListener('click', assignRock);
document.querySelector('#rock').addEventListener('click', runGame);
document.querySelector('#paper').addEventListener('click', assignPaper);
document.querySelector('#paper').addEventListener('click', runGame);
document.querySelector('#scissors').addEventListener('click', assignScissors);
document.querySelector('#scissors').addEventListener('click', runGame);
document.querySelector('#playagain').addEventListener('click', resestGame);


function resestGame() {
    playerChoice = "";
    computerChoice = "";
    winner = "";
    computerScore = 0;
    playerScore = 0;
    document.querySelector('#playagain').innerText = "";
    document.querySelector('#playagain').classList.remove("playagain");
    document.querySelector('#computerChoice').innerText = "";
    document.querySelector('#result').innerText = "";
    document.querySelector('#playerScore').innerText = `Player score: ${playerScore}`;
    document.querySelector('#computerScore').innerText = `Computer score: ${computerScore}`;
}


function assignRock(){
    return playerChoice = 'Rock';
}

function assignPaper(){
    return playerChoice = 'Paper';
}

function assignScissors(){
    return playerChoice = 'Scissors';
}

function computerResponse(){
    const response = Math.floor(Math.random() * 3) + 1;
    if (response == 1){
       return 'Rock'; 
    }
    else if (response == 2){
        return 'Paper';
    }
    else if (response == 3){
        return 'Scissors';
    }
};

function emojiAssign(computerChoice){
    if (computerChoice == 'Rock'){
        return '🪨'; 
     }
     else if (computerChoice == 'Paper'){
         return '📃';
     }
     else if (computerChoice == 'Scissors'){
         return '✂️';
     }
}

function scoreAnswers(computerChoice){
    if (playerChoice == 'Rock' && computerChoice == 'Paper' || playerChoice == 'Paper' && computerChoice == 'Scissors' || playerChoice == 'Scissors' && computerChoice == 'Rock'){
        return computerScore+=1
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Scissors' || playerChoice == 'Paper' && computerChoice == 'Rock' || playerChoice == 'Scissors' && computerChoice == 'Paper'){
        return playerScore+=1;
    }
};

function scoreReturn(computerChoice){
    if (computerScore == 5){
        document.querySelector('#playagain').innerText = "Play Again?";
        document.querySelector('#playagain').classList.add("playagain");
        return "Game over: The Computer won!"
    }
    else if (playerScore == 5){
        document.querySelector('#playagain').innerText = "Play Again?";
        document.querySelector('#playagain').classList.add("playagain");
        return "Game over: You won!"
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Paper' || playerChoice == 'Paper' && computerChoice == 'Scissors' || playerChoice == 'Scissors' && computerChoice == 'Rock'){
        return "1 point to Computer"
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Scissors' || playerChoice == 'Paper' && computerChoice == 'Rock' || playerChoice == 'Scissors' && computerChoice == 'Paper'){
        return "1 point to you"
    }
    else if (playerChoice == computerChoice){
        return "Draw"
    }
};

function runGame(){
    if (playerScore < 5 && computerScore < 5){
        computerChoice = computerResponse();
        let computerEmoji = emojiAssign(computerChoice);
        document.querySelector('#computerChoice').innerText = computerEmoji;
        scoreAnswers(computerChoice, playerChoice);
        let result = scoreReturn(computerChoice)
        document.querySelector('#result').innerText = result;
        document.querySelector('#playerScore').innerText = `Player score: ${playerScore}`;
        document.querySelector('#computerScore').innerText = `Computer score: ${computerScore}`;
    }
};