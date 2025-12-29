# 🔐 Signup and Login System

A secure and fully functional **Signup and Login System** built using **HTML, CSS, JavaScript, PHP, and Oracle SQL XE**.  
This is a **personal full-stack project** showcasing authentication logic, validation techniques, and enterprise-level database integration.

---

## 👤 Author

**Asish Kumar Sahani**  
Personal Project

---

## 🚀 Features

- User Signup (Registration)
- User Login
- Secure password hashing
- Client-side validation using JavaScript
- Server-side validation using PHP
- Proper error messages for invalid input
- Oracle SQL XE database integration
- Clean UI with custom styling and images

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** PHP (Apache server via XAMPP)  
- **Database:** Oracle SQL XE  
- **PHP Extension:** OCI8  

---

## 📂 Project Structure
signup-and-login-system/
│── CSS/
│ ├── login.css
│ └── register.css
│
│── HTML/
│ ├── login.html
│ └── signup.html
│
│── JavaScript/
│ ├── login.js
│ └── signup.js
│
│── images/
│ ├── background.png
│ ├── cross.png
│ ├── eyeclose.png
│ ├── eyeopen.png
│ ├── login.png
│ ├── login1.png
│ └── tick.png
│
│── database.php
│── login.php
│── signup.php
│── README.md


> ⚠️ Sensitive information such as database credentials should not be committed to GitHub.

---

## 🗄️ Database Design (Oracle SQL)

**Database:** Oracle SQL XE  
**Table Name:** `user_login`

### Columns:
- `id` – auto-generated primary key
- `username`
- `email`
- `password` – securely hashed

> Only the **database schema** is used.  
> No real user data is included in this repository.

---

## ⚙️ How to Run the Project Locally

### Prerequisites
- XAMPP (Apache)
- Oracle SQL XE
- PHP with OCI8 extension enabled

---

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/signup-and-login-system.git

2. Move the project folder to:
  xampp/htdocs/

3. Start Apache from the XAMPP Control Panel.

4. Set up Oracle Database:
  Create a user/schema in Oracle SQL XE
  Create the user_login table according to the schema

5. Configure database connection:
  Edit database.php
  Add your Oracle database credentials using oci_connect()
  Ensure sensitive credentials are not pushed to GitHub

6. Open your browser and visit:
   http://localhost/signup-and-login-system/HTML/login.html

- Real-time password strength meter during signup
  ## 🔑 Password Strength Meter

  The signup form includes a real-time password strength meter implemented using JavaScript.  
  It evaluates password strength based on length and character variety and provides instant visual feedback to the user.

## 🔮 Future Improvements

- Email verification during user registration
- Forgot password / password reset functionality
- Use of prepared statements for improved database security
- Session timeout and automatic logout after inactivity
- Account lock after multiple failed login attempts
- Role-based authentication (Admin / User)
- CAPTCHA integration to prevent automated attacks
- Remember Me functionality using secure cookies
- User dashboard after successful login
- Enhanced UI/UX and mobile responsiveness
- Deployment on a live server
