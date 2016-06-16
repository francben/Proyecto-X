
function roundedRect(ctx,x,y,width,height,radius,color){
	ctx.beginPath();
	ctx.fillStyle = '#'+color;
	ctx.moveTo(x,y+radius);
	ctx.lineTo(x,y+height-radius);
	ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
	ctx.lineTo(x+width-radius,y+height);
	ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
	ctx.lineTo(x+width,y+radius);
	ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
	ctx.lineTo(x+radius,y);
	ctx.quadraticCurveTo(x,y,x,y+radius);
	ctx.fill();
	ctx.closePath();
}
function Triangulo(ctx,grilla,color){
	ctx.beginPath();
	ctx.fillStyle = '#'+color;
	ctx.moveTo(this.x+2/grilla*this.w, this.y+9/grilla*this.h);
	ctx.lineTo(this.x+12/grilla*this.w, this.y+9/grilla*this.h);
	ctx.lineTo(this.x+9/grilla*this.w, this.y+12/grilla*this.h);
	ctx.lineTo(this.x+2/grilla*this.w, this.y+9/grilla*this.h);
	ctx.fill();
	ctx.closePath();
}
function Circulo(ctx,x,y,w,h,radio,estado,color){
	ctx.beginPath();
	ctx.fillStyle = '#'+color;
	ctx.arc(x,y,w,h, radio, estado);
	ctx.fill();
}

function Rectangulo(ctx,x,y,width,height,color){
	ctx.beginPath();
	ctx.fillStyle = '#'+color;
	ctx.fillRect(x,y,width,height);
	ctx.closePath();
}

function Elipse(ctx,x,y,radiox,radioy,rotacion,iniangulo,finangulo,clock,color){
	ctx.beginPath();
	ctx.fillStyle = '#'+color;
	ctx.ellipse(x,y,radiox,radioy,rotacion,iniangulo,finangulo,clock);
	ctx.fill();
	ctx.closePath();
}


function Alpha(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.velocidad = 12;
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
		var grilla = 16;
		var color = '';

		//brazo izq
		ctx.beginPath();
		ctx.moveTo(this.x+7/grilla*this.w, this.y+10/grilla*this.h);
		ctx.lineTo(this.x+13/grilla*this.w, this.y+12/grilla*this.h);
		ctx.lineWidth = 38;
		ctx.strokeStyle = '#ffffff';
		ctx.lineCap="round";
		ctx.stroke();
		ctx.closePath();

		//Circulo(ctx, this.x+17/grilla*this.w, this.y+11.8/grilla*this.h, 2/grilla*this.h, (Math.PI/180)*45, (Math.PI/180)*260, false,'ffffff');
		//Circulo(ctx, this.x+17.3/grilla*this.w, this.y+11.5/grilla*this.h, 1.3/grilla*this.h, (Math.PI/180)*45, (Math.PI/180)*260, false,'000000');


		// ----------------- mano pinzas der
		ctx.beginPath();
		ctx.moveTo(this.x+13/grilla*this.w, this.y+12/grilla*this.h);
		ctx.lineTo(this.x+14/grilla*this.w, this.y+11/grilla*this.h);
		ctx.lineWidth = 10;
		ctx.strokeStyle = '#ff0000';
		ctx.lineCap="round";
		ctx.stroke();
		ctx.closePath();


		ctx.beginPath();
		ctx.moveTo(this.x+14/grilla*this.w, this.y+11/grilla*this.h);
		ctx.lineTo(this.x+15/grilla*this.w, this.y+11.5/grilla*this.h);
		ctx.lineWidth = 10;
		ctx.strokeStyle = '#ff0000';
		ctx.lineCap="round";
		ctx.stroke();
		ctx.closePath();
		//

		ctx.beginPath();
		ctx.moveTo(this.x+13/grilla*this.w, this.y+12/grilla*this.h);
		ctx.lineTo(this.x+14/grilla*this.w, this.y+13/grilla*this.h);
		ctx.lineWidth = 10;
		ctx.strokeStyle = '#ff0000';
		ctx.lineCap="round";
		ctx.stroke();
		ctx.closePath();


		ctx.beginPath();
		ctx.moveTo(this.x+14/grilla*this.w, this.y+13/grilla*this.h);
		ctx.lineTo(this.x+15/grilla*this.w, this.y+12.5/grilla*this.h);
		ctx.lineWidth = 10;
		ctx.strokeStyle = '#ff0000';
		ctx.lineCap="round";
		ctx.stroke();
		ctx.closePath();
		//!----------------------------


		//cabeza
		roundedRect(ctx, this.x+4/grilla*this.w, this.y+1/grilla*this.h, 6/grilla*this.w, 5/grilla*this.h, 10,'ffffff');
		Rectangulo(ctx, this.x+4/grilla*this.w, this.y+4/grilla*this.h, 6/grilla*this.w, 3/grilla*this.h, 'ffffff');

		//pierna
		Rectangulo(ctx, this.x+5/grilla*this.w, this.y+13/grilla*this.h, 4/grilla*this.w, 8/grilla*this.h, 'ffffff');
		roundedRect(ctx, this.x+5/grilla*this.w, this.y+18/grilla*this.h, 4/grilla*this.w, 4/grilla*this.h, 10,'ffffff');


		//boca
		Rectangulo(ctx, this.x+7/grilla*this.w, this.y+5/grilla*this.h, 3/grilla*this.w, 0.5/grilla*this.h, '000000');
		Rectangulo(ctx, this.x+7/grilla*this.w, this.y+5.25/grilla*this.h, 3/grilla*this.w, 0.1/grilla*this.h, 'ffffff');

		//ceja
		//Rectangulo(ctx, this.x+9/grilla*this.w, this.y+1.5/grilla*this.h, 1/grilla*this.w, 0.2/grilla*this.h, '000000');


		ctx.beginPath();
		ctx.moveTo(this.x+9/grilla*this.w, this.y+1.5/grilla*this.h);
		ctx.lineTo(this.x+10/grilla*this.w, this.y+1.8/grilla*this.h);
		ctx.lineWidth = 5;
		ctx.strokeStyle = '#000000';
		ctx.lineCap="round";
		ctx.stroke();
		ctx.closePath();


		//ojos
		Circulo(ctx, this.x+9/grilla*this.w, this.y+3/grilla*this.h, 0.8/grilla*this.h, (Math.PI/180)*0, (Math.PI/180)*360, true,'000000');
		Circulo(ctx, this.x+9/grilla*this.w, this.y+3/grilla*this.h, 0.4/grilla*this.h, (Math.PI/180)*0, (Math.PI/180)*360, true,'e02223');

		//antena
		Circulo(ctx, this.x+5.3/grilla*this.w, this.y+4/grilla*this.h, 1/grilla*this.h, (Math.PI/180)*0, (Math.PI/180)*360, true,'000000');
		Circulo(ctx, this.x+5.3/grilla*this.w, this.y+4/grilla*this.h, 0.6/grilla*this.h, (Math.PI/180)*0, (Math.PI/180)*225, true,'ffffff');

		//cuello
		Rectangulo(ctx, this.x+5.5/grilla*this.w, this.y+7.1/grilla*this.h, 3/grilla*this.w, 0.6/grilla*this.h, 'ffffff');

		//cuerpo
		roundedRect(ctx, this.x+3.5/grilla*this.w, this.y+8/grilla*this.h, 7/grilla*this.w, 5/grilla*this.h, 10,'ffffff');
		Rectangulo(ctx, this.x+3.5/grilla*this.w, this.y+10/grilla*this.h, 7/grilla*this.w, 3/grilla*this.h, 'ffffff');


		//hombro der
		Circulo(ctx, this.x+7/grilla*this.w, this.y+11/grilla*this.h, 2/grilla*this.h, (Math.PI/180)*0, (Math.PI/180)*360, true,'000000');
		Circulo(ctx, this.x+7/grilla*this.w, this.y+11/grilla*this.h, 1.8/grilla*this.h, (Math.PI/180)*0, (Math.PI/180)*360, true,'ffffff');

		//brazo der
		ctx.beginPath();
		ctx.moveTo(this.x+7/grilla*this.w, this.y+11/grilla*this.h);
		ctx.lineTo(this.x+5/grilla*this.w, this.y+14/grilla*this.h);
		ctx.lineWidth = 41;
		ctx.strokeStyle = '#000000';
		ctx.lineCap="round";
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.moveTo(this.x+7/grilla*this.w, this.y+11/grilla*this.h);
		ctx.lineTo(this.x+5/grilla*this.w, this.y+14/grilla*this.h);
		ctx.lineWidth = 40;
		ctx.strokeStyle = '#ffffff';
		ctx.lineCap="round";
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.moveTo(this.x+5/grilla*this.w, this.y+14/grilla*this.h);
		ctx.lineTo(this.x+9/grilla*this.w, this.y+15/grilla*this.h);
		ctx.lineWidth = 41;
		ctx.strokeStyle = '#000000';
		ctx.lineCap="round";
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.moveTo(this.x+5/grilla*this.w, this.y+14/grilla*this.h);
		ctx.lineTo(this.x+9/grilla*this.w, this.y+15/grilla*this.h);
		ctx.lineWidth = 40;
		ctx.strokeStyle = '#ffffff';
		ctx.lineCap="round";
		ctx.stroke();
		ctx.closePath();

		// ----------------- mano pinzas der
		ctx.beginPath();
		ctx.moveTo(this.x+9/grilla*this.w, this.y+15/grilla*this.h);
		ctx.lineTo(this.x+10/grilla*this.w, this.y+14/grilla*this.h);
		ctx.lineWidth = 10;
		ctx.strokeStyle = '#ff0000';
		ctx.lineCap="round";
		ctx.stroke();
		ctx.closePath();


		ctx.beginPath();
		ctx.moveTo(this.x+10/grilla*this.w, this.y+14/grilla*this.h);
		ctx.lineTo(this.x+11/grilla*this.w, this.y+14.5/grilla*this.h);
		ctx.lineWidth = 10;
		ctx.strokeStyle = '#ff0000';
		ctx.lineCap="round";
		ctx.stroke();
		ctx.closePath();
		//

		ctx.beginPath();
		ctx.moveTo(this.x+9/grilla*this.w, this.y+15/grilla*this.h);
		ctx.lineTo(this.x+10/grilla*this.w, this.y+16/grilla*this.h);
		ctx.lineWidth = 10;
		ctx.strokeStyle = '#ff0000';
		ctx.lineCap="round";
		ctx.stroke();
		ctx.closePath();


		ctx.beginPath();
		ctx.moveTo(this.x+10/grilla*this.w, this.y+16/grilla*this.h);
		ctx.lineTo(this.x+11/grilla*this.w, this.y+15.5/grilla*this.h);
		ctx.lineWidth = 10;
		ctx.strokeStyle = '#ff0000';
		ctx.lineCap="round";
		ctx.stroke();
		ctx.closePath();
		//!----------------------------



		Circulo(ctx, this.x+5/grilla*this.w, this.y+14/grilla*this.h, 1/grilla*this.h, (Math.PI/180)*0, (Math.PI/180)*360, true,'000000');
		Circulo(ctx, this.x+5/grilla*this.w, this.y+14/grilla*this.h, 0.6/grilla*this.h, (Math.PI/180)*0, (Math.PI/180)*360, true,'ffffff');

		//Circulo(ctx, this.x+9/grilla*this.w, this.y+15/grilla*this.h, 0.9/grilla*this.h, (Math.PI/180)*0, (Math.PI/180)*360, true,'000000');
		Circulo(ctx, this.x+9/grilla*this.w, this.y+15/grilla*this.h, 1/grilla*this.h, (Math.PI/180)*0, (Math.PI/180)*360, false,'000000');
		Circulo(ctx, this.x+9/grilla*this.w, this.y+15/grilla*this.h, 0.6/grilla*this.h, (Math.PI/180)*0, (Math.PI/180)*360, false,'ffffff');


		Circulo(ctx, this.x+13/grilla*this.w, this.y+12/grilla*this.h, 1/grilla*this.h, (Math.PI/180)*0, (Math.PI/180)*360, false,'000000');
		Circulo(ctx, this.x+13/grilla*this.w, this.y+12/grilla*this.h, 0.6/grilla*this.h, (Math.PI/180)*0, (Math.PI/180)*360, false,'ffffff');
		//Circulo(ctx, this.x+11.2/grilla*this.w, this.y+15/grilla*this.h, 1.3/grilla*this.h, (Math.PI/180)*45, (Math.PI/180)*260, false,'000000');


		Circulo(ctx, this.x+7/grilla*this.w, this.y+23/grilla*this.h, 5/grilla*this.h, (Math.PI/180)*0, (Math.PI/180)*360, true,'545454');
		Circulo(ctx, this.x+7/grilla*this.w, this.y+23/grilla*this.h, 3.5/grilla*this.h, (Math.PI/180)*0, (Math.PI/180)*360, true,'ffffff');
		Circulo(ctx, this.x+7/grilla*this.w, this.y+23/grilla*this.h, 3/grilla*this.h, (Math.PI/180)*0, (Math.PI/180)*360, true,'000000');

		Circulo(ctx, this.x+7/grilla*this.w, this.y+23/grilla*this.h, 3.5/grilla*this.h, (Math.PI/180)*310, (Math.PI/180)*220, true,'FFFFFF');
		//Rectangulo(ctx, this.x+6/grilla*this.w, this.y+20/grilla*this.h, 2/grilla*this.w, 3/grilla*this.h, 'ffffff');
		Circulo(ctx, this.x+7/grilla*this.w, this.y+23/grilla*this.h, 1/grilla*this.h, (Math.PI/180)*0, (Math.PI/180)*360, true,'ffffff');
		Circulo(ctx, this.x+7/grilla*this.w, this.y+23/grilla*this.h, 0.5/grilla*this.h, (Math.PI/180)*0, (Math.PI/180)*360, true,'545454');


	}
}