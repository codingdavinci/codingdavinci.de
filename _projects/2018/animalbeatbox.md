---
identifier: 73
layout: project
year: 2018
isFirst: false
isLast: false
"name": "AnimalBeatbox"
"tile": "/img/projekte-tiles/2018/animal_beatbox.png"
"tile_active": "/img/projekte-tiles/2018/animal_beatbox-active.png"
"image": "/img/projekte/animal_beatbox.jpg"
"links":
    -
        "class": "github"
        "link": "https://gitlab.com/elbenfreund/AnimalBeatbox"
        "text": "Gitlab"
"data":
    - "Tierstimmen (Museum für Naturkunde Berlin)"
"team":
    -
        "name": "Jasper Pöhls"
        "contact":
            "mail": "mailto:poehls.pm.me"  
---
Das "AnimalBeatbox" Projekt bietet seinen Nutzern die Möglichkeit in kreativer und selbstbestimmter Weise aus 100 Tierstimmensamples auf vier Tonspuren verteilt eigene Kompositionen zu erzeugen und mit Freunden zu teilen.

Die verwendbaren Samples entstammen überwiegend dem Datensatz des Museums für Naturkunde Berlin. Zusätzlich werden einzelne Samples aus weiteren freien Quellen genutzt. Diese Daten werden mit Bildern, Teasertexten und Links zu weiterführenden Informationen angereichert und den Nutzern direkt auf der Benutzeroberfläche verfügbar gemacht. Auf diese Weise gelingt es, die Nutzer auf spielerische Weise beim Erstellen ihrer Tracks mit ihrem Chor vertraut zu machen.

Bildungseinrichtungen, welche die "AnimalBeatbox" bei sich vor Ort einsetzen, haben ferner die Möglichkeit, individuelle Informationen, z.B. wo das Tier lokal als Exponat aufgefunden werden kann, unkompliziert hinzuzufügen und darzustellen.

Die verfügbaren Tiere/Samples werden bereits je nach geeigneter Verwendung in bis zu 4 Gruppen eingeteilt und durch ein kleines Profilbild dargestellt. Aus dieser Auswahl kann der Nutzer einen "Chor" von bis zu 4 Tieren/Samples zusammenstellen. Die so ausgewählten Tiere werden dann gemeinsam mit einem größeren Bild und weiteren Informationen prominent dargestellt. Auf diese Weise wird der Nutzer eingeladen eine besonders persönliche und ansprechende Interaktion mit den Inhalten zu entwickeln.

Auf dem Kernelement der Applikation, dem Sequenzer, haben die Nutzer nun die Möglichkeit, die von ihnen gewählten Samples zeitlich anzuordnen und festzulegen, wann welches Sample in welchen Wiederholungsmustern wiedergegeben wird. Das Interface ist hierfür durch Farbkodieren und bewussten Verzicht auf Details bewusst einfach und intuitiv gestaltet. Ziel ist es, einen spielerischen Zugang der Zielgruppe zu fördern und nicht, eine professionelle Audiosoftware zu entwickeln.

Wird der so arrangierte Track wiedergegeben werden die Tiere welche gegenwärtig "singen" noch einmal besonders hervorgehoben, so das eine dynamische Wiedergabe von audio- und visuellem Feedback entsteht.

Sind die Nutzer zufrieden mit Ihrem Stück, können Sie einen besonderen "Share-Link" erzeugen, welcher es Freunden ermöglicht, das geschaffene Meisterwerk selbst zu hören und gegebenenfalls zu bearbeiten. Wichtig an diesem Feature ist uns, dass hierfür keinerlei Nutzerinformationen gespeichert werden müssen. Alle relevanten Informationen sind bereits im Link selbst kodiert.

Als "Vue.js" basierte Webapp ist die "Animal Beatbox" plattformunabhängig und standardkonform. Da sie sowohl Desktops wie auch Tablets unterstützt, eignet sie sich insbesondere auch für den lokalen Einsatz in Museen und Ausstellungen, wo sie ein Bindeglied zwischen Exponat und interaktivem Spiel bieten kann.

Zum professionellem Anspruch des Projektes gehört eine vollständige webpack-basierte Toolchain sowie das Umsetzen aktueller "best practices" und Standards durch Linter und Ähnliches. Über die eigentliche Webapplikation hinaus stellt das Repository weiterhin einige Werkzeuge bereit, um den verwendeten Datensatz im Ganzen aus seiner Quelle zu extrahieren und samt Metainformationen verfügbar zu machen, so dass Interessierte Entwickler direkt auf die existierende Codebase aufbauen und die Daten nutzen können.

Das AnimalBeatbox Team arbeitet gegenwärtig noch aktiv an Verbesserungen und konzentriert sich gegenwärtig auf die Darstellung und Präsentation. Ziel ist es, dem Nutzer eine intuitive Interaktion und Auswahl der Tiere/Samples zu ermöglichen und ihm zeitgleich weitere Informationen über das relevante Tier zu bieten.
