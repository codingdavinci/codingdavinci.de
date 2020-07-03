---
identifier: 85
layout: project
year: Rhein-Main
year2: 2018
isFirst: true
isLast: false
"name": "ANTLITZ.NINJA"
"tile": "/img/projekte-tiles/2018_rm/anlitz_ninja.png"
"tile_active": "/img/projekte-tiles/2018_rm/anlitz_ninja-active.png"
"image": "/img/projekte/anlitz_ninja.jpg"
"links":
    -
        "class": "website"
        "link": "https://antlitz.ninja/"
        "text": "Webseite"
    -
        "class": "github"
        "link": "https://github.com/leanderseige/antlitz.ninja"
        "text": "GitHub"
"data":
    - "Städel Museum"
    - "Metropolitan Museum of Art"
    - "National Gallery of Art"
"team":
    -
        "name": "Leander Seige"
        "contact":
            "mail": "mailto:leander@seige.name"
           
---
ANTLITZ.NINJA ist eine spielerische Webanwendung, die es ermöglicht, im virtuosen und vom Zufall inspirierten Umgang mit historischen Gemälden Unbekanntes zu entdecken und Neues zu erschaffen. Die Anwendung lädt ein, Gesichtspartien aus Werken der Kunstgeschichte neu zu kombinieren und dabei die verschiedenen Stile und das künstlerische Ausdrucksvermögen historischer Maler zu neuen Kreationen zu verschmelzen. Der kreative Prozess der Rekombination unterschiedlicher Bildausschnitte soll den Blick auf die Details großer Kunstwerke richten, deren Erscheinung oft flüchtig nur als stereotypes Echo vergangener Epochen empfunden wird. Die so entstehenden Collagen zitieren die Ästhetik und die Stile vergangener Epochen und erlauben es doch, neue Freiheiten der Gestaltung und des künstlerischen Ausdrucks zu ermöglichen. Dabei rücken die Details zugrundeliegender Werke in den Mittelpunkt der Betrachtung und fordern die eigene Kreativität heraus. Die Anwendung verwendet Digitalisate des Städel Museums (Frankfurt/Main).

ANTLITZ.NINJA wählt drei zufällige Gesichtspartien aus und bietet diese auf der Weboberfläche an. Jeder einzelne Bereiche lässt sich bei Nichtgefallen durch einen neuen, wiederum zufällig ausgewählten Bildausschnitt ersetzen. Auf der Weboberfläche können die Bilder nun gezoomt, verschoben, gespiegelt und erneut ausgetauscht werden, bis die Collage gefällt. Das so erstellte neue Kunstwerk kann als Bild oder PDF heruntergeladen werden. ANTLITZ.NINJA bemüht sich um Responsivität und wurde auf Mobilgeräten getestet.

ANTLITZ.NINJA setzt für die Bereitstellung der Bildressourcen das International Image Interoperability Framework (IIIF) ein. Bildinhalte können so dynamisch über Webschnittstellen in die Anwendung gezogen werden. Für diesen Zweck wurden die Digitalisate des Städel Museums auf der Plattform manducus.net IIIF-kompatibel bereitgestellt. Auf den Digitalisaten wurde eine Gesichtserkennung durchgeführt, deren Ergebnisse als IIIF-kompatible Annotationen vorliegen. Der dynamische Charakter von IIIF erlaubt es, auch andere digitale Repositorien einzubeziehen. Zur Demonstration sind als Easter Egg auch freie Daten des Metropolitan Museum of Art (New York) und der National Gallery of Art (Washington DC) in ANTLITZ.NINJA versteckt. Als experimentelles technisches Gimmick bietet ANTLITZ.NINJA die Möglichkeit, die Komposition nicht nur als Bild oder PDF, sondern auch als dynamisches IIIF-Manifest auszuliefern, welches in beliebige IIIF-Viewer geladen werden kann.

ANTLITZ.NINJA ist in Javascript geschrieben und verwendet jQuery, OpenSeadragon, jsPDF, OpenCV und andere Open Source Libraries. Kleinere Tools wurden in PHP und Python erstellt.
