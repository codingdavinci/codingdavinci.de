---
identifier: 40
layout: project
year: Nord 2016
"name": "Chronoscope Hamburg"
"tile": "/img/projekte-tiles/2016/chronoscope.png"
"tile_active": "/img/projekte-tiles/2016/chronoscope-active.png"
"image": "/img/projekte/Chronoscope-iPadiPhone_1280.jpg"
"links":
    -
        "class": "website"
        "link": "http://mprove.de/chronoscope"
        "text": "Das Chronoscope im Web"
    -
        "class": "github"
        "link": "https://github.com/mprove/chronoscope"
        "text": "Quelltexte auf GitHub"
"data":
    - "Staats- und Universitätsbibliothek Hamburg"
"team":
    -
        "name": "Matthias Müller-Prove"
        "contact":
            "twitter": "http://twitter.com/mprove"
            "website": "http://mprove.de/about/contact.html"
---
Das Chronoscope ist eine Zeitmaschine, mit der man 300 Jahre in die Geschichte Hamburgs zurück reisen kann. Dazu werden historische Karten der Staats- und Universitätsbibliothek Hamburg Carl von Ossietzky passgenau auf den aktuellen Stadtplan oder ein Satellitenbild Hamburgs geblendet.

Die Herausforderung bei einem solchen Projekt mit historischen Kontext stellt neben der Sichtung des Materials (Content Audit) und der späteren Umsetzung (Implementation) insb. die Phase der Konzeption dar. Die Ideenentwicklung (Ideation als Schritt des Design Thinking) fällt hingegen sehr leicht, da man sich zuvor bereits mit den Daten vertraut gemacht hat und diese im persönlichen und dynamischen Zugriff hat. Die Karten sind in den Marginalien reich verziert und mit unglaublicher Liebe zum Detail gestochen scharf. Historische Längenmaße, Elbtiefen und -untiefen, Wehranlagen samt der Sternschanze, importierte Schiffsladungen, die Bahnanlagen… alles für sich schon äußerst spannende Themenfelder.

Das Konzept für eine interaktive Anwendung sollte statt einer Faktenvermittlung lieber dem Anwender die Möglichkeit geben, Fragen zu stellen und sich diese selbst zu beantworten. Daher wurde für das Chronoscope Hamburg die Metapher einer Zeitreise auf Landkarten gewählt. Die Interaktion beschränkt sich bewusst auf die Auswahl der Jahre 1694, 1804, 1867 oder 1905 und auf die Transparenzeinstellung mit einem kombinierten Switch- und Radio-Kontrollelement. Die jeweilige Ansicht kann zudem punktgenau mittels der sogenannten Chrono-Links in sozialen Netzwerken geteilt werden. Der Empfänger einer solchen Zeitkapsel wird dann zu der Zeit und an den Ort transportiert, auf den der Absender ihn hinweisen möchte.

Basiskarte, Navigation und Zoom kommen über Google Maps. Die Umsetzung erfolgte in HTML, CSS und JavaScript. Damit ist die Anwendung in jedem Browser lauffähig und es existiert auch eine für iPhone und iPad optimierte WebApp.
