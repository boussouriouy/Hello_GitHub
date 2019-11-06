<?php

//This is how to set a cookie in php
$x = $_GET["x"];
$y = $_GET["y"];
$expire = time()+3600;
setcookie($x , $y ,$expire);

//This how to get a cookie in php
 $x = $_GET["x"];
 echo $_COOKIE[$x];

//This how to delete one cookie in php
 $x = $_GET["x"];
 $past = time() -1;
 setcookie($x, '' ,$past);


 //This is how o delete all your cookies in php
 $past = time() -1;
 foreach($_COOKIE as $x => $y)
 {
 	setcookie($x,$past,$y);
 }

//This is how to print one cookie in php
 $x = $_GET["x"];
 print_r($_COOKIE);

//This how to print all your cookies in php
 $x = $_GET["x"];
 foreach($_COOKIE as $x => $y)
 {
  echo $x = $y;
 }





?>