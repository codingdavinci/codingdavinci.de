---
identifier: 130
layout: project
year: West 2019
isFirst: false
isLast: false
"name": "NWBib-NRW Städte-Quiz"
"image": "/img/projekte/2019_west/nwbiQuiz.jpg"
"tile": "/img/projekte-tiles/2019_west/nwbiQuiz.png"
"tile_active": "/img/projekte-tiles/2019_west/nwbiQuiz-active.png"
"team":
    -
        "name": "Pascal Christoph"
        "contact":
            "mail": "mailto:christoph@hbz-nrw.de"
            "twitter": "https://twitter.com/dr0ide"
            "github": "https://github.com/dr0i/"
"data":
    - "Hochschulbibliotheks-zentrum des Landes Nordrhein-Westfalen"
    - "Wikidata"
    - "lobid-resources (http://lobid.org/resources)"
    - "Die Nordrhein-Westfälische Bibliographie (NWBib)"
    - "lobid-gnd (http://lobid.org/gnd)"
"links":
    -
        "class": "website"
        "link": "https://lobid.org/download/tmp/nrw-quiz/map.html"
        "text": "Webseite"
    -
        "class": "github"
        "link": "https://github.com/dr0i/nwbib-quiz"
        "text": "GitHub"
           
---
Das Städte-Quiz richtet sich an Jung und Alt. Im Zentrum steht das Bundesland NRW. Es ist eingebettet in OpenStreetMap, um einen Kontext zu erhalten. Im Quiz gilt es, Fotos von Städten, Gebäuden, Personen, Institutionen usw. den Städten zuzuordnen und somit ein Gefühl für die verschiedenen Regionen und den Charakter der Städte, über ihre Geschichte und Bedeutung, zu bekommen. Die Kartenvisualisierung vereinfacht darüber hinaus, den geographischen Zusammenhang zu erkennen und trainiert die räumliche Zuordnung von Städten und Regionen NRWs.

Inspiriert wurde das Quiz durch ein anderes Projekt von CdV Westfalen-Ruhrgebiet: euregio-history. Dort werden Städte auf einer interaktiven Karte angezeigt, um die
Dutzenden Zeitzeugengeschichten zu visualisieren. Auf der Suche nach einer Idee für ein CdV-Projekt für die mehr als 400.000 Metadaten der NRW-Bibliographie (NWBib), die dem Städte-Quiz zugrundeliegen, lag es damit Nahe, eine Geo-Datenvisualisierung umzusetzen. Die Geodaten der Städte liegen bereits in den Daten vor, auch deren Verlinkung zu Wikidata, um an grafische Repräsentationen zu gelangen. Spannendere Daten lassen sich über die lobid-API ermitteln: Das häufigste vergebene Schlagwort der in der Bibliographie mit Städtebezug verzeichneten Publikationen lässt sich durch einen API-Aufruf erhalten. Häufig sind diese Schlagworte mit Bildern in der Wikidata vertreten, sodass sich diese in das Quiz einbauen lassen. Ein interessanter Aspekt ist die automatische Erzeugung des Quizes: die Grundlage ist die große Datenmenge und die gute Verlinkung der Daten mit u.a. Wikidata.

Die Datensets werden mittels Java und einigen Bash-Skripten sowie den offenen Web-APIs von Wikidata und lobid.org erzeugt. Die Webapp basiert auf Javascript-Programmen von <a href="https://twitter.com/_hanwong" target="_blank">https://twitter.com/_hanwong</a>, die bei CdV Ost 2018 entstanden (<a href="https://github.com/CodeforLeipzig/codingdavinciost2018" target="_blank">https://github.com/CodeforLeipzig/codingdavinciost2018</a>).

Es wäre spannend, weitere Datensets zu erzeugen, für kleinere Städte oder Euregio-Regionen.<br/><br/>
Projektpräsentation: <a href="/projekte/2019_west/nwbiQuiz.pdf" target="_blank">pdf</a>