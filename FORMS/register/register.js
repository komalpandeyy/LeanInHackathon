function validateForm(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var education = document.getElementById("education").value;
    var university = document.getElementById("university").value;
    var aadhar = document.getElementById("aadhar").value;
    var phone = document.getElementById("phone").value;
    var hours = document.getElementById("hours").value;
    var speciality = document.getElementById("speciality").value;

    if (!name || !education || !university || !aadhar || !phone || !hours || !speciality) {
        alert("Please fill in all the required fields");
        return;
    }

    if (aadhar.length !== 12 || isNaN(aadhar)) {
        alert("Aadhar number must be a 12-digit number");
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Phone number must be a 10-digit number");
        return;
    }

    // Additional validation logic can be added here
    
    alert("Form submitted successfully!");
    document.getElementById("volunteerForm").reset();
}
