<?php
 
$serwer = 'localhost';
$uzytkownik = 'michal';
$haslo = '3410';
$nazwa_bazy = 'dom';
  
/*Połączenie z bazą*/
$db = mysqli_connect($serwer, $uzytkownik, $haslo, $nazwa_bazy);
 
/*Komunikat o błędzie w przypadku problemów z połączeniem*/
if (mysqli_connect_errno()) 
{
    echo mysqli_connect_error();
    exit;   
}
else {

    
}
 
?>