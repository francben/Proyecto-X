function cajaMetal1(x,y,w,h){
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;

	this.idElementCajaMetal1 = "#CajaMetal1";

	this.dibujar = function(ctx){

		var c = $(this.idElementCajaMetal1)[0];
		console.log("C",c);
		ctx.save();
		ctx.drawImage(c,x,y,w,h);
		ctx.restore();
	}
}