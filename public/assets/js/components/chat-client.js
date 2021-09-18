let chat = {
    swapform: function (direction) {
        if (direction) {
            document.getElementById("user_name_form").style.display = "none";
            document.getElementById("message_form").style.display = "flex";
        }
        else {
            document.getElementById("message_form").style.display = "none";
            document.getElementById("user_name_form").style.display = "flex";
            document.getElementById("user_name_form-go").disabled = false;
        }
    },
    // host: "ws:localhost:8080/",
    host: "ws:ip-172-31-26-91/",
    // host: "ws:ec2-54-211-156-227.compute-1.amazonaws.com:8080/",
    name: "",
    socket: null,
    htmltxt: null,
    currentUserName: false,
    start: function () {
        document.getElementById("user_name_form-go").disabled = true;
        if (chat.htmltxt == null) {
            chat.htmltxt = document.getElementById("message_form-text");
        }
        chat.socket = new WebSocket(chat.host);
        chat.socket.onopen = function (evt) {
            chat.name = document.getElementById("user_name_form-set").value;
            chat.swapform(1);
        };
        chat.socket.onclose = function (evt) {
            chat.swapform(0);
        };
        chat.socket.onmessage = function (evt) {
            let msg = JSON.parse(evt.data),
                row = document.createElement("li");
            row.innerHTML = `<div class="sender-name">${msg.n}</div><div class="sender-msg">${msg.m}</div>`;
            if (chat.name != "") {
                row.classList.add("current_user-message");
            }
            document.getElementById("messages_list").appendChild(row);
        };
        chat.socket.onerror = function (e) {
            chat.swapform(0);
            console.log(e);
            alert(`Failed to connect to ${chat.host}`);
        };
        return false;
    },
    send: function () {
        let message = JSON.stringify({
            n: chat.name,
            m: chat.htmltxt.value
        });
        chat.htmltxt.value = "";
        chat.socket.send(message);
        return false;
    }
};