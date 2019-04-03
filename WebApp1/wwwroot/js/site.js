// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

//------------------------------------------------------------
//globals
//------------------------------------------------------------
const triggerWord = 'hello';
sessionStorage["context"] = 'Home';
sessionStorage["stepNumber"] = 0;
sessionStorage["speechString"] = '';
//------------------------------------------------------------
function PlaySound(filename)
{
    //..var sound = document.getElementById(soundObj);
    //sound = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
    sound = new Audio(filename);
    sound.Play();
    //..
}
function onPressButton()
{
    //say("Hi. Welcome!");
    //PlaySound('Indian Bell.mp3');
    var strTextFromSpeech = document.getElementById("textFromSpeech").value;
    strTextFromSpeech = strTextFromSpeech.toLowerCase();
    doCommand(strTextFromSpeech);
}

//.. Execute given command
function doCommand(strSpeech)
{
    sessionStorage["speechString"] = strSpeech;
    var strCommand = "";
    var strContext = sessionStorage["context"];
    var strcont = contextStack[contextStack.length - 1];

    //.. IMPORTANT: strings in the .include call MUST be lowercase
    //..         NOTE: strSpeech is ALWAYS lowercase
    //..         NOTE: process 'start timer' before 'start'; 'stop ***' before 'stop'

    if (strSpeech.includes("start timer") || strSpeech.includes("set timer"))
    {
        strCommand = 'start timer'
    }
    else if (strSpeech.includes("cancel timer") || strSpeech.includes("stop timer"))
    {
        strCommand = 'cancel timer'
    }
    else if (strSpeech.includes("list timer") || strSpeech.includes("list all timer") || strSpeech.includes("timers") )
    {
        strCommand = 'list timers'
    }
    else if (strSpeech.includes("start"))
    {
        strCommand = 'start';
    }
    else if (strSpeech.includes("stop"))
    {
        strCommand = 'stop';
    }
    else if (strSpeech.includes("ingredients"))
    {
        strCommand = 'ingredients';
    }
    else if (strSpeech.includes("pause"))
    {
        strCommand = 'pause';
    }
    else if (strSpeech.includes("skip step"))
    {
        strCommand = 'skip step';
    }
    else if (strSpeech.includes("exit"))
    {
    } 
    else if (strSpeech.includes("help"))
    {
        strCommand = 'help';
    }
    else
    {
        strCommand = 'unknown';
    }

    //.. Create string of function and parameters
    //.. First, get the command record
    getCommandRule(strCommand);
    commandFunction = commandRule[0].Function;

    //.. Next, append parameters if any
    commandFunction += '('

    //.. Add parameters here, if any

    commandFunction += ')'

    eval(commandFunction);

}

//.. Speech parser
function parseSpeech(speech) {
    if (true) //..(_currentcontext = 'Recipe')
    {
        var arr = speech.split(triggerWord);

        if (arr.length = 2)   //Note if less than 2, there was no triggerword. If greater than 2, multiple triggerwords detected
        {
            $('#textFromSpeech').empty();
            $('#textFromSpeech').val(arr[1] + " - Parsed");
        }
        else
        {
            $('#textFromSpeech').empty();
            $('#textFromSpeech').val("Parsing Failed!");
        }
    }

    doCommand(arr[1]);
}

//..........................................................................
//.. Setup Speech Recognition
//..........................................................................
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
        //.. Retrieve speech string
        var speechToText = event.results[0][0].transcript;
 
        if (bSubCommand)
        { //.. If we are in a sub command...

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