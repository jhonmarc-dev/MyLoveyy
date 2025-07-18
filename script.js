const reasons = [
  "You always support me, no matter what.",
  "You make me feel safe and loved.",
  "You're so cute when you smile.",
  "You're the first person I think of when I wake up.",
  "You understand me in ways no one else can.",
  "You’re not just my love, you're also my best friend.",
  "You make everything feel easier when you’re around.",
  "I love how thoughtful and kind you are.",
  "You inspire me to be better every day.",
  "You make my world brighter just by being in it."
];

let index = 0;
let musicStarted = false;
let isTyping = false;

function showNextReason() {
  const box = document.getElementById("typing-text");
  const music = document.getElementById("bg-music");

  if (isTyping) return;

  if (!musicStarted) {
    music.play().catch(err => console.log("Autoplay blocked:", err));
    musicStarted = true;
  }

  if (index >= reasons.length) {
    box.textContent = "That's not even half of it 😘";
    return;
  }

  const reason = reasons[index];
  box.textContent = "";
  let charIndex = 0;
  isTyping = true;

  const typer = setInterval(() => {
    if (charIndex < reason.length) {
      box.textContent += reason.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(typer);
      index++;
      isTyping = false;
    }
  }, 50);
}

// Modal Controls
function closeLetter() {
  document.getElementById("letter-modal").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}

function openLetter() {
  document.getElementById("letter-modal").style.display = "flex";
  document.getElementById("main-content").style.display = "none";
}

// Auto show the letter on first load
window.onload = openLetter;
