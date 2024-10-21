// Sicherheitsüberprüfung für potenziell schädliche Eingaben
document.getElementById("filter").addEventListener("input", function() {
    this.value = this.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
});

// Sicherheitsüberprüfung für alle Eingabefelder
function sanitizeInput(input) {
    // Ersetzen von speziellen Zeichen, die für XSS-Angriffe verwendet werden könnten
    return input.replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#x27;")
                .replace(/`/g, "&#x60;")
                .replace(/\(/g, "&#40;")
                .replace(/\)/g, "&#41;");
}

// Anwendung der Sicherheitsüberprüfung auf das Filterfeld
document.getElementById("filter").addEventListener("input", function() {
    this.value = sanitizeInput(this.value);
});

// Anwenden der Sicherheitsüberprüfung auf alle relevanten Eingabefelder
document.querySelectorAll('input[type="text"]').forEach(function(inputField) {
    inputField.addEventListener("input", function() {
        this.value = sanitizeInput(this.value);
    });
});

<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'"></meta>