
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
		if(this.robotEnemigo.energia!=0){
			this.robotEnemigo.dibujar(ctx);
		}
		
		for (var i = 0; i < this.elementos.length; i++) {
			var elemento = this.elementos[i];
			if(!elemento.exploto){
				elemento.dibujar(ctx);
			}
		}
		
		this.mostrarBarrasEnergia(ctx);
	}

	// actualiza cada uno de los componentes del nivel
	this.mover = function(){

		//this.robotEnemigo.mover();

		//$.each(this.elementos, function(e){ e.dibujar(ctx); });
		
		for (var i = 0; i < this.elementos.length; i++) {
			var element = this.elementos[i];
			element.mover();
		}
	}


	this.mostrarBarrasEnergia = function(ctx){
		// dibujar rect para la energia del jugador
		//var porcentajeEnergiaEnemigo = this.robotEnemigo.energia/100.0;
		this.jugador.barraDeVida(ctx);

		// dibujar rect para la energia del robot enemigo
		
		this.robotEnemigo.barraDeVida(ctx);
	}
}