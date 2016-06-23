
function ArmaCohete(x, y, w, h, dx, dy){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.velocidad = 0;
	this.dirX = dx || -1;
	this.dirY = dy || 0;
	this.disparar = function(nivel){
		nivel.disparosEnemigos.push(new BalaMisil(this.x, this.y*0.85, this.w*1.8, this.h*3,1));
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
		var grilla =8;
		ctx.save();
		//ctx.strokeRect(this.x, this.y, this.w, this.h);
		//base
		ctx.fillStyle = "#666"; 
		ctx.fillRect(this.x+2/grilla*this.w,this.y+3/grilla*this.h,6/grilla*this.w,3/grilla*this.h);
		ctx.fillRect(this.x+1/grilla*this.w,this.y+4/grilla*this.h,6/grilla*this.w,3/grilla*this.h);
		//cubrir esquinas base
		ctx.beginPath(); 
		ctx.moveTo(this.x+2/grilla*this.w, this.y+3/grilla*this.h);
		ctx.lineTo(this.x+0.98/grilla*this.w,this.y+4.02/grilla*this.h);
		ctx.lineTo(this.x+2/grilla*this.w,this.y+4.02/grilla*this.h);
		ctx.moveTo(this.x+6.98/grilla*this.w, this.y+6/grilla*this.h);
		ctx.lineTo(this.x+8/grilla*this.w,this.y+6/grilla*this.h);
		ctx.lineTo(this.x+6.98/grilla*this.w,this.y+7/grilla*this.h);
		ctx.closePath();
		ctx.fill();
		//contorno
		ctx.strokeStyle = "#f00"; 
		ctx.lineWidth = 2;
		ctx.beginPath(); 
		ctx.moveTo(this.x+8/grilla*this.w, this.y+3/grilla*this.h);
		ctx.lineTo(this.x+7/grilla*this.w,this.y+4/grilla*this.h);
		ctx.lineTo(this.x+1/grilla*this.w,this.y+4/grilla*this.h);
		ctx.lineTo(this.x+2/grilla*this.w,this.y+3/grilla*this.h);
		ctx.lineTo(this.x+8/grilla*this.w,this.y+3/grilla*this.h);
		ctx.lineTo(this.x+8/grilla*this.w,this.y+6/grilla*this.h);
		ctx.lineTo(this.x+7/grilla*this.w,this.y+7/grilla*this.h);
		ctx.lineTo(this.x+1/grilla*this.w,this.y+7/grilla*this.h);
		ctx.lineTo(this.x+1/grilla*this.w,this.y+4/grilla*this.h);
		ctx.lineTo(this.x+7/grilla*this.w,this.y+4/grilla*this.h);
		ctx.lineTo(this.x+7/grilla*this.w,this.y+7/grilla*this.h);
		ctx.moveTo(this.x+7/grilla*this.w, this.y+7/grilla*this.h);
		ctx.closePath();
		ctx.stroke();
		//AGUEJRO COHETE
		ctx.fillStyle = "#000";
		ctx.beginPath();
		ctx.ellipse(this.x+7.3/grilla*this.w, this.y+4.5/grilla*this.h, 0.1/grilla*this.w,0.5/grilla*this.h ,  0, 0, 2*Math.PI, true);
		ctx.moveTo(this.x+7.8/grilla*this.w, this.y+4/grilla*this.h);
		ctx.ellipse(this.x+7.7/grilla*this.w, this.y+4/grilla*this.h, 0.1/grilla*this.w,0.5/grilla*this.h ,  0, 0, 2*Math.PI, true);
		ctx.moveTo(this.x+7.3/grilla*this.w, this.y+4.5/grilla*this.h);
		ctx.ellipse(this.x+7.3/grilla*this.w, this.y+5.8/grilla*this.h, 0.1/grilla*this.w,0.5/grilla*this.h ,  0, 0, 2*Math.PI, true);
		ctx.moveTo(this.x+7.8/grilla*this.w, this.y+5.3/grilla*this.h);
		ctx.ellipse(this.x+7.7/grilla*this.w, this.y+5.4/grilla*this.h, 0.1/grilla*this.w,0.5/grilla*this.h ,  0, 0, 2*Math.PI, true);
		ctx.closePath();
		ctx.fill();
		ctx.strokeStyle = "#f00"; 
		ctx.beginPath();
		ctx.ellipse(this.x+7.3/grilla*this.w, this.y+4.5/grilla*this.h, 0.1/grilla*this.w,0.5/grilla*this.h ,  0, 0, 2*Math.PI, true);
		ctx.moveTo(this.x+7.8/grilla*this.w, this.y+4/grilla*this.h);
		ctx.ellipse(this.x+7.7/grilla*this.w, this.y+4/grilla*this.h, 0.1/grilla*this.w,0.5/grilla*this.h ,  0, 0, 2*Math.PI, true);
		ctx.moveTo(this.x+7.4/grilla*this.w, this.y+5.8/grilla*this.h);
		ctx.ellipse(this.x+7.3/grilla*this.w, this.y+5.8/grilla*this.h, 0.1/grilla*this.w,0.5/grilla*this.h ,  0, 0, 2*Math.PI, true);
		ctx.moveTo(this.x+7.8/grilla*this.w, this.y+5.3/grilla*this.h);
		ctx.ellipse(this.x+7.7/grilla*this.w, this.y+5.4/grilla*this.h, 0.1/grilla*this.w,0.5/grilla*this.h ,  0, 0, 2*Math.PI, true);
		ctx.closePath();
		ctx.stroke();
		//marcas
		ctx.beginPath(); 
		ctx.moveTo(this.x+1.8/grilla*this.w, this.y+4.8/grilla*this.h);
		ctx.lineTo(this.x+1.8/grilla*this.w,this.y+4.5/grilla*this.h);
		ctx.lineTo(this.x+6.2/grilla*this.w,this.y+4.5/grilla*this.h);
		ctx.lineTo(this.x+6.2/grilla*this.w,this.y+4.8/grilla*this.h);
		ctx.moveTo(this.x+1.8/grilla*this.w, this.y+5.35/grilla*this.h);
		ctx.lineTo(this.x+6.2/grilla*this.w,this.y+5.35/grilla*this.h);
		ctx.moveTo(this.x+1.8/grilla*this.w, this.y+5.65/grilla*this.h);
		ctx.lineTo(this.x+6.2/grilla*this.w,this.y+5.65/grilla*this.h);
		ctx.moveTo(this.x+1.8/grilla*this.w, this.y+6.2/grilla*this.h);
		ctx.lineTo(this.x+1.8/grilla*this.w,this.y+6.5/grilla*this.h);
		ctx.lineTo(this.x+6.2/grilla*this.w,this.y+6.5/grilla*this.h);
		ctx.lineTo(this.x+6.2/grilla*this.w,this.y+6.2/grilla*this.h);
		ctx.moveTo(this.x+6.2/grilla*this.w, this.y+6.2/grilla*this.h);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle="#555";
		ctx.fillRect(this.x+1.84/grilla*this.w, this.y+4.5/grilla*this.h, 4.35/grilla*this.w,0.8/grilla*this.h);
		ctx.fillRect(this.x+1.84/grilla*this.w, this.y+5.67/grilla*this.h, 4.35/grilla*this.w,0.8/grilla*this.h);
		ctx.beginPath(); 
		ctx.moveTo(this.x+2.4/grilla*this.w, this.y+3.4/grilla*this.h);
		ctx.lineTo(this.x+7/grilla*this.w,this.y+3.4/grilla*this.h);
		ctx.moveTo(this.x+2.1/grilla*this.w, this.y+3.6/grilla*this.h);
		ctx.lineTo(this.x+6.7/grilla*this.w,this.y+3.6/grilla*this.h);
		ctx.closePath();
		ctx.stroke();
	}
}