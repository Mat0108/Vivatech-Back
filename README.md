# VivaTech Back

Ce projet est une application back-end développée en Node.js avec une base de données MySQL. Il complète le projet VivaTech-Front. L'application nous permet de récupérer et stocker des données récoltés sur les pages CV, Pass, QRCode, ainsi qu'utilisateur de VivaTechFront.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- Node.js (version X.X.X) : [Lien vers Node.js](https://nodejs.org)
- MySQL (version X.X.X) : [Lien vers MySQL](https://www.mysql.com)

## Installation

1. Clonez ce dépôt sur votre machine : git clone https://github.com/Mat0108/Vivatech-Back.git
2. Accédez au répertoire du projet : cd Vivatech-Back
3. Installez les dépendances : npm install
4. Configuration de la base de données :

  - Créez une base de données MySQL.
  - Copiez le fichier `.env.example` et renommez-le en `.env`.
  - Dans le fichier `.env`, configurez les informations de connexion à votre base de données :

    ```
    NODE_ENV=development

    MYSQL_HOST=vivatech_back_db
    MYSQL_ROOT_PASSWORD=vivatech
    MYSQL_DATABASE=vivatech
    MYSQL_USER=vivatech_back
    MYSQL_PASSWORD=vivatech
    MYSQL_PORT=3306

    JWT_KEY=secretkey

    ```
  
## Accédez à l'application à les adresses suivantes :

### Mise en production : 

  ### Utilisateur

  #### Affichage de tous les utilisateurs (GET)
  - https://viva.pari0200.mds-paris.yt/users

  #### Inscription d'utilisateur (POST)
  - https://viva.pari0200.mds-paris.yt/user/register

  #### Connexion d'utilisateur (POST)
  - https://viva.pari0200.mds-paris.yt/user/login

  #### Ajout un cv dans les informations de l'utilisateur (POST)
  - https://viva.pari0200.mds-paris.yt/user/add/cv

  #### Ajout un qrcode dans les informations de l'utilisateur (POST)
  - https://viva.pari0200.mds-paris.yt/user/add/qrcode


  ### Qr Code

  #### Affichage de tous les qrcode (GET)
  - https://viva.pari0200.mds-paris.yt/qrcode

  #### Créer un qrcode (POST)
  - https://viva.pari0200.mds-paris.yt/qrcode


  ### CV

  #### Affichage de tous les cv (GET)
  - https://viva.pari0200.mds-paris.yt/cv

  #### Créer un cv (POST)
  - https://viva.pari0200.mds-paris.yt/cv 


### En local : 

  ### Utilisateur

  #### Affichage de tous les utilisateurs (GET)
  - https://localhost:3333/users

  #### Inscription d'utilisateur (POST)
  - https://localhost:3333/user/register

  #### Connexion d'utilisateur (POST)
  - https://localhost:3333/user/login

  #### Ajout un cv dans les informations de l'utilisateur (POST)
  - https://localhost:3333/user/add/cv

  #### Ajout un qrcode dans les informations de l'utilisateur (POST)
  - https://localhost:3333/user/add/qrcode


  ### Qr Code

  #### Affichage de tous les qrcode (GET)
  - https://localhost:3333/qrcode

  #### Créer un qrcode (POST)
  - https://localhost:3333/qrcode


  ### CV

  #### Affichage de tous les cv (GET)
  - https://localhost:3333/cv

  #### Créer un cv (POST)
  - https://localhost:3333/cv 


## Connexion à la base de données
Lien : https://localhost:8080

```
Système : MySQL
Serveur : vivatech_back_db
Utilisateur : vivatech_back
Mot de passe : vivatech
Base de données : vivatech
```

## Collaborateurs

1. OLIVIA Tania : Développeuse FullStack
