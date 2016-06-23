function RobotV1_2(x, y, w, h, dx, dy){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.muerto=false;
	this.velocidad = 9;
	this.dirX = dx || -1;
	this.dirY = dy || 0;
	this.energia=100;
	this.arma = new ArmaEstandar(this.x*1.03,this.y*0.95,this.w*0.4,this.h*0.6);

	this.disparar = function(nivel){
		this.arma.disparar(nivel);
	};
	this.mover = function(){
		if(dirX == 0 && dirY == 0) return;
		if(dirX == 1){
			this.x += this.velocidad;
			this.arma.mover();
		}
		else if(dirX == -1){
			this.x -= this.velocidad;
			this.arma.mover();
		}

		if(dirY == 1){
			this.y += this.velocidad;
			this.arma.mover();
		}
		else if(dirY == -1){
			this.y -= this.velocidad;
			this.arma.mover();
		}
	};
	this.moverIzquierda = function(){
		this.dirX=-1;
		this.x -= this.velocidad;
		this.arma.moverIzquierda(this.velocidad);	
	};
	this.moverDerecha = function(limite){
		if((this.x + this.w) <= limite){
			this.dirX=1;
			this.x += this.velocidad;
			this.arma.moverDerecha(this.velocidad);	
		}
	};	
	this.barraDeVida = function(ctx){
		var porcentajeEnergiaJugador = this.energia/100.0;
		ctx.save();
		ctx.fillStyle="red";
		ctx.fillRect(this.w*3.5, this.h*0.15, this.w, this.h*0.11);
		ctx.fillStyle="blue";
		ctx.fillRect(this.w*3.5, this.h*0.15, this.w*porcentajeEnergiaJugador, this.h*0.11);
		ctx.strokeStyle="#0f0";
		ctx.lineWidth = 2;
		ctx.strokeRect(this.w*3.5, this.h*0.15, this.w, this.h*0.11);
		ctx.restore();
	};		
	this.daños = function(dañoEnemigo){
		this.energia -= dañoEnemigo;
		if(this.energia<=0){
			this.energia=0;
			this.muerto=true;
		}
	};
	this.dibujar = function(ctx){
		var wi = 8.0;
		var he = 8.0;
		var negro = "rgb(0, 0, 0)";
		var gris1 = "rgb(100, 100, 100)";
		var gris2 = "rgb(200, 200, 200)";
		var blanco = "rgb(255, 255, 255)";

		ctx.lineWidth = 2;
		ctx.strokeStyle = negro;
		ctx.stroke();
		//cabeza
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+5.2/wi*this.w, this.y+1.5/he*this.h, 0.7/wi*this.w, 0, Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		
		//ojos
		ctx.fillStyle = negro;
		ctx.fillRect(this.x+4.65/wi*this.w, this.y+1.1/he*this.h, 1.0/wi*this.w, 0.3/he*this.h);

		ctx.fillStyle = "red";
		ctx.fillRect(this.x+4.85/wi*this.w, this.y+1.2/he*this.h, 0.6/wi*this.w, 0.1/he*this.h);

		//brazo 1
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+2.25/wi*this.w, this.y+3.2/he*this.h); 
		ctx.lineTo(this.x+3.8/wi*this.w, this.y+2.9/he*this.h); 
		ctx.lineTo(this.x+3.9/wi*this.w, this.y+2.2/he*this.h); 
		ctx.lineTo(this.x+4.1/wi*this.w, this.y+2.2/he*this.h);
		ctx.lineTo(this.x+4.0/wi*this.w, this.y+3.1/he*this.h); 
		ctx.lineTo(this.x+2.25/wi*this.w, this.y+3.35/he*this.h); 
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.beginPath(); 
		ctx.moveTo(this.x+2.3/wi*this.w, this.y+3.5/he*this.h); 
		ctx.lineTo(this.x+4.2/wi*this.w, this.y+3.25/he*this.h); 
		ctx.lineTo(this.x+4.2/wi*this.w, this.y+2.4/he*this.h); 
		ctx.lineTo(this.x+4.3/wi*this.w, this.y+2.4/he*this.h);
		ctx.lineTo(this.x+4.4/wi*this.w, this.y+3.4/he*this.h); 
		ctx.lineTo(this.x+2.3/wi*this.w, this.y+3.6/he*this.h); 
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();		

		//codo 1
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+4/wi*this.w, this.y+3.2/he*this.h, 0.30/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+4/wi*this.w, this.y+3.2/he*this.h, 0.15/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//manos 1
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+2.3/wi*this.w, this.y+3.2/he*this.h); 
		ctx.lineTo(this.x+2.4/wi*this.w, this.y+3.6/he*this.h); 
		ctx.lineTo(this.x+2.1/wi*this.w, this.y+3.8/he*this.h); 
		ctx.lineTo(this.x+1.9/wi*this.w, this.y+3.1/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.fillRect(this.x+1.5/wi*this.w, this.y+3.1/he*this.h, 0.5/wi*this.w, 0.15/he*this.h);
		ctx.fillRect(this.x+1.6/wi*this.w, this.y+3.65/he*this.h, 0.5/wi*this.w, 0.15/he*this.h);


		//hombro 1
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+4.3/wi*this.w, this.y+2.2/he*this.h, 0.4/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//pierna 
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+6.8/wi*this.w, this.y+4.7/he*this.h); 
		ctx.lineTo(this.x+5.9/wi*this.w, this.y+3.9/he*this.h); 
		ctx.lineTo(this.x+6.0/wi*this.w, this.y+3.8/he*this.h); 
		ctx.lineTo(this.x+6.9/wi*this.w, this.y+4.6/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.beginPath(); 
		ctx.moveTo(this.x+6.5/wi*this.w, this.y+4.8/he*this.h); 
		ctx.lineTo(this.x+5.6/wi*this.w, this.y+4.0/he*this.h); 
		ctx.lineTo(this.x+5.7/wi*this.w, this.y+3.9/he*this.h); 
		ctx.lineTo(this.x+6.6/wi*this.w, this.y+4.7/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		//pierna inferior 
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+5.3/wi*this.w, this.y+5.7/he*this.h); 
		ctx.lineTo(this.x+6.7/wi*this.w, this.y+4.5/he*this.h); 
		ctx.lineTo(this.x+6.8/wi*this.w, this.y+4.6/he*this.h); 
		ctx.lineTo(this.x+5.7/wi*this.w, this.y+5.6/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.beginPath(); 
		ctx.moveTo(this.x+5.6/wi*this.w, this.y+5.9/he*this.h); 
		ctx.lineTo(this.x+6.9/wi*this.w, this.y+4.7/he*this.h); 
		ctx.lineTo(this.x+7.0/wi*this.w, this.y+4.8/he*this.h); 
		ctx.lineTo(this.x+6.0/wi*this.w, this.y+5.8/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//rodilla 
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+6.7/wi*this.w, this.y+4.8/he*this.h, 0.3/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+6.7/wi*this.w, this.y+4.8/he*this.h, 0.1/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		//eje cintura
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+6.0/wi*this.w, this.y+4.0/he*this.h, 0.4/wi*this.w, 0, 2*Math.PI, false);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+6.0/wi*this.w, this.y+4.0/he*this.h, 0.2/wi*this.w, 0, 2*Math.PI, false);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();


		//torso1
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.3/wi*this.w, this.y+1.5/he*this.h); 
		ctx.lineTo(this.x+4.3/wi*this.w, this.y+3.6/he*this.h); 
		ctx.lineTo(this.x+4.7/wi*this.w, this.y+4.3/he*this.h); 
		ctx.lineTo(this.x+5.7/wi*this.w, this.y+4.3/he*this.h);
		ctx.lineTo(this.x+6.1/wi*this.w, this.y+3.6/he*this.h);
		ctx.lineTo(this.x+6.1/wi*this.w, this.y+1.5/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+4.4/wi*this.w, this.y+1.6/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+4.7/wi*this.w, this.y+1.6/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+5.0/wi*this.w, this.y+1.6/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+5.3/wi*this.w, this.y+1.6/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+5.6/wi*this.w, this.y+1.6/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+5.9/wi*this.w, this.y+1.6/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+4.9/wi*this.w, this.y+4.2/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+5.2/wi*this.w, this.y+4.2/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+5.5/wi*this.w, this.y+4.2/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//logo V
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.6/wi*this.w, this.y+1.9/he*this.h); 
		ctx.lineTo(this.x+5.8/wi*this.w, this.y+1.9/he*this.h); 
		ctx.lineTo(this.x+5.7/wi*this.w, this.y+3.4/he*this.h);
		ctx.lineTo(this.x+4.6/wi*this.w, this.y+3.4/he*this.h);		
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.7/wi*this.w, this.y+2.1/he*this.h); 
		ctx.lineTo(this.x+5.2/wi*this.w, this.y+3.2/he*this.h); 
		ctx.lineTo(this.x+5.7/wi*this.w, this.y+2.1/he*this.h);		
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.fillStyle = blanco;
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.9/wi*this.w, this.y+2.2/he*this.h); 
		ctx.lineTo(this.x+5.2/wi*this.w, this.y+2.9/he*this.h); 
		ctx.lineTo(this.x+5.5/wi*this.w, this.y+2.2/he*this.h);		
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+5.1/wi*this.w, this.y+2.2/he*this.h); 
		ctx.lineTo(this.x+5.2/wi*this.w, this.y+2.5/he*this.h); 
		ctx.lineTo(this.x+5.3/wi*this.w, this.y+2.2/he*this.h);		
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();


		//brazo 2
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.7/wi*this.w, this.y+3.2/he*this.h); 
		ctx.lineTo(this.x+5.45/wi*this.w, this.y+2.9/he*this.h); 
		ctx.lineTo(this.x+5.9/wi*this.w, this.y+1.9/he*this.h); 
		ctx.lineTo(this.x+6.05/wi*this.w, this.y+1.9/he*this.h);
		ctx.lineTo(this.x+5.55/wi*this.w, this.y+3.1/he*this.h); 
		ctx.lineTo(this.x+3.7/wi*this.w, this.y+3.35/he*this.h); 
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.8/wi*this.w, this.y+3.45/he*this.h); 
		ctx.lineTo(this.x+5.6/wi*this.w, this.y+3.25/he*this.h); 
		ctx.lineTo(this.x+6.4/wi*this.w, this.y+1.9/he*this.h); 
		ctx.lineTo(this.x+6.6/wi*this.w, this.y+2.05/he*this.h);
		ctx.lineTo(this.x+5.8/wi*this.w, this.y+3.4/he*this.h); 
		ctx.lineTo(this.x+3.8/wi*this.w, this.y+3.6/he*this.h); 
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//manos 2
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.7/wi*this.w, this.y+3.2/he*this.h); 
		ctx.lineTo(this.x+3.8/wi*this.w, this.y+3.6/he*this.h); 
		ctx.lineTo(this.x+3.5/wi*this.w, this.y+3.8/he*this.h); 
		ctx.lineTo(this.x+3.3/wi*this.w, this.y+3.1/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.fillRect(this.x+2.9/wi*this.w, this.y+3.1/he*this.h, 0.5/wi*this.w, 0.15/he*this.h);
		ctx.fillRect(this.x+3.0/wi*this.w, this.y+3.65/he*this.h, 0.5/wi*this.w, 0.15/he*this.h);
	

		//codo 2
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+5.6/wi*this.w, this.y+3.2/he*this.h, 0.3/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+5.6/wi*this.w, this.y+3.2/he*this.h, 0.15/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//hombro2
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+6.2/wi*this.w, this.y+2.2/he*this.h, 0.4/wi*this.w, 0, 2*Math.PI, false);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+6.2/wi*this.w, this.y+2.2/he*this.h, 0.2/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//ruedas 1
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+3.9/wi*this.w, this.y+7.15/he*this.h, 0.8/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+3.9/wi*this.w, this.y+7.15/he*this.h, 0.6/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+3.9/wi*this.w, this.y+7.15/he*this.h, 0.15/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//soporte rueda 3
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.moveTo(this.x+7.2/wi*this.w, this.y+7.2/he*this.h); 
		ctx.lineTo(this.x+7.2/wi*this.w, this.y+6.9/he*this.h); 
		ctx.lineTo(this.x+6.7/wi*this.w, this.y+6.8/he*this.h); 
		ctx.lineTo(this.x+6.7/wi*this.w, this.y+6.6/he*this.h);
		ctx.lineTo(this.x+7.4/wi*this.w, this.y+6.9/he*this.h);
		ctx.lineTo(this.x+7.4/wi*this.w, this.y+7.2/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//motor lado 1
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.7/wi*this.w, this.y+6.1/he*this.h); 
		ctx.lineTo(this.x+3.5/wi*this.w, this.y+6.5/he*this.h); 
		ctx.lineTo(this.x+3.5/wi*this.w, this.y+7.0/he*this.h); 
		ctx.lineTo(this.x+5.4/wi*this.w, this.y+7.0/he*this.h); 
		ctx.lineTo(this.x+5.4/wi*this.w, this.y+6.5/he*this.h);
		ctx.lineTo(this.x+4.7/wi*this.w, this.y+6.1/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//motor medio
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.moveTo(this.x+3.8/wi*this.w, this.y+6.3/he*this.h); 
		ctx.lineTo(this.x+3.7/wi*this.w, this.y+6.3/he*this.h); 
		ctx.lineTo(this.x+3.7/wi*this.w, this.y+6.9/he*this.h); 
		ctx.lineTo(this.x+5.5/wi*this.w, this.y+6.9/he*this.h); 
		ctx.lineTo(this.x+5.5/wi*this.w, this.y+6.5/he*this.h);
		ctx.lineTo(this.x+4.8/wi*this.w, this.y+6.3/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		//remaches
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+3.9/wi*this.w, this.y+6.4/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+4.2/wi*this.w, this.y+6.4/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+4.5/wi*this.w, this.y+6.4/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+4.8/wi*this.w, this.y+6.4/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+3.8/wi*this.w, this.y+6.8/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+4.1/wi*this.w, this.y+6.8/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+4.4/wi*this.w, this.y+6.8/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.beginPath(); 
		ctx.arc(this.x+4.7/wi*this.w, this.y+6.8/he*this.h, 0.05/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//motor lado 2
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+5.0/wi*this.w, this.y+6.1/he*this.h); 
		ctx.lineTo(this.x+4.8/wi*this.w, this.y+6.5/he*this.h); 
		ctx.lineTo(this.x+4.8/wi*this.w, this.y+7.0/he*this.h); 
		ctx.lineTo(this.x+6.7/wi*this.w, this.y+7.0/he*this.h); 
		ctx.lineTo(this.x+6.7/wi*this.w, this.y+6.5/he*this.h);
		ctx.lineTo(this.x+6.0/wi*this.w, this.y+6.1/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();
		ctx.fillStyle = gris1;
		ctx.beginPath(); 
		ctx.moveTo(this.x+5.0/wi*this.w, this.y+6.1/he*this.h); 
		ctx.lineTo(this.x+5.0/wi*this.w, this.y+6.2/he*this.h); 
		ctx.lineTo(this.x+6.0/wi*this.w, this.y+6.2/he*this.h); 
		ctx.lineTo(this.x+6.6/wi*this.w, this.y+6.5/he*this.h); 
		ctx.lineTo(this.x+6.6/wi*this.w, this.y+6.4/he*this.h);
		ctx.lineTo(this.x+6.0/wi*this.w, this.y+6.1/he*this.h);
		ctx.closePath(); 
		ctx.stroke();
		ctx.fill();

		//union cuerpo 
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+5.5/wi*this.w, this.y+6.1/he*this.h, 0.5/wi*this.w, 0, Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//eje
		ctx.fillStyle = negro;
		ctx.fillRect(this.x+4.0/wi*this.w, this.y+7.0/he*this.h, 1.5/wi*this.w, 0.3/he*this.h);

		//ruedas 2
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+5.7/wi*this.w, this.y+7.15/he*this.h, 0.8/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+5.7/wi*this.w, this.y+7.15/he*this.h, 0.6/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+5.7/wi*this.w, this.y+7.15/he*this.h, 0.5/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		ctx.fillStyle = gris2;
		ctx.fillRect(this.x+5.2/wi*this.w, this.y+7.1/he*this.h, 1.0/wi*this.w, 0.1/he*this.h);
		ctx.fillRect(this.x+5.65/wi*this.w, this.y+6.6/he*this.h, 0.1/wi*this.w, 1.1/he*this.h);
		ctx.beginPath(); 
		ctx.arc(this.x+5.7/wi*this.w, this.y+7.15/he*this.h, 0.15/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();

		//ruedas 3
		ctx.fillStyle = negro;
		ctx.beginPath(); 
		ctx.arc(this.x+7.3/wi*this.w, this.y+7.5/he*this.h, 0.45/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();
		ctx.fillStyle = gris2;
		ctx.beginPath(); 
		ctx.arc(this.x+7.3/wi*this.w, this.y+7.5/he*this.h, 0.15/wi*this.w, 0, 2*Math.PI, true);
		ctx.closePath(); 
		ctx.stroke(); 
		ctx.fill();


	
	}
}