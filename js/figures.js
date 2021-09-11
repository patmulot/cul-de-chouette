const figures = {
    allFigures : [0,0,0,0,0,0], // chacune de ces valeures représente le nombre cul de chouette, de chouette velute, de velute, de chouette et en dernier de suites.
    allSirops : [0,0,0],
    //condition de la figure cul de chouette----------------------
    figureCdc : function(dice1, dice2, dice3) {
        if ( dice1 == dice2 && dice2 == dice3 ) {
            let figure = 'CUL DE CHOUETTE !!!';
            app.action = app.currentPlayer + ' viens de faire une '+figure;
            return figure;
        } else { return };
    },
    //condition de la figure chouette velute----------------------
    figureChouetteVelute : function(dice1, dice2, dice3) {
        if ((dice1 == dice2 && dice1 + dice2 == dice3) || (dice2 == dice3 && dice2 + dice3 == dice1) || (dice1 == dice3 && dice1 + dice3 == dice2)) {
            let figure = 'CHOUETTE VELUTE !!';
            app.action = app.currentPlayer + ' viens de faire une '+figure;
            return figure;
        } else { return };
    },
    //condition de la figure chouette----------------------
    figureChouette : function(dice1, dice2, dice3) {
        if ( dice1 === dice2 ) {
            let figure = 'CHOUETTE de ' + dice1 + ' !';

            rules.isSirotage = 1;

            app.action = app.currentPlayer + ' viens de faire une '+figure;
            return figure
        } else if ( dice2 == dice3 ) {
            let figure = 'CHOUETTE de ' + dice2 + ' !';

            rules.isSirotage = 1;
            
            app.action = app.currentPlayer + ' viens de faire une '+figure;
            return figure
        } else if ( dice1 == dice3 ) {
            let figure = 'CHOUETTE de ' + dice3 + ' !';
            
            rules.isSirotage = 1;
            
            app.action = app.currentPlayer + ' viens de faire une '+figure;
            return figure
        };
    },
    figureVelute : function(dice1, dice2, dice3) {
        //condition de la figure velute----------------------
        if ( dice1 + dice2 == dice3 || dice1 + dice3 == dice2 || dice2 + dice3 == dice1 )
        {
            let figure = 'VELUTE !';
            app.action = app.currentPlayer + ' viens de faire une '+figure;
            return figure
        } else { return };
    },
    figureSuite : function(dice1, dice2, dice3) {
        //condition de la figure suite----------------------
        if( dice2 == (dice1 + 1) && dice3 == (dice2+1) )
        {
            let figure = 'Suite.';
            app.action = app.currentPlayer + ' viens de faire une '+figure;
            return figure
        } else if( dice2 == (dice3 + 1) && dice3 == (dice1+1) )
        {
            let figure = 'Suite.';
            app.action = app.currentPlayer + ' viens de faire une '+figure;
            return figure
        } else if( dice1 == (dice2 + 1) && dice3 == (dice1+1) )
        {
            let figure = 'Suite.';
            app.action = app.currentPlayer + ' viens de faire une '+figure;
            return figure
        } else if ( dice2 == (dice3 + 1) && dice1 == (dice2+1) )
        {
            let figure = 'Suite.';
            app.action = app.currentPlayer + ' viens de faire une '+figure;
            return figure
        } else if ( dice3 == (dice2 + 1) && dice1 == (dice3+1) )
        {
            let figure = 'Suite.';
            app.action = app.currentPlayer + ' viens de faire une '+figure;
            return figure
        } else if ( dice1 == (dice3 + 1) && dice2 == (dice1+1) )
        {
            let figure = 'Suite.';
            app.action = app.currentPlayer + ' viens de faire une '+figure;
            return figure
        } else { return };
    },
    getAllFiguresStats : function() {
        for(let index = 0; index < scores.figureTab.length; index++) {
            if (scores.figureTab[index] == 'CUL DE CHOUETTE !!!') {
                figures.allFigures[0] += 1;
            } else if (scores.figureTab[index] == 'CHOUETTE VELUTE !!') {
                figures.allFigures[1] += 1;
            } else if (scores.figureTab[index] == 'VELUTE !') {
                figures.allFigures[2] += 1;
            } else if (scores.figureTab[index] == 'CHOUETTE !') {
                figures.allFigures[3] += 1;
            } else if (scores.figureTab[index] == 'Suite.') {
                figures.allFigures[4] += 1;
            } else if (scores.figureTab[index] == 'aucune figure ') {
                figures.allFigures[5] += 1;
            } else {};
        }
    },
    getAllSiropsStats : function() {
        for(let index = 0; index < scores.siropTab.length; index++) {
            if (scores.siropTab[index] == ' Sirotage réussi !') {
                figures.allSirops[0] += 1;
                figures.allSirops[1] += 1;
            } else if (scores.siropTab[index] == ' Sirotage perdu !') {
                figures.allSirops[0] += 1;
                figures.allSirops[2] += 1;
            } else {};
        }
    },
}