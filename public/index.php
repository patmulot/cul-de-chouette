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
// require __DIR__.'/chat-client.html';
require __DIR__.'/inc/templates/footer.tpl.php';
?>

<!-- ------------------------------------------------------------------------- -->
<!-- ---------------- LOADING MESSENGER -------------------------------- -->
<!DOCTYPE html>
<html>
  <head>
    <title>PHP Websocket Chat Demo</title>
    <link rel="stylesheet" href="chat-client.css"/>
    <!-- <link rel="stylesheet" href="assets/css/messenger.css"> -->
    <!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"> -->
    <script src="assets/js/components/chat-client.js"></script>
  </head>
  <body>
    <div class="messaging-container messaging-container-active">
        <div class="messaging-header">
            <h3>MESSAGERIE</h3>
            <span class="messaging-close_button">x</span>
        </div>
		<ul id="messages_list">
		</ul>





      <form id="user_name_form" onsubmit="return chat.start()">
		<textarea name="user_name_form-set" id="user_name_form-set" class="message_input-style" placeholder="Enter your name" value="bliebleblu" required rows="1"></textarea>
            <button id="user_name_form-go" class="messenger_buttons">
                <i class="fas fa-paper-plane"></i>
            </button>
      </form>

      <form id="message_form" onsubmit="return chat.send()">
        <!-- <input type="text" id="message_form-text" placeholder="Enter message" required/> -->
		<textarea name="message_input" id="message_form-text" class="message_input-style" placeholder="Enter message" required rows="auto"></textarea>
            <button id="message_form-go" class="messenger_buttons">
                <i class="fas fa-paper-plane"></i>
            </button>
      </form>
    </div>
    <div class="display_messenger-button">
        <i class="fas fa-comment"></i>
    </div>















    <!-- <div class="messaging-container messaging-container-active">
        <div class="messaging-header">
            <h3>MESSAGERIE</h3>
            <span class="messaging-close_button">x</span>
        </div>
        <ul id="messages_list">
        </ul>

		<form id="user_name_form" onsubmit="return chat.start()">
        	<input type="text" id="user_name_form-set" placeholder="What is your name?" value="John Doe" required/>
            <button id="user_name_form-go">
                <i class="fas fa-paper-plane"></i>
            </button>
      	</form>
        <form id="message_form" action="">
            <textarea name="message_input" id="message_input" rows="auto"></textarea>
            <button>
                <i class="fas fa-paper-plane"></i>
            </button>
        </form>
    </div>
    <div class="display_messenger-button">
        <i class="fas fa-comment"></i>
    </div> -->






    <!-- <script src="/socket.io/socket.io.js"></script>
    
    <script src="assets/js/iaPlayer1.js"></script>
    <script src="assets/js/styleJs.js"></script>
    <script src="assets/js/dices.js"></script>
    <script src="assets/js/figures.js"></script>
    <script src="assets/js/scores.js"></script>
    <script src="assets/js/rules.js"></script>
    <script src="assets/js/gamble.js"></script>
    <script src="assets/js/components/burger.js"></script>
    <script src="assets/js/components/scoresSheet.js"></script>
    <script src="/socket.io/socket.io.js"></script>
    <script src="assets/js/components/messenger.js"></script>
    <script src="assets/js/app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js" integrity="sha384-lpyLfhYuitXl2zRZ5Bn2fqnhNAKOAaM/0Kr9laMspuaMiZfGmfwRNFh8HlMy49eQ" crossorigin="anonymous"></script> -->
  </body>
</html>
