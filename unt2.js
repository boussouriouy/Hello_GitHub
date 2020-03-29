
function prompt(){

this.layer =  function(print,func){

	var w  = window.innerWidth;
	var h = window.innerHeight;

	var c = document.getElementById('cover');
	var b = document.getElementById('box');

	c.style.display = "block";
	c.style.height = h+"px";

	b.style.display = "block";
	b.style.top = "90px";
	b.style.left = (w/2) - (500 * .5)+"px";

	document.getElementById('head').innerHTML = "A value is requires";
	document.getElementById('body').innerHTML = print;
	document.getElementById('body').innerHTML += '<br><input id="p_v1">';
	document.getElementById('foot').innerHTML = '<button onclick="Nope.ok(\''+func+'\')">OK</button><button onclick="Nope.Cncl()">Cncl</button>';
}

this.Cncl = function(){

	document.getElementById('cover').style.display = "none";
	document.getElementById('box').style.display = "none";
}

this.ok = function(func){

	  var hitme = document.getElementById('p_v1').value;
	  window[func](hitme);

	document.getElementById('cover').style.display = "none";
	document.getElementById('box').style.display = "none";
}

}

var Nope =  new prompt();
//function del(idname){document.getElementById(idname).value = "";}