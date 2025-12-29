document.getElementById("togglePassword1").addEventListener("click", function () {
    const passwordField = document.getElementById("password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        this.src = "../images/eyeopen.png"; 
    } else {
        passwordField.type = "password";
        this.src = "../images/eyeclose.png";
    }
});