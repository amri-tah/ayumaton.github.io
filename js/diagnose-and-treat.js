// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    clearBox();
    let botHtml = '<div class="bot-message"><div><span>'+ botResponse +'</span></div></div><div class="bot-images"><img src="../images/Diagnose & Treat 1.jpg"><img src="../images/Diagnose & Treat 2.jpg"><img src="../images/Diagnose & Treat 3.jpg"></div>';
    $("#messages").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse() {
    let userText = $("#dnt-input").val();
    $("#dnt-input").val("");
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
$("#dnt-input").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});