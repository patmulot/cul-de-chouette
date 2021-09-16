const messenger = {

    'init': function () {
        let closeMessengerButton = document.querySelector(".messaging-close_button");
        closeMessengerButton.addEventListener("click", messenger.handleClickOnCloseMessages);

        let openMessengerButton = document.querySelector(".display_messenger-button");
        openMessengerButton.addEventListener("click", messenger.handleClickOnOpenMessages);
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
        messengerElement.style.display = "flex";
        setTimeout(function () {
            messengerElement.classList.remove("messaging-container-active");
        }, 300);
        let openMessengerButton = document.querySelector(".display_messenger-button");
            openMessengerButton.classList.toggle("display_messenger-button-active");
    },
}