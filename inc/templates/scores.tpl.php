<article class="container article">
    <h1 class="row">TOP SCORES</h1>
    <div class="row">
        <ul class="container">
            <li class="row">
                <div class="col-3 titles">PLAYERS</div>
                <div class="col-3 titles">TOTAL SCORES</div>
                <div class="col-3 titles">ROUNDS</div>
                <div class="col-3 titles">RANK</div>
            <hr>
            </li>
            
            <?php 
            $nbr = 1;
            foreach ($topScore as $key => $value): ?>
                <li class="row">
                    <div class="col-3">
                        <a href="index.php?page=stats&player=<?= $topScore[$key]['player'] ?>" class="name_link">
                            <?= $topScore[$key]['player']; ?>
                        </a>
                    </div>
                    <div class="col-3">
                        <?= $topScore[$key]['score']; ?>
                    </div>
                    <div class="col-3">
                        <?= $topScore[$key]['tr']; ?>
                    </div>
                    <div class="col-3">
                        <?= $nbr; ?>
                    </div>                    
                </li>
                <hr>
            <?php $nbr++; endforeach; ?>
        </ul>
        <!--
        <div class="button_add_score col-3">
            <a href="index.php?page=scores" class="col-12 col-sm-3">Add score ?</a>
        </div>
            -->
    </div>
        
</article>