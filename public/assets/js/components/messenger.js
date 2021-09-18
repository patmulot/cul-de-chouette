const messenger = {

    'init': function () {
        let closeMessengerButton = document.querySelector(".messaging-close_button");
        closeMessengerButton.addEventListener("click", messenger.handleClickOnCloseMessages);

        let openMessengerButton = document.querySelector(".display_messenger-button");
        openMessengerButton.addEventListener("click", messenger.handleClickOnOpenMessages);

        // // SOCKET FOR MESSAGES ------------------------------------------
        // let socket = io();
        // let messages = document.getElementById('messages_list');
        // let form = document.getElementById('message_form');
        // let input = document.getElementById('message_input');
        // form.addEventListener('submit', function (e) {
        //     e.preventDefault();
        //     if (input.value) {
        //         socket.emit('chat message', input.value);
        //         input.value = '';
        //     }
        // });
        // socket.on('chat message', function (msg) {
        //     let item = document.createElement('li');
        //     item.textContent = msg;
        //     messages.appendChild(item);
        //     window.scrollTo(0, document.body.scrollHeight);
        // });
        // // SOCKET FOR MESSAGES ------------------------------------------
    },
    handleClickOnCloseMessages(evt) {
        evt.preventDefault();
        let messengerElement = document.querySelector(".messaging-container");
        messengerElement.classList.toggle("messaging-container-active");
        let openMessengerButton = document.querySelector(".display_messenger-button");
        openMessengerButton.classList.remove("display_messenger-button-active");
        setTimeout(function () {
            openMessengerButton.style.display = "flex";
        }, 300);
    },
    handleClickOnOpenMessages(evt) {
        evt.preventDefault();
        let messengerElement = document.querySelector(".messaging-container");
        let openMessengerButton = document.querySelector(".display_messenger-button");
        openMessengerButton.classList.toggle("display_messenger-button-active");
        messengerElement.classList.remove("messaging-container-active");
        setTimeout(function () {
        messengerElement.style.display = "flex";
        openMessengerButton.style.display = "none";
            // openMessengerButton.style.display = "none";
        }, 300);
    },
}