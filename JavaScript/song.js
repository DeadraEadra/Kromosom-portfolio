var x = document.getElementById("myAudio"); 

myAudio.load()

function playPause() { 

  if (myAudio.paused) {
    myAudio.play();
    // document.getElementById('pause').src = "img/pause.svg";
}
else {
    myAudio.pause();
    // document.getElementById('pause').src = "img/play.svg";
}
} 