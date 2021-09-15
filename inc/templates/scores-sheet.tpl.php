<article class="container article scores_sheet-container">
    <h1 class="row">FEUILLE DE SCORE</h1>
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




                <!-- <li class="row player-row">
                    <div class="col-3 player-name">
                        <span class="name_link">
                            Nouveau Joueur 0
                        </span>
                    </div>
                    <div class="col-3 player-score">
                        000
                    </div>
                    <div class="col-3 points-actions">
                        <button class="points-add"><h2>+</h2></button>
                        <button class="points-remove"><h2>-</h2></button>
                    </div>
                    <div class="col-3 player-remove">
                        <button class="player-remove-button"><h2>x</h2></button>
                    </div>
                    <hr>                  
                </li> -->



            </div>

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
        <input type="text" id="new_player-form-name" placeholder="Nom du joueur">
        <button class="submit-player_name">VALIDER</button>
    </label>
</div>