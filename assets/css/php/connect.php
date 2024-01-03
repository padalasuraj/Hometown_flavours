<?php 

$conn = new mysqli('localhost', 'root', '', 'test');

if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

echo 'Connected successfully!';
$conn->close();


error_reporting(E_ALL);
ini_set('display_errors', 1);

  $Name = $_POST['Name'];
  $Mobile = $_POST['Mobile_Number'];
  $Email = $_POST['Email'];
  $ItemID = $_POST['ItemID'];
  $Quantity = $_POST['Quantity']; // Corrected variable name
  $ADDRESS = $_POST['ADDRESS'];

  $conn = new mysqli('localhost', 'root', '', 'test');

  if($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
  } else {
    $stmt = $conn->prepare("INSERT INTO orders (Name, Mobile_Number, Email, ItemID, Quantity, ADDRESS)
                           VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sissis", $Name, $Mobile, $Email, $ItemID, $Quantity, $ADDRESS);
    $stmt->execute();
    echo "Registration successful";
    $stmt->close();
    $conn->close();
  }
?>
