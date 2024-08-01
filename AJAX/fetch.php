<?php
header('Content-Type: application/json');

// URL of the JSONPlaceholder API
$apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Initialize cURL session
$ch = curl_init($apiUrl);

// Set cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, false);

// Execute cURL request
$response = curl_exec($ch);

// Check for errors
if (curl_errno($ch)) {
    echo json_encode(array("error" => "Unable to fetch data from the API"));
    curl_close($ch);
    exit();
}

// Close cURL session
curl_close($ch);

// Return data in JSON format
echo $response;
?>
