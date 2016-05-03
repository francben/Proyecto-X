function RobotXero(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.dibu = function(ctx){
		//la cara
		//ctx.strokeStyle = "black";
		//ctx.fillStyle = "black";

		//Cabeza
		ctx.strokeRect(this.x + 3/8*this.w, this.y + 2/8*this.h, 2/8.0*this.w , 1/8.0*this.h  );
		//orejas
		ctx.fillStyle = "black";
		ctx.fillRect(this.x + 2.9/8*this.w, this.y + 2.2/8*this.h, 0.1/8.0*this.w , 0.5/8.0*this.h  );
		ctx.fillRect(this.x + 5/8*this.w, this.y + 2.2/8*this.h, 0.1/8.0*this.w , 0.5/8.0*this.h  );

		//antena
		ctx.strokeRect(this.x + 3.7/8*this.w, this.y + 1.8/8*this.h, 0.5/8.0*this.w , 0.2/8.0*this.h);
		ctx.strokeRect(this.x + 3.8/8*this.w, this.y + 1.7/8*this.h, 0.3/8.0*this.w , 0.1/8.0*this.h);
		ctx.strokeRect(this.x + 3.9/8*this.w, this.y + 1.4/8*this.h, 0.1/8.0*this.w , 0.3/8.0*this.h);

		ctx.fillStyle = "green";
		ctx.beginPath();
		ctx.arc(this.x + 3.9/8*this.w, this.y + 1.3/8*this.h, 0.1/8*this.h, 0, Math.PI*2, true);
		ctx.closePath();
		ctx.fill();
		
		//cuello
		ctx.fillStyle = "black";
		ctx.fillRect(this.x + 3.7/8*this.w, this.y + 3/8*this.h, 0.5/8.0*this.w , 1/8.0*this.h);
		
		//pansa
		ctx.strokeRect(this.x + 2.8/8*this.w, this.y + 4/8*this.h, 2.5/8.0*this.w , 2.5/8.0*this.h);

		ctx.fillStyle = "black";
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 5/8*this.w, this.y + 5/8*this.h); // Set the path origin
		ctx.lineTo(this.x + 4/8*this.w, this.y + 4/8*this.h); // Set the path destination
		ctx.lineTo(this.x + 3/8*this.w, this.y + 5/8*this.h); // Set the path destination
		ctx.lineTo(this.x + 4/8*this.w, this.y + 6.5/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.fill(); // Outline the path

		//Braso 1
		ctx.strokeRect(this.x + 1.8/8*this.w, this.y + 4.5/8*this.h, 1/8.0*this.w , 0.5/8.0*this.h);

		ctx.fillStyle = "red";
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 1.8/8*this.w, this.y + 5.0/8*this.h); // Set the path origin
		ctx.lineTo(this.x + 1.5/8*this.w,this.y + 5/8*this.h); // Set the path destination
		ctx.lineTo(this.x + 1.8/8*this.w,this.y + 4.7/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.fill();

		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 1.8/8*this.w, this.y + 4.5/8*this.h); // Set the path origin
		ctx.lineTo(this.x + 1.5/8*this.w,this.y + 4.5/8*this.h); // Set the path destination
		ctx.lineTo(this.x + 1.8/8*this.w,this.y + 4.7/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.fill();

		//Braso 2
		ctx.strokeRect(this.x + 5.3/8*this.w, this.y + 4.5/8*this.h, 1/8.0*this.w , 0.5/8.0*this.h);

		ctx.fillStyle = "red";
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 6.3/8*this.w, this.y + 5.0/8*this.h); // Set the path origin
		ctx.lineTo(this.x + 6.3/8*this.w,this.y + 4.8/8*this.h); // Set the path destination
		ctx.lineTo(this.x + 6.6/8*this.w,this.y + 5.0/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.fill();

		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 6.3/8*this.w, this.y + 4.5/8*this.h); // Set the path origin
		ctx.lineTo(this.x + 6.3/8*this.w,this.y + 4.8/8*this.h); // Set the path destination
		ctx.lineTo(this.x + 6.6/8*this.w,this.y + 4.5/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.fill();


		//PIERNAs
		ctx.strokeRect(this.x + 3.3/8*this.w, this.y + 6.5/8*this.h, 0.5/8.0*this.w , 1/8.0*this.h);
		ctx.strokeRect(this.x + 4.3/8*this.w, this.y + 6.5/8*this.h, 0.5/8.0*this.w , 1/8.0*this.h);
		//pies
		
		ctx.beginPath();
		ctx.arc(this.x + 3.5/8*this.w, this.y + 7.5/8*this.h, 0.2/8*this.h, 0, Math.PI*2, true);
		ctx.closePath();
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(this.x + 4.6/8*this.w, this.y + 7.5/8*this.h, 0.2/8*this.h, 0, Math.PI*2, true);
		ctx.closePath();
		ctx.stroke();

		//ojos
		ctx.fillStyle= "#ff0000";
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 3.3/8*this.w, this.y + 2.1/8*this.h); // Set the path origin
		ctx.lineTo(this.x + 3.2/8*this.w,this.y + 2.3/8*this.h); // Set the path destination
		ctx.lineTo(this.x + 3.6/8*this.w,this.y + 2.4/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.fill();

		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 4.7/8*this.w, this.y + 2.1/8*this.h); // Set the path origin
		ctx.lineTo(this.x + 4.4/8*this.w,this.y + 2.4/8*this.h); // Set the path destination
		ctx.lineTo(this.x + 4.8/8*this.w,this.y + 2.3/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.fill();

		//boca 
		ctx.strokeRect(this.x + 3.3/8*this.w, this.y + 2.6/8*this.h, 1.4/8.0*this.w , 0.3/8.0*this.h  );

		//dientes
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 3.5/8*this.w, this.y + 2.6/8*this.h); // Set the path origin
		ctx.lineTo(this.x + 3.3/8*this.w,this.y + 2.9/8*this.h); // Set the path destination
		ctx.lineTo(this.x + 3.5/8*this.w,this.y + 2.9/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke();
		
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 3.7/8*this.w, this.y + 2.6/8*this.h); // Set the path origin
		ctx.lineTo(this.x + 3.5/8*this.w,this.y + 2.9/8*this.h); // Set the path destination
		ctx.lineTo(this.x + 3.7/8*this.w,this.y + 2.9/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke();

		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 3.9/8*this.w, this.y + 2.6/8*this.h); // Set the path origin
		ctx.lineTo(this.x + 3.7/8*this.w,this.y + 2.9/8*this.h); // Set the path destination
		ctx.lineTo(this.x + 3.9/8*this.w,this.y + 2.9/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke();
		
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 4.1/8*this.w, this.y + 2.6/8*this.h); // Set the path origin
		ctx.lineTo(this.x + 3.9/8*this.w,this.y + 2.9/8*this.h); // Set the path destination
		ctx.lineTo(this.x + 4.1/8*this.w,this.y + 2.9/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke();

		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 4.3/8*this.w, this.y + 2.6/8*this.h); // Set the path origin
		ctx.lineTo(this.x + 4.1/8*this.w,this.y + 2.9/8*this.h); // Set the path destination
		ctx.lineTo(this.x + 4.3/8*this.w,this.y + 2.9/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke();
		
		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 4.5/8*this.w, this.y + 2.6/8*this.h); // Set the path origin
		ctx.lineTo(this.x + 4.3/8*this.w,this.y + 2.9/8*this.h); // Set the path destination
		ctx.lineTo(this.x + 4.5/8*this.w,this.y + 2.9/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke();

		ctx.beginPath(); // Start the path
		ctx.moveTo(this.x + 4.7/8*this.w, this.y + 2.6/8*this.h); // Set the path origin
		ctx.lineTo(this.x + 4.5/8*this.w,this.y + 2.9/8*this.h); // Set the path destination
		ctx.lineTo(this.x + 4.7/8*this.w,this.y + 2.9/8*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke();

	}
}