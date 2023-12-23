// Retrieves the response
function getHardResponse(userText) {

    let botResponse = getBotResponse(userText);
    let botHtml = '<div class="bot-message"><div><span>'+ botResponse +'</span></div></div>';
    $("#messages").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#veda-input").val();

    if (userText == "") {
        userText = "Hello!";
    }

    let userHtml = '<div class="user-message"><div><span>'+ userText +'</span></div></div>';

    $("#veda-input").val("");
    $("#messages").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    
    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<div class="user-message"><div><span>'+ sampleText +'</span></div></div>';

    $("#veda-input").val("");
    $("#messages").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}


function sendButton() {
    getResponse();
}

// Press enter to send a message
$("#veda-input").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});