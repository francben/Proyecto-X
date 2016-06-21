function Viper1(x, y, w, h, dx, dy){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.velocidad = 9;
	this.dirX = dx || -1;
	this.dirY = dy || 0;
	this.energia=100;
	this.arma = new ArmaEstandarEnemigo(x,y,w,h);
	this.disparar = function(nivel){
		this.arma.disparar(nivel);
	};
	this.mover = function(){
		if(dirX == 0 && dirY == 0) return;
		if(dirX == 1){
			this.x += this.velocidad;
			this.arma.mover();
		}
		else if(dirX == -1){
			this.x -= this.velocidad;
			this.arma.mover();
		}

		if(dirY == 1){
			this.y += this.velocidad;
			this.arma.mover();
		}
		else if(dirY == -1){
			this.y -= this.velocidad;
			this.arma.mover();
		}	
	};

	this.dibujar = function(c){

		var grilla = 8;
		c.save();
		// dibujando la cara 
		c.fillStyle= "black";
		c.fillRect(this.x + 3.7/grilla * this.w ,this.y + 0.3/grilla * this.h ,3.8/grilla * this.w  , 3 /grilla * this.h);


		// dibuja el ojo izquierdo
		c.fillStyle= "red";
		c.beginPath();
		c.arc(this.x+5.5/grilla*this.w, this.y+1/grilla*this.h,  0.4/grilla*this.h, 0, Math.PI*2, false);
		c.closePath();
		c.fill();

		// dibuja el ojo derecho
		c.fillStyle= "red";
		c.beginPath();
		c.arc(this.x+7.1/grilla*this.w, this.y+1/grilla*this.h, 0.4/grilla*this.h, 0, Math.PI*2, false);
		c.closePath();
		c.fill();

		// dibuja la boca
		c.fillStyle= "red";
		c.fillRect(this.x + 6/grilla * this.w ,this.y + 2.2 /grilla * this.h ,1.5/grilla * this.w  , 0.4 /grilla * this.h);


		// dibujando el cuello
		c.fillStyle= "red";
		c.fillRect(this.x + 5/grilla * this.w ,this.y + 3.3/grilla * this.h ,1.5/grilla * this.w  , 1.1 /grilla * this.h);
		

		// dibujando la PANZA
		c.fillStyle= "silver";
		c.fillRect(this.x + 2.8/grilla * this.w ,this.y + 4.3/grilla * this.h ,5.6/grilla * this.w  , 5 /grilla * this.h);

		//dibujando las pierna derecha
		c.fillStyle= "silver";
		c.fillRect(this.x + 3.8/grilla * this.w ,this.y + 9.3/grilla * this.h ,2/grilla * this.w  , 4 /grilla * this.h);

		//dibujando las pierna derecha
		c.fillStyle= "silver";
		c.fillRect(this.x + 5.8/grilla * this.w ,this.y + 9.3/grilla * this.h ,2/grilla * this.w  , 4 /grilla * this.h);

		//dibujando el pie derecho
		c.fillStyle= "black";
		c.fillRect(this.x + 4/grilla * this.w ,this.y + 13.3/grilla * this.h ,2/grilla * this.w  , 0.7 /grilla * this.h);

		//dibujando el pie izquierdo
		c.fillStyle= "black";
		c.fillRect(this.x + 6/grilla * this.w ,this.y + 13.3/grilla * this.h ,2/grilla * this.w  , 0.7 /grilla * this.h);


		//dibujando hombro izquierdo
		c.fillStyle= "black";
		c.fillRect(this.x + 3.9/grilla * this.w ,this.y + 4.9/grilla * this.h ,1.5/grilla * this.w  , 1.1 /grilla * this.h);

		//dibujando brazo izquierdo
		c.fillStyle= "silver";
		c.strokeRect(this.x + 5.4/grilla * this.w ,this.y + 5.2/grilla * this.h ,3.5/grilla * this.w  , 0.6 /grilla * this.h);

		//dibujando dedo 1 
		c.fillStyle= "black";
		c.fillRect(this.x + 8.9/grilla * this.w ,this.y + 5.2/grilla * this.h ,1/grilla * this.w  , 0.2 /grilla * this.h);


		//dibujando dedo 2 
		c.fillStyle= "black";
		c.fillRect(this.x + 8.9/grilla * this.w ,this.y + 5.6/grilla * this.h ,1/grilla * this.w  , 0.2 /grilla * this.h);


		//dibujando hombro derecho
		c.fillStyle= "black";
		c.fillRect(this.x + 5/grilla * this.w ,this.y + 6.1/grilla * this.h ,1.5/grilla * this.w  , 1.1 /grilla * this.h);

		//dibujando brazo derecho
		c.fillStyle= "silver";
		c.strokeRect(this.x + 6.5/grilla * this.w ,this.y + 6.4/grilla * this.h ,2.4/grilla * this.w  , 0.6 /grilla * this.h);

		//dibujando dedo 1 dercho
		c.fillStyle= "black";
		c.fillRect(this.x + 8.9/grilla * this.w ,this.y + 6.4/grilla * this.h ,1/grilla * this.w  , 0.2 /grilla * this.h);


		//dibujando dedo 2 derecho
		c.fillStyle= "black";
		c.fillRect(this.x + 8.9/grilla * this.w ,this.y + 6.8/grilla * this.h ,1/grilla * this.w  , 0.2 /grilla * this.h);


		// dibuja rueda izquierdo
		c.fillStyle= "black";
		c.beginPath();
		c.arc(this.x+4.5/grilla*this.w, this.y+13.3/grilla*this.h,  1.5/grilla*this.h, 0, Math.PI*2, false);
		c.closePath();
		c.fill();

		// dibuja rueda derecha
		c.fillStyle= "black";
		c.beginPath();
		c.arc(this.x+6.7/grilla*this.w, this.y+13.3/grilla*this.h,  1.5/grilla*this.h, 0, Math.PI*2, false);
		c.closePath();
		c.fill();

		c.restore();

	}

}