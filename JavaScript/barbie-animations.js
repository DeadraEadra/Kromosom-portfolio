// PLAY SOUND WHEN MOUSEOVER AND MOUSELEAVE THE BARBIE IMAGE

//Assigning the names
var playBtn = document.getElementById('play'),
  resetBtn = document.getElementById('reset'),
  hearbeat = document.getElementById('heartbeat')
audios = document.querySelectorAll('audio');
console.log(audios);


//When the mouse is over, the audio will be played
playBtn.addEventListener('mouseover', function () {
  [].forEach.call(audios, function (audio) {
    audio.play();
  });
}, false);

//When the mouse leaves the barbie image, the audio will be stopped
playBtn.addEventListener('mouseleave', function () {
  heartbeat.pause();

  //Resets the sound - the next time you hover over, it starts from the begginning
  heartbeat.currentTime = 0;
}, false);
