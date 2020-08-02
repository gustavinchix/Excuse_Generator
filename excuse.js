var quien = ["Mi perro", "Mi mama", "Mi hermano", "Mi vecino"];
var que = ["se comio", "destruyo", "mojo", "piso"];
var cosa = ["mi tarea", "mi trabajo", "mi papel bond", "mi computadora"];
var cuando = ["ayer.", "esta manana.", "antier.", "antier."];

var quienindx = Math.floor(Math.random() * quien.length);
var queindx = Math.floor(Math.random() * que.length);
var cosaindx = Math.floor(Math.random() * cosa.length);
var cuandoindx = Math.floor(Math.random() * cuando.length);

window.onload = function Run ()
{
    document.querySelector('#excuseOne').innerHTML = excuseRun();
}

function excuseRun ()
{
    return quien[quienindx] + ' ' + que[queindx] + ' ' + cosa[cosaindx] + ' ' + cuando[cuandoindx];
}