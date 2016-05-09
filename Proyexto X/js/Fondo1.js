function Fondo1(x, y, w, h){
					this.x = x;
					this.y = y;
					this.w = w;
					this.h = h;
	this.dibujar = function(ctx){
		// puerta medio
		ctx.strokeStyle = "black";
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x+0/8*this.w, this.y+0/8*this.h); // Set the path origin
		ctx.lineTo(this.x+0/8*this.w, this.y+20/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke(); // Outline the path


	var canvas = document.getElementById("mycanvas");
	var ctx = canvas.getContext("2d");
	//context = canvas.get(0).getContext("2d");
	var fondo1 = new Image();
	
	fondo1.src = "img2.jpg";
		

	fondo1.onload = function(){
		ctx.drawImage(fondo1,0,0)
			
	} 

}