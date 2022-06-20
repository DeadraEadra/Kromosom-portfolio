/* const path = document.getElementById('face-path-pc')
const pathLenght = path.getTotalLength( )

path.style.strokeDasharray = pathLenght;

path.style.strokeDashoffset = pathLenght;

window.addEventListener("scroll", function () {

    // What % down is it?
    const scrollPercentage = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);


    // Length to offset the dashes
    const draw = pathLenght * scrollPercentage;

    // Draw in reverse
    path.style.strokeDashoffset = pathLenght - draw;

}) */

var path = document.querySelector('#face-path-pc');
var length = path.getTotalLength();