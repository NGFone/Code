// Sortieren der Tabelle
function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("co2Table");
  switching = true;
  dir = "asc"; // Sortierrichtung
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

// Filtern der Tabelle nach Eingabe
function filterTable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("filter");
  filter = input.value.toLowerCase();
  table = document.getElementById("co2Table");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    tr[i].style.display = "none";
    td = tr[i].getElementsByTagName("td");
    for (var j = 0; j < td.length; j++) {
      if (td[j]) {
        txtValue = td[j].textContent || td[j].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        }
      }
    }
  }
}

// Sicherheitsüberprüfung für potenziell schädliche Eingaben
document.getElementById("filter").addEventListener("input", function () {
  this.value = this.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
});

// Sicherheitsüberprüfung für alle Eingabefelder
function sanitizeInput(input) {
  // Ersetzen von speziellen Zeichen, die für XSS-Angriffe verwendet werden könnten
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/`/g, "&#x60;")
    .replace(/\(/g, "&#40;")
    .replace(/\)/g, "&#41;");
}

// Anwenden der Sicherheitsüberprüfung auf alle relevanten Eingabefelder
document.querySelectorAll('input[type="text"]').forEach(function (inputField) {
  inputField.addEventListener("input", function () {
    this.value = sanitizeInput(this.value);
  });
});

// Sicherheitsüberprüfung für potenziell schädliche Eingaben
document.getElementById("filter").addEventListener("input", function () {
  this.value = this.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
});

// Sicherheitsüberprüfung für alle Eingabefelder
function sanitizeInput(input) {
  // Ersetzen von speziellen Zeichen, die für XSS-Angriffe verwendet werden könnten
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/`/g, "&#x60;")
    .replace(/\(/g, "&#40;")
    .replace(/\)/g, "&#41;");
}

// Anwendung der Sicherheitsüberprüfung auf das Filterfeld
document.getElementById("filter").addEventListener("input", function () {
  this.value = sanitizeInput(this.value);
});

// Anwenden der Sicherheitsüberprüfung auf alle relevanten Eingabefelder
document.querySelectorAll('input[type="text"]').forEach(function (inputField) {
  inputField.addEventListener("input", function () {
    this.value = sanitizeInput(this.value);
  });
});
