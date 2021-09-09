const rules = {
    // ------------ ADD SIROTAGE ------------------
    isSirotage : 0,
    currentRule : '',
    displaySirotage : function() {
        let checkChouetteString = scores.checkFigure();
        let chouetteString = checkChouetteString.substr(0,8);

        if( chouetteString == "CHOUETTE" && scores.checkFigure() !== "CHOUETTE VELUTE !!" ) {
            // déclenche la règle du sirotage si il y a une chouette.
            if( app.currentPlayer === 'Tu' ) {
            rules.displaySiropBtn();
            };
        }
    },
    checkSirop : function(dice1, dice2, dice3) {
        //! A REFAIRE ET SEPARER LES FONCTIONS !!
        if ( dice1 == dice2) {
            //!!!!!!!!!! iaPlayer1.iaGamble();
            let dice1RemoveClass = document.querySelector('.dice_container3');
            dice1RemoveClass.classList.remove("rollAnim3");

            app.btn.value=('Relancer le Dés');

            rules.siropBtnDNone();

            if (app.currentPlayer == 'Tu') {
                console.log("c'est à toi de siroter");
            } else {
                console.log('test');
            };

        } else if ( dice1 == dice3) {
            let dice1RemoveClass = document.querySelector('.dice_container2');
            dice1RemoveClass.classList.remove("rollAnim2");

            let dice3Value = dices.diceRand();
            dices.deleteVisible(1);
            dices.diceDesign(dice3Value,1);
            dices.dicesTab[1] = dice3Value;

            app.btn.value=('Relancer le Dés');

            rules.siropBtnDNone();
            
            if (app.currentPlayer == 'Tu') {
                console.log("c'est à toi de siroter");
            } else {
                console.log("c'est à l'IA de siroter");
                iaPlayer1.iaRandSirotage();
            };
            
        } else if ( dice3 == dice2) {
            let dice1RemoveClass = document.querySelector('.dice_container1');
            dice1RemoveClass.classList.remove("rollAnim1");

            let dice3Value = dices.diceRand();
            dices.deleteVisible(0);
            dices.diceDesign(dice3Value,0);
            dices.dicesTab[0] = dice3Value;

            app.btn.value=('Relancer le Dés');

            rules.siropBtnDNone();
            
            if (app.currentPlayer == 'Tu') {
                console.log("c'est à toi de siroter");
            } else {
                console.log("c'est à l'IA de siroter");
                iaPlayer1.iaRandSirotage();
            };
        }
    },  
    displaySiropBtn : function () {
        app.siropBtn.style.display = 'block';
    },
    siropBtnDNone : function () {
        app.siropBtn.style.display = 'none';
    },
    checkSiropSuccess : function() {
        gamble.checkGamblePlayer();
        let dice1Value = dices.dicesTab[0];
        console.log(dice1Value);
        let dice2Value = dices.dicesTab[1];
        console.logdice2Value
        let dice3Value = dices.dicesTab[2];
        console.logdice3Value
        scores.checkFigure();
        if(figures.figureCdc(dice1Value,dice2Value,dice3Value) || figures.figureChouetteVelute(dice1Value,dice2Value,dice3Value)) {
            let sirop = ' Sirotage réussi !';
            console.log(sirop);
            // declaration du coef positif
            if( app.currentPlayer === 'Tu' ) {
                console.log('coef gagné : '+scores.coef[0]);
                // affichage de l'action effectuée
                rules.currentRule = 'Bravo !!! ' + app.currentPlayer + ' as réussi ton sirotage';
            } else {
                rules.currentRule = app.currentPlayer + ' a réussi son sirotage.';
            };
            return sirop
        } else {
            let sirop = ' Sirotage perdu !';
            console.log(sirop);

            if( app.currentPlayer === 'Tu' ) {
                scores.coef[0] = -1;
                console.log('coef perdu : '+scores.coef[0]);
                // affichage de l'action effectuée
                rules.currentRule = app.currentPlayer + ' n\'a pas réussi ton sirotage.';
            } else {
                iaPlayer1.player1coef[0] = -1;
                rules.currentRule = app.currentPlayer + ' n\'a pas réussi son sirotage.';
            };
            return sirop
        };
    },
}