<?php
    $link=mysqli_connect($dbhost,$dbuser,$dbpass, $dbname);
    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: ". mysqli_connect_error();
        die();
    }
    mysqli_set_charset($link,"utf8"); 
    
?>