//declaration variable constante...
const btn = document.getElementById("HTMLidBoutton");
const chiffreATrouver = Math.ceil(Math.random() * 100);
console.log(chiffreATrouver);
const elementChampDeTextePourLaReponseDuJoueur = document.getElementById("HTMLid_InputNumber");
const mySlider=document.getElementById("myRange");
const elementTexteIlVousReste = document.getElementById("HTMLid_Texte_IlVousReste");
const elementTexteWinLoose = document.getElementById("HTMLid_Texte_YouWinOrLoose");

// déclaration variable variable...
let tentativeRestante = 10;
let MyAudio = new Audio("sound/music1.mp3");

// a partir d'ici le code s'execute quoi qu'il arrive ////////////////
elementTexteIlVousReste.innerHTML = `il vous reste ${tentativeRestante} tentative(s)`;

// mise a jour Slider => InputNumber...
mySlider.oninput = function() {
    elementChampDeTextePourLaReponseDuJoueur.value = mySlider.value;
}

// mise a jour InputNumber => Slider...
elementChampDeTextePourLaReponseDuJoueur.oninput = function() {
    mySlider.value = elementChampDeTextePourLaReponseDuJoueur.value;
}

// a partir d'ici le code s'execute que si on le demande (voir le html onclick=CheckTheResult()) ////////////////
// Fonction quand on appui sur le btn...
function CheckTheResult() {
    MyAudio.play();
    let chiffreDuJoueur=parseInt(mySlider.value);
    tentativeRestante--;
    if (tentativeRestante>1) {
        elementTexteIlVousReste.innerHTML = `il vous reste ${tentativeRestante} tentatives`;
    } else {
        elementTexteIlVousReste.innerHTML = `il vous reste ${tentativeRestante} tentative`;
    }

    // Si le resultat est bon...
    if (chiffreATrouver === chiffreDuJoueur) {
        elementTexteWinLoose.style.color="lightgreen";
        elementTexteWinLoose.innerHTML = "YOU WIN";
        elementTexteWinLoose.className="animate__animated animate__bounce animate__infinite";
        mySlider.remove();
        MyAudio.pause();
        MyAudio = new Audio("sound/musicYouWin.mp3");
        MyAudio.play();
        elementTexteIlVousReste.className="animate__animated animate__bounceOutDown animate__1";
        btn.className="animate__animated animate__bounceOut animate__1";
        myValueText.className="animate__animated animate__bounceOut animate__1";
    // Si trop bas...
    } else if (chiffreATrouver > chiffreDuJoueur) {
        elementTexteWinLoose.innerHTML = "Trop petit";
    // Si trop haut...
    } else if (chiffreATrouver < chiffreDuJoueur) {
        elementTexteWinLoose.innerHTML = "Trop grand";
    }

    // Si le joueur n'a plus de credit...
    if (tentativeRestante === 0) {
        elementTexteWinLoose.style.color="red";
        elementTexteWinLoose.innerHTML = "GAME OVER";
        elementTexteWinLoose.className="animate__animated animate__bounceInUp animate__1";
        mySlider.remove();
        MyAudio.pause();    
        MyAudio = new Audio("sound/musicGameOver.mp3");
        MyAudio.play();
        elementTexteIlVousReste.className="animate__animated animate__bounceOutDown animate__1";
        btn.className="animate__animated animate__bounceOut animate__1";
        elementChampDeTextePourLaReponseDuJoueur.className="animate__animated animate__hinge animate__1";
    }
} // fin de la function CheckTheResult()