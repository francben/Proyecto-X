function Fondo3(){
	var canvas = document.getElementById("mycanvas");
	var ctx = canvas.getContext("2d");
	//context = canvas.get(0).getContext("2d");
	var fondo3 = new Image();
	
	fondo3.src = "img4.jpg";
	
	fondo3.onload = function(){
		ctx.drawImage(fondo3,0,0)
	}        
}