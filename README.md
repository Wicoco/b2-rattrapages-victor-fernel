# Gestion de Commandes (Node.js + MongoDB Atlas)

Projet réalisé pour le module "Architecture orientée objet".

## 💾 Fonctionnalités

- Formulaire de saisie de commande (nom, prénom, adresse, email)
- Prix généré aléatoirement côté serveur
- Commande stockée avec statut initial "Commande prise en compte"
- Page de listing des commandes
- Mise à jour des statuts (en cours, réalisée, annulée) avec couleurs différentes
- Stockage des données sur MongoDB Atlas

---

## 🚀 Lancer le projet

### 1. Se placer dans le dossier du projet

```
cd "b2-rattrapages-victor-fernel\07 – Architecture orienté objet"
```

### 2. Installer les dépendances

```
npm install
```

### 3. Configurer la connexion MongoDB Atlas

Créer un fichier `.env` à la racine du projet avec :  
```env
MONGO_URI=mongodb+srv://<utilisateur>:<motdepasse>@cluster0.xxxxx.mongodb.net/maBdd
```
Remplacer `<utilisateur>`, `<motdepasse>` et `maBdd` par vos informations réelles.

### 4. Démarrer le serveur

```
npm start
```

ou

```
node app.js
```

### 5. Utiliser l’application

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur pour :  
- Saisir de nouvelles commandes (accueil)
- Voir la liste des commandes et changer leur statut (page dédiée)

---

## 🗂️ Structure du projet

```
.
├── app.js
├── .env
├── models/
│   └── Order.js
├── routes/
│   └── orderRoutes.js
├── views/
│   ├── orderForm.ejs
│   └── orderList.ejs
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```
