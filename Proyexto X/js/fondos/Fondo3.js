function Fondo3(x,y,w,h){
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;
	this.idElementFondo = "#imgFondo3";

	this.dibujar = function(ctx){

		var f1 = $(this.idElementFondo)[0];
	console.log("F1",f1);
		ctx.drawImage(f1,0,0);

			
	
	}
}