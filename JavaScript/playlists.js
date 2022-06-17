// ------------------------ START OF ONCLICK FUNCTION FOR THE SUN & MOON VINYLS ---------------------------

// Inspirational code: https://sebhastian.com/javascript-show-hide-div-onclick-toggle/

// Declare the variables for the Sun-Vinyl & Day Spotify
const sunVinyl = document.getElementById("sun-vinyl");
const daySpotify = document.getElementById("day-spotify");

// Create a function that shows/hides the Spotify playlist if you click on the Vinyl image
sunVinyl.onclick = function () {
  // If the Spotify playlist isn't shown
  if (daySpotify.style.display !== "block") {
    // then show it
    daySpotify.style.display = "block";

    document.body.style.backgroundImage = "url(/Pictures/backgrounds/desktop/playlist2_pc.png)";

    // moonVinyl.classList.add("margin-top-extended-bgk");

  } else if (daySpotify.style.display !== "none" && nightSpotify.style.display !== "none") {
    daySpotify.style.display = "none";
    // then hide it

    document.body.style.backgroundImage = "url(/Pictures/backgrounds/desktop/playlist-small_pc.png)";

    // moonVinyl.classList.remove("margin-top-extended-bgk");
  }

  else {
    document.body.style.backgroundImage = "url(/Pictures/backgrounds/desktop/playlist-small_pc.png)";

    nightSpotify.style.display = "none";
    daySpotify.style.display = "none";

    // moonVinyl.classList.remove("margin-top-extended-bgk");
  }
};



// Declare the variables for the Moon-Vinyl & Night Spotify
const moonVinyl = document.getElementById("moon-vinyl");
const nightSpotify = document.getElementById("night-spotify");

// Create a function that shows/hides the Spotify playlist if you click on the Vinyl image
moonVinyl.onclick = function () {
  // If the Spotify playlist isn't shown
  if (nightSpotify.style.display !== "block") {
    // then show it
    nightSpotify.style.display = "block";
  } else {  //if it is shown
    nightSpotify.style.display = "none";
    // then hide it
  }
};

// ------------------------- END OF ONCLICK FUNCTION FOR THE SUN & MOON VINYLS ---------------------------