const envelope = document.getElementById('envelopeWrapper');

// 1. Existing Toggle Envelope Code
envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');
});

// 2. Hearts Rain Generator
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart-particle');
  
  // Array of heart varieties to keep the rain visually interesting
  const heartTypes = ['❤️', '💖', '💝', '💕', '💗'];
  heart.innerText = heartTypes[Math.floor(Math.random() * heartTypes.length)];
  
  // Set random horizontal position across the full phone screen width
  heart.style.left = Math.random() * 100 + 'vw';
  
  // Set random fall duration between 3 to 6 seconds so they drop at different speeds
  const fallDuration = Math.random() * 3 + 3;
  heart.style.animationDuration = fallDuration + 's';
  
  // Set random sizes so some look closer and some look further away
  const sizeRandomizer = Math.random() * 0.8 + 0.6;
  heart.style.transform = `scale(${sizeRandomizer})`;

  // Attach to the page background
  document.body.appendChild(heart);

  // Automatically delete the heart once its fall animation completes to save phone memory
  setTimeout(() => {
    heart.remove();
  }, fallDuration * 1000);
}

// Continuously spawn a new heart every 300 milliseconds
setInterval(createHeart, 300);
