const scores = {
    scoreTab : [], // stockage de chaque score à chaque tour
    scoreSum : [0], // stockage de la somme du score actuel avec le score préccédent depuis le tablea scoreTab
    counter : 1, // initialisation du compte tour à 1 pour le premier tour
    siropTab : [], // stockage de chaque score à chaque tour
    figureTab : [],
    coef : [1], // coef pour les scores negatifs ou positifs
    // condition d'affichage des scores en fonction des figures :
    checkFigure : function() {
        // récupération de la valeur de chaque dés depuis le tableau des dés
        let dice1Value = dices.dicesTab[0];
        let dice2Value = dices.dicesTab[1];
        let dice3Value = dices.dicesTab[2];
        // si la figure est cul de chouette
        if (figures.figureCdc(dice1Value,dice2Value,dice3Value)) {
            // if (iaPlayer1.isSirotage == 0) {
            //     app.playerAction(app.action);
            // };
            return figures.figureCdc(dice1Value,dice2Value,dice3Value)
        // si la figure est chouette velute
        } else if (figures.figureChouetteVelute(dice1Value,dice2Value,dice3Value)) {
            // if (iaPlayer1.isSirotage == 0) {
            //     app.playerAction(app.action);
            // };
            return figures.figureChouetteVelute(dice1Value,dice2Value,dice3Value)
        // si la figure est velute
        } else if (figures.figureVelute(dice1Value,dice2Value,dice3Value)) {
            // app.playerAction(app.action);
            return figures.figureVelute(dice1Value,dice2Value,dice3Value)
        // si la figure est chouette
        } else if (figures.figureChouette(dice1Value,dice2Value,dice3Value)) {
            // if (iaPlayer1.isSirotage == 0) {
            //     app.playerAction(app.action);
            // };
            return figures.figureChouette(dice1Value,dice2Value,dice3Value)
        // si la figure est suite
        } else if (figures.figureSuite(dice1Value,dice2Value,dice3Value)) {
            // app.playerAction(app.action);
            return figures.figureSuite(dice1Value,dice2Value,dice3Value)
        // sinon aucune figure
        } else {
            let figure = 'aucune figure ';
            app.action = app.currentPlayer + ' n\'as fait ' + figure;
            // app.playerAction(app.action);
            return figure;
        }
    },
    setScore : function() {
        // récupération de la valeur de chaque dés depuis le tableau des dés
        let dice1Value = dices.dicesTab[0];
        let dice2Value = dices.dicesTab[1];
        let dice3Value = dices.dicesTab[2];
        // si la figure est cul de chouette
        if (figures.figureCdc(dice1Value,dice2Value,dice3Value)) {
            let currentScore = scores.scoreCdC(dice1Value,dice2Value,dice3Value);
            return currentScore;
        // si la figure est chouette velute
        } else if (figures.figureChouetteVelute(dice1Value,dice2Value,dice3Value)) {
            let currentScore = scores.scoreChouetteVelute(dice1Value,dice2Value,dice3Value);
            return currentScore;
        // si la figure est velute
        } else if (figures.figureVelute(dice1Value,dice2Value,dice3Value)) {
            let currentScore = scores.scoreVelute(dice1Value,dice2Value,dice3Value);
            return currentScore;
        // si la figure est chouette
        } else if (figures.figureChouette(dice1Value,dice2Value,dice3Value)) {
            let currentScore = scores.scoreChouette(dice1Value,dice2Value,dice3Value);
            return currentScore;
        // si la figure est suite
        } else if (figures.figureSuite(dice1Value,dice2Value,dice3Value)) {
            // le score sera score suite
            let currentScore = scores.scoreSuite;
            return currentScore;
        // sinon aucune figure
        } else {
            // score = 0
            let currentScore = 0;
            return currentScore;
        }
    },
    //! TOUS LES TYPES DE SCORE :
    // conditions des scores pour chaques figures :
    scoreCdC : function(dice1) {
        // conditions du score : chouette de 1 = 50, de 2 = 60, 70, 80, 90, 100
        if (dice1 == 1)
        {
            let scoreCdC = 50;
            return scoreCdC;
        }
        else if(dice1 == 2)
        {
            let scoreCdC = 60;
            return scoreCdC;
        }
        else if(dice1 == 3)
        {
            let scoreCdC = 70;
            return scoreCdC;
        }
        else if(dice1 == 4)
        {
            let scoreCdC = 80;
            return scoreCdC;
        }
        else if(dice1 == 5)
        {
            let scoreCdC = 90;
            return scoreCdC;
        }
        else if(dice1 == 6)
        {
            let scoreCdC = 100;
            return scoreCdC;
        } else { return };
    },
    scoreChouetteVelute : function(dice1,dice2,dice3) {
        // conditions du score chouette velute : si la somme de 2 dés IDENTIQUES (chouette) est égale au 3eme
        // alors somme des 2 dés x le 3eme dés le tout multiplié par 3
        if( dice1 == dice2 && dice1 + dice2 == dice3 )
        {
            let scoreChouetteVelute = ((dice1 + dice2) * dice3) * 3;
            return scoreChouetteVelute;
        }
        else if( dice2 == dice3 && dice2 + dice3 == dice1 )
        {
            let scoreChouetteVelute = ((dice2 + dice3) * dice1) * 3;
            return scoreChouetteVelute;
        }
        else if( dice1 == dice3 && dice1 + dice3 == dice2 )
        {
            let scoreChouetteVelute = ((dice1 + dice3) * dice2) * 3;
            return scoreChouetteVelute;
        } else { return };
    },
    scoreVelute : function(dice1,dice2,dice3) {
        // conditions du score velute : si la somme de 2 dés est égale au 3eme
        // alors somme des 2 dés x le 3eme dés le tout multiplié par 2
        if( dice1 + dice2 == dice3 )
        {
            let scoreVelute = ((dice1 + dice2) * dice3) * 2;
            return scoreVelute;
        }
        else if( dice1 + dice3 == dice2 )
        {
            let scoreVelute = ((dice1 + dice3) * dice2) * 2;
            return scoreVelute;
        }
        else if( dice2 + dice3 == dice1 )
        {
            let scoreVelute = ((dice2 + dice3) * dice1) * 2;
            return scoreVelute;
        } else { return };
    },
    scoreChouette : function(dice1,dice2,dice3) {
        // conditions du score chouette : si 2 sont identiques
        // alors carré des 2 dés
        if( dice1 == dice2 )
        {
            let scoreChouette = dice1 * dice2;
            return scoreChouette;
        }
        else if( dice2 == dice3 )
        {
            let scoreChouette = dice2 * dice3;
            return scoreChouette;
        }
        else if( dice1 == dice3 )
        {
            let scoreChouette = dice1 * dice3;
            return scoreChouette;
        } else { return };
    },
    scoreSuite : 10, // 10 points si les 3 dés forment une suite
    scoreCell : function(currentValue) {
        // récupération du coef
        let coef = scores.coef[0];
        let scoreValue = parseInt(currentValue * coef);

        scores.scoreTab.push(parseInt(scoreValue));
        scores.figureTab.push(scores.checkFigure());

        let result = scoreValue + scores.scoreSum[scores.scoreSum.length -1 ];

        scores.scoreSum.push(parseInt(result));

        let scoreCell = document.getElementById('score_cell');
        scoreCell.textContent = parseInt(result);
        // réinitialisation du coef positif
        scores.coef[0] = 1;

        let iaScoreGamble = parseInt(gamble.iaScoreGamble);

        let iaResult = iaScoreGamble + iaPlayer1.player1scoreSum[iaPlayer1.player1scoreSum.length -1 ];
        iaPlayer1.player1scoreSum.push(parseInt(iaResult));

        let iaScoreCell = document.getElementById('score_cell_ia');
        iaScoreCell.textContent = parseInt(iaResult);
        gamble.iaScoreGamble = 0;
    },
    updateScoreTab : function() {
        let ulScoreTab = document.querySelector('#score_list');
        let liScoreTab = document.createElement('li');
        liScoreTab.textContent = 'tour n°'+ (scores.scoreTab.length) + 
        ' : score = ' + scores.scoreTab[scores.scoreTab.length - 1] +
        ' (' + scores.checkFigure() + scores.siropTab[scores.siropTab.length - 1]+') ';
        liScoreTab.innerHTML += '<hr>';
        ulScoreTab.appendChild(liScoreTab); 
    },
    checkFinalScore : function () {
        app.currentRuleAction = '';
        let scoreMax = parseInt(scores.scoreSum[scores.scoreSum.length -1 ]);
        let scoreIaMax = parseInt(iaPlayer1.player1scoreSum[iaPlayer1.player1scoreSum.length -1 ]);
        let divEndgame = document.querySelector('.endgame');
        let spanTotalScore = divEndgame.querySelector('span');
        let tr = scores.scoreTab.length;
        let stats = scores.scoreTab;
        let finalScoreMsg = document.querySelector('.finalScore');
        if ( scoreMax > 343) {
            figures.getAllFiguresStats();
            figures.getAllSiropsStats();
            finalScoreMsg.textContent = scoreMax;
            // envoi du score caché
            let hiddenScore = document.querySelector('.hidden_score');
            hiddenScore.value = scoreMax;
            // envoi du nombre de tour caché
            let hiddenTr = document.querySelector('.hidden_round_nb');
            hiddenTr.value = tr;
            // envoi des statiques par figure
            let figNb = '';
            let FigStats = document.querySelector('.hidden_fig_stats');
            for (let allFigI = 0 ; allFigI < figures.allFigures.length ; allFigI++) {
                figNb += figures.allFigures[allFigI]+',';
                FigStats.value = figNb;
            };
            // envoi du nombre de round
            let roundNb = document.querySelector('.hidden_round_nb');
            figValue = scores.scoreTab.length;
            roundNb.value = figValue;
            // envoi des statiques sirop cachées
            let siropNb = '';
            let siropStats = document.querySelector('.hidden_sirop_stats');
            for (let siropI = 0 ; siropI < figures.allSirops.length ; siropI++) {
                siropNb += figures.allSirops[siropI]+',';
                siropStats.value = siropNb;
            };
            // MESSAGE DE VICTOIRE :
            divEndgame.classList.remove('display_none');
            spanTotalScore.name = scoreMax;
        } else if (scoreIaMax > 343) {
            alert ('Perceval à gagné');
        } else {};
    },
}
