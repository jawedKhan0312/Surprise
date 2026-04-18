const text = "You are the most special person in my life ❤️";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

typeWriter();

function showSurprise() {
  document.getElementById("surprise").style.display = "block";
}
