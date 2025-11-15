var carros = document.getElementById("carros")
// var botaoVoltar = document.getElementById("btnVoltar")
// var botaoAvancar = document.getElementById("btnAvancar")
var fotos = ["giacomo.jpg","equipe.jpg","espinossaur.png"]
var indice = 0
var temporizador
var tempoEspera = 2000

window.onload = Inicio

function Inicio() {

    // botaoAvancar.onclick = Avancar
    // botaoVoltar.onclick = Voltar
    Mostrarfoto()
    AutomatizarFoto()

}


// function Voltar() {

// if (indice > 0) {
//     indice--
// }

// else {
//     indice = fotos.length - 1
// }
//     Mostrarfoto()
//     PararReiniciar()

// }

function Avancar() {

    // if (indice < fotos.length - 1) {
    //     indice++
    // }

    indice++

    if (indice >= fotos.length) {
        indice = 0
    }

    Mostrarfoto()
    // PararReiniciar()

}


function AutomatizarFoto() {

    temporizador = setInterval(Avancar, tempoEspera)

}

// function PararReiniciar() {

//     clearInterval(temporizador)
//     AutomatizarFoto()

// }


function Mostrarfoto() {

    carros.src = "img/" + fotos[indice]

}