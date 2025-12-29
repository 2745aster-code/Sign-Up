const email = document.getElementById("email");
email.addEventListener("input", () => {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (pattern.test(email.value)) {
        email.classList.add("valid");
        email.classList.remove("invalid");
    } else {
        email.classList.add("invalid");
        email.classList.remove("valid");
    }
});

const fname = document.getElementById("fname");
fname.addEventListener("input", () => {
    let pattern = /^[A-Za-z](?:[A-Za-z ]{1,28})[A-Za-z]$/;
    if (pattern.test(fname.value)) {
        fname.classList.add("valid");
        fname.classList.remove("invalid");
    }
    else{
        fname.classList.add("invalid");
        fname.classList.remove("valid");
    }
});

const uname = document.getElementById("uname");
uname.addEventListener("input", () => {
    let pattern = /^[a-zA-Z0-9._\-@#!]{3,20}$/;
    if (pattern.test(uname.value)) {
        uname.classList.add("valid");
        uname.classList.remove("invalid");
    }
    else{
        uname.classList.add("invalid");
        uname.classList.remove("valid");
    }
});

const password = document.getElementById("password");
password.addEventListener("input", () => {
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

    if (pattern.test(password.value.trim())) {
        password.classList.add("valid");
        password.classList.remove("invalid");
    } else {
        password.classList.add("invalid");
        password.classList.remove("valid");
    }
    checkConfirmPassword();
    checkStrength(password.value);
});

const cpassword = document.getElementById("cpassword");
cpassword.addEventListener("input", () => {
    checkConfirmPassword();
});

cpassword.addEventListener("input", checkConfirmPassword);
function checkConfirmPassword() {
    if (cpassword.value === "") {
        cpassword.classList.remove("valid", "invalid");
        return;
    }
    if (password.value === cpassword.value) {
        cpassword.classList.add("valid");
        cpassword.classList.remove("invalid");
    } else {
        cpassword.classList.add("invalid");
        cpassword.classList.remove("valid");
    }
}

const togglePassword = document.getElementById("togglePassword1");
const passwordInput = document.getElementById("password");
togglePassword.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    togglePassword.src =
        type === "password"
        ? "../images/eyeclose.png"
        : "../images/eyeopen.png";
});

const togglePassword1 = document.getElementById("togglePassword2");
const passwordInput1 = document.getElementById("cpassword");
togglePassword1.addEventListener("click", () => {
    const type = passwordInput.type === "cpassword" ? "text" : "cpassword";
    passwordInput1.type = type;
    togglePassword1.src =
        type === "password"
        ? "../images/eyeclose.png"
        : "../images/eyeopen.png";
});

const strengthbar = document.getElementById("strengthbar");
const strengthtext = document.getElementById("strengthtext");
function checkStrength(pass) {
    let strength = 0;
    if(pass.length >= 8) strength++;
    if(/[A-Z]/.test(pass)) strength++;
    if(/[a-z]/.test(pass)) strength++;
    if(/\d/.test(pass)) strength++;
    if(/[!@#$%?&*]/.test(pass)) strength++;

    if(strength <= 2) {
        strengthbar.style.width = "33%";
        strengthbar.style.background = "red";
        strengthtext.textContent = "Strength: Weak Password";
        strengthtext.style.color = "red";
    }
    else if (strength === 3 || strength === 4){
        strengthbar.style.width = "66%";
        strengthbar.style.background = "orange";
        strengthtext.textContent = "Strength: Medium Strength";
        strengthtext.style.color = "orange";
    }
    else {
        strengthbar.style.width = "100%";
        strengthbar.style.background = "green";
        strengthtext.textContent = "Strength: Strong Password";
        strengthtext.style.color = "green";
    }
}

document.getElementById("uname").addEventListener("keyup", function () {
    const username = this.value.trim();
    const status = document.getElementById("user-status");

    if (username.length < 3) {
        status.textContent = "Username must be at least 3 characters.";
        status.style.color = "red";
        return;
    }

    // AJAX request
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "check_username.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function () {
        if (this.responseText === "taken") {
            status.textContent = "Username is already taken ❌";
            status.style.color = "red";
        } else if (this.responseText === "available") {
            status.textContent = "Username is available ✔️";
            status.style.color = "green";
        }
    };

    xhr.send("username=" + encodeURIComponent(username));
});
