---
identifier: 89
layout: project
year: Rhein-Main 2018
isFirst: false
isLast: false
"name": "DeliveryDetector"
"tile": "/img/projekte-tiles/2018_rm/delivery_detector.png"
"tile_active": "/img/projekte-tiles/2018_rm/delivery_detector-active.png"
"image": "/img/projekte/delivery_detector.jpg"
"links":
    -
        "class": "website"
        "link": "https://deliverydetector.github.io/"
        "text": "Computer-Vision-App"
    -
        "class": "github"
        "link": "https://github.com/DeliveryDetector/DeliveryDetector"
        "text": "GitHub"
"data":
    - "Albert Hiller (Mp3)"
    - "MSPT (jpg)"
    - "Fotos von DHL-Autos"
    
"team":
    -
        "name": "Daniel-Amadeus Johannes Glöckner"
        "contact":
            "mail": "mailto:daniel-amadeus.gloeckner@student.hpi.de"
    -
        "name": "Fabian Moritz Schneider"
        "contact":
            "mail": "mailto:moritz.schneider@uni-potsdam.de"
    -
        "name": "Lukas Wagner"
        "contact":
            "mail": "mailto:lukas.wagner@student.hpi.de"
    -
        "name": "Lisa Ihde"
        "contact":
            "mail": "mailto:lisa.ihde@student.hpi.de"
    -
        "name": "Jonas Bounama"
        "contact":
            "mail": "mailto:jonas.bounama@student.hpi.de"
    -
        "name": "Joana Bergsiek"
        "contact":
            "mail": "mailto:joana.bergsiek@student.hpi.de"
---
„DeliveryDetector“ nutzt die historischen Posthornklänge aus dem Albert-Hiller-Datensatz des Museums für Kommunikation Frankfurt, um den Nutzer auf Paketdienst-Fahrzeuge vor seiner Wohnung hinzuweisen.

Lieferanten haben nur wenig Zeit alle Pakete auszuliefern. Da ist es kein Wunder, dass sie nicht lange die Haustür suchen können. Bei verwinkelten Wohnsituationen geht da schnell ein Paket in den Paketshop statt nach Hause, obwohl man selbst da war.
Unsere Anwendung soll das verhindern. 

Wir haben ein Programm entwickelt, dass auf einem Raspberry Pi (einem kleinen Computer) laufen kann. Mit einer Kamera ausgestattet, kann dieser haltende Paketdienst-Fahrzeuge erkennen und den Nutzer mit dem Klang eines Posthorns darauf hinweisen. Für den Computer-Vision-Teil des Projektes nutzen wir OpenCV und eine selbst trainierten HAAR-Classifier, der die Videodaten in Echtzeit analysiert.

Damit bemerkt der Nutzer die Ankunft des Lieferanten und kann ihm entgegenkommen, wenn dieser mal die Haustür nicht findet.