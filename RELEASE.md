# Bulkloader v2.0.2

Bulkloader est un module qui permet de charger dynamiquement tous les modules d'un répertoire, ainsi que ses sous-répertoires, et de leur passer des arguments spécifiques. Idéal pour initialiser facilement plusieurs modules dans une application Node.js, il simplifie la gestion des dépendances et des configurations partagées.

## Nouveautés de la v2.0.2
* Fix du chargement dynamique

### Fonctionnalités principales :
* `Chargement dynamique des modules` : Charge tous les fichiers JavaScript présents dans un répertoire donné, y compris ceux situés dans les sous-répertoires.
* `Passage d'arguments personnalisés` : Transmet un ensemble d'arguments communs à chaque module chargé.
* `Support des sous-répertoires` : Permet d'activer ou non le chargement récursif des sous-répertoires.
* `Gestion centralisée des erreurs` : Les erreurs de lecture de répertoires ou de chargement de modules sont capturées et loguées de manière détaillée.
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
## Installation
Installez bulkloader via npm :
```
npm i @mlagie/bulkloader
```
