function myFunction() {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
    document.querySelector("footer").classList.toggle("dark-mode");
    document.querySelectorAll("nav a").forEach(link => link.classList.toggle("dark-mode"));
}

// kijken of cookie al geacceepteerd is
if (localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookie-banner').style.display = "none";
}
// voor het accepteren van de cookies
document.getElementById('accept-cookies').addEventListener('click', function () {
    // slaat de keuze op van de gebruiker
    localStorage.setItem('cookiesAccepted', 'true');
    // Verbergt de banner door display style none te gebruiken
    document.getElementById('cookie-banner').style.display = 'none';
});
// voor het accepteren van de cookies
document.getElementById('accept-cookies').addEventListener('click', function () {
    // Slaat de keuze op van de gebruiker
    localStorage.setItem('cookiesAccepted', 'true');

    // Verbergt de banner door display style none te gebruiken
    document.getElementById('cookie-banner').style.display = 'none';
});

function updateClock() {
    // Haal de huidige tijd op
    const now = new Date();

    // Verkrijg uren, minuten en seconden
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Maak de tijdstring in het formaat HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Toon de tijd in het #clock-element
    document.getElementById('clock').textContent = timeString;
}

// Start de klok en update elke seconde
setInterval(updateClock, 1000);

// Update de klok direct bij het laden
updateClock();
document.addEventListener("DOMContentLoaded", function () {
    const greetingElement = document.getElementById("greeting");
    const now = new Date();
    const hours = now.getHours();

    let greeting;
    if (hours >= 6 && hours < 12) {
        greeting = "Goedemorgen!";
    } else if (hours >= 12 && hours < 18) {
        greeting = "Goedemiddag!";
    } else if (hours >= 18 && hours < 24) {
        greeting = "Goedenavond!";
    } else {
        greeting = "Goedenacht!";
    }

    greetingElement.innerHTML = greeting;
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("links");

    // Toggle het menu zichtbaar of onzichtbaar
    menuToggle.addEventListener("click", function () {
        if (menu.classList.contains("hidden")) {
            menu.classList.remove("hidden");
            menu.classList.add("visible");
        } else {
            menu.classList.remove("visible");
            menu.classList.add("hidden");
        }
    });

    // Reset menu bij resizing (voor responsieve aanpassing)
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            menu.classList.remove("hidden");
            menu.classList.remove("visible");
            menu.style.display = "flex"; /* Zichtbaar als rij op grote schermen */
            menu.style.flexDirection = "row";
        } else {
            menu.classList.add("hidden");
            menu.style.display = ""; /* Reset inline stijl */
        }
    });
});
