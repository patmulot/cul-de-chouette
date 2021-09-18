<?php
// connexion db :
function connectToDb()
{
    // connexion cul de chouette DB:
    $dsn = 'mysql:dbname=cul_de_chouette_doc;host=localhost;charset=UTF8mb4';
    //! ATTENTION LES INFOS DE CO NE SONT PAS BONNES ET N'ONT PAS FONCTIONNE
    $user = 'explorateur';
    $password = 'Ereul9Aeng';
    // objet PDO pour se connecter:
    $pdoInFunction = new PDO(
        $dsn,
        $user,
        $password,
        array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING),
    );
    return $pdoInFunction;
};
$pdo = connectToDb();
//---------------------------------------
// --------- PAGE SCORES : ---------
//---------------------------------------
// RECUP SCORES DANS AL BDD :
$sqlTopScore = '
SELECT *
FROM `cdc_score_rec`
ORDER BY `score` DESC
';
$pdoTopScoresStatement = $pdo->query($sqlTopScore);
$topScore = $pdoTopScoresStatement->fetchAll(PDO::FETCH_ASSOC);
// AJOUT NOUVEAUX SCORES DANS AL BDD :
if (isset($_POST['playerScore'])) { // si la case score est remplie
    $newName = $_POST['playerName'];
    $newScore = $_POST['playerScore'];
    $newTr = $_POST['rounds'];
    // requete pour insérer les nouvelles données dans la table cdc_score_rec
    $sqlNewScore = '
    INSERT INTO  `cdc_score_rec` (tr, player, score) 
    VALUES ("'.$newTr.'","'.$newName.'","'.$newScore.'")';
    // execution de la requete condition : si elle n'est pas false
    if ($pdo->exec($sqlNewScore)) {
        // alors redirection vers la page score avec le nom du joueur courrant
        header('Location: index.php?page=scores');//&name='.$newName
    }
}
// DECLARATION DE LA VARIABLE NOM DE JOUEUR VIDE
$playerName;
// INSTRUCTION VARIABLE NOM DE JOUEUR EN FONCTION DES CONDITIONS :
if (isset($_POST['playerName'])) {
    $playerName = $_POST['playerName'];
} elseif (isset($_GET['player'])) {
    $playerName = $_GET['player'];
} else {
    $playerName = 'Select';
};
//---------------------------------------
// --------- PAGE STATS : ---------
//---------------------------------------
// RECUPERATION DES VALEURS DU $_POST SI le joueur à bien saisi son nom
// recup de la liste des joueurs dans la DB stats
$sqlAllPlayerList = '
SELECT `player`
FROM `cdc_player_stats`
';
$AllPlayerListStatement = $pdo->query($sqlAllPlayerList);
$AllPlayerList = $AllPlayerListStatement->fetchAll(PDO::FETCH_ASSOC);
if (isset($playerName)) {
    //---------------------------
    // RECUP DES ANCIENNES STATS :
    //---------------------------
    $sqlPreviousPlayerStats = "
    SELECT *
    FROM `cdc_player_stats`
    WHERE `player`='" . $playerName . "'
    ";
    $pdoPreviousPlayerStatsStatement = $pdo->query($sqlPreviousPlayerStats);
    $PreviousPlayerStats = $pdoPreviousPlayerStatsStatement->fetchAll(PDO::FETCH_ASSOC);
    // --------------------------------------------------------------------
    // RECUPERATION DES ANCIENNES STATS DANS UN TABLEAU DEPUIS LA DB :
    // --------------------------------------------------------------------
    $figStatsString = $PreviousPlayerStats[0]['figstats'];
    $siropStatsString = $PreviousPlayerStats[0]['siropstats'];
    // Conversion string en tableau pour calcul :
    $figStatsTab = explode(",", $figStatsString);
    array_pop($figStatsTab);
    $siropStatsTab = explode(",", $siropStatsString);
    array_pop($siropStatsTab);
    // si la case score joueur existe :
    if (isset($_POST['playerScore'])) {
        // RECUPERATION DES STATS FIGURES DANS UN TABLEAU DEPUIS $_POST :
        $newFigStatsString = $_POST['figstats'];
        // Conversion string en tableau pour calcul :
        $newFigStatsTab = explode(",", $newFigStatsString);
        $newsiropStatsString = $_POST['siropstats'];
        $newsiropStatsTab = explode(",", $newsiropStatsString);
    } else {
        $newFigStatsString = '0,0,0,0,0,0';
        // Conversion string en tableau pour calcul :
        $newFigStatsTab = explode(",", $newFigStatsString);
        $newsiropStatsString = '0,0,0';
        $newsiropStatsTab = explode(",", $newsiropStatsString);
    };

    // initialisation du tableau total des stats figures :
    $totalFigStatsTab = [];
    for($i = 0; $i < count($figStatsTab); $i++) {
        // declaration de la variable $result additionnant les anciennes et nouvelles stats :
        $resultFig = $figStatsTab[$i]+$newFigStatsTab[$i];
        // push des valeurs de la db dans le tableau total :
        array_push($totalFigStatsTab, $resultFig);
        };
    $totalSiropStatsTab = [];
    for($i = 0; $i < count($siropStatsTab); $i++) {
        // declaration de la variable $result additionnant les anciennes et nouvelles stats :
        $resultSirop = $siropStatsTab[$i]+$newsiropStatsTab[$i];
        // push des valeurs de la db dans le tableau total :
        array_push($totalSiropStatsTab, $resultSirop);
        };
    // Rajout de la case vide pour la corrélation avec les valeurs envoyées du $_POST :
    array_push($totalFigStatsTab, '');
    array_push($totalSiropStatsTab, '');
    // création de la variable a renvoyer dans la db en string :
    $figStatToDb = implode(",",$totalFigStatsTab);
    $siropStatToDb = implode(",",$totalSiropStatsTab);
    // -------------(même chose que pour les figures)----------------------
    // RECUPERATION DES STATS SIROP DANS UN TABLEAU DEPUIS LA DB :
    // --------------------------------------------------------------------
}
if (isset($_POST['playerScore'])) {
    //---------------------------
    // RECUP DES ANCIENNES STATS :
    //---------------------------
    $sqlPreviousPlayerStats = "
    SELECT *
    FROM `cdc_player_stats`
    WHERE `player`='" . $playerName . "'
    ";
    $pdoPreviousPlayerStatsStatement = $pdo->query($sqlPreviousPlayerStats);
    $PreviousPlayerStats = $pdoPreviousPlayerStatsStatement->fetchAll(PDO::FETCH_ASSOC);
    // RECUP DES ANCIENNES STATS :
    $previousScore = $PreviousPlayerStats[0]['score'];
    $previousRoundstats = $PreviousPlayerStats[0]['rounds'];
    $previousFigstats = $PreviousPlayerStats[0]['figstats'];
    $previousSiropstats = $PreviousPlayerStats[0]['siropstats'];
    var_dump($PreviousPlayerStats[0]);

    // RECUPERATION DES STATS FIGURES DANS UN TABLEAU DEPUIS LA DB :
    $figStatsTab = [$PreviousPlayerStats[0]['figstats']];
    $siropStatsTab = [$PreviousPlayerStats[0]['siropstats']];
    
    // Declaration des nouvelles stats :
    $newName = $playerName;
    $uptdateScore = $_POST['playerScore'] + $previousScore;
    $newScore = $_POST['playerScore'];
    $updateRoundstats = $_POST['rounds'] + $previousRoundstats;
    $newRoundstats = $_POST['rounds'];
    $uptdateFigstats = $figStatToDb;
    $newFigstats = $_POST['figstats'];
    $uptdateSiropstats = $siropStatToDb;
    $newSiropstats = $_POST['siropstats'];

    //----------------------------------
    // CHECK DE L EXISTENCE DU JOUEUR:
    //----------------------------------
    $playerChecked;
    // pour chaque joueurs enregistrés
    for ($index = 0; $index < count($AllPlayerList); $index++) {
        // si le nom du joueur actuel est égal a un nom de joueur enregistré
        if ($AllPlayerList[$index]['player'] === $playerName) {
            $playerChecked = 1;
            $test = 'CE JOUEUR EXISTE DEJA';
            // echo $playerChecked;
        } else {
            // Sinon ce joueur n'existe pas et il faut le créer
            $playerChecked = 0;
            $test = 'CE JOUEUR EXISTE PAS';
            // echo $playerChecked;
        }
    };
    // entrée dans la DB si le joueur existe ou pas :
    if ($playerChecked == 1) {
        //---------------------------
        //--- UPDATE EXISTANT PLAYER
        //---------------------------
        // et requête pour mettre a jour la db en fonction des nouveaux résultats
        $sqlNewStatsUpdate ='
        UPDATE cdc_player_stats 
        SET score="'.$uptdateScore.'", 
        figstats="'.$uptdateFigstats.'",
        rounds = "'.$updateRoundstats.'",
        siropstats = "'.$uptdateSiropstats.'" 
        WHERE player="'.$newName.'"';
        return $pdo->exec($sqlNewStatsUpdate);
    } else {
        //---------------------------
        // AJOUT STATS DANS LA DB :
        //---------------------------
        // requete pour insérer la nouvelle entrée dans la db stats
        $sqlNewStats = '
        INSERT INTO  `cdc_player_stats` (player, figstats, rounds, siropstats, score) 
        VALUES ("'.$newName.'", "'.$newFigstats.'", "'.$newRoundstats.'", "'.$newSiropstats.'", "'.$newScore.'")';
        return $pdo->exec($sqlNewStats);
    };
};
//---------------------------
//--- RECUP PLAYER STATS ----
//---------------------------
$sqlPlayerStats = "
    SELECT *
    FROM `cdc_player_stats`
    WHERE `player`='" . $playerName . "'
    ";
    $pdoPlayerStatsStatement = $pdo->query($sqlPlayerStats);
    $PlayerStats = $pdoPlayerStatsStatement->fetchAll(PDO::FETCH_ASSOC);
