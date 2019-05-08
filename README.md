# FestivalsPW

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Lancer 'ng serve -o' pour lancer le serveur et ouvrir le navigateur à l'adresse 'http://localhost:4200/'

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Changer la base de données
Pour changer la base de données, (c'est-à-dire passer de la BD de production à la BD de test) il suffit d'accéder au fichier manip-donnees.service.ts situé à l'emplacement '/src/app/manip-donnees.service.ts' et de commenter/décommenter les lignes correspondantes :
- ligne 11 à ligne 18 pour la BD de tests
- ligne 21 à ligne 28 pour la BD de production
