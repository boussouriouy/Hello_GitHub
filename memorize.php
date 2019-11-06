<?php
$Choice = $_GET["pick"];

if ($Choice == "setCookie")

{
$x = $_GET["x"];
$y = $_GET["y"];
$expire = time()+3600;
setcookie($x , $y ,$expire);

}
else if ($Choice == "getCookie")

{
 $x = $_GET["x"];
 echo $_COOKIE[$x];

}
else if ($Choice == "delCookie")
{
 $x = $_GET["x"];
 $past = time() -1;
 setcookie($x, '' ,$past);

}

else if ($Choice == "dellAll")
{
 $past = time() -1;
 foreach($_COOKIE as $x => $y)
 {
 	setcookie($x,$past,$y);
 }

}
else  if ($Choice == "displayOne")
{
 $x = $_GET["x"];
 print_r($_COOKIE);

}

else if ($Choice == "displayAll")
{     // There is no expiration time here
 $x = $_GET["x"];
 foreach($_COOKIE as $x => $y)
 {
  echo $x = $y;
 }

}




?>