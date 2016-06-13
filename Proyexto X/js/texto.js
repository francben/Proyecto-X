function Texto(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	var wi = 4.0;
	var he = 4.0;
	var tw = this.x+0.1/wi*this.w;
	var th = this.y+0.1/he*this.h;
	var px = this.x+0.1/wi*this.w;
	var py = this.y+0.1/he*this.h;
	var pw = 0.1/wi*this.w;
	var ph = 0.1/he*this.h;
	var esp = 50;
	var posi = tw;
	var posf = posi + 450;
	var e = 0;
	var a = 0;
	var letra = [" ", "P", "R", "O", "Y", "E", "C", "T", "O", " "];
	function animate2() { 
		ctx.clearRect(px, py, pw, ph);
		ctx.font = "70px sans-serif";
		ctx.fillStyle = 'white';
		ctx.fillText(letra[a], tw, th);
		if(a<[9] || tw<posf){
			tw += esp;
			e = 1;
			a+= e;
		}
		if(a==[9] || tw==posf){
			ctx.font = "90px sans-serif";
			ctx.fillStyle = 'red';
			ctx.fillText("X", tw, th);
   		}
		setTimeout(animate2, 500);
	}; 
	animate2();
}