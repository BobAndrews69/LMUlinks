function KatzeMiau() {
    var Miau = new Audio('miau-triste.mp3');
    var Bruh = new Audio('Bruh.mp3');

    var Name = window.prompt("Was ist dein Name?????????");
    if (Name == "" || Name == null) {
        Bruh.play();
        alert('Bro hat keinen Nanem 😭😭😭')
    } else {
        Miau.play();
        alert('Miau Miau Miau ' + Name)
    }
}


function myabs(num1, num2) {
    var num1 = window.prompt("Zahl 1");
    var num2 = window.prompt("Zahl 2");

    var absDifference = 0;
    if (num1 > num2) {
        absDifference = num1 - num2;
    } else if (num1 < num2) {
        absDifference = num2 - num1;
    }
    alert(absDifference);
}

function playmusik() {
    window.open("https://music.youtube.com/watch?v=JTuu9m8u7TI&list=RDAMVMJTuu9m8u7TI", "_blank");
}


// von GPT 🤫🤫
document.addEventListener('DOMContentLoaded', function () {
    // Prüfen, ob der Benutzer eine bevorzugte Farbschema-Einstellung gespeichert hat
    const userPrefersDark = localStorage.getItem('dark-mode') === 'true';

    // Wenn der Benutzer den Dunkelmodus zuvor aktiviert hat, anwenden
    if (userPrefersDark) {
        document.body.classList.add('dark-mode');
        document.getElementById('Main').classList.add('dark-mode');
        document.getElementById('Nav').classList.add('dark-mode');
        document.querySelectorAll('.Kopf').forEach(element => {
            element.classList.add('dark-mode');
        });
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.add('dark-mode');
        });
        document.querySelectorAll('#ST td, th').forEach(link => {
            link.classList.add('dark-mode');
        });
        document.querySelectorAll('ul li a').forEach(link => {
            link.classList.add('dark-mode');
        });
        document.getElementById('toggle-dark-mode').textContent = ' Light';
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('Main').classList.remove('dark-mode');
        document.getElementById('Nav').classList.remove('dark-mode');
        document.querySelectorAll('.Kopf').forEach(element => {
            element.classList.remove('dark-mode');
        });
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('dark-mode');
        });
        document.querySelectorAll('ul li a').forEach(link => {
            link.classList.remove('dark-mode');
        });
        document.querySelectorAll('#ST td, th').forEach(element => {
            element.classList.remove('dark-mode');
        });
        document.getElementById('toggle-dark-mode').textContent = 'Dark';
    }

    // Event-Listener für den Button zum Umschalten des Modus
    const toggleButton = document.getElementById('toggle-dark-mode');
    toggleButton.addEventListener('click', function () {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        document.getElementById('Main').classList.toggle('dark-mode');
        document.getElementById('Nav').classList.toggle('dark-mode');

        document.querySelectorAll('.Kopf').forEach(element => {
            element.classList.toggle('dark-mode');
        }); 
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.toggle('dark-mode');
        });
        document.querySelectorAll('#ST td, th').forEach(link => {
            link.classList.toggle('dark-mode');
        });
        document.querySelectorAll('ul li a').forEach(link => {
            link.classList.toggle('dark-mode');
        });
        // Ändern des Button-Textes je nach Modus
        if (isDarkMode) {
            toggleButton.textContent = 'Light ';
        } else {
            toggleButton.textContent = 'Dark';
        }

        // Benutzerpräferenz speichern (localStorage)
        localStorage.setItem('dark-mode', isDarkMode);
    });
});


