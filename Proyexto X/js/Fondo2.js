function Fondo2(){
	var canvas = document.getElementById("mycanvas");
	var ctx = canvas.getContext("2d");
	//context = canvas.get(0).getContext("2d");
	var fondo2 = new Image();
	
	fondo2.src = "img5.jpg";
		

	fondo2.onload = function(){
		ctx.drawImage(fondo2,0,0)
		ctx.drawImage(fondo2,284,0)
		ctx.drawImage(fondo2,0,175)
		ctx.drawImage(fondo2,284,175)
		ctx.drawImage(fondo2,0,350)
		ctx.drawImage(fondo2,284,350)
		//partes de la izq
		ctx.drawImage(fondo2,568,350)
		ctx.drawImage(fondo2,568,175)
		ctx.drawImage(fondo2,568,0)
	} 
}