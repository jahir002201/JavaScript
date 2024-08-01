<?php
header('Content-Type: application/json');

$data = array(
    "name" => "Jahir",
    "age" => 24,
    "profession" => "Mathematician",
    "interests" => array("programming", "game design", "mathematics")
);

echo json_encode($data);
?>