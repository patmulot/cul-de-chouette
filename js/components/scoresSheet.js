const scoresSheet = {
    players: [],
    currentPlayerId: 0,
    currentPlayerName: "Nouveau Joueur",
    currentPlayerScore: 0,
    'init': function () {
        
        const addPlayerElement = document.querySelector(".player-add-container");
        addPlayerElement.addEventListener("click", scoresSheet.handleClickOneAddPlayer);
        
        let newPlayerFormElement = document.querySelector(".new_player-form-background");
        newPlayerFormElement.addEventListener("click", scoresSheet.hydeNewPlayerForm);
 
        let validatePlayerNameButton = document.querySelectorAll(".submit-player_name");
        for (oneButton of validatePlayerNameButton) {
            oneButton.addEventListener("click", scoresSheet.validateNewPlayer);
        }

        let addPointsButton = document.querySelectorAll(".points-add");
        for (oneButton of addPointsButton) {
            oneButton.addEventListener("click", scoresSheet.addPointsToPlayer);
        }
        let removePointsButton = document.querySelectorAll(".points-remove");
        for (oneButton of removePointsButton) {
            oneButton.addEventListener("click", scoresSheet.removePointsToPlayer);
        }
    },
    handleClickOneAddPlayer(evt) {
        evt.preventDefault();
        scoresSheet.displayNewPlayerForm();
    },
    displayNewPlayerForm() {
        let newPlayerFormElement = document.querySelector(".new_player-form");
        newPlayerFormElement.style.display = "flex";
        let playerNameInputElement = document.querySelector("#new_player-form-name");
        playerNameInputElement.focus();
    },
    validateNewPlayer(evt) {
        let playerNameInputElement = document.querySelector("#new_player-form-name");
        playerNameInputElement.focus();
        
        scoresSheet.currentPlayerId += 1;
        scoresSheet.currentPlayerName = playerNameInputElement.value;
        scoresSheet.currentPlayerScore = 0;

        let newPlayerTemp = []
        
        newPlayerTemp["id"] = scoresSheet.currentPlayerId;
        newPlayerTemp["name"] = scoresSheet.currentPlayerName;
        newPlayerTemp["score"] = scoresSheet.currentPlayerScore;
        
        scoresSheet.players.push(newPlayerTemp);
        scoresSheet.createNewPlayer(newPlayerTemp);

        playerNameInputElement.value = "";
    },
    hydeNewPlayerForm(evt) {
        if(evt) {
            evt.preventDefault();
        }
        let newPlayerFormElement = document.querySelector(".new_player-form");
        newPlayerFormElement.style.display = "none";
    },
    createNewPlayer(newPlayer) {

        let playerTemplateElement = document.querySelector(".player-tpl");
        let newPlayerToClone = playerTemplateElement.content.cloneNode(true);

        newPlayerToClone.querySelector(".player-row").dataset.playerId = newPlayer.id;
        newPlayerToClone.querySelector(".name_link").textContent = newPlayer.name;
        newPlayerToClone.querySelector(".player-score").textContent = newPlayer.score;


        let listElement = document.querySelector(".new_player-tpl-container");
        listElement.appendChild(newPlayerToClone);

        scoresSheet.hydeNewPlayerForm();
        scoresSheet.init();
    },
    addPointsToPlayer(evt) {
        evt.preventDefault();

        console.log("add points");

    },
    removePointsToPlayer(evt) {
        evt.preventDefault();

        console.log("remove points");

    },
}