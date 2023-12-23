// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    clearBox();
    let botHtml = '<div class="bot-message"><div><span>'+ botResponse +'</span></div></div>';
    $("#messages").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse() {
    let userText = $("#paper-input").val();
    $("#paper-input").val("");
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    
    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
}

function clearBox(){
    document.getElementById("messages").innerHTML = "";
}

function sendButton() {
    getResponse();
}

// Press enter to send a message
$("#paper-input").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});