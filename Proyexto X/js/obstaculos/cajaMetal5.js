function cajaMetal5(x,y,w,h){
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;

	this.idElementCajaMetal5 = "#CajaMetal5";

	this.dibujar = function(ctx){

		var c = $(this.idElementCajaMetal5)[0];
		console.log("C",c);
		ctx.save();
		ctx.drawImage(c,x,y,w,h);
		ctx.restore();
	}
}