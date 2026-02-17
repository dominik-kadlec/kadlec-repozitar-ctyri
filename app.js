fetch("profile.json")
    .then(response => response.json())
    .then(data => {
        document.querySelector("#name").textContent = data.name;
    })
    .catch(error => {
        console.error("Chyba při načítání dat:", error);
    });
