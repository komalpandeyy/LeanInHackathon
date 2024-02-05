document.addEventListener('DOMContentLoaded', function() {
  const forgotPasswordForm = document.getElementById('forgotPasswordForm');
  const otpVerificationForm = document.getElementById('otpVerificationForm');
  const newPasswordForm = document.getElementById('newPasswordForm');

  // Display OTP verification form when 'Get OTP' button is clicked
  forgotPasswordForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate OTP sent, show OTP verification form
    otpVerificationForm.style.display = 'block';
    forgotPasswordForm.style.display = 'none';
  });

  // Handle OTP verification form submission
  otpVerificationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate OTP verification
    // If OTP is verified, show new password form
    otpVerificationForm.style.display = 'none';
    newPasswordForm.style.display = 'block';
  });

  // Handle new password form submission
  newPasswordForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newPasswordInput = newPasswordForm.querySelector('input[name="newPassword"]');
    const confirmNewPasswordInput = newPasswordForm.querySelector('input[name="confirmNewPassword"]');
    const newPassword = newPasswordInput.value;
    const confirmNewPassword = confirmNewPasswordInput.value;

    if (newPassword !== confirmNewPassword) {
      alert('Password mismatch. Please enter the same password in both fields.');
      // Reset the input fields
      newPasswordInput.value = '';
      confirmNewPasswordInput.value = '';
    } else {
      // Simulate new password setting
      alert('New password set successfully!');
      // Reset the input fields
      newPasswordInput.value = '';
      confirmNewPasswordInput.value = '';
      // You may redirect the user to login page or perform other actions here
    }
  });
});
