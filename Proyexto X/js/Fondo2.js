function Fondo2(){

	this.idElementFondo = "#imgFondo2";

	this.dibujar = function(ctx){

		var f1 = $(this.idElementFondo)[0];
	console.log("F1",f1);
		ctx.drawImage(f1,0,0);

			
	
	}
}