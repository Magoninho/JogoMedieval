

function comecar() {


        document.getElementById('theme2').play();
        document.getElementById('gamearea').style.display = "initial";
        document.getElementById('deixa').style.display = "none";


}


function options() {
    var x = document.getElementsByClassName("d3");
    x[0].style.display = "initial";
    
    
}
function castbv() {
    options();
    document.getElementById("castelo").style.display = "initial";
}
function ruinas() {
    options();
    document.getElementById("ruinas").style.display = "initial";
}
var scr= window.innerWidth;

if (scr <= 1680) {
    document.body.style.zoom ="80%";
}
if (scr <= 1366) {
    document.body.style.zoom = "70%";
}
if (scr <= 1024) {
    document.body.style.zoom = "52%";
}

function fechar() {
    var x = document.getElementsByClassName("d3");
    x[0].style.display = "none";
    document.getElementById("castelo").style.display = "none";
    document.getElementById("ruinas").style.display = "none";
}


function tempos() {
    setInterval(function() {
        var fome = document.getElementById("fome");
        document.getElementById("fome").value -= 1;
        document.getElementById("sede").value -= 1;
        if (fome.value == 0) {
            morrer('de_fome');
        }
        if (sede.value == 0) {
            morrer('de_sede');
        }
    }, 23000);
}


// funcionalidades
var morto = false;
var estoque = 10;
var litros = 10;
var alim = true;
var nvfome = 10;



function comer(comida) {
    if (alim == false && estoque > 0) {
        alim = true;
    }
    if (comida == 1 && alim == true) {
        var fome = document.getElementById("fome");
        estoque -= 1;

        fome.value += 1;
        document.getElementById("estoque").innerHTML = estoque + "KG";
        if (estoque < 0) {
            estoque = 0;
            fome.value -= 1;
            document.getElementById("estoque").innerHTML = 'acabou';
            alim = false;
        }
        
    }
    if (comida == 2 && alim == true) {
        var fome = document.getElementById("fome");
        fome.value += 1;
    }
}

function beber() {
    var sede = document.getElementById("sede");
    sede.value += 1;
    litros -= 1;
    document.getElementById("litros").innerHTML = litros + "L";
    if (litros < 0) {
        litros = 0;
        sede.value -= 1;
        document.getElementById("litros").innerHTML = "acabou";
    }
}


// diversos

var pris = 0;
function prisao() {
    if (pris == 0) {
        alert("você encontra diversos ossos de pessoas que tinham sido presas...");
        alert("mas você encontra um baú...");
        alert("nesse baú estava uma das escrituras mais antigas de todas...");
        alert("ela contava que havia um bravo guerreiro que protegia as aldeias...");
        alert("era Eduardo, e contavam que sua poderosa espada estaria em algum lugar dessa terra, esperando um sucessor");
        pris += 1;
    } else {
        alert("você já veio aqui");
    }
    
}

function reifant() {
    alert("você visita o trono do antigo rei do castelo...");
    alert("porém você escuta um barulho...");
    alert("parecia uma voz...");
    alert("foi quando os objetos começaram a cair");
    alert("'DROGA! o que eu estou fazendo aqui', você grita");
    alert("e sai correndo");
}

function morrer() {
    morto = true;
    salvar();
    document.getElementById('morrest').style.display = 'block';
    document.getElementById('gamearea').style.display = 'none';
    document.getElementById('mortetheme').play();
    document.getElementById('theme2').pause();
    document.getElementById('theme3').pause();

    

    
}


function carregar() {
    morto = localStorage.getItem('morto');
    var sede = document.getElementById("sede");
    var fome = document.getElementById("fome");
    //variaveis
    estoque = localStorage.getItem('estoque');
    litros = localStorage.getItem('litros');
    // barras
    fome.value = localStorage.getItem('fome');
    sede.value = localStorage.getItem('sede');
    // aparencia
    document.getElementById("estoque").innerHTML = estoque + "KG";
    document.getElementById("litros").innerHTML = litros + "L";
    document.getElementById("sede").value = sede.value;
    if (morto == "true") {
        morrer();
        document.getElementById('foof').innerHTML = 'VOCÊ JÁ HAVIA MORRIDO NESTE SLOT :( <br> <p> Você deve esperar 5 segundos para o jogo ser salvo :P</p>';
    }
}




function salvar() {
    
    


    var sede = document.getElementById("sede");
    var fome = document.getElementById("fome");
    localStorage.setItem('morto', morto);
    localStorage.setItem('sede', sede.value);
    localStorage.setItem('fome', fome.value);
    localStorage.setItem('litros', litros);
    localStorage.setItem('estoque', estoque);

}

function saveauto() {
    setInterval(salvar, 5000);
    
    
}


