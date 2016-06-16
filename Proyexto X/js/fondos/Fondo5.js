function Fondo5(x,y,w,h){
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;

	this.idElementFondo = "#imgFondo5";

	this.dibujar = function(ctx){

	var f1 = $(this.idElementFondo)[0];
		ctx.save();
  		ctx.drawImage(f1, x, y, w, h);
  		ctx.restore();
		
	} 
}