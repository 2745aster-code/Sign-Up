<?php
include("database.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $username = trim($_POST['uname']);
    $email    = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT USER_ID, USERNAME, EMAIL, PASSWORD_HASH FROM SIGNUP_DETAILS WHERE USERNAME = :username AND EMAIL = :email";

    $stmt = oci_parse($conn, $sql);

    oci_bind_by_name($stmt, ":username", $username);
    oci_bind_by_name($stmt, ":email", $email);

    oci_execute($stmt);

    $user = oci_fetch_assoc($stmt);

    if (!$username) {
        echo "<script>alert('Invalid username!'); window.history.back();</script>";
        exit;
    }
    else if (!$email) {
        echo "<script>alert('Invalid email!'); window.history.back();</script>";
    }

    if (password_verify($password, $user['PASSWORD_HASH'])) {
        echo "<script>alert('Login Successful!');</script>";
    } else {
        echo "<script>alert('Incorrect password!'); window.history.back();</script>";
    }

    oci_free_statement($stmt);
    oci_close($conn);
}
?>
