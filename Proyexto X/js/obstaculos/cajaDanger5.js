function cajaDanger5(x,y,w,h){
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;

	this.idElementCajaDanger4 = "#CajaDanger4";

	this.dibujar = function(ctx){

		var c = $(this.idElementCajaDanger4)[0];
		console.log("C",c);
		ctx.save();
		ctx.drawImage(c,x,y,w,h);
		ctx.restore();
	}
}