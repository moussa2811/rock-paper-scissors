let computerPlay = () =>{
    
    return computerSelection;
}

//play one round game and return 0 for equality, 1 for computer win and 2 for user win
let gameRound = (computerSelection, playerSelection) =>{
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
    
}