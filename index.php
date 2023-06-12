<?php
// Assuming the database credentials
$host = 'localhost';
$username = 'username';
$password = 'pass';
$database = 'users';

// Create a database connection
$conn = mysqli_connect($host, $username, $password, $database);

// Check if the connection was successful
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Process the form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the form data
    $full_name = $_POST['full_name'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $gender = $_POST['gender'];
    $password = $_POST['password'];
    
    // Insert the data into the database
    $sql = "INSERT INTO users (full_name, username, email, phone, gender, password) VALUES ('$full_name', '$username', '$email', '$phone', '$gender', '$password')";
    
    if (mysqli_query($conn, $sql)) {
        // Registration successful, redirect to a success page
        header("Location: success.php");
        exit();
    } else {
        // Registration failed, handle the error
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

// Close the database connection
mysqli_close($conn);
?>
