function BalaEnergiaEnemigo(x, y, w, h, dx, dy){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.velocidad = 15;
	this.dirX = dx || -1;
	this.dirY = dy || 0;
	this.exploto = false;
	this.dibujar = function(context){
		var grilla = 8;
		
		brillo(context, 8/grilla*this.w,0,0,'f00');
	    //relleno(context,this.x+1/grilla*this.w, this.y+4.5/grilla*this.h, 1.5/grilla*this.w, 1/grilla*this.w, 0.5/grilla*this.w,1,1,'f90','fff');
		circulo(context, this.x+2/grilla*this.w, this.y+4.5/grilla*this.h, 3/grilla*this.w, 0, Math.PI*2, true,'f50');
		context.restore();
	};
	this.colisiona = function(fig){

				return !( (fig.y > this.y+this.h) || 
				(fig.x > this.x+this.w) ||
				(this.y > fig.y+fig.w) ||
				(this.x > fig.x+fig.w) )
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
	}
}









function circulo(context,x,y,radio,b,ar,p,color){
	context.save();
	context.fillStyle= '#'+color;
	context.beginPath();
	context.arc(x, y, radio, b, ar, p);
	context.closePath();
	context.fill();
	context.restore();
	
}
function relleno(context,w,h,radio,e,t,a,b,color1,color2){
	context.save();
	var gradient = context.createRadialGradient(w/2, h/2, e,w/2, h/2, t);
	gradient.addColorStop(a, '#'+color1);
	gradient.addColorStop(a, '#'+color2);
	context.fillStyle = gradient;
	context.arc(w, h,radio, 0, Math.PI*2, false);
	context.closePath();
	context.fill();
	context.restore();
	
}

function brillo(context,ui,x,y,color){
	context.save();
	context.shadowColor = '#'+color; 
	context.shadowBlur = ui;
	context.shadowOffsetX = x;
	context.shadowOffsetY = y;
	//context.restore();
}