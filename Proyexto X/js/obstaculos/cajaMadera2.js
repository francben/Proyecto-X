function cajaMadera2(x,y,w,h){
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;

	this.idElementCajaMadera2 = "#CajaMadera2";

	this.dibujar = function(ctx){

		var c = $(this.idElementCajaMadera2)[0];
		console.log("C",c);
		ctx.save();
		ctx.drawImage(c,x,y,w,h);
		ctx.restore();
	}
}