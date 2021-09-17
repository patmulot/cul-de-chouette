<?php
$sqlRules = '
SELECT *
FROM `cdc_rules`
';
$pdoRulesStatement = $pdo->query($sqlRules);
$rules = $pdoRulesStatement->fetchAll(PDO::FETCH_ASSOC);
//------------------------------
$sqlCombinations = '
SELECT *
FROM `cdc_combinations`
';
$pdoCombStatement = $pdo->query($sqlCombinations);
$combinations = $pdoCombStatement->fetchAll(PDO::FETCH_ASSOC);
?>



<article class="container article">
    <section>
        <h1><?= $rules[0]['title']; ?></h1>
        <p><?= $rules[0]['content']; ?></p>
    </section>
            <hr>
            <h1><?= $combinations[0]['main_title']; ?></h1>
        <?php
        foreach ($combinations as $key => $value): ?>
            <section>
                <h2><?= $combinations[$key]['title']; ?></h2>
                <p><?= $combinations[$key]['content']; ?></p>
            </section>
            <hr>
        <?php endforeach; ?>
    </section>
</article>