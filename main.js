var i = 0;
var txt = 'Tapi Dutta.'; /* The text */
var speed = 500; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementsByClassName("intro-name")[0].innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function getAboutMeInView() {
  document.querySelector(".about-me-section").scrollIntoView({ behavior: "smooth" });
}

typeWriter()
