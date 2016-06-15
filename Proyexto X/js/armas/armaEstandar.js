function ArmaEstandar(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.tipoProyectil = BalaEnergia;

	this.dibujar = function(ctx){
		var grilla=8;
		ctx.save();
		ctx.lineWidth = 2;
		ctx.strokeStyle = "#00f"; 
		ctx.beginPath();
		ctx.ellipse(this.x+4/grilla*this.w, this.y+4/grilla*this.h, 2.5/grilla*this.w,1.5/grilla*this.h ,  0, 2.1, 4, true);
		ctx.closePath();
		ctx.stroke();

		ctx.fillStyle = "#fff"; 
		ctx.beginPath();
		ctx.ellipse(this.x+4/grilla*this.w, this.y+4/grilla*this.h, 2.5/grilla*this.w,1.5/grilla*this.h ,  0, 2.1, 4, true);
		ctx.closePath();
		ctx.fill();
		
		
		ctx.fillStyle = "#f00"; 
		ctx.beginPath();
		ctx.ellipse(this.x+2.5/grilla*this.w, this.y+4/grilla*this.h, 0.5/grilla*this.w, 1.25/grilla*this.h,  0, 0, 2*Math.PI, true);
		ctx.closePath();
		ctx.fill();
		ctx.fillStyle = "#000"; 
		ctx.beginPath();
		ctx.ellipse(this.x+2.5/grilla*this.w, this.y+4/grilla*this.h, 0.3/grilla*this.w, 1.05/grilla*this.h,  0, 0, 2*Math.PI, true);
		ctx.closePath();
		ctx.fill();

		ctx.strokeStyle = "#0f0"; 
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.4/grilla*this.w, this.y+3.5/grilla*this.h);
		ctx.lineTo(this.x+6.2/grilla*this.w,this.y+3.5/grilla*this.h);
		ctx.moveTo(this.x+4.8/grilla*this.w, this.y+4/grilla*this.h);
		ctx.lineTo(this.x+6.3/grilla*this.w,this.y+4/grilla*this.h);
		ctx.moveTo(this.x+4.4/grilla*this.w, this.y+4.5/grilla*this.h);
		ctx.lineTo(this.x+6.2/grilla*this.w,this.y+4.5/grilla*this.h);
		ctx.closePath();
		ctx.stroke();

		ctx.fillStyle= "#00f";
		ctx.beginPath();
		ctx.arc(this.x+3.2/grilla*this.w, this.y+3/grilla*this.h, 0.1/grilla*this.w, 0, 2*Math.PI, true);
		ctx.arc(this.x+3.4/grilla*this.w, this.y+3.7/grilla*this.h, 0.1/grilla*this.w, 0, 2*Math.PI, true);
		ctx.arc(this.x+3.4/grilla*this.w, this.y+4.4/grilla*this.h, 0.1/grilla*this.w, 0, 2*Math.PI, true);
		ctx.arc(this.x+3.2/grilla*this.w, this.y+5.1/grilla*this.h, 0.1/grilla*this.w, 0, 2*Math.PI, true);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	};
	this.disparar = function(nivel){
		nivel.elementos.push(new BalaEnergia(0,0,0,0));
	}

}