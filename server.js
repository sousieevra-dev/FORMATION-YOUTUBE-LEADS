// Serveur minimal qui sert la page de capture statique.
// Hostinger fournit le port via la variable d'environnement PORT.
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Sert tous les fichiers du dossier "public" (index.html, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Pour toute autre route, on renvoie la page d'accueil.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
