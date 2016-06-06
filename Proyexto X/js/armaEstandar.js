function ArmaEstandar(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.dibujar = function(ctx){
		ctx.save();
		ctx.lineWidth = 2;
		ctx.strokeStyle = "#00f"; 
		ctx.beginPath();
		ctx.ellipse(this.x+4/8*this.w, this.y+4/8*this.h, 2.5/8*this.w,1.5/8*this.h ,  0, 2.1, 4, true);
		ctx.closePath();
		ctx.stroke();

		ctx.fillStyle = "#fff"; 
		ctx.beginPath();
		ctx.ellipse(this.x+4/8*this.w, this.y+4/8*this.h, 2.5/8*this.w,1.5/8*this.h ,  0, 2.1, 4, true);
		ctx.closePath();
		ctx.fill();
		
		
		ctx.fillStyle = "#f00"; 
		ctx.beginPath();
		ctx.ellipse(this.x+2.5/8*this.w, this.y+4/8*this.h, 0.5/8*this.w, 1.25/8*this.h,  0, 0, 2*Math.PI, true);
		ctx.closePath();
		ctx.fill();
		ctx.fillStyle = "#000"; 
		ctx.beginPath();
		ctx.ellipse(this.x+2.5/8*this.w, this.y+4/8*this.h, 0.3/8*this.w, 1.05/8*this.h,  0, 0, 2*Math.PI, true);
		ctx.closePath();
		ctx.fill();

		ctx.strokeStyle = "#0f0"; 
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.4/8*this.w, this.y+3.5/8*this.h);
		ctx.lineTo(this.x+6.2/8*this.w,this.y+3.5/8*this.h);
		ctx.moveTo(this.x+4.8/8*this.w, this.y+4/8*this.h);
		ctx.lineTo(this.x+6.3/8*this.w,this.y+4/8*this.h);
		ctx.moveTo(this.x+4.4/8*this.w, this.y+4.5/8*this.h);
		ctx.lineTo(this.x+6.2/8*this.w,this.y+4.5/8*this.h);
		ctx.closePath();
		ctx.stroke();

		ctx.fillStyle= "#00f";
		ctx.beginPath();
		ctx.arc(this.x+3.2/8*this.w, this.y+3/8*this.h, 0.1/8*this.w, 0, 2*Math.PI, true);
		ctx.arc(this.x+3.4/8*this.w, this.y+3.7/8*this.h, 0.1/8*this.w, 0, 2*Math.PI, true);
		ctx.arc(this.x+3.4/8*this.w, this.y+4.4/8*this.h, 0.1/8*this.w, 0, 2*Math.PI, true);
		ctx.arc(this.x+3.2/8*this.w, this.y+5.1/8*this.h, 0.1/8*this.w, 0, 2*Math.PI, true);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	}

}