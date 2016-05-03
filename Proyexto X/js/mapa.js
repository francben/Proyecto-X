function Mapa(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.drawMapa = function(ctx){
		//edif1
		ctx.strokeRect(this.x+1/18.0*this.w, this.y+10/18.0*this.h, 5/18.0*this.w, 12/18.0*this.h);

		//edif2
		ctx.strokeRect(this.x+6/18.0*this.w, this.y+6/18.0*this.h, 8/18.0*this.w, 16/18.0*this.h);

		//edif3 medio
		ctx.strokeRect(this.x+14/18.0*this.w, this.y+(-12/18.0)*this.h, 22/18.0*this.w, 34/18.0*this.h);


		//edif3
		ctx.strokeRect(this.x+36/18.0*this.w, this.y+8/18.0*this.h, 8/18.0*this.w, 14/18.0*this.h);

		//edif4
		ctx.strokeRect(this.x+44/18.0*this.w, this.y+14/18.0*this.h, 5/18.0*this.w, 8/18.0*this.h);

		//edif5
		ctx.strokeRect(this.x+49/18.0*this.w, this.y+4/18.0*this.h, 12/18.0*this.w, 18/18.0*this.h);

		//edif6
		ctx.strokeRect(this.x+61/18.0*this.w, this.y+-5/18.0*this.h, 11/18.0*this.w, 27/18.0*this.h);

		//ventanas edif1
		ctx.strokeRect(this.x+1.5/18.0*this.w, this.y+11/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+4/18.0*this.w, this.y+14/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+1.5/18.0*this.w, this.y+14/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+4/18.0*this.w, this.y+17/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+1.5/18.0*this.w, this.y+17/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+4/18.0*this.w, this.y+11/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		//puerta edif1
		ctx.strokeRect(this.x+3/18.0*this.w, this.y+20.2/18.0*this.h, 1/18.0*this.w, 1.8/18.0*this.h);



		//ventanas edif2
		ctx.strokeRect(this.x+6.5/18.0*this.w, this.y+7/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+9.2/18.0*this.w, this.y+7/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+12/18.0*this.w, this.y+7/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);

		ctx.strokeRect(this.x+6.5/18.0*this.w, this.y+11/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+9.2/18.0*this.w, this.y+11/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+12/18.0*this.w, this.y+11/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);

		ctx.strokeRect(this.x+6.5/18.0*this.w, this.y+15/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+9.2/18.0*this.w, this.y+15/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+12/18.0*this.w, this.y+15/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		//puerta edif2
		ctx.strokeRect(this.x+8/18.0*this.w, this.y+20.2/18.0*this.h, 4/18.0*this.w, 1.8/18.0*this.h);


		//edif3

		ctx.strokeRect(this.x+14/18.0*this.w, this.y+(-12/18.0)*this.h, 22/18.0*this.w, 5/18.0*this.h);
		ctx.strokeRect(this.x+14/18.0*this.w, this.y+(-7/18.0)*this.h, 22/18.0*this.w, 5/18.0*this.h);
		ctx.strokeRect(this.x+14/18.0*this.w, this.y+(-2/18.0)*this.h, 22/18.0*this.w, 5/18.0*this.h);
		ctx.strokeRect(this.x+14/18.0*this.w, this.y+(3/18.0)*this.h, 22/18.0*this.w, 5/18.0*this.h);
		ctx.strokeRect(this.x+14/18.0*this.w, this.y+(8/18.0)*this.h, 22/18.0*this.w, 5/18.0*this.h);
		ctx.strokeRect(this.x+14/18.0*this.w, this.y+(13/18.0)*this.h, 22/18.0*this.w, 5/18.0*this.h);
		//puerta edif3
		ctx.strokeRect(this.x+15/18.0*this.w, this.y+20.2/18.0*this.h, 4/18.0*this.w, 1.8/18.0*this.h);
		ctx.strokeRect(this.x+23/18.0*this.w, this.y+20.2/18.0*this.h, 4/18.0*this.w, 1.8/18.0*this.h);
		ctx.strokeRect(this.x+31/18.0*this.w, this.y+20.2/18.0*this.h, 4/18.0*this.w, 1.8/18.0*this.h);








		//ventanas edif4
		ctx.strokeRect(this.x+36.5/18.0*this.w, this.y+9/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+39.2/18.0*this.w, this.y+9/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+41.8/18.0*this.w, this.y+9/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);

		ctx.strokeRect(this.x+36.5/18.0*this.w, this.y+12/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+39.2/18.0*this.w, this.y+12/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+41.8/18.0*this.w, this.y+12/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);

		ctx.strokeRect(this.x+36.5/18.0*this.w, this.y+15/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+39.2/18.0*this.w, this.y+15/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+41.8/18.0*this.w, this.y+15/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);

		ctx.strokeRect(this.x+36.5/18.0*this.w, this.y+18/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+39.2/18.0*this.w, this.y+18/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+41.8/18.0*this.w, this.y+18/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		//puerta edif4
		ctx.strokeRect(this.x+36/18.0*this.w, this.y+20.2/18.0*this.h, 4/18.0*this.w, 1.8/18.0*this.h);
		ctx.strokeRect(this.x+42.2/18.0*this.w, this.y+20.2/18.0*this.h, 1/18.0*this.w, 1.8/18.0*this.h);


		//edif5
		ctx.strokeRect(this.x+44.5/18.0*this.w, this.y+15/18.0*this.h, 4/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+44.5/18.0*this.w, this.y+17.8/18.0*this.h, 4/18.0*this.w, 1.5/18.0*this.h);
		//puerta edif5
		ctx.strokeRect(this.x+44.6/18.0*this.w, this.y+20.2/18.0*this.h, 1/18.0*this.w, 1.8/18.0*this.h);


		//edif6
		ctx.strokeRect(this.x+49.5/18.0*this.w, this.y+5/18.0*this.h, 8/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+59/18.0*this.w, this.y+5/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);

		ctx.strokeRect(this.x+49.5/18.0*this.w, this.y+8/18.0*this.h, 8/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+59/18.0*this.w, this.y+8/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);

		ctx.strokeRect(this.x+49.5/18.0*this.w, this.y+11/18.0*this.h, 8/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+59/18.0*this.w, this.y+11/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);

		ctx.strokeRect(this.x+49.5/18.0*this.w, this.y+14/18.0*this.h, 8/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+59/18.0*this.w, this.y+14/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);

		ctx.strokeRect(this.x+49.5/18.0*this.w, this.y+17/18.0*this.h, 8/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+59/18.0*this.w, this.y+17/18.0*this.h, 1.5/18.0*this.w, 1.5/18.0*this.h);
		//puerta6
		ctx.strokeRect(this.x+49.5/18.0*this.w, this.y+20/18.0*this.h, 4/18.0*this.w, 2/18.0*this.h);

		//edif7
		ctx.strokeRect(this.x+69/18.0*this.w, this.y+(-4/18.0)*this.h, 2/18.0*this.w, 22.5/18.0*this.h);
		ctx.strokeRect(this.x+62/18.0*this.w, this.y+(-4/18.0)*this.h, 6/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+62/18.0*this.w, this.y+(-1/18.0)*this.h, 6/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+62/18.0*this.w, this.y+(2/18.0)*this.h, 6/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+62/18.0*this.w, this.y+(5/18.0)*this.h, 6/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+62/18.0*this.w, this.y+(8/18.0)*this.h, 6/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+62/18.0*this.w, this.y+(11/18.0)*this.h, 6/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+62/18.0*this.w, this.y+(14/18.0)*this.h, 6/18.0*this.w, 1.5/18.0*this.h);
		ctx.strokeRect(this.x+62/18.0*this.w, this.y+(17/18.0)*this.h, 6/18.0*this.w, 1.5/18.0*this.h);
		//puerta7
		ctx.strokeRect(this.x+69/18.0*this.w, this.y+20/18.0*this.h, 2/18.0*this.w, 2/18.0*this.h);

		//raya
		ctx.beginPath();
		ctx.moveTo(this.x+25/18.0*this.w, this.y+(-12/18.0)*this.h); // Set the path origin
		ctx.lineTo(this.x+25/18.0*this.w, this.y+18/18.0*this.h); // Set the path destination
		ctx.closePath(); // Close the path
		ctx.stroke(); 





	}
}