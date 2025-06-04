  const steps = [
      {
        title: "Introduction",
        description: "Bienvenue dans ce tutoriel interactif pour Germin 1.1.4 ! Créez un projet web statique 'calculator' et déploie-le.",
        terminalOutput: "",
        image: ""
      },
      {
        title: "Installer Germin",
        description: "Installez Germin globalement : <br> Commande : <code>npm install -g germin@latest</code>",
        terminalOutput: "changed 120 packages in 42s\n28 packages are looking for funding",
        image: "./public/assets/images/install germin.png" 
      },
      {
        title: "Créer un projet",
        description: "Créez un projet 'calculator' : <br> Commande : <code>germin create calculator</code><br> Choisissez HTML/CSS/JS, CSS pur, et activez Git.",
        terminalOutput: "Répertoires créés avec succès.\nFichiers créés avec succès.\nDépôt GitHub configuré : https://github.com/mbroumsadja/calculator.git",
        image: "path/to/create-project.png" 
      },
      {
        title: "Installer les dépendances",
        description: "Accédez au dossier et installez les dépendances : <br> Commande : <code>cd calculator && npm install</code>",
        terminalOutput: "added 280 packages, and audited 281 packages in 1m\n8 vulnerabilities (4 moderate, 4 high)",
        image: "path/to/npm-install.png"
      },
      {
        title: "Lancer le serveur",
        description: "Lancez le serveur local : <br> Commande : <code>npm run dev</code>",
        terminalOutput: "Serveur démarré sur http://localhost:5173",
        image: "path/to/localhost-5173.png" 
      },
      {
        title: "Utiliser Kanban",
        description: "Ouvrez <code>http://localhost:3000/x/app.html</code> et importez <code>task.json</code>.",
        terminalOutput: "Outil Kanban accessible.",
        image: "path/to/kanban-app.png" 
      },
      {
        title: "Construire et déployer",
        description: "Construisez et déploie : <br> Commandes : <code>npm run build</code> puis <code>npm run deploy</code>",
        terminalOutput: "npm run build: Fichiers générés dans dist/\nnpm run deploy: Lien vers votre site web : https://mbroumsadja.github.io/calculator/",
        image: "path/to/deploy-result.png"
      },
      {
        title: "Conclusion",
        description: "Félicitations ! Votre projet est créé et déployé. Explorez plus sur GitHub !",
        terminalOutput: "",
        image: ""
      }
    ];

    let currentStep = 0;

    const stepsList = document.getElementById('steps-list');
    const stepTitle = document.getElementById('step-title');
    const stepDescription = document.getElementById('step-description');
    const terminalOutput = document.getElementById('terminal-output');
    const nextBtn = document.getElementById('next-btn');

    function updateStep(stepIndex) {
      currentStep = stepIndex;
      stepTitle.textContent = steps[stepIndex].title;
      stepDescription.innerHTML = steps[stepIndex].description;
      terminalOutput.innerHTML = steps[stepIndex].terminalOutput.replace(/\n/g, '<br>');
      const mainContent = document.getElementById('main-content');
      const existingImage = mainContent.querySelector('img');
      if (existingImage) existingImage.remove();
      if (steps[stepIndex].image) {
        const img = document.createElement('img');
        img.src = steps[stepIndex].image;
        mainContent.appendChild(img);
      }

      document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
      document.querySelector(`.sidebar li[data-step="${stepIndex}"]`).classList.add('active');

      if (currentStep === steps.length - 1) {
        nextBtn.style.display = 'none';
      } else {
        nextBtn.style.display = 'block';
      }
    }

    stepsList.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        const stepIndex = parseInt(e.target.getAttribute('data-step'));
        updateStep(stepIndex);
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentStep < steps.length - 1) {
        updateStep(currentStep + 1);
      }
    });

    updateStep(0);