
var g_niveles = [];
var g_nivelActual = null;  // lee el nivel del arreglo g_niveles

var g_canvas = null;
var g_context = null;

var g_playing = false;


function init(){
	var nivel1 = new Nivel();
	var nivel2 = new Nivel();
	var nivel3 = new Nivel();
	var nivel4 = new Nivel();
	var nivel5 = new Nivel();
	var nivel6 = new Nivel();



	// diseño/configuracion de nivel 1
	nivel1.fondo = new Fondo1();
	nivel1.jugador = new RobotV1_1( ........ );
	nivel1.robotEnemigo = new RobotXero( ......... );

	nivel1.elementos.push(new Obtaculo(........));}
	nivel1.elementos.push(new Obtaculo(........));


	// diseño de nivel 2
	nivel2.fondo = new Fondo2();
	nivel2.jugador = new RobotV1_1( ........ );
	nivel2.robotEnemigo = new RobotXero( ......... );

	nivel2.elementos.push(new Obtaculo(........));}
	nivel2.elementos.push(new Obtaculo(........));
	

	// diseño de nivel 3
	nivel3.fondo = new Fondo2();
	nivel3.jugador = new RobotV1_1( ........ );
	nivel3.robotEnemigo = new RobotXero( ......... );

	nivel3.elementos.push(new Obtaculo(........));}
	nivel3.elementos.push(new Obtaculo(........));
		

	// diseño de nivel 4
	// ..... completar otros niveles

	// diseño de nivel 5
	

	g_niveles.push(nivel1);
	g_niveles.push(nivel2);
	g_niveles.push(nivel3);
	g_niveles.push(nivel4);
	g_niveles.push(nivel5);
	g_niveles.push(nivel6);



	g_nivelActual = g_nivelActual[g_numNivelActual];


	g_canvas = OBTNER CANVAS;
	g_context = g_canvas.getContext("2d");
}

function startGame(){

	g_playing = true;

	mostrarPantallaNivel();

	// loop de animacion y dibujo
	animar();
}

function animar(){

	// borrar canvas
	// dibujar - llamar metodo en nivel actual
	g_nivelActual.dibujar(g_context);

	// mover elementos - llamar metodo en nivel actual
	// detectar las colisiones

	//preguntar si seguir animando
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


// llamar esta funcion al presionar tecla para disparar arma del robot jugador
function dispararArmaJugador(){
	g_nivelActual.jugador.disparar(g_nivelActual);
}




function frameloop(){
	dibujarfondo();
}
//Ejecucion de funcines
loadMedia();