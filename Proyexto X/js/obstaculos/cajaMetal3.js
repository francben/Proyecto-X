function cajaMetal3(x,y,w,h){
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;

	this.idElementCajaMetal3 = "#CajaMetal3";

	this.dibujar = function(ctx){

		var c = $(this.idElementCajaMetal3)[0];
		console.log("C",c);
		ctx.save();
		ctx.drawImage(c,x,y,w,h);
		ctx.restore();
	}
}