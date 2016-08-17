
var g_niveles = [];
var g_nivelActual = null;  // lee el nivel del arreglo g_niveles

var g_canvas = null;
var g_context = null;

var g_playing = false;
var g_numNivelActual = 0;
var g_teclado= {};
var g_sonido;
function init(){
	var nivel1 = new Nivel();
	var nivel2 = new Nivel();
	var nivel3 = new Nivel();
	var nivel4 = new Nivel();
	var nivel5 = new Nivel();
	var nivel6 = new Nivel();

	
	g_sonido = document.createElement('audio');
	document.body.appendChild(g_sonido);
	g_sonido.setAttribute('src','sounds/laserSpace.wav');
	ion.sound({
		sounds:[
		{name:"pistolalaser",volumen: 0.9,preload:false},
		{name:"move1", volumen: 0.3,preload:false}],
		path:"sounds/",preload:true,multiplayer:true


	});
	

	g_canvas = $("#myCanvas"); 
    g_context = g_canvas.get(0).getContext("2d");
    g_canvas.attr("width", $(window).get(0).innerWidth);
    g_canvas.attr("height", $(window).get(0).innerHeight);
   

	

	// diseño/configuracion de nivel 1
	nivel1.fondo = new Fondo1(0,0,g_canvas.width(),g_canvas.height());
	nivel1.jugador = new RobotV1_1(g_canvas.width()*0.8,g_canvas.height()*0.59, g_canvas.width()*0.2, g_canvas.height()*0.25);
	nivel1.robotEnemigo = new RobotXero(g_canvas.width()*0.02,g_canvas.height()*0.38,g_canvas.width()*0.4,g_canvas.height()*0.5);

	//nivel1.disparos.push(new ArmaEstandar(g_pos.x*1.05,g_pos.y*1.09,g_canvas.width()*0.05, g_canvas.height()*0.13));
	//nivel1.disparos.push(new Obtaculo(........));


	// diseño de nivel 2
	nivel2.fondo = new Fondo2(0,0,g_canvas.width(),g_canvas.height());
	nivel2.jugador = new RobotV1_2(g_canvas.width()*0.8,g_canvas.height()*0.55, g_canvas.width()*0.2, g_canvas.height()*0.25);
	nivel2.robotEnemigo = new Viper1(g_canvas.width()*0.1,g_canvas.height()*0.28,g_canvas.width()*0.2,g_canvas.height()*0.3);

	//nivel2.disparos.push(new Obtaculo(........));}
	//nivel2.disparos.push(new Obtaculo(........));
	

	// diseño de nivel 3
	nivel3.fondo = new Fondo3(0,0,g_canvas.width(),g_canvas.height());
	nivel3.jugador = new RobotV1_3(g_canvas.width()*0.8,g_canvas.height()*0.55, g_canvas.width()*0.2, g_canvas.height()*0.25);
	nivel3.robotEnemigo = new Tiger(g_canvas.width()*0.2,g_canvas.height()*0.4,g_canvas.width()*0.07,g_canvas.height()*0.15);

	//nivel3.disparos.push(new Obtaculo(........));}
	//nivel3.disparos.push(new Obtaculo(........));
		

	// diseño de nivel 4
	nivel4.fondo = new Fondo4(0,0,g_canvas.width(),g_canvas.height());
	nivel4.jugador = new RobotV1_4(g_canvas.width()*0.8,g_canvas.height()*0.55, g_canvas.width()*0.2, g_canvas.height()*0.25);
	nivel4.robotEnemigo = new RobotRocket(g_canvas.width()*0.1,g_canvas.height()*0.48,g_canvas.width()*0.4,g_canvas.height()*0.48);

	//nivel4.disparos.push(new Obtaculo(........));}
	//nivel4.disparos.push(new Obtaculo(........));

	// diseño de nivel 5
	nivel5.fondo = new Fondo5(0,0,g_canvas.width(),g_canvas.height());
	nivel5.jugador = new RobotV1_5(g_canvas.width()*0.8,g_canvas.height()*0.55, g_canvas.width()*0.2, g_canvas.height()*0.25);
	nivel5.robotEnemigo = new Alpha(g_canvas.width()*0.05,g_canvas.height()*0.25,g_canvas.width()*0.3,g_canvas.height()*0.35);

	//nivel5.disparos.push(new Obstaculo(........));}
	//nivel5.disparos.push(new Obstaculo(........));
	// diseño de nivel 6
	nivel6.fondo = new Fondo6(0,0,g_canvas.width(),g_canvas.height());
	
	g_niveles.push(nivel1);
	g_niveles.push(nivel2);
	g_niveles.push(nivel3);
	g_niveles.push(nivel4);
	g_niveles.push(nivel5);
	g_niveles.push(nivel6);
	//
	g_nivelActual = g_niveles[g_numNivelActual];
	
	AgregarEventeclado();
	reanudar();
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
	if(g_nivelActual.jugador){
		g_nivelActual.jugador.arma.dibujar(g_context);
	}
	if(!g_nivelActual.robotEnemigo.muerto){
		//g_nivelActual.robotEnemigo.arma.dibujar(g_context);
	}else g_nivelActual.robotEnemigo.y = -500;
	eventosRobot();
	eventosRobotEnemigo();
	// detectar las colisiones
	verificarContacto();

	
	//preguntar si seguir animando
	g_nivelActual.mover();
	if (g_teclado[80]){
		g_playing=false;
		reanudar();
	}else g_teclado.g_nivelActual = false;
	if(g_playing){
		setTimeout(animar, 30);
	}

}

function eventosRobot(){
	//mueve izquierda
	if(g_teclado[37]){
		g_nivelActual.jugador.moverIzquierda();
		//ion.sound.play("move1");
	}
	//mueve derecha
	if(g_teclado[39]){
		g_nivelActual.jugador.moverDerecha(g_canvas.width());
	}
	//dispara arma con tecla x
	if(g_teclado[88]){
		if(!g_teclado.g_nivelActual){
			g_sonido.pause();
			g_sonido.currentTime = 0;
			g_sonido.play();
			disparo = g_nivelActual.jugador.disparar(g_nivelActual);
			g_teclado.g_nivelActual =true;
		}

	}else g_teclado.g_nivelActual = false;

	if(g_nivelActual.jugador){
		if(g_nivelActual.jugador.x<=0){
			avanzarNivel();
		}
	}
}
function reanudar(){
	if(g_teclado[13]){	
		animar();
		g_playing=true;
	
	}
}
function eventosRobotEnemigo(){
	//disparos enemigos
	if(g_nivelActual.robotEnemigo){
	if(!g_nivelActual.robotEnemigo.muerto){
	 if(aleatorio(0,10)==4){
	 	g_nivelActual.robotEnemigo.disparar(g_nivelActual);
	 }
	}
}
}
function aleatorio(a,b){
	var posi = b-a;
	var r = Math.random() * posi;
	r = Math.floor(r);
	return parseInt(a) + r;
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
	if(g_nivelActual.robotEnemigo){
		var jugador= g_nivelActual.jugador;
		var enemigo = g_nivelActual.robotEnemigo;
		if(jugador.colisiona(enemigo)){
			jugador.x=enemigo.x+enemigo.w;
			jugador.arma.x=jugador.x;
			jugador.daños(g_nivelActual.robotEnemigo.arma.dañoArma);
		}
	}
	for (var i in g_nivelActual.disparos) {
		var disparo = g_nivelActual.disparos[i];
		var enemigo = g_nivelActual.robotEnemigo;
		if(disparo.colisiona(enemigo)){
			disparo.exploto=true;
			g_nivelActual.robotEnemigo.daños(g_nivelActual.jugador.arma.dañoArma);
		}
		
	}
	for (var i in g_nivelActual.disparosEnemigos){
		var disparoEnemigo = g_nivelActual.disparosEnemigos[i];
		for (j in g_nivelActual.disparos){
			var disparo = g_nivelActual.disparos[j];
		if(disparoEnemigo.colisiona(disparo)){
			disparoEnemigo.exploto=true;
			disparo.exploto=true;
		}
		}
		
	}
	for (var i in g_nivelActual.disparosEnemigos) {
		var disparoEnemigo = g_nivelActual.disparosEnemigos[i];
		var robot = g_nivelActual.jugador;
		if(disparoEnemigo.colisiona(robot)){
			disparoEnemigo.exploto=true;
			g_nivelActual.jugador.daños(g_nivelActual.robotEnemigo.arma.dañoArmaEnemigo);
		}
		
	}
	g_nivelActual.disparos = g_nivelActual.disparos.filter(function(d){
				return !d.exploto;
			});
	g_nivelActual.disparosEnemigos = g_nivelActual.disparosEnemigos.filter(function(de){
		return !de.exploto;
	});
	g_nivelActual.disparos = g_nivelActual.disparos.filter(function(a){
				return a.x > 0;
			});

}
// llamar esta funcion al presionar tecla para disparar arma del robot jugador
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