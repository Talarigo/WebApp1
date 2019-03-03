// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
//if ('SpeechRecognition' in window) {
//    // speech recognition API supported

//    //alert('supported');
//    const recognition = new window.SpeechRecognition();
//    var hasBalloon = false;
//    recognition.continuous = true;
//    //recognition.interimResults = true;

//    recognition.onresult = (event) => {
//        const speechToText = event.results[0][0].transcript;
//        if (speechToText.includes('hello')){
//            $('#textFromSpeech').empty();
//            $('#textFromSpeech').val(speechToText + "ggg");
//            hasBalloon = true;
 
//            //recognition.stop();
//            //recognition.start();
//        }
//        else {
//            $('#textFromSpeech').empty();
//            $('#textFromSpeech').val(speechToText + "www");
//            hasBalloon = false;
//            //recognition.stop();
//            //recognition.start();
//        }

//        recognition.onend = function () {
//            console.log('Speech recognition service disconnected');
//            debugger;
//        }
//    }
//    recognition.start();


//} else {
//    // speech recognition API not supported
//    alert('not');
//}