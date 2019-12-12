---
identifier: 124
layout: project
year: West 2019
isFirst: false
isLast: false
"name": "Mein Stadtarchiv"
"image": "/img/projekte/2019_west/mein_stadtarchiv.jpg"
"tile": "/img/projekte-tiles/2019_west/mein_stadtarchiv.png"
"tile_active": "/img/projekte-tiles/2019_west/mein_stadtarchiv-active.png"
"team":
    -
        "name": "Ernesto Ruge"
        "contact":
            "mail": "mailto:ernesto.ruge@binary-butterfly.de"
    -
        "name": "Klaus Deja"
        "contact":
            "mail": "mailto:klaus.deja@binary-butterfly.de"
"data":
    - "Archiv der behindertenpolitischen Selbsthilfe"
    - "Montanhistorisches Dokumentationszentrum (montan.dok) beim Deutschen Bergbau-Museum Bochum"
    - "Stadtarchiv Moers"
    - "Stadtarchiv Kerpen"
    - "OpenStreetMap"
"links":
    -
        "class": "website"
        "link": "https://mein-stadtarchiv.de/"
        "text": "Webseite"
    -
        "class": "github"
        "link": "https://github.com/okfde/mein-stadtarchiv"
        "text": "GitHub"
           
---
In kommunalen Archiven befindet sich die Geschichte einer Stadt – und damit auch die ganz persönliche Geschichte der Einwohner\*innen. "Mein Stadtarchiv" hat es sich zum Ziel gemacht, diese Geschichte allen Menschen zur Verfügung zu stellen. Dabei möchte "Mein Stadtarchiv" mehr sein als eine reine Such-Datenbank, sondern eine Plattform, die mit neuen Datendarstellungsformen die Einstiegshürde für Stadtgeschichte senkt.

In der ersten Version aus dem Jahr 2017 ist "Mein Stadtarchiv" eine Such-Datenbank mit hochaufgelösten Bildern gewesen. Die Daten kamen ausschließlich aus Kerpen, und es gab abseits eines API-Endpunktes keine Möglichkeit zum Upload und Bearbeiten der Daten.

Seit Coding da Vinci Westfalen-Ruhrgebiet 2019 hat "Mein Stadtarchiv" nun folgende Features:

- Schnelle Volltextsuche über alle Dokumente und Medien:
Interessante Dokumente und Objekte können so schnell gefunden werden, selbst dann, wenn man die Kategorisierung des Archives nicht kennt.
- Galerie mit hochauflösenden Scans und Fotos: 
Bilder erzeugen einen erheblich tieferen Bezug zur Geschichte einer Stadt. Daher wurde eine zusäztliche Ansicht geschaffen, die Bilder in den Vordergrund stellt.
- Geografische Karte: 
Geolokalisierte Dokumente können nun auch auf einer Karte dargestellt werden. Da viele Menschen sehr räumlich denken (zum Beispiel: Wie sah ein Stadtteil früher aus?), ist dies ein ganz neuer Weg, Geschichte zu entdecken.
- Rückmelde-Funktion: 
Oft können Bürger\*innen wertvolle Zusatzinformationen geben, so dass es eine Kommentar- und Rückmelde-Funktion gibt.
- Admin-Interface mit Geocoding, Unterstützung mehrerer XML-Formate und damit vieler verschiedener Archive, Bild-Upload u.v.m.: 
Um Archiven den Datenupload zu vereinfachen, wurde ein Verwaltungs-Interface geschaffen.

Außerdem gab es ein umfangreiches Refactoring. Die Open-Source-Software basiert nun auf Python 3.6+, Flask, ElasticSearch 7, MongoDB 4.2 und kann mit einfachen Mitteln via Docker eingesetzt werden.<br/><br/>
Projektpräsentation: <a href="/projekte/2019_west/mein_stadtarchiv.pdf" target="_blank">pdf</a>