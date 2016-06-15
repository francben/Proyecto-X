function Viper(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	var grilla = 8;

	this.dibujar = function(c){

		

		// dibujando la cara 
		c.strokeRect(this.x + 3.2/grilla * this.w ,this.y + 0.4/grilla * this.h ,4.5/grilla * this.w  , 3 /grilla * this.h);


		// dibuja el ojo izquierdo
		c.beginPath();
		c.arc(this.x+4.5/grilla*this.w, this.y+1/grilla*this.h,  0.5/grilla*this.h, 0, Math.PI*2, false);
		c.closePath();
		c.fill();

		// dibuja el ojo derecho
		c.beginPath();
		c.arc(this.x+6/grilla*this.w, this.y+1/grilla*this.h, 0.5/grilla*this.h, 0, Math.PI*2, false);
		c.closePath();
		c.fill();

		// dibuja la boca
		c.strokeRect(this.x + 4.5/grilla * this.w ,this.y + 2.2 /grilla * this.h ,2/grilla * this.w  , 0.3 /grilla * this.h);


		// dibujando el cuello
		c.strokeRect(this.x + 5/grilla * this.w ,this.y + 3.3/grilla * this.h ,0.8/grilla * this.w  , 1.1 /grilla * this.h);

		// dibujando la PANZA
		c.strokeRect(this.x + 2.5/grilla * this.w ,this.y + 4.5/grilla * this.h ,6/grilla * this.w  , 5 /grilla * this.h);

		//dibujando las pierna derecha
		c.strokeRect(this.x + 2.9/grilla * this.w ,this.y + 10/grilla * this.h ,2/grilla * this.w  , 4 /grilla * this.h);

		//dibujando las pierna derecha
		c.strokeRect(this.x + 5.8/grilla * this.w ,this.y + 10/grilla * this.h ,2/grilla * this.w  , 4 /grilla * this.h);

		//dibujando el pie derecho
		c.strokeRect(this.x + 2/grilla * this.w ,this.y + 14/grilla * this.h ,2/grilla * this.w  , 0.5 /grilla * this.h);

		//dibujando el pie izquierdo
		c.strokeRect(this.x + 6.8/grilla * this.w ,this.y + 14/grilla * this.h ,2/grilla * this.w  , 0.5 /grilla * this.h);


		//dibujando brazos

		

		


	}

}