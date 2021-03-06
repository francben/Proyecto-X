function Tiger(x, y, w, h, dx, dy){
	this.x = x;//150
	this.y = y;//50
	this.w = w;//100
	this.h = h;//100
	this.muerto=false;
	this.velocidad = 10;
	this.dirX = dx || -1;
	this.dirY = dy || 0;
	this.energia=200;
	this.cont = 0;
	this.arma = new ArmaMetralleta(this.x*0.4,this.y*1.35,this.w*2.5,this.h*2.5);
	this.disparar = function(nivel){
		this.arma.disparar(nivel);
	};
	this.mover = function(){
		this.cont++;
		this.x+= Math.sin(this.cont * Math.PI/90)*5;
		this.arma.mover(this.x);
		/*
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
		}	*/
	};
	this.barraDeVida = function(ctx){
		var porcentajeEnergiaEnemigo = this.energia/100.0;
		ctx.save();
		
		ctx.fillStyle="#822";
		ctx.fillRect(this.w*0.7, this.h*0.2, this.w*2, this.h*0.2);
		ctx.fillStyle="blue";
		ctx.fillRect(this.w*0.7, this.h*0.2, this.w*porcentajeEnergiaEnemigo, this.h*0.2);
		ctx.strokeStyle="red";
		ctx.lineWidth = 2;
		ctx.strokeRect(this.w*0.7, this.h*0.2, this.w*2, this.h*0.2);
		ctx.restore();
	};
	this.daños = function(daño){
			this.energia -= daño;
			if(this.energia<=0){
				this.energia=0;
				this.muerto=true;
			}
	};
	this.dibujar = function(ctx){
		
		var med = 8;
		ctx.save();
		// redondito de la antena
		ctx.fillStyle="black";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+3.1/med*this.w, this.y-2.3/med*this.h, 0.5/med*this.w, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the path

		// antena triangulo
		ctx.fillStyle="grey";
		ctx.beginPath();
		ctx.moveTo(this.x + 3/med*this.w, this.y + 0.-2/med*this.h); // Set the path origin
		ctx.lineTo(this.x + 5/med*this.w,this.y + 2.5/med*this.h); // Set the path destination
		ctx.lineTo(this.x + 0.1/med*this.w,this.y + 4/med*this.h);
		ctx.closePath();
		ctx.fill();
		
		// cuerpo
		ctx.fillStyle="grey";
		ctx.strokeStyle="black";
		ctx.beginPath();
		ctx.moveTo(this.x + -8/med*this.w, this.y + 17/med*this.h); // Set the path origin
		ctx.lineTo(this.x + 13/med*this.w,this.y + 17/med*this.h); // Set the path destination
		ctx.lineTo(this.x + 2.9/med*this.w,this.y + 4/med*this.h);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();


			

		//cara
		ctx.fillStyle="#FFE4C4";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+3/med*this.w, this.y+5/med*this.h, this.w/2, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.stroke();// Fill the path
		ctx.fill();

		// Ojo Grande
		ctx.fillStyle= "red";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+5/med*this.w, this.y+4/med*this.h, 1/med*this.w, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the path

		// Ojo chico
		ctx.strokeStyle="white";
		ctx.fillStyle= "black";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+5.5/med*this.w, this.y+4/med*this.h, 0.5/med*this.w, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the path
		ctx.stroke();

		//boca
		ctx.fillStyle = "black";
		ctx.fillRect(this.x+5/8*this.w, this.y+6/8*this.h, 1.7/8*this.w, 0.5/8*this.h);
		ctx.fill();


		//brazo
		ctx.fillStyle= "black";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+2/med*this.w, this.y+8.7/med*this.h, 1.9/med*this.w, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the path

		ctx.fillStyle= "black";
		ctx.beginPath(); 
		ctx.arc(this.x+2/med*this.w, this.y+11/med*this.h, 1.3/med*this.w, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill();

		ctx.fillStyle= "black";
		ctx.beginPath(); 
		ctx.arc(this.x+2.5/med*this.w, this.y+12.5/med*this.h, 0.9/med*this.w, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill();

		//mano
		//ctx.lineWidth = 9;
		//ctx.beginPath();
		//ctx.strokeStyle = "black";
		//ctx.moveTo(this.x+4/med*this.w, this.y+14.7/med*this.h);
		//ctx.quadraticCurveTo(this.x+2.8/med*this.w, this.y+11.1/med*this.h, 14/med*this.w, this.y+15/med*this.h);
		//ctx.stroke();

		//pie grande
		ctx.fillStyle="#FFE4C4"
		ctx.beginPath();
		ctx.arc(this.x+2/med*this.w, this.y+17/med*this.h, 6/med*this.w, 0, Math.PI*1, false);
		ctx.closePath();
		ctx.fill();


		//pie chico
		ctx.fillStyle="black"
		ctx.beginPath();
		ctx.arc(this.x+2/med*this.w, this.y+17/med*this.h, 2.7/med*this.w, 0, Math.PI*1, false)
		//ctx.arc(170, 260, 40, 0, Math.PI*1, false);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	}
}