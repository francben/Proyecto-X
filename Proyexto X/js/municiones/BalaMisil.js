function BalaMisil(x, y, w, h, dx, dy){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.velocidad = 20;
	this.dirX = dx || -1;
	this.dirY = dy || 0;
	this.exploto = false;
	this.dibujar = function(ctx){
		var grilla = 8;
		ctx.save();
		ctx.fillStyle ="#fff";
		ctx.strokeStyle = "#000";
		ctx.beginPath();
		ctx.ellipse(this.x+7/grilla*this.w, this.y+3/grilla*this.h, 0.7/grilla*this.w,0.1/grilla*this.h ,  0, 0, 2*Math.PI, true);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
		ctx.lineWidth = 1;
		ctx.strokeStyle = "#f00";
		ctx.beginPath();
		ctx.moveTo(this.x+7.4/grilla*this.w, this.y+2.92/grilla*this.h);
		ctx.quadraticCurveTo(this.x+2.22/grilla*this.w, this.y+2.95/grilla*this.h, this.x+7.26/grilla*this.w, this.y+3.08/grilla*this.h);
		ctx.moveTo(this.x+6.5/grilla*this.w, this.y+2.9/grilla*this.h);
		ctx.lineTo(this.x+6.2/grilla*this.w,this.y+2.7/grilla*this.h);
		ctx.lineTo(this.x+6.3/grilla*this.w,this.y+3/grilla*this.h);
		ctx.lineTo(this.x+6.2/grilla*this.w,this.y+3.3/grilla*this.h);
		ctx.lineTo(this.x+6.5/grilla*this.w,this.y+3.1/grilla*this.h);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
		ctx.fillStyle ="#f90";
		ctx.strokeStyle = "#f00";
		ctx.beginPath();
		ctx.ellipse(this.x+6/grilla*this.w, this.y+3/grilla*this.h, 0.3/grilla*this.w,0.03/grilla*this.h ,  0, 0, 2*Math.PI, true);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
		ctx.restore();
	};
	this.colisiona = function(fig){
				return !( (fig.y > this.y+this.h) || 
				(fig.x > this.x+this.w) ||
				(this.y > fig.y+fig.w) ||
				(this.x > fig.x+fig.w) )
	};
	this.mover = function(dirX){
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
