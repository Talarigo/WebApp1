// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

//globals
const triggerWord = 'hello';

//.. JSON data....
var strFunctionJSON =
'{ "CommandFunctions" : '+
    '['+
        '{ "context": "0", "command": "start", "function": "onStartRecipe()" },'+
        '{ "context": "0", "command": "stop", "function": "onStopRecipe()" },'+
        '{ "context": "0", "command": "pause", "function": "onPauseRecipe()" },'+
        '{ "context": "", "command": "unknown", "function": "onUnknown()" }'+
    ']'+
'}';
//------------------------------------------------------------
//.....  Array of functions : Method 2
var array_of_actions = [];
var JSONObj = JSON.parse(strFunctionJSON);
for (i = 0; i < JSONObj.CommandFunctions.length; i++) {
    var strCommand = JSONObj.CommandFunctions[i].context  +  JSONObj.CommandFunctions[i].command;
    var strFunction = JSONObj.CommandFunctions[i].function;
    array_of_actions[strCommand] = strFunction;
}

//------------------------------------------------------------

function onStartRecipe()
{
    var msg = new SpeechSynthesisUtterance("Let's get cooking!");
    window.speechSynthesis.speak(msg);

    //.. Launch checklists

    //.. Launch step 1
}

function onStopRecipe()
{
    //.. Note where you were.  Just in case user decides to continue...

    //.. Confirm 

    //.. Turn off times

    var msg = new SpeechSynthesisUtterance("Thank you for cooking with us!Goodbye!");
    window.speechSynthesis.speak(msg);

    //.. Now, should we redirect to home page??  Or just stay on this page
}

function onPauseRecipe()
{
    var msg = new SpeechSynthesisUtterance("Paused!Press Start when ready!");
    window.speechSynthesis.speak(msg);
}

function onUnknown()
{
    var msg = new SpeechSynthesisUtterance("Sorry! I did not understand your request!");
    window.speechSynthesis.speak(msg);
    //..say("Sorry! I did not understand your request!");
}
//------------------------------------------------------------

//.. Execute given command
function doCommand(strContext, strSpeech)
{
    var strCommand = "";
    //.. IMPORTANT: strings in the .include call MUST be lowercase
    //..         NOTE: strSpeech is ALWAYS lowercase
    if (strSpeech.includes("start"))
    {
        strCommand = strContext+'start';
    }
    else if (strSpeech.includes("stop"))
    {
        strCommand = strContext+'stop';
    }
    else if (strSpeech.includes("pause"))
    {
        strCommand = strContext+'pause';
    }
    else
    {
        strCommand = 'unknown';
    }
    eval(array_of_actions[strCommand]);

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

    doCommand('0', arr[1]); //.. first argument is the context
}

function say(m) {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1];
    msg.voiceURI = "native";
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 1.0;
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