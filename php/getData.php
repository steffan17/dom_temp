<?php

header('Access-Control-Allow-Origin: *');
require_once('connect.php');

$id=$_GET{id};

$querry = $_GET{querry};

$querryResult = mysqli_query($db, $querry);

$resultData = array();
while ($row = mysqli_fetch_assoc($querryResult)) 
{
  $resultData[] = $row;
}

echo json_encode($resultData);
//echo $querry;
?>