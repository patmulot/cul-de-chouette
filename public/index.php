<?php 
require __DIR__ . '/inc/datadb.php';
$currentPage; 
if (!empty($_GET['page'])) {
    $currentPage = $_GET['page'];
} else {
    $currentPage = 'home';
};
require __DIR__ . '/inc/templates/header.tpl.php';
require __DIR__ . '/inc/templates/' . $currentPage . '.tpl.php';
require __DIR__ . '/inc/templates/footer.tpl.php';