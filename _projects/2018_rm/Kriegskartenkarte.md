---
identifier: 100
layout: project
year: Rhein-Main 2018
isFirst: false
isLast: true
"name": "Kriegskartenkarte"
"tile": "/img/projekte-tiles/2018_rm/kriegskartenkarte.png"
"tile_active": "/img/projekte-tiles/2018_rm/kriegskartenkarte-active.png"
"image": "/img/projekte/kriegskartenkarte.png"
"links":
    -
        "class": "Webapplikation"
        "link": "https://vwestric.shinyapps.io/kriegs_karten_karte/"
        "text": "Webapplikation"
"data":
    - "Hessisches Staatsarchiv Marburg: Wilhelmshöher Kriegskarten"
    - Wikpedia/Wikidata
    - Geonames
"team":
    -
        "name": "Victor Westrich"
        "contact":
            "mail": "mailto:vwestric@students.uni-mainz.de"
---
Die Idee hinter dem Projekt ist, wie bereits der Titel impliziert, eine digitale ‚Metakarte‘ für die Abbildung der Wilhelmshöher Kriegkarten zu schaffen. Ziel ist es, Nutzer*innen über den visuellen, räumlichen Zugang, den eine digitale Karte bietet, zur Exploration der Kriegskarten in ihrem geographischem Kontext zu animieren.

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

Eine Demoversion der noch nicht fertig gestellten Anwendung findet sich unter: https://vwestric.shinyapps.io/kriegs_karten_karte/

Problemstellen der Anwendung sind zunächst die genaue Verortung der Schlachtfelder, die zunächst auf die im Titel des Datensatzes genannten Orte verortet wurden, z.B. „Schlacht bei Rocoi“ = Rocoi. In der Kürze der Zeit ließ sich aber bisher keine effizientere und genauere Verortung der Schlachtfelder finden.

Die Wikipedia Online-Enzyklopädie liefert tatsächlich für eine ganze Reihe von Schlachten Koordinaten, aber aufgrund des (teilweise) nicht gesicherten Status dieser Daten wurden diese Datensätze allerdings nicht mit den Wilhelmshöher Kriegskarten verknüpft, sondern separat eingespielt. Die englische Wikipedia wurde aufgrund der (teilweise) höheren Informationsmenge und Artikelanzahl gewählt.
Ein weiteres Problem sind Encoding-Schwierigkeiten des Frontends bei R Shiny in Bezug auf deutsche Umlaute o.Ä., die ebenfalls noch gelöst werden müssen.

Zusammengefasst:

Für die Endnutzer*innen soll die Anwendung einen visuellen Einstieg zum Datenset der Wilhelmshöher Kriegskarten bieten. Nach der Fertigstellung sollen für interessierten Nutzer*innen eine Plattform zur Verfügung stehen, die sie animiert, durch eigene Georeferenzierung einzelner Karten zur Qualität des Datensets beizutragen.

Falls dies von den Datengebern gewünscht ist, würde ich nach dem Ende des Hackathons sehr gerne weiter an der App arbeiten, zumindest bis zu ihrer Fertigstellung, aber auch darüber hinaus.
