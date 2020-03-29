function boss(){
 
 this.Mn = function(show){

     var w = window.innerWidth;
     var h = window.innerHeight;

     var c  = document.getElementById('cover');
     var b  = document.getElementById('box');

     c.style.display = "block";
     c.style.height = h+"px";

     b.style.display = "block";
     b.style.top = "90px";
     b.style.left = (w/2) - (600 * .5)+"px";

     document.getElementById('head').innerHTML = 'NYU Alert Box! <img src ="im.png" onclick="Alt.Bd()">';
     document.getElementById('body').innerHTML = show;
     //document.getElementById('foot').innerHTML = '<input type="button" value="Ok" onclick="Alt.Bd()">';

 }

 this.Bd = function(){

   document.getElementById('cover').style.display = "none";
   document.getElementById('box').style.display ="none";

 }

}
var Alt =  new boss();
function del(idname){document.getElementById(idname).value = "";}