<?php 
require __DIR__.'/inc/datadb.php';
$currentPage; 
if (!empty($_GET['page'])) {
    $currentPage = $_GET['page'];
} else {
    $currentPage = 'home';
};
require __DIR__.'/inc/templates/header.tpl.php';
require __DIR__.'/inc/templates/' . $currentPage . '.tpl.php';
require __DIR__.'/inc/templates/footer.tpl.php';
?>



<html>
    <head>
        <style>
            input, button { padding: 10px; }
        </style>
    </head>
    <body>
        <input type="text" id="message" />
        <button onclick="transmitMessage()">Send</button>
        <script>
            // Create a new WebSocket.
            var socket  = new WebSocket('ws://localhost:8080');

            // Define the 
            var message = document.getElementById('message');

            function transmitMessage() {
                socket.send( message.value );
            }

            socket.onmessage = function(e) {
                alert( e.data );
            }
        </script>
    </body>
</html>