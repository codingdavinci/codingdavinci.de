---
identifier: 141
layout: project
year: Saar-Lor-Lux
year2: 2020
isFirst: true
isLast: false
"name": "American Guild - Network Data"
"image": "/img/projekte/2020_sll/american_guild.jpg"
"tile": "/img/projekte-tiles/2020_sll/american_guild.png"
"tile_active": "/img/projekte-tiles/2020_sll/american_guild-active.png"
"team":
    -
        "name": "Natalie Kohler"
        "contact":
            "mail": "mailto:nkohler@cbs.mpg.de"
    -
        "name": "Jasper Pöhls"
        "contact":
            "mail": "mailto:poehls@protonmail.com"
    -
        "name": "Achim Becker"
        "contact":
            "mail": "mailto:achim.becker@aventurin.one"
"data":
    - "Deutsches Exilarchiv 1933-1945 der Deutschen Nationalbibliothek"
    - "Gemeinsame Normdatei (GND)"
    - "Länder-ISO-Codes"
    - "Länder-Geocodes"
"links":
    -
        "class": "github"
        "link": "https://gitlab.com/nkohler/exilarchiv"
        "text": "GitLab"
           
---
<b>DE</b> \| Der vom Deutsche Exilarchiv 1933-1945 bereitgestellte Datensatz enthält Informationen zu Briefwechseln von Intellektuellen, die zur Zeit des Nationalsozialismus aus Deutschland fliehen mussten, wie Thomas Mann oder Stefan Zweig. All diese Personen standen in Kontakt mit der "American Guild for German Cultural Freedom", die teilweise lebenswichtige Unterstützung bot.

Mit unserer Netzwerkdarstellung arbeiten wir bisher nicht erschlossene Zusammenhänge der im Exilarchiv gelagerten Personenakten heraus. Durch die zusätzliche Visualisierung auf einer Weltkarte wird eindringlich klar, was "Exil" bedeutet. Dies soll BesucherInnen der Dauerausstellung "Deutschen Exilarchiv 1933-1945" der Deutschen Nationalbibliothek (DNB) eine neue ERFAHRBARKEIT der Daten ermöglichen. Durch eine interaktive Benutzeroberfläche können Interessierte selbst einstellen, welche Aspekte der Daten dargestellt werden. Somit lässt sich beispielsweise nachvollziehen, wer mit wem kommunizierte und wie intensiv dieser Kontakt war. Die Aufbereitung der Daten in ein ERFORSCHBARES Format dient nicht nur unserer Visualisierung, sondern macht die Informationen auch für wissenschaftliche Zwecke zugänglicher. Somit helfen unsere Vorarbeiten der DNB, gemäß ihrer strategischen Ausrichtung, Werke benutzerfreundlich zu erschließen.

Spannend war für uns alle der Aspekt, mit einem großen Datensatz zu arbeiten, diesen mit Linked-Open-Data anzureichern, sowie die Zusammenhänge durch interaktive Grafiken wie Netzwerkanalysen darzustellen. Technisch umgesetzt wurde das Projekt durch Datensäuberung in R und anschließende Visualisierung mit visNetwork in R und plotly in Python. Der entstandene Code ist auf GitLab und das Netzwerk zusätzlich als shiny Webapp verfügbar.
<br/><br/>
<b>FR</b> \| Les données mises à disposition par les “Archives allemandes de l’exil 1933-1945” contiennent des informations sur des échanges épistolaires entre des intellectuels qui durent fuir l’Allemagne nazie, comme Thomas Mann ou Stefan Zweig. Toutes ces personnes étaient en contact avec l’"American Guild for German Cultural Freedom" qui les aidait parfois de manière vitale.

Dans notre analyse de réseaux, nous mettons à jour des relations jusqu’ici inconnues entre des fiches nominatives issues des Archives de l’exil. Et la visualisation sur une carte du monde rend cruellement explicite ce que le terme “exil” signifie.

Cela a pour but de permettre aux visiteur.euse.s de l’exposition permanente des “Archives allemandes de l’exil 1933-1945” de la Bibliothèque Nationale Allemande d’APPRÉHENDER autrement ces données. L’interface interactive permet aux personnes intéressées de choisir elles-mêmes quels aspects des données elles souhaitent visualiser.

Cela permet par exemple de voir qui communiquait avec qui et quelle était l’intensité de leurs échanges. Le traitement des données pour les mettre à disposition dans un format ANALYSABLE rend non seulement notre visualisation possible, mais il rend les données également plus facilement utilisable pour des recherches scientifiques.

Cela aide ainsi la Bibliothèque Nationale Allemande dans sa politique du plus grande accessibilité des oeuvres pour le grand public.

Pour nous tous, il était particulièrement intéressant de travail avec un jeu contenant beaucoup de données, de le compléter à l’aide de Linked Open Data, ainsi que de permettre une visualisation de liens existants grâce à des graphiques interactifs et des analyses de réseaux. Techniquement, nous avons procédé au nettoyage des données en R puis à la visualisation des données avec visNetwork en R et plotly en Python. Le code développé se trouve sur GitLab et le réseau est également disponible sous forme de shiny Webapp.