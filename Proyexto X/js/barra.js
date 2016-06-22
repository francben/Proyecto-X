function Barra(x, y, w, h, e){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.e = e;
	this.dibujar = function(b){
		var porcentajeEnergiaJugador = this.e/100.0;
		var grilla = 8;
		b.save();
		//contorno de vida PERSONAJE
		b.lineWidth = 2;
		b.strokeStyle= "#0F0"
		b.strokeRect(this.x+ -8/grilla *this.w, this.y + -6 /grilla *this.h,6/grilla * this.w*porcentajeEnergiaJugador, 1/grilla * this.h);

		//barra de vida del personaje
		b.fillStyle= "blue";
		b.fillRect(this.x + -8/grilla * this.w ,this.y + -8/grilla * this.h ,grilla * this.w*porcentajeEnergiaJugador , 0.9 /grilla * this.h);
		
		//barra de vida del enemigo

		b.restore();

	}

}