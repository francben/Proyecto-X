function ArmaEstandar(x, y, w, h, dx, dy){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.velocidad = 0;
	this.dirX = dx || -1;
	this.dirY = dy || 0;
	//this.tipoProyectil = BalaEnergia;
	this.disparar = function(nivel){
		nivel.elementos.push(new BalaEnergia(this.x, this.y*1.04, this.w*0.4, this.h*0.4));
	};

	this.mover = function(){
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
		var grilla=8;
		ctx.save();
		ctx.lineWidth = 2;
		ctx.strokeStyle = "#00f"; 
		ctx.beginPath();
		ctx.ellipse(this.x+4/grilla*this.w, this.y+4/grilla*this.h, 2.5/grilla*this.w,1.5/grilla*this.h ,  0, 2.1, 4, true);
		ctx.closePath();
		ctx.stroke();

		ctx.fillStyle = "#fff"; 
		ctx.beginPath();
		ctx.ellipse(this.x+4/grilla*this.w, this.y+4/grilla*this.h, 2.5/grilla*this.w,1.5/grilla*this.h ,  0, 2.1, 4, true);
		ctx.closePath();
		ctx.fill();
		
		
		ctx.fillStyle = "#f00"; 
		ctx.beginPath();
		ctx.ellipse(this.x+2.5/grilla*this.w, this.y+4/grilla*this.h, 0.5/grilla*this.w, 1.25/grilla*this.h,  0, 0, 2*Math.PI, true);
		ctx.closePath();
		ctx.fill();
		ctx.fillStyle = "#000"; 
		ctx.beginPath();
		ctx.ellipse(this.x+2.5/grilla*this.w, this.y+4/grilla*this.h, 0.3/grilla*this.w, 1.05/grilla*this.h,  0, 0, 2*Math.PI, true);
		ctx.closePath();
		ctx.fill();

		ctx.strokeStyle = "#0f0"; 
		ctx.beginPath(); 
		ctx.moveTo(this.x+4.4/grilla*this.w, this.y+3.5/grilla*this.h);
		ctx.lineTo(this.x+6.2/grilla*this.w,this.y+3.5/grilla*this.h);
		ctx.moveTo(this.x+4.8/grilla*this.w, this.y+4/grilla*this.h);
		ctx.lineTo(this.x+6.3/grilla*this.w,this.y+4/grilla*this.h);
		ctx.moveTo(this.x+4.4/grilla*this.w, this.y+4.5/grilla*this.h);
		ctx.lineTo(this.x+6.2/grilla*this.w,this.y+4.5/grilla*this.h);
		ctx.closePath();
		ctx.stroke();

		ctx.fillStyle= "#00f";
		ctx.beginPath();
		ctx.arc(this.x+3.2/grilla*this.w, this.y+3/grilla*this.h, 0.1/grilla*this.w, 0, 2*Math.PI, true);
		ctx.arc(this.x+3.4/grilla*this.w, this.y+3.7/grilla*this.h, 0.1/grilla*this.w, 0, 2*Math.PI, true);
		ctx.arc(this.x+3.4/grilla*this.w, this.y+4.4/grilla*this.h, 0.1/grilla*this.w, 0, 2*Math.PI, true);
		ctx.arc(this.x+3.2/grilla*this.w, this.y+5.1/grilla*this.h, 0.1/grilla*this.w, 0, 2*Math.PI, true);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	}
}