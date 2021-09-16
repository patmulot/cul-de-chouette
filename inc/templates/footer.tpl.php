    <?php 
    require __DIR__.'/messenger.tpl.php';
    ?>


    </main>
    <footer class="footer container-fluid">
        <nav class="nav-footer">
            <ul class="row footer_links-container">
                <li class="footer_link col-12 col-sm-6">
                    <a href="index.php?page=home">
                        <img class="header_logo-img" class="logo" src="img/dice_icon.ico" alt="LOGO">
                        CdC
                    </a>
                </li>
                <li class="footer_link col-12 col-sm-6">
                    <a href="index.php?page=game">Nouvelle partie
                        <i class="fas fa-dice dice_icon"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </footer>
    <script src="js/iaPlayer1.js"></script>
    <script src="js/styleJs.js"></script>
    <script src="js/dices.js"></script>
    <script src="js/figures.js"></script>
    <script src="js/scores.js"></script>
    <script src="js/rules.js"></script>
    <script src="js/gamble.js"></script>
    <script src="js/components/burger.js"></script>
    <script src="js/components/scoresSheet.js"></script>
    <script src="/socket.io/socket.io.js"></script>
    <script src="js/components/messenger.js"></script>
    <script src="js/app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js" integrity="sha384-lpyLfhYuitXl2zRZ5Bn2fqnhNAKOAaM/0Kr9laMspuaMiZfGmfwRNFh8HlMy49eQ" crossorigin="anonymous"></script>
</body>
</html>