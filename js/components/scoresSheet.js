const scoresSheet = {
    players: [],
    currentPlayerId: 0,
    currentPlayerName: "Nouveau Joueur",
    currentPlayerScore: 0,
    isNewPlayerAdd: true,
    isPlayerScoreAdd: false,
    currentPlayerIdToUpdate: 0,
    currentScoreElementToUpdate: "",
    currentScoreCoef: 1,
    winner: "",
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
        let scoreInput = document.querySelector("#score_input");
        scoreInput.style.display = "none";
        let newPlayerFormElement = document.querySelector(".new_player-form");
        newPlayerFormElement.style.display = "flex";
        let playerNameInputElement = document.querySelector("#new_player-form-name");
        playerNameInputElement.style.display = "flex";
        playerNameInputElement.focus();
    },
    validateNewPlayer(evt) {
        if (scoresSheet.isNewPlayerAdd) {
            let playerNameInputElement = document.querySelector("#new_player-form-name");
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
        } else if (scoresSheet.isPlayerScoreAdd) {
            let currentPlayerScore = parseInt(document.querySelector("#score_input").value);
            for (let onePlayer of scoresSheet.players) {
                if (parseInt(onePlayer.id) == scoresSheet.currentPlayerIdToUpdate) {
                    onePlayer.score += (currentPlayerScore * scoresSheet.currentScoreCoef);
                    scoresSheet.updateScore(onePlayer.score);
                    scoresSheet.checkEndGame();
                }
            }
        }
    },
    hydeNewPlayerForm(evt) {
        if (evt) {
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

        let allPlayerRowsElements = document.querySelectorAll(".player-row");
        setTimeout(function () {
            allPlayerRowsElements[allPlayerRowsElements.length - 1].style.opacity = 1;
        }, 50);
    },
    addPointsToPlayer(evt) {
        evt.preventDefault();
        scoresSheet.currentScoreCoef = 1;
        scoresSheet.currentScoreElementToUpdate = evt.currentTarget.closest(".player-row").querySelector(".player-score");
        scoresSheet.currentPlayerIdToUpdate = evt.currentTarget.closest(".player-row").dataset.playerId;
        scoresSheet.editScore();
    },
    removePointsToPlayer(evt) {
        evt.preventDefault();
        scoresSheet.currentScoreCoef = -1;
        scoresSheet.currentScoreElementToUpdate = evt.currentTarget.closest(".player-row").querySelector(".player-score");
        scoresSheet.currentPlayerIdToUpdate = evt.currentTarget.closest(".player-row").dataset.playerId;
        scoresSheet.editScore();
    },
    editScore() {
        scoresSheet.isNewPlayerAdd = false;
        scoresSheet.isPlayerScoreAdd = true;
        let playerNameInputElement = document.querySelector("#new_player-form-name");
        playerNameInputElement.style.display = "none";
        let newPlayerFormElement = document.querySelector(".new_player-form");
        newPlayerFormElement.style.display = "flex";
        let scoreInput = document.querySelector("#score_input");
        scoreInput.style.display = "flex";
        scoreInput.focus();
    },
    updateScore(newScore) {
        scoresSheet.currentScoreElementToUpdate.textContent = newScore;
        scoresSheet.hydeNewPlayerForm();
        document.querySelector("#score_input").value = "";
        scoresSheet.isNewPlayerAdd = true;
        scoresSheet.isPlayerScoreAdd = false;
    },
    checkEndGame() {
        for (let onePlayer of scoresSheet.players) {
            if (onePlayer.score >= 343) {
                scoresSheet.winner = onePlayer.name;
                scoresSheet.isNewPlayerAdd = false;
                scoresSheet.isPlayerScoreAdd = false;
                scoresSheet.displayEndGame();
            }
        }
    },
    displayEndGame() {
        scoresSheet.displayNewPlayerForm();
        document.querySelector("#winner").textContent = scoresSheet.winner;
        document.querySelector(".submit-player_name").style.display = "none";
        document.querySelector("#new_player-form-name").style.display = "none";
        document.querySelector("#endgame_message-container").style.display = "flex";
        // document.querySelector(".new_player-form-background").style.zIndex = 99;
        setTimeout(function () {
            document.querySelector("#endgame_message-container").style.opacity = 1;
            document.querySelector(".new_player-form-background").style.backgroundColor = "black";
        }, 100);
    }
}