---
identifier: 50
layout: project
year: 2016
"name": "SOS – Sound of Sails"
"tile": "/img/projekte-tiles/2016/sos.png"
"tile_active": "/img/projekte-tiles/2016/sos-active.png"
"image": "/img/projekte/sound-of-sails.png"
"links":
    -
        "class": "github"
        "link": "https://github.com/MarkusWals/SoundOfShips.git"
        "text": "GitHub"
"data":
    - "Schiffsportraits, Altonaer Museum"
"team":
    -
        "name": "Boris Crismancich"
    -
        "name": "Tungi Dang"
    -
        "name": "Markus Wals"
---
Künstliche Intelligenz kennt man bisher aus den Medien als eine fortschrittliche Technologie,die vorrangig bei Autonom fahrende Autos, intelligenten Smart Home Anwendungen oder personalisierter Werbung angewendet wird. Deshalb haben wir uns im Rahmen des Coding Da Vinci-Events zur Aufgabe genommen, das zu ändern, und mit den bereit gestellten Kultur-Metadaten- neue Kunst zu schaffen(Musik).

Die gestellten Schiffsporträts vom Altonaer Museum  werden in Ort, Zeichnungstechnik, Epoche untersucht.

Zusätzlich wird ein intelligenter Algorithmus angewendet um die Stimmungsfarben des Bildes zu analysieren.

Auf Grundlage dieser gewonnenen Daten wird unsere Applikation Musik generieren.

Die Parameter des Musikgenerators sind unter anderem Tempo der Musik, Harmonieabfolge und Anzahl & Art der Musikinstrumente
.
Der Musikgenerator funktioniert über Midi Befehle, die von einer DAW-software geleitet (Ableton/Logic/Pro Tools)- einer Musiksoftware zur Professionellen Produktion von Digitaler Musik - geleitet werden. Die Midi- Befehle werden mittels Metadaten der Schiffsporträts erstellt. Der Musik Generator lernt über eingebettete Midi-Musik-Samples zu komponieren. Die komplexen Regeln der Harmonielehre und Melodieführung werden eingehalten um hörbare tonale Musik zu produzieren (Das Phänomen von Jazz Harmoniken wird verwendet) .

Das Konzept bietet den Besuchern des Altonaer Museums ein erhöhtes Kulturerlebnis, in dem es die bestehenden Schiffsdaten mit der von uns programmierten Musikstücke in ein visuelles-audio Porträt verwandelt.

In unserem Prototypen nutzen wir einen Rasperry Pi mit Touchscreen als unseren User Interface. Image analizer kann die Anzahl von Mästen abzählen und die Stimmung des Bildes auf Grundlage der Farben ableiten.Musikgenerator muss trainier werden.

Ähnlich wie ein Barpianist,der in den Goldenen Zwanzigern Kinofilme untermalt hat, ist unsere Vision mit Hilfe von künstlicher Intelligenz eine smarte Musikuntermalung für Bild und Film zu schaffen.
