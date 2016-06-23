function ArmaMetralleta(x, y ,w, h, dx, dy){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.velocidad = 0;
	this.dirX = dx || -1;
	this.dirY = dy || 0;
	this.dañoArmaEnemigo = 3;
	this.disparar = function(nivel){
		nivel.disparosEnemigos.push(new BalaMetralla(this.x*1.1, this.y*1.01, this.w*0.4, this.h*0.8,1));
		nivel.disparosEnemigos.push(new BalaMetralla(this.x*1.1, this.y*1.03, this.w*0.4, this.h*0.8,1));
		nivel.disparosEnemigos.push(new BalaMetralla(this.x*1.1, this.y*1.05, this.w*0.4, this.h*0.8,1));
		nivel.disparosEnemigos.push(new BalaMetralla(this.x*1.1, this.y*1.07, this.w*0.4, this.h*0.8,1));
	};
	this.mover = function(x){
		this.x = x;
		/*	
		if(this.dirX == 0 && this.dirY == 0) return;

		if(this.dirX == 1){
			this.x += this.velocidad;
		}
		else if(this.dirX == -1){
			this.x -= this.velocidad;
		}

		if(this.dirY == 1){
			this.y += this.velocidad;
		}
		else if(this.dirY == -1){
			this.y -= this.velocidad;
		}
			*/
	};
	this.moverIzquierda = function(velocidad){
		this.velocidad=velocidad;
		this.dirX=-1;
		this.x -= this.velocidad;	
	};
	this.moverDerecha = function(velocidad){
		this.velocidad=velocidad;
		this.dirX=1;
		this.x += this.velocidad;
		
	};


	this.dibujar = function(ctx){
		var grilla = 8;
		ctx.save();
		//ctx.strokeRect(this.x,this.y,this.w,this.h);
		//cuerpo
		ctx.lineWidth = 1;
		ctx.fillStyle = "#111";
		ctx.beginPath(); 
		ctx.moveTo(this.x+1/grilla*this.w, this.y+2/grilla*this.h);
		ctx.lineTo(this.x+1.5/grilla*this.w,this.y+1.5/grilla*this.h);
		ctx.lineTo(this.x+4.5/grilla*this.w,this.y+1.5/grilla*this.h);
		ctx.lineTo(this.x+4/grilla*this.w,this.y+2/grilla*this.h);
		ctx.lineTo(this.x+1/grilla*this.w,this.y+2/grilla*this.h);
		ctx.lineTo(this.x+1/grilla*this.w,this.y+4/grilla*this.h);
		ctx.lineTo(this.x+4/grilla*this.w,this.y+4/grilla*this.h);
		ctx.lineTo(this.x+4/grilla*this.w,this.y+2/grilla*this.h);
		ctx.lineTo(this.x+4.5/grilla*this.w,this.y+1.5/grilla*this.h);
		ctx.lineTo(this.x+4.5/grilla*this.w,this.y+3.5/grilla*this.h);
		ctx.lineTo(this.x+4/grilla*this.w,this.y+4/grilla*this.h);
		ctx.lineTo(this.x+4/grilla*this.w, this.y+2/grilla*this.h);
		ctx.closePath();
		ctx.fill();
		ctx.strokeStyle = "#555"; 
		ctx.moveTo(this.x+1.5/grilla*this.w,this.y+1.75/grilla*this.h);
		ctx.lineTo(this.x+4/grilla*this.w,this.y+1.75/grilla*this.h);
		ctx.moveTo(this.x+1.2/grilla*this.w,this.y+2.3/grilla*this.h);
		ctx.lineTo(this.x+3.8/grilla*this.w,this.y+2.3/grilla*this.h);
		ctx.moveTo(this.x+1.2/grilla*this.w,this.y+2.5/grilla*this.h);
		ctx.lineTo(this.x+3.8/grilla*this.w,this.y+2.5/grilla*this.h);
		ctx.moveTo(this.x+1.2/grilla*this.w,this.y+2.7/grilla*this.h);
		ctx.lineTo(this.x+3.8/grilla*this.w,this.y+2.7/grilla*this.h);
		ctx.stroke();

		//boca
		ctx.lineWidth = 2;
		ctx.fillRect(this.x+4.3/grilla*this.w,this.y+2.5/grilla*this.h,2.65/grilla*this.w,0.9/grilla*this.h);
		ctx.beginPath();
		ctx.moveTo(this.x+4.3/grilla*this.w, this.y+2.5/grilla*this.h);
		ctx.quadraticCurveTo(this.x+4/grilla*this.w, this.y+3/grilla*this.h, this.x+4.3/grilla*this.w, this.y+3.4/grilla*this.h);
		ctx.lineTo(this.x+6.5/grilla*this.w,this.y+3.4/grilla*this.h);
		ctx.moveTo(this.x+6.57/grilla*this.w, this.y+3.47/grilla*this.h);
		ctx.quadraticCurveTo(this.x+6.2/grilla*this.w, this.y+3/grilla*this.h, this.x+6.58/grilla*this.w, this.y+2.42/grilla*this.h);
		ctx.lineTo(this.x+6.88/grilla*this.w,this.y+2.42/grilla*this.h);
		ctx.quadraticCurveTo(this.x+6.4/grilla*this.w, this.y+3/grilla*this.h, this.x+6.88/grilla*this.w, this.y+3.48/grilla*this.h);
		ctx.lineTo(this.x+6.57/grilla*this.w,this.y+3.48/grilla*this.h);
		ctx.moveTo(this.x+6.88/grilla*this.w, this.y+3.48/grilla*this.h);
		ctx.quadraticCurveTo(this.x+7.2/grilla*this.w, this.y+3/grilla*this.h, this.x+6.88/grilla*this.w, this.y+2.42/grilla*this.h);
		ctx.moveTo(this.x+6.55/grilla*this.w, this.y+2.5/grilla*this.h);
		ctx.lineTo(this.x+4.3/grilla*this.w,this.y+2.5/grilla*this.h);
		ctx.fill();
		ctx.moveTo(this.x+4.4/grilla*this.w,this.y+2.7/grilla*this.h);
		ctx.lineTo(this.x+6.3/grilla*this.w,this.y+2.7/grilla*this.h);
		ctx.moveTo(this.x+4.3/grilla*this.w,this.y+2.9/grilla*this.h);
		ctx.lineTo(this.x+6.25/grilla*this.w,this.y+2.9/grilla*this.h);
		ctx.moveTo(this.x+4.32/grilla*this.w,this.y+3.1/grilla*this.h);
		ctx.lineTo(this.x+6.26/grilla*this.w,this.y+3.1/grilla*this.h);
		ctx.stroke(); 
		//balas
		ctx.fillStyle ="#955";
		ctx.strokeStyle = "#f00";
		ctx.beginPath();
		ctx.ellipse(this.x+2/grilla*this.w, this.y+3/grilla*this.h, 0.7/grilla*this.w,0.1/grilla*this.h ,  0, 0, 2*Math.PI, true);
		ctx.ellipse(this.x+1.8/grilla*this.w, this.y+3.2/grilla*this.h, 0.7/grilla*this.w,0.1/grilla*this.h ,  0, 0, 2*Math.PI, true);
		ctx.ellipse(this.x+1.7/grilla*this.w, this.y+3.4/grilla*this.h, 0.7/grilla*this.w,0.1/grilla*this.h ,  0, 0, 2*Math.PI, true);
		ctx.ellipse(this.x+1.6/grilla*this.w, this.y+3.6/grilla*this.h, 0.7/grilla*this.w,0.1/grilla*this.h ,  0, 0, 2*Math.PI, true);
		ctx.ellipse(this.x+1.55/grilla*this.w, this.y+3.8/grilla*this.h, 0.7/grilla*this.w,0.1/grilla*this.h ,  0, 0, 2*Math.PI, true);
		ctx.ellipse(this.x+1.5/grilla*this.w, this.y+4/grilla*this.h, 0.7/grilla*this.w,0.1/grilla*this.h ,  0, 0, 2*Math.PI, true);
		ctx.ellipse(this.x+1.5/grilla*this.w, this.y+4.2/grilla*this.h, 0.7/grilla*this.w,0.1/grilla*this.h ,  0, 0, 2*Math.PI, true);
		ctx.ellipse(this.x+1.5/grilla*this.w, this.y+4.4/grilla*this.h, 0.7/grilla*this.w,0.1/grilla*this.h ,  0, 0, 2*Math.PI, true);
		ctx.ellipse(this.x+1.5/grilla*this.w, this.y+4.6/grilla*this.h, 0.7/grilla*this.w,0.1/grilla*this.h ,  0, 0, 2*Math.PI, true);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
		//linea de balas
		ctx.lineWidth = 1;
		ctx.strokeStyle = "#ff0";
		ctx.beginPath();
		ctx.moveTo(this.x+2.4/grilla*this.w, this.y+2.92/grilla*this.h);
		ctx.quadraticCurveTo(this.x+2.22/grilla*this.w, this.y+2.95/grilla*this.h, this.x+2.26/grilla*this.w, this.y+3.08/grilla*this.h);
		ctx.quadraticCurveTo(this.x+2.01/grilla*this.w, this.y+3.14/grilla*this.h, this.x+2.09/grilla*this.w, this.y+3.29/grilla*this.h);
		ctx.quadraticCurveTo(this.x+1.82/grilla*this.w, this.y+3.35/grilla*this.h, this.x+1.96/grilla*this.w, this.y+3.5/grilla*this.h);
		ctx.quadraticCurveTo(this.x+1.75/grilla*this.w, this.y+3.60/grilla*this.h, this.x+1.87/grilla*this.w, this.y+3.69/grilla*this.h);
		ctx.quadraticCurveTo(this.x+1.7/grilla*this.w, this.y+3.85/grilla*this.h, this.x+1.8/grilla*this.w, this.y+3.9/grilla*this.h);
		ctx.quadraticCurveTo(this.x+1.68/grilla*this.w, this.y+4/grilla*this.h, this.x+1.78/grilla*this.w, this.y+4.1/grilla*this.h);
		ctx.quadraticCurveTo(this.x+1.68/grilla*this.w, this.y+4.25/grilla*this.h, this.x+1.78/grilla*this.w, this.y+4.3/grilla*this.h);
		ctx.quadraticCurveTo(this.x+1.68/grilla*this.w, this.y+4.45/grilla*this.h, this.x+1.78/grilla*this.w, this.y+4.5/grilla*this.h);
		ctx.quadraticCurveTo(this.x+1.68/grilla*this.w, this.y+4.65/grilla*this.h, this.x+1.78/grilla*this.w, this.y+4.7/grilla*this.h);
		ctx.moveTo(this.x+2/grilla*this.w, this.y+3.8/grilla*this.h);
		ctx.closePath();
		ctx.stroke();
		// tapa balas
		ctx.lineWidth = 1;
		ctx.fillStyle = "#111";
		ctx.beginPath(); 
		ctx.moveTo(this.x+1.2/grilla*this.w, this.y+2.8/grilla*this.h);
		ctx.lineTo(this.x+1.4/grilla*this.w,this.y+2.7/grilla*this.h);
		ctx.lineTo(this.x+2.68/grilla*this.w,this.y+2.7/grilla*this.h);
		ctx.lineTo(this.x+2.55/grilla*this.w,this.y+2.8/grilla*this.h);
		ctx.lineTo(this.x+1.2/grilla*this.w,this.y+2.8/grilla*this.h);
		ctx.lineTo(this.x+1.2/grilla*this.w,this.y+3/grilla*this.h);
		ctx.lineTo(this.x+2.55/grilla*this.w,this.y+3/grilla*this.h);
		ctx.lineTo(this.x+2.55/grilla*this.w,this.y+2.8/grilla*this.h);
		ctx.closePath();
		ctx.fill();
		ctx.strokeStyle = "#555"; 
		ctx.moveTo(this.x+1.5/grilla*this.w,this.y+1.75/grilla*this.h);
		ctx.lineTo(this.x+4/grilla*this.w,this.y+1.75/grilla*this.h);
		ctx.moveTo(this.x+1.2/grilla*this.w,this.y+2.3/grilla*this.h);
		ctx.lineTo(this.x+3.8/grilla*this.w,this.y+2.3/grilla*this.h);
		ctx.moveTo(this.x+1.2/grilla*this.w,this.y+2.5/grilla*this.h);
		ctx.lineTo(this.x+3.8/grilla*this.w,this.y+2.5/grilla*this.h);
		ctx.moveTo(this.x+1.2/grilla*this.w,this.y+2.7/grilla*this.h);
		ctx.lineTo(this.x+3.8/grilla*this.w,this.y+2.7/grilla*this.h);
		ctx.stroke();
		ctx.restore();
		//cañon de granadas
		ctx.lineWidth = 2;
		ctx.fillRect(this.x+4.3/grilla*this.w,this.y+1.8/grilla*this.h,1.2/grilla*this.w,0.6/grilla*this.h);
		ctx.beginPath();
		ctx.moveTo(this.x+4.3/grilla*this.w, this.y+1.8/grilla*this.h);
		ctx.quadraticCurveTo(this.x+4.09/grilla*this.w, this.y+2.1/grilla*this.h, this.x+4.3/grilla*this.w, this.y+2.4/grilla*this.h);
		ctx.lineTo(this.x+5.3/grilla*this.w,this.y+2.4/grilla*this.h);
		ctx.moveTo(this.x+5.35/grilla*this.w, this.y+2.4/grilla*this.h);
		ctx.quadraticCurveTo(this.x+5/grilla*this.w, this.y+2/grilla*this.h, this.x+5.33/grilla*this.w, this.y+1.75/grilla*this.h);
		ctx.lineTo(this.x+5.5/grilla*this.w,this.y+1.75/grilla*this.h);
		ctx.quadraticCurveTo(this.x+5.2/grilla*this.w, this.y+2/grilla*this.h, this.x+5.5/grilla*this.w, this.y+2.4/grilla*this.h);
		ctx.lineTo(this.x+5.2/grilla*this.w,this.y+2.4/grilla*this.h);
		ctx.moveTo(this.x+5.2/grilla*this.w, this.y+2.4/grilla*this.h);
		ctx.quadraticCurveTo(this.x+5.8/grilla*this.w, this.y+2.4/grilla*this.h, this.x+5.5/grilla*this.w, this.y+1.75/grilla*this.h);
		ctx.fill();
		ctx.strokeStyle = "#555";
		ctx.stroke(); 
	}
}
function circulo(ctx,x,y,w,h,d,radio,p,color){
	ctx.fillStyle= '#'+color;
	ctx.beginPath();
	ctx.arc(x+w, y+h, w, d,radio, p);
	ctx.fill();
	ctx.closePath();
}