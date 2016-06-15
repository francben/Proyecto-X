function ArmaMetralleta(x, y ,w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.dibujar = function(context){
		context.fillStyle="#333";
		context.fillRect(this.x+1.2/8*this.w, this.y+3.6/8*this.h, 6/8*this.w, 2.8/8*this.h);
		//cilindro principal
		context.lineWidth = 5;
		context.fillStyle = "#333"; 
		context.beginPath();
		context.ellipse(this.x+0.5/8*this.w, this.y+5/8*this.h, 0.7/8*this.w,1.5/8*this.h ,  0, 0, 2*Math.PI, true);
		context.ellipse(this.x+1/8*this.w, this.y+5/8*this.h, 0.7/8*this.w,1.5/8*this.h ,  0, 0, 2*Math.PI, true);
		context.closePath();
		context.fill();
		//contorno del cilindro principal
		context.lineWidth = 1;
		context.strokeStyle = "#000"; 
		context.beginPath();
		context.ellipse(this.x+0.5/8*this.w, this.y+5/8*this.h, 0.7/8*this.w,1.5/8*this.h ,  0, 0, 2*Math.PI, true);
		context.closePath();
		context.stroke();
		//agujeros de balas
		context.fillStyle= "#000";
		context.beginPath();
		context.arc(this.x+0.2/8*this.w, this.y+4.5/8*this.h, 0.1/8*this.w, 0, 2*Math.PI, true);
		context.arc(this.x+0.4/8*this.w, this.y+4.1/8*this.h, 0.1/8*this.w, 0, 2*Math.PI, true);
		context.arc(this.x+0.7/8*this.w, this.y+4.3/8*this.h, 0.1/8*this.w, 0, 2*Math.PI, true);
		context.arc(this.x+0.8/8*this.w, this.y+4.7/8*this.h, 0.1/8*this.w, 0, 2*Math.PI, true);
		context.arc(this.x+0.8/8*this.w, this.y+5.1/8*this.h, 0.1/8*this.w, 0, 2*Math.PI, true);
		context.arc(this.x+0.75/8*this.w, this.y+5.5/8*this.h, 0.1/8*this.w, 0, 2*Math.PI, true);
		context.arc(this.x+0.65/8*this.w, this.y+5.9/8*this.h, 0.1/8*this.w, 0, 2*Math.PI, true);
		context.arc(this.x+0.4/8*this.w, this.y+6/8*this.h, 0.1/8*this.w, 0, 2*Math.PI, true);
		context.arc(this.x+0.2/8*this.w, this.y+5.7/8*this.h, 0.1/8*this.w, 0, 2*Math.PI, true);
		context.arc(this.x+0.13/8*this.w, this.y+5.3/8*this.h, 0.1/8*this.w, 0, 2*Math.PI, true);
		context.arc(this.x+0.1/8*this.w, this.y+4.9/8*this.h, 0.1/8*this.w, 0, 2*Math.PI, true);
		context.closePath();
		context.fill();
		//centro del cilindro en rojo
		context.lineWidth = 5;
		context.fillStyle = "#f00"; 
		context.beginPath();
		context.ellipse(this.x+0.5/8*this.w, this.y+5.1/8*this.h, 0.1/8*this.w,0.6/8*this.h ,  0, 0, 2*Math.PI, true);
		context.closePath();
		context.fill();
		//cuerpo con rayas
		context.lineWidth = 3;
		context.strokeStyle = "#000"; 
		context.beginPath(); 
		context.moveTo(this.x+1.2/8*this.w, this.y+3.6/8*this.h);
		context.lineTo(this.x+6.2/8*this.w,this.y+3.6/8*this.h);
		context.closePath();
		context.stroke();
		context.beginPath(); 
		context.moveTo(this.x+1.5/8*this.w, this.y+3.9/8*this.h);
		context.lineTo(this.x+6.2/8*this.w,this.y+3.9/8*this.h);
		context.closePath();
		context.stroke();
		context.beginPath(); 
		context.moveTo(this.x+1.7/8*this.w, this.y+5/8*this.h);
		context.lineTo(this.x+6.2/8*this.w,this.y+5/8*this.h);
		context.closePath();
		context.stroke();
		context.beginPath(); 
		context.moveTo(this.x+1.6/8*this.w, this.y+5.5/8*this.h);
		context.lineTo(this.x+6.2/8*this.w,this.y+5.5/8*this.h);
		context.closePath();
		context.stroke();
		context.beginPath(); 
		context.moveTo(this.x+1.5/8*this.w, this.y+6.1/8*this.h);
		context.lineTo(this.x+6.2/8*this.w,this.y+6.1/8*this.h);
		context.closePath();
		context.stroke();
		context.beginPath(); 
		context.moveTo(this.x+1.2/8*this.w, this.y+6.4/8*this.h);
		context.lineTo(this.x+6.2/8*this.w,this.y+6.4/8*this.h);
		context.closePath();
		context.stroke();
		//cuerpo
		context.strokeStyle="#000";
		context.strokeRect(this.x+6.2/8*this.w, this.y+3/8*this.h, 8/8*this.w, 4/8*this.h);
		context.fillStyle="#333";
		context.fillRect(this.x+6.23/8*this.w, this.y+3.03/8*this.h, 7.92/8*this.w, 3.91/8*this.h);
		context.strokeStyle="#000";
		context.strokeRect(this.x+7/8*this.w, this.y+2/8*this.h, 8/8*this.w, 4/8*this.h);
		context.fillStyle="#333";
		context.fillRect(this.x+7.02/8*this.w, this.y+2.03/8*this.h, 7.92/8*this.w, 3.91/8*this.h);
		//rayas del cuerpo
		context.lineWidth = 4;
		context.strokeStyle = "#000"; 
		context.beginPath(); 
		context.moveTo(this.x+7.2/8*this.w, this.y+2.2/8*this.h);
		context.lineTo(this.x+8/8*this.w,this.y+5.9/8*this.h);
		context.closePath();
		context.stroke();
		context.beginPath(); 
		context.moveTo(this.x+8/8*this.w, this.y+2.2/8*this.h);
		context.lineTo(this.x+7.2/8*this.w,this.y+5.9/8*this.h);
		context.closePath();
		context.stroke();
	}
}