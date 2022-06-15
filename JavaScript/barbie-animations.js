// Play sound when mouseover and mouselfeave the barbie image
var playBtn = document.getElementById('play'),
  resetBtn = document.getElementById('reset'),
  hearbeat = document.getElementById('heartbeat')
audios = document.querySelectorAll('audio');
console.log(audios);


playBtn.addEventListener('mouseover', function () {
  [].forEach.call(audios, function (audio) {
    // do whatever
    audio.play();
  });
  document.getElementById(barbies).style.transition = "2s";
  document.getElementById(barbies).style.left = "100px";
  document.getElementById(barbies).style.bottom = "245px";
  
}, false);

playBtn.addEventListener('mouseleave', function () {
  heartbeat.pause();
  heartbeat.currentTime = 0;
}, false);