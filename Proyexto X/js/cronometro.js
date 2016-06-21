
// 1000 = 1 segundo
//var mins = 04;
//var segs = 59;
//var s;
function Cronometro(){
	var mins = 04;
	var segs = 59;

	this.dibujar = function(c){


	c.document.getElementById("segundos").innerHTML=segs;
	c.document.getElementById("minutos").innerHTML=mins;

	if(segs == 0){
	mins--;
	segs=59;
	}
	else{
	segs--;
	}
	}
	var m = setInterval('cronometro()', 1000)
