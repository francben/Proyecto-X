function cajaDanger3(x,y,w,h){
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;

	this.idElementCajaDanger3 = "#CajaDanger3";

	this.dibujar = function(ctx){

		var c = $(this.idElementCajaDanger3)[0];
		console.log("C",c);
		ctx.save();
		ctx.drawImage(c,x,y,w,h);
		ctx.restore();
	}
}