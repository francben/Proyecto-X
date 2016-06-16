function Fondo1(x,y,w,h){
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;

	this.idElementFondo = "#imgFondo1";

	this.dibujar = function(ctx){
		var f1 = new Image();
		f1.src="img/img2.jpg";

		f1.onload = function(){
  			ctx.drawImage(f1, x, y, w, h);
		};
		/*
		console.log(ctx);
		var f1 = $(this.idElementFondo)[0];
		ctx.drawImage(f1,0,0);
		*/
			
	
	}
}