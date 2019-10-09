function insertPoint(e){

    clearWindow();

    e.pointColor = POINT_COLOR;

    if(getPointsInArea(e).length){
        showMessage("Já existe uma aresta nessa área!");
        return;
    }

    if(getLinesInArea(e, 20).length){
        showMessage("Já existe um vértice nessa área!");
        return;
    }

    points.push(e);
    draw();

}

function insertLine(e){

    clearWindow(false, false);

    let element = getElementAtPosition(e);

    if(element.length === 1){

        if(aux !== null && element[0] != aux){

            if(getLineBetweenPoints(element[0], aux).length){
                showMessage("Já existe uma linha entre esses pontos");
                aux = null;
                return false;
            }

            element[0].pointColor = POINT_COLOR;
            aux.pointColor = POINT_COLOR;
            let peso = prompt("Informe o peso dessa aresta");
            
            if(!peso || peso == 0 || isNaN(peso)){
            
                aux = null;

            } else {

                lines.push([element[0], aux, peso]);
                aux = null;

                if($('#manter-selecao').prop('checked')){

                    element[0].pointColor = POINT_COLOR_SELECTED;
                    aux = element[0];

                }

            }

        } else {

            element[0].pointColor = POINT_COLOR_SELECTED;
            aux = element[0];

        }

        draw();

    } else { 

        aux = null;

    }

}

function removeSelectionLine(){

    aux.pointColor = POINT_COLOR;
    clearWindow();

}

function removePointOrLines(e){

    clearWindow();

    let point = getPointsInArea(e, 12)[0];

    if(point){

        getLinesWithPoint(point).forEach(function(line){

            lines = _.without(lines, line);

        });

        points = _.without(points, point);

    } else {

        lines = _.without(lines, ...getLinesInArea(e));

    }

    draw();

}

function getPointsInArea(e, area = 40){

    return _.filter(points, function(point){

        if(e.pageX >= point.pageX - area && e.pageX <= point.pageX + area){

            return e.pageY >= point.pageY - area && e.pageY <= point.pageY + area;

        }

        return false;

    });

}

function getLinesInArea(e, area = 10){

    return _.filter(lines, function(line){

        let x = (line[0].pageX + line[1].pageX) / 2;
        let y = (line[0].pageY + line[1].pageY) / 2;
        
        if(e.pageX >= x - area && e.pageX <= x + area){

            if(e.pageY >= y - area && e.pageY <= y + area) return true;

        }

        return false;

    });

}

function getElementAtPosition(e){

    return _.filter(points, function(point){

        if(point.pageX + 10 > e.pageX && point.pageX - 10 < e.pageX){
            
            return point.pageY + 10 > e.pageY && point.pageY - 10 < e.pageY;

        }

        return false;

    });

}

function getLineBetweenPoints(point1, point2){

    return _.filter(lines, function(line){

        return (line[0] == point1 && line[1] == point2 || line[1] == point1 && line[0] == point2);

    });

}

function getLinesWithPoint(point){

    return _.filter(lines, function(line){

        return (line[0] == point || line[1] == point);

    });

}