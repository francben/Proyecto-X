function nivel4(x, y, w, h){
	
	// PUERTA
	context.strokeStyle = "rgb(108, 113, 086)";
	context.beginPath(); // Start the path
	context.moveTo(600, 0); // Set the path origin
	context.lineTo(600, 200); // Set the path destination
	context.closePath(); // Close the path
	context.stroke(); // Outline the path

	context.lineWidth = 2;
	context.strokeRect(550, 200, 100, 200);
				
	context.strokeStyle = "rgb(108, 113, 086)";
	context.beginPath(); // Start the path
	context.arc(570, 280, 10, 0, Math.PI*2, false); // Draw a circle
	context.closePath(); // Close the path
	context.lineWidth = 2;
	context.fill();
				
	// VENTANAS
				
	context.strokeStyle = "rgb(205, 164, 052)";
	context.lineWidth = 2;
	context.strokeRect(650, 100, 80, 70);
				
	context.beginPath(); // Start the path
	context.moveTo(650, 135); // Set the path origin
	context.lineTo(730, 135); // Set the path destination
	context.closePath(); // Close the path
	context.stroke(); // Outline the path

	context.beginPath(); // Start the path
	context.moveTo(690, 100); // Set the path origin
	context.lineTo(690, 170); // Set the path destination
	context.closePath(); // Close the path
	context.stroke(); // Outline the path

	context.lineWidth = 2;
	context.strokeRect(1050, 100, 80, 70);

	context.beginPath(); // Start the path
	context.moveTo(1050, 135); // Set the path origin
	context.lineTo(1130, 135); // Set the path destination
	context.closePath(); // Close the path
	context.stroke(); // Outline the path

	context.beginPath(); // Start the path
	context.moveTo(1090, 100); // Set the path origin
	context.lineTo(1090, 170); // Set the path destination
	context.closePath(); // Close the path
	context.stroke(); // Outline the path

	// LUCES
	context.beginPath(); // Start the path
	context.moveTo(800, 0); // Set the path origin
	context.lineTo(800, 50); // Set the path destination
	context.closePath(); // Close the path
	context.stroke(); // Outline the path

	context.fillStyle = "rgb(255, 255, 0)";
	context.beginPath(); // Start the path
	context.arc(800, 50, 20, 0, Math.PI*2, false); // Draw a circle
	context.closePath(); // Close the path
	context.lineWidth = 2;
	context.fill();

	context.beginPath(); // Start the path
	context.moveTo(1000, 0); // Set the path origin
	context.lineTo(1000, 50); // Set the path destination
	context.closePath(); // Close the path
	context.stroke(); // Outline the path

	context.beginPath(); // Start the path
	context.arc(1000, 50, 20, 0, Math.PI*2, false); // Draw a circle
	context.closePath(); // Close the path
	context.lineWidth = 2;
	context.fill();

	// OBSTACULOS
	context.lineWidth = 2;
	context.fillStyle = "rgb(0, 0, 255)";
	context.fillRect(1050, 300, 50, 50);

	context.lineWidth = 2;
	context.fillRect(900, 300, 50, 50);

	context.lineWidth = 2;
	context.fillRect(750, 300, 50, 50);

	context.lineWidth = 2;
	context.fillRect(830, 220, 50, 50);

	context.lineWidth = 2;
	context.fillRect(970, 220, 50, 50);

	//TEXTO
	var text = "Level=4   Score=xxxxxxx";
	context.font = "italic 20px serif"; // Change the size and font
	context.fillText(text, 30, 30);
	
	/*this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.dibujar = function(ctx){

		//dibujar el contorno de la figura
		ctx.strokeRect(this.x, this.y, this.w, this.h);

		ctx.beginPath(); // Start the path
		ctx.arc(this.x+4/8.0*this.w, this.y+4/8.0*this.h, this.w/2, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.stroke(); // Fill the path

		// Ojo1
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+2/8.0*this.w, this.y+3/8.0*this.h, 1/8.0*this.w, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.stroke(); // Fill the path

		// Ojo2
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+6/8.0*this.w, this.y+3/8.0*this.h, 1/8.0*this.w, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.stroke(); // Fill the path

		// Boca
		ctx.strokeRect(this.x + 2/8.0*this.w, this.y + 6/8.0*this.h, 4/8.0*this.w, 1/8.0*this.h);

		//Nariz
		context.beginPath(); // Start the path
		context.moveTo(this.x + 3/8.0*this.w, this.y + 5/8.0*this.h); // Set the path origin
		context.lineTo(this.x + 5/8.0*this.w, this.y + 5/8.0*this.h); // Set the path destination
		context.closePath(); // Close the path
		context.stroke(); // Outline the path

		context.beginPath(); // Start the path
		context.moveTo(this.x + 3/8.0*this.w, this.y + 5/8.0*this.h); // Set the path origin
		context.lineTo(this.x + 5/8.0*this.w, this.y + 5/8.0*this.h); // Set the path destination
		context.closePath(); // Close the path
		context.stroke(); // Outline the path

		context.beginPath(); // Start the path
		context.moveTo(this.x + 3/8.0*this.w, this.y + 5/8.0*this.h); // Set the path origin
		context.lineTo(this.x + 5/8.0*this.w, this.y + 5/8.0*this.h); // Set the path destination
		context.closePath(); // Close the path
		context.stroke(); // Outline the path

		// cuadrado relleno superior izquierdo
		//ctx.fillRect(this.x, this.y, this.w/2, this.h/2);

		//ctx.fillRect(this.x + this.w/2, this.y + this.h/2, this.w/2, this.h/2);*/
	}