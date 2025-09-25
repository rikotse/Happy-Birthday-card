// Generate balloons
function createBalloons() {
  const container = document.getElementById("balloons-container");
  const colors = ["#ff6b6b", "#ffa726", "#4ecdc4", "#6a89cc", "#fad0c4"];
  const balloonCount = 15;

  for (let i = 0; i < balloonCount; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    // Random properties
    const size = Math.random() * 20 + 30;
    const left = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = Math.random() * 10 + 15;
    const color = colors[Math.floor(Math.random() * colors.length)];

    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.2}px`;
    balloon.style.left = `${left}%`;
    balloon.style.background = `radial-gradient(circle at 30% 30%, ${color}, ${color}dd)`;
    balloon.style.animationDelay = `${delay}s`;
    balloon.style.animationDuration = `${duration}s`;

    container.appendChild(balloon);
  }
}

// Generate confetti
function createConfetti() {
  const container = document.getElementById("confetti-container");
  const colors = [
    "#ff6b6b",
    "#ffa726",
    "#4ecdc4",
    "#6a89cc",
    "#fad0c4",
    "#ffd93d",
  ];
  const confettiCount = 50;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Random properties
    const size = Math.random() * 10 + 5;
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 5 + 5;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shape = Math.random() > 0.5 ? "50%" : "0";

    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.left = `${left}%`;
    confetti.style.background = color;
    confetti.style.borderRadius = shape;
    confetti.style.animationDelay = `${delay}s`;
    confetti.style.animationDuration = `${duration}s`;

    container.appendChild(confetti);
  }
}

// Create hearts animation
function createHearts() {
  const heartContainer = document.body;
  const heartCount = 20;

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // Random properties
    const left = Math.random() * 100;
    const delay = Math.random() * 0.5;
    const size = Math.random() * 1 + 0.5;

    heart.style.left = `${left}%`;
    heart.style.bottom = "50%";
    heart.style.animationDelay = `${delay}s`;
    heart.style.fontSize = `${size}rem`;

    heartContainer.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
      heart.remove();
    }, 1500);
  }
}

// Show personal message
function showPersonalMessage() {
  const message = document.getElementById("personal-message");
  message.classList.add("active");
}

// Close personal message
function closePersonalMessage() {
  const message = document.getElementById("personal-message");
  message.classList.remove("active");
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  createBalloons();
  createConfetti();

  // Add event listener to surprise button
  document.getElementById("surprise-btn").addEventListener("click", () => {
    createHearts();
    setTimeout(showPersonalMessage, 800);
  });

  // Add event listener to close button
  document
    .getElementById("close-btn")
    .addEventListener("click", closePersonalMessage);

  // Close message when clicking outside
  document.getElementById("personal-message").addEventListener("click", (e) => {
    if (e.target === document.getElementById("personal-message")) {
      closePersonalMessage();
    }
  });
});
