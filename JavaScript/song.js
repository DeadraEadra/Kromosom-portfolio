//THE MUSICAL BUTTON FROM THE TOILET

//Assigning the name to audio file - declaring the variable x
var x = document.getElementById("myAudio");

// function that loads the element with the id "myAudio"
myAudio.load()

//Plays or pauses the sound depending on whether it's paused or not
function playPause() {

  //If it's paused, play it
  if (myAudio.paused) {
    myAudio.play();
  }

  //Else (if it's playing), pause it
  else {
    myAudio.pause();
  }
} 