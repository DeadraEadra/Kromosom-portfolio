// ------------------------ START OF ONCLICK FUNCTION FOR THE SUN & MOON VINYLS ---------------------------

// Inspirational code: https://sebhastian.com/javascript-show-hide-div-onclick-toggle/

// Declare the variables for the Sun-Vinyl & Day Spotify
const sunVinyl = document.getElementById("sun-vinyl");
const daySpotify = document.getElementById("day-spotify");

// Create a function that shows/hides the Spotify playlist if you click on the Vinyl image
// When you click on the Sun Vinyl
sunVinyl.onclick = function () {
  // If the Spotify playlist isn't shown
  if (daySpotify.style.display !== "block") {
    // then show it
    daySpotify.style.display = "block";
    // and change the background of the page from the small one to the extended one
    document.body.style.backgroundImage = "url(/Pictures/backgrounds/desktop/playlist2_pc.png)";

  } else {
    // otherwise, if the Spotify playlist is already shown before you clicked on the Sun Vinyl
    // then when you click on it
    // it will hide the Spotify playlist
    daySpotify.style.display = "none";
    // and change the background from the extended one to the small one
    document.body.style.backgroundImage = "url(/Pictures/backgrounds/desktop/playlist-small_pc.png)";
  }
};



// Declare the variables for the Moon-Vinyl & Night Spotify
const moonVinyl = document.getElementById("moon-vinyl");
const nightSpotify = document.getElementById("night-spotify");

// Create a function that shows/hides the Spotify playlist if you click on the Vinyl image
// When you click on the Moon Vinyl
moonVinyl.onclick = function () {
  // If the Spotify playlist isn't shown
  if (nightSpotify.style.display !== "block") {
    // then show it
    nightSpotify.style.display = "block";
  } else {  //if it is shown
    // then hide it
    nightSpotify.style.display = "none";
  }
};

// ------------------------- END OF ONCLICK FUNCTION FOR THE SUN & MOON VINYLS ---------------------------