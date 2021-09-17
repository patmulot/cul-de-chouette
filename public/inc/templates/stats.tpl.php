<article class="container article">
    <h1 class="col-12">Player Statistic</h1>

    <form name="form">
        <select name="<?= $playerName; ?>" id="player-select" onChange="parent.window.location=this.value" >
            <option value='' selected="selected" id="selected"><?= $playerName ?></option>
            <?php foreach ($AllPlayerList as $key => $value) : ?>
            <option value="index.php?page=stats&player=<?= $AllPlayerList[$key]['player']; 
            ?>"><?= $AllPlayerList[$key]['player']; ?></option>
            <?php endforeach; ?>
        </select>
    </form>
    <div class="row">
        <ul class="col-12 row">
                <li>
                    <div class="col-4"><span>Player name : 
                        <?= $PlayerStats[0]['player']; ?></span>
                    </div>                  
                </li>
                <hr>
                <li>
                    <div class="col-4"><span>Total score :</span>
                        <?= $PlayerStats[0]['score']; ?>points
                    </div>                  
                </li>
                <hr>
                <li>
                    <div class="col-4"><span>Total rounds :</span>
                        <?= $PlayerStats[0]['rounds']; ?>rounds
                    </div>                  
                </li>
                <hr>
                <li>
                    <div class="col-4"><span>Moyenne de </span>
                        <?php if(!($PlayerStats[0]['score']==0)) {
                            echo intval($PlayerStats[0]['score'] / $PlayerStats[0]['rounds']) . ' ';
                        } else { echo '- ';} ?>points par tour
                    </div>                  
                </li>
                <hr>
                <li>
                    <div class="row"><span>Score by rounds :</span>
                        <ul class="col-6">
                            <li>Nombre de "Cul de chouette" :</li>
                            <li>Nombre de "Chouette velute" :</li>
                            <li>Nombre de "velute" :</li>
                            <li>Nombre de "Chouette" :</li>
                            <li>Nombre de "Suite" :</li>
                            <li>Nombre de tour ratés :</li>
                        </ul>
                        <ul class="col-6"> <?php 
                        foreach($totalFigStatsTab as $figure) {
                            echo '<li>';
                            echo $figure;
                            echo '</li>';
                            }; ?> 
                        </ul>
                    </div>                  
                </li>
                <hr>
                <li>
                    <div class="row"><span>Sirotage :</span>
                    <ul class="col-6">
                        <li>Nombre total de sirotages : <?= "TODO" ?></li>
                        <li>Nombre de sirotages "réussis" :</li>
                        <li>Nombre de sirotages "échoués" :</li>
                    </ul>
                    <ul class="col-6"> <?php 
                        foreach($totalSiropStatsTab as $sirop) {
                            echo '<li>';
                            echo $sirop;
                            echo '</li>';
                            }; ?> </ul>
                    </div>                  
                </li>
                <hr>
        </ul>
        <!--
        <div class="button_add_stats col-3">
            <a href="index.php?page=stats" class="col-12 col-sm-3">View stats ?</a>
        </div>
        -->
    </div>
        
</article>