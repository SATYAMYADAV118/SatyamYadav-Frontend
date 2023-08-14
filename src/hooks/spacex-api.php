<!-- <?php
// Set headers to allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Check for the 'Authorization' header
$authorizationHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';

// Verify the authorization token (replace 'test123' with your actual secret key)
$validToken = 'test123';
if ($authorizationHeader !== "Bearer $validToken") {
    http_response_code(401); // Unauthorized
    echo json_encode(array("message" => "Unauthorized"));
    exit;
}

// Your SpaceX API endpoints
$rocketApiUrl = "https://api.spacexdata.com/v4/rockets";
$capsuleApiUrl = "https://api.spacexdata.com/v4/capsules";

// Fetch data from SpaceX API
$response = file_get_contents($rocketApiUrl);
$rocketsData = json_decode($response, true);

$response = file_get_contents($capsuleApiUrl);
$capsulesData = json_decode($response, true);

// Combine rocket and capsule data
$data = array("rockets" => $rocketsData, "capsules" => $capsulesData);

// Send the response
http_response_code(200);
echo json_encode($data);
?> -->



