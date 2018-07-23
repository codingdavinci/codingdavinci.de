---
identifier: 75
layout: project
year: Ost 2018
isFirst: false
isLast: false
"name": "Börsendaten"
"tile": "/img/projekte-tiles/2018/boersendaten.png"
"tile_active": "/img/projekte-tiles/2018/boersendaten-active.png"
"image": "/img/projekte/boersendaten.jpg"
"links":
    -
        "class": "github"
        "link": "https://github.com/NucsuM/cdv2018-leipzigerBoersenverein-datacleaner"
        "text": "GitHub"
"data":
    - "Firmenakten des Börsenvereins der deutschen Buchhändler zu Leipzig"
    - "OpenStreetMap"
---
Das Sächsische Staatsarchiv hat für Coding da Vinci Ost 2018 Daten über Ihren Bestand an Firmenakten des Börsenvereins der deutschen Buchhändler zu Leipzig zur Verfügung gestellt. Die Datensätze werden aufbereitet und auf einer Karte visualisiert.

Die Daten über den Bestand an Firmenakten des sächsischen Staatsarchivs liegen in CSV-Form vor. Sie enthalten Jahresangaben, Namen von Inhabern, Art der Firmen (Buchhandlungen oder Antiquariate) und den Ort der Unternehmung.

Gegenstand des Projektes ist die visuelle Darstellung des Datenbestandes sowie die Aufbereitung der Daten.

Die visuelle Darstellung wird via OpenStreetMap und farbliches Punkte auf der Karte umgesetzt, die je nach Anzahl der Firmen in der Größe variieren. Das ganze wird noch über die Art der Unternehmung (Buchhandlung, Antiquariat etc.) filterbar sein. Geplant ist, den zeitlichen Horizont ebenfalls abzubilden. Somit lässt sich auf einer Karte der Datenbestand interaktiv betrachten.

Problematisch ist, dass wesentliche Daten wie Namen der Inhaber, Art der Unternehmung und der Ort in einer Spalte mittels Kommas getrennt erfasst wurden und dies keinem strengem maschinenlesbarem Schema erfolgt. Aus Sicht des Archivs eine sinnvolle und durchaus praktikable Vorgehensweise, jedoch für unser Projekt hinderlich.

Bis zu einem gewissen Grad können wir die Daten nach Inhaber, Art der Unternehmung und Ort wieder trennen. Leider ist das nicht vollständig möglich, so das eine menschliche Interaktion notwendig ist, die wir dritten spielerisch überlassen wollen.

Die Aufbereitung der verbleibenden Daten wird über eine Web-Applikation präsentiert. Hierbei werden dem Anwender die unklaren Datensätze präsentiert und verschieden Antwortmöglichkeiten zur Bereinigung angeboten - Gamification ist hier das Stichwort.
