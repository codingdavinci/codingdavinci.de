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
        "class": "web-app"
        "link": "artific.app"
        "text": "Web-App artific.app"
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
Warum schlechte Bilder aus Möbelhäusern an die Wand hängen wenn so viele Kunstwerke in einer spektakulären Auflösung und unter freier Lizenz digitalisiert sind? Diese Frage hatten wir uns oft bei Besuchen im Freundeskreis oder bei der Familie leise gestellt. Warum noch einmal der Times Square in einem oberbayerischen Wohnzimmer? Warum der Eiffelturm in dem Zimmer des 12-jährigen Neffen in Polen? Warum eine riesige Holzhängebrücke im Regenwald in einem Pariser Flur? Hätte man laut gefragt, käme vermutlich von allen Seiten eine ähnliche Antwort: „Wir kennen uns mit Kunst nicht aus.“

Gleichzeitig versuchen Museen mit Digitalisierung Kunst nicht nur besser zu bewahren, sondern auch bekannter zu machen. Unsere Motivation ist es, Kulturinstitutionen bei dieser Aufgabe zu unterstützen. Wir bieten einen niedrigschwelligen, spielerischen Zugang zu den Digitalisaten an. Artific ist konzipiert als eine persönliche Mobile-first-Anwendung mit AR-Komponenten – sie macht die Kunst erlebbar zu Hause.

ZIEL

Das wichtigste Ziel von Artific ist, Schwellenängste im Umgang mit Kunst abzubauen. Man muss sich mit Kunst nicht auskennen, um auf eine Entdeckungsreise zu gehen. Eine Reproduktion kann ein Anfang einer Kopfreise sein – und führt früher oder später ins Museum. Ein weiteres Ziel ist eine Diskussion über eine nachhaltige Politik im Bereich Digitalisierung anzustoßen. Warum gibt es in Museen so selten Businessmodele im Bereich Digitalisierung? Das Städel Museum, mit dessen Daten wir gearbeitet haben, bietet eine Verbindung zu einem FujiFilm-Shop für 92 von 500 Kunstwerken, die als CC-BY-SA 4.0 lizensiert sind. Der Medienbruch ist enorm: von der schönen Oberfläche der Digitalen Sammlung zur nicht mobil-optimierten Shop-Seite. Dabei ist das Städel Museum ein klarer Vorreiter in der deutschen digitalen Museumslandschaft.

Gerade im Lifestyle-Bereich boomt der Online-Shopping-Sektor enorm. Nutzerinnen und Nutzer verbringen Stunden auf Pinterest und Co., suchend nach passenden Accessoires um ihre Wohnungen individuell zu gestalten. In den Diskussionen rund um Digitalisierung in den Museen scheint aber die Benjamin-Aura-Debatte wichtiger. Mit Artific wollen wir zeigen, dass durch die richtige User Experience die auf Digitalisaten basierende Produkte über Afilliate Marketing monetisiert werden können und weitere Museen dazu einladen, die Strategien in diese Richtung zu entwickeln.

TECHNISCHE UMSETZUNG

Artific ist eine browserbasierte Anwendung. Wir haben uns bewusst gegen einer App entschieden, um die Nutzungsschwelle so niedrig wie möglich zu halten.

Die technische Umsetzung erfolgte in drei Schritten: Zuerst wurden die Metadaten des Städel Museums nach relevanten Informationen gesichtet, diese dann extrahiert und um die Farbwerte ergänzt. Im zweiten Schritt haben wir einen Matching-Algorithmus erstellt, der Bildvorschläge anhand von Farben (entweder über einen Photo-Input oder manuelle Auswahl) oder Antworten auf Fragen generiert. Dann wurde eine 3-D-Umgebung implementiert, in der das ausgewählte Bild mit Rahmen und Passepartout als Augmented-Reality-Vorschau auf die Wand der Nutzerin / des Nutzers projiziert wird.     

Für die Farberkennung bei den Kunstwerken und den von den hochgeladenen Bildern haben wir die vorhandene vibrant.JS-Bibliothek genutzt. Bei dem Matching-Algorithmus war eine Neuentwicklung nötig: die farbliche Nähe wird nach einer Delta-E-Formel und der 60-30-10-Regel berechnet. In dem Input-Bild (bzw. bei der manuellen Auswahl) werden drei Farben definiert: die Hauptfarbe (z.B. die Wandfarbe), die Sekundärfarbe und die Kontrastfarbe (hierfür wird immer die durch die vibrant.js anerkannte „vibrant“-Farbe genommen). In dem Kunstwerk wird dann umgekehrt gesucht: vor allem die „vibrant“-Farbe mit der Gewichtung von 60%, dann die Sekundärfarbe mit der Gewichtung von 30% und die Hauptfarbe mit der Gewichtung von 10%. Durch diese Formel wird ein menschliches ästhetisches Empfinden mathematisch erzeugt. Die Rahmen des Bildes in der AR-Vorschau sind auch farblich an das Bild angepasst.
Die zweite Matching-Möglichkeit: Fragen mit drei Antwortoptionen verwenden andere Metataten des Objektes. Pro Antwort wird individuell nach unterschiedlichen Werten gesucht, z.B.

Choose one Beatles song
-	Can’t buy me love
record - Associated_subject - association.subject. – text -> love; seduction
Emotions –> loving; carefree
record - Atmosphere - atmosphere – term -> desire; eroticism
-	Drive my car
record - Associated_subject - association.subject. – text -> wealth
-	Norwegian Wood
record - Content_subject - content.subject – term -> fire; tree trunk; house

Die finale Reihenfolge der vorgeschlagenen Kunstwerke hängt von der Übereinstimmung der gesuchten Metadaten-Werte und der Farbnähe ab.
Für die Umsetzung wurden folgende Technologien verwendet:
-	Node.JS
-	MongoB
-	Bootstrap
-	Vue.JS
-	A-Frame
-	Vibrant.JS

Bei der Arbeit mit dem Datenset des Städel Museums sind wir auf ein paar Probleme gestoßen. Aufgrund der aktuellen Struktur der Digitalen Sammlung und einem Downloadschutz von nicht gemeinfreien Bildern war es nicht möglich, direkte Links zu den Digitalisaten zu bekommen. Dies führte dazu, dass wir die Dateien selber hosten müssen. Darüber hinaus konnten die Labeltexte aus Lizenzgründen nicht zur Verfügung gestellt werden, was den Kunstvermittlungsaspekt unserer Web-App deutlich verhinderte.

An dieser Stelle möchten wir uns ganz herzlich bei Frau Ulrike Fladerer bedanken, die alle unsere Fragen beantwortet hat und uns ein ergänztes Metadaten-Set zur Verfügung gestellt hat. Eine direkte Ansprechpartnerin am Städel Museum zu haben war sehr hilfreich.

WIE GEHT’S WEITER?

Wir wollen die Web-App auf jeden Fall weiterentwickeln! Im ersten Schritt werden weitere geeignete Metadaten-Sets aus den bisherigen Coding-da-Vinci-Hackathons berücksichtigt. Dann hoffen wir, weitere Museen einladen zu können, unser Angebot zu nutzen und ihre Metadaten beizusteuern.

Bei Empfehlungen wollen wir automatisierte Bildvorschläge anhand der Analyse des eigenen Social-Media-Kanals einbauen.

Was die Reproduktionsbestellfunktionalität angeht, möchten wir erstmal alle Museen darauf aufmerksam machen, diese Möglichkeit für sich zu nutzen. Soll unsere Idee auf kein Interesse stoßen, überlegen wir – wenn die rechtliche Lage der Kunstwerke dies erlaubt – selbst einen B2B-Vertrag mit einem Online-Print-Shop zu schließen, um den Nutzerinnen und Nutzern die Möglichkeit des Mit-einem-Klick-Bestellens zu ermöglichen und die Erlöse daraus an Europeana zu spenden.

Wir hoffen auch auf spontane Impulse zur Weiterentwicklung bei unserer Live-Demo des Projekts.

Gosia Cabaj, Piotr Cabaj, Bastian Englert
München, 26.11.2018
