function trailAndError(){

    clearWindow();

    if(points.length > 6){
        showMessage("Melhor não!");
        return; 
    }

    let initialTime = Date.now();

    let allSequencies = _.filter(_.map(getAllSequencies(), function(sequence){

        let ret = [];
        let aux;

        sequence.push(sequence[0]);

        while(sequence.length > 1){

            aux = sequence.shift();

            let point1 = points[aux - 1];
            let point2 = points[_.first(sequence) - 1];

            let line = getLineBetweenPoints(point1, point2)[0];
            line = line ? line : getLineBetweenPoints(point2, point1)[0];

            if(line === undefined) return null;

            ret.push(line);

        }

        return ret;

    }));

    allSequencies = _.sortBy(allSequencies, function(sequence){

        let sum = 0;

        sequence.forEach(function(line){
            sum += parseFloat(line[2]);
        });

        return sum;

    });

    let path = _.first(allSequencies);

    if(!path){

        showMessage(`Nenhum caminho válido foi encontrado`);
        return;

    }

    let diffTime = Math.abs(Date.now() - initialTime);

    let sum = 0;

    path.forEach(function(line){
        line[3] = LINE_COLOR_SELECTED;
        draw();
        sum += parseFloat(line[2]);
    });

    showMessage(`Tentativa e erro: ${diffTime}ms com peso ${sum}`, 10000, 'blueviolet');

}

function nearestNeighbor(){

    clearWindow();

    let initialTime = Date.now();

    let visited = [];
    let path = [];
    let actualPoint = _.first(points);
    let linesWithPoint;

    while(visited.length < points.length) {

        linesWithPoint = getLinesWithPoint(actualPoint);

        linesWithPoint = _.filter(linesWithPoint, function (line) {
            return !_.find(visited, line[0]) && !_.find(visited, line[1]);
        });

        linesWithPoint = _.sortBy(linesWithPoint, function (line) {
            return parseInt(line[2]);
        });

        linesWithPoint = _.first(linesWithPoint);

        if(linesWithPoint === undefined){

            if(visited.length < points.length - 1){
                showMessage(`Erro na iteração ${visited.length}`);
            }

            linesWithPoint = getLineBetweenPoints(_.first(points), actualPoint)[0];

            if(linesWithPoint === undefined){
                showMessage("Sem aresta para a última posição");
                return;
            }

            visited.push(actualPoint);
            path.push(linesWithPoint);
            linesWithPoint[3] = LINE_COLOR_SELECTED;
            draw();

        } else {

            visited.push(actualPoint);
            actualPoint = linesWithPoint[0] == actualPoint ? linesWithPoint[1] : linesWithPoint[0];
            path.push(linesWithPoint);
            linesWithPoint[3] = LINE_COLOR_SELECTED;
            draw();

        }

    }

    if(_.without(points, ...visited).length){

        showMessage("Não foi possível acessar algum ponto");
        return;

    }

    let diffTime = Math.abs(Date.now() - initialTime);

    let sum = 0;

    path.forEach(function(line){
        sum += parseFloat(line[2]);
    });

    showMessage(`Busca gulosa: ${diffTime}ms com peso ${sum}`, 10000, 'blueviolet');

}