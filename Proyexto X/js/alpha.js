
function roundedRect(ctx,x,y,width,height,radius,color){
	ctx.fillStyle = '#'+color;
	ctx.beginPath();
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
	ctx.fillStyle = '#'+color;
	ctx.beginPath();
	ctx.moveTo(this.x+2/grilla*this.w, this.y+9/grilla*this.h);
	ctx.lineTo(this.x+12/grilla*this.w, this.y+9/grilla*this.h);
	ctx.lineTo(this.x+9/grilla*this.w, this.y+12/grilla*this.h);
	ctx.lineTo(this.x+2/grilla*this.w, this.y+9/grilla*this.h);
	ctx.fill();
	ctx.closePath();
}
function Circulo(ctx,x,y,w,h,radio,estado,color){
	ctx.fillStyle = '#'+color;
	ctx.beginPath();
	ctx.arc(x,y,w,h, radio, estado);
	ctx.fill();
}

function Rectangulo(ctx,x,y,width,height,color){
	ctx.fillStyle = '#'+color;
	ctx.fillRect(x,y,width,height);
	ctx.closePath();
}

function Alpha(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	var grilla = 32;
	var radio = 20;
	var color = '';

	this.dibujar = function(ctx){


		//cabeza
		roundedRect(ctx, this.x+4/grilla*this.w, this.y+1/grilla*this.h, 8/grilla*this.w, 7/grilla*this.h, 50,'8B4513');
		roundedRect(ctx, this.x+5/grilla*this.w, this.y+2.5/grilla*this.h, 6/grilla*this.w, 2/grilla*this.h, radio,'000000');

		//ojo rayos
		roundedRect(ctx, this.x+6.2/grilla*this.w, this.y+3.3/grilla*this.h, 0.5/grilla*this.w, 0.5/grilla*this.h, radio,'FA0907');


		//ojo izq
		ctx.fillStyle = "#19070B";
		//ctx.fillRect(this.x+6/grilla*this.w, this.y+3/grilla*this.h, 1/grilla*this.w, 1/grilla*this.h);
		Circulo(ctx, this.x+6.5/grilla*this.w, this.y+3.5/grilla*this.h, 0.3/grilla*this.h, 0, 2 * Math.PI, true,'FA0907');



		//ojo der
		ctx.fillStyle = "#19070B";
		ctx.fillRect(this.x+9/grilla*this.w, this.y+3/grilla*this.h, 1/grilla*this.w, 1/grilla*this.h);
		Circulo(ctx, this.x+9.5/grilla*this.w, this.y+3.5/grilla*this.h, 0.3/grilla*this.h, 0, 2 * Math.PI, true,'FA0907');

		//boca
		Rectangulo(ctx, this.x+6/grilla*this.w, this.y+6/grilla*this.h, 4/grilla*this.w, 0.8/grilla*this.h, '000000');
		Rectangulo(ctx, this.x+6/grilla*this.w, this.y+6/grilla*this.h, 4/grilla*this.w, 0.4/grilla*this.h, '8B4513');

		//antena izq
		Rectangulo(ctx,this.x+3.5/grilla*this.w, this.y+2/grilla*this.h, 0.5/grilla*this.w, 2/grilla*this.h,'8B4513');

		//antena der
		Rectangulo(ctx,this.x+12/grilla*this.w, this.y+2/grilla*this.h, 0.5/grilla*this.w, 2/grilla*this.h,'8B4513');

		//cuello
		Rectangulo(ctx,this.x+7/grilla*this.w, this.y+8/grilla*this.h, 2/grilla*this.w, 0.4/grilla*this.h,'8B4513');


		//nariz
		roundedRect(ctx, this.x+7.8/grilla*this.w, this.y+5/grilla*this.h, 0.5/grilla*this.w, 0.5/grilla*this.h, 15,'000000');

		//cuerpo
		ctx.fillStyle = "#8B4513";
		ctx.beginPath();
		ctx.moveTo(this.x+1/grilla*this.w, this.y+8.4/grilla*this.h);
		ctx.lineTo(this.x+15/grilla*this.w, this.y+8.4/grilla*this.h);
		ctx.lineTo(this.x+8/grilla*this.w, this.y+18/grilla*this.h);
		ctx.lineTo(this.x+1/grilla*this.w, this.y+8.4/grilla*this.h);
		ctx.fill();


		ctx.fillStyle = "#8B4513";
		ctx.beginPath();
		ctx.moveTo(this.x+2/grilla*this.w, this.y+7.6/grilla*this.h);
		ctx.lineTo(this.x+14/grilla*this.w, this.y+7.6/grilla*this.h);
		ctx.lineTo(this.x+7/grilla*this.w, this.y+14/grilla*this.h);
		ctx.lineTo(this.x+2/grilla*this.w, this.y+7.6/grilla*this.h);
		ctx.fill();


		//dedos
		ctx.fillStyle = "#8B4513";
		ctx.beginPath();
		ctx.moveTo(this.x+1/grilla*this.w, this.y+20/grilla*this.h);
		ctx.lineTo(this.x+2/grilla*this.w, this.y+2/grilla*this.h);
		ctx.fill();

		//cuerpo
		roundedRect(ctx, this.x+4/grilla*this.w, this.y+14/grilla*this.h, 8/grilla*this.w, 6/grilla*this.h, 20,'8B4513');

		roundedRect(ctx,this.x+1/grilla*this.w, this.y+8.7/grilla*this.h, 2/grilla*this.w, 13/grilla*this.h,20,'8B4513');
		roundedRect(ctx,this.x+13/grilla*this.w, this.y+8.7/grilla*this.h, 2/grilla*this.w, 13/grilla*this.h,20,'8B4513');


		roundedRect(ctx,this.x+4/grilla*this.w, this.y+16.7/grilla*this.h, 3/grilla*this.w, 13/grilla*this.h,10,'8B4513');
		roundedRect(ctx,this.x+9/grilla*this.w, this.y+16.7/grilla*this.h, 3/grilla*this.w, 13/grilla*this.h,10,'8B4513');


		roundedRect(ctx,this.x+3/grilla*this.w, this.y+29/grilla*this.h, 3/grilla*this.w, 2/grilla*this.h,10,'8B4513');
		roundedRect(ctx,this.x+10/grilla*this.w, this.y+29/grilla*this.h, 3/grilla*this.w, 2/grilla*this.h,10,'8B4513');


		//escudo
		ctx.fillStyle = "#6A0D07";
		ctx.beginPath();
		ctx.moveTo(this.x+6/grilla*this.w, this.y+9/grilla*this.h);
		ctx.lineTo(this.x+10/grilla*this.w, this.y+9/grilla*this.h);
		ctx.lineTo(this.x+8/grilla*this.w, this.y+13/grilla*this.h);
		ctx.lineTo(this.x+6/grilla*this.w, this.y+9/grilla*this.h);
		ctx.fill();

		//escudo
		ctx.strokeStyle = "#FA0907";
		ctx.beginPath();
		ctx.moveTo(this.x+6/grilla*this.w, this.y+9/grilla*this.h);
		ctx.lineTo(this.x+10/grilla*this.w, this.y+9/grilla*this.h);
		ctx.lineTo(this.x+8/grilla*this.w, this.y+13/grilla*this.h);
		ctx.lineTo(this.x+6/grilla*this.w, this.y+9/grilla*this.h);
		ctx.stroke();

		ctx.fillStyle = "#ffffff";
		var text2 = "ALPHA";
		ctx.font = "bold 14px arial";
		ctx.fillText(text2, this.x+6.7/grilla*this.w, this.y+10/grilla*this.h);

	}
}