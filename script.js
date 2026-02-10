// Časový pozdrav
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) greeting.textContent = "Dobré ráno 👋";
else if (hour < 18) greeting.textContent = "Dobré odpoledne 👋";
else greeting.textContent = "Dobrý večer 👋";

// Dark / Light mode
const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

// Uložení režimu
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
}

// Počítadlo návštěv (localStorage)
let visits = localStorage.getItem("visits");
visits = visits ? Number(visits) + 1 : 1;
localStorage.setItem("visits", visits);

document.getElementById("counter").textContent =
    `Tuto stránku jsi otevřel ${visits}×`;
