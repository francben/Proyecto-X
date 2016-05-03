function Mapa(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.drawMapa = function(ctx){
		//edif1
		var med = 8.0;
		var suelo = 2.5;
		var ven = 1;

		//edif1
		ctx.strokeRect(this.x+0.5/med*this.w, this.y+suelo/med*this.h, 3/med*this.w, 7/med*this.h);
		//ventanas edif1
		ctx.strokeRect(this.x+0.7/med*this.w, this.y+3/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+2.3/med*this.w, this.y+3/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+0.7/med*this.w, this.y+4.8/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+2.3/med*this.w, this.y+4.8/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+0.7/med*this.w, this.y+6.5/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+2.3/med*this.w, this.y+6.5/med*this.h, ven/med*this.w, ven/med*this.h);
		//puerta edif1
		ctx.strokeRect(this.x+1/med*this.w, this.y+8.5/med*this.h, 2/med*this.w, 1/med*this.h);

		//edif2
		ctx.strokeRect(this.x+3.5/med*this.w, this.y+-0.5/med*this.h, 3/med*this.w, 10/med*this.h);
		//ventanas edif2
		ctx.strokeRect(this.x+3.7/med*this.w, this.y+-0/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+5.3/med*this.w, this.y+0/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+3.7/med*this.w, this.y+1.8/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+5.3/med*this.w, this.y+1.8/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+3.7/med*this.w, this.y+3.6/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+5.3/med*this.w, this.y+3.6/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+3.7/med*this.w, this.y+5.4/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+5.3/med*this.w, this.y+5.4/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+3.7/med*this.w, this.y+7.2/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+5.3/med*this.w, this.y+7.2/med*this.h, ven/med*this.w, ven/med*this.h);
		//puerta edif2
		ctx.strokeRect(this.x+5.8/med*this.w, this.y+8.5/med*this.h, 0.5/med*this.w, 1/med*this.h);


		//edif3
		ctx.strokeRect(this.x+6.5/med*this.w, this.y+1/med*this.h, 3/med*this.w, 8.5/med*this.h);
		//ventana edif3
		ctx.strokeRect(this.x+6.7/med*this.w, this.y+1.5/med*this.h, 1.5/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+6.7/med*this.w, this.y+3/med*this.h, 1.5/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+6.7/med*this.w, this.y+4.5/med*this.h, 1.5/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+6.7/med*this.w, this.y+6/med*this.h, 1.5/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+6.7/med*this.w, this.y+7.5/med*this.h, 1.5/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+8.8/med*this.w, this.y+1.5/med*this.h, 0.5/med*this.w, 6.5/med*this.h);
		//puerta edif3 
		ctx.strokeRect(this.x+8.8/med*this.w, this.y+8.5/med*this.h, 0.5/med*this.w, 1/med*this.h);

		//edif centro
		ctx.strokeRect(this.x+9.5/med*this.w, this.y+-5/med*this.h, 13.5/med*this.w, 14.5/med*this.h);
		//pisos edif centro
		ctx.strokeRect(this.x+9.5/med*this.w, this.y+-5/med*this.h, 13.5/med*this.w, 2/med*this.h);
		ctx.strokeRect(this.x+9.5/med*this.w, this.y+-3/med*this.h, 13.5/med*this.w, 2/med*this.h);
		
		ctx.strokeRect(this.x+9.5/med*this.w, this.y+-1/med*this.h, 13.5/med*this.w, 2/med*this.h);
		ctx.strokeRect(this.x+9.5/med*this.w, this.y+1/med*this.h, 13.5/med*this.w, 2/med*this.h);
		ctx.strokeRect(this.x+9.5/med*this.w, this.y+3/med*this.h, 13.5/med*this.w, 2/med*this.h);
		ctx.strokeRect(this.x+9.5/med*this.w, this.y+5/med*this.h, 13.5/med*this.w, 2/med*this.h);

		//puerta edif centro
		ctx.strokeRect(this.x+9.7/med*this.w, this.y+8.5/med*this.h, 3/med*this.w, 1/med*this.h);
		ctx.strokeRect(this.x+15/med*this.w, this.y+8.5/med*this.h, 3/med*this.w, 1/med*this.h);
		ctx.strokeRect(this.x+19.8/med*this.w, this.y+8.5/med*this.h, 3/med*this.w, 1/med*this.h);

		//linea
		ctx.beginPath();
		ctx.moveTo(this.x+16.2/med*this.w, this.y+-5/med*this.h); // Set the path origin
		ctx.lineTo(this.x+16.2/med*this.w, this.y+7/med*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke(); 









		//edif ultimo
		ctx.strokeRect(this.x+27/med*this.w, this.y+-0.5/med*this.h, 5/med*this.w, 10/med*this.h);
		//ventana edif ultimo
		ctx.strokeRect(this.x+27.2/med*this.w, this.y+-0/med*this.h, 3/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+30.8/med*this.w, this.y+0/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+27.2/med*this.w, this.y+1.8/med*this.h, 3/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+30.8/med*this.w, this.y+1.8/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+27.2/med*this.w, this.y+3.6/med*this.h, 3/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+30.8/med*this.w, this.y+3.6/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+27.2/med*this.w, this.y+5.4/med*this.h, 3/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+30.8/med*this.w, this.y+5.4/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+28.8/med*this.w, this.y+7/med*this.h, 3/med*this.w, 0.8/med*this.h);
		//puerta edif ultimo
		ctx.strokeRect(this.x+29.5/med*this.w, this.y+8.5/med*this.h, 2/med*this.w, 1/med*this.h);
		ctx.strokeRect(this.x+27.2/med*this.w, this.y+7/med*this.h, 1/med*this.w, 0.8/med*this.h);



		//edif ante ultimo
		ctx.strokeRect(this.x+23/med*this.w, this.y+4.5/med*this.h, 4/med*this.w, 5/med*this.h);
		//ventana edif ante ultimo
		ctx.strokeRect(this.x+23.2/med*this.w, this.y+4.8/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+24.5/med*this.w, this.y+4.8/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+25.8/med*this.w, this.y+4.8/med*this.h, ven/med*this.w, ven/med*this.h);

		ctx.strokeRect(this.x+23.2/med*this.w, this.y+6/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+24.5/med*this.w, this.y+6/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+25.8/med*this.w, this.y+6/med*this.h, ven/med*this.w, ven/med*this.h);

		ctx.strokeRect(this.x+23.2/med*this.w, this.y+7.2/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+24.5/med*this.w, this.y+7.2/med*this.h, ven/med*this.w, ven/med*this.h);
		ctx.strokeRect(this.x+25.8/med*this.w, this.y+7.2/med*this.h, ven/med*this.w, ven/med*this.h);

		//puerta edif ante ultimo
		ctx.strokeRect(this.x+26.3/med*this.w, this.y+8.5/med*this.h, 0.5/med*this.w, 1/med*this.h);







		




	}
}