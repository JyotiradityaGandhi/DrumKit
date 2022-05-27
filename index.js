;for (let i = 0; i < document.querySelectorAll(".drum").length; i++) { 
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
        setTimeout(() => buttonAnimation(buttonInnerHtml), 100);
});
}
document.addEventListener("keydown", function(eve){
    makeSound(eve.key);
    buttonAnimation(eve.key);
    setTimeout(() => buttonAnimation(eve.key), 100);
});     

function makeSound(key) {
    switch(key) {
        case 'w':  
            audio = new Audio("F:/Krishna/JS DrumKit/Drum Kit Starting Files/sounds/crash.mp3");
            audio.play();
            break;
        case 'a':
            audio = new Audio("F:/Krishna/JS DrumKit/Drum Kit Starting Files/sounds/kick-bass.mp3");
            audio.play();
            break;
        case 's':
            audio = new Audio("F:/Krishna/JS DrumKit/Drum Kit Starting Files/sounds/snare.mp3");
            audio.play();
            break;
        case 'd':
            audio = new Audio("F:/Krishna/JS DrumKit/Drum Kit Starting Files/sounds/tom-1.mp3");
            audio.play();
            break;
        case 'j': 
            audio = new Audio("F:/Krishna/JS DrumKit/Drum Kit Starting Files/sounds/tom-2.mp3");
            audio.play();
            break;
        case 'k':
            audio = new Audio("F:/Krishna/JS DrumKit/Drum Kit Starting Files/sounds/tom-3.mp3");
            audio.play();
            break;
        case 'l':
            audio = new Audio("F:/Krishna/JS DrumKit/Drum Kit Starting Files/sounds/tom-4.mp3");
            audio.play();
            break;
        default: 
            console.log(this.innerHTML);
    }
}

function buttonAnimation(keyPressed) {
    var press = document.querySelector("." + keyPressed);
    press.classList.toggle("pressed");
}