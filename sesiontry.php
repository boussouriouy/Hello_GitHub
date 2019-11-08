<?php
if(isset($_GET["Choice"]))   $Choice = $_GET["Choice"];
else $Choice = null;

session_start();

?>

<form action="sesiontry.php" method="get">
<?php  
if ($Choice == "setdata")
{
  $name = $_GET["name"];
  $value = $_GET["value"];
  $_SESSION[$name] = $value;
}
else  $name = $value = "";
echo "<input type='text' name='name' value='$name'>
<input type='text' name='value' value='$value'>";

?>	

<input type="hidden" name="Choice" value="setdata">
<input type="submit" value="set data session">
<input type="reset" value="clear">

</form>


<form action="sesiontry.php" method="get">
 <?php
if($Choice == "getdata")
{
 $name = $_GET["name"];
 $value = $_SESSION[$name];
 
}
else  $name = $value ="";

echo "<input type='text' name='name' value='$name'>
<input type='text' value='$value'>";
 ?>	

<input type="hidden" name="Choice" value="getdata">
<input type="submit" value="get data session">
<input type="reset" value="clear">
</form>


<form action="sesiontry.php" method="get">
<?php
if($Choice == "delAdata")

{   $name = $_GET["name"];
	unset($_SESSION[$name]);
}
echo "<input type='text' name='name'>";

?>
<input type="hidden" name="Choice" value="delAdata">
<input type="submit" value="delete single session data">
<input type="reset" value="clear">

</form>


<form action="sesiontry.php" method="get">
<?php
 if($Choice == "getAlldata")
 {
    //$name = $_GET["name"];
    $str = print_r($_SESSION,$RETURN = true);

 }
  else $str = "";

echo "<input type='text' value='$str'>";

?>

<input type="hidden" name="Choice" value="getAlldata">
<input type="submit" value="get All session data">
<input type="reset" value="clear">

</form>

<form action="sesiontry.php"  method="get">
 <?php
   
   if($Choice == "delAll")
    {
    	session_destroy();
    }

 ?>
	
 <input type="hidden" name="Choice" value="delAll">
 <input type="submit" value="Delete all sessions">

</form>