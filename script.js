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

function showNextReason() {
  const box = document.getElementById("typing-text");
  if (index >= reasons.length) {
    box.textContent = "That's not even half of it 😘";
    return;
  }

  const reason = reasons[index];
  box.textContent = "";
  let charIndex = 0;

  const typer = setInterval(() => {
    if (charIndex < reason.length) {
      box.textContent += reason[charIndex];
      charIndex++;
    } else {
      clearInterval(typer);
      index++;
    }
  }, 50);
}
