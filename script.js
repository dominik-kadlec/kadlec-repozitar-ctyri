const button = document.getElementById("btn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    message.textContent = "Díky za kliknutí!  Tahle zpráva je z JavaScriptu.";
});
