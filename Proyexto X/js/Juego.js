
var g_niveles = [];
var g_nivelActual = null;  // lee el nivel del arreglo g_niveles

var g_canvas = null;
var g_context = null;

var g_playing = false;
var g_numNivelActual = 0;
var g_teclado= {};

function init(){
	var nivel1 = new Nivel();
	var nivel2 = new Nivel();
	var nivel3 = new Nivel();
	var nivel4 = new Nivel();
	var nivel5 = new Nivel();
	var nivel6 = new Nivel();
	

	var g_canvas = $("#myCanvas"); 
    g_context = g_canvas.get(0).getContext("2d");
    g_canvas.attr("width", $(window).get(0).innerWidth);
    g_canvas.attr("height", $(window).get(0).innerHeight);
   

	

	// diseño/configuracion de nivel 1
	nivel1.fondo = new Fondo1(0,0,g_canvas.width(),g_canvas.height());
	nivel1.jugador = new RobotV1_1(g_canvas.width()*0.8,g_canvas.height()*0.59, g_canvas.width()*0.2, g_canvas.height()*0.25);
	nivel1.robotEnemigo = new RobotXero(g_canvas.width()*0.02,g_canvas.height()*0.38,g_canvas.width()*0.4,g_canvas.height()*0.5);

	//nivel1.elementos.push(new ArmaEstandar(g_pos.x*1.05,g_pos.y*1.09,g_canvas.width()*0.05, g_canvas.height()*0.13));
	//nivel1.elementos.push(new Obtaculo(........));


	// diseño de nivel 2
	nivel2.fondo = new Fondo2(0,0,g_canvas.width(),g_canvas.height());
	nivel2.jugador = new RobotV1_2(g_canvas.width()*0.8,g_canvas.height()*0.55, g_canvas.width()*0.2, g_canvas.height()*0.25);
	nivel2.robotEnemigo = new Viper1(g_canvas.width()*0.1,g_canvas.height()*0.28,g_canvas.width()*0.2,g_canvas.height()*0.3);

	//nivel2.elementos.push(new Obtaculo(........));}
	//nivel2.elementos.push(new Obtaculo(........));
	

	// diseño de nivel 3
	nivel3.fondo = new Fondo3(0,0,g_canvas.width(),g_canvas.height());
	nivel3.jugador = new RobotV1_3(g_canvas.width()*0.8,g_canvas.height()*0.55, g_canvas.width()*0.2, g_canvas.height()*0.25);
	nivel3.robotEnemigo = new Tiger(g_canvas.width()*0.2,g_canvas.height()*0.4,g_canvas.width()*0.07,g_canvas.height()*0.15);

	//nivel3.elementos.push(new Obtaculo(........));}
	//nivel3.elementos.push(new Obtaculo(........));
		

	// diseño de nivel 4
	nivel4.fondo = new Fondo4(0,0,g_canvas.width(),g_canvas.height());
	nivel4.jugador = new RobotV1_4(g_canvas.width()*0.8,g_canvas.height()*0.55, g_canvas.width()*0.2, g_canvas.height()*0.25);
	nivel4.robotEnemigo = new RobotRocket(g_canvas.width()*0.1,g_canvas.height()*0.1,g_canvas.width()*0.3,g_canvas.height()*0.41);

	//nivel4.elementos.push(new Obtaculo(........));}
	//nivel4.elementos.push(new Obtaculo(........));

	// diseño de nivel 5
	nivel5.fondo = new Fondo5(0,0,g_canvas.width(),g_canvas.height());
	nivel5.jugador = new RobotV1_5(g_canvas.width()*0.8,g_canvas.height()*0.55, g_canvas.width()*0.2, g_canvas.height()*0.25);
	nivel5.robotEnemigo = new Alpha(g_canvas.width()*0.1,g_canvas.height()*0.1,g_canvas.width()*0.3,g_canvas.height()*0.41);

	//nivel5.elementos.push(new Obstaculo(........));}
	//nivel5.elementos.push(new Obstaculo(........));
	
	g_niveles.push(nivel1);
	g_niveles.push(nivel2);
	g_niveles.push(nivel3);
	g_niveles.push(nivel4);
	g_niveles.push(nivel5);
	//g_niveles.push(nivel6);
	//
	g_nivelActual = g_niveles[g_numNivelActual];


	//g_canvas = OBTNER CANVAS;
	//g_context = g_canvas.getContext("2d");
	
	AgregarEventeclado();
}

function startGame(){

	g_playing = true;

	//mostrarPantallaNivel();

	// loop de animacion y dibujoS
	animar();
}

function animar(){
	// borrar canvas
	// dibujar - llamar metodo en nivel actual
	
	
	g_nivelActual.dibujar(g_context);
	g_nivelActual.jugador.arma.dibujar(g_context);
	g_nivelActual.robotEnemigo.arma.dibujar(g_context);
	moverRobot();
	dispararArmaJugador();
	moverDisparoArmaJugador();
	// detectar las colisiones
	verificarContacto();
	//preguntar si seguir animando

	if (g_teclado[80]){
		g_playing=false;
		console.log("EN PAUSA");
	}
	if(g_playing){
		setTimeout(animar, 30);
	}

}

function moverRobot(){
	if(g_teclado[37]){
		g_nivelActual.jugador.x-=g_nivelActual.jugador.velocidad;
		g_nivelActual.jugador.arma.x-=g_nivelActual.jugador.velocidad;
		g_nivelActual.jugador.arma.tipoProyectil.x-=g_nivelActual.jugador.velocidad;
	}
	if(g_teclado[39]){
		g_nivelActual.jugador.x+=g_nivelActual.jugador.velocidad;
		g_nivelActual.jugador.arma.x+=g_nivelActual.jugador.velocidad;
		g_nivelActual.jugador.arma.tipoProyectil.x+=g_nivelActual.jugador.velocidad;
		var limite = 1000;
		if(g_nivelActual.jugador.x>limite){
			g_nivelActual.jugador.X=limite;
			console.log("paso");
		}	
	}
	if(g_teclado[88]){
		if(!g_teclado.g_nivelActual){
			disparo = g_nivelActual.jugador.disparar(g_nivelActual);
			g_teclado.g_nivelActual =true;

		}

	}
	else g_teclado.g_nivelActual = false;
}


function avanzarNivel(){
	g_numNivelActual++;
	g_nivelActual = g_niveles[g_numNivelActual];

	mostrarPantallaNivel();
}


function mostrarPantallaNivel(){
	// se muestra el mensaje de nivel actual por jugar

	// probablemente llamar a startGame()
}
function verificarContacto(){
	for (var i in g_nivelActual.elementos) {
		var disparo = g_nivelActual.elementos[i];
		var enemigo = g_nivelActual.robotEnemigo;
		if(hit(disparo,enemigo)){
			console.log("hubo contacto");
			g_nivelActual.elementos = g_nivelActual.elementos.filter(function(disparo){
				return false;	
				});
		}
	}
	function hit(){
		var contacto = false;
		if (enemigo.x + enemigo.w/1.5 >= disparo.x && enemigo.x < disparo.x +disparo.w) {
			if (enemigo.y + enemigo.h >= disparo.y && enemigo.y < disparo.y + disparo.h) {
			contacto = true;
			}
		}
		if (enemigo.x <= disparo.x && enemigo.x + enemigo.w/1.5 >= disparo.x + disparo.w) {
			if (enemigo.y <= disparo.y && enemigo.y + enemigo.h >= disparo.y + disparo.h) {
				contacto = true;
			}
		}
		if (disparo.x <= enemigo.x && disparo.x + disparo.w >= enemigo.x + enemigo.w/1.5) {
			if (disparo.y <= enemigo.y && disparo.y + disparo.h >= enemigo.y + enemigo.h) {
				contacto = true;
			}
		}
		return contacto; 	
		/*if (contacto) {
			console.log("hubo contacto");
			 
			
		}*/
			
	}
	
}


// llamar esta funcion al presionar tecla para disparar arma del robot jugador
function dispararArmaJugador(){
	for(var i in g_nivelActual.elementos){	
		var disparo = g_nivelActual.elementos[i];
		g_nivelActual.jugador.arma.tipoProyectil = new BalaEnergia(g_nivelActual.jugador.arma.x*1,g_nivelActual.jugador.arma.y*1.04,g_nivelActual.jugador.arma.w*0.4,g_nivelActual.jugador.arma.h*0.4);
	}
}
function moverDisparoArmaJugador(){
	for(var i in g_nivelActual.elementos){
		var disparo = g_nivelActual.elementos[i];
		disparo.x-=disparo.velocidad;
	}
	g_nivelActual.elementos = g_nivelActual.elementos.filter(function(disparo){
		return disparo.x > 0;
	});
}

function AgregarEventeclado(){
	agregar(document,"keydown",function(e){
		g_teclado[e.keyCode] = true;
		//Muestra el numero de la tecla presionada
		//console.log(e.keyCode);
	});
	agregar(document,"keyup",function(e){
		g_teclado[e.keyCode] = false;
	});
	function agregar(elemen,nombre,funcion){
		if(elemen.addEventListener){
			elemen.addEventListener(nombre,funcion,false);
		}else if(elemen.attachEvent){
			elemen.attachEvent(nombre,funcion);
		}
	}
}