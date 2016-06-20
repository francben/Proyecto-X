var disparos = 5;
var vida = 5;

function delayMensaje() {
    window.setTimeout(reset, 2000);
}

function reset() {
    disparos = 5;
    vida = 5;
    $('#empezar').click();
}

function Disparar() {
    if (disparos >= 1) {
        disparos -= 1;
        vida -= 1;
        console.log(disparos);
    }
}

function ImpactoBala() {
    if (vida >= 5) {
        vida -= 1;
        console.log(vida);
    }
}
$('a#set').on('click', function() {
    //alert(disparos);
    if (disparos == 0) {
        $('#sinmunicion').click();
        delayMensaje();
    } else if (disparos > 5) {
        $('#ganaste').click();
    } else if (disparos < 5) {
        if (disparos > 0) {
            $('#disparar').click();
        } else {
            $('#empezar').click();
        }
    }
})