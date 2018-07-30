---
identifier: 78
layout: project
year: Ost 2018
isFirst: false
isLast: false
"name": "Leibniz Maps"
"tile": "/img/projekte-tiles/2018/leibniz_maps.png"
"tile_active": "/img/projekte-tiles/2018/leibniz_maps-active.png"
"image": "/img/projekte/leibniz_maps.jpg"
"links":
    -
        "class": "website"
        "link": "https://mprove.de/chronoscope/leibnizmaps/index.html"
        "text": "Webseite"
"data":
    - "Historische Kartensammlung (Leibniz-Institut für Länderkunde e.V., Geographische
Zentralbibliothek)"
"team":
    -
        "name": "Matthias Müller-Prove"
        "contact":
            "mail": "mailto:mprove@acm.org"
---
Das Web-Portal „Leibniz Maps“ bietet einen interaktiven und explorativen Zugang zu über 1.100 historischen Landkarten des 17. bis 19. Jahrhunderts, die vom Leibniz-Institut für Länderkunde e.V. unter CC0-Lizenz zur Verfügung gestellt wurden. Dazu werden die Metadaten zur Laufzeit vom Browser in eine Web-Seite überführt, die unter Usability- und Informationsdesign-Aspekten gestaltet wurde.

Durch die Aufteilung und Zusammenfassung der Metadaten in verschiedene Spalten wird eine gleichmäßige Informationsdichte erreicht. Die Karten sind grob nach Jahrzehnt sortiert. So entsteht einerseits ein Gefühl für die zeitliche Erstellung, andererseits bleibt der Kontext der Karten mit fortlaufender Signatur erhalten, da sie nicht durch eine zeitgleich veröffentlichte Karte aus einer anderen Region der Welt unterbrochen werden. Die Tabelle ist im Volltext durchsuch- und filterbar. Letzteres heißt, dass Zeilen, die den Suchbegriff nicht enthalten, temporär ausgeblendet werden. Für den Nutzer erscheint diese Herangehensweise wie eine übliche Suchmaschine. Allerdings bietet die zusätzliche Komplettansicht der aufbereiteten Metadaten den Vorteil, dass der Anwender sich mit der Terminologie vertraut machen kann und bessere Suchbegriffe wählt. Die Metadaten enthalten auch Hyperlinks zum jeweiligen Eintrag der Karte im Online-Katalog des Leibniz-Instituts, sowie einen direkten Link auf das Digitalisat der Karte in höchster Scan-Auflösung. Da die Anzeige der Karten ob der Dateigröße aber recht langsam ist, wird im „Chronoscope World“ eine Vorschau der Karte in Bildschirm-Auflösung mit einem performanten Ladeverhalten an korrekter Lage auf einer eingeblendeten Weltkarte angezeigt. Falls die Karte nicht auf Nord ausgerichtet ist, wird zudem die Welt unter der Karte gedreht, sodass beide Ansichten relativ zueinander in Deckung gebracht werden. Der geographische Abgleich ist jeweils eine Animation, die nicht zu schnell ist, damit der Nutzer nicht die Orientierung verliert. Eine höher aufgelöste Karte wird dynamisch nachgeladen, sodass man feine Details auch schon beim Zoom im „Chronoscope World“ erkennen kann.

„Leibniz Maps“ unterstützt ein exploratives Stöbern. Denn obwohl die Tabelle weit über 1.000 Datensätze enthält, wird die Balance zwischen Neugierde und einem Übermaß an Informationen gewahrt. Zur System-Architektur:

Die XML-Metadaten (4MB) des Leibniz-Instituts sind die Ausgangslage für das Projekt. Die Datei selbst wurde nicht bearbeitet, so dass Aktualisierungen vomLeibniz-Institut leicht integriert werden können. Sämtliche Modifikationen finden zur Laufzeit mittels einer eXtensible Stylesheet Language (XSL)-Transformation statt, die die XML-Datei in eine Web-Tabelle überführt. In diesem Schritt werden zudem die Karten nach Erscheinungsjahr sortiert und die Geo-Koordinaten werden ausgelesen und für das Chronoscope vorbereitet. Außerdem bekommt jede Karte einen Anker, mit dem die Zeile direkt angesprungen werden kann. Das ist die Minimalvoraussetzung für kollaboratives Arbeiten mit den Daten bzw. für das Teilen der Karten in sozialen Netzen. Das „Chronoscope World“ ist eine Weiterentwicklung des „Chronoscope Hamburg“, das im Rahmen von Coding Da Vinci Nord 2016 entstanden ist und das als Projekt des Europäischen Kulturerbejahres 2018 ausgewählt wurde. Für den Einsatz als iFrame in der oberen Bildschirmhälfte bei „Leibniz Maps“ mussten lediglich die Anzeige der Karten-Position und Vorschau entwickelt werden. Die Vorschau-Bilder kommen über den IIIF-Server Manducus der seige.digital GbR; (Das International Image Interoperability Framework (IIIF) liefert performant Ansichten in beliebiger Zoomstufe.)

Da bei fast 10% der Karten das Chronoscope auf die Peilung der Karte gedreht werden soll, musste für ca. 30 Karten die fehlende Information ergänzt werden. Dies geschieht im JavaScript des Chronoscope und nicht in den XML-Metadaten.
