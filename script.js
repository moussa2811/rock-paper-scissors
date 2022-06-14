// Rock Paper Scissor Game

//generate computer choice
let computerPlay = () =>{
    /*
        { random number between 0 and 1 } 
            * 2 to get between 0 and 2
        and then floor to get the lower or equal int
    */
    let randomNumber = Math.floor( ( Math.random()  *2 ) );
    switch (randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
};

// ask user choice and return its value;
let userPlay = () => prompt('Enter rock, paper or scissor : ');

//play one round game and return 0 for equality, 1 for computer win and 2 for user win
let playRound = (computerSelection, playerSelection) =>{
    playerSelection = playerSelection.toLowerCase();

    // equality
    if (computerSelection == playerSelection) {
        return 0;
    } else {
        
        if (computerSelection == 'rock') { //computer rock
            
            if (playerSelection == 'scissor') { //user scissor
                return 1; //computer won, rock > scissor
            }
            //user paper
            return 2; //user won paper > rock

        } else if (computerSelection == 'paper') { //computer paper
            
            if (playerSelection == 'scissor') { //user scissor
                return 2; //user won, scissor > paper
            }
            //user rock
            return 1; //computer won, paper > rock

        } else if (computerSelection == 'scissor') { //computer scissor

            if (playerSelection == 'paper') { //user paper
                return 1; //computer won, scissor > paper
            }
            //user rock
            return 2; //user won, rock > scissor
            
        }
    }
    
};

// 5 Game Rounds function
let game =  () =>{

    alert("Let's Go :-)");
    //initialise wins
    let playerWin = 0, computerWin = 0, equality = 0 ; win ;
    for (let i = 0; i < 5; i++) {

        //initialise winner of the new round
        win = 0;

        //get computer and user selections
        let computerSelection = computerPlay ();
        let userSelection = userPlay ();

        //play the round and get the winner
        win = playRound(computerSelection, userSelection);
        if (win == 1) { //computer win
            alert(`You lose ${computerSelection} beats ${playerSelection}`);
            computerWin++;
        } else if (win == 2){ //user win
            alert(`You win ${playerSelection} beats ${computerSelection}`);
            playerWin++;
        } else { //equality
            alert(`No winner ${playerSelection} equals ${computerSelection}`);
            equality++;
        }
    }
    
    //alert results and the winner
    if (playerWin > computerWin) {
        alert(`You won, ${playerWin} > ${computerWin}, ${equality} nul(s).`)
    } else {
        alert(`You lose, ${playerWin} < ${computerWin}, ${equality} nul(s).`)
    }
}