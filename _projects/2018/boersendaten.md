---
identifier: 75
layout: project
year: 2018
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
Die Daten über den Bestand an Firmenaktendes sächsischen Staatsarchivs liegen in CSV-Form vor. Sie enthalten Jahresangaben, Namen von Inhabern, Art der Firmen (Buchhandlungen oder Antiquariate) und den Ort der Unternehmung.
Ziel des Projektes ist die visuelle Darstellung des Datenbestandes und die Aufbereitung der Daten.
Die visuelle Darstellung stellen wir uns so vor, dass via OpenStreetMap schicke rote Punkte auf der Karte erscheinen, die je nach Anzahl der Firmen größer oder kleiner werden. Das ganze soll noch über die Art der Unternehmung (Buchhandlung, Antiquariat etc.) filterbar sein. Vielleicht bekommen wir es sogar hin, dass wir die Zeit mit ins Spiel bringen können. Damit könnte man sich auf einer Karte interaktiv den Datenbestand betrachten.
Warum aber die Aufbereitung? Das Problem ist, dass wesentliche Daten wie Namen der Inhaber, Art der Unternehmung und der Ort in einer Spalte mittels Kommas getrennt erfasst wurden und dies keinem richtigen maschinenlesbaren Schema folgt. (Ich habe mich lange hierzu mit einer Archivarin auseinandergesezt. - Aus Sicht des Archivs ist diese Art der Erfassung eine sinnvolle Vorgehensweise.) Bis zu einem gewissen Grad können wir die Daten nach Inhaber, Art der Unternehmung und Ort über ein Skript wieder trennen. Leider ist das nicht vollständig möglich, so dass irgendwann noch mal ein Mensch drüber schauen muss. Und da wir keine Lust haben, 20.000 Datensätze selber zu kontrollieren, überlassen wir das also jemand anderem.
Wir wollen also die verbleibende Aufbereitung der Daten über eine Web-Applikation in einer Art Spiel Menschen überlassen. Das Ganze könnte man sich so vorstellen wie ... "Schkeuditz bei Leipzig" - Ist der Ort nun Leipzig oder Schkeuditz? Gamification ist hier ein Gedanke, den wir hatten. Oder Captchas, wie man sie von Google kennt - nur nicht ganz so nervig.
Das soll das Projekt werden. Die ersten Prototypen existieren schon, mal schauen was draus wird. Das Hauptproblem ist, dass wir von dem Ganzen keinen richtigen Plan haben - wir sind aber sehr optimistisch.
