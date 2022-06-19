let playerWin = 0;
let computerWin = 0;
let equality = 0;
let roundsCount = 0;

let computerPlay = () => {
    let randomNumber = Math.floor((Math.random() * 3));
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
};

let playRound = (userSelection) => {

    if (playerWin !== 5 && computerWin !== 5) {

        roundsCount++;
        rounds.textContent = `${roundsCount} Round(s) played.`;
        let playerSelection = userSelection;
        let computerSelection = computerPlay();
        let roundWinner = '';

        if (computerSelection == playerSelection) {
            roundWinner;
        } else {
            if (computerSelection == 'rock') {
                if (playerSelection == 'scissor') {
                    roundWinner = 'computer';
                } else roundWinner = 'player';

            } else if (computerSelection == 'paper') {
                if (playerSelection == 'scissor') {
                    roundWinner = 'player';
                } else roundWinner = 'computer';

            } else if (computerSelection == 'scissor') {
                if (playerSelection == 'paper') {
                    roundWinner = 'computer';
                } else roundWinner = 'player';

            }
        }

        if (roundWinner == 'computer') {
            computerWin++;
            roundScore.textContent = `You lost this round, ${computerSelection} beats ${playerSelection}.`;
            lost.textContent = `You lost ${computerWin} game(s)`;
        } else if (roundWinner == 'player') {
            playerWin++;
            roundScore.textContent = `You win this round, ${playerSelection} beats ${computerSelection}.`;
            win.textContent = `You won ${playerWin} game(s)`;
        } else {
            equality++;
            roundScore.textContent = `No winner this round, ${playerSelection} equals ${computerSelection}.`;
            equal.textContent = `${equality} Nulls(s)`;
        }

        if (playerWin == 5) {
            rounds.textContent = `${roundsCount} Round(s) played. Game finished, you won.`;
        } else if (computerWin == 5) {
            rounds.textContent = `${roundsCount} Round(s) played. Game finished, you lost.`;
        }

    } else {
        if(confirm('Game Finished, start new game ?')){
            startNewGame();
        }
    }
};

let startNewGame = () => {
    playerWin = 0;
    computerWin = 0;
    equality = 0;
    roundsCount = 0;
    win.textContent = 'Your victories Here';
    lost.textContent = 'Your losts Here';
    equal.textContent = 'Nuls here';
    rounds.textContent = 'New Game started';
    roundScore.textContent = '';
}

let rock = document.getElementById('rock');
rock.addEventListener('click',
    function (e) {
        let userSelection = e.target.id;
        playRound(userSelection);
    }
);

let paper = document.getElementById('paper');
paper.addEventListener('click',
    function (e) {
        let userSelection = e.target.id;
        playRound(userSelection);
    }
);

let scissor = document.getElementById('scissor');
scissor.addEventListener('click',
    function (e) {
        let userSelection = e.target.id;
        playRound(userSelection);
    }
);

let rounds = document.getElementById('rounds');
let roundScore = document.getElementById('roundScore');
let win = document.getElementById('win');
let lost = document.getElementById('lost');
let equal = document.getElementById('equality');

let newGame = document.getElementById('newGame');
newGame.addEventListener('click', startNewGame);

startNewGame();