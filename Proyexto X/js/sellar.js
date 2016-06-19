function Sello(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	var wi = 12.0;
	var he = 12.0;
	var color = "rgb(25, 25, 25)";
	this.dibu0 = function(ctx){

		//sello
		ctx.strokeStyle = 'grey';
	//	ctx.strokeRect(this.x+0.5/wi*this.w, this.y+0.1/he*this.h, 8.6/wi*this.w, 2.1/he*this.h); 
		ctx.lineWidth = 2;
	//	ctx.strokeRect(this.x+0.6/wi*this.w, this.y+0.2/he*this.h, 8.4/wi*this.w, 1.9/he*this.h); 
		//ctx.strokeStyle = 'black';

		//letra P
		ctx.fillStyle = color;
		ctx.beginPath(); 
		ctx.moveTo(this.x+0.8/wi*this.w, this.y+0.4/he*this.h);
		ctx.lineTo(this.x+0.8/wi*this.w, this.y+1.9/he*this.h); 
		ctx.lineTo(this.x+1.0/wi*this.w, this.y+1.9/he*this.h);
		ctx.lineTo(this.x+1.0/wi*this.w, this.y+0.6/he*this.h);
		ctx.lineTo(this.x+1.3/wi*this.w, this.y+0.6/he*this.h);
		ctx.lineTo(this.x+1.3/wi*this.w, this.y+0.9/he*this.h);
		ctx.lineTo(this.x+1.0/wi*this.w, this.y+0.9/he*this.h);
		ctx.lineTo(this.x+1.0/wi*this.w, this.y+1.1/he*this.h);
		ctx.lineTo(this.x+1.5/wi*this.w, this.y+1.1/he*this.h);
		ctx.lineTo(this.x+1.5/wi*this.w, this.y+0.4/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		//letra R
		ctx.beginPath(); 
		ctx.moveTo(this.x+2.2/wi*this.w, this.y+0.4/he*this.h); 
		ctx.lineTo(this.x+1.6/wi*this.w, this.y+0.4/he*this.h);
		ctx.lineTo(this.x+1.6/wi*this.w, this.y+1.9/he*this.h); 
		ctx.lineTo(this.x+1.8/wi*this.w, this.y+1.9/he*this.h);
		ctx.lineTo(this.x+1.8/wi*this.w, this.y+1.4/he*this.h);
		ctx.lineTo(this.x+2.1/wi*this.w, this.y+1.4/he*this.h);
		ctx.lineTo(this.x+2.1/wi*this.w, this.y+1.9/he*this.h);
		ctx.lineTo(this.x+2.3/wi*this.w, this.y+1.9/he*this.h);
		ctx.lineTo(this.x+2.3/wi*this.w, this.y+1.2/he*this.h);
		ctx.lineTo(this.x+1.8/wi*this.w, this.y+1.2/he*this.h);
		ctx.lineTo(this.x+1.8/wi*this.w, this.y+0.6/he*this.h);
		ctx.lineTo(this.x+2.0/wi*this.w, this.y+0.6/he*this.h);
		ctx.lineTo(this.x+2.0/wi*this.w, this.y+1.2/he*this.h);
		ctx.lineTo(this.x+2.2/wi*this.w, this.y+1.2/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		//letra O
		ctx.beginPath(); 
		ctx.moveTo(this.x+2.6/wi*this.w, this.y+0.4/he*this.h); 
		ctx.lineTo(this.x+2.4/wi*this.w, this.y+0.4/he*this.h);
		ctx.lineTo(this.x+2.4/wi*this.w, this.y+1.9/he*this.h); 
		ctx.lineTo(this.x+3.0/wi*this.w, this.y+1.9/he*this.h); 
		ctx.lineTo(this.x+3.0/wi*this.w, this.y+0.4/he*this.h);
		ctx.lineTo(this.x+2.6/wi*this.w, this.y+0.4/he*this.h);
		ctx.lineTo(this.x+2.6/wi*this.w, this.y+0.6/he*this.h);
		ctx.lineTo(this.x+2.8/wi*this.w, this.y+0.6/he*this.h);
		ctx.lineTo(this.x+2.8/wi*this.w, this.y+1.7/he*this.h);
		ctx.lineTo(this.x+2.6/wi*this.w, this.y+1.7/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		//letra Y
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.1/wi*this.w, this.y+0.4/he*this.h); 
		ctx.lineTo(this.x+3.45/wi*this.w, this.y+1.2/he*this.h);
		ctx.lineTo(this.x+3.45/wi*this.w, this.y+1.9/he*this.h);
		ctx.lineTo(this.x+3.65/wi*this.w, this.y+1.9/he*this.h); 
		ctx.lineTo(this.x+3.65/wi*this.w, this.y+1.2/he*this.h);
		ctx.lineTo(this.x+4.0/wi*this.w, this.y+0.4/he*this.h);
		ctx.lineTo(this.x+3.8/wi*this.w, this.y+0.4/he*this.h);
		ctx.lineTo(this.x+3.55/wi*this.w, this.y+1.0/he*this.h);
		ctx.lineTo(this.x+3.3/wi*this.w, this.y+0.4/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		//letra E
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.7/wi*this.w, this.y+0.4/he*this.h); 
		ctx.lineTo(this.x+4.1/wi*this.w, this.y+0.4/he*this.h);
		ctx.lineTo(this.x+4.1/wi*this.w, this.y+1.9/he*this.h); 
		ctx.lineTo(this.x+4.7/wi*this.w, this.y+1.9/he*this.h); 
		ctx.lineTo(this.x+4.7/wi*this.w, this.y+1.7/he*this.h); 
		ctx.lineTo(this.x+4.3/wi*this.w, this.y+1.7/he*this.h);
		ctx.lineTo(this.x+4.3/wi*this.w, this.y+1.3/he*this.h);
		ctx.lineTo(this.x+4.5/wi*this.w, this.y+1.3/he*this.h);
		ctx.lineTo(this.x+4.5/wi*this.w, this.y+1.1/he*this.h);
		ctx.lineTo(this.x+4.3/wi*this.w, this.y+1.1/he*this.h);
		ctx.lineTo(this.x+4.3/wi*this.w, this.y+0.6/he*this.h);
		ctx.lineTo(this.x+4.7/wi*this.w, this.y+0.6/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		//letra C
		ctx.beginPath(); 
		ctx.moveTo(this.x+5.4/wi*this.w, this.y+0.4/he*this.h); 
		ctx.lineTo(this.x+4.8/wi*this.w, this.y+0.4/he*this.h);
		ctx.lineTo(this.x+4.8/wi*this.w, this.y+1.9/he*this.h); 
		ctx.lineTo(this.x+5.4/wi*this.w, this.y+1.9/he*this.h); 
		ctx.lineTo(this.x+5.4/wi*this.w, this.y+1.7/he*this.h); 
		ctx.lineTo(this.x+5.0/wi*this.w, this.y+1.7/he*this.h);
		ctx.lineTo(this.x+5.0/wi*this.w, this.y+0.6/he*this.h);
		ctx.lineTo(this.x+5.4/wi*this.w, this.y+0.6/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		//letra T
		ctx.beginPath(); 
		ctx.moveTo(this.x+5.8/wi*this.w, this.y+0.6/he*this.h); 
		ctx.lineTo(this.x+6.3/wi*this.w, this.y+0.6/he*this.h);
		ctx.lineTo(this.x+6.3/wi*this.w, this.y+0.4/he*this.h);
		ctx.lineTo(this.x+5.5/wi*this.w, this.y+0.4/he*this.h);
		ctx.lineTo(this.x+5.5/wi*this.w, this.y+0.6/he*this.h);
		ctx.lineTo(this.x+6.0/wi*this.w, this.y+0.6/he*this.h);
		ctx.lineTo(this.x+6.0/wi*this.w, this.y+1.9/he*this.h); 
		ctx.lineTo(this.x+5.8/wi*this.w, this.y+1.9/he*this.h); 
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		//letra O
		ctx.beginPath(); 
		ctx.moveTo(this.x+6.6/wi*this.w, this.y+0.4/he*this.h); 
		ctx.lineTo(this.x+6.4/wi*this.w, this.y+0.4/he*this.h);
		ctx.lineTo(this.x+6.4/wi*this.w, this.y+1.9/he*this.h); 
		ctx.lineTo(this.x+7.0/wi*this.w, this.y+1.9/he*this.h); 
		ctx.lineTo(this.x+7.0/wi*this.w, this.y+0.4/he*this.h);
		ctx.lineTo(this.x+6.6/wi*this.w, this.y+0.4/he*this.h);
		ctx.lineTo(this.x+6.6/wi*this.w, this.y+0.6/he*this.h);
		ctx.lineTo(this.x+6.8/wi*this.w, this.y+0.6/he*this.h);
		ctx.lineTo(this.x+6.8/wi*this.w, this.y+1.7/he*this.h);
		ctx.lineTo(this.x+6.6/wi*this.w, this.y+1.7/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		//letra X
		ctx.beginPath(); 
		ctx.moveTo(this.x+7.6/wi*this.w, this.y+0.4/he*this.h); 
		ctx.lineTo(this.x+8.0/wi*this.w, this.y+1.15/he*this.h);
		ctx.lineTo(this.x+7.6/wi*this.w, this.y+1.9/he*this.h);
		ctx.lineTo(this.x+7.9/wi*this.w, this.y+1.9/he*this.h); 
		ctx.lineTo(this.x+8.2/wi*this.w, this.y+1.35/he*this.h);
		ctx.lineTo(this.x+8.5/wi*this.w, this.y+1.9/he*this.h);
		ctx.lineTo(this.x+8.8/wi*this.w, this.y+1.9/he*this.h);
		ctx.lineTo(this.x+8.4/wi*this.w, this.y+1.15/he*this.h);
		ctx.lineTo(this.x+8.8/wi*this.w, this.y+0.4/he*this.h);
		ctx.lineTo(this.x+8.5/wi*this.w, this.y+0.4/he*this.h);
		ctx.lineTo(this.x+8.2/wi*this.w, this.y+0.95/he*this.h);
		ctx.lineTo(this.x+7.9/wi*this.w, this.y+0.4/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		ctx.strokeStyle = 'black';
	}
}