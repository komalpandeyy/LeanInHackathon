// script.js
const card = document.querySelector('.card');

card.addEventListener('mouseover', function () {
card.style.transform = 'scale(1)';
});

card.addEventListener('mouseout', function () {
card.style.transform = 'scale(1)';
});

// Generate a random color function
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Update the CSS variable with the random color
  document.documentElement.style.setProperty('--login-light-color', getRandomColor());