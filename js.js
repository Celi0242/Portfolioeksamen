//siden er loadet: sidenVises
$(window).on("load", move1);



function move1() {
    console.log("move1");
    var elem = document.getElementById("myBarkodning");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 60) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }

    move2();
}

function move2() {
    console.log("move2");
    var elem = document.getElementById("myBarillu");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 80) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';

        }
    }
    move3();
}

function move3() {
    console.log("move3");
    var elem = document.getElementById("myBarphoto");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 50) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
    move4();
}

function move4() {
    console.log("move4");
    var elem = document.getElementById("myBarxd");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 80) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
    move5();
}

function move5() {
    console.log("move5");
    var elem = document.getElementById("myBaride");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 90) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
