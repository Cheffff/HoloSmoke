# HoloSmoke
> Application de recherche de bureaux de tabac en réalité augmentée .

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]


![](header.png)

## Installation

OS X 
```sh
cordova platform add ios 
cordova run ios
```

Android:

```sh
cordova run android
```

## Utilisation

Ouvret l'application et profitez trouver le bureau de tabac le plus proche.


## Development setup

Réalisé avec Cordova 7.1.0.

```sh
npm install -g cordova
```

Utilisation de l'API Google Maps
Plugin de géolocalisation

## Fonctionalité

* Recherche des bureaux de tabac a proximité
* Affichage en Réalité augmentée avec le module ezAR
* Guidage en temps réel
* Choix de la zone de recherche

## Explication

* Recherche de la position de l'utilisateur
* Lancement d'une requete via Google API
* Parsing des resultats dans objets dynamique
* Affichage des resultats, en passant par des fonctions de calcul pour pouvoir les afficher correctement en réalité augmentée (ezAR)
* Parametrage simple des resultats obtenu par l'utilisateur

* Pour toutes questions contactez-nous ^^

## Meta

Groupe de travail n°

Nabil Abbach – [@NabilAbbach](https://twitter.com/dbader_org) – nabil.abbach@epitech.eu 
Olivier laffon - [@iLLoDev](https://twitter.com/dbader_org) - olivier.laffon@epitech.eu
Aymeric Gand - aymeric.gand@epitech.eu (n'a pas participé au cours)


<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/cordova.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/cordova
[npm-downloads]: https://img.shields.io/npm/dm/cordova.svg?style=flat-square
[wiki]: https://github.com/yourname/yourproject/wiki
