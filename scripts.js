function showLove() {
  document.getElementById('surpriseMessage').classList.remove('hidden');
  document.getElementById('surpriseMessage').style.display = 'block';
  createHearts();
}

function createHearts() {
  const container = document.querySelector('.container');
  for (let i = 0; i < 50; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.textContent = '❤️';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.top = Math.random() * 100 + 'vh';
      heart.style.animationDuration = Math.random() * 3 + 2 + 's';
      container.appendChild(heart);
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', function() {
  // Creating hearts initially
  createHearts();
});

