const text = "You are the most special person in my life ❤️";
let i = 0;

// Typing effect
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

// Run typing on load
window.onload = function () {
  typeWriter();
};

// Surprise function
function showSurprise() {
  let surprise = document.getElementById("surprise");

  // Show surprise section
  surprise.style.display = "block";

  // Change background
  document.body.style.background = "linear-gradient(to right, #ff9a9e, #fad0c4)";

  // Play music
  let music = document.getElementById("music");
  if (music) {
    music.play();
  }

  // Restart typing effect inside surprise (optional)
  let typingElement = document.getElementById("typing");
  if (typingElement) {
    typingElement.innerHTML = "";
    i = 0;
    typeWriter();
  }
}
