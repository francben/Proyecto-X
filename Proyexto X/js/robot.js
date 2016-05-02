function robot() {
    var canvas = document.getElementById('container');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = '#000';
        ctx.fillStyle = '#fff';

/*--------------------------brazo derecho------------------------------*/
        
        ctx.beginPath();
        ctx.bezierCurveTo(210, 110, 217, 105, 218, 95);
        ctx.lineTo(214,90);
        ctx.bezierCurveTo(214, 90, 200, 85, 190, 100);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        
        ctx.beginPath();
        ctx.bezierCurveTo(200, 115, 217, 180, 210, 215);
        ctx.bezierCurveTo(210, 215, 197, 225, 160, 215);
        ctx.bezierCurveTo(160, 215, 150, 180, 185, 110);
        ctx.stroke();
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(202,220);
        ctx.lineTo(187,245);
        ctx.lineTo(169,220);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        
        ctx.beginPath();
        ctx.bezierCurveTo(165, 217, 180, 223, 207, 217);
        ctx.lineTo(207,225);
        ctx.bezierCurveTo(207, 225, 190, 235, 165, 225);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        
        ctx.beginPath();
        ctx.bezierCurveTo(195, 115, 184, 180, 190, 221);
        ctx.bezierCurveTo(190, 221, 185, 224, 180, 221);
        ctx.bezierCurveTo(180, 221, 174, 180, 190, 115);
        ctx.stroke();
        ctx.fill();
        
        ctx.beginPath();
        ctx.bezierCurveTo(188, 93, 209, 93, 217, 107);
        ctx.bezierCurveTo(217, 107, 216, 120, 206, 125);
        ctx.bezierCurveTo(206, 125, 199, 115, 179, 112);
        ctx.bezierCurveTo(179, 112, 177, 102, 188, 93); 252
        ctx.stroke();
        ctx.fill();
        
/*--------------------------cabeza----------------------------------*/
        
        ctx.beginPath();
        ctx.bezierCurveTo(250, 10, 270, 25, 275, 45);
        ctx.lineTo(250,50);
        ctx.bezierCurveTo(225, 45, 230, 25, 250, 10);
        ctx.lineTo(250,50);
        ctx.stroke();
        ctx.fill();
        
        ctx.beginPath();
        ctx.bezierCurveTo(225, 45, 230, 25, 250, 10);
        ctx.lineTo(250,50);
        ctx.stroke();
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(219,80);
        ctx.lineTo(211,105);
        ctx.lineTo(289,105);
        ctx.lineTo(281,80);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(223,59);
        ctx.lineTo(217,80);
        ctx.lineTo(225,105);
        ctx.bezierCurveTo(225, 105, 250, 120, 275, 105);
        ctx.lineTo(283,80);
        ctx.lineTo(277,59);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(225,45);
        ctx.lineTo(275,45);
        ctx.lineTo(279,57);
        ctx.lineTo(250,72);
        ctx.lineTo(221,57);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(265,61);
        ctx.lineTo(265,68);
        ctx.lineTo(250,75);
        ctx.lineTo(235,68);
        ctx.lineTo(235,61);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(250,75);
        ctx.lineTo(250,67);
        ctx.moveTo(246,67);
        ctx.lineTo(246,73);
        ctx.moveTo(254,67);
        ctx.lineTo(254,73);
        ctx.stroke();
        
/*---------------------------ojos-------------------------------*/

        context.beginPath();
        context.moveTo(220,45);
        context.lineTo(280,45);
        context.lineTo(265,51);
        context.lineTo(235,51);
        context.closePath();
        context.stroke();
        context.fill();
        
/*--------------------------------------------------------------*/
        
        context.beginPath();
        context.moveTo(250,58);
        context.lineTo(262,45);
        context.lineTo(238,45);
        context.closePath();
        context.stroke();
        context.fill();
        
        
/*---------------------------cuerpo------------------------------*/
        
        context.beginPath();
        context.bezierCurveTo(195, 160, 192, 180, 190, 205);
        context.bezierCurveTo(190, 205, 250, 242, 310, 205);
        context.bezierCurveTo(310, 205, 310, 195, 305, 160);
        context.stroke();
        context.fill();
        
        context.beginPath();
        context.bezierCurveTo(208, 95, 250, 120, 292, 95);
        context.bezierCurveTo(292, 100, 302, 120, 305, 165);
        context.lineTo(265,221);
        context.lineTo(235,221);
        context.lineTo(195,165);
        context.bezierCurveTo(195, 165, 192, 145, 208, 95);
        context.stroke();context.stroke();
        context.fill();
        
        context.beginPath();
        context.moveTo(265,105);
        context.lineTo(250,125);
        context.lineTo(235,105);
        context.bezierCurveTo(235, 105, 250, 108, 265, 105);
        context.stroke();
        context.fill();
        
        context.beginPath();
        context.moveTo(250,125);
        context.lineTo(250,223);
        context.stroke();
        
        context.beginPath();
        context.moveTo(240,235);
        context.lineTo(225,253);
        context.lineTo(215,238);
        context.moveTo(260,235);
        context.lineTo(275,253);
        context.lineTo(285,238);
        context.stroke();
        context.fill();
        
        context.beginPath();
        context.moveTo(209,223);
        context.lineTo(209,235);
        context.bezierCurveTo(209, 235, 225, 245, 245, 236);
        context.lineTo(245,223);
        context.moveTo(255,223);
        context.lineTo(255,236);
        context.bezierCurveTo(255, 236, 270, 245, 291, 235);
        context.lineTo(291,223);
        context.stroke();
        context.fill();
        
        context.beginPath();
        context.bezierCurveTo(200, 210, 250, 237, 300, 210);
        context.bezierCurveTo(300, 210, 310, 218, 295, 224);
        context.bezierCurveTo(295, 223, 250, 240, 205, 223);
        context.bezierCurveTo(205, 223, 195, 220, 200, 210);
        context.stroke();
        context.fill();
        
/*--------------------------brazo izquiedo------------------------------------*/
        
        context.beginPath();
        context.bezierCurveTo(290, 110, 284, 105, 283, 95);
        context.lineTo(285,90);
        context.bezierCurveTo(285, 90, 300, 85, 310, 100);
        context.closePath();
        context.stroke();
        context.fill();
        
        context.beginPath();
        context.bezierCurveTo(301, 115, 285, 180, 290, 215);
        context.bezierCurveTo(295, 215, 310, 225, 340, 215);
        context.bezierCurveTo(340, 215, 345, 180, 317, 110);
        context.stroke();
        context.fill();
        
        context.beginPath();
        context.moveTo(332,220);
        context.lineTo(317,245);
        context.lineTo(299,220);
        context.closePath();
        context.stroke();
        context.fill();
        
        context.beginPath();
        context.bezierCurveTo(295, 217, 310, 223, 337, 217);
        context.lineTo(337,225);
        context.bezierCurveTo(337, 225, 320, 235, 295, 225);
        context.closePath();
        context.stroke();
        context.fill();
        
        context.beginPath();
        context.bezierCurveTo(310, 115, 321, 180, 320, 221);
        context.bezierCurveTo(320, 221, 315, 224, 310, 221);
        context.bezierCurveTo(310, 221, 314, 180, 305, 115);
        context.stroke();
        context.fill();
        
        ctx.beginPath();
        ctx.bezierCurveTo(313, 93, 292, 93, 284, 107);
        ctx.bezierCurveTo(284, 107, 285, 125, 295, 125);
        ctx.bezierCurveTo(295, 125, 305, 115, 322, 112);
        ctx.bezierCurveTo(322, 112, 325, 102, 313, 93);
        ctx.stroke();
        ctx.fill();
        
        ctx.beginPath();
        ctx.bezierCurveTo(313, 93, 292, 93, 284, 107);
        ctx.bezierCurveTo(284, 107, 285, 125, 295, 125);
        ctx.bezierCurveTo(295, 125, 305, 115, 322, 112);
        ctx.bezierCurveTo(322, 112, 325, 102, 313, 93);
        ctx.stroke();
        ctx.fill();
        
    } 
}
window.onload = robot;