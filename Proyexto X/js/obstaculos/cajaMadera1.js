function cajaMadera1(x,y,w,h){
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;

	this.idElementCajaMadera1 = "#CajaMadera1";

	this.dibujar = function(ctx){

		var c = $(this.idElementCajaMadera1)[0];
		console.log("C",c);
		ctx.save();
		ctx.drawImage(c,x,y,w,h);
		ctx.restore();
	}
}