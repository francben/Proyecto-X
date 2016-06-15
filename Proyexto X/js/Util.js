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
