---
identifier: 86
layout: project
year: Rhein-Main 2018
isFirst: false
isLast: false
"name": "Artific"
"tile": "/img/projekte-tiles/2018_rm/artific.png"
"tile_active": "/img/projekte-tiles/2018_rm/artific-active.png"
"image": "/img/projekte/artific.jpg"
"links":
    -
        "class": "website"
        "link": "https://www.artific.app"
        "text": "Webseite"
    -
        "class": "github"
        "link": "https://github.com/pitC/digital_art_consultant"
        "text": "GitHub"
"data":
    - "Städel Museum"
"team":
    -
        "name": "Gosia Cabaj"
        "contact":
            "mail": "mailto:cabaj.malgorzata@gmail.com"
    -
        "name": "Piotr Cabaj"
        "contact":
            "mail": "mailto:p.k.cabaj@gmail.com"
    -
        "name": "Bastian Englert"
        "contact":
            "mail": "mailto:bastianenglert@gmail.com"
---
Warum schlechte Bilder aus Möbelhäusern an die Wand hängen, wenn so viele Kunstwerke in einer spektakulären Auflösung und unter freier Lizenz digitalisiert sind? Diese Frage hatten wir uns oft bei Besuchen im Freundeskreis oder bei der Familie leise gestellt. Warum noch einmal der Times Square in einem oberbayerischen Wohnzimmer? Warum der Eiffelturm in dem Zimmer des 12-jährigen Neffen in Polen? Warum eine riesige Holzhängebrücke im Regenwald in einem Pariser Flur? Hätte man laut gefragt, käme vermutlich von allen Seiten eine ähnliche Antwort: „Wir kennen uns mit Kunst nicht aus.“

Gleichzeitig versuchen Museen, mittels Digitalisierung Kunst nicht nur besser zu bewahren, sondern auch bekannter zu machen. Unsere Motivation ist es, sie bei dieser Aufgabe zu unterstützen. Wir bieten einen niedrigschwelligen, spielerischen Zugang zu den Digitalisaten an. Artific ist konzipiert als eine persönliche Mobile-first-Anwendung mit AR-Komponenten – sie macht die Kunst zu Hause erlebbar.

Wichtigstes Ziel von Artific ist, Schwellenängste im Umgang mit Kunst abzubauen. Man muss sich mit Kunst nicht auskennen, um auf eine Entdeckungsreise zu gehen. Eine Reproduktion kann der Anfang einer Kopfreise sein – und führt früher oder später ins Museum. 

Ein weiteres Ziel ist, eine Diskussion über nachhaltige Strategien im Bereich Digitalisierung anzustoßen. Warum gibt es in Museen noch so selten Businessmodelle, die explizit auf den digitalisierten Sammlungen aufsetzen? 

Gerade im Lifestyle-Bereich boomt der Online-Shopping-Sektor enorm. Nutzerinnen und Nutzer verbringen Stunden auf Pinterest und Co., suchen nach passenden Accessoires, um ihr Zuhause individuell zu gestalten. In den Diskussionen zum digitalen Wandel in den Museen scheint aber die Benjamin-Aura-Debatte wichtiger. Mit Artific wollen wir zeigen, dass auf Digitalisaten basierende Produkte über Afilliate Marketing monetarisiert werden können, wenn die richtige User Experience geboten wird, und weitere Museen dazu einladen, ihre Strategien in diese Richtung zu entwickeln.

Artific ist eine browserbasierte Anwendung. Wir haben uns bewusst gegen eine App entschieden, um die Nutzungsschwelle so niedrig wie möglich zu halten.

Die technische Umsetzung erfolgte in drei Schritten: Zuerst wurden die Metadaten des Städel Museums nach relevanten Informationen gesichtet, diese dann extrahiert und um Farbwerte ergänzt. Im zweiten Schritt haben wir einen Matching-Algorithmus erstellt, der Bildvorschläge anhand von Farben (entweder über einen Photo-Input oder manuelle Auswahl) oder von Nutzer-Antworten auf vorgegebene Fragen generiert. Dann wurde eine 3-D-Umgebung implementiert, in der das ausgewählte Bild mit Rahmen und Passepartout als Augmented-Reality-Vorschau auf die Wand der Nutzerin / des Nutzers projiziert wird.     

Für die Farberkennung bei den Kunstwerken und den von den Nutzerinnen und Nutzern hochgeladenen Bildern haben wir die bereits existierende Vibrant.js-Bibliothek genutzt. Bei dem Matching-Algorithmus war eine Neuentwicklung nötig: Die farbliche Nähe wird nach einer Delta-E-Formel und der 60-30-10-Regel berechnet. Die finale Reihenfolge der vorgeschlagenen Kunstwerke hängt von der Übereinstimmung der gesuchten Metadaten-Werte und der Farbnähe ab. 

Für die Umsetzung wurden weiterhin folgende Technologien verwendet: Node.js, MongoDB, Bootstrap, Vue.js, A-Frame.

Unser herzlicher Dank gilt Frau Ulrike Fladerer bedanken, die alle unsere Fragen beantwortet hat und uns ein ergänztes Metadaten-Set zur Verfügung gestellt hat. Eine direkte Ansprechpartnerin am Städel Museum zu haben war sehr hilfreich.

