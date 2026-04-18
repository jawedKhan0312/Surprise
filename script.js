const text = "You are the most special person in my life ❤️";
let i = 0;
let started = false;

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

// Show Surprise
function showSurprise() {
  if (!started) {
    started = true;

    let surprise = document.getElementById("surprise");
    let cake = document.getElementById("cake");

    // Show sections
    surprise.style.display = "block";
    cake.style.display = "block";

    // Change background
    document.body.style.background = "linear-gradient(to right, #ff9a9e, #fad0c4)";

    // Play birthday song (FIXED)
    let song = document.getElementById("birthdaySong");
    if (song) {
      song.play().catch(() => {});
    }

    // Restart typing effect
    let typingElement = document.getElementById("typing");
    if (typingElement) {
      typingElement.innerHTML = "";
      i = 0;
      typeWriter();
    }

    // Create balloons
    createBalloons();
  }
}

// 🎂 Cake Cutting
function cutCake() {
  document.querySelector(".cake").innerHTML = "🍰";

  let clap = document.getElementById("clapSound");
  if (clap) {
    clap.currentTime = 0;
    clap.play().catch(() => {});
  }

  popBalloons();
}

// 🎈 Create Balloons
function createBalloons() {
  let container = document.getElementById("balloons");

  for (let i = 0; i < 8; i++) {
    let balloon = document.createElement("div");
    balloon.className = "balloon";

    balloon.style.left = Math.random() * 90 + "%";
    balloon.style.background = getRandomColor();

    // Tap to pop (with clap sound)
    balloon.onclick = function () {
      balloon.remove();

      let clap = document.getElementById("clapSound");
      if (clap) {
        clap.currentTime = 0;
        clap.play().catch(() => {});
      }
    };

    container.appendChild(balloon);
  }
}

// Remove all balloons
function popBalloons() {
  document.querySelectorAll(".balloon").forEach(b => b.remove());
}

// Balloon colors
function getRandomColor() {
  const colors = ["#ff4e8a", "#ffcc00", "#00c3ff", "#8affc1", "#ff8a5c"];
  return colors[Math.floor(Math.random() * colors.length)];
}
