---
identifier: 77
layout: project
year: Ost
year2: 2018
isFirst: false
isLast: false
"name": "JibJib"
"tile": "/img/projekte-tiles/2018/jibjib.png"
"tile_active": "/img/projekte-tiles/2018/jibjib-active.png"
"image": "/img/projekte/jibjib.jpg"
"links":
    -
        "class": "github"
        "link": "https://github.com/gojibjib"
        "text": "GitHub"
"data":
    - "Tierstimmen (Museum für Naturkunde Berlin)"
    - "Wikipedia"
    - "xeno-canto.org"
"team":
    -
        "name": "Alexander Knipping"
        "contact":
            "mail": "mailto:cdvost@f0rkd.net"
    -
        "name": "Patrick Plitzner"
        "contact":
            "mail": "mailto:p.plitzner@posteo.de"
    -
        "name": "Anne Münzner"
        "contact":
            "mail": "mailto:annemunzner@gmail.com"
    -
        "name": "Sebastian Biermann"
        "contact":
            "mail": "mailto:biermann.seb@gmail.com"
---
JibJib ist eine mobile App, welche Nutzern auf anschauliche und spielerische Art und Weise den Zugang zur Vogelkunde ermöglichen soll. Die gesamte Architektur setzt sich aus drei Teilen zusammen:

Die Android-App führt den User mit einem minimalistischen und spielerischen Ansatz durch die angebotenen Workflows. Hierbei ist ein besonderer Fokus auf einfache Bedienung und eine klare Darstellung der Abläufe gelegt. Für die Erkennung werden die aufgenommenen Vogelstimmen an den REST service endpoint gesendet und die zurückgegebenen Detailinformationen können in einer lokalen Room Datenbank gespeichert werden. Die Software-Architektur basiert auf der Clean Architektur, welche eine maximale Entkopplung von Darstellung, Business Logic und I/O-Operationen ermöglicht. Dieser Ansatz ermöglicht eine nachhaltige Weiterentwicklung, getrenntes Testen sowie potenzielles Austauschen der einzelnen Komponenten ohne größeren Aufwand.

Microservices im Backend - Das Backend dient als Schnittstelle zwischen der App und dem Machine Learning (ML) Model und besteht aus drei Services, welche von sich unabhängig auf verschiedenen Servern ausgerollt sind. Als koordinierende Instanz fungiert hier eine performante, auf Golang basierende REST API, welche mit einer Datenbank und dem ML-Model kommuniziert. Als Datenbank fungiert eine MongoDB Instanz, welche Informationen über die gespeicherten Vögel enthält und schnelle Zugriffszeiten bietet. Zuletzt gibt es noch einen auf Python basierenden Query-Service, welcher die von der App geschickten Audiodateien umwandelt und an das ML-Model zur Abfrage weitergibt. Die gesamte Backend Architektur ist im „Infrastructure-as-Code“ Ansatz auf Amazon Web Services (AWS) abgebildet. Mittels Tools wie Terraform, SaltStack und Docker ist das Deployment eines oder aller Services, sowie das skalieren dieser, in nur wenigen Minuten möglich - auch voll automatisiert.

State of the Art Machine Learning Model - Das Erkennen der Vogelstimmen erfolgt durch ein in TensorFlow realisiertes Machine Learning Model, welches auf Google's Audioset und VGGish basiert und dessen Nodes durch unsere eigenen Klassen ersetzt wurden. Der Trainingsdatensatz besteht aus mehr als 80.000 Audioaufnahmen von knapp 200 Vögeln, aufgenommen in Deutschland und zum Teil bereitgestellt vom Tierstimmenarchiv des Naturkundemuseums Berlins, sowie ergänzt mit Audiodateien des Vogelstimmen-Archivs auf xeno-canto.org. Das Training erfolgte vollautomatisiert mit Docker auf einem GPU-Cluster. So ist das Model in der Lage mit einer hohen Genauigkeit knapp 200 verschiedene Vögel allein an ihrem Gesang zu identifizieren.
