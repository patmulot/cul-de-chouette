const gamble = {
    init : function() {
        gamble.gamblePlayer();
    },
    selectedDice : 0, // valeur du dés choisit pour pari
    gambleDice : 0, // valeur du dés parié
    gambleAction : '', // description de l'action de pari
    playerGamble : '', // joueur en train de parier
    scoreGamble : 0, // initialisation du score a récupérer du gamble
    iaScoreGamble : 0, // initialisation du score a récupérer du gamble
    gamblePlayer : function() {
        let diceElements = document.querySelectorAll('.gamble_dice');
        for(let i = 0;i < diceElements.length;i++) {
            diceElements[i].addEventListener("click", gamble.selectDice);
        }
    },
    selectDice : function(event) {
        let currentElementClicked = event.currentTarget;
        for ( let i = 1; i < 7; i++) {
            if  (currentElementClicked.classList.contains("gamble_dice_"+i) ) {
                // alert('prout prout');
                gamble.selectedDice = i;
                gamble.hydeGamblePlayer();
            }
        }
    },
    displayGamblePlayer : function() {
        let gambleBtnsElement = document.querySelector('.gamble_buttons');
        if ( gambleBtnsElement.classList.contains("display_none") ) {
        gambleBtnsElement.classList.remove("display_none");
        gambleBtnsElement.classList.add("display_flex")
        } else {
            gambleBtnsElement.classList.add("display_flex")
        }
    },
    hydeGamblePlayer : function() {
        let gambleBtnsElement = document.querySelector('.gamble_buttons');
        if ( gambleBtnsElement.classList.contains("display_flex") ) {
        gambleBtnsElement.classList.remove("display_flex");
        gambleBtnsElement.classList.add("display_none")
        } else {
            gambleBtnsElement.classList.add("display_none")
        }
    },
    checkGamblePlayer : function() {
        if (gamble.selectedDice == gamble.gambleDice) {
            if ( app.currentPlayer == app.player ) {

                gamble.gambleAction = gamble.gamblePlayer + " a gagné son pari";

                gamble.iaScoreGamble = 25;
                gamble.scoreGamble = 0;
                iaPlayer1.player1scoreTab.push(gamble.scoreGamble);

                iaPlayer1.player1figureTab.push('pari sirotage réussi !');
            } else {

                gamble.gambleAction = gamble.gamblePlayer + " as gagné ton pari";

                gamble.scoreGamble = 25;
                gamble.iaScoreGamble = 0;
                scores.scoreTab.push(gamble.scoreGamble);

                scores.figureTab.push('pari sirotage réussi !');
            };
            return
        } else {
            if (  app.currentPlayer == app.player ) {
    
                gamble.gambleAction = gamble.gamblePlayer + " a perdu son pari";
    
                iaPlayer1.player1scoreTab.push('pari sirotage perdu !');
                return
            } else {
    
                gamble.gambleAction = gamble.gamblePlayer + " as perdu ton pari";
    
                scores.figureTab.push('pari sirotage perdu !');
                return
            };
        }
    }
}
document.addEventListener('DOMContentLoaded', gamble.init);

