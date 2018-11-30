---
identifier: 93
layout: project
year: Rhein-Main 2018
isFirst: false
isLast: false
"name": "MonsterMelodies"
"tile": "/img/projekte-tiles/2018_rm/monstermelodies.png"
"tile_active": "/img/projekte-tiles/2018_rm/monstermelodies-active.png"
"image": "/img/projekte/monstermelodies.png"
"links":
    -
        "class": "Onlinespiel"
        "link": "http://monstermelodies.netlify.com"
        "text": "Onlinespiel"
    -
        "class": "github"
        "link": "https://github.com/emsuiko/monstermelodies"
        "link": "https://github.com/merenor/momeback"
        "link": "https://github.com/merenor/monsternames"
        "link": "https://github.com/merenor/marc2json"
        "text": "GitHub"
"data":
    - "Monster-Illustrationen aus der Martinus-Bibliothek Mainz"
    - "Informationen zu den digitalisierten Autographen der Symphonien von Christoph Graupner, die sich in der ULB Darmstadt befinden, abgerufen über den OPAC von RISM"
    - "Kleider in Bewegung aus dem Historischen Museum Frankfurt"
    - "eine zufällige Auswahl aus der List of Medieval Names von Mark Hassman (https://www.mithrilandmages.com/utilities/MedievalBrowse.php)"
    - "grausame Adjektive: API von openthesaurus.de"
"team":
    -
        "name": "Anett Gesierich"
        "contact":
            "mail": "mailto:anett@codemonauts.com"
    -
        "name": "Felix Werthschulte"
        "contact":
            "mail": "mailto:felix@werthschulte.info"
---
Die Idee hinter dem Projekt ist, verschiedene Datenquellen zu verbinden und auf eine spielerische Art dem Nutzer zu präsentieren. Unser persönliches Ziel war es hierbei auch unsere Programmierkenntnisse mit neuen Technologien und Herausforderungen zu verbessern und daraus eine schöne, wenn auch etwas ungewöhnliche, Anwendung zu erschaffen. :)
Zum Einen werden Daten aus verschiedenen Quellen (durch die Datengeber bereitgestellt sowie weitere öffentlich verfügbare Daten) und in verschiedenen bereitgestellten Formaten (JSON, XML im MARC21-Format, API) automatisch mit Hilfe von mehreren Python-Skripten konvertiert, um sie im Django-basierten Backend einlesen zu können. Das Backend kombiniert Monster-Illustrationen (und Metadaten) mit den digitalisierten Graupner-Melodien. Über die REST-API können neue Quiz-Fragen (1 Monster + 3 Melodien) abgefragt und ausgewertet werden. Das Frontend ist in Vue.js geschrieben, fragt die API an, stellt die (Meta-)Daten bereit, erzeugt mit Hilfe einer JavaScript-Library aus der PAE-Notation der Noten, Bild und Ton zur Darstellung, und implementiert den Spielablauf mit Lebens- und Levelpunkten. Außerdem gibt es neben dem Spiel noch eine Übersicht über alle verfügbaren Daten (Illustrationen, Melodien, Kleider). Deployed werden Front- und Backend automatisiert, aber separat über die Dienste Netlify und Pythonanywhere.
Da wir für die MonsterMelodies noch einige Ideen zur Verbesserung, Erweiterung und Anreicherung mit weiteren Informationen, z.B. Verknüpfungen der genauen Bibelstellen, haben, möchten wir auch in Zukunft an dem Projekt weiterentwickeln.

