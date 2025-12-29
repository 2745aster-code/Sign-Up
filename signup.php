<?php
include("database.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $fname     = $_POST['fname'];        
    $username  = trim($_POST['uname']);    
    $email     = $_POST['email'];        
    $password  = $_POST['password'];     

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $check_user_sql = "SELECT COUNT(*) AS CNT FROM SIGNUP_DETAILS WHERE USERNAME = :uname";
    $check_user_stmt = oci_parse($conn, $check_user_sql);
    oci_bind_by_name($check_user_stmt, ":uname", $username);
    oci_execute($check_user_stmt);
    $user_row = oci_fetch_assoc($check_user_stmt);

    if ($user_row['CNT'] > 0) {
        echo "<script>alert('Username already exists!');</script>";
        exit;
    }

    $check_email_sql = "SELECT COUNT(*) AS CNT FROM SIGNUP_DETAILS WHERE EMAIL = :email";
    $check_email_stmt = oci_parse($conn, $check_email_sql);
    oci_bind_by_name($check_email_stmt, ":email", $email);
    oci_execute($check_email_stmt);
    $email_row = oci_fetch_assoc($check_email_stmt);

    if ($email_row['CNT'] > 0) {
        echo "<script>alert('Email already exists!');</script>";
        exit;
    }

    $insert_sql = "INSERT INTO SIGNUP_DETAILS (USER_ID, FULL_NAME, USERNAME, EMAIL, PASSWORD_HASH)
                   VALUES (USER_SEQ.NEXTVAL, :fname, :uname, :email, :pass)";

    $stmt = oci_parse($conn, $insert_sql);

    oci_bind_by_name($stmt, ":fname", $fname);
    oci_bind_by_name($stmt, ":uname", $username);
    oci_bind_by_name($stmt, ":email", $email);
    oci_bind_by_name($stmt, ":pass", $hashed_password);

    $result = oci_execute($stmt);

    if ($result) {
        echo "<script>alert('Signup Successful!');</script>";
    } else {
        $error = oci_error($stmt);
        echo "Error: " . $error['message'];
    }

    oci_free_statement($stmt);
    oci_close($conn);
}
?>
