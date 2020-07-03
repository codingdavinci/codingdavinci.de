---
identifier: 100
layout: project
year: Rhein-Main
year2: 2018
isFirst: false
isLast: true
"name": "Kriegskartenkarte"
"tile": "/img/projekte-tiles/2018_rm/kriegskartenkarte.png"
"tile_active": "/img/projekte-tiles/2018_rm/kriegskartenkarte-active.png"
"image": "/img/projekte/kriegskartenkarte.png"
"links":
    -
        "class": "website"
        "link": "https://vwestric.shinyapps.io/kriegs_karten_karte/"
        "text": "Webapplikation"
"data":
    - "Hessisches Staatsarchiv Marburg, Wilhelmshöher Kriegskarten"
    - Wikpedia/Wikidata
    - Geonames
"team":
    -
        "name": "Victor Westrich"
        "contact":
            "mail": "mailto:vwestric@students.uni-mainz.de"
---
Die Idee hinter dem Projekt ist, wie bereits der Titel impliziert, eine digitale ‚Metakarte‘ für die Abbildung der Wilhelmshöher Kriegkarten zu schaffen. Ziel ist es, die Nutzerinnen und Nutzer über den visuellen räumlichen Zugang, den eine digitale Karte bietet, zur Exploration der Kriegskarten in ihrem geographischem Kontext zu animieren.

Eine persönliche Motivation für die Arbeit an diesem Projekt war es, die Anwendbarkeit von Shiny Apps im geisteswissenchaftlichen Kontext bezogen auf die Visualisierung von räumlichen Daten zu testen. Mit diesem Themenfeld habe ich mich bereits in meiner Bachelorarbeit beschäftigt, und ich würde mir wünschen, dieses Projekt auf einer Plattform unter realen Bedingungen und vielleicht sogar mit einer größeren Zahl Nutzerinnen testen zu können.

Der erste Schritt des Projekts ist es daher, eine Karte zu erstellen, in der alle Karten anhand der vorhandenen Metadaten platziert sind und gefiltert werden können. Diese dient zugleich als räumliche Visualisierung des Datensatzes.

In Vorbereitung auf die Georeferenzierung der Karten wurden zunächst die einzelnen Datensätze nach dem im Kartentitel genannten Austragungsort der Schlacht normalisiert und mit Geokoordinaten von https://www.geonames.com ausgestattet. Dieser Prozess ist bisher zu 70% abgeschlossen.

Mithilfe der auf Javascript basierenden Programmbibliothek Leaflet for R und des Frameworks für Webapplikationen R Shiny wurde diese digitale „Metakarte“ realisiert. Für weitere technische Details würde ich auf das entsprechende GitHub-Repo zum Projekt verweisen, was spätestens Samstag vollständig online gehen wird.

Realisierte Features sind bisher:

• Ein Marker am jeweiligen Ort der Schlacht, dessen Popup Titel, eine Miniaturansicht der Karte und einen Link zum Digitalisat der Karte enthält,

• Ein Overlay basierend auf den historischen Grenzen der Kriegsparteien zum Zeitpunkt des Krieges. Bisher sind noch nicht für alle Kriege entsprechende Shapefiles historischer Grenzen erstellt/ aus öffentlich zugänglichen Quellen bezogen worden.

• Als Referenzdatensatz wurden außerdem aus der englischen Wikipedia alle entsprechenden Schlachten des jeweiligen Krieges, die einen eigenen Artikel besitzen, als separates Set Marker auf die Karte gebracht. Das Popup enthält hier jeweils einen Link zum entsprechenden Wikipedia-Artikel und eine Kurzzusammenfassung der Schlacht daraus.

• Die Markersets / Overlays können nach Kriegen gefiltert, einzeln oder zusammen betrachtet werden.

Bisher nicht realisierte Features, die aber noch geplant sind:

• Eine Plattform zur tatsächlichen Georeferenzierung der einzelnen Kartendigitalisate. Aufgrund der höheren Komplexität ließ sich dieses Feature bisher nicht realisieren. Grundsätzlich wäre es allerdings wohl auch probat, mit einem bestehenden Anbieter einer freien Plattform zur Georeferenzierung per Crowdsourcing zusammenzuarbeiten, z.B. https://www.mapwarper.net.

• Eine Filterfunktion nach Datum der Schlacht. Hierzu müssen zunächst sowohl die aus Wikipedia als auch die vom Hesssischen Staatsarchiv Marburg importierten Textdaten normalisiert werden.

• Grundsätzlich ist zu sagen, dass noch nicht alle Datensätze, die in das Projekt einbezogen werden sollen, vollständig aufbereitet sind.

