// --------------- START OF ON-MOUSE-OVER & OUT FUNCTION FOR THE Facebook & Instagram ICONS ------------------

// Declare the variables for the Orange Facebook Icon & Rainbow Facebook Icon
const fbkIcon = document.getElementById("fbk-icon");
const fbkIconRainbow = document.getElementById("fbk-icon-rainbow");

// Create functions that changes the Orange Facebook Icon if you hover over it with the Rainbow Facebook icon

// If the mouse is over the Orange Fbk Icon
fbkIcon.onmouseover = function () {
  // then hide the Orange fbk icon
  fbkIcon.style.display = "none";
  // and show the Rainbow Fbk Icon
  fbkIconRainbow.style.display = "block";
};

// If the mouse is not on the Rainbow Fbk Icon anymore
fbkIcon.onmouseout = function () {
  // then hide the Rainbow fbk icon
  fbkIconRainbow.style.display = "none";
  // and show the Orange Fbk Icon
  fbkIcon.style.display = "block";
};


// Declare the variables for the Orange Instagram Icon & Rainbow Instagram Icon
const igIcon = document.getElementById("ig-icon");
const igIconRainbow = document.getElementById("ig-icon-rainbow");

// Create functions that changes the Orange Instagram Icon if you hover over it with the Rainbow Instagram icon

// If the mouse is over the Orange Ig Icon
igIcon.onmouseover = function () {
  // then hide the Orange ig icon
  igIcon.style.display = "none";
  // and show the Rainbow Ig Icon
  igIconRainbow.style.display = "block";
};

// If the mouse is not on the Rainbow Ig Icon anymore
igIcon.onmouseout = function () {
  // then hide the Rainbow ig icon
  igIconRainbow.style.display = "none";
  // and show the Orange Ig Icon
  igIcon.style.display = "block";
};

// --------------- END OF ON-MOUSE-OVER & OUT FUNCTION FOR THE Facebook & Instagram ICONS ------------------