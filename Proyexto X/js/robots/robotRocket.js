function arcOval(ctx, centerX, centerY, width, height, n, color) {
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - height / 2);

    ctx.bezierCurveTo(
        centerX + width / 2, centerY+n - height / 2,
        centerX + width / 2, centerY+n + height / 2,
        centerX, centerY + height / 2
    );
    ctx.bezierCurveTo(
        centerX - width / 2, centerY-n + height / 2,
        centerX - width / 2, centerY+-n - height / 2,
        centerX, centerY - height / 2
    );
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.stroke();
    ctx.closePath();
}
function RobotRocket(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.velocidad = 11;
    this.dirX = -1;
    this.dirY = 1;
    this.energia=100;
    // todos los robots deben tener esta propiedad
    this.arma = new ArmaEstandarEnemigo(x,y,w,h);

    // todos los robots deben tener esta funcion
    this.disparar = function(nivel){
        this.arma.disparar(nivel);
    };
    

    this.dibujar = function(ctx){
        ctx.save();
        var grilla = 8;
        ctx.lineWidth = 0.8;
        
        ctx.fillStyle = '';
        
        //rocket
        arcOval(ctx,this.x+1.2/grilla*this.w, this.y+5.48/grilla*this.h,this.x+1.5/grilla*this.w,this.y+0.35/grilla*this.h,4,'#666666');
        arcOval(ctx,this.x+1.25/grilla*this.w, this.y+5.2/grilla*this.h,this.x+2/grilla*this.w,this.y+0.45/grilla*this.h,6,'#666666');
        arcOval(ctx,this.x+1.3/grilla*this.w, this.y+4.85/grilla*this.h,this.x+2.5/grilla*this.w,this.y+0.6/grilla*this.h,7,'#666666');
        ctx.strokeStyle = '#000099';
        //cuerpo
        ctx.beginPath();
        ctx.moveTo(this.x+3.12/grilla*this.w, this.y+2.22/grilla*this.h);
        ctx.lineTo(this.x+1.84/grilla*this.w, this.y+1.7/grilla*this.h);
        ctx.lineTo(this.x+0.24/grilla*this.w, this.y+1.98/grilla*this.h);
        ctx.lineTo(this.x+1.64/grilla*this.w, this.y+2.6/grilla*this.h);
        ctx.lineTo(this.x+3.12/grilla*this.w, this.y+2.22/grilla*this.h);
        ctx.lineTo(this.x+2.54/grilla*this.w, this.y+4.65/grilla*this.h);
        ctx.lineTo(this.x+1.29/grilla*this.w, this.y+5.07/grilla*this.h);
        ctx.lineTo(this.x+0.14/grilla*this.w, this.y+4.55/grilla*this.h);
        ctx.lineTo(this.x+0.24/grilla*this.w, this.y+1.98/grilla*this.h);
        ctx.lineTo(this.x+1.64/grilla*this.w, this.y+2.6/grilla*this.h);
        ctx.lineTo(this.x+1.29/grilla*this.w, this.y+5.07/grilla*this.h);
        ctx.lineTo(this.x+1.64/grilla*this.w, this.y+2.6/grilla*this.h);
        ctx.fillStyle = '#00004d';
        ctx.fill();
        ctx.stroke();
        
        //cabeza
        ctx.beginPath();
        ctx.moveTo(this.x+3/grilla*this.w, this.y+0.55/grilla*this.h);
        ctx.lineTo(this.x+2/grilla*this.w, this.y+0.15/grilla*this.h);
        ctx.lineTo(this.x+0.86/grilla*this.w, this.y+0.28/grilla*this.h);//<---
        ctx.lineTo(this.x+1.95/grilla*this.w, this.y+0.75/grilla*this.h);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(this.x+0.86/grilla*this.w, this.y+0.28/grilla*this.h);
        ctx.lineTo(this.x+0.75/grilla*this.w, this.y+1.4/grilla*this.h);
        ctx.lineTo(this.x+0.6/grilla*this.w, this.y+1.45/grilla*this.h);
        ctx.lineTo(this.x+1.75/grilla*this.w, this.y+1.95/grilla*this.h);
        ctx.lineTo(this.x+1.95/grilla*this.w, this.y+0.75/grilla*this.h);//<--
        
        ctx.moveTo(this.x+1.95/grilla*this.w, this.y+0.75/grilla*this.h);
        ctx.lineTo(this.x+3.05/grilla*this.w, this.y+0.55/grilla*this.h);
        ctx.lineTo(this.x+2.85/grilla*this.w, this.y+1.7/grilla*this.h);
        ctx.lineTo(this.x+1.75/grilla*this.w, this.y+1.95/grilla*this.h);
        ctx.fill();
        ctx.stroke();

        //ojos
        arcOval(ctx,this.x+2.25/grilla*this.w, this.y+1.1/grilla*this.h,this.x+0.41/grilla*this.w,this.y+0.41/grilla*this.h,-2, 'red');
        arcOval(ctx,this.x+2.77/grilla*this.w, this.y+1.05/grilla*this.h,this.x+0.39/grilla*this.w,this.y+0.41/grilla*this.h,-2);
        
        //cejas
        ctx.beginPath();
        ctx.moveTo(this.x+2/grilla*this.w, this.y+0.5/grilla*this.h);
        ctx.lineTo(this.x+2.17/grilla*this.w, this.y+0.47/grilla*this.h);
        ctx.lineTo(this.x+2.44/grilla*this.w, this.y+0.82/grilla*this.h);
        ctx.lineTo(this.x+2.41/grilla*this.w, this.y+0.88/grilla*this.h);
        ctx.closePath();
        ctx.fillStyle = '#000';
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(this.x+3.18/grilla*this.w, this.y+0.42/grilla*this.h);
        ctx.lineTo(this.x+3/grilla*this.w, this.y+0.35/grilla*this.h);
        ctx.lineTo(this.x+2.65/grilla*this.w, this.y+0.8/grilla*this.h);
        ctx.lineTo(this.x+2.72/grilla*this.w, this.y+0.79/grilla*this.h);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //boca1
        ctx.beginPath();
        ctx.moveTo(this.x+1.98/grilla*this.w, this.y+1.88/grilla*this.h);
        ctx.lineTo(this.x+2.78/grilla*this.w, this.y+1.7/grilla*this.h);
        ctx.lineTo(this.x+2.88/grilla*this.w, this.y+1.5/grilla*this.h);
        ctx.lineTo(this.x+2.99/grilla*this.w, this.y+1.52/grilla*this.h);
        ctx.lineTo(this.x+2.78/grilla*this.w, this.y+2/grilla*this.h);
        ctx.lineTo(this.x+2.08/grilla*this.w, this.y+2/grilla*this.h);
        ctx.fillStyle = '#666666';
        ctx.strokeStyle = '#737373';
        ctx.fill();
        ctx.stroke();
        
        //boca2
        ctx.beginPath();
        ctx.moveTo(this.x+2.99/grilla*this.w, this.y+1.52/grilla*this.h);
        ctx.lineTo(this.x+2.98/grilla*this.w, this.y+2.08/grilla*this.h);
        ctx.lineTo(this.x+1.83/grilla*this.w, this.y+2.35/grilla*this.h);
        ctx.lineTo(this.x+0.56/grilla*this.w, this.y+1.62/grilla*this.h);
        ctx.lineTo(this.x+0.58/grilla*this.w, this.y+1.45/grilla*this.h);
        ctx.lineTo(this.x+1.73/grilla*this.w, this.y+1.95/grilla*this.h);
        ctx.lineTo(this.x+1.82/grilla*this.w, this.y+1.65/grilla*this.h);
        ctx.lineTo(this.x+1.92/grilla*this.w, this.y+1.7/grilla*this.h);
        ctx.lineTo(this.x+2.03/grilla*this.w, this.y+1.95/grilla*this.h);
        ctx.lineTo(this.x+2.83/grilla*this.w, this.y+1.78/grilla*this.h);
        ctx.lineTo(this.x+2.99/grilla*this.w, this.y+1.52/grilla*this.h);
        ctx.moveTo(this.x+1.92/grilla*this.w, this.y+1.72/grilla*this.h);
        ctx.lineTo(this.x+1.8/grilla*this.w, this.y+2.35/grilla*this.h);
        ctx.fillStyle = '#333333';
        ctx.fill();
        ctx.stroke();
        
        //brazo 1
        ctx.beginPath();
        ctx.bezierCurveTo(
            this.x+1.08/grilla*this.w, this.y+2.85/grilla*this.h,
            this.x+0.7/grilla*this.w,  this.y+3.4/grilla*this.h,
            this.x+0.85/grilla*this.w, this.y+4.2/grilla*this.h
        );
        ctx.bezierCurveTo(
            this.x+0.85/grilla*this.w, this.y+4/grilla*this.h,
            this.x-0.55/grilla*this.w, this.y+4/grilla*this.h,
            this.x+0.75/grilla*this.w, this.y+2.4/grilla*this.h
        );
        ctx.fillStyle = '#4d4d4d';
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
            ctx.bezierCurveTo(
            this.x+0.75/grilla*this.w, this.y+2.4/grilla*this.h, 
            this.x-0.7/grilla*this.w, this.y+3.9/grilla*this.h,
            this.x+1.25/grilla*this.w, this.y+4.55/grilla*this.h
        );
        ctx.lineTo(this.x+1.5/grilla*this.w, this.y+4.2/grilla*this.h);
        ctx.bezierCurveTo(
            this.x+1.5/grilla*this.w, this.y+4.2/grilla*this.h,
            this.x-0.1/grilla*this.w, this.y+3.6/grilla*this.h,
            this.x+0.75/grilla*this.w,  this.y+2.4/grilla*this.h
        );
        ctx.fillStyle = '#333333';
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.bezierCurveTo(
            this.x+0.75/grilla*this.w, this.y+2.4/grilla*this.h, 
            this.x+0/grilla*this.w,  this.y+3.5/grilla*this.h,
            this.x+1.56/grilla*this.w, this.y+3.98/grilla*this.h
        );
        ctx.bezierCurveTo(
            this.x+1.6/grilla*this.w, this.y+4.17/grilla*this.h,
            this.x-0.9/grilla*this.w, this.y+4.2/grilla*this.h,
            this.x+0.75/grilla*this.w,  this.y+2.4/grilla*this.h
        );
        ctx.fill();
        ctx.stroke();
        
        //manos 1
        ctx.beginPath();
        ctx.moveTo(this.x+1.21/grilla*this.w, this.y+4.05/grilla*this.h);
        ctx.lineTo(this.x+1.135/grilla*this.w, this.y+4.6/grilla*this.h);
        ctx.lineTo(this.x+1.40/grilla*this.w, this.y+4.8/grilla*this.h);
        ctx.lineTo(this.x+1.73/grilla*this.w, this.y+4/grilla*this.h);
        ctx.lineTo(this.x+1.64/grilla*this.w, this.y+3.9/grilla*this.h);
        ctx.closePath();
        ctx.fillStyle = '#003300';
        ctx.fill();
        ctx.stroke();
        
        var n = this.w;
        this.w = w*1.2;
        ctx.beginPath();
        ctx.moveTo(this.x+2/grilla*this.w, this.y+4.42/grilla*this.h);
        ctx.lineTo(this.x+2.25/grilla*this.w, this.y+4.35/grilla*this.h);
        ctx.lineTo(this.x+2.35/grilla*this.w, this.y+4.12/grilla*this.h);
        ctx.lineTo(this.x+1.9/grilla*this.w, this.y+3.75/grilla*this.h);
        ctx.lineTo(this.x+1.9/grilla*this.w, this.y+3.75/grilla*this.h);
        ctx.lineTo(this.x+1.65/grilla*this.w, this.y+3.82/grilla*this.h);
        ctx.lineTo(this.x+2.1/grilla*this.w, this.y+4.17/grilla*this.h);
        ctx.lineTo(this.x+2.35/grilla*this.w, this.y+4.12/grilla*this.h);
        ctx.lineTo(this.x+2.1/grilla*this.w, this.y+4.17/grilla*this.h);
        ctx.fillStyle = '#4d4d4d';
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(this.x+2/grilla*this.w, this.y+5.35/grilla*this.h);
        ctx.lineTo(this.x+2.24/grilla*this.w, this.y+5.25/grilla*this.h);
        ctx.lineTo(this.x+2.15/grilla*this.w, this.y+4.95/grilla*this.h);
        ctx.lineTo(this.x+1.92/grilla*this.w, this.y+5.05/grilla*this.h);
        ctx.lineTo(this.x+1.6/grilla*this.w, this.y+5.03/grilla*this.h);
        ctx.lineTo(this.x+1.35/grilla*this.w, this.y+4.7/grilla*this.h);
        ctx.lineTo(this.x+1.39/grilla*this.w, this.y+4.38/grilla*this.h);
        ctx.lineTo(this.x+1.63/grilla*this.w, this.y+4.23/grilla*this.h);
        ctx.lineTo(this.x+1.7/grilla*this.w, this.y+4.23/grilla*this.h);
        ctx.lineTo(this.x+1.64/grilla*this.w, this.y+4.65/grilla*this.h);
        ctx.lineTo(this.x+1.85/grilla*this.w, this.y+4.9/grilla*this.h);
        ctx.lineTo(this.x+2.15/grilla*this.w, this.y+4.95/grilla*this.h);
        ctx.lineTo(this.x+1.92/grilla*this.w, this.y+5.05/grilla*this.h);
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(this.x+1.13/grilla*this.w, this.y+4.07/grilla*this.h);
        ctx.lineTo(this.x+1.05/grilla*this.w, this.y+4.7/grilla*this.h);
        ctx.lineTo(this.x+1.45/grilla*this.w, this.y+5.3/grilla*this.h);
        ctx.lineTo(this.x+2/grilla*this.w, this.y+5.35/grilla*this.h);
        ctx.lineTo(this.x+1.92/grilla*this.w, this.y+5.05/grilla*this.h);
        ctx.lineTo(this.x+1.6/grilla*this.w, this.y+5.03/grilla*this.h);
        ctx.lineTo(this.x+1.35/grilla*this.w, this.y+4.7/grilla*this.h);
        ctx.lineTo(this.x+1.39/grilla*this.w, this.y+4.38/grilla*this.h);
        ctx.lineTo(this.x+1.63/grilla*this.w, this.y+4.23/grilla*this.h);
        ctx.lineTo(this.x+2/grilla*this.w, this.y+4.42/grilla*this.h);
        ctx.lineTo(this.x+2.1/grilla*this.w, this.y+4.15/grilla*this.h);
        ctx.lineTo(this.x+1.65/grilla*this.w, this.y+3.82/grilla*this.h);
        ctx.closePath();
        ctx.fillStyle = '#333333';
        ctx.fill();
        ctx.stroke();
        
        //brazo 2
        ctx.beginPath();
        ctx.bezierCurveTo(
            this.x+2.54/grilla*this.w, this.y+2.6/grilla*this.h,
            this.x+2.6/grilla*this.w,  this.y+2.6/grilla*this.h,
            this.x+3.6/grilla*this.w, this.y+3/grilla*this.h
        );
        ctx.lineTo(this.x+3.4/grilla*this.w, this.y+3.35/grilla*this.h);
        ctx.bezierCurveTo(
            this.x+3.4/grilla*this.w, this.y+3.35/grilla*this.h,
            this.x+2.7/grilla*this.w, this.y+3.15/grilla*this.h,
            this.x+2.43/grilla*this.w, this.y+3.05/grilla*this.h
        );
        ctx.fillStyle = '#4d4d4d';
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.bezierCurveTo(
            this.x+2.56/grilla*this.w, this.y+2.45/grilla*this.h,
            this.x+2.6/grilla*this.w, this.y+2.5/grilla*this.h,
            this.x+3.4/grilla*this.w, this.y+3.06/grilla*this.h
        );
        ctx.lineTo(this.x+3.3/grilla*this.w, this.y+3.45/grilla*this.h);
        ctx.bezierCurveTo(
            this.x+3.3/grilla*this.w, this.y+3.45/grilla*this.h,
            this.x+2.7/grilla*this.w, this.y+3.1/grilla*this.h,
            this.x+2.47/grilla*this.w, this.y+2.9/grilla*this.h
        );
        ctx.fillStyle = '#333333';
        ctx.fill();
        ctx.stroke();
        

        //manos 2
        this.w = n;
        this.h = this.h - (this.h*0.1);
        ctx.beginPath();
        ctx.moveTo(this.x+3.95/grilla*this.w, this.y+3.3/grilla*this.h);
        ctx.lineTo(this.x+3.88/grilla*this.w, this.y+3.9/grilla*this.h);
        ctx.lineTo(this.x+4/grilla*this.w, this.y+4.0/grilla*this.h);
        ctx.lineTo(this.x+4.33/grilla*this.w, this.y+3.3/grilla*this.h);
        ctx.lineTo(this.x+4.24/grilla*this.w, this.y+3.23/grilla*this.h);
        ctx.closePath();
        ctx.fillStyle = '#003300';
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(this.x+4.95/grilla*this.w, this.y+3.72/grilla*this.h);
        ctx.lineTo(this.x+5.2/grilla*this.w, this.y+3.65/grilla*this.h);
        ctx.lineTo(this.x+5.3/grilla*this.w, this.y+3.42/grilla*this.h);
        ctx.lineTo(this.x+4.85/grilla*this.w, this.y+3.05/grilla*this.h);
        ctx.lineTo(this.x+4.85/grilla*this.w, this.y+3.05/grilla*this.h);
        ctx.lineTo(this.x+4.6/grilla*this.w, this.y+3.12/grilla*this.h);
        ctx.lineTo(this.x+5.05/grilla*this.w, this.y+3.47/grilla*this.h);
        ctx.lineTo(this.x+5.3/grilla*this.w, this.y+3.42/grilla*this.h);
        ctx.lineTo(this.x+5.05/grilla*this.w, this.y+3.47/grilla*this.h);
        ctx.fillStyle = '#4d4d4d';
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(this.x+4.95/grilla*this.w, this.y+4.65/grilla*this.h);
        ctx.lineTo(this.x+5.19/grilla*this.w, this.y+4.55/grilla*this.h);
        ctx.lineTo(this.x+5.1/grilla*this.w, this.y+4.25/grilla*this.h);
        ctx.lineTo(this.x+4.87/grilla*this.w, this.y+4.35/grilla*this.h);
        ctx.lineTo(this.x+4.55/grilla*this.w, this.y+4.33/grilla*this.h);
        ctx.lineTo(this.x+4.3/grilla*this.w, this.y+4.0/grilla*this.h);
        ctx.lineTo(this.x+4.34/grilla*this.w, this.y+3.68/grilla*this.h);
        ctx.lineTo(this.x+4.58/grilla*this.w, this.y+3.53/grilla*this.h);
        ctx.lineTo(this.x+4.65/grilla*this.w, this.y+3.53/grilla*this.h);
        ctx.lineTo(this.x+4.59/grilla*this.w, this.y+3.95/grilla*this.h);
        ctx.lineTo(this.x+4.8/grilla*this.w, this.y+4.2/grilla*this.h);
        ctx.lineTo(this.x+5.1/grilla*this.w, this.y+4.25/grilla*this.h);
        ctx.lineTo(this.x+4.87/grilla*this.w, this.y+4.35/grilla*this.h);
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(this.x+4.08/grilla*this.w, this.y+3.37/grilla*this.h);
        ctx.lineTo(this.x+4/grilla*this.w, this.y+4.0/grilla*this.h);
        ctx.lineTo(this.x+4.4/grilla*this.w, this.y+4.6/grilla*this.h);
        ctx.lineTo(this.x+4.95/grilla*this.w, this.y+4.65/grilla*this.h);
        ctx.lineTo(this.x+4.87/grilla*this.w, this.y+4.35/grilla*this.h);
        ctx.lineTo(this.x+4.55/grilla*this.w, this.y+4.33/grilla*this.h);
        ctx.lineTo(this.x+4.3/grilla*this.w, this.y+4.0/grilla*this.h);
        ctx.lineTo(this.x+4.34/grilla*this.w, this.y+3.68/grilla*this.h);
        ctx.lineTo(this.x+4.58/grilla*this.w, this.y+3.53/grilla*this.h);
        ctx.lineTo(this.x+4.95/grilla*this.w, this.y+3.72/grilla*this.h);
        ctx.lineTo(this.x+5.05/grilla*this.w, this.y+3.45/grilla*this.h);
        ctx.lineTo(this.x+4.6/grilla*this.w, this.y+3.12/grilla*this.h);
        ctx.closePath();
        ctx.fillStyle = '#333333';
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
}