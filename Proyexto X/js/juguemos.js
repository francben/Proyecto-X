function Juguemos(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.dibujar = function(ctx){

        //la cara
        ctx.fillStyle= "#ffffff";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+4/8.0*this.w, this.y+4/8.0*this.h, this.w/2, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the path

		// Ojo1
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x+1.5/8*this.w, this.y+1.5/8*this.h); // Set the path origin
		ctx.lineTo(this.x+3.1/8*this.w, this.y+2.6/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke(); // Outline the path
		ctx.fillStyle = "#000000";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+2/8.0*this.w, this.y+3/8.0*this.h, 1/8.0*this.w, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the path
		ctx.fillStyle = "#ff0000";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+2/8.0*this.w, this.y+3/8.0*this.h, 0.8/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the path
		ctx.fillStyle = "#000000";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+2/8.0*this.w, this.y+3/8.0*this.h, 0.2/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the path


		// Ojo2
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x+6.5/8*this.w, this.y+1.5/8*this.h); // Set the path origin
		ctx.lineTo(this.x+4.9/8*this.w, this.y+2.6/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke(); // Outline the path
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+6/8.0*this.w, this.y+3/8.0*this.h, 1/8.0*this.w, 0, 2*Math.PI, true);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the path

		ctx.fillStyle = "#ff0000";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+6/8.0*this.w, this.y+3/8.0*this.h, 0.8/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the path
		ctx.fillStyle = "#000000";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+6/8.0*this.w, this.y+3/8.0*this.h, 0.2/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the path

		//nariz
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x+5/8*this.w, this.y+5/8*this.h); // Set the path origin
		ctx.lineTo(this.x+4/8*this.w, this.y+3/8*this.h); // Set the path destination
		ctx.lineTo(this.x+3/8*this.w, this.y+5/8*this.h); // Set the path destination
		ctx.lineTo(this.x+4/8*this.w, this.y+5.5/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke(); // Outline the path
		

		//boca
		ctx.strokeStyle = "#ff0000";
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x+3/8*this.w, this.y+6.2/8*this.h); // Set the path origin
		ctx.lineTo(this.x+5/8*this.w, this.y+6.2/8*this.h); // Set the path destination
		ctx.moveTo(this.x+3/8*this.w, this.y+6.3/8*this.h); // Set the path origin
		ctx.lineTo(this.x+5/8*this.w, this.y+6.3/8*this.h); // Set the path destination
		ctx.moveTo(this.x+3/8*this.w, this.y+6.2/8*this.h); // Set the path origin
		ctx.lineTo(this.x+2.9/8*this.w, this.y+6.1/8*this.h); // Set the path destination
		ctx.moveTo(this.x+5/8*this.w, this.y+6.2/8*this.h); // Set the path origin
		ctx.lineTo(this.x+5.1/8*this.w, this.y+6.1/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke(); // Outline the path
		ctx.strokeStyle = "#000000";
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x+3/8*this.w, this.y+6.2/8*this.h); // Set the path origin
		ctx.lineTo(this.x+3/8*this.w, this.y+7.9/8*this.h); // Set the path destination
		ctx.moveTo(this.x+5/8*this.w, this.y+6.2/8*this.h); // Set the path origin
		ctx.lineTo(this.x+5/8*this.w, this.y+7.9/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke(); // Outline the path
		

		//mejilla iz
		ctx.fillStyle = "#ff0000";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+1.5/8.0*this.w, this.y+5/8.0*this.h, 0.8/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the 
		ctx.fillStyle = "#ffffff";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+1.5/8.0*this.w, this.y+5/8.0*this.h, 0.7/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the
		ctx.fillStyle = "#ff0000";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+1.5/8.0*this.w, this.y+5/8.0*this.h, 0.6/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the
		ctx.fillStyle = "#ffffff";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+1.5/8.0*this.w, this.y+5/8.0*this.h, 0.5/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the
		ctx.fillStyle = "#ff0000";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+1.5/8.0*this.w, this.y+5/8.0*this.h, 0.4/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the
		ctx.fillStyle = "#ffffff";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+1.5/8.0*this.w, this.y+5/8.0*this.h, 0.3/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the
		ctx.fillStyle = "#ff0000";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+1.5/8.0*this.w, this.y+5/8.0*this.h, 0.2/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the
		ctx.fillStyle = "#ffffff";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+1.5/8.0*this.w, this.y+5/8.0*this.h, 0.1/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the

		//mejilla der
		ctx.fillStyle = "#ff0000";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+6.5/8.0*this.w, this.y+5/8.0*this.h, 0.8/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the 
		ctx.fillStyle = "#ffffff";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+6.5/8.0*this.w, this.y+5/8.0*this.h, 0.7/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the
		ctx.fillStyle = "#ff0000";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+6.5/8.0*this.w, this.y+5/8.0*this.h, 0.6/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the
		ctx.fillStyle = "#ffffff";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+6.5/8.0*this.w, this.y+5/8.0*this.h, 0.5/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the
		ctx.fillStyle = "#ff0000";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+6.5/8.0*this.w, this.y+5/8.0*this.h, 0.4/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the
		ctx.fillStyle = "#ffffff";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+6.5/8.0*this.w, this.y+5/8.0*this.h, 0.3/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the
		ctx.fillStyle = "#ff0000";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+6.5/8.0*this.w, this.y+5/8.0*this.h, 0.2/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the
		ctx.fillStyle = "#ffffff";
		ctx.beginPath(); // Start the path
		ctx.arc(this.x+6.5/8.0*this.w, this.y+5/8.0*this.h, 0.1/8.0*this.w, 0, 2*Math.PI, false);//Draw circle
		ctx.closePath(); // Close the path
		ctx.fill(); // Fill the

		ctx.fillStyle = "#ff0000";
		var text2 = "Juguemos un juego!";
		ctx.font = "italic 60px serif";
		ctx.fillText(text2, 400, 170);
	}
}