document.querySelector('#submit').addEventListener('click', runGame);

let computerScore = 0;
let playerScore = 0;

function responseAssign(){
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

function compareAnswers(computerGuess, playerGuess){
    if (playerGuess === computerGuess){
        return 'It\'s a draw!';
    }
    else if (playerGuess == 'Rock' && computerGuess == 'Paper'){
        return 'Computer Wins!';
    }
    else if (playerGuess == 'Rock' && computerGuess == 'Scissors'){
        return 'You Win!';
    }
    else if (playerGuess == 'Paper' && computerGuess == 'Rock'){
        return 'You Win!';
    }
    else if (playerGuess == 'Paper' && computerGuess == 'Scissors'){
        return 'Computer Wins!';
    }
    else if (playerGuess == 'Scissors' && computerGuess == 'Rock'){
        return 'Computer Wins!';
    }
    else if (playerGuess == 'Scissors' && computerGuess == 'Paper'){
        return 'You Win!';
}
};

function scoreCount(winner){
    if (winner == "Computer Wins!"){
        return computerScore+=1
    }
    else if (winner == "You Win!"){
        return playerScore+=1;
    }
}


function runGame(){
    const playerGuess = document.querySelector('input[name="option"]:checked').value;
    document.querySelector('#playerGuess').innerText = playerGuess;
    let computerGuess = responseAssign();
    document.querySelector('#computerGuess').innerText = computerGuess;
    const winner = compareAnswers(computerGuess, playerGuess);
    document.querySelector('#result').innerText = winner;
    const scoring = scoreCount(winner);
    document.querySelector('#playerScore').innerText = "Player score: " + playerScore;
    document.querySelector('#computerScore').innerText = "Computer score: " + computerScore;
};


