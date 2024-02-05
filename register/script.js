function registerVolunteer() {
  alert('You have selected to register as a Volunteer!');
}

function registerStudent() {
  alert('You have selected to register as a Student!');
}

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