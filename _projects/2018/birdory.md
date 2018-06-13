---
identifier: 74
layout: project
year: 2018
isFirst: false
isLast: false
"name": "Birdory"
"tile": "/img/projekte-tiles/2018/birdory.png"
"tile_active": "/img/projekte-tiles/2018/birdory-active.png"
"image": "/img/projekte/birdory.jpg"
"links":
    -
        "class": "website"
        "link": "https://birdory.firebaseapp.com"
        "text": "Webseite"
    -
        "class": "github"
        "link": "https://github.com/Tuginho/Birdory"
        "text": "GitHub"
"data":
    - "Tierstimmen (Museum für Naturkunde Berlin)"
---
Birdory ist ein Spiel, bei welchem Vogelstimmen dem korrekten Vogel zugeordnet werden müssen. In jeder Spielrunde wird eine Vogelstimme abgespielt und dazu werden vier Vögel mit Bild und Name als Antwortmöglichkeit geboten. Errät man den zur Stimme passenden Vogel, gibt es einen Punkt. Der eigene aktuelle Highscore kann jederzeit im Hauptmenü abgerufen werden.

Um das Spiel sowohl im Browser, als auch wie eine native App auf dem Smartphone nutzen zu können, wurde es als Progressive Web App umgesetzt. Ruft man die Applikation mobil im Browser auf, wird automatisch vorgeschlagen sie dem Startbildschirm des Smartphones hinzuzufügen. Sind die Vogeldaten einmal geladen, kann die App sogar offline verwendet werden.

Birdory ist in Javascript implementiert. Als Framework kommt Vue.js zum Einsatz. Als Datenquelle für die Tierstimmen wird das Tierstimmenarchiv des Museums für Naturkunde Berlin genutzt. Der Zugriff erfolgt über die Europeana Search API. Diese liefert neben dem Bild auch die wissenschaftliche Bezeichnung der Vögel. Anhand dieser Bezeichnung wird zu jedem Vogel per SPARQL Abfrage an DBpedia ein Bild gesucht. Nachdem die Daten beim ersten Aufruf der Applikation einmal geladen wurden, werden sie aus Performancegründen lokal – also clientseitig – gespeichert.
