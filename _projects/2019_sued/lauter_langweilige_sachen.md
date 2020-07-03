---
identifier: 110
layout: project
year: Süd
year2: 2019
isFirst: false
isLast: false
"name": "Lauter Langweilige Sachen?"
"tile": "/img/projekte-tiles/2019_sued/lauter_langweilige_sachen.png"
"tile_active": "/img/projekte-tiles/2019_sued/lauter_langweilige_sachen-active.png"
"image": "/img/projekte/lauter_langweilige_sachen.png"
"links":
    -
        "class": "website"
        "link": "https://erogleva.github.io/boring-things-quiz/"
        "text": "Webseite"
    -
        "class": "github"
        "link": "https://github.com/erogleva/boring-things-quiz"
        "text": "GitHub"
"data":
    - "Stadtmuseum Tübingen"
    - "Arolsen Archives und KZ-Gedenkstätte Dachau"
    - "Antikensammlung der Friedrich-Alexander-Universität Erlangen-Nürnberg" 
    - "Museen der Stadt Nürnberg" 
    - "Universitätsbibliothek Stuttgart"
    - "Universitätsbibliothek der FAU Erlangen-Nürnberg"
    - "Bayerische Staatsgemäldesammlungen, Neue Pinakothek"
    - "DB Museum Nürnberg"
    - "Landesarchiv Baden-Württemberg: Fotosammlung Willy Pragher"
    - "Stadtmuseum Landsberg am Lech"
    - "Städtische Galerie im Lenbachhaus und Kunstbau München"
    - "Zeppelin Museum Friedrichshafen"
    - "Soundeffekte von http://soundbible.com/ (Autoren: Mike Koenig und Muska666)"
"team":
    -
        "name": "Amelie Fritsch"
        "contact":
            "mail": "mailto:Amelie.fritsch@gmx.de"
    -
        "name": "Elena Rogleva"
        "contact":
            "mail": "mailto:erogleva94@gmail.com"
    -
        "name": "Hallie Barrows"
        "contact":
            "mail": "mailto:hbarrs@gmail.com"
    -
        "name": "Norbert Schwab"
        "contact":
            "mail": "mailto:architektur@buero-mueller-rieger.de"
    -
        "name": "Ruth Sander"
        "contact":
            "mail": "mailto:ruthsander@me.com"
    -
        "name": "Vanessa Schach"
        "contact":
            "mail": "mailto:v.d.schach@gmail.com"
           
---
Das Online-Spiel "Lauter Langweilige Sachen?" lädt ein zu einer Entdeckungsreise, bei welcher die Sammlungsobjekte des Stadtmuseum Tübingen spielerisch entdeckt werden können. Schritt für Schritt lernen die Spieler\*innen die Objekte kennen und verknüpfen diese mit humorvollen Beschreibungen. Besonders neugierige Nutzer\*innen können dann noch herausfinden, wie eine fast 400 Jahre alte Rechenmaschine funktioniert haben könnte.
<br/><br/>
Der Datensatz "Lauter langweilige Sachen" des Stadtmuseums Tübingen enthält Fotos und Metadaten von 40 ausgewählten Objekten der Städtischen Sammlung aus verschiedenen Epochen. Die Objekte reichen von historischen Alltagsgegenständen über Repräsentationsobjekte bis hin zur Obskurität – Dinge wie diese werden von vielen Menschen oft als langweilig empfunden. Das Stadtmuseum Tübingen möchten die "langweiligen Sachen" zukünftig auf kreative Weise neu und anders zeigen, eine Herausforderung, der wir uns mit dem Spiel "Lauter Langweilige Sachen?" stellen.
<br/><br/>
Das Spiel zeigt nach der Auswahl der Sprache – Deutsch oder Englisch – eine zufällige Auswahl von sechs Bildern historischer Objekte. Die Spieler\*innen haben die Aufgabe herauszufinden, welche davon aus dem Stadtmuseum Tübingen stammen. In Level 2 können die gefundenen Objekte dann jeweils einem kurzen Text zugeordnet werden. Der Ausspruch "Dieser Thron ist nicht nur für gekrönte Häupter" beschreibt zum Beispiel einen hölzernen Nachtstuhl mit geschnitzter Lehne. Konnte ein Objekt richtig zugeordnet werden, erscheint ein Pop-up-Fenster mit einer detaillierten Beschreibung des Objekts.
<br/><br/>
In einer Weiterentwicklung des Spiels könnten die Spieler\*innen hier eine Bewertung à la Tinder für das jeweilige Objekt abgeben – "langweilig" oder "nicht langweilig". Bei Einbindung einer Datenbank könnte dieses Feedback wertvolle Informationen für die Konzeption der neuen Dauerausstellung im Stadtmuseum Tübingen liefern.
<br/><br/>
Eine von Wilhelm Schickard im Jahr 1623 konstruierte Rechenmaschine hat unser besonderes Interesse geweckt und uns angeregt, diese zu animieren. Die Spieler können ausprobieren, ob sie die Funktionsweise durch Versuch und Irrtum herausfinden. Falls nicht, hilft ein kurzes Video weiter. Unser Spiel ist in JavaScript implementiert. Zum Einsatz kam hauptsächlich die Bibliothek ReactJS. Die Rechenmaschine haben wir mithilfe von p5.js animiert. Als Design-Framework haben wir Materialize benutzt. Um die Verbindung zu einer Datenbank für die Weiterentwicklung unseres Spiels zu gewährleisten, möchten wir auch noch eine REST API mit Python entwickeln, die (zunächst) auf Heroku deployed werden sollte.