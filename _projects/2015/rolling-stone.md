---
identifier: 35
layout: project
year: 2015
name: "Rolling Stone"
tile: "/img/projekte-tiles/2015/rollingstone.png"
tile_active: "/img/projekte-tiles/2015/rollingstone-active.png"
image: "/img/projekte/rolling_stone_logo.png"
links:
  - "Webseite nicht mehr verfugbar"
  -
    class: "github"
    link: "https://github.com/knutator2/Rolling-Stone"
    text: "github"
  -
    class: "pdf"
    link: "/downloads/projekte-2015/rolling-stone.pdf"
    text: "Teampräsentation"
data:
  - "Stiftung Stadtmuseum, Naturwissenschaftliche Sammlung, Sammlungsbereich Geologie"
  - "Informationstexte des Stadtmuseums"
team:
  -
    name: "Anika Schultz"
    contact:
      mail: "mailto:mail@anikaschultz.de"
  -
    name: "Knut Perseke"
    contact:
      mail: "mailto:knut.perseke@gmail.com"
      twitter: "http://twitter.com/knutator"
      github: "http://github.com/knutator2"
  -
    name: "Ulrika Müller"
    contact:
      mail: "mailto:mail@ulrikamueller.de"
  -
    name: "Thomas Fett"
    contact:
      mail: "mailto:mail@thomasfett.de"
---
Die geologische Sammlung des Stadtmuseums Berlin stellte unserem Team einen Datensatz aus Fotos und Informationen zu
fast 300 Steinen aus ihrem Archiv zur Verfügung. Die Funde sind mehrere Millionen Jahre alt und wurden in den
Eiszeiten von Gletschern aus Skandinavien nach Norddeutschland transportiert. Der älteste Stein ist vor geschätzt
1,8 Milliarden Jahren entstanden. Um diese zeitlich sowie räumlich schwer zu fassenden Dimensionen nachvollziehbar
zu machen, hat unser Team das Projekt Rolling Stone ins Leben gerufen und eine dazugehörige Webseite entwickelt.
Durch die Kombination aus informativem und spielerischem Anteil soll die “Spur der Steine” den Besuchern näher
gebracht werden. Im Zentrum steht eine Karte, auf der der Ausgangs- und der Fundort der Gesteine eingezeichnet sind.
Der Nutzer kann die dargestellten Steine interakttiv nach Erdzeitalter und Gesteinsart filtern. In der Detailansicht
werden Fotos und Alter des ausgewählten Exemplars angezeigt. Um den Zugang zu erleichtern, werden zudem die
Entstehungsgeschichte der Steine erklärt sowie interessante Merkmale erläutert. Als weiteres Feature sollen die Nutzer -
mithilfe eines Graphen - Steine mit ähnlichen Eigenschaften spielerisch entdecken können. Das Spiel kann bei jedem
Stein über einen Button gestartet werden. Zunächst erscheint nur das Foto des ausgewählten Steins. Klickt man auf die
rechte Kante des Bildes, werden z. B. Fundstücke aus dem gleichen Erdzeitalter angezeigt; mit einem Klick auf der unteren
Seite gelangt man zum Stein, der den nächstgelegenen Fundort hat. Die User können somit explorativ das Steinarchiv des
Stadtmuseums erkunden. Bei der Anwendung handelt es sich um eine Angular-App. Der CSV-Datensatz wurde in ein JSON-Format
umgewandelt und leicht angepasst. Um den Graphen darzustellen, haben wir das D3-Framework benutzt. Der Code zu der
Anwendung liegt auf Github unter der MIT Lizenz; die Seite selbst liegt als Github-Page vor. Zur Anzeige der Karte wurde
das Leaflet-Framework in Verbindung mit Mapbox genutzt.  Das Team setzt sich aus zwei Programmieren, einer Designerin
und einer Medienwissenschaftlerin zusammen. Und vor zehn Wochen hätten wir wohl keiner von uns gedacht, dass wir uns mal
so für Steine begeistern könnten.
