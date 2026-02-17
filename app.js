fetch("profile.json")
    .then(response => response.json())
    .then(data => {
        document.querySelector("#name").textContent = data.name;

        const skillsList = document.querySelector("#skills");
        data.skills.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        const interestsList = document.querySelector("#interests");
        data.interests.forEach(interest => {
            const li = document.createElement("li");
            li.textContent = interest;
            interestsList.appendChild(li);
        });
    })
    .catch(error => {
        console.error("Chyba při načítání profilu:", error);
    });
