// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


function parseSpeech(speech)
{

}

function doCommand()
{
}

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
if ('SpeechRecognition' in window) {
    // speech recognition API supported

    const recognition = new window.SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    var stopListening = false;  //.. Flag recognizes 'exit' request

    recognition.onresult = function (event) {
        const speechToText = event.results[0][0].transcript;
        if (speechToText.includes('exit'))
        {
            //.. Exit listening

            stopListening = true;
        }
        else if (speechToText.includes('hello'))
        {
            //.. 
            $('#textFromSpeech').empty();
            $('#textFromSpeech').val(speechToText + " - Balloon");

            //parseSpeech(speechToText);
        }
        else
        {
            //.. This is speech without keyword invocation
            $('#textFromSpeech').val(speechToText + " - Giberish");
        }

        //.. onend function. determine if needed to start listening again.
        recognition.onend = function () {
            //console.log('Speech recognition service disconnected');
            if (!stopListening)
                recognition.start();
            else
                $('#textFromSpeech').val('Exited');
        }
    }

    recognition.start();
}
else {
    // speech recognition API not supported
    //alert('not');
   $('#textFromSpeech').val('Speech recognition NOT SUPPORTED');
}