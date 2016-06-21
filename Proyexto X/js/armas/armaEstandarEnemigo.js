function ArmaEstandarEnemigo(x, y, w, h, dx, dy){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.velocidad = 0;
	this.dirX = dx || -1;
	this.dirY = dy || 0;
	//this.tipoProyectil = BalaEnergia;
	this.disparar = function(nivel){
		nivel.elementos.push(new BalaEnergia(his.x, this.y, this.w, this.h));
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
		var grilla =8;
		elipsef(ctx,this.x+3.8/grilla*this.w, this.y+4/grilla*this.h, 2.3/grilla*this.w,1.6/grilla*this.h ,  0, 4.8, 1.47, true,'fff');
		elipses(ctx,this.x+3.8/grilla*this.w, this.y+4/grilla*this.h, 2.3/grilla*this.w,1.6/grilla*this.h ,  0, 4.8, 1.47, true,'00f');
		elipsef(ctx,this.x+4/grilla*this.w, this.y+4/grilla*this.h, 0.38/grilla*this.w,1.58/grilla*this.h ,  0, 0, 2*Math.PI, true,'f00');
		elipsef(ctx,this.x+4/grilla*this.w, this.y+4/grilla*this.h, 0.18/grilla*this.w,1.2/grilla*this.h ,  0, 0, 2*Math.PI, true,'000');
		linea(ctx,this.x+2/grilla*this.w,this.y+3.5/grilla*this.h,this.x+3/grilla*this.w,this.y+3.5/grilla*this.h,'f33');
		linea(ctx,this.x+2/grilla*this.w,this.y+4/grilla*this.h,this.x+3/grilla*this.w,this.y+4/grilla*this.h,'f33');
		linea(ctx,this.x+2/grilla*this.w,this.y+4.5/grilla*this.h,this.x+3/grilla*this.w,this.y+4.5/grilla*this.h,'f33');
	};


}




function elipses(ctx,x,y,a1,a2,i,f,arc,pint,color){
	ctx.save();
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#'+color; 
	ctx.beginPath();
	ctx.ellipse(x, y, a1,a2 ,  i, f, arc, pint);
	ctx.closePath();
	ctx.stroke();
	ctx.restore();
}
function elipsef(ctx,x,y,a1,a2,i,f,arc,pint,color){
	ctx.save();
	ctx.fillStyle = '#'+color; 
	ctx.beginPath();
	ctx.ellipse(x, y, a1,a2 ,  i, f, arc, pint);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
}
function linea(ctx,x,y,x2,y2,color){
	ctx.save();
	ctx.strokeStyle = '#'+color;
	ctx.beginPath(); 
	ctx.moveTo(x,y);
	ctx.lineTo(x2,y2);
	ctx.closePath();
	ctx.stroke();
	ctx.restore();
}
