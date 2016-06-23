
function Nivel(){

	this.fondo = null;
	this.jugador = null;
	this.robotEnemigo = null;


	// contiene cada componente a ser dibujado dentro de la escena
	// incluye los proyectiles de las armas
	this.disparos = [];
	this.disparosEnemigos  = [];
	this.elementos = [];

	this.dibujar = function(ctx){

		this.fondo.dibujar(ctx);
		if(this.jugador){
			this.jugador.dibujar(ctx);
		}
		if(this.robotEnemigo){
		if(this.robotEnemigo.energia!=0){
			this.robotEnemigo.dibujar(ctx);
		}
		}
		for (var i = 0; i < this.disparos.length; i++) {
			var elemento = this.disparos[i];
			if(!elemento.exploto){
				elemento.dibujar(ctx);
			}
		}
		for (var i = 0; i < this.disparosEnemigos.length; i++) {
			var elemento = this.disparosEnemigos[i];
			if(!elemento.exploto){
				elemento.dibujar(ctx);
			}
		}
		
		this.mostrarBarrasEnergia(ctx);
	}

	// actualiza cada uno de los componentes del nivel
	this.mover = function(){
		if(this.robotEnemigo){
			this.robotEnemigo.mover();
		}
		//$.each(this.disparosEnemigos, function(e){ e.dibujar(ctx); });
		
		for (var i = 0; i < this.disparos.length; i++) {
			var element = this.disparos[i];
			element.mover();
		}
		for (var i = 0; i < this.disparosEnemigos.length; i++) {
			var element = this.disparosEnemigos[i];
			element.mover();
		}
	}


	this.mostrarBarrasEnergia = function(ctx){
		// dibujar rect para la energia del jugador
		//var porcentajeEnergiaEnemigo = this.robotEnemigo.energia/100.0;
		if(this.jugador){
			this.jugador.barraDeVida(ctx);
		}
		// dibujar rect para la energia del robot enemigo
		if(this.robotEnemigo){
			this.robotEnemigo.barraDeVida(ctx);
		}
	}
}