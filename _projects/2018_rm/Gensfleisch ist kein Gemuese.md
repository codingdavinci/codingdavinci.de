---
identifier: 91
layout: project
year: Rhein-Main 2018
isFirst: false
isLast: false
"name": "Gensfleisch ist kein Gemüse"
"tile": "/img/projekte-tiles/2018_rm/gutenberg_in_mainz.png"
"tile_active": "/img/projekte-tiles/2018_rm/gutenberg_in_mainz-active.png"
"image": "/img/projekte/gutenberg_in_mainz.png"
"links":
    -
        "class": "website"
        "link": "http://bilduenz.de/gutenberg/app"
        "text": "Webseite"
    -
        "class": "github"
        "link": "https://github.com/gutenberg-tour"
        "text": "GitHub"
"data":
    - "Historisches Häuserbuch von Mainz für die Zeit um 1450"
    - "Wikipedia"
    - "Wikimedia"
    - "OpenStreetMap"
"team":
    -
        "name": "Lena Hinrichsen"
        "contact":
            "mail": "mailto:https://github.com/Lena94"
    -
        "name": "Claus Miczka"
        "contact":
            "mail": "mailto:bilduenz@netxy.de"
                   

---
Claus ist Webentwickler, also nutzen wir Techniken wie JavaScript, HTML und CSS, um die App erst einmal als interaktive Webseiten zu schreiben. Zunächst schaltet der Nutzer Schritt für Schritt die Orte auf einer Karte frei, die er im Rahmen unserer App aufsucht. Später werden wir mit Cordova die App auch richtig auf dem Handy installieren können. Bis zum Abgabetermin wurde die Zeit knapp – gar nicht so einfach, Studium, Beruf und eine kleine Idee, für die man nochmal recherchieren muss (technisch und inhaltlich), in den Alltag zu integrieren. Aber Spaß macht es auf alle Fälle.

Wir haben uns überlegt, einen kleinen Rahmen zu schreiben der die einzelnen Seiten aus einer JSON-Datei liest und in der richtigen Reihenfolge darstellt. Benutzt haben wir gängige Frameworks: Bootstrap für das Aussehen, Vue.js für die Logik und die HTML Templates und jQuery, weil Bootstrap das ohnehin braucht, um gut zu funktionieren und es einfacher macht, schnell im HTML Daten zu lesen oder zu ändern, wenn Claus mit Vue.js nicht gleich zum Erfolg kam.

Die Karte wird von leaflet.js erstellt. Einer Bibliothek für den Umgang mit Kartendaten, die Daten vom Landesmuseum die als XML kamen, haben wir mit einem Webdienst in JSON umgewandelt und einfach hinzukopiert. Leaflet.js haben wir erst beim Kickstart des Wettbewerbs in einem Vortrag kennengelernt.

Die App liefert ein Informationen über Mainz, den Buchdruck und Gutenberg, die durch ein paar Quizfragen aufgelockert werden.

Später soll man durch die Stadt gehen können und die App erkennt, dass man wie bei einer Schnitzeljagd den nächsten Halt erreicht hat. Bis dahin blendet die App nur die Orte ein, die auf den Seiten erwähnt werden.

Am Ende erfährt man, wie viele Fragen man auf Anhieb richtig beantwortet hat und bei wie vielen Versuchen man beim Raten daneben lag.

Viel Spaß beim Ausprobieren!

