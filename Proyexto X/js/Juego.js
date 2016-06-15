
var g_niveles = [];
var g_nivelActual = null;  // lee el nivel del arreglo g_niveles

var g_canvas = null;
var g_context = null;

var g_playing = false;
var g_numNivelActual = 0;
var g_teclado= {};
var g_x = 0;


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
	nivel1.jugador = new RobotV1_1(g_x+g_canvas.width()*0.8,g_canvas.height()*0.59, g_canvas.width()*0.2, g_canvas.height()*0.25);
	nivel1.robotEnemigo = new RobotXero(g_canvas.width()*0.01,g_canvas.height()*0.1,g_canvas.width()*0.49,g_canvas.height()*0.8);

	//nivel1.elementos.push(new Obtaculo(........));}
	//nivel1.elementos.push(new Obtaculo(........));


	// diseño de nivel 2
	nivel2.fondo = new Fondo2(0,0,g_canvas.width(),g_canvas.height());
	nivel2.jugador = new RobotV1_1(g_canvas.width()*0.8,g_canvas.height()*0.55, g_canvas.width()*0.2, g_canvas.height()*0.25);
	nivel2.robotEnemigo = new RobotXero(g_canvas.width()*0.1,g_canvas.height()*0.1,g_canvas.width()*0.3,g_canvas.height()*0.41);

	//nivel2.elementos.push(new Obtaculo(........));}
	//nivel2.elementos.push(new Obtaculo(........));
	

	// diseño de nivel 3
	nivel3.fondo = new Fondo3(0,0,g_canvas.width(),g_canvas.height());
	nivel3.jugador = new RobotV1_1(g_canvas.width()*0.8,g_canvas.height()*0.55, g_canvas.width()*0.2, g_canvas.height()*0.25);
	nivel3.robotEnemigo = new RobotXero(g_canvas.width()*0.1,g_canvas.height()*0.1,g_canvas.width()*0.3,g_canvas.height()*0.41);

	//nivel3.elementos.push(new Obtaculo(........));}
	//nivel3.elementos.push(new Obtaculo(........));
		

	// diseño de nivel 4
	nivel4.fondo = new Fondo4(0,0,g_canvas.width(),g_canvas.height());
	nivel4.jugador = new RobotV1_1(g_canvas.width()*0.8,g_canvas.height()*0.55, g_canvas.width()*0.2, g_canvas.height()*0.25);
	nivel4.robotEnemigo = new RobotXero(g_canvas.width()*0.1,g_canvas.height()*0.1,g_canvas.width()*0.3,g_canvas.height()*0.41);

	//nivel4.elementos.push(new Obtaculo(........));}
	//nivel4.elementos.push(new Obtaculo(........));

	// diseño de nivel 5
	nivel5.fondo = new Fondo5(0,0,g_canvas.width(),g_canvas.height());
	nivel5.jugador = new RobotV1_1(g_canvas.width()*0.8,g_canvas.height()*0.55, g_canvas.width()*0.2, g_canvas.height()*0.25);
	nivel5.robotEnemigo = new RobotXero(g_canvas.width()*0.1,g_canvas.height()*0.1,g_canvas.width()*0.3,g_canvas.height()*0.41);

	//nivel5.elementos.push(new Obstaculo(........));}
	//nivel5.elementos.push(new Obstaculo(........));
	
	g_niveles.push(nivel1);
	g_niveles.push(nivel2);
	g_niveles.push(nivel3);
	g_niveles.push(nivel4);
	g_niveles.push(nivel5);
	g_niveles.push(nivel6);
	//
	g_nivelActual = g_niveles[g_numNivelActual];


	//g_canvas = OBTNER CANVAS;
	//g_context = g_canvas.getContext("2d");
	AgregarEventeclado();
	moverRobot();
}

function startGame(){

	g_playing = true;

	//mostrarPantallaNivel();

	// loop de animacion y dibujo
	
	animar();
}

function animar(){
	// borrar canvas
	// dibujar - llamar metodo en nivel actual
	
		g_nivelActual.dibujar(g_context);
	
	// mover elementos - llamar metodo en nivel actual
	for(var i=0; i<g_nivelActual.length; i++){
		var a = g_nivelActual[i]
		a.dibujar(g_context);
		console.log(a);
	}
	// detectar las colisiones

	//preguntar si seguir animando
	if(g_playing){
		setTimeout(animar, 1000/55);		
	}
}

function moverRobot(){
	if(g_teclado[37]){
		g_x-=10;
	}
	if(g_teclado[39]){
		g_x+=10;
		var limite = g_canvas.width() - g_canvas.width()*0.2
		if(g_x>limite) g_x=limite;
	}
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

function AgregarEventeclado(){
	agregar(document,"keydown",function(e){
		g_teclado[e.keyCode] = true;
		console.log(e.keyCode);
	});
	agregar(document,"keyup",function(e){
		g_teclado[e.keyCode] = false;
	});
	function agregar(elemen,nombre,funcion){
		elemen.addEventListener(nombre,funcion,false)
	}
}




