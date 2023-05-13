let circle = "../src/img/circle.png";
let cross = "../src/img/cross.png";
let arr = Array.from(document.getElementsByClassName("button"));
let turn;
let p1, p2;
let cell = [null, null, null, null, null, null, null, null, null];
let color = [];
// cell[4] = "X";
// console.log(cell);
let winner = null;
turn = p1;
gameover = false;

function clicked(s) {
    turn == p1
        ? ((pusher = "O"), (sym = circle), (turn = p2))
        : ((pusher = "X"), (sym = cross), (turn = p1));

    document.getElementById(s).removeAttribute("onclick");
    let classname = sym == circle ? "circle" : "cross";
    document.getElementById(s).innerHTML = `<img src='${sym}' class='${classname}' alt='${pusher}'>`;
    cell[parseInt(s.substring(s.length - 1)) - 1] = pusher;
    document.getElementById("result").innerHTML =
        "<h2>" + turn + "'s turn!!</h2>";
    check();
}
function check() {
    console.log(cell);
    if (cell[0] == "O" && cell[4] == "O" && cell[8] == "O") {
        winner = p1;
        color.push(0, 4, 8);
    } else if (cell[0] == "O" && cell[1] == "O" && cell[2] == "O") {
        winner = p1;
        color.push(0, 1, 2);
    } else if (cell[3] == "O" && cell[4] == "O" && cell[5] == "O") {
        winner = p1;
        color.push(3, 4, 5);
    } else if (cell[6] == "O" && cell[7] == "O" && cell[8] == "O") {
        winner = p1;
        color.push(6, 7, 8);
    } else if (cell[0] == "O" && cell[3] == "O" && cell[6] == "O") {
        winner = p1;
        color.push(0, 3, 6);
    } else if (cell[1] == "O" && cell[4] == "O" && cell[7] == "O") {
        winner = p1;
        color.push(1, 4, 7);
    } else if (cell[2] == "O" && cell[5] == "O" && cell[8] == "O") {
        winner = p1;
        color.push(2, 5, 8);
    } else if (cell[2] == "O" && cell[4] == "O" && cell[6] == "O") {
        winner = p1;
        color.push(2, 4, 6);
    } else if (cell[0] == "X" && cell[4] == "X" && cell[8] == "X") {
        winner = p2;
        color.push(0, 4, 8);
    } else if (cell[0] == "X" && cell[1] == "X" && cell[2] == "X") {
        winner = p2;
        color.push(0, 1, 2);
    } else if (cell[3] == "X" && cell[4] == "X" && cell[5] == "X") {
        winner = p2;
        color.push(3, 4, 5);
    } else if (cell[6] == "X" && cell[7] == "X" && cell[8] == "X") {
        winner = p2;
        color.push(6, 7, 8);
    } else if (cell[0] == "X" && cell[3] == "X" && cell[6] == "X") {
        winner = p2;
        color.push(0, 3, 6);
    } else if (cell[1] == "X" && cell[4] == "X" && cell[7] == "X") {
        winner = p2;
        color.push(1, 4, 7);
    } else if (cell[2] == "X" && cell[5] == "X" && cell[8] == "X") {
        winner = p2;
        color.push(2, 5, 8);
    } else if (cell[2] == "X" && cell[4] == "X" && cell[6] == "X") {
        winner = p2;
        color.push(2, 4, 6);
    } else {
        let e = true;
        for (let i = 0; i < cell.length; i++) {
            if (cell[i] == undefined || cell[i] == null) {
                e = false;
            }
        }
        if (e) {
            winner = null;
        }else{
	winner="to be decided"
}
    }
    if (winner == p1) {
        document.getElementById("result").innerHTML =
            "<h2><strong style='color:green;'>Congratulations!</strong>" +
            winner +
            "(O) is the winner!!!</h2>";
        clearevl();
        colorit();
    } else if (winner == p2) {
        document.getElementById("result").innerHTML =
            "<h2><strong style='color:green;'>Congratulations!</strong>" +
            winner +
            "(X) is the winner!!!</h2>";
        clearevl();
        colorit();
    } else if (winner == null) {
        document.getElementById("result").innerHTML =
            "<h2><strong style='color:yellow;'>Nobody is winner!!</strong></h2>";
    }else if (winner=="to be decided"){
        document.getElementById("result").innerHTML =
            "<h2><strong style='color:yellow;'> </strong></h2>";
}
}
function clearevl() {
    arr.forEach((element) => {
        element.removeAttribute("onclick");
    });
}
function colorit() {
    for (let i = 0; i < color.length; i++) {
        document.getElementById(
            "button" + (color[i] + 1)
        ).style.backgroundColor = "#b9f5c0";
    }
}
function ok() {
    if (
        document.getElementById("player1").value != undefined &&
        document.getElementById("player1").value != null &&
        document.getElementById("player1").value != ""
    ) {
        p1 = document.getElementById("player1").value;
    } else {
        p1 = "Player-1";
    }
    if (
        document.getElementById("player2").value != undefined &&
        document.getElementById("player2").value != null &&
        document.getElementById("player2").value != ""
    ) {
        p2 = document.getElementById("player2").value;
        if (p1 == p2) {
            p2 = " " + p2;
        }
    } else {
        p2 = "Player-2";
    }
    console.log(p1, p2);
    document.getElementsByClassName("namebox")[0].style.display = "none";
}
