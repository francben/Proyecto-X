function Robot(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.dibujar = function(c){

		// dibuja el cuadrado exterior en rojo
		//c.strokeStyle = "#ff0000";
		//c.strokeRect(this.x, this.y, this.w, this.h);

		//c.fillStyle = "#0000ff";
		// dibujar la oreja izquierda
		//c.fillRect(this.x, this.y+2/8*this.h, 1/9*this.w, 4/8*this.h);

		// dibujar el contorno de la cara
		//c.strokeStyle = "#0000ff";
		//c.strokeRect(this.x+1/9*this.w, this.y, 7/9*this.w, this.h);

		// dibujando la cara 
		c.strokeRect(this.x + 3.1/8 * this.w ,this.y + 0.5/8 * this.h ,4.5/8 * this.w  , 3 /8 * this.h);


		// dibuja el ojo izquierdo
		c.beginPath();
		c.arc(this.x+4.5/8*this.w, this.y+1/8*this.h,  0.5/8*this.h, 0, Math.PI*2, false);
		c.closePath();
		c.fill();

		// dibuja el ojo derecho
		c.beginPath();
		c.arc(this.x+6/8*this.w, this.y+1/8*this.h, 0.5/8*this.h, 0, Math.PI*2, false);
		c.closePath();
		c.fill();

		// dibuja la boca
		c.strokeRect(this.x + 4.5/8 * this.w ,this.y + 2.2 /8 * this.h ,2/8 * this.w  , 0.3 /8 * this.h);


		// dibujando el cuello
		c.strokeRect(this.x + 3/8 * this.w ,this.y + 0.2/8 * this.h ,4.5/8 * this.w  , 3 /8 * this.h);

		// dibujando la PANZA
		c.strokeRect(this.x + 2.5/8 * this.w ,this.y + 4.5/8 * this.h ,6/8 * this.w  , 5 /8 * this.h);

		//dibujando las pierna derecha
		c.strokeRect(this.x + 2.9/8 * this.w ,this.y + 10/8 * this.h ,2/8 * this.w  , 4 /8 * this.h);

		//dibujando las pierna derecha
		c.strokeRect(this.x + 5.8/8 * this.w ,this.y + 10/8 * this.h ,2/8 * this.w  , 4 /8 * this.h);

		//dibujando el pie derecho
		c.strokeRect(this.x + 2/8 * this.w ,this.y + 14/8 * this.h ,2/8 * this.w  , 0.5 /8 * this.h);

		//dibujando el pie izquierdo
		c.strokeRect(this.x + 6.8/8 * this.w ,this.y + 14/8 * this.h ,2/8 * this.w  , 0.5 /8 * this.h);

		//dibujando brazo derecho
		context.beginPath(); // Start the path
		context.moveTo(this.x + 2.5/8 * this.w, this.y + 3/8); // Set the path origin
		context.lineTo(this.w, this.); // Set the path destination
		context.closePath(); // Close the path
		context.stroke(); // Outline the path


		//dibujando brazo IZQUIERDO
		//context.beginPath(); // Start the path
		//context.moveTo(this.x + 3.5/8,this.y  150); // Set the path origin
		//context.lineTo(180, 200); // Set the path destination
		//		context.closePath(); // Close the path
		//		context.stroke(); // Outline the path


	}

}