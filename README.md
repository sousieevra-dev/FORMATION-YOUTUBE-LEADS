# Page de capture — YouTube Faceless

Page de capture pour le guide « Les 10 bonnes raisons de vous lancer en YouTube Faceless ».
Mariam · Au Cœur Afrique.

## Structure

- `public/index.html` — la page de capture (HTML/CSS/JS)
- `server.js` — serveur Express qui sert la page
- `package.json` — dépendances et script de démarrage

## Avant de déployer

Dans `public/index.html`, remplacer l'URL du formulaire Brevo :
chercher `action="https://VOTRE-SOUS-DOMAINE.sibforms.com/serve/À_REMPLACER"`
et mettre l'URL réelle donnée par Brevo.

## Déploiement Hostinger (Node.js Web App)

1. Pousser ce dépôt sur GitHub.
2. hPanel → Node.js Web App → connecter le dépôt GitHub.
3. Réglages détectés automatiquement :
   - Framework : Other / Express
   - Fichier d'entrée (entry file) : `server.js`
   - Commande de build : `npm install`
   - Commande de démarrage : `npm start`
4. Déployer.

## Test en local

```bash
npm install
npm start
# puis ouvrir http://localhost:3000
```
