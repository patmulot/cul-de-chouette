<article class="container article scores_sheet-container">
    <h1 class="row page-title">FEUILLE DE SCORE</h1>
    <button class="max_score-button">score max : <span class="score_max">343</span><input class="edit-score_max" type="number"></button>
    <div class="row">
        <ul class="score-list">
            <li class="row score-header">
                <div class="col-4 titles">JOUEURS</div>
                <div class="col-3 titles">TOTAL</div>
                <div class="col-3 titles">ACTIONS</div>
                <div class="col-2 titles"> - </div>
            <hr>
            </li>


            <div class="new_player-tpl-container">
            
                <template class="player-tpl">
                <li class="row player-row">
                    <div class="col-4 player-name">
                        <span class="name_link">
                            Nouveau Joueur
                        </span>
                    </div>
                    <div class="col-3 player-score">
                        000
                    </div>
                    <div class="col-3 points-actions">
                        <button class="points-add"><h2>+</h2></button>
                        <button class="points-remove"><h2>-</h2></button>
                    </div>
                    <div class="col-2 player-remove">
                        <button class="player-remove-button"><h2>x</h2></button>
                    </div>
                    <hr>                  
                </li>
                </template>

            </div>


            <li class="row player-add">
                <div class="player-add-container">  
                    <span>AJOUTER UN JOUEUR <div>+</div></span>
                </div>            
            </li>


        </ul>
    </div>
</article>
<div class="new_player-form">
    <div class="new_player-form-background">
    </div>
    <label for="new_player-form-name">
        <input type="text" id="new_player-form-name" class="new_player-form-inputs" placeholder="Nom du joueur">
        <input type="number" id="score_input" class="new_player-form-inputs">
        <button class="submit-player_name">VALIDER</button>
        <div id="endgame_message-container">
            <p id="endgame_message">
                <h1>
                    PARTIE TERMINEE
                    <br><br>
                    Bravo
                    <br>
                    <span id="winner"></span>
                </h1>
            </p>
        </div>
    </label>
</div>