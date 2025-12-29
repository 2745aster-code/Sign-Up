<?php
$username = "*******";
$password = "*********";
$connection_string = "//*********:****/***";

$conn = oci_connect($username, $password, $connection_string);

if (!$conn) {
    $e = oci_error();
    die("Oracle Connection Failed: " . $e['message']);
}
else {
    echo "Connection Successful";
}
?>
