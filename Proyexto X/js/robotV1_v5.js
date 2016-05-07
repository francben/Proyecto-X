function RobotV1_v5(x, y, w, h){
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

		//tapa cabeza 
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+5.2/wi*this.w, this.y+1.7/he*this.h, 0.6/wi*this.w, 0, Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		//cabeza
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.6/wi*this.w, this.y+1.6/he*this.h); 
		ctx.lineTo(this.x+4.7/wi*this.w, this.y+2.5/he*this.h); 
		ctx.lineTo(this.x+5.7/wi*this.w, this.y+2.5/he*this.h);
		ctx.lineTo(this.x+5.8/wi*this.w, this.y+1.6/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//ojo 1
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+4.85/wi*this.w, this.y+1.9/he*this.h, 0.1/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		//ojo 2
		ctx.beginPath(); 
		ctx.arc(this.x+5.3/wi*this.w, this.y+1.9/he*this.h, 0.1/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		//boca
		ctx.fillRect(this.x+4.9/wi*this.w, this.y+2.1/he*this.h, 0.05/wi*this.w, 0.2/he*this.h);
		ctx.fillRect(this.x+5.0/wi*this.w, this.y+2.1/he*this.h, 0.05/wi*this.w, 0.2/he*this.h);
		ctx.fillRect(this.x+5.1/wi*this.w, this.y+2.1/he*this.h, 0.05/wi*this.w, 0.2/he*this.h);
		ctx.fillRect(this.x+5.2/wi*this.w, this.y+2.1/he*this.h, 0.05/wi*this.w, 0.2/he*this.h);
		//cuello
		ctx.fillRect(this.x+4.7/wi*this.w, this.y+2.5/he*this.h, 1/wi*this.w, 0.5/he*this.h); 
		ctx.fillStyle = gris2;
		ctx.fillRect(this.x+4.9/wi*this.w, this.y+2.55/he*this.h, 0.6/wi*this.w, 0.1/he*this.h);
		ctx.fillRect(this.x+4.9/wi*this.w, this.y+2.7/he*this.h, 0.6/wi*this.w, 0.1/he*this.h);
		ctx.fillRect(this.x+4.9/wi*this.w, this.y+2.85/he*this.h, 0.6/wi*this.w, 0.1/he*this.h);
		
		//brazo 1
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+2.3/wi*this.w, this.y+4.3/he*this.h); 
		ctx.lineTo(this.x+3.85/wi*this.w, this.y+4.0/he*this.h); 
		ctx.lineTo(this.x+3.6/wi*this.w, this.y+3.0/he*this.h); 
		ctx.lineTo(this.x+4.2/wi*this.w, this.y+3.0/he*this.h);
		ctx.lineTo(this.x+4.6/wi*this.w, this.y+4.5/he*this.h); 
		ctx.lineTo(this.x+2.4/wi*this.w, this.y+4.7/he*this.h); 
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+2.25/wi*this.w, this.y+4.45/he*this.h); 
		ctx.lineTo(this.x+3.9/wi*this.w, this.y+4.2/he*this.h); 
		ctx.lineTo(this.x+3.8/wi*this.w, this.y+4.3/he*this.h); 
		ctx.lineTo(this.x+2.30/wi*this.w, this.y+4.55/he*this.h); 
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//codo 1
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+4.1/wi*this.w, this.y+4.2/he*this.h, 0.30/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//manos 1
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+2.2/wi*this.w, this.y+4.3/he*this.h); 
		ctx.lineTo(this.x+2.3/wi*this.w, this.y+4.7/he*this.h); 
		ctx.lineTo(this.x+2.0/wi*this.w, this.y+4.8/he*this.h); 
		ctx.lineTo(this.x+1.9/wi*this.w, this.y+4.3/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		//dedos 1
		ctx.fillStyle = negro;
		ctx.fillRect(this.x+1.5/wi*this.w, this.y+4.25/he*this.h, 0.15/wi*this.w, 0.1/he*this.h);
		ctx.fillRect(this.x+1.7/wi*this.w, this.y+4.25/he*this.h, 0.15/wi*this.w, 0.1/he*this.h);
		ctx.fillRect(this.x+1.4/wi*this.w, this.y+4.4/he*this.h, 0.2/wi*this.w, 0.1/he*this.h);
		ctx.fillRect(this.x+1.65/wi*this.w, this.y+4.4/he*this.h, 0.2/wi*this.w, 0.1/he*this.h);
		ctx.fillRect(this.x+1.45/wi*this.w, this.y+4.55/he*this.h, 0.2/wi*this.w, 0.1/he*this.h);
		ctx.fillRect(this.x+1.7/wi*this.w, this.y+4.55/he*this.h, 0.2/wi*this.w, 0.1/he*this.h);
		ctx.fillRect(this.x+1.6/wi*this.w, this.y+4.7/he*this.h, 0.15/wi*this.w, 0.1/he*this.h);
		ctx.fillRect(this.x+1.8/wi*this.w, this.y+4.7/he*this.h, 0.15/wi*this.w, 0.1/he*this.h);

		//hombro 1
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+4/wi*this.w, this.y+3.3/he*this.h, 0.5/wi*this.w, 0, Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//torso1
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.8/wi*this.w, this.y+3/he*this.h); 
		ctx.lineTo(this.x+4.4/wi*this.w, this.y+5.4/he*this.h); 
		ctx.lineTo(this.x+6.0/wi*this.w, this.y+5.4/he*this.h);
		ctx.lineTo(this.x+6.6/wi*this.w, this.y+3/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//torso2
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.4/wi*this.w, this.y+3.3/he*this.h); 
		ctx.lineTo(this.x+4.8/wi*this.w, this.y+5.3/he*this.h);
		ctx.lineTo(this.x+5.6/wi*this.w, this.y+5.3/he*this.h);
		ctx.lineTo(this.x+6.0/wi*this.w, this.y+3.3/he*this.h);		
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//torso3
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.7/wi*this.w, this.y+3.5/he*this.h); 
		ctx.lineTo(this.x+5.0/wi*this.w, this.y+5.1/he*this.h);
		ctx.lineTo(this.x+5.4/wi*this.w, this.y+5.1/he*this.h);
		ctx.lineTo(this.x+5.7/wi*this.w, this.y+3.5/he*this.h);		
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//V1
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+5.0/wi*this.w, this.y+3.6/he*this.h); 
		ctx.lineTo(this.x+5.2/wi*this.w, this.y+4.1/he*this.h); 
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.moveTo(this.x+5.4/wi*this.w, this.y+3.6/he*this.h); 
		ctx.lineTo(this.x+5.2/wi*this.w, this.y+4.1/he*this.h); 
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//brazo 2
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.2/wi*this.w, this.y+4.7/he*this.h); 
		ctx.lineTo(this.x+5.95/wi*this.w, this.y+4.0/he*this.h); 
		ctx.lineTo(this.x+6.2/wi*this.w, this.y+3.0/he*this.h); 
		ctx.lineTo(this.x+6.9/wi*this.w, this.y+3.0/he*this.h);
		ctx.lineTo(this.x+6.3/wi*this.w, this.y+4.5/he*this.h); 
		ctx.lineTo(this.x+4.3/wi*this.w, this.y+5.1/he*this.h); 
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.15/wi*this.w, this.y+4.9/he*this.h); 
		ctx.lineTo(this.x+6.0/wi*this.w, this.y+4.25/he*this.h); 
		ctx.lineTo(this.x+6.6/wi*this.w, this.y+3.0/he*this.h); 
		ctx.lineTo(this.x+6.7/wi*this.w, this.y+3.0/he*this.h);
		ctx.lineTo(this.x+6.2/wi*this.w, this.y+4.3/he*this.h); 
		ctx.lineTo(this.x+4.2/wi*this.w, this.y+5.0/he*this.h); 
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//manos 2
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.1/wi*this.w, this.y+4.75/he*this.h); 
		ctx.lineTo(this.x+4.2/wi*this.w, this.y+5.15/he*this.h); 
		ctx.lineTo(this.x+3.9/wi*this.w, this.y+5.25/he*this.h); 
		ctx.lineTo(this.x+3.8/wi*this.w, this.y+4.75/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		//dedos 2
		ctx.fillStyle = negro;
		ctx.fillRect(this.x+3.4/wi*this.w, this.y+4.7/he*this.h, 0.15/wi*this.w, 0.1/he*this.h);
		ctx.fillRect(this.x+3.6/wi*this.w, this.y+4.7/he*this.h, 0.15/wi*this.w, 0.1/he*this.h);
		ctx.fillRect(this.x+3.3/wi*this.w, this.y+4.85/he*this.h, 0.2/wi*this.w, 0.1/he*this.h);
		ctx.fillRect(this.x+3.55/wi*this.w, this.y+4.85/he*this.h, 0.2/wi*this.w, 0.1/he*this.h);
		ctx.fillRect(this.x+3.35/wi*this.w, this.y+5/he*this.h, 0.2/wi*this.w, 0.1/he*this.h);
		ctx.fillRect(this.x+3.6/wi*this.w, this.y+5/he*this.h, 0.2/wi*this.w, 0.1/he*this.h);
		ctx.fillRect(this.x+3.45/wi*this.w, this.y+5.15/he*this.h, 0.15/wi*this.w, 0.1/he*this.h);
		ctx.fillRect(this.x+3.65/wi*this.w, this.y+5.15/he*this.h, 0.15/wi*this.w, 0.1/he*this.h);

		//codo 2
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+6.1/wi*this.w, this.y+4.3/he*this.h, 0.25/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//hombro2
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+6.5/wi*this.w, this.y+3.3/he*this.h, 0.5/wi*this.w, 0, Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+6.5/wi*this.w, this.y+3.3/he*this.h, 0.3/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//oruga 1
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.15/wi*this.w, this.y+8.2/he*this.h);
		ctx.lineTo(this.x+3.35/wi*this.w, this.y+9.2/he*this.h); 
		ctx.lineTo(this.x+3.5/wi*this.w, this.y+9.6/he*this.h); 
		ctx.lineTo(this.x+3.65/wi*this.w, this.y+9.8/he*this.h);
		ctx.lineTo(this.x+3.8/wi*this.w, this.y+9.9/he*this.h);
		ctx.lineTo(this.x+5.3/wi*this.w, this.y+9.9/he*this.h);
		ctx.lineTo(this.x+5.5/wi*this.w, this.y+9.8/he*this.h);
		ctx.lineTo(this.x+5.6/wi*this.w, this.y+9.7/he*this.h);
		ctx.lineTo(this.x+5.7/wi*this.w, this.y+9.5/he*this.h); 
		ctx.lineTo(this.x+5.75/wi*this.w, this.y+9.4/he*this.h);
		ctx.lineTo(this.x+5.7/wi*this.w, this.y+8.9/he*this.h);
		ctx.lineTo(this.x+4.5/wi*this.w, this.y+7.7/he*this.h);
		ctx.lineTo(this.x+4.2/wi*this.w, this.y+7.5/he*this.h);
		ctx.lineTo(this.x+4.0/wi*this.w, this.y+7.45/he*this.h);
		ctx.lineTo(this.x+3.7/wi*this.w, this.y+7.45/he*this.h);
		ctx.lineTo(this.x+3.4/wi*this.w, this.y+7.55/he*this.h);
		ctx.lineTo(this.x+3.3/wi*this.w, this.y+7.65/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//motor oruga 1
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.35/wi*this.w, this.y+8.2/he*this.h);
		ctx.lineTo(this.x+3.55/wi*this.w, this.y+9.2/he*this.h); 
		ctx.lineTo(this.x+3.7/wi*this.w, this.y+9.6/he*this.h); 
		ctx.lineTo(this.x+3.85/wi*this.w, this.y+9.7/he*this.h);
		ctx.lineTo(this.x+5.3/wi*this.w, this.y+9.7/he*this.h);
		ctx.lineTo(this.x+5.4/wi*this.w, this.y+9.6/he*this.h);
		ctx.lineTo(this.x+5.5/wi*this.w, this.y+9.5/he*this.h); 
		ctx.lineTo(this.x+5.55/wi*this.w, this.y+9.3/he*this.h);
		ctx.lineTo(this.x+5.45/wi*this.w, this.y+8.9/he*this.h);
		ctx.lineTo(this.x+4.95/wi*this.w, this.y+8.4/he*this.h);
		ctx.lineTo(this.x+4.4/wi*this.w, this.y+7.9/he*this.h);
		ctx.lineTo(this.x+4.3/wi*this.w, this.y+7.8/he*this.h);
		ctx.lineTo(this.x+4.2/wi*this.w, this.y+7.7/he*this.h);
		ctx.lineTo(this.x+4.1/wi*this.w, this.y+7.65/he*this.h);
		ctx.lineTo(this.x+3.7/wi*this.w, this.y+7.65/he*this.h);
		ctx.lineTo(this.x+3.55/wi*this.w, this.y+7.75/he*this.h);
		ctx.lineTo(this.x+3.45/wi*this.w, this.y+7.8/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//ruedas 11
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+4.1/wi*this.w, this.y+9.2/he*this.h, 0.5/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+4.1/wi*this.w, this.y+9.2/he*this.h, 0.4/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+3.9/wi*this.w, this.y+9.0/he*this.h, 0.075/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+3.9/wi*this.w, this.y+9.4/he*this.h, 0.075/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+4.3/wi*this.w, this.y+9.0/he*this.h, 0.075/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+4.3/wi*this.w, this.y+9.4/he*this.h, 0.075/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//ruedas 12
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+5.05/wi*this.w, this.y+9.25/he*this.h, 0.45/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+5.05/wi*this.w, this.y+9.25/he*this.h, 0.35/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+4.9/wi*this.w, this.y+9.05/he*this.h, 0.07/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+4.9/wi*this.w, this.y+9.45/he*this.h, 0.07/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+5.2/wi*this.w, this.y+9.05/he*this.h, 0.07/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+5.2/wi*this.w, this.y+9.45/he*this.h, 0.07/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//ruedas 13
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+3.9/wi*this.w, this.y+8.2/he*this.h, 0.5/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+3.9/wi*this.w, this.y+8.2/he*this.h, 0.4/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+3.7/wi*this.w, this.y+8.0/he*this.h, 0.075/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+3.7/wi*this.w, this.y+8.4/he*this.h, 0.075/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+4.1/wi*this.w, this.y+8.0/he*this.h, 0.075/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+4.1/wi*this.w, this.y+8.4/he*this.h, 0.075/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//ruedas 14
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+4.65/wi*this.w, this.y+8.55/he*this.h, 0.3/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+4.65/wi*this.w, this.y+8.55/he*this.h, 0.2/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		
		//union ruedas 1
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.8/wi*this.w, this.y+8.2/he*this.h); 
		ctx.lineTo(this.x+4.0/wi*this.w, this.y+9.3/he*this.h); 
		ctx.lineTo(this.x+5.2/wi*this.w, this.y+9.35/he*this.h); 
		ctx.lineTo(this.x+4.7/wi*this.w, this.y+8.5/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//eje 11
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+5.05/wi*this.w, this.y+9.25/he*this.h, 0.1/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		//eje 12
		ctx.beginPath(); 
		ctx.arc(this.x+4.1/wi*this.w, this.y+9.2/he*this.h, 0.1/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		//eje 13
		ctx.beginPath(); 
		ctx.arc(this.x+3.9/wi*this.w, this.y+8.2/he*this.h, 0.1/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		//eje 14
		ctx.beginPath(); 
		ctx.arc(this.x+4.65/wi*this.w, this.y+8.55/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();


		//pierna superior 1
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.5/wi*this.w, this.y+8/he*this.h); 
		ctx.lineTo(this.x+3.9/wi*this.w, this.y+6.4/he*this.h); 
		ctx.lineTo(this.x+4.8/wi*this.w, this.y+6.4/he*this.h); 
		ctx.lineTo(this.x+4.3/wi*this.w, this.y+8/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.9/wi*this.w, this.y+8/he*this.h); 
		ctx.lineTo(this.x+4.2/wi*this.w, this.y+6.4/he*this.h); 
		ctx.lineTo(this.x+4.4/wi*this.w, this.y+6.4/he*this.h); 
		ctx.lineTo(this.x+4.0/wi*this.w, this.y+8/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//cadera 1
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+4.4/wi*this.w, this.y+6.3/he*this.h, 0.5/wi*this.w, 0, Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+4.4/wi*this.w, this.y+6.3/he*this.h, 0.3/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//rodilla 1
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+3.9/wi*this.w, this.y+8/he*this.h, 0.4/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//cintura
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.45/wi*this.w, this.y+5.45/he*this.h); 
		ctx.lineTo(this.x+4.65/wi*this.w, this.y+6.0/he*this.h); 
		ctx.lineTo(this.x+5.75/wi*this.w, this.y+6.0/he*this.h); 
		ctx.lineTo(this.x+5.95/wi*this.w, this.y+5.45/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill(); 
		//rayas de la cintura
		ctx.fillStyle = negro;
		ctx.fillRect(this.x+4.6/wi*this.w, this.y+5.55/he*this.h, 1.2/wi*this.w, 0.1/he*this.h);
		ctx.fillRect(this.x+4.7/wi*this.w, this.y+5.7/he*this.h, 1.0/wi*this.w, 0.1/he*this.h);
		ctx.fillRect(this.x+4.8/wi*this.w, this.y+5.85/he*this.h, 0.8/wi*this.w, 0.1/he*this.h);

		//pelvis
		ctx.fillStyle = negro;
		ctx.fillRect(this.x+4.3/wi*this.w, this.y+6/he*this.h, 1.3/wi*this.w, 0.6/he*this.h);

		//pierna superior 2
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+5.1/wi*this.w, this.y+8/he*this.h); 
		ctx.lineTo(this.x+5.5/wi*this.w, this.y+6.4/he*this.h); 
		ctx.lineTo(this.x+6.4/wi*this.w, this.y+6.4/he*this.h); 
		ctx.lineTo(this.x+5.9/wi*this.w, this.y+8/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+5.45/wi*this.w, this.y+8/he*this.h); 
		ctx.lineTo(this.x+5.85/wi*this.w, this.y+6.4/he*this.h); 
		ctx.lineTo(this.x+6.05/wi*this.w, this.y+6.4/he*this.h); 
		ctx.lineTo(this.x+5.6/wi*this.w, this.y+8/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//cadera 2
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+6/wi*this.w, this.y+6.3/he*this.h, 0.5/wi*this.w, 0, Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+6/wi*this.w, this.y+6.3/he*this.h, 0.3/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		
		//oruga 2
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.95/wi*this.w, this.y+8.2/he*this.h);
		ctx.lineTo(this.x+5.15/wi*this.w, this.y+9.2/he*this.h); 
		ctx.lineTo(this.x+5.3/wi*this.w, this.y+9.6/he*this.h); 
		ctx.lineTo(this.x+5.45/wi*this.w, this.y+9.8/he*this.h);
		ctx.lineTo(this.x+5.6/wi*this.w, this.y+9.9/he*this.h);
		ctx.lineTo(this.x+7.1/wi*this.w, this.y+9.9/he*this.h);
		ctx.lineTo(this.x+7.3/wi*this.w, this.y+9.8/he*this.h);
		ctx.lineTo(this.x+7.4/wi*this.w, this.y+9.7/he*this.h);
		ctx.lineTo(this.x+7.5/wi*this.w, this.y+9.5/he*this.h); 
		ctx.lineTo(this.x+7.55/wi*this.w, this.y+9.4/he*this.h);
		ctx.lineTo(this.x+7.50/wi*this.w, this.y+8.9/he*this.h);
		ctx.lineTo(this.x+6.3/wi*this.w, this.y+7.7/he*this.h);
		ctx.lineTo(this.x+6.0/wi*this.w, this.y+7.5/he*this.h);
		ctx.lineTo(this.x+5.8/wi*this.w, this.y+7.45/he*this.h);
		ctx.lineTo(this.x+5.5/wi*this.w, this.y+7.45/he*this.h);
		ctx.lineTo(this.x+5.2/wi*this.w, this.y+7.55/he*this.h);
		ctx.lineTo(this.x+5.1/wi*this.w, this.y+7.65/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//motor oruga 2
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.moveTo(this.x+5.15/wi*this.w, this.y+8.2/he*this.h);
		ctx.lineTo(this.x+5.35/wi*this.w, this.y+9.2/he*this.h); 
		ctx.lineTo(this.x+5.5/wi*this.w, this.y+9.6/he*this.h); 
		ctx.lineTo(this.x+5.65/wi*this.w, this.y+9.7/he*this.h);
		ctx.lineTo(this.x+7.1/wi*this.w, this.y+9.7/he*this.h);
		ctx.lineTo(this.x+7.2/wi*this.w, this.y+9.6/he*this.h);
		ctx.lineTo(this.x+7.3/wi*this.w, this.y+9.5/he*this.h); 
		ctx.lineTo(this.x+7.35/wi*this.w, this.y+9.3/he*this.h);
		ctx.lineTo(this.x+7.25/wi*this.w, this.y+8.9/he*this.h);
		ctx.lineTo(this.x+6.75/wi*this.w, this.y+8.4/he*this.h);
		ctx.lineTo(this.x+6.2/wi*this.w, this.y+7.9/he*this.h);
		ctx.lineTo(this.x+6.1/wi*this.w, this.y+7.8/he*this.h);
		ctx.lineTo(this.x+6.0/wi*this.w, this.y+7.7/he*this.h);
		ctx.lineTo(this.x+5.9/wi*this.w, this.y+7.65/he*this.h);
		ctx.lineTo(this.x+5.5/wi*this.w, this.y+7.65/he*this.h);
		ctx.lineTo(this.x+5.35/wi*this.w, this.y+7.75/he*this.h);
		ctx.lineTo(this.x+5.25/wi*this.w, this.y+7.8/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//ruedas 21
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+5.9/wi*this.w, this.y+9.2/he*this.h, 0.5/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+5.9/wi*this.w, this.y+9.2/he*this.h, 0.4/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+5.7/wi*this.w, this.y+9.0/he*this.h, 0.075/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+5.7/wi*this.w, this.y+9.4/he*this.h, 0.075/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+6.1/wi*this.w, this.y+9.0/he*this.h, 0.075/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+6.1/wi*this.w, this.y+9.4/he*this.h, 0.075/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//ruedas 22
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+6.85/wi*this.w, this.y+9.25/he*this.h, 0.45/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+6.85/wi*this.w, this.y+9.25/he*this.h, 0.35/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+6.7/wi*this.w, this.y+9.05/he*this.h, 0.07/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+6.7/wi*this.w, this.y+9.45/he*this.h, 0.07/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+7.0/wi*this.w, this.y+9.05/he*this.h, 0.07/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+7.0/wi*this.w, this.y+9.45/he*this.h, 0.07/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//ruedas 23
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+5.7/wi*this.w, this.y+8.2/he*this.h, 0.5/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+5.7/wi*this.w, this.y+8.2/he*this.h, 0.4/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.arc(this.x+5.5/wi*this.w, this.y+8.0/he*this.h, 0.075/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+5.5/wi*this.w, this.y+8.4/he*this.h, 0.075/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+5.9/wi*this.w, this.y+8.0/he*this.h, 0.075/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+5.9/wi*this.w, this.y+8.4/he*this.h, 0.075/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//ruedas 24
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+6.45/wi*this.w, this.y+8.55/he*this.h, 0.3/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+6.45/wi*this.w, this.y+8.55/he*this.h, 0.2/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		
		//eje 21
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+6.85/wi*this.w, this.y+9.25/he*this.h, 0.1/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		//eje 22
		ctx.beginPath(); 
		ctx.arc(this.x+5.9/wi*this.w, this.y+9.2/he*this.h, 0.1/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		//eje 23
		ctx.beginPath(); 
		ctx.arc(this.x+5.7/wi*this.w, this.y+8.2/he*this.h, 0.1/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		//eje 24
		ctx.beginPath(); 
		ctx.arc(this.x+6.45/wi*this.w, this.y+8.55/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();


	}
}