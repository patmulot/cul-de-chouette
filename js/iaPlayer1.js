const iaPlayer1 = {
    player1Name : 'Perceval',
    player1scoreTab : [],
    player1scoreSum : [0], // stockage de la somme du score actuel avec le score préccédent depuis le tablea scoreTab
    player1counter : 1, // initialisation du compte tour à 1 pour le premier tour
    player1siropTab : [], // stockage de chaque score à chaque tour
    player1figureTab : [],
    player1coef : [1],
    time : 0, // initialisation d'une variable temps pour fonction setTimeout
    timeSirop : 0, // initialisation d'une variable temps pour fonction setTimeout
    siropDiceToRoll : 0, // initialisation d'une variable pour stocker la valeur puis l'index du dés dans les différentes fonctions du sirotage a l'extérieur desdites fonctions
    iaStartRound : function() {

        app.currentPlayer = iaPlayer1.player1Name;
        gamble.gamblePlayer = app.player;
        rules.isSirotage = 0;

        // styleJs.resize(); // check de la dimension de la page avec replacement des éléments si besoin.
        iaPlayer1.time = 500; //? Initialisation a 500ms ?
        iaPlayer1.hiddenButtonIa(); // cacher les bouttons de jeu lorsque l'IA est en train de jouer
        iaPlayer1.player1coef[0] = 1; // initialisation coef
        dices.resetAnimation(); // Reset de l'animation des dés
        iaPlayer1.time += 500;
        setTimeout("dices.iaDicesPositions()", iaPlayer1.time); // Reset de l'animation des dés
        // 1 --------------- IA LANCE LA CHOUETTE : 
        iaPlayer1.time += 500;
        setTimeout("iaPlayer1.player1Chouette()", iaPlayer1.time); 
        // 2 --------------- IA LANCE LE CUL DE LA CHOUETTE :
        iaPlayer1.time += 1000;
        setTimeout("iaPlayer1.player1Cdc()", iaPlayer1.time);
        // check des figures jouées par l'IA
        iaPlayer1.time += 500;
        setTimeout("scores.checkFigure()", iaPlayer1.time);

        iaPlayer1.time += 1;
        setTimeout("iaPlayer1.checkSirotageIa()", iaPlayer1.time);
    },
    iaEndRound : function() {
        app.playerAction(app.action);
        // app.currentRuleAction = '';
        // 3 --------------- FIN DE TOUR DE L'IA :
        iaPlayer1.time = 2000; // initialisation du timmer à 0.5sec
        setTimeout("iaPlayer1.scoreCellIa(scores.setScore())", iaPlayer1.time);
        iaPlayer1.time += 1;
        setTimeout("iaPlayer1.iaNext()", iaPlayer1.time);
        iaPlayer1.time += 1;
        setTimeout("iaPlayer1.displayButtonsIa()", iaPlayer1.time);
        setTimeout("scores.checkFinalScore()", iaPlayer1.time);

        rules.isSirotage = 0;

        iaPlayer1.timeSirop = 0;
        rules.currentRule = '';
        //!!!!!!!!!! gamble.isGamble = '';
        //!!!!!!!!!! gamble.playerGamble = '';
    },
    iaStartSirop : function() {
        // SIROTAGE
        iaPlayer1.time += 500;
        setTimeout( "iaPlayer1.handleDiceToRoll()" ,iaPlayer1.time);

        // Relance du dés siroté
        iaPlayer1.time += iaPlayer1.timeSirop; //!
        setTimeout( "iaPlayer1.iaSirotage()" ,iaPlayer1.time);
        
        iaPlayer1.time += 500;
        setTimeout( "iaPlayer1.checkSiropIaSuccess()" ,iaPlayer1.time);
        
        iaPlayer1.time += 500;
        setTimeout("iaPlayer1.iaEndRound()", iaPlayer1.time);
    },
    player1Chouette : function() {
        // déclaration variable pour la valeur randoms du premier dés
        let dice1Value = dices.diceRand();
        // supression de la class CSS visible
        dices.deleteVisible(0);
        // appel de la fonction de définition du design des dés
        dices.diceDesign(dice1Value,0);
        // idem pour le second dés
        let dice2Value = dices.diceRand();
        dices.deleteVisible(1);
        dices.diceDesign(dice2Value,1);
        // Entrée des valeurs des dés dans le tableau dicesTab
        dices.dicesTab[0] = dice1Value;
        dices.dicesTab[1] = dice2Value; 
        // Déclaration variable du compte tour
        let counter = document.querySelector('#counter');
        // modification du contenu span du compte tour
        counter.textContent = iaPlayer1.player1counter++;
        dices.diceChouetteAnimationIa();
    },
    player1Cdc : function() {
        // création de la variable pour la valeur random du dés
        let dice3Value = dices.diceRand();
        dices.deleteVisible(2);
        dices.diceDesign(dice3Value,2);
        dices.dicesTab[2] = dice3Value;
        dices.diceCdcAnimationIa();
        app.btn.value = 'Perceval a lancé le cul de la chouette...';
    },
    scoreCellIa : function(currentValue) {
        let coef = iaPlayer1.player1coef[0];
        let scoreValue = parseInt(currentValue * coef);
        iaPlayer1.player1scoreTab.push(parseInt(scoreValue));
        iaPlayer1.player1figureTab.push(scores.checkFigure());


        let iaResult = scoreValue + iaPlayer1.player1scoreSum[iaPlayer1.player1scoreSum.length -1 ];

        iaPlayer1.player1scoreSum.push(parseInt(iaResult));

        let player1scoreCell = document.getElementById('score_cell_ia');
        player1scoreCell.textContent = parseInt(iaResult);
        iaPlayer1.player1coef[0] = 1;

        let scoreGamble = parseInt(gamble.scoreGamble);

        let result = scoreGamble + scores.scoreSum[scores.scoreSum.length -1 ];
        scores.scoreSum.push(parseInt(result));

        let scoreCell = document.getElementById('score_cell');
        scoreCell.textContent = parseInt(result);
        gamble.scoreGamble = 0;
    },
    iaNext : function() {
        app.btn.value = 'Lancer la Chouette';
        dices.resetAnimation();
    },
    hiddenButtonIa : function() {
        let displayElement = document.getElementById('ia_hide_button');
        // displayElement.style.visibility = "visible";
        displayElement.style.visibility = "visible";
    },
    displayButtonsIa : function() {
        let hiddingElement = document.getElementById('ia_hide_button');
        hiddingElement.style.visibility = "hidden";
    },
    getDiceToRoll : function() {
        let checkChouetteString = scores.checkFigure();
        let chouetteValue = checkChouetteString.substr(12,1);

        for (let diceIndex = 0; diceIndex < dices.dicesTab.length; diceIndex++) {
            if (dices.dicesTab[diceIndex] !== parseInt(chouetteValue)) {
                // stockage de la valeure du dés à relancer :
                iaPlayer1.siropDiceToRoll = diceIndex;
                return
            };
        };
    },
    iaChoiceSirotage : function() {
        // CONIDITONS DU CHOIX DE SIROTAGE DE L'IA :
        let choice = Math.floor( Math.random() * 2); // Décision random 0 = pas de sirotage, 1 = sirotage.
        if ( choice == 1 ) { 
            iaPlayer1.iaStartSirop();
        } else {
            app.action = app.currentPlayer + ' a choisi de ne pas siroter...';
            iaPlayer1.iaEndRound();
        };
        rules.isSirotage = choice
    },
    handleDiceToRoll : function() {
        gamble.displayGamblePlayer();

        app.action = app.currentPlayer + ' a choisit de siroter...';
        app.playerAction(app.action);

        // app.playerAction(app.action);
        let diceNb = iaPlayer1.siropDiceToRoll + 1;
        let diceToRemoveClass = document.querySelector('.dice_container' + diceNb);
        diceToRemoveClass.classList.remove("rollAnimIa" + diceNb);
    },
    iaSirotage : function() {
        gamble.hydeGamblePlayer();
        let diceIndex = iaPlayer1.siropDiceToRoll;
        let diceNb = iaPlayer1.siropDiceToRoll + 1;
        let diceToRoll = document.querySelector('.dice_container' + diceNb);
        let diceToRollNewValue = dices.diceRand();

        gamble.gambleDice = diceToRollNewValue;

        dices.dicesTab[diceIndex] = diceToRollNewValue;
        diceToRoll.classList.add("rollAnimIa" + diceNb);
        dices.deleteVisible(diceIndex);
        dices.diceDesign(dices.dicesTab[diceIndex],diceIndex);
        app.action = 'Perceval à siroté et a fait un ' + dices.dicesTab[diceIndex];
    },
    iaGamble : function() {
        let iaGambleChoice = Math.floor( Math.random() * 6) +1;
        gamble.selectedDice = iaGambleChoice;
        gamble.gambleAction = app.gamblePlayer + ' a parié sur un ' + iaGambleChoice;
    },
    checkSiropIaSuccess : function() {
        if ( rules.isSirotage == 1 ) {
            rules.checkSiropSuccess();
            iaPlayer1.player1siropTab.push(rules.checkSiropSuccess());

            app.playerAction(app.action);
    
            // app.playerAction(app.action);
        }
    },
    checkSirotageIa : function() {

        app.playerAction(app.action)

        let checkChouetteString = scores.checkFigure();
        let chouetteString = checkChouetteString.substr(0,8);

        if( chouetteString == "CHOUETTE" && scores.checkFigure() !== "CHOUETTE VELUTE !!" ) {
            iaPlayer1.timeSirop = 3000; // initialisation du temps de pause pour fonction gamble
            iaPlayer1.iaChoiceSirotage();
            iaPlayer1.getDiceToRoll();
        } else {
            iaPlayer1.timeSirop = 0;
            iaPlayer1.iaEndRound();
        };
    },
}