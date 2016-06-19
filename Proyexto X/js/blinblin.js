function Blinblin(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	var wi = 12.0;
	var he = 12.0;

	var ox = this.x+4.70/wi*this.w;
	var oy = this.y+1.20/he*this.h;
	var ow = 1.0/wi*this.w;
	var oh = 0.2/he*this.h;
	var orw = 0.2/wi*this.w;
	var orh = 0.2/he*this.h;	
	var posI = this.x+4.70/wi*this.w;
	var posF = this.x+5.50/wi*this.w;
	var vx = 0.3;
	var posx = this.x+4.70/wi*this.w;
	var posy = this.y+1.20/he*this.h;
	
	function animate0() { 
   		ctx.clearRect(ox, oy, ow, oh);
   		ctx.fillStyle = 'black';
		ctx.fillRect(ox, oy, ow, oh);
   		ctx.fillStyle = 'red';
   		ctx.fillRect(posx, posy, orw, orh); 
   		posx += vx;
	   	if (posx >= posF) {
        	vx = -0.3;
    	}
    	if (posx <= posI) {
        	vx = +0.3;
    	}
        setTimeout(animate0, 10); 
	};  
	animate0();
};