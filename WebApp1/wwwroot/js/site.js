﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

//globals
const triggerWord = 'hello';
function onStartRecipe()
{
    var msg = new SpeechSynthesisUtterance("Let's get cooking!");
    window.speechSynthesis.speak(msg);
}

function onStopRecipe()
{
    var msg = new SpeechSynthesisUtterance("Stopped. Thank you for cooking with us!");
    window.speechSynthesis.speak(msg);
}

function onPauseRecipe()
{
    var msg = new SpeechSynthesisUtterance("Paused! Press Start when ready!");
    window.speechSynthesis.speak(msg);
}

//.. Execute given command
function doCommand(strCommand) {
    var msg = new SpeechSynthesisUtterance("Sorry! I did not understand your request!");
    if (strCommand.includes("start recipe"))
        onStartRecipe();
    else if (strCommand.includes("stop"))
        onStopRecipe();
    else if (strCommand.includes("pause"))
        onPauseRecipe();
    else
        window.speechSynthesis.speak(msg);
}

//.. Speech parser
function parseSpeech(speech) {
    var arr = speech.split(triggerWord);

    if (arr.length = 2) {   //Note if less than 2, there was no triggerword. If greater than 2, multiple triggerwords detected
        $('#textFromSpeech').empty();
        $('#textFromSpeech').val(arr[1] + " - Parsed");
    }
    else {
        $('#textFromSpeech').empty();
        $('#textFromSpeech').val("Parsing Failed!");
    }

    doCommand(arr[1]);
}

function say(m) {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[2];
    msg.voiceURI = "native";
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 0.8;
    msg.text = m;
    msg.lang = 'en-US';
    speechSynthesis.speak(msg);
}

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
if ('SpeechRecognition' in window)
{
    // speech recognition API supported

    const recognition = new window.SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    var stopListening = false;  //.. Flag recognizes 'exit' request

    recognition.onresult = function (event)
    {
        const speechToText = event.results[0][0].transcript;
        if (speechToText.includes('exit'))
        {
            //.. Exit listening
            stopListening = true;
        }
        else if (speechToText.includes(triggerWord))
        {
            parseSpeech(speechToText);
        }
        else
        {
            //.. This is speech without keyword invocation
            $('#textFromSpeech').val(speechToText + " - Giberish");
        }
    }

    //.. onend function. determine if needed to start listening again.
    recognition.onend = function ()
    {
        //console.log('Speech recognition service disconnected');
        if (!stopListening)
            recognition.start();
        else
            $('#textFromSpeech').val('Exited');
    }

    recognition.start();
}
else
{
    // speech recognition API not supported
    //alert('not');
   $('#textFromSpeech').val('Aw. Looks like your browser does not support Web Speech API.  Update browser or try a different browser.');
}