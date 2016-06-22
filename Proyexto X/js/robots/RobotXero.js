function RobotXero(x, y, w, h, dx, dy){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.estado = "vivo";
	this.velocidad = 8;
	this.dirX = dx || -1;
	this.dirY = dy || 0;
	this.energia=100;
	this.arma = new ArmaEstandarEnemigo(x*11,y*1.63,w*0.35,h*0.35);
	this.disparar = function(nivel){
		this.arma.disparar(nivel);
	};
	this.mover = function(){
		if(this.dirX == 0 && this.dirY == 0) return;
		if(this.dirX == 1){
			this.x += this.velocidad;
			this.arma.mover();
		}
		else if(this.dirX == -1){
			this.x -= this.velocidad;
			this.arma.mover();
		}

		if(this.dirY == 1){
			this.y += this.velocidad;
			this.arma.mover();
		}
		else if(this.dirY == -1){
			this.y -= this.velocidad;
			this.arma.mover();
		}	
	};
	this.moverIzquierda = function(){
		this.dirX=-1;
		this.x -= this.velocidad;
		this.arma.moverIzquierda(this.velocidad);	
	};
	this.moverDerecha = function(limite){
			this.dirX=1;
			this.x += this.velocidad;
			this.arma.moverDerecha(this.velocidad);	
		
	};
	this.barraDeVida = function(ctx){
		var porcentajeEnergiaEnemigo = this.energia/100.0;
		ctx.save();
		ctx.strokeStyle="red";
		ctx.lineWidth = 2;
		ctx.strokeRect(this.x, this.y*0.1, this.w/1.42, this.h*0.07);
		ctx.fillStyle="blue";
		ctx.fillRect(this.x, this.y*0.1, this.w*porcentajeEnergiaEnemigo, this.h*0.069);
		ctx.restore();
	};
	this.daños = function(daño){
			this.energia -= daño;
			if(this.energia<=0){
				this.energia=0;
			}
	};
	this.dibujar = function(ctx){
		var med = 8.0;
		ctx.save();
		ctx.strokeStyle= "red";
		ctx.strokeRect(this.x,this.y,this.w,this.h)	;	//la cara
		//ctx.strokeStyle = "black";
		//ctx.fillStyle = "black";
	
		//Cabeza
		ctx.fillStyle= "black";
		ctx.fillRect (this.x + 3/med*this.w, this.y + 2/med*this.h, 1/med*this.w , 1/med*this.h);
		ctx.strokeStyle= "white";
		ctx.strokeRect (this.x + 3/med*this.w, this.y + 2/med*this.h, 1/med*this.w , 1/med*this.h);

		//orejas
		ctx.fillStyle = "white";
		ctx.fillRect(this.x + 3.4/med*this.w, this.y + 2.2/med*this.h, 0.1/med*this.w , 0.3/med*this.h);
		//ctx.fillRect(this.x + 5/med*this.w, this.y + 2.2/med*this.h, 0.1/med*this.w , 0.5/med*this.h);

		//antena
		ctx.fillStyle= "grey";
		ctx.fillRect(this.x + 3.5/med*this.w, this.y + 1.8/med*this.h, 0.2/med*this.w , 0.2/med*this.h);
		ctx.strokeStyle= "red";
		ctx.strokeRect(this.x + 3.5/med*this.w, this.y + 1.7/med*this.h, 0.1/med*this.w , 0.1/med*this.h);
		ctx.fillStyle= "grey";
		ctx.fillRect(this.x + 3.5/med*this.w, this.y + 1.4/med*this.h, 0.1/med*this.w , 0.3/med*this.h);

		ctx.fillStyle = "green";
		ctx.beginPath();
		ctx.arc(this.x + 3.5/med*this.w, this.y + 1.3/med*this.h, 0.1/med*this.h, 0, Math.PI*2, true);
		ctx.closePath();
		ctx.fill();
		
		//cuello
		ctx.fillStyle = "black";
		ctx.fillRect(this.x + 3.5/med*this.w, this.y + 3/med*this.h, 0.2/med*this.w , 1/med*this.h);
		ctx.strokeStyle = "white";
		ctx.strokeRect(this.x + 3.5/med*this.w, this.y + 3/med*this.h, 0.2/med*this.w , 1/med*this.h);
		
		//pansa
		ctx.fillStyle= "grey";
		ctx.fillRect(this.x + 2.8/med*this.w, this.y + 4/med*this.h, 1.5/med*this.w , 2.5/med*this.h);

		/*ctx.fillStyle = "black";
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 3/med*this.w, this.y + 4/med*this.h); // Set the path origin
		ctx.lineTo(this.x + 7.7/med*this.w, this.y + 6/med*this.h); // Set the path destination
		ctx.lineTo(this.x + 7/med*this.w, this.y + 5/med*this.h); // Set the path destination
		//ctx.lineTo(this.x + 5/med*this.w, this.y + 6.5/med*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.fill(); // Outline the path*/

		//Braso 1
		ctx.fillStyle= "grey";
		//ctx.strokeStyle= "black";
		ctx.fillRect(this.x + 4.0/med*this.w, this.y + 5.0/med*this.h, 1/med*this.w , 0.5/med*this.h);
		ctx.fill();

		ctx.fillStyle = "red";
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 5.0/med*this.w, this.y + 5.00/med*this.h); // Set the path origin
		ctx.lineTo(this.x + 5.0/med*this.w,this.y + 5.40/med*this.h); // Set the path destination
		ctx.lineTo(this.x + 5.3/med*this.w,this.y + 5.02/med*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.fill();

		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 5.45/med*this.w, this.y + 5.47/med*this.h); // Set the path origin
		ctx.lineTo(this.x + 5.00/med*this.w,this.y + 5.00/med*this.h); // Set the path destination
		ctx.lineTo(this.x + 5.00/med*this.w,this.y + 5.47/med*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.fill();

		//Braso 2
		ctx.fillStyle= "grey";
		ctx.fillRect(this.x + 4.3/med*this.w, this.y + 4.5/med*this.h, 0.50/med*this.w , 0.4/med*this.h);

		ctx.fillStyle = "red";
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 4.7/med*this.w, this.y + 4.90/med*this.h); // Set the path origin
		ctx.lineTo(this.x + 4.7/med*this.w,this.y + 4.7/med*this.h); // Set the path destination
		ctx.lineTo(this.x + 5.0/med*this.w,this.y + 4.95/med*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.fill();

		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 4.7/med*this.w, this.y + 4.5/med*this.h); // Set the path origin
		ctx.lineTo(this.x + 4.7/med*this.w,this.y + 4.8/med*this.h); // Set the path destination
		ctx.lineTo(this.x + 5.0/med*this.w,this.y + 4.5/med*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.fill();

		/*ctx.beginPath(); // Start the path
		ctx.moveTo(8/med, 450/med); // Set the path origin
		ctx.lineTo(8/med, 450/med); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke(); // Outline the path*/


		//PIERNAs
		ctx.fillStyle= "grey";
		ctx.fillRect(this.x + 3.2/med*this.w, this.y + 6.5/med*this.h, 0.3/med*this.w , 1/med*this.h);
		ctx.fillRect(this.x + 3.7/med*this.w, this.y + 6.5/med*this.h, 0.3/med*this.w , 1/med*this.h);

		//pies
		ctx.fillStyle= "grey";
		//ctx.strokeStyle= "red";
		ctx.beginPath();
		ctx.arc(this.x + 3.4/med*this.w, this.y + 7.5/med*this.h, 0.2/med*this.h, 0, Math.PI*1, false);
		ctx.closePath();
		ctx.fill();
		//ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(this.x + 3.9/med*this.w, this.y + 7.5/med*this.h, 0.2/med*this.h, 0, Math.PI*1, false);
		ctx.closePath();
		ctx.fill();
		//ctx.stroke();

		//ojos
		ctx.fillStyle= "#ff0000";
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 3.7/med*this.w, this.y + 2.2/med*this.h); // Set the path origin
		ctx.lineTo(this.x + 3.6/med*this.w,this.y + 2.3/med*this.h); // Set the path destination
		ctx.lineTo(this.x + 4.0/med*this.w,this.y + 2.4/med*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.fill();

		/*ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 4.7/med*this.w, this.y + 2.1/med*this.h); // Set the path origin
		ctx.lineTo(this.x + 4.4/med*this.w,this.y + 2.4/med*this.h); // Set the path destination
		ctx.lineTo(this.x + 4.8/med*this.w,this.y + 2.3/med*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.fill();*/

		//boca 
		ctx.strokeStyle= "red";
		ctx.strokeRect(this.x + 3.6/med*this.w, this.y + 2.6/med*this.h, 0.4/med*this.w , 0.3/med*this.h  );

		//dientes
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 3.8/med*this.w, this.y + 2.6/med*this.h); // Set the path origin
		ctx.lineTo(this.x + 3.6/med*this.w,this.y + 2.9/med*this.h); // Set the path destination
		ctx.lineTo(this.x + 3.8/med*this.w,this.y + 2.9/med*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke();
		
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 4.0/med*this.w, this.y + 2.6/med*this.h); // Set the path origin
		ctx.lineTo(this.x + 3.8/med*this.w,this.y + 2.9/med*this.h); // Set the path destination
		ctx.lineTo(this.x + 4.0/med*this.w,this.y + 2.9/med*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke();

		/*ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 3.9/med*this.w, this.y + 2.6/med*this.h); // Set the path origin
		ctx.lineTo(this.x + 3.7/med*this.w,this.y + 2.9/med*this.h); // Set the path destination
		ctx.lineTo(this.x + 3.9/med*this.w,this.y + 2.9/med*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke();
		
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 4.1/med*this.w, this.y + 2.6/med*this.h); // Set the path origin
		ctx.lineTo(this.x + 3.9/med*this.w,this.y + 2.9/med*this.h); // Set the path destination
		ctx.lineTo(this.x + 4.1/med*this.w,this.y + 2.9/med*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke();

		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 4.3/med*this.w, this.y + 2.6/med*this.h); // Set the path origin
		ctx.lineTo(this.x + 4.1/med*this.w,this.y + 2.9/med*this.h); // Set the path destination
		ctx.lineTo(this.x + 4.3/med*this.w,this.y + 2.9/med*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke();
		
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 4.5/med*this.w, this.y + 2.6/med*this.h); // Set the path origin
		ctx.lineTo(this.x + 4.3/med*this.w,this.y + 2.9/med*this.h); // Set the path destination
		ctx.lineTo(this.x + 4.5/med*this.w,this.y + 2.9/med*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke();

		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 4.7/med*this.w, this.y + 2.6/med*this.h); // Set the path origin
		ctx.lineTo(this.x + 4.5/med*this.w,this.y + 2.9/med*this.h); // Set the path destination
		ctx.lineTo(this.x + 4.7/med*this.w,this.y + 2.9/med*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke();*/

		/*<div>
		<button id="startAnimation">Start</button>
		<button id="stopAnimation">Stop</button>
		</div>*/

		ctx.restore();

	}
}