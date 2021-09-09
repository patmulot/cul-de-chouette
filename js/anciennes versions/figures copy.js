const figures = {
    //condition de la figure cul de chouette----------------------
    figureCdc : function(value1, value2, value3) {
        if (value1 == value2 && value1 == value3) {
            let figure = 'CUL DE CHOUETTE !!!';
            console.log(figure);
            scores.scoreCdC();
        } else {
            figures.figureChouetteVelute(value1, value2, value3)
        };
    },
    //condition de la figure chouette velute----------------------
    figureChouetteVelute : function(value1, value2, value3) {
        if (value1 == value2 && value1 + value2 == value3) {
            let figure = 'CHOUETTE VELUTE !!';
            console.log(figure);
            scores.scoreChouetteVelute();
        } else if (value2 == value3 && value2 + value3 == value1) {
            let figure = 'CHOUETTE VELUTE !!';
            console.log(figure);
            scores.scoreChouetteVelute();
        } else if (value1 == value3 && value1 + value3 == value2) {
            let figure = 'CHOUETTE VELUTE !!';
            console.log(figure);
            scores.scoreChouetteVelute();
        } else {
            figures.figureChouette(value1, value2, value3)
        };
    },
    //condition de la figure chouette----------------------
    figureChouette : function(value1, value2, value3) {
        if ( value1 === value2 ) {
            let figure = 'CHOUETTE !';
            console.log(figure);
            scores.scoreChouette();
        } else if ( value2 == value3 )
        {
            let figure = 'CHOUETTE !';
            console.log(figure);
            scores.scoreChouette();
        } else if ( value2 == value3 )
        {
            let figure = 'CHOUETTE !';
            console.log(figure);
            scores.scoreChouette();
        } else {
            figures.figureVelute(value1, value2, value3)
        };
    },
    figureVelute : function(value1, value2, value3) {
        //condition de la figure velute----------------------
        if ( value1 + value2 == value3 )
        {
            let figure = 'VELUTE !';
            console.log(figure);
            scores.scoreVelute();
        }
        else if( value1 + value3 == value2 )
        {
            let figure = 'VELUTE !';
            console.log(figure);
            scores.scoreVelute();
        }
        else if( value2 + value3 == value1 )
        {
            let figure = 'VELUTE !';
            console.log(figure);
            scores.scoreVelute();
        } else {console.log('rien')};
    },
    figureSuite : function(value1, value2, value3) {
        //condition de la figure suite----------------------
        if ( value2 == (value1 + 1) && value3 == (value2+1) )
        {
            let figure = 'SUITE';
            console.log(figure);
            scores.scoreSuite();
        } else {console.log('rien')};
    }
        
}