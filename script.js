function TextToSpeech(gf){
    const speech = new SpeechSynthesisUtterance();
    let voices = speechSynthesis.getVoices();
    let convert = document.getElementById(gf).innerHTML;
    speech.text = convert;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.voice = voices[1];
    window.speechSynthesis.speak(speech);
}