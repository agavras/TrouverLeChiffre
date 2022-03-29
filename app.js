//declaration variable constante...
const btn = document.getElementById("HTMLidBoutton");
const chiffreATrouver = Math.ceil(Math.random() * 100);
console.log(chiffreATrouver);
const elementChampDeTextePourLaReponseDuJoueur = document.getElementById("HTMLid_InputNumber");
const elementTexteIlVousReste = document.getElementById("HTMLid_Texte_IlVousReste");
const elementTexteWinLoose = document.getElementById("HTMLid_Texte_YouWinOrLoose");

// déclaration variable variable...
let tentativeRestante = 10;
let MyAudio = new Audio("sound/music1.mp3");
MyAudio.play();

// Fonction quand on appui sur le btn...
function CheckTheResult() {
    let chiffreDuJoueur=parseInt(elementChampDeTextePourLaReponseDuJoueur.value);
    tentativeRestante--;
    elementTexteIlVousReste.innerHTML = `il vous reste ${tentativeRestante} tentative(s)`;

    // Si le resultat est bon...
    if (chiffreATrouver === chiffreDuJoueur) {
        elementTexteWinLoose.style.color="lightgreen";
        elementTexteWinLoose.innerHTML = "YOU WIN";
        elementTexteWinLoose.className="animate__animated animate__bounce animate__infinite";
        elementChampDeTextePourLaReponseDuJoueur.className="animate__animated animate__zoomOutDown animate__1";
        MyAudio.pause();
        MyAudio = new Audio("sound/musicYouWin.mp3");
        MyAudio.play();
        DeleteIlVousReste();
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
        DeleteIlVousReste();
        elementTexteWinLoose.className="animate__animated animate__bounceInUp animate__1";
        elementChampDeTextePourLaReponseDuJoueur.className="animate__animated animate__hinge animate__1";
        MyAudio.pause();    
        MyAudio = new Audio("sound/musicGameOver.mp3");
        MyAudio.play();
    }
} // fin de la function CheckTheResult()

// Fonction qui remplace le texte "Il Vous reste" par un espace et detruit le btn...
function DeleteIlVousReste() {
    elementTexteIlVousReste.innerHTML = " "; // on peut aussi utiliser .remove();
    btn.remove();
}// fin de la function DeleteIlVousReste()