function Robot8(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.dibujar = function(ctx){

		ctx.lineWidth = 2;


		//cabeza
		ctx.fillStyle = "rgb(200, 200, 200)";
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.6/8.0*this.w, this.y+2.0/8.0*this.h); 
		ctx.lineTo(this.x+4.7/8.0*this.w, this.y+2.9/8.0*this.h); 
		ctx.lineTo(this.x+5.7/8.0*this.w, this.y+2.9/8.0*this.h);
		ctx.lineTo(this.x+5.8/8.0*this.w, this.y+2.0/8.0*this.h);
		ctx.lineTo(this.x+5.6/8.0*this.w, this.y+1.7/8.0*this.h);
		ctx.lineTo(this.x+4.8/8.0*this.w, this.y+1.7/8.0*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.fillRect(this.x+4.9/8.0*this.w, this.y+1.7/8*this.h, 0.05/8.0*this.w, 0.1/8.0*this.h);
		ctx.fillRect(this.x+5.0/8.0*this.w, this.y+1.7/8*this.h, 0.05/8.0*this.w, 0.1/8.0*this.h);
		ctx.fillRect(this.x+5.1/8.0*this.w, this.y+1.7/8*this.h, 0.05/8.0*this.w, 0.1/8.0*this.h);
		ctx.fillRect(this.x+5.2/8.0*this.w, this.y+1.7/8*this.h, 0.05/8.0*this.w, 0.1/8.0*this.h);
		ctx.fillRect(this.x+5.3/8.0*this.w, this.y+1.7/8*this.h, 0.05/8.0*this.w, 0.1/8.0*this.h);
		ctx.fillRect(this.x+5.4/8.0*this.w, this.y+1.7/8*this.h, 0.05/8.0*this.w, 0.1/8.0*this.h);

		//ojos
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.fillRect(this.x+4.7/8.0*this.w, this.y+2.1/8*this.h, 0.8/8.0*this.w, 0.4/8.0*this.h);

		//ojo 1
		ctx.fillStyle = "rgb(200, 200, 200)";
		ctx.beginPath(); 
		ctx.arc(this.x+4.9/8.0*this.w, this.y+2.3/8.0*this.h, 0.1/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		//ojo 2
		ctx.beginPath(); 
		ctx.arc(this.x+5.3/8.0*this.w, this.y+2.3/8.0*this.h, 0.1/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		//boca
		ctx.fillRect(this.x+4.9/8.0*this.w, this.y+2.5/8*this.h, 0.05/8.0*this.w, 0.2/8.0*this.h);
		ctx.fillRect(this.x+5.0/8.0*this.w, this.y+2.5/8*this.h, 0.05/8.0*this.w, 0.2/8.0*this.h);
		ctx.fillRect(this.x+5.1/8.0*this.w, this.y+2.5/8*this.h, 0.05/8.0*this.w, 0.2/8.0*this.h);
		ctx.fillRect(this.x+5.2/8.0*this.w, this.y+2.5/8*this.h, 0.05/8.0*this.w, 0.2/8.0*this.h);
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.fillRect(this.x+4.85/8.0*this.w, this.y+2.6/8*this.h, 0.5/8.0*this.w, 0.1/8.0*this.h);
		
		//brazo 1
		ctx.fillStyle = "rgb(200, 200, 200)";
		ctx.beginPath(); 
		ctx.moveTo(this.x+2.3/8.0*this.w, this.y+4.3/8.0*this.h); 
		ctx.lineTo(this.x+3.85/8.0*this.w, this.y+4.0/8.0*this.h); 
		ctx.lineTo(this.x+3.6/8.0*this.w, this.y+3.0/8.0*this.h); 
		ctx.lineTo(this.x+4.2/8.0*this.w, this.y+3.0/8.0*this.h);
		ctx.lineTo(this.x+4.6/8.0*this.w, this.y+4.5/8.0*this.h); 
		ctx.lineTo(this.x+2.4/8.0*this.w, this.y+4.7/8.0*this.h); 
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		//codo 1
		ctx.fillStyle = "rgb(200, 200, 200)";
		ctx.beginPath(); 
		ctx.arc(this.x+4/8.0*this.w, this.y+4.3/8.0*this.h, 0.30/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		ctx.fillStyle = "rgb(200, 200, 200)";
		ctx.beginPath(); 
		ctx.arc(this.x+4/8.0*this.w, this.y+4.3/8.0*this.h, 0.15/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//manos 1
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.beginPath(); 
		ctx.moveTo(this.x+2.2/8.0*this.w, this.y+4.3/8.0*this.h); 
		ctx.lineTo(this.x+2.3/8.0*this.w, this.y+4.7/8.0*this.h); 
		ctx.lineTo(this.x+2.0/8.0*this.w, this.y+4.8/8.0*this.h); 
		ctx.lineTo(this.x+1.9/8.0*this.w, this.y+4.3/8.0*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.fillRect(this.x+1.5/8.0*this.w, this.y+4.3/8*this.h, 0.5/8.0*this.w, 0.15/8.0*this.h);
		ctx.fillRect(this.x+1.6/8.0*this.w, this.y+4.7/8*this.h, 0.5/8.0*this.w, 0.15/8.0*this.h);


		//hombro 1
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.beginPath(); 
		ctx.arc(this.x+4/8.0*this.w, this.y+3.3/8.0*this.h, 0.5/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//espalda
		ctx.fillRect(this.x+3.8/8.0*this.w, this.y+2.8/8*this.h, 2.8/8.0*this.w, 1/8.0*this.h);

		//torso1
		ctx.beginPath(); 
		ctx.moveTo(this.x+4/8.0*this.w, this.y+3/8.0*this.h); 
		ctx.lineTo(this.x+4.7/8.0*this.w, this.y+5.4/8.0*this.h); 
		ctx.lineTo(this.x+5.7/8.0*this.w, this.y+5.4/8.0*this.h);
		ctx.lineTo(this.x+6.4/8.0*this.w, this.y+3/8.0*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//torso2
		ctx.fillStyle = "rgb(200, 200, 200)";
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.4/8.0*this.w, this.y+3.3/8.0*this.h); 
		ctx.lineTo(this.x+4.8/8.0*this.w, this.y+4.5/8.0*this.h); 
		ctx.lineTo(this.x+4.8/8.0*this.w, this.y+5.4/8.0*this.h);
		ctx.lineTo(this.x+5.6/8.0*this.w, this.y+5.4/8.0*this.h);
		ctx.lineTo(this.x+5.6/8.0*this.w, this.y+4.5/8.0*this.h);
		ctx.lineTo(this.x+6/8.0*this.w, this.y+3.3/8.0*this.h);		
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//V1
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.beginPath(); 
		ctx.moveTo(this.x+5/8.0*this.w, this.y+3.5/8*this.h); 
		ctx.lineTo(this.x+5.2/8.0*this.w, this.y+4/8*this.h); 
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.beginPath(); 
		ctx.moveTo(this.x+5.4/8.0*this.w, this.y+3.5/8*this.h); 
		ctx.lineTo(this.x+5.2/8.0*this.w, this.y+4/8*this.h); 
		ctx.closePath(); 
		ctx.stroke(); 


		//arma 2
		ctx.fillStyle = "rgb(100, 100, 100)";
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.3/8.0*this.w, this.y+2.1/8.0*this.h); 
		ctx.lineTo(this.x+4.3/8.0*this.w, this.y+2.1/8.0*this.h); 
		ctx.lineTo(this.x+4.4/8.0*this.w, this.y+2.5/8.0*this.h); 
		ctx.lineTo(this.x+3.4/8.0*this.w, this.y+2.5/8.0*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.fillRect(this.x+3.9/8.0*this.w, this.y+2.5/8*this.h, 0.3/8.0*this.w, 0.3/8.0*this.h);
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.fillRect(this.x+3.1/8.0*this.w, this.y+2.2/8*this.h, 1/8.0*this.w, 0.2/8.0*this.h); 

		//brazo 2
		ctx.fillStyle = "rgb(200, 200, 200)";
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.2/8.0*this.w, this.y+4.3/8.0*this.h); 
		ctx.lineTo(this.x+5.95/8.0*this.w, this.y+4.0/8.0*this.h); 
		ctx.lineTo(this.x+6.2/8.0*this.w, this.y+3.0/8.0*this.h); 
		ctx.lineTo(this.x+6.9/8.0*this.w, this.y+3.0/8.0*this.h);
		ctx.lineTo(this.x+6.3/8.0*this.w, this.y+4.5/8.0*this.h); 
		ctx.lineTo(this.x+4.3/8.0*this.w, this.y+4.7/8.0*this.h); 
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();



		//manos 2
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.2/8.0*this.w, this.y+4.3/8.0*this.h); 
		ctx.lineTo(this.x+4.3/8.0*this.w, this.y+4.7/8.0*this.h); 
		ctx.lineTo(this.x+4.0/8.0*this.w, this.y+4.8/8.0*this.h); 
		ctx.lineTo(this.x+3.9/8.0*this.w, this.y+4.3/8.0*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.fillRect(this.x+3.4/8.0*this.w, this.y+4.3/8*this.h, 0.5/8.0*this.w, 0.15/8.0*this.h);
		ctx.fillRect(this.x+3.5/8.0*this.w, this.y+4.7/8*this.h, 0.5/8.0*this.w, 0.15/8.0*this.h);
	

		//codo 2
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.beginPath(); 
		ctx.arc(this.x+6.1/8.0*this.w, this.y+4.3/8.0*this.h, 0.3/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		ctx.fillStyle = "rgb(200, 200, 200)";
		ctx.beginPath(); 
		ctx.arc(this.x+6.1/8.0*this.w, this.y+4.3/8.0*this.h, 0.15/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//hombro2
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.beginPath(); 
		ctx.arc(this.x+6.5/8.0*this.w, this.y+3.3/8.0*this.h, 0.5/8.0*this.w, 0, 2*Math.PI, false);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		ctx.fillStyle = "rgb(200, 200, 200)";
		ctx.beginPath(); 
		ctx.arc(this.x+6.5/8.0*this.w, this.y+3.3/8.0*this.h, 0.3/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//oruga 1
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.8/8.0*this.w, this.y+7.5/8.0*this.h);
		ctx.lineTo(this.x+3.4/8.0*this.w, this.y+7.8/8.0*this.h); 
		ctx.lineTo(this.x+3.2/8.0*this.w, this.y+8.1/8.0*this.h); 
		ctx.lineTo(this.x+3.6/8.0*this.w, this.y+9.6/8.0*this.h);
		ctx.lineTo(this.x+4.0/8.0*this.w, this.y+9.9/8.0*this.h);
		ctx.lineTo(this.x+5.7/8.0*this.w, this.y+9.9/8.0*this.h);
		ctx.lineTo(this.x+6.0/8.0*this.w, this.y+9.5/8.0*this.h); 
		ctx.lineTo(this.x+5.6/8.0*this.w, this.y+8.9/8.0*this.h);
		ctx.lineTo(this.x+4.5/8.0*this.w, this.y+7.7/8.0*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		//motor oruga 1
		ctx.fillStyle = "rgb(100, 100, 100)";
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.8/8.0*this.w, this.y+7.7/8.0*this.h);
		ctx.lineTo(this.x+3.6/8.0*this.w, this.y+7.8/8.0*this.h); 
		ctx.lineTo(this.x+3.4/8.0*this.w, this.y+8.1/8.0*this.h); 
		ctx.lineTo(this.x+3.8/8.0*this.w, this.y+9.5/8.0*this.h);
		ctx.lineTo(this.x+4.0/8.0*this.w, this.y+9.7/8.0*this.h);
		ctx.lineTo(this.x+5.7/8.0*this.w, this.y+9.7/8.0*this.h);
		ctx.lineTo(this.x+5.8/8.0*this.w, this.y+9.5/8.0*this.h); 
		ctx.lineTo(this.x+5.4/8.0*this.w, this.y+8.9/8.0*this.h);
		ctx.lineTo(this.x+4.3/8.0*this.w, this.y+7.8/8.0*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//pierna superior 1
		ctx.fillStyle = "rgb(200, 200, 200)";
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.5/8.0*this.w, this.y+8/8.0*this.h); 
		ctx.lineTo(this.x+3.9/8.0*this.w, this.y+6.4/8.0*this.h); 
		ctx.lineTo(this.x+4.8/8.0*this.w, this.y+6.4/8.0*this.h); 
		ctx.lineTo(this.x+4.3/8.0*this.w, this.y+8/8.0*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//cadera 1
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.beginPath(); 
		ctx.arc(this.x+4.4/8.0*this.w, this.y+6.3/8.0*this.h, 0.5/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		ctx.fillStyle = "rgb(200, 200, 200)";
		ctx.beginPath(); 
		ctx.arc(this.x+4.4/8.0*this.w, this.y+6.3/8.0*this.h, 0.3/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//cintura
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.fillRect(this.x+4.5/8.0*this.w, this.y+5.4/8*this.h, 1.5/8.0*this.w, 0.6/8.0*this.h);
		ctx.fillStyle = "rgb(255, 255, 255)";
		ctx.fillRect(this.x+4.7/8.0*this.w, this.y+5.5/8*this.h, 0.05/8.0*this.w, 0.5/8.0*this.h);
		ctx.fillRect(this.x+4.8/8.0*this.w, this.y+5.5/8*this.h, 0.05/8.0*this.w, 0.5/8.0*this.h);
		ctx.fillRect(this.x+4.9/8.0*this.w, this.y+5.5/8*this.h, 0.05/8.0*this.w, 0.5/8.0*this.h);
		ctx.fillRect(this.x+5.0/8.0*this.w, this.y+5.5/8*this.h, 0.05/8.0*this.w, 0.5/8.0*this.h);
		ctx.fillRect(this.x+5.1/8.0*this.w, this.y+5.5/8*this.h, 0.05/8.0*this.w, 0.5/8.0*this.h);
		ctx.fillRect(this.x+5.2/8.0*this.w, this.y+5.5/8*this.h, 0.05/8.0*this.w, 0.5/8.0*this.h);
		ctx.fillRect(this.x+5.3/8.0*this.w, this.y+5.5/8*this.h, 0.05/8.0*this.w, 0.5/8.0*this.h);
		ctx.fillRect(this.x+5.4/8.0*this.w, this.y+5.5/8*this.h, 0.05/8.0*this.w, 0.5/8.0*this.h);
		ctx.fillRect(this.x+5.5/8.0*this.w, this.y+5.5/8*this.h, 0.05/8.0*this.w, 0.5/8.0*this.h);
		ctx.fillRect(this.x+5.6/8.0*this.w, this.y+5.5/8*this.h, 0.05/8.0*this.w, 0.5/8.0*this.h);

		//pelvis
		ctx.fillStyle = "rgb(200, 200, 200)";
		ctx.fillRect(this.x+4.3/8.0*this.w, this.y+6/8*this.h, 1.3/8.0*this.w, 0.6/8.0*this.h);

		//pierna superior 2
		ctx.beginPath(); 
		ctx.moveTo(this.x+5.1/8.0*this.w, this.y+8/8.0*this.h); 
		ctx.lineTo(this.x+5.5/8.0*this.w, this.y+6.4/8.0*this.h); 
		ctx.lineTo(this.x+6.4/8.0*this.w, this.y+6.4/8.0*this.h); 
		ctx.lineTo(this.x+5.9/8.0*this.w, this.y+8/8.0*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//cadera 2
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.beginPath(); 
		ctx.arc(this.x+6/8.0*this.w, this.y+6.3/8.0*this.h, 0.5/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		ctx.fillStyle = "rgb(200, 200, 200)";
		ctx.beginPath(); 
		ctx.arc(this.x+6/8.0*this.w, this.y+6.3/8.0*this.h, 0.3/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		
		//rodilla 1
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.beginPath(); 
		ctx.arc(this.x+3.9/8.0*this.w, this.y+8/8.0*this.h, 0.4/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		ctx.fillStyle = "rgb(200, 200, 200)";
		ctx.beginPath(); 
		ctx.arc(this.x+3.9/8.0*this.w, this.y+8/8.0*this.h, 0.2/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//rodilla 2
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.beginPath(); 
		ctx.arc(this.x+5.5/8.0*this.w, this.y+8/8.0*this.h, 0.4/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		ctx.fillStyle = "rgb(200, 200, 200)";
		ctx.beginPath(); 
		ctx.arc(this.x+5.5/8.0*this.w, this.y+8/8.0*this.h, 0.2/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();


		//oruga 2
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.beginPath(); 
		ctx.moveTo(this.x+5.5/8.0*this.w, this.y+7.5/8.0*this.h);
		ctx.lineTo(this.x+5.1/8.0*this.w, this.y+7.8/8.0*this.h); 
		ctx.lineTo(this.x+4.9/8.0*this.w, this.y+8.1/8.0*this.h); 
		ctx.lineTo(this.x+5.3/8.0*this.w, this.y+9.6/8.0*this.h);
		ctx.lineTo(this.x+5.7/8.0*this.w, this.y+9.9/8.0*this.h);
		ctx.lineTo(this.x+7.4/8.0*this.w, this.y+9.9/8.0*this.h);
		ctx.lineTo(this.x+7.7/8.0*this.w, this.y+9.5/8.0*this.h); 
		ctx.lineTo(this.x+7.3/8.0*this.w, this.y+8.9/8.0*this.h);
		ctx.lineTo(this.x+6.2/8.0*this.w, this.y+7.7/8.0*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		//motor oruga 2
		ctx.fillStyle = "rgb(100, 100, 100)";
		ctx.beginPath(); 
		ctx.moveTo(this.x+5.5/8.0*this.w, this.y+7.7/8.0*this.h);
		ctx.lineTo(this.x+5.3/8.0*this.w, this.y+7.8/8.0*this.h); 
		ctx.lineTo(this.x+5.1/8.0*this.w, this.y+8.1/8.0*this.h); 
		ctx.lineTo(this.x+5.5/8.0*this.w, this.y+9.5/8.0*this.h);
		ctx.lineTo(this.x+5.7/8.0*this.w, this.y+9.7/8.0*this.h);
		ctx.lineTo(this.x+7.4/8.0*this.w, this.y+9.7/8.0*this.h);
		ctx.lineTo(this.x+7.5/8.0*this.w, this.y+9.5/8.0*this.h); 
		ctx.lineTo(this.x+7.1/8.0*this.w, this.y+8.9/8.0*this.h);
		ctx.lineTo(this.x+6.0/8.0*this.w, this.y+7.8/8.0*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//ruedas 1
		ctx.fillStyle = "rgb(200, 200, 200)";
		ctx.beginPath(); 
		ctx.arc(this.x+5.9/8.0*this.w, this.y+9.2/8.0*this.h, 0.5/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.beginPath(); 
		ctx.arc(this.x+5.9/8.0*this.w, this.y+9.2/8.0*this.h, 0.2/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//ruedas 2
		ctx.fillStyle = "rgb(200, 200, 200)";
		ctx.beginPath(); 
		ctx.arc(this.x+5.6/8.0*this.w, this.y+8.2/8.0*this.h, 0.5/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.beginPath(); 
		ctx.arc(this.x+5.6/8.0*this.w, this.y+8.2/8.0*this.h, 0.2/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//ruedas 3
		ctx.fillStyle = "rgb(200, 200, 200)";
		ctx.beginPath(); 
		ctx.arc(this.x+6.9/8.0*this.w, this.y+9.3/8.0*this.h, 0.4/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.beginPath(); 
		ctx.arc(this.x+6.9/8.0*this.w, this.y+9.3/8.0*this.h, 0.2/8.0*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

	}
}