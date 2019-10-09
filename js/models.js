function padrao18Pontos(){

    clearWindow(true);

    $('#myCanvas')
        .trigger(jQuery.Event("click", { pageX: 534, pageY: 296 }))
        .trigger(jQuery.Event("click", { pageX: 597, pageY: 185 }))
        .trigger(jQuery.Event("click", { pageX: 763, pageY: 164 }))
        .trigger(jQuery.Event("click", { pageX: 958, pageY: 157 }))
        .trigger(jQuery.Event("click", { pageX: 1161, pageY: 244 }))
        .trigger(jQuery.Event("click", { pageX: 1187, pageY: 143 }))
        .trigger(jQuery.Event("click", { pageX: 1335, pageY: 97 }))
        .trigger(jQuery.Event("click", { pageX: 727, pageY: 321 }))
        .trigger(jQuery.Event("click", { pageX: 898, pageY: 262 }))
        .trigger(jQuery.Event("click", { pageX: 1049, pageY: 301 }))
        .trigger(jQuery.Event("click", { pageX: 1278, pageY: 291 }))
        .trigger(jQuery.Event("click", { pageX: 594, pageY: 416 }))
        .trigger(jQuery.Event("click", { pageX: 852, pageY: 411 }))
        .trigger(jQuery.Event("click", { pageX: 1012, pageY: 408 }))
        .trigger(jQuery.Event("click", { pageX: 1161, pageY: 371 }))
        .trigger(jQuery.Event("click", { pageX: 938, pageY: 498 }))
        .trigger(jQuery.Event("click", { pageX: 1140, pageY: 489 }))
        .trigger(jQuery.Event("click", { pageX: 1282, pageY: 454 }));

    lines.push([points[1], points[0], 20]);
    lines.push([points[7], points[0], 29]);
    lines.push([points[11], points[0], 29]);
    lines.push([points[12], points[0], 37]);
    lines.push([points[2], points[1], 25]);
    lines.push([points[7], points[1], 28]);
    lines.push([points[11], points[1], 39]);
    lines.push([points[3], points[2], 25]);
    lines.push([points[7], points[2], 30]);
    lines.push([points[12], points[2], 54]);
    lines.push([points[5], points[3], 32]);
    lines.push([points[6], points[3], 42]);
    lines.push([points[4], points[3], 39]);
    lines.push([points[3], points[8], 23]);
    lines.push([points[9], points[3], 33]);
    lines.push([points[13], points[3], 56]);
    lines.push([points[5], points[4], 12]);
    lines.push([points[6], points[4], 26]);
    lines.push([points[9], points[4], 19]);
    lines.push([points[6], points[5], 17]);
    lines.push([points[10], points[5], 30]);
    lines.push([points[9], points[5], 35]);
    lines.push([points[10], points[6], 38]);
    lines.push([points[11], points[7], 25]);
    lines.push([points[12], points[7], 22]);
    lines.push([points[9], points[8], 26]);
    lines.push([points[12], points[8], 34]);
    lines.push([points[13], points[8], 37]);
    lines.push([points[15], points[8], 43]);
    lines.push([points[10], points[9], 24]);
    lines.push([points[13], points[9], 30]);
    lines.push([points[14], points[9], 19]);
    lines.push([points[14], points[10], 26]);
    lines.push([points[17], points[10], 36]);
    lines.push([points[12], points[11], 27]);
    lines.push([points[15], points[11], 43]);
    lines.push([points[15], points[12], 19]);
    lines.push([points[13], points[12], 24]);
    lines.push([points[15], points[13], 19]);
    lines.push([points[16], points[13], 17]);
    lines.push([points[14], points[13], 20]);
    lines.push([points[16], points[14], 18]);
    lines.push([points[17], points[14], 21]);
    lines.push([points[16], points[15], 26]);
    lines.push([points[17], points[16], 15]);
    draw();

}

function padrao6Pontos(){

    clearWindow(true);

    $('#myCanvas')
        .trigger(jQuery.Event("click", { pageX: 270, pageY: 200 }))
        .trigger(jQuery.Event("click", { pageX: 430, pageY: 200 }))
        .trigger(jQuery.Event("click", { pageX: 500, pageY: 300 }))
        .trigger(jQuery.Event("click", { pageX: 400, pageY: 400 }))
        .trigger(jQuery.Event("click", { pageX: 300, pageY: 400 }))
        .trigger(jQuery.Event("click", { pageX: 200, pageY: 300 }));
    lines.push([points[1], points[0], 1]);
    lines.push([points[2], points[0], 4]);
    lines.push([points[3], points[0], 9]);
    lines.push([points[4], points[0], 8]);
    lines.push([points[5], points[0], 2]);
    lines.push([points[2], points[1], 5]);
    lines.push([points[3], points[1], 5]);
    lines.push([points[4], points[1], 7]);
    lines.push([points[5], points[1], 6]);
    lines.push([points[3], points[2], 10]);
    lines.push([points[4], points[2], 7]);
    lines.push([points[5], points[2], 4]);
    lines.push([points[4], points[3], 1]);
    lines.push([points[5], points[3], 7]);
    lines.push([points[5], points[4], 3]);
    draw();

}

function padrao5Pontos(){

    clearWindow(true);

    $('#myCanvas')
        .trigger(jQuery.Event("click", { pageX: 650, pageY: 300 }))
        .trigger(jQuery.Event("click", { pageX: 800, pageY: 200 }))
        .trigger(jQuery.Event("click", { pageX: 950, pageY: 300 }))
        .trigger(jQuery.Event("click", { pageX: 700, pageY: 400 }))
        .trigger(jQuery.Event("click", { pageX: 900, pageY: 400 }));

    lines.push([points[1], points[0], 2]);
    lines.push([points[4], points[0], 6]);
    lines.push([points[3], points[0], 3]);
    lines.push([points[2], points[1], 4]);
    lines.push([points[3], points[1], 3]);
    lines.push([points[4], points[2], 3]);
    lines.push([points[3], points[2], 7]);
    lines.push([points[3], points[4], 3]);
    draw();

}