const logoAudio = new Audio("../audio/logo.mp3")
let playAudio = false;

document.getElementById("myLogo").onmouseover = (function name(e) {
    console.log("Shit");
    logoAudio.play();
});