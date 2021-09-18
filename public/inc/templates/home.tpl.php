<?php
// récupération présentation DB
$sql = '
SELECT *
FROM `cdc_presentation`
';

// methode query pour stocker le résultat de ma requete dans la variable $pdoStatement
$pdoStatement = $pdo->query($sql);
$presentation = $pdoStatement->fetchAll(PDO::FETCH_ASSOC);
?>
<article class="container article">
        <h1><?= $presentation[0]['main_title']; ?></h1>
        <h2><?= $presentation[0]['title']; ?></h2>
        <p><?= $presentation[0]['content']; ?></p>
</article>