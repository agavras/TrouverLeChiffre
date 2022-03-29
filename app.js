//declaration variable constante...
const btn = document.getElementById("HTMLidBoutton");
const chiffreATrouver = Math.ceil(Math.random() * 100);
console.log(chiffreATrouver);
const elementChampDeTextePourLaReponseDuJoueur = document.getElementById("HTMLid_InputNumber");
const elementTexteIlVousReste = document.getElementById("HTMLid_Texte_IlVousReste");
const elementTexteWinLoose = document.getElementById("HTMLid_Texte_YouWinOrLoose");

// déclaration variable variable...
let tentativeRestante = 10;

// Fonction quand on appui sur le btn...
function CheckTheResult() {
    let chiffreDuJoueur=parseInt(elementChampDeTextePourLaReponseDuJoueur.value);
    tentativeRestante--;
    elementTexteIlVousReste.innerHTML = `il vous reste ${tentativeRestante} tentative(s)`;

    // Si le resultat est bon...
    if (chiffreATrouver === chiffreDuJoueur) {
        elementTexteWinLoose.style.color="lightgreen";
        elementTexteWinLoose.innerHTML = "YOU WIN";
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
    }
} // fin de la function CheckTheResult()

// Fonction qui remplace le texte "Il Vous reste" par un espace et detruit le btn...
function DeleteIlVousReste() {
    elementTexteIlVousReste.innerHTML = " "; // on peut aussi utiliser .remove();
    btn.remove();
}// fin de la function DeleteIlVousReste()