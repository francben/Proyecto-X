
function Nivel(){

	this.fondo = null;
	this.jugador = null;
	this.robotEnemigo = null;


	// contiene cada componente a ser dibujado dentro de la escena
	// incluye los proyectiles de las armas
	this.elementos = [];


	this.dibujar = function(ctx){

		this.fondo.dibujar(ctx);
		this.jugador.dibujar(ctx);
		this.robotEnemigo.dibujar(ctx);
		
		for (var i = 0; i < this.elementos.length; i++) {
			var element = this.elementos[i];
			element.dibujar(ctx);
		}
		
		//this.mostrarBarrasEnergia(ctx);
	}

	// actualiza cada uno de los componentes del nivel
	/*this.mover = function(){

		//this.jugador.mover();
		this.robotEnemigo.mover();

		//$.each(this.elementos, function(e){ e.dibujar(ctx); });
		
		for (var i = 0; i < this.elementos.length; i++) {
			var element = this.elementos[i];
			element.mover();
		}
	}*/ 


	this.mostrarBarrasEnergia = function(ctx){
		// dibujar rect para la energia del jugador
		var porcentajeEnergiaEnemigo = this.robotEnemigo.energia/100.0;
		ctx.sabe();
		ctx.strokeRect(20, 20, 200, 30);
		ctx.fillRect(20, 20, 200*porcentajeEnergiaEnemigo, 30);


		// dibujar rect para la energia del robot enemigo
		var porcentajeEnergiaJugador = this.jugador.energia/100.0;
		ctx.strokeRect(500, 20, 200, 30);
		ctx.fillRect(500, 20, 200*porcentajeEnergiaJugador, 30);
		ctx.restore();
	}
}