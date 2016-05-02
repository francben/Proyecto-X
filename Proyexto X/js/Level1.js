function Level1(x, y, w, h){
					this.x = x;
					this.y = y;
					this.w = w;
					this.h = h;

this.dibujar = function(ctx){
// puerta medio
	ctx.strokeStyle = "black";
	ctx.beginPath(); // Start the path
	ctx.moveTo(this.x+0/8*this.w, this.y+0/8*this.h); // Set the path origin
	ctx.lineTo(this.x+0/8*this.w, this.y+20/8*this.h); // Set the path destination
	ctx.closePath(); // Close the path
	ctx.stroke(); // Outline the path

// detalle puerta medio
	ctx.strokeStyle = "green";
	ctx.beginPath(); // Start the path
	ctx.arc(this.x+0/8.0*this.w, this.y+1/8.0*this.h, 1/8.0*this.w, 0, 2*Math.PI, true);//Draw circle
	ctx.closePath(); // Close the path
	ctx.stroke(); // Fill the path

	ctx.beginPath(); // Start the path
	ctx.arc(this.x+0/8.0*this.w, this.y+2/8.0*this.h, 1/8.0*this.w, 0, 2*Math.PI, true);//Draw circle
	ctx.closePath(); // Close the path
	ctx.stroke(); // Fill the path

	ctx.beginPath(); // Start the path
	ctx.arc(this.x+0/8.0*this.w, this.y+3/8.0*this.h, 1/8.0*this.w, 0, 2*Math.PI, true);//Draw circle
	ctx.closePath(); // Close the path
	ctx.stroke(); // Fill the path

	ctx.beginPath(); // Start the path
	ctx.arc(this.x+0/8.0*this.w, this.y+4/8.0*this.h, 1/8.0*this.w, 0, 2*Math.PI, true);//Draw circle
	ctx.closePath(); // Close the path
	ctx.stroke(); // Fill the path

	ctx.beginPath(); // Start the path
	ctx.arc(this.x+0/8.0*this.w, this.y+5/8.0*this.h, 1/8.0*this.w, 0, 2*Math.PI, true);//Draw circle
	ctx.closePath(); // Close the path
	ctx.stroke(); // Fill the path

	ctx.beginPath(); // Start the path
	ctx.arc(this.x+0/8.0*this.w, this.y+6/8.0*this.h, 1/8.0*this.w, 0, 2*Math.PI, true);//Draw circle
	ctx.closePath(); // Close the path
	ctx.stroke(); // Fill the path

	ctx.beginPath(); // Start the path
	ctx.arc(this.x+0/8.0*this.w, this.y+15/8.0*this.h, 1/8.0*this.w, 0, 2*Math.PI, true);//Draw circle
	ctx.closePath(); // Close the path
	ctx.stroke(); // Fill the path

	ctx.beginPath(); // Start the path
	ctx.arc(this.x+0/8.0*this.w, this.y+16/8.0*this.h, 1/8.0*this.w, 0, 2*Math.PI, true);//Draw circle
	ctx.closePath(); // Close the path
	ctx.stroke(); // Fill the path

	ctx.beginPath(); // Start the path
	ctx.arc(this.x+0/8.0*this.w, this.y+17/8.0*this.h, 1/8.0*this.w, 0, 2*Math.PI, true);//Draw circle
	ctx.closePath(); // Close the path
	ctx.stroke(); // Fill the path

	ctx.beginPath(); // Start the path
	ctx.arc(this.x+0/8.0*this.w, this.y+18/8.0*this.h, 1/8.0*this.w, 0, 2*Math.PI, true);//Draw circle
	ctx.closePath(); // Close the path
	ctx.stroke(); // Fill the path

	ctx.beginPath(); // Start the path
	ctx.arc(this.x+0/8.0*this.w, this.y+19/8.0*this.h, 1/8.0*this.w, 0, 2*Math.PI, true);//Draw circle
	ctx.closePath(); // Close the path
	ctx.stroke(); // Fill the path

	//fondo der
	ctx.strokeStyle = "blue";
	ctx.beginPath(); // Start the path
	ctx.moveTo(this.x+16/8*this.w, this.y+7/8*this.h); // Set the path origin
	ctx.lineTo(this.x+1/8*this.w, this.y+7/8*this.h); // Set the path destination
	ctx.moveTo(this.x+16/8*this.w, this.y+8/8*this.h); // Set the path origin
	ctx.lineTo(this.x+1/8*this.w, this.y+8/8*this.h); // Set the path destination
	ctx.moveTo(this.x+16/8*this.w, this.y+9/8*this.h); // Set the path origin
	ctx.lineTo(this.x+1/8*this.w, this.y+9/8*this.h); // Set the path destination
	ctx.moveTo(this.x+16/8*this.w, this.y+10/8*this.h); // Set the path origin
	ctx.lineTo(this.x+1/8*this.w, this.y+10/8*this.h); // Set the path destination
	ctx.moveTo(this.x+16/8*this.w, this.y+11/8*this.h); // Set the path origin
	ctx.lineTo(this.x+1/8*this.w, this.y+11/8*this.h); // Set the path destination
	ctx.moveTo(this.x+16/8*this.w, this.y+12/8*this.h); // Set the path origin
	ctx.lineTo(this.x+1/8*this.w, this.y+12/8*this.h); // Set the path destination
	ctx.moveTo(this.x+16/8*this.w, this.y+13/8*this.h); // Set the path origin
	ctx.lineTo(this.x+1/8*this.w, this.y+13/8*this.h); // Set the path destination
	ctx.moveTo(this.x+16/8*this.w, this.y+14/8*this.h); // Set the path origin
	ctx.lineTo(this.x+1/8*this.w, this.y+14/8*this.h); // Set the path destination

	ctx.closePath(); // Close the path
	ctx.stroke(); // Outline the path
	ctx.strokeStyle = "#000000";

//fondo izq
	ctx.strokeStyle = "blue";
	ctx.beginPath(); // Start the path
	ctx.moveTo(this.x+(-16)/8*this.w, this.y+7/8*this.h); // Set the path origin
	ctx.lineTo(this.x+1/8*this.w, this.y+7/8*this.h); // Set the path destination
	ctx.moveTo(this.x+(-16)/8*this.w, this.y+8/8*this.h); // Set the path origin
	ctx.lineTo(this.x+1/8*this.w, this.y+8/8*this.h); // Set the path destination
	ctx.moveTo(this.x+(-16)/8*this.w, this.y+9/8*this.h); // Set the path origin
	ctx.lineTo(this.x+1/8*this.w, this.y+9/8*this.h); // Set the path destination
	ctx.moveTo(this.x+(-16)/8*this.w, this.y+10/8*this.h); // Set the path origin
	ctx.lineTo(this.x+1/8*this.w, this.y+10/8*this.h); // Set the path destination
	ctx.moveTo(this.x+(-16)/8*this.w, this.y+11/8*this.h); // Set the path origin
	ctx.lineTo(this.x+1/8*this.w, this.y+11/8*this.h); // Set the path destination
	ctx.moveTo(this.x+(-16)/8*this.w, this.y+12/8*this.h); // Set the path origin
	ctx.lineTo(this.x+1/8*this.w, this.y+12/8*this.h); // Set the path destination
	ctx.moveTo(this.x+(-16)/8*this.w, this.y+13/8*this.h); // Set the path origin
	ctx.lineTo(this.x+1/8*this.w, this.y+13/8*this.h); // Set the path destination
	ctx.moveTo(this.x+(-16)/8*this.w, this.y+14/8*this.h); // Set the path origin
	ctx.lineTo(this.x+1/8*this.w, this.y+14/8*this.h); // Set the path destination

	ctx.closePath(); // Close the path
	ctx.stroke(); // Outline the path


//dibujar el contorno derecha
		ctx.strokeStyle = "black";

		ctx.beginPath(); // Start the path
		ctx.arc(this.x+8/8.0*this.w, this.y+0/8.0*this.h, this.w/1.5, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.stroke(); // Fill the path
//circulo medio derecha
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+8/8.0*this.w, this.y+0/8.0*this.h, this.w/4, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the path
//circulos de fuera derecha
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+14.5/8.0*this.w, this.y+0/8.0*this.h, this.w/12, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the path
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+14/8.0*this.w, this.y+2/8.0*this.h, this.w/12, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the path
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+14/8.0*this.w, this.y+(-2)/8.0*this.h, this.w/12, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the path

//circulos de fuera izq
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+1.5/8.0*this.w, this.y+0/8.0*this.h, this.w/12, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the path
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+2/8.0*this.w, this.y+2/8.0*this.h, this.w/12, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the path
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+2/8.0*this.w, this.y+(-2)/8.0*this.h, this.w/12, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the path
//rayas de los circulos - circulo medio izq
	ctx.strokeStyle = "green";
	ctx.beginPath(); // Start the path
	ctx.moveTo(this.x+6/8*this.w, this.y+0/8*this.h); // Set the path origin
	ctx.lineTo(this.x+2.2/8*this.w, this.y+0/8*this.h); // Set the path destination
	ctx.closePath(); // Close the path
	ctx.stroke(); // Outline the path
//linea circulo bajo izq
	ctx.strokeStyle = "green";
	ctx.beginPath(); // Start the path
	ctx.moveTo(this.x+6/8*this.w, this.y+0/8*this.h); // Set the path origin
	ctx.lineTo(this.x+2.5/8*this.w, this.y+1.7/8*this.h); // Set the path destination
	ctx.closePath(); // Close the path
	ctx.stroke(); // Outline the path
//linea circulo alto izq
	ctx.strokeStyle = "green";
	ctx.beginPath(); // Start the path
	ctx.moveTo(this.x+6/8*this.w, this.y+0/8*this.h); // Set the path origin
	ctx.lineTo(this.x+2.7/8*this.w, this.y+(-2)/8*this.h); // Set the path destination
	ctx.closePath(); // Close the path
	ctx.stroke(); // Outline the path

//rayas de los circulos - circulo medio der
	ctx.strokeStyle = "green";
	ctx.beginPath(); // Start the path
	ctx.moveTo(this.x+13.8/8*this.w, this.y+0/8*this.h); // Set the path origin
	ctx.lineTo(this.x+10/8*this.w, this.y+0/8*this.h); // Set the path destination
	ctx.closePath(); // Close the path
	ctx.stroke(); // Outline the path
//linea circulo bajo der
	ctx.strokeStyle = "green";
	ctx.beginPath(); // Start the path
	ctx.moveTo(this.x+10/8*this.w, this.y+0/8*this.h); // Set the path origin
	ctx.lineTo(this.x+13.3/8*this.w, this.y+2/8*this.h); // Set the path destination
	ctx.closePath(); // Close the path
	ctx.stroke(); // Outline the path
//linea circulo alto der
	ctx.strokeStyle = "green";
	ctx.beginPath(); // Start the path
	ctx.moveTo(this.x+10/8*this.w, this.y+0/8*this.h); // Set the path origin
	ctx.lineTo(this.x+13.3/8*this.w, this.y+(-2)/8*this.h); // Set the path destination
	ctx.closePath(); // Close the path
	ctx.stroke(); // Outline the path

//fondo lado izq	
	ctx.strokeStyle = "green";
	ctx.fillRect(this.x/6, this.y/4, this.w, this.h);
//cuadros de fuera
	ctx.strokeRect(this.x/14, this.y/2, this.w/8, this.h/4);
	ctx.strokeRect(this.x/14, this.y, this.w/8, this.h/4);

//
//lineas izq 1 
	ctx.strokeStyle = "black";
	ctx.beginPath(); // Start the path
	ctx.moveTo(this.x+(-15)/8*this.w, this.y+(-4)/8*this.h); // Set the path origin
	ctx.lineTo(this.x+(-15)/8*this.w, this.y+6/8*this.h); // Set the path destination
	ctx.closePath(); // Close the path
	ctx.stroke(); // Outline the path

	ctx.strokeStyle = "black";
	ctx.beginPath(); // Start the path
	ctx.moveTo(this.x+(-13.7)/8*this.w, this.y+(-4)/8*this.h); // Set the path origin
	ctx.lineTo(this.x+(-13.7)/8*this.w, this.y+6/8*this.h); // Set the path destination
	ctx.closePath(); // Close the path
	ctx.stroke(); // Outline the path


//cuadros de fuera
ctx.strokeStyle = "green";
	ctx.strokeRect(this.x/1.43, this.y/2, this.w/8, this.h/4);
	ctx.strokeRect(this.x/1.43, this.y, this.w/8, this.h/4);

//lineas izq 2
	ctx.strokeStyle = "black";
	ctx.beginPath(); // Start the path
	ctx.moveTo(this.x+(-5)/8*this.w, this.y+(-4)/8*this.h); // Set the path origin
	ctx.lineTo(this.x+(-5)/8*this.w, this.y+6/8*this.h); // Set the path destination
	ctx.closePath(); // Close the path
	ctx.stroke(); // Outline the path

	ctx.strokeStyle = "black";
	ctx.beginPath(); // Start the path
	ctx.moveTo(this.x+(-3.7)/8*this.w, this.y+(-4)/8*this.h); // Set the path origin
	ctx.lineTo(this.x+(-3.7)/8*this.w, this.y+6/8*this.h); // Set the path destination
	ctx.closePath(); // Close the path
	ctx.stroke(); // Outline the path


	}
}