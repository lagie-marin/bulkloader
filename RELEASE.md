# Bulkloader v3.0

Bulkloader est un module qui permet de charger dynamiquement tous les modules d'un répertoire, ainsi que ses sous-répertoires, et de leur passer des arguments spécifiques. Idéal pour initialiser facilement plusieurs modules dans une application Node.js, il simplifie la gestion des dépendances et des configurations partagées.

## Nouveautés de la v3.0
* Fix du chargement dynamique
* Ajout de la possibilité d'ignorer certains fichiers ou dossiers via un paramètre `ignore`

### Fonctionnalités principales :
* `Chargement dynamique des modules` : Charge tous les fichiers JavaScript présents dans un répertoire donné, y compris ceux situés dans les sous-répertoires.
* `Passage d'arguments personnalisés` : Transmet un ensemble d'arguments communs à chaque module chargé.
* `Support des sous-répertoires` : Permet d'activer ou non le chargement récursif des sous-répertoires.
* `Ignorer des fichiers ou dossiers` : Possibilité d'exclure certains fichiers ou dossiers du chargement grâce au paramètre `ignore`.
* `Gestion centralisée des erreurs` : Les erreurs de lecture de répertoires ou de chargement de modules sont capturées et loguées de manière détaillée.

### Exemple de structure de répertoire complexe
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

### Exemple d'utilisation simple
1. Organisez vos modules dans un répertoire.
2. Appelez bulkloader pour charger tous les modules et leur passer des arguments.
```
const bulkloader = require("@mlagie/bulkloader");
const client = require('client'); // Exemple de client
const app = require('app'); // Exemple d'application

bulkloader('./modules', [client, app]);
```
### Exemple avec sous-répertoires
Activez le chargement des sous-répertoires avec un troisième paramètre.
```
bulkloader('./modules', [client, app], true);
```
### Exemple avec exclusion de fichiers ou dossiers
Ignorez certains fichiers ou dossiers en utilisant le quatrième paramètre :
```
bulkloader('./modules', [client, app], true, ['module2.js', 'submodules']);
```
## Installation
Installez bulkloader via npm :
```
npm i @mlagie/bulkloader
```
