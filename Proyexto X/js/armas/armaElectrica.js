function ArmaElectrica(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.dibujar = function(context){
		context.lineWidth = 5;
		context.strokeStyle = "#00f"; 
		context.beginPath();
		context.ellipse(this.x+4/8*this.w, this.y+4/8*this.h, 2.5/8*this.w,1.5/8*this.h ,  0, 0, 2*Math.PI, true);
		context.closePath();
		context.stroke();
		context.clearRect(this.x+1/8*this.w, this.y+2.5/8*this.h, 1.5/8*this.w, 3/8*this.h);
		
		context.fillStyle = "#f00"; 
		context.beginPath();
		context.ellipse(this.x+2.5/8*this.w, this.y+4/8*this.h, 0.5/8*this.w, 1.25/8*this.h,  0, 0, 2*Math.PI, true);
		context.closePath();
		context.fill();
		context.fillStyle = "#000"; 
		context.beginPath();
		context.ellipse(this.x+2.5/8*this.w, this.y+4/8*this.h, 0.2/8*this.w, 0.8/8*this.h,  0, 0, 2*Math.PI, true);
		context.closePath();
		context.fill();

		context.strokeStyle = "#000"; 
		context.beginPath(); 
		context.moveTo(this.x+2/8*this.w, this.y+4/8*this.h);
		context.lineTo(this.x+2.6/8*this.w,this.y+3.8/8*this.h);
		context.lineTo(this.x+2.6/8*this.w,this.y+4.2/8*this.h);
		context.closePath();
		context.stroke();
		context.strokeStyle = "#f00"; 
		context.beginPath(); 
		context.moveTo(this.x+2.1/8*this.w, this.y+4/8*this.h);
		context.lineTo(this.x+2.55/8*this.w,this.y+3.89/8*this.h);
		context.lineTo(this.x+2.55/8*this.w,this.y+4.1/8*this.h);
		context.closePath();
		context.stroke();
		context.fillStyle= "#f00";
		context.beginPath(); 
		context.arc(this.x+1.8/8*this.w, this.y+4/8*this.h, 0.3/8*this.w, 0, 2*Math.PI, true);
		context.closePath();
		context.fill();

		context.strokeStyle = "#ff0"; 
		context.beginPath(); 
		context.moveTo(this.x+3.6/8*this.w, this.y+3/8*this.h);
		context.lineTo(this.x+5/8*this.w,this.y+3.6/8*this.h);
		context.lineTo(this.x+4.3/8*this.w,this.y+4/8*this.h);
		context.lineTo(this.x+5.8/8*this.w,this.y+4.6/8*this.h);
		context.lineTo(this.x+4.7/8*this.w,this.y+4/8*this.h);
		context.lineTo(this.x+5.1/8*this.w,this.y+3.7/8*this.h);
		context.closePath();
		context.stroke();

		context.fillStyle= "#00f";
		context.beginPath();
		context.arc(this.x+3.2/8*this.w, this.y+3/8*this.h, 0.1/8*this.w, 0, 2*Math.PI, true);
		context.arc(this.x+3.4/8*this.w, this.y+3.7/8*this.h, 0.1/8*this.w, 0, 2*Math.PI, true);
		context.arc(this.x+3.4/8*this.w, this.y+4.4/8*this.h, 0.1/8*this.w, 0, 2*Math.PI, true);
		context.arc(this.x+3.2/8*this.w, this.y+5.1/8*this.h, 0.1/8*this.w, 0, 2*Math.PI, true);
		context.closePath();
		context.fill();
	}
}