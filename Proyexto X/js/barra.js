function Barra(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	var grilla = 8;

	this.dibujar = function(b){

	
		b.save();
		//contorno de vida PERSONAJE
		b.strokeRect(this.x+ -8/grilla *this.w, this.y + -8 /grilla *this.h, 10/grilla * this.w, 1/grilla * this.h);

		//barra de vida del personaje
		b.fillStyle= "black";
		b.fillRect(this.x + -8/grilla * this.w ,this.y + -8/grilla * this.h ,10/grilla * this.w  , 0.9 /grilla * this.h);
		
		//barra de vida del enemigo

		b.restore();

	}

}