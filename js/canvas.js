const POINT_COLOR = 'darkgreen';
const POINT_COLOR_SELECTED = 'darkcyan';
const POINT_TEXT_COLOR = '#ddd';

const LINE_COLOR = '#ababab';
const LINE_COLOR_SELECTED = 'darkgreen';
const LINE_TEXT_COLOR = '#ababab';
const LINE_BACKGROUND_CIRCLE = 'gray';

const CANVAS_BACKGROUND = 'gray';

function draw(){

    resize();

    let ctx = document.getElementById("myCanvas").getContext('2d');
    ctx.font = "bold 15px Arial";

    lines.forEach(function(line){

        ctx.strokeStyle = line[3] ? line[3] : LINE_COLOR;
        ctx.beginPath();
        ctx.moveTo(line[0].pageX, line[0].pageY);
        ctx.lineTo(line[1].pageX, line[1].pageY);
        ctx.stroke();

    })
    
    lines.forEach(function(line){

        let x = (line[0].pageX + line[1].pageX) / 2;
        let y = (line[0].pageY + line[1].pageY) / 2;

        ctx.beginPath();
        ctx.fillStyle = LINE_BACKGROUND_CIRCLE;
        ctx.arc(x, y,  ( parseFloat(line[2]) > 9 ? 12 : 10 ), 0, 2 * Math.PI);
        ctx.fill();

    })
    
    lines.forEach(function(line){

        let x = (line[0].pageX + line[1].pageX - ( parseFloat(line[2]) > 9 ? 16 : 8 )) / 2;
        let y = (line[0].pageY + line[1].pageY + 8) / 2;

        ctx.beginPath();
        ctx.fillStyle = line[3] ? line[3] : LINE_TEXT_COLOR;
        ctx.fillText(line[2], x, y);

    });

    points.forEach(function(e, k){

        ctx.beginPath();
        ctx.fillStyle = e.pointColor;
        ctx.arc(e.pageX, e.pageY, 12, 0, 2 * Math.PI)
        ctx.fill();
        ctx.fillStyle = POINT_TEXT_COLOR;

        e.name = k + 1;
        ctx.fillText(e.name, e.pageX - (k >= 9 ? 8 : 4), e.pageY + 5);

    });

    $('.btn-busca').attr('disabled', !lines.length);

}

function resize(){

    let canvas = document.getElementById("myCanvas");
    canvas.width = document.body.clientWidth - 30;
    canvas.height = document.body.clientHeight - 30;

}

function clearWindow(removeAll = false, clearAux = true){

    if(clearAux) aux = null;

    hideMessage();

    if(removeAll){
        points = [];
        lines = [];
    }

    points.forEach(function(point){
        point.pointColor = POINT_COLOR;
    });

    lines.forEach(function(line){
        line[3] = LINE_TEXT_COLOR;
    });

    draw();

}

