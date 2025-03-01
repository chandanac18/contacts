function validateForm() {
    let isValid = true;
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }
    
    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    }
    
    if (message === "") {
        messageError.textContent = "Message is required";
        isValid = false;
    }
    
    if (isValid) {
        alert("Form submitted successfully!");
    }
}
