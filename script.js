// Smooth scroll to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Echtzeit-Validierung für Registrierungsformular
document.getElementById("register-form").addEventListener("submit", function(event) {
    const username = document.getElementById("new-username").value;
    const email = document.getElementById("new-email").value;
    const password = document.getElementById("new-password").value;

    // Überprüfung, ob alle Felder ausgefüllt sind
    if (!username || !email || !password) {
        alert("Bitte fülle alle Felder aus.");
        event.preventDefault(); // Verhindert die Einreichung des Formulars
        return;
    }

    // Einfaches Passwort-Check
    if (password.length < 6) {
        alert("Das Passwort muss mindestens 6 Zeichen lang sein.");
        event.preventDefault();
        return;
    }

    alert("Registrierung erfolgreich!");
});
