function RobotV1_v3(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	var wi = 8.0;
	var he = 8.0;
	var negro = "rgb(0, 0, 0)";
	var gris1 = "rgb(100, 100, 100)";
	var gris2 = "rgb(200, 200, 200)";
	var blanco = "rgb(255, 255, 255)";
	this.dibujar = function(ctx){

		ctx.lineWidth = 2;

		//cabeza
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.6/wi*this.w, this.y+2.7/he*this.h); 
		ctx.lineTo(this.x+4.7/wi*this.w, this.y+3.6/he*this.h); 
		ctx.lineTo(this.x+5.7/wi*this.w, this.y+3.6/he*this.h);
		ctx.lineTo(this.x+5.8/wi*this.w, this.y+2.7/he*this.h);
		ctx.lineTo(this.x+5.6/wi*this.w, this.y+2.4/he*this.h);
		ctx.lineTo(this.x+4.8/wi*this.w, this.y+2.4/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.fillStyle = negro;
		ctx.fillRect(this.x+4.8/wi*this.w, this.y+2.4/he*this.h, 0.05/wi*this.w, 0.15/he*this.h);
		ctx.fillRect(this.x+4.9/wi*this.w, this.y+2.4/he*this.h, 0.05/wi*this.w, 0.15/he*this.h);
		ctx.fillRect(this.x+5.0/wi*this.w, this.y+2.4/he*this.h, 0.05/wi*this.w, 0.15/he*this.h);
		ctx.fillRect(this.x+5.1/wi*this.w, this.y+2.4/he*this.h, 0.05/wi*this.w, 0.15/he*this.h);
		ctx.fillRect(this.x+5.2/wi*this.w, this.y+2.4/he*this.h, 0.05/wi*this.w, 0.15/he*this.h);
		ctx.fillRect(this.x+5.3/wi*this.w, this.y+2.4/he*this.h, 0.05/wi*this.w, 0.15/he*this.h);
		ctx.fillRect(this.x+5.4/wi*this.w, this.y+2.4/he*this.h, 0.05/wi*this.w, 0.15/he*this.h);
		ctx.fillRect(this.x+5.5/wi*this.w, this.y+2.4/he*this.h, 0.05/wi*this.w, 0.15/he*this.h);

		//ojos
		ctx.fillStyle = negro;
		ctx.fillRect(this.x+4.7/wi*this.w, this.y+2.7/he*this.h, 0.8/wi*this.w, 0.35/he*this.h);
		
		//ojo 1
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+4.9/wi*this.w, this.y+2.9/he*this.h, 0.1/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		//ojo 2
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+5.3/wi*this.w, this.y+2.9/he*this.h, 0.1/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//boca
		ctx.fillStyle = negro;
		ctx.fillRect(this.x+4.9/wi*this.w, this.y+3.2/he*this.h, 0.4/wi*this.w, 0.2/he*this.h);

		//brazo 1
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+2.25/wi*this.w, this.y+5.0/he*this.h); 
		ctx.lineTo(this.x+3.8/wi*this.w, this.y+4.7/he*this.h); 
		ctx.lineTo(this.x+3.9/wi*this.w, this.y+4.0/he*this.h); 
		ctx.lineTo(this.x+4.1/wi*this.w, this.y+4.0/he*this.h);
		ctx.lineTo(this.x+4.0/wi*this.w, this.y+4.9/he*this.h); 
		ctx.lineTo(this.x+2.25/wi*this.w, this.y+5.15/he*this.h); 
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.beginPath(); 
		ctx.moveTo(this.x+2.3/wi*this.w, this.y+5.3/he*this.h); 
		ctx.lineTo(this.x+4.2/wi*this.w, this.y+5.05/he*this.h); 
		ctx.lineTo(this.x+4.2/wi*this.w, this.y+4.2/he*this.h); 
		ctx.lineTo(this.x+4.3/wi*this.w, this.y+4.2/he*this.h);
		ctx.lineTo(this.x+4.4/wi*this.w, this.y+5.2/he*this.h); 
		ctx.lineTo(this.x+2.3/wi*this.w, this.y+5.4/he*this.h); 
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();		

		//codo 1
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+4/wi*this.w, this.y+5.0/he*this.h, 0.30/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+4/wi*this.w, this.y+5.0/he*this.h, 0.15/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//manos 1
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+2.3/wi*this.w, this.y+5.0/he*this.h); 
		ctx.lineTo(this.x+2.4/wi*this.w, this.y+5.4/he*this.h); 
		ctx.lineTo(this.x+2.1/wi*this.w, this.y+5.6/he*this.h); 
		ctx.lineTo(this.x+1.9/wi*this.w, this.y+4.9/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.fillRect(this.x+1.5/wi*this.w, this.y+4.9/he*this.h, 0.5/wi*this.w, 0.15/he*this.h);
		ctx.fillRect(this.x+1.5/wi*this.w, this.y+5.2/he*this.h, 0.5/wi*this.w, 0.15/he*this.h);
		ctx.fillRect(this.x+1.6/wi*this.w, this.y+5.45/he*this.h, 0.5/wi*this.w, 0.15/he*this.h);


		//hombro 1
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+4.3/wi*this.w, this.y+4.0/he*this.h, 0.4/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//soporte cuerpo
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+6.7/wi*this.w, this.y+6.8/he*this.h); 
		ctx.lineTo(this.x+6.7/wi*this.w, this.y+5.6/he*this.h); 
		ctx.lineTo(this.x+6.1/wi*this.w, this.y+5.1/he*this.h); 
		ctx.lineTo(this.x+6.1/wi*this.w, this.y+4.8/he*this.h);
		ctx.lineTo(this.x+6.9/wi*this.w, this.y+5.6/he*this.h);
		ctx.lineTo(this.x+6.9/wi*this.w, this.y+6.8/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+6.7/wi*this.w, this.y+5.6/he*this.h, 0.25/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+6.7/wi*this.w, this.y+5.6/he*this.h, 0.1/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//torso1
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.3/wi*this.w, this.y+3.6/he*this.h); 
		ctx.lineTo(this.x+4.3/wi*this.w, this.y+5.0/he*this.h); 
		ctx.lineTo(this.x+4.8/wi*this.w, this.y+6.25/he*this.h); 
		ctx.lineTo(this.x+5.6/wi*this.w, this.y+6.25/he*this.h);
		ctx.lineTo(this.x+6.1/wi*this.w, this.y+5.0/he*this.h);
		ctx.lineTo(this.x+6.1/wi*this.w, this.y+3.6/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//torso2
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.4/wi*this.w, this.y+3.8/he*this.h); 
		ctx.lineTo(this.x+4.8/wi*this.w, this.y+4.5/he*this.h); 
		ctx.lineTo(this.x+4.8/wi*this.w, this.y+5.2/he*this.h);
		ctx.lineTo(this.x+5.6/wi*this.w, this.y+5.2/he*this.h);
		ctx.lineTo(this.x+5.6/wi*this.w, this.y+4.5/he*this.h);
		ctx.lineTo(this.x+6.0/wi*this.w, this.y+3.8/he*this.h);		
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();


		//V1
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+5.0/wi*this.w, this.y+4.0/he*this.h); 
		ctx.lineTo(this.x+5.2/wi*this.w, this.y+4.5/he*this.h); 
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+5.4/wi*this.w, this.y+4.0/he*this.h); 
		ctx.lineTo(this.x+5.2/wi*this.w, this.y+4.5/he*this.h); 
		ctx.closePath(); 
		ctx.stroke(); 

		//brazo 2
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.7/wi*this.w, this.y+5.0/he*this.h); 
		ctx.lineTo(this.x+5.45/wi*this.w, this.y+4.7/he*this.h); 
		ctx.lineTo(this.x+5.9/wi*this.w, this.y+3.7/he*this.h); 
		ctx.lineTo(this.x+6.05/wi*this.w, this.y+3.7/he*this.h);
		ctx.lineTo(this.x+5.55/wi*this.w, this.y+4.9/he*this.h); 
		ctx.lineTo(this.x+3.7/wi*this.w, this.y+5.15/he*this.h); 
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.8/wi*this.w, this.y+5.25/he*this.h); 
		ctx.lineTo(this.x+5.6/wi*this.w, this.y+5.05/he*this.h); 
		ctx.lineTo(this.x+6.4/wi*this.w, this.y+3.7/he*this.h); 
		ctx.lineTo(this.x+6.6/wi*this.w, this.y+3.85/he*this.h);
		ctx.lineTo(this.x+5.8/wi*this.w, this.y+5.2/he*this.h); 
		ctx.lineTo(this.x+3.8/wi*this.w, this.y+5.4/he*this.h); 
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//manos 2
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.7/wi*this.w, this.y+5.0/he*this.h); 
		ctx.lineTo(this.x+3.8/wi*this.w, this.y+5.4/he*this.h); 
		ctx.lineTo(this.x+3.5/wi*this.w, this.y+5.6/he*this.h); 
		ctx.lineTo(this.x+3.3/wi*this.w, this.y+4.9/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.fillRect(this.x+2.9/wi*this.w, this.y+4.9/he*this.h, 0.5/wi*this.w, 0.15/he*this.h);
		ctx.fillRect(this.x+2.9/wi*this.w, this.y+5.2/he*this.h, 0.5/wi*this.w, 0.15/he*this.h);
		ctx.fillRect(this.x+3.0/wi*this.w, this.y+5.45/he*this.h, 0.5/wi*this.w, 0.15/he*this.h);
	

		//codo 2
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+5.6/wi*this.w, this.y+5.0/he*this.h, 0.3/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+5.6/wi*this.w, this.y+5.0/he*this.h, 0.15/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//hombro2
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+6.2/wi*this.w, this.y+4.0/he*this.h, 0.4/wi*this.w, 0, 2*Math.PI, false);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+6.2/wi*this.w, this.y+4.0/he*this.h, 0.2/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
	

		//cadera 1
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+4.6/wi*this.w, this.y+6.0/he*this.h, 0.35/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+4.6/wi*this.w, this.y+6.0/he*this.h, 0.15/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//cintura
		ctx.fillStyle = gris2;
		ctx.fillRect(this.x+4.55/wi*this.w, this.y+5.85/he*this.h, 1.0/wi*this.w, 0.3/he*this.h);
		ctx.fillStyle = gris1;
		ctx.fillRect(this.x+4.7/wi*this.w, this.y+5.85/he*this.h, 0.05/wi*this.w, 0.3/he*this.h);
		ctx.fillRect(this.x+4.8/wi*this.w, this.y+5.85/he*this.h, 0.05/wi*this.w, 0.3/he*this.h);
		ctx.fillRect(this.x+4.9/wi*this.w, this.y+5.85/he*this.h, 0.05/wi*this.w, 0.3/he*this.h);
		ctx.fillRect(this.x+5.0/wi*this.w, this.y+5.85/he*this.h, 0.05/wi*this.w, 0.3/he*this.h);
		ctx.fillRect(this.x+5.1/wi*this.w, this.y+5.85/he*this.h, 0.05/wi*this.w, 0.3/he*this.h);
		ctx.fillRect(this.x+5.2/wi*this.w, this.y+5.85/he*this.h, 0.05/wi*this.w, 0.3/he*this.h);

		//pierna 
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+6.8/wi*this.w, this.y+6.8/he*this.h); 
		ctx.lineTo(this.x+5.9/wi*this.w, this.y+6.0/he*this.h); 
		ctx.lineTo(this.x+6.0/wi*this.w, this.y+5.9/he*this.h); 
		ctx.lineTo(this.x+6.9/wi*this.w, this.y+6.7/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.beginPath(); 
		ctx.moveTo(this.x+6.5/wi*this.w, this.y+6.9/he*this.h); 
		ctx.lineTo(this.x+5.6/wi*this.w, this.y+6.1/he*this.h); 
		ctx.lineTo(this.x+5.7/wi*this.w, this.y+6.0/he*this.h); 
		ctx.lineTo(this.x+6.6/wi*this.w, this.y+6.8/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//pierna inferior 
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.8/wi*this.w, this.y+7.7/he*this.h); 
		ctx.lineTo(this.x+6.8/wi*this.w, this.y+6.6/he*this.h); 
		ctx.lineTo(this.x+6.9/wi*this.w, this.y+6.7/he*this.h); 
		ctx.lineTo(this.x+5.1/wi*this.w, this.y+7.7/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.beginPath(); 
		ctx.moveTo(this.x+5.4/wi*this.w, this.y+7.8/he*this.h); 
		ctx.lineTo(this.x+6.9/wi*this.w, this.y+6.8/he*this.h); 
		ctx.lineTo(this.x+7.0/wi*this.w, this.y+6.9/he*this.h); 
		ctx.lineTo(this.x+5.8/wi*this.w, this.y+7.7/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//cadera 2
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+5.8/wi*this.w, this.y+6.0/he*this.h, 0.35/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+5.8/wi*this.w, this.y+6.0/he*this.h, 0.15/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//union piernas2 
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+6.7/wi*this.w, this.y+6.9/he*this.h, 0.3/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+6.7/wi*this.w, this.y+6.9/he*this.h, 0.1/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//oruga 1
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+2.2/wi*this.w, this.y+9.95/he*this.h);
		ctx.lineTo(this.x+1.9/wi*this.w, this.y+9.4/he*this.h);
		ctx.lineTo(this.x+2.2/wi*this.w, this.y+8.7/he*this.h); 
		ctx.lineTo(this.x+3.4/wi*this.w, this.y+7.8/he*this.h); 
		ctx.lineTo(this.x+4.4/wi*this.w, this.y+7.8/he*this.h); 
		ctx.lineTo(this.x+5.6/wi*this.w, this.y+8.7/he*this.h);
		ctx.lineTo(this.x+5.9/wi*this.w, this.y+9.4/he*this.h); 
		ctx.lineTo(this.x+5.6/wi*this.w, this.y+9.95/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		//motor oruga 1
		ctx.fillStyle = blanco;
		ctx.beginPath(); 
		ctx.moveTo(this.x+2.4/wi*this.w, this.y+9.75/he*this.h);
		ctx.lineTo(this.x+2.2/wi*this.w, this.y+9.5/he*this.h);
		ctx.lineTo(this.x+2.2/wi*this.w, this.y+9.05/he*this.h); 
		ctx.lineTo(this.x+3.55/wi*this.w, this.y+7.95/he*this.h); 
		ctx.lineTo(this.x+4.25/wi*this.w, this.y+7.95/he*this.h);
		ctx.lineTo(this.x+5.6/wi*this.w, this.y+9.05/he*this.h);
		ctx.lineTo(this.x+5.6/wi*this.w, this.y+9.5/he*this.h); 
		ctx.lineTo(this.x+5.4/wi*this.w, this.y+9.75/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//ruedas 11
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+2.6/wi*this.w, this.y+9.3/he*this.h, 0.45/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+2.6/wi*this.w, this.y+9.3/he*this.h, 0.35/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		//ruedas 12
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+3.9/wi*this.w, this.y+8.85/he*this.h, 0.9/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+3.9/wi*this.w, this.y+8.85/he*this.h, 0.8/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		//ruedas 13
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+5.2/wi*this.w, this.y+9.3/he*this.h, 0.45/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+5.2/wi*this.w, this.y+9.3/he*this.h, 0.35/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//rodilla 1
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+3.9/wi*this.w, this.y+8/he*this.h, 0.4/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//union rodillas
		ctx.fillStyle = gris1;
		ctx.fillRect(this.x+3.7/wi*this.w, this.y+7.6/he*this.h, 1.6/wi*this.w, 0.7/he*this.h);

		//motor orugas
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.moveTo(this.x+2.5/wi*this.w, this.y+9.5/he*this.h);
		ctx.lineTo(this.x+2.4/wi*this.w, this.y+9.2/he*this.h);
		ctx.lineTo(this.x+3.7/wi*this.w, this.y+8.0/he*this.h);
		ctx.lineTo(this.x+4.7/wi*this.w, this.y+8.0/he*this.h);
		ctx.lineTo(this.x+3.7/wi*this.w, this.y+9.2/he*this.h);
		ctx.lineTo(this.x+3.4/wi*this.w, this.y+9.5/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		//remaches
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+3.7/wi*this.w, this.y+8.2/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+4.0/wi*this.w, this.y+8.2/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+4.3/wi*this.w, this.y+8.2/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+3.5/wi*this.w, this.y+8.4/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+3.3/wi*this.w, this.y+8.6/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+3.1/wi*this.w, this.y+8.8/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+2.9/wi*this.w, this.y+9.0/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+2.7/wi*this.w, this.y+9.2/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+3.1/wi*this.w, this.y+9.2/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+3.4/wi*this.w, this.y+9.2/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//rodilla 2
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+5.5/wi*this.w, this.y+8/he*this.h, 0.4/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+5.5/wi*this.w, this.y+8/he*this.h, 0.1/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//oruga 2
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.8/wi*this.w, this.y+9.95/he*this.h);
		ctx.lineTo(this.x+3.5/wi*this.w, this.y+9.4/he*this.h);
		ctx.lineTo(this.x+3.8/wi*this.w, this.y+8.7/he*this.h); 
		ctx.lineTo(this.x+5.0/wi*this.w, this.y+7.8/he*this.h); 
		ctx.lineTo(this.x+6.0/wi*this.w, this.y+7.8/he*this.h); 
		ctx.lineTo(this.x+7.2/wi*this.w, this.y+8.7/he*this.h);
		ctx.lineTo(this.x+7.5/wi*this.w, this.y+9.4/he*this.h); 
		ctx.lineTo(this.x+7.2/wi*this.w, this.y+9.95/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		//motor oruga 2
		ctx.fillStyle = blanco;
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.0/wi*this.w, this.y+9.75/he*this.h);
		ctx.lineTo(this.x+3.8/wi*this.w, this.y+9.5/he*this.h);
		ctx.lineTo(this.x+3.8/wi*this.w, this.y+9.05/he*this.h); 
		ctx.lineTo(this.x+5.15/wi*this.w, this.y+7.95/he*this.h); 
		ctx.lineTo(this.x+5.85/wi*this.w, this.y+7.95/he*this.h);
		ctx.lineTo(this.x+7.2/wi*this.w, this.y+9.05/he*this.h);
		ctx.lineTo(this.x+7.2/wi*this.w, this.y+9.5/he*this.h); 
		ctx.lineTo(this.x+7.0/wi*this.w, this.y+9.75/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//ruedas 21
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+4.2/wi*this.w, this.y+9.3/he*this.h, 0.45/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+4.2/wi*this.w, this.y+9.3/he*this.h, 0.35/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		//ruedas 22
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+5.5/wi*this.w, this.y+8.85/he*this.h, 0.9/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+5.5/wi*this.w, this.y+8.85/he*this.h, 0.8/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		//ruedas 23
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+6.8/wi*this.w, this.y+9.3/he*this.h, 0.45/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+6.8/wi*this.w, this.y+9.3/he*this.h, 0.35/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//union ruedas 2
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.05/wi*this.w, this.y+9.5/he*this.h);
		ctx.lineTo(this.x+4.0/wi*this.w, this.y+9.2/he*this.h);
		ctx.lineTo(this.x+5.3/wi*this.w, this.y+8.75/he*this.h);
		ctx.lineTo(this.x+5.3/wi*this.w, this.y+8.0/he*this.h);
		ctx.lineTo(this.x+5.7/wi*this.w, this.y+8.0/he*this.h);
		ctx.lineTo(this.x+5.7/wi*this.w, this.y+8.75/he*this.h);
		ctx.lineTo(this.x+7.0/wi*this.w, this.y+9.2/he*this.h);
		ctx.lineTo(this.x+6.95/wi*this.w, this.y+9.5/he*this.h);
		ctx.lineTo(this.x+5.7/wi*this.w, this.y+9.1/he*this.h);
		ctx.lineTo(this.x+5.3/wi*this.w, this.y+9.1/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		//eje 21
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+4.2/wi*this.w, this.y+9.3/he*this.h, 0.15/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		//eje 22
		ctx.beginPath(); 
		ctx.arc(this.x+5.5/wi*this.w, this.y+8.85/he*this.h, 0.15/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		//eje 23
		ctx.beginPath(); 
		ctx.arc(this.x+6.8/wi*this.w, this.y+9.3/he*this.h, 0.15/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill(); 
		

	}
}