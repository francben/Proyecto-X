var canvas = document.getElementById('juego');
var ctx = canvas.getContext('2d');
var fondo;

function loadMedia(){
	fondo = new Image();
	fondo.src = 'img2.jpg';	
	fondo.onload = function(){
		var intervalo = window.setInterval(frameloop,1000/55);
	}

}
function dibujarfondo(){
	ctx.drawImage(fondo,0,0);
}

function frameloop(){
	dibujarfondo();
}
//Ejecucion de funcines
loadMedia();