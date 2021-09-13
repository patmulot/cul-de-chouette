<div class="container game_container">

    <div id="board">
        <div class="dices_table">
            <div class="dice_container dice_container3">
                <div id="dice3" class="dice">
                    <div class="dot fig_mid hidden visible"></div>
                    <div class="dot fig_top_left hidden visible"></div>
                    <div class="dot fig_top_right hidden"></div>
                    <div class="dot fig_mid_left hidden"></div>
                    <div class="dot fig_mid_right hidden"></div>
                    <div class="dot fig_bot_left hidden"></div>
                    <div class="dot fig_bot_right hidden visible"></div>
                </div>
            </div>
            <div class="dice_container dice_container2">
                <div id="dice2" class="dice">
                    <div class="dot fig_mid hidden"></div>
                    <div class="dot fig_top_left hidden visible"></div>
                    <div class="dot fig_top_right hidden visible"></div>
                    <div class="dot fig_mid_left hidden"></div>
                    <div class="dot fig_mid_right hidden"></div>
                    <div class="dot fig_bot_left hidden visible"></div>
                    <div class="dot fig_bot_right hidden visible"></div>
                </div>
            </div>
            <div class="dice_container dice_container1">
                <div id="dice1" class="dice">
                    <div class="dot fig_mid hidden visible"></div>
                    <div class="dot fig_top_left hidden visible"></div>
                    <div class="dot fig_top_right hidden"></div>
                    <div class="dot fig_mid_left hidden"></div>
                    <div class="dot fig_mid_right hidden"></div>
                    <div class="dot fig_bot_left hidden"></div>
                    <div class="dot fig_bot_right hidden visible"></div>
                </div>
            </div>
        </div>
        <div class="scoretable_container">
            <div class="scoretable display_none">
                <h3>Score history :</h3>
                <ul id="score_list">
                </ul>
            </div>
            <input id="view_score_button" type="button" value="S">
        </div>
    </div>
    <div class="gamble_buttons row display_none">
        <div class="col-3"></div>
        <div class="col-1"><i class="fas fa-dice-one gamble_dice gamble_dice_1"></i></div>
        <div class="col-1"><i class="fas fa-dice-two gamble_dice gamble_dice_2"></i></div>
        <div class="col-1"><i class="fas fa-dice-three gamble_dice gamble_dice_3"></i></div>
        <div class="col-1"><i class="fas fa-dice-four gamble_dice gamble_dice_4"></i></div>
        <div class="col-1"><i class="fas fa-dice-five gamble_dice gamble_dice_5"></i></div>
        <div class="col-1"><i class="fas fa-dice-six gamble_dice gamble_dice_6"></i></div>
        <div class="col-3"></div>
        <!-- <input id="gamble_dice_6" type="button" value="Siroter ?"><i class="fas fa-dice-six"></i> -->
    </div>
    <div class="endgame win display_none">
        <div class="endgame-content">
            <h2>Bravo !!!</h2>
            <div class="endgame_img"></div>
            <p>
                tu as gagné avec un score total de <span class="finalScore"></span>.
            </p>
            <form action="index.php?page=scores&name="<?= $playerName; ?> method="post">
                <div>Votre nom : <input class="player_name-input" type="text" name="playerName" /></div>
                <input type="text" name="playerScore" class="hidden_score"/> 
                <input type="text" name="rounds" class="hidden_round_nb"/> 
                <input type="text" name="figstats" class="hidden_fig_stats"/> 
                <input type="text" name="siropstats" class="hidden_sirop_stats"/>
                <input id="submit_score_btn" type="submit" value="Envoyer">
            </form>
            <div class="new_game-link">
                <a href="index.php">retour à la page d'accueil</a>
            </div>
        </div>
    </div>
    <div class="endgame lost display_none">
        <div class="endgame-content lost_game">
            <h2>Perdu</h2>
            <div class="endgame_img"></div>
            <p>
                tu feras mieux la prochaine fois.
            </p>
            <div class="new_game-link">
                <a href="index.php?page=game">Nouvelle partie ? <i class="fas fa-dice dice_icon"></i></a>
            </div>
        </div>
    </div>

    <div class="ia_log">
        <div class="score_style">
            <span class="score_style_ia">Score :</span>
            <span id="score_cell_ia" class="score_style">
                0
            </span>
        </div>
        <p class="current_action"></p>
    </div>

    <div class="score_container row">
        <div  class="col-6 score_style">Tour n° 
            <span id="counter">0</span>
        </div>
        <div class="col-6 score_style">Score 
            <span id="score_cell" class="score_style">0</span>
        </div>
    </div>


    
    <div class="button_container col-12">
        <input id="launcher" type="button" value="Lancer la Chouette">
        <input id="launch_sirop" type="button" value="Siroter ?">
        
        <div  id="ia_hide_button">
            <span>Vous devez attendre votre tour...</span>
        </div>

    </div>




</div>