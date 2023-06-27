// Disable right-click context menu
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

// Custom message when trying to select content
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey || event.metaKey) {
        // Ctrl key (Windows) or Command key (Mac) + C
        if (event.keyCode === 67) {
            event.preventDefault();
            displayCopyMessage();
        }
    }
});

// Display custom message
function displayCopyMessage() {
    var copyMessage = document.createElement("div");
    copyMessage.classList.add("copy-message");

    var copyMessageContent = document.createElement("div");
    copyMessageContent.classList.add("copy-message-content");

    var icon = document.createElement("i");
    icon.classList.add("fas", "fa-exclamation-circle");

    var message = document.createElement("p");
    message.textContent = "You Cannot Copy Anything From Here.";

    copyMessageContent.appendChild(icon);
    copyMessageContent.appendChild(message);
    copyMessage.appendChild(copyMessageContent);
    document.body.appendChild(copyMessage);

    // Remove the message after a certain time (e.g., 3 seconds)
    setTimeout(function () {
        document.body.removeChild(copyMessage);
    }, 3000);

    // Speak the message aloud
    speakText("You Cannot Copy Anything From Here.");
}

// Speak text using the Web Speech API
function speakText(text) {
    if ("speechSynthesis" in window) {
        var speech = new SpeechSynthesisUtterance();
        speech.text = text;
        speech.lang = "en-US";

        var voices = speechSynthesis.getVoices();
        var femaleVoice = voices.find(function (voice) {
            return voice.name === "Google UK English Female";
        });

        speech.voice = femaleVoice;

        speechSynthesis.speak(speech);
    }
}

// Preventing keyboard shortcuts
document.addEventListener("keydown", function (event) {
    // Ctrl+U or Command+Option+U (Mac) - View source
    if ((event.ctrlKey || event.metaKey) && (event.keyCode === 85 || event.keyCode === 117)) {
        event.preventDefault();
        displayPreventCopyMessage("Viewing source is not allowed.");
    }

    // Ctrl+Shift+I or Command+Option+I (Mac) - Open developer tools
    if ((event.ctrlKey && event.shiftKey) || (event.metaKey && event.altKey) && (event.keyCode === 73 || event.keyCode === 105)) {
        event.preventDefault();
        displayPreventCopyMessage("Opening developer tools is not allowed.");
    }

    // Ctrl+S or Command+S (Mac) - Save page
    if ((event.ctrlKey || event.metaKey) && (event.keyCode === 83 || event.keyCode === 115)) {
        event.preventDefault();
        displayPreventCopyMessage("Saving the page is not allowed.");
    }
});

// Display custom message
function displayPreventCopyMessage(message) {
    var preventCopyContainer = document.createElement("div");
    preventCopyContainer.classList.add("prevent-copy-container");

    var preventCopyContent = document.createElement("div");
    preventCopyContent.classList.add("prevent-copy-content");

    var messageElement = document.createElement("p");
    messageElement.textContent = message;

    preventCopyContent.appendChild(messageElement);
    preventCopyContainer.appendChild(preventCopyContent);
    document.body.appendChild(preventCopyContainer);

    // Remove the message after a certain time (e.g., 3 seconds)
    setTimeout(function () {
        document.body.removeChild(preventCopyContainer);
    }, 3000);
}