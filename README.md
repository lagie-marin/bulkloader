# Bulkloader
<img src="https://api.visitorbadge.io/api/VisitorHit?user=lagie-marin&repo=bulkloader-badge&countColor=%237B1E7A" height="20px"/> ![GitHub package.json version](https://img.shields.io/github/package-json/v/lagie-marin/bulkloader?color=#008000) ![NPM Downloads](https://img.shields.io/npm/d18m/%40mlagie%2Fbulkloader?color=#008000) ![NPM Downloads](https://img.shields.io/npm/dw/%40mlagie%2Fbulkloader?color=#008000) ![GitHub followers](https://img.shields.io/github/followers/lagie-marin?style=plastic&color=color%3D%23008000) ![GitHub repo size](https://img.shields.io/github/repo-size/lagie-marin/bulkloader?color=%green)
 ![GitHub last commit](https://img.shields.io/github/last-commit/lagie-marin/bulkloader) ![GitHub forks](https://img.shields.io/github/forks/lagie-marin/bulkloader?style=plastic&color=%green)

# Auteur
![AUTHORS](https://img.shields.io/badge/AUTHORS:-gray?style=for-the-badge) ![https://github.com/lagie-marin](https://img.shields.io/badge/Marin%20Lagie-yellow?style=for-the-badge&logo=undertale&logoColor=E71D29)
# Documentation du Module `bulkloader`
Le module `bulkloader` permet de charger dynamiquement tous les modules d'un répertoire donné, y compris ceux dans les sous-répertoires, et de leur passer des arguments spécifiques. Cela est particulièrement utile pour initialiser plusieurs modules avec des configurations ou des dépendances communes.

# Installation
```bash
npm i @mlagie/bulkloader
```

### Déclaration
```javascript
const bulkloader = require("@mlagie/bulkloader");
```
### Fonctionnalité
La fonction exportée par le module `bulkloader` prend deux paramètres :
* `dirPath` : Le chemin vers le répertoire contenant les modules à charger.
* `args` : Un tableau d'arguments à passer à chaque module chargé.
### Utilisation
#### Exemple de structure de répertoire simple
```
project/
|
├── modules/
│   ├── module1.js
│   ├── module2.js
│   └── module3.js
│
└── index.js
```
#### Exemple de code dans index.js
```javascript
const bulkloader = require("@mlagie/bulkloader");
const client = require('client'); // Exemple de client
const app = require('app'); // Exemple d'application

// Charger tous les modules du répertoire 'modules' et leur passer les arguments
bulkloader('./modules', [client, app]);
```

#### Exemple de structure de répertoire complexe
```
project/
|
├── modules/
|   ├── submodules/
|   |   ├──submodules1.js
|   |   ├──submodules2.js
│   ├── module1.js
│   ├── module2.js
│   └── module3.js
│
└── index.js
```
#### Exemple de code dans index.js
```javascript
const bulkloader = require("@mlagie/bulkloader");
const client = require('client'); // Exemple de client
const app = require('app'); // Exemple d'application

// Charger tous les modules et les sous modules du répertoire 'modules' et leur passer les arguments
bulkloader('./modules', [client, app], true);
```
### Gestion des erreurs
Le module `bulkloader` inclut une gestion des erreurs pour :
* La lecture du répertoire : Si une erreur se produit lors de la lecture du répertoire, un message d'erreur est affiché.
* Le chargement des modules : Si une erreur se produit lors du chargement d'un module, un message d'erreur est affiché avec le chemin du module et le message d'erreur.

### Conclusion
Le module `bulkloader` est un outil puissant pour charger dynamiquement des modules et leur passer des arguments spécifiques. En centralisant le chargement des modules et la gestion des erreurs, il simplifie la gestion et l'initialisation des modules dans votre application.