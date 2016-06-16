function RobotXero(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.velocidad = 8;
	this.dirX = -1;
	this.dirY = 1;
	this.energia=100;
	

	// todos los robots deben tener esta propiedad
	this.arma = new ArmaEstandarEnemigo(x,y,w,h);

	// todos los robots deben tener esta funcion
	this.disparar = function(nivel){
		this.arma.disparar(nivel);
	};


	this.dibujar = function(ctx){
		var med = 8.0;
		ctx.save();
		//la cara
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