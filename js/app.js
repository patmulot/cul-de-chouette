const app = {
    'init': function () {
        let btn = document.getElementById('launcher');
        if (btn) {
            btn.addEventListener('click', app.launchBtn);
        }
        //launchBtn();
        let scoreBtn = document.getElementById('view_score_button');

        if (scoreBtn) {
            scoreBtn.addEventListener('click', app.scoreCollapse);
        }

        let siropBtn = document.querySelector('#launch_sirop');

        if (scoreBtn) {
            siropBtn.addEventListener('click', app.launchSirop);
        }

        styleJs.EditIaPlayerLog();

        let burgerElement = document.querySelector(".burger-container");
        // let burgerElement = document.querySelector(".burger-icon");
        burgerElement.addEventListener("click", app.handleClickOnBurgerIcon);
        // burgerElement.addEventListener("click", app.handleClickOnBurgerIcon);
        window.addEventListener('resize', app.displayBurgerLinks);
    },
    burgerStatus: true,
    handleClickOnBurgerIcon(evt) {
        evt.preventDefault();
        let headerLogo = document.querySelector(".header_logo");
        let navElementToDisplay = document.querySelector(".burger_links");
        let libContainerElement = document.querySelector(".nav-links-container");
        if (app.burgerStatus === true) {
            headerLogo.style.display = "none";
            navElementToDisplay.style.display = "flex";
            libContainerElement.scrollTop = 1000;
            app.burgerStatus = false;
        } else if (app.burgerStatus === false) {
            headerLogo.style.display = "flex";
            navElementToDisplay.style.display = "none";
            app.burgerStatus = true;
        };
    },
    displayBurgerLinks(evt) {
        evt.preventDefault();
        let headerLogo = document.querySelector(".header_logo");
        let navElementToDisplay = document.querySelector(".burger_links");
        if (window.window.innerWidth > 575) {
            navElementToDisplay.style.display = "flex";
        } else {
            navElementToDisplay.style.display = "none";
        };
        headerLogo.style.display = "flex";
        styleJs.resize();
    },
    player: 'Tu',
    currentPlayer: [],
    btn: document.getElementById('launcher'),
    siropBtn: document.getElementById('launch_sirop'),
    action: '',
    //-----------BUTTON FUNCTIONS :----------------------
    launchBtn: function (evt) {
        evt.preventDefault;
        app.currentPlayer = app.player;
        gamble.gamblePlayer = iaPlayer1.player1Name;
        if (app.btn.value === 'Lancer la Chouette') {
            app.launchBtnChouette();
            dices.diceChouetteAnimation();
        } else if (app.btn.value === 'Lancer le cul de la Chouette') {
            app.launchBtnCdc();
            dices.diceCdcAnimation();
            scores.checkFigure();
            app.playerAction(app.action);
            // incrémentation du siropTab :
            scores.siropTab.push('');
        } else if (app.btn.value === 'Relancer le Dés') {
            app.launchBtnOneDice();
            dices.diceOneAnimation();
            // fonction check sirotage réussi ou non
            gamble.checkGamblePlayer();
            scores.siropTab.pop();
            rules.checkSiropSuccess();
            scores.siropTab.push(rules.checkSiropSuccess());
            app.playerAction(app.action);
        } else if (app.btn.value === 'Tour suivant ?') {
            app.launchBtnNxt();
            rules.siropBtnDNone();
            scores.checkFinalScore();
            iaPlayer1.iaStartRound();
            scores.checkFinalScore();
            gamble.selectedDice = 0;
            gamble.gambleDice = 0;
            gamble.gambleAction = '';
            rules.currentRule = '';
        } else {
            alert('ERREUR RELANCEZ LA PARTIE');
        }
    },
    launchBtnChouette: function () {
        // déclaration variable pour la valeur randoms du premier dés
        let dice1Value = dices.diceRand();
        // supression de la class CSS visible
        dices.deleteVisible(0);
        // appel de la fonction de définition du design des dés
        dices.diceDesign(dice1Value, 0);
        // idem pour le second dés
        let dice2Value = dices.diceRand();
        dices.deleteVisible(1);
        dices.diceDesign(dice2Value, 1);
        // Entrée des valeurs des dés dans le tableau dicesTab
        dices.dicesTab[0] = dice1Value;
        dices.dicesTab[1] = dice2Value;
        // Changement de la value du bouton pour la prochaine action
        app.btn.value = 'Lancer le cul de la Chouette';
        // Déclaration variable du compte tour
        let counter = document.querySelector('#counter');
        // modification du contenu span du compte tour
        counter.textContent = scores.counter++;
    },
    launchBtnCdc: function () {
        // création de la variable pour la valeur random du dés
        let dice3Value = dices.diceRand();
        dices.deleteVisible(2);
        dices.diceDesign(dice3Value, 2);
        dices.dicesTab[2] = dice3Value;
        rules.displaySirotage();
        app.btn.value = 'Tour suivant ?';
        // app.btn.value = 'Attendez votre tour...';
    },
    launchBtnNxt: function () {
        app.currentRuleAction = '';
        scores.scoreCell(scores.setScore());
        app.btn.value = 'Lancer la Chouette';
        scores.updateScoreTab();
    },
    launchBtnOneDice: function () {
        // création de la variable pour la valeur random du dés
        let currentDiceAnimationClass = dices.checkAnimClassNone();
        let diceSiropValue = dices.diceRand();
        gamble.gambleDice = diceSiropValue;
        dices.deleteVisible(currentDiceAnimationClass);
        dices.diceDesign(diceSiropValue, currentDiceAnimationClass);
        dices.dicesTab[currentDiceAnimationClass] = diceSiropValue;
        app.btn.value = 'Tour suivant ?';
    },
    scoreCollapse: function () {
        let scoreTable = document.querySelector('.scoretable');
        if (scoreTable.classList.contains('visible')) {
            scoreTable.classList.remove('visible');
            scoreTable.classList.add('display_none');
        } else {
            scoreTable.classList.remove('display_none');
            scoreTable.classList.add('visible');
        }
    },
    playerAction: function (currentAction) {
        let Action = currentAction;
        let RuleAction = rules.currentRule;
        let gambleAction = gamble.gambleAction;
        let divCurrentAction = document.querySelector('.current_action');
        if (rules.currentRule == '') {
            divCurrentAction.innerHTML = Action;
        } else if (rules.isSirotage == 1) {
            divCurrentAction.innerHTML = RuleAction + '<br>' + Action + '<br>' + gambleAction;
        } else {
            divCurrentAction.innerHTML = RuleAction + '<br>' + Action;
        }
    },
    // ------ ADD SIROTAGE BUTTON -------
    launchSirop: function () {
        app.action = app.currentPlayer + ' as choisit de siroter...';
        iaPlayer1.iaGamble();
        app.playerAction(app.action);
        let dice1Value = dices.dicesTab[0];
        let dice2Value = dices.dicesTab[1];
        let dice3Value = dices.dicesTab[2];
        rules.checkSirop(dice1Value, dice2Value, dice3Value);
    },
}
// styleJs.resize();
let burgerElement = document.querySelector(".burger-container");
// let burgerElement = document.querySelector(".burger-icon");
burgerElement.addEventListener("click", app.handleClickOnBurgerIcon);
// burgerElement.addEventListener("click", app.handleClickOnBurgerIcon);
window.addEventListener('resize', app.displayBurgerLinks);
document.addEventListener('DOMContentLoaded', app.init);