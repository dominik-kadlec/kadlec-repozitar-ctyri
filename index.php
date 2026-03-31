<?php
// Načtení dat ze souboru profile.json a převod na PHP pole
$jsonData = file_get_contents('profile.json');
$data = json_decode($jsonData, true);
?>
<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Osobní IT profil</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <div class="container">
            <h1 id="name"><?php echo htmlspecialchars($data['name']); ?></h1>
        </div>
    </header>

    <main class="container">
        <section class="card">
            <h2>🛠️ Dovednosti</h2>
            <ul id="skills" class="skills-list">
                <?php foreach ($data['skills'] as $skill): ?>
                    <li><?php echo htmlspecialchars($skill); ?></li>
                <?php endforeach; ?>
            </ul>
        </section>

        <section class="card">
            <h2>💡 Zájmy</h2>
            <ul id="interests" class="interests-list"></ul>
        </section>

        <section class="card">
            <h2>🚀 Projekty</h2>
            <div id="projects" class="projects-grid"></div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Dominik Kadlec, Vytvořeno pro předmět ASO</p>
    </footer>

</body>
</html>