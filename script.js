    function openTab(evt, tabName) {
        // 1. On déclare les variables
        var i, tabContent, tabBtn;

        // 2. On cache tous les contenus (div avec class="tab-content")
        tabContent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }

        // 3. On enlève la classe "active" de tous les boutons
        tabBtn = document.getElementsByClassName("tab-btn");
        for (i = 0; i < tabBtn.length; i++) {
            tabBtn[i].className = tabBtn[i].className.replace(" active", "");
        }

        // 4. On affiche le contenu actuel (celui sur lequel on a cliqué)
        document.getElementById(tabName).style.display = "block";

        // 5. On ajoute la classe "active" au bouton sur lequel on a cliqué
        evt.currentTarget.className += " active";
    }


    // Ouvre la modale ciblée par son identifiant
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Empêche la page de défiler derrière
    }
}

// Ferme la modale ciblée
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Réactive le défilement
    }
}

// Ferme la modale si l'utilisateur clique en dehors de la boîte
window.addEventListener("click", function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
});