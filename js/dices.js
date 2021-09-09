const dices = {
    dicesTab : [, , ],
    diceRand : function() {
        dice = Math.floor( Math.random() * (6 - 1 + 1) ) + 1;
        return dice
    },
    // visuel des dés :
    deleteVisible : function(tabIndex) {
        let classDice = '#dice'+(tabIndex+1);
        let diceTarget = document.querySelector(classDice);
        let visibleDots = diceTarget.querySelectorAll('.dot');
        for(i = 0 ; i < (visibleDots.length) ; i++) {
            visibleDots[i].classList.remove('visible');
        }
    },
    diceDesign : function(diceValue,tabIndex) {

        let classDice = '#dice'+(tabIndex+1);
        let diceTarget = document.querySelector(classDice);

        if (diceValue == 1) {
            dice1 = diceTarget.querySelector('.fig_mid');
            dice1.classList.add("visible");

        } else if (diceValue == 2) {
            dice1 = diceTarget.querySelector('.fig_top_left');
            dice1.classList.add("visible");

            dice1 = diceTarget.querySelector('.fig_bot_right');
            dice1.classList.add("visible");

        } else if (diceValue == 3) {
            dice1 = diceTarget.querySelector('.fig_top_left');
            dice1.classList.add("visible");

            dice1 = diceTarget.querySelector('.fig_mid');
            dice1.classList.add("visible");

            dice1 = diceTarget.querySelector('.fig_bot_right');
            dice1.classList.add("visible");

        } else if (diceValue == 4) {
            dice1 = diceTarget.querySelector('.fig_top_left');
            dice1.classList.add("visible");

            dice1 = diceTarget.querySelector('.fig_top_right');
            dice1.classList.add("visible");

            dice1 = diceTarget.querySelector('.fig_bot_left');
            dice1.classList.add("visible");

            dice1 = diceTarget.querySelector('.fig_bot_right');
            dice1.classList.add("visible");

        } else if (diceValue == 5) {
            dice1 = diceTarget.querySelector('.fig_top_left');
            dice1.classList.add("visible");

            dice1 = diceTarget.querySelector('.fig_top_right');
            dice1.classList.add("visible");

            dice1 = diceTarget.querySelector('.fig_mid');
            dice1.classList.add("visible");

            dice1 = diceTarget.querySelector('.fig_bot_left');
            dice1.classList.add("visible");

            dice1 = diceTarget.querySelector('.fig_bot_right');
            dice1.classList.add("visible");

        } else if (diceValue == 6) {
            dice1 = diceTarget.querySelector('.fig_top_left');
            dice1.classList.add("visible");

            dice1 = diceTarget.querySelector('.fig_top_right');
            dice1.classList.add("visible");

            dice1 = diceTarget.querySelector('.fig_mid_left');
            dice1.classList.add("visible");

            dice1 = diceTarget.querySelector('.fig_mid_right');
            dice1.classList.add("visible");

            dice1 = diceTarget.querySelector('.fig_bot_left');
            dice1.classList.add("visible");

            dice1 = diceTarget.querySelector('.fig_bot_right');
            dice1.classList.add("visible");

        } else {};
    },
    diceChouetteAnimation : function() {
        //! --------------------------------------------
        //! A AMELIORER AVEC BOUCLE ET TABLEAU
        //! --------------------------------------------
        //! CHANGER NOM DES CLASS
        //! --------------------------------------------
        let dice1Animation = document.querySelector('.dice_container1');
        dice1Animation.classList.add("rollAnim1");
        let dice2Animation = document.querySelector('.dice_container2');
        dice2Animation.classList.add("rollAnim2");
    },
    diceCdcAnimation : function() {
        //! --------------------------------------------
        //! A AMELIORER AVEC BOUCLE ET TABLEAU
        //! --------------------------------------------
        let dice1Animation = document.querySelector('.dice_container3');
        dice1Animation.classList.add("rollAnim3");
    },
    resetAnimation : function() {
        //! --------------------------------------------
        //! A AMELIORER AVEC BOUCLE ET TABLEAU
        //! --------------------------------------------
        let dice1RemoveClass = document.querySelector('.dice_container1');
        dice1RemoveClass.classList.remove("rollAnim1");
        dice1RemoveClass.classList.remove("rollAnimIa1");
        dice1RemoveClass.classList.remove("ia_dice1");
        let dice2RemoveClass = document.querySelector('.dice_container2');
        dice2RemoveClass.classList.remove("rollAnim2");
        dice2RemoveClass.classList.remove("rollAnimIa2");
        dice2RemoveClass.classList.remove("ia_dice2");
        let dice3RemoveClass = document.querySelector('.dice_container3');
        dice3RemoveClass.classList.remove("rollAnim3");
        dice3RemoveClass.classList.remove("rollAnimIa3");
        dice3RemoveClass.classList.remove("ia_dice3");
    },
    checkAnimClassNone : function() {
        let dice1 = document.querySelector('.dice_container1');
        if ( dice1.classList.contains("rollAnim1") ) {
            console.log('dés 1 ok');
        } else {
            let diceIndex = 0;
            return diceIndex;
        }

        let dice2 = document.querySelector('.dice_container2');
        if ( dice2.classList.contains("rollAnim2") ) {
            console.log('dés 2 ok');
        } else {
            let diceIndex = 1;
            return diceIndex;
        }
        let dice3 = document.querySelector('.dice_container3');
        if ( dice3.classList.contains("rollAnim3") ) {
            console.log('dés 3 ok');
        } else {
            let diceIndex = 2;
            return diceIndex;
        }
    },
    diceOneAnimation : function() {
        //! --------------------------------------------
        //! A AMELIORER AVEC BOUCLE ET TABLEAU
        //! --------------------------------------------
        let diceIndex = dices.checkAnimClassNone();
        console.log(diceIndex);

        let diceNbr = 'dice'+(diceIndex +1);
        console.log(diceNbr);

        let currentDice = document.querySelector('.dice_container'+(diceIndex +1));
        currentDice.classList.add("rollAnim"+(diceIndex +1));
    },
    /* -------------------------------------------------- */
    /* ----------------------- I A -----------------------*/
    /* -------------------------------------------------- */
    iaDicesPositions : function() {
        console.log("(IA #1) IA a prit les dés")
        let dice1RemoveClass = document.querySelector('.dice_container1');
        dice1RemoveClass.classList.add("ia_dice1");
        let dice2RemoveClass = document.querySelector('.dice_container2');
        dice2RemoveClass.classList.add("ia_dice2");
        let dice3RemoveClass = document.querySelector('.dice_container3');
        dice3RemoveClass.classList.add("ia_dice3");
    },
    diceChouetteAnimationIa : function() {
        let dice1Animation = document.querySelector('.dice_container1');
        dice1Animation.classList.add("rollAnimIa1");
        let dice2Animation = document.querySelector('.dice_container2');
        dice2Animation.classList.add("rollAnimIa2");
    },
    diceCdcAnimationIa : function() {
        let dice1Animation = document.querySelector('.dice_container3');
        dice1Animation.classList.add("rollAnimIa3");
    },
}