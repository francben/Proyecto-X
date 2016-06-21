
function ArmaCohete(x, y, w, h, dx, dy,){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.velocidad = 0;
	this.dirX = dx || -1;
	this.dirY = dy || 0;
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
		ctx.fillRect(50,50,100,100);
	}