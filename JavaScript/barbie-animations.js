// PLAY SOUND WHEN MOUSEOVER AND MOUSELEAVE THE BARBIE IMAGE

//Assigning the names ( declaring the variables for play and reset button, and also the audio file )
var playBtn = document.getElementById('play'),
  resetBtn = document.getElementById('reset'),
  hearbeat = document.getElementById('heartbeat')
  // the id of the audio we will play afterwards using an EventListener

audios = document.querySelectorAll('audio');
// returns a list of the document's elements that match the group of selectors named "audio"
console.log(audios);
// inform us if the list was returned


//When the mouse is over, the audio will be played
playBtn.addEventListener('mouseover', function () {
  [].forEach.call(audios, function (audio) { //every time the function is called = when the mouse is over the img
    // then execute the function "audio" which plays the audio
    audio.play();
  });
}, false);

//When the mouse leaves the barbie image, the audio will be stopped
playBtn.addEventListener('mouseleave', function () {
  heartbeat.pause();

  //Resets the sound - the next time you hover over, it starts from the begginning
  heartbeat.currentTime = 0;
}, false);
