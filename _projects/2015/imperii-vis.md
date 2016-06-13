---
identifier: 23
layout: project
year: 2015
name: "imperii-vis"
tile: "/img/projekte-tiles/2015/imperiii.png"
tile_active: "/img/projekte-tiles/2015/imperiii-active.png"
image: "/img/projekte-tiles/default-active.png"
links:
  -
    class: "github"
    link: "https://github.com/danielbaak/imperii-viz"
    text: "github"
  -
    class: "pdf"
    link: "/downloads/projekte-2015/imperii-viz-praesentation.pdf"
    text: "Teampräsentation"
data:
  - "Regesta Imperii"
  - "Wikipedia"
  - "Wikimedia"
team:
  -
    name: "Frederik Riedel"
    contact:
      twitter: "http://twitter.com/frederikriedel"
  -
    name: "Larissa Laich"
    contact:
      twitter: "http://twitter.com/larissalaich"
  -
    name: "Fritz Otlinghaus"
  -
    name: "Timo Müssig"
  -
    name: "Daniel Baak"
---
Der Datensatz \"Regesta Imperii\" besteht aus Regesten (Inhaltsangaben) von Urkunden der Kaiser, Könige und einiger
Päpste des Mittelalters (800 bis 1500). Ein Regest fasst den rechtlich relevanten Inhalt sowie die handelnden Personen
einer Urkunde zusammen. Die Daten wurden von uns aufbereitet und in Datenbanken gespeichert, sodass wir auf diese über
unsere Website besser zugreifen können. So besteht zunächst die Möglichkeit einen Papst oder Herrscher auf der Startseite
auszuwählen und bekommt für diesen dann auf einer Karte in Form einer Heatmap angezeigt. So ist für Forscher und
Interessierte schneller ersichtlich, woher diese Daten kommen und wie weit die Herrschaftsgebiete der einzelnen Herrscher
in Wirklichkeit reichten. Wie verliefen die Landesgrenzen, die wir heute kennen, damals? Wer war der einflussreichste
Herrscher in unserer Liste? Mit wenigen Klicks kann man über die intuitive Benutzeroberfläche unserer Website navigieren
und findet sich schnell zurecht. Wir benutzten ein Python-Backend, das eine REST-API zur Verfügung stellt, die dann von
einem Javascript-Frontend abgefragt und visualisiert wird.