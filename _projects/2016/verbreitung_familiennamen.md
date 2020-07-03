---
identifier: 52
layout: project
year: Nord
year2: 2016
"name": "Verbreitung von Familiennamen"
"tile": "/img/projekte-tiles/2016/familiennamen.png"
"tile_active": "/img/projekte-tiles/2016/familiennamen-active.png"
"image": "/img/projekte/familiennamen.png"
"links":
    -
        "class": "website"
        "link": "http://dinkla.net/de/programming/javascript-familiennamen.html"
        "text": "Webseite"
    -
        "class": "github"
        "link": "https://github.com/jdinkla/codingdavinci-familiennamen"
        "text": "GitHub"
"data":
    - "Deutsche Arbeitsgemeinschaft genealogischer Verbände e.V. (DAGV)
"
"team":
    -
        "name": "Jörn Dinkla"
---
Auf Basis der von der Deutschen Arbeitsgemeinschaft Genealogischer Verbände (DAGV) erstellten Daten über Familiennamen wurde eine Web-Applikation erstellt, mit der die Daten analysiert und visuell dargestellt werden können.

Die Applikation hat die folgenden Arbeitsbereiche:

- Daten
    - Anzeigen der Rohdaten
    - Beschreibung der zur Anreicherung genutzten Daten für Karten und PLZ
    - Probleme der Daten
        - Beschreibung der aufgetretenen Probleme
        - Datenqualität
- Analyse
    - Suche in den Daten nach dem Namen
        - exakte Suche
        - Suche mit LIKE-Muster
        - Suche mit regulärem Ausdruck
        - Suche ähnlicher Namen anhand der Levenshtein-Metrik
- Visualisierung
    - Geographisch auf einer Deutschlandkarte
    - Zeitlich auf einer Zeitachse
    - Ähnlichkeiten von Namen anhand eines Netzwerks / Graphen anhand der Levenshtein-Metrik

Als Beispiel kann man sich alle Datensätze anzeigen lassen, die die Zeichenkette „meier“ beinhalten. Hier werden beispielsweise auch die Namen „Bachmeier“ und „Meierhof“ zurückgegeben.
In der Visualisierung kann man sich die geographische und die zeitliche Verteilung anzeigen lassen. Auf einer Deutschlandkarte werden die Namen in unterschiedlichen Farben und Helligkeiten dargestellt. Mit Hilfe einer Zeitleiste lässt sich die Entstehung der Namen untersuchen.

#### Anmerkungen zur Technik

Die Applikation wurde mit den folgenden Mitteln erstellt:

- Browser: d3.js, Angular, Bootstrap
- Web-Server: node.js, express
- Datenbanken: MariaDB für die Tabellen, Neo4J für den Graphen

Eine genauere Beschreibung der technischen Begebenheiten befindet sich in der Dokumentation im Repository auf github.
