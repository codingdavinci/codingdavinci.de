---
identifier: 131
layout: project
year: West 2019
isFirst: false
isLast: true
"name": "euregio-history-map"
"image": "/img/projekte/2019_west/euregiohistoryMap.jpg"
"tile": "/img/projekte-tiles/2019_west/euregiohistoryMap.png"
"tile_active": "/img/projekte-tiles/2019_west/euregiohistoryMap-active.png"
"team":
    -
        "name": "Pascal Christoph"
        "contact":
            "mail": "mailto:christoph@hbz-nrw.de"
            "twitter": "https://twitter.com/dr0ide"
            "github": "https://github.com/dr0i/"
    -
        "name": "Alexandra Bloch"
        "contact":
            "mail": "mailto:ab@alexandra-bloch.de"
            "twitter": "https://twitter.com/ABlochPfister"
"data":
    - "Euregiohistory"
    - "Wikidata"
"links":
    -
        "class": "website"
        "link": "https://euregio-history.net/"
        "text": "Webseite"
    -
        "class": "github"
        "link": "https://github.com/dr0i/euregio-history-map"
        "text": "GitHub"
           
---
Die euregio-history sammelt Zeitzeugengeschichten im Grenzgebiet Niederlande-Deutschland. Aktuell (2019) exitsieren um die 70 Geschichten. Diese sind mit rudimentären Metadaten versehn, u.a. auch mit Ortsnamen. Das Miniprojekt ermöglicht es, diese Erzählungen auf einer Karte zu visualisieren – so wird der räumliche Bezug übersichtlich hergestellt. Zudem bietet die interaktive Karte eine weitere Möglichkeit der Selegierung dieser Grenzgeschichten.

Ein paar Skripte sind nötig, um aus den originären Städtenamen der Metadaten ein Matching auf Wikidata-Entitäten zu erzeugen. Von Wikidata lassen sich dann Geo-Daten holen. Diese werden mit einem Teil der Titeldaten von euregio-history in einer `geojson`-Datei gespeichert. Mittels Javascript wird diese Datei auf einer interaktiven OpenStreetMap dargestellt.

Die Datensets werden mittels Java und einigen Bash-Skripten sowie den offenen Web-APIs von Wikidata erzeugt. Die Webapp basiert auf der Javascript `leaflet`-Library.<br/><br/>
Projektpräsentation: <a href="/projekte/2019_west/euregiohistoryMap.pdf" target="_blank">pdf</a>