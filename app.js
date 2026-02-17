// Načtení dat ze souboru profile.json
fetch("profile.json")
    .then(response => {
        // Kontrola, zda je odpověď v pořádku
        if (!response.ok) {
            throw new Error("HTTP chyba: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        // 1. Vložení jména a podtitulu
        document.querySelector("#name").textContent = data.name;
        // Pokud máš v JSONu i jobTitle, jinak tento řádek smaž
        if(data.jobTitle) document.querySelector("#job-title").textContent = data.jobTitle;

        // 2. Vygenerování seznamu dovedností (Skills)
        const skillsList = document.querySelector("#skills");
        data.skills.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        // 3. Vygenerování zájmů (Interests)
        const interestsList = document.querySelector("#interests");
        data.interests.forEach(interest => {
            const li = document.createElement("li");
            li.textContent = interest;
            interestsList.appendChild(li);
        });

        // 4. Vygenerování projektů (Bonusová část)
        const projectsContainer = document.querySelector("#projects");
        data.projects.forEach(project => {
            // Vytvoření divu pro projekt
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("project-item");

            // Použití innerHTML pro složitější strukturu (nadpis + popis + odkaz)
            // Zadání zmiňuje innerHTML jako povolenou metodu [cite: 97]
            projectDiv.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank" class="btn">Zobrazit projekt</a>
            `;
            
            projectsContainer.appendChild(projectDiv);
        });
    })
    .catch(error => {
        console.error("Chyba při načítání profilu:", error);
        document.querySelector("header").innerHTML = "<h1>Chyba načítání dat</h1>";
    });