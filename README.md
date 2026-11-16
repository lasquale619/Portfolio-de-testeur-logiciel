# Portfolio — Mohamed Bouguellid, testeur QA

[![Test and Deploy](https://github.com/lasquale619/Portfolio-de-testeur-logiciel/actions/workflows/ci.yml/badge.svg)](https://github.com/lasquale619/Portfolio-de-testeur-logiciel/actions/workflows/ci.yml)
![Cypress](https://img.shields.io/badge/Cypress-15-17202C?logo=cypress&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-déployé-222222?logo=github)

**👉 Voir le site : [lasquale619.github.io/Portfolio-de-testeur-logiciel](https://lasquale619.github.io/Portfolio-de-testeur-logiciel/)**

Mon portfolio de testeur logiciel : parcours, compétences (test manuel, tests API, automatisation) et projets.

Le site est lui-même **testé avant chaque mise en ligne** : à chaque push, GitHub Actions lance la suite Cypress et ne déploie sur GitHub Pages que si tous les tests passent.

## Projets présentés

| Projet | Outils |
|---|---|
| [Playwright — Notes](https://github.com/lasquale619/PlaywrightPractice) | Playwright, TypeScript, tests UI et API, mocking réseau, Squash TM, CI |
| [Eco Bliss Bath](https://github.com/lasquale619/Automatisez-des-tests-pour-Eco-Bliss-Bath) | Cypress, tests E2E et API, anomalie détectée sur l'API panier |
| [Robot Framework — SauceDemo](https://github.com/lasquale619/robot-framework-saucedemo) | Robot Framework, Browser Library, data-driven, CI |
| [Playwright + Cucumber](https://github.com/lasquale619/Playwright-Cucumber) | BDD, Gherkin, Playwright, CI |
| [TOMSEN](https://github.com/lasquale619/TOMSEN) | Revue des exigences, stratégie de test, cahier de recette |
| [724events](https://github.com/lasquale619/724events) | Campagne de tests, suivi des anomalies dans Jira |

## Ce que vérifient les tests du site

[`cypress/e2e/portfolio.cy.js`](cypress/e2e/portfolio.cy.js) — 13 tests :

- chaque lien du menu est visible et mène à la bonne section ;
- les sections Accueil, À propos et Contact affichent leur contenu ;
- le nombre de cartes Compétences et Projets correspond aux fichiers `data/skills.json` et `data/portfolio.json`, et chaque carte a une image, un titre et un texte ;
- les liens de contact (téléphone, email, LinkedIn) sont corrects.

## Lancer le site et les tests en local

```bash
npm ci
npx serve . -l 5500      # site sur http://127.0.0.1:5500
npx cypress run          # dans un second terminal
```

## Modifier le contenu

Les cartes sont générées en JavaScript à partir de deux fichiers JSON : pour ajouter un projet ou une compétence, il suffit d'ajouter une entrée dans [`data/portfolio.json`](data/portfolio.json) ou [`data/skills.json`](data/skills.json), avec son image dans `images/`.

## Stack

HTML · CSS · Bootstrap 5 · JavaScript · Cypress · GitHub Actions · GitHub Pages
