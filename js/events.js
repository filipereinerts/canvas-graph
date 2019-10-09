$(document).ready(function(){

    $('#myCanvas').css('background-color', CANVAS_BACKGROUND);

    resize();

    $('#myCanvas').click(function(e){

        e = getPosition(this, e);
        insertPoint(e);

    });

    $('#myCanvas').on('contextmenu', function(e){

        e = getPosition(this, e);
        insertLine(e);
        return false;

    });

    $(document).keydown(function(e) {

        if (e.keyCode === 27 && aux !== null) {

            removeSelectionLine();

        } else if(e.keyCode === 68 && mousePosition !== undefined){

            removePointOrLines(mousePosition);

        } else if(e.keyCode === 73 && mousePosition !== undefined){

            insertPoint(mousePosition);

        } else if(e.keyCode === 76 && mousePosition !== undefined){

            insertLine(mousePosition);

        } else if(e.keyCode === 67){

            clearWindow(true);

        }
 
    });

    $('#myCanvas').mousemove(function(e){

        mousePosition = getPosition(this, e);

    });

    $('#myCanvas').mousedown(function(e){

        switch(e.which)
        {
            case 2:
                removePointOrLines(mousePosition);
            break;
        }
        return true;// to allow the browser to know that we handled it.
    });

    $(window).resize(function() {

        draw();

    });

    _init();

});

let timeout;

function showMessage(text, time = 3000, backgroundColor = '#ea4949'){

    $('.message').html(text);
    $('.container').css('bottom', '10px').css('background-color', backgroundColor);

    if(timeout) clearTimeout(timeout);

    timeout = setTimeout(() => hideMessage(), time);

}

function hideMessage(){

    $('.container').css('bottom', '-60px');

}