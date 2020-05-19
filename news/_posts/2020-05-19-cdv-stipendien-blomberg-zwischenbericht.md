---
date: '2020-05-19 09:00'
author: Lukas Kuhlendahl, Andrea Lehr
layout: post
published: true
status: publish
title: 'CdV-Stipendiums-Update:<br/>Haus Blomberg mit VR-Innenausstattung'
image:
    src: '/img/news/2020/blombergVARsetzen_VR.jpg'
    alt: ''
    license: ''
tags:
    - Stipendien
type: post
---
<!-- Post -->
<br/>
<p><b>In diesen Tagen kam bei der CdV-Geschäftsstelle ein Zwischenbericht von jenem Teilnehmer*innen-Team an, das als erstes Projektteam „ever“ ein Stipendium im Rahmen von Coding da Vinci begonnen hat. Bei dem Projekt handelt es sich um die VR-Anwendung [Blomberg] VARsetzen, die Lukas Kuhlendahl und seine Kollegen von „Die Weltenweberei“ beim CdV-Hackathon Westfalen-Ruhrgebiet 2019 entwickelten. Das Stipendium, das einen monatlichen Beitrag zum Lebensunterhalt von 1.250 Euro sowie ein individuell zugeschnittenes Weiterbildungspaket umfasst, dauert drei Monate und wird im Programm Kultur Digital von der Kulturstiftung des Bundes gefördert.</b></p> 

<p><b>Während des Hackathons hatten Dominica, Beate, Janos und Lukas das historische Fachwerkhaus Blomberg aus dem Freilichtmuseum Detmold in die digitale Welt versetzt. Anhand von Fotos gestaltete das Team eine 3D-Außenansicht des Bürgerhauses Blomberg, die erlebbar macht wie das Gebäude im Jahr 1870 am Originalstandort ausgesehen haben muss. Dafür gab es bei der CdV-Preisverleihung im Herbst 2019 den Preis „most technical“. Im Rahmen des Coding da Vinci-Stipendiums erhält das Haus Blomberg jetzt auch ein virtuell begeh- und begreifbares Innenleben. Hier der Stand der Dinge, notiert von unserem Stipendiaten Lukas Kuhlendahl:</b></p> 
<br/>
<p>Durch das CdV-Stipendium habe ich die Möglichkeit, im Zeitraum März bis Mai 2020 die Arbeit am Virtual Reality Projekt [Blomberg] VARsetzen fortzusetzen und zusätzlich zur Außenansicht auch einen Innenraum für das Haus zu modellieren. Dazu gehören weitere Interaktionsmöglichkeiten, also Objekte, die der/die Spieler*in mithilfe der Controller in die Hand nehmen und benutzen kann. So sollen weitere Informationen über das Leben der damaligen Bewohner verdeutlicht werden.</p>  
 
<p>Nach Ablauf der ersten Hälfte des Stipendienzeitraums liege ich gut in meinem Zeitplan. Das Freilichtmuseum Detmold, das die Daten zur Verfügung stellt, ließ mir weitere Fotos vom Haus Blomberg zukommen. Auf diesen Bildern ist der heutige Innenraum gut zu erkennen. Da der aktuelle Innenraum dem Zustand von 1870 nachempfunden ist, kann ich die Fotos als Referenz verwenden, um das originale Haus virtuell auferstehen zu lassen.</p>  

<p>Aufbauend auf diesen Informationen konnte ich den Innenraum (Wände, Türen, Fenster, Böden, Decken, Treppe) der Räume modellieren und texturieren. Da man in der während des Hackathons entstandenen VR-Anwendung das Haus nicht betreten konnte, war es innen hohl und nicht ausgestaltet. Um nun auch das Innere mit Leben zu füllen, beginne ich mit der Architektur der Räume selbst, Fenster, Türen und Treppen. So habe ich eine bessere Grundlage, um im nächsten Schritt die Räume mit Möbeln und Objekten auszustatten.</p>  

<br/>
<img class="img-responsive center" src="/img/news/2020/cdv-blomberg-zwischenbericht-wireframe.jpg">
<p class="image-caption">Wireframe-Ansicht der Architektur</p>
<br/>   
 

<p>Diese Raum-Elemente habe ich dann in die bestehende Szene in der Unreal Engine eingesetzt. Dabei fällt schnell auf, wenn Größenverhältnisse nicht stimmen oder Abstände nicht ganz zusammenpassen. Bei diesem Schritt ist es wichtig, immer wieder die VR-Brille aufzusetzen und sich die Szene damit anzuschauen. Es kann passieren, dass Größenverhältnisse am Bildschirm ganz anders wirken als in der virtuellen Welt.</p>  

<p>Eine besondere Herausforderung war die Treppe, denn hier war es besonders wichtig, dass sowohl die Größenverhältnisse als auch der Abstand zwischen Boden und Decken korrekt sind. Da auf den Fotos natürlich keine Maße verzeichnet sind, muss man hier mit Augenmaß arbeiten und immer wieder in der VR-Welt kontrollieren, ob die Höhe stimmt.</p>  
 
<br/>
<img class="img-responsive center" src="/img/news/2020/cdv-blomberg-zwischenbericht-treppe.jpg">
<br/>  
 
<p>In den kommenden Wochen werden die noch fehlenden Objekte und Möbel modelliert, texturiert und einige von ihnen mit Interaktionen versehen. Auch Sounds sollen noch eingebunden werden. Wenn alle Objekte in die Szene integriert sind, wird diese finalisiert, also beleuchtet und kontrolliert, ob sie flüssig läuft. Gegebenenfalls müssen in diesem Schritt noch Optimierungen vorgenommen werden.</p> 

<p>Anschließend kann die Szene exportiert werden, so dass sie auch auf anderen Rechnern abspielbar ist. Parallel wird sie als 360° Video gespeichert, sodass sie auf Youtube gepostet und geteilt werden kann. Die 3D-Modelle können dann auf Sketchfab geladen und für andere zugänglich gemacht werden.</p>  
 
<br/>
<img class="img-responsive center" src="/img/news/2020/cdv-blomberg-zwischenbericht-innenraum.jpg">
<p class="image-caption">Ausmodellierter Innenraum (Stube mit Blick in die Diele)</p>
<br/>  
 
 
<br/>
<img class="img-responsive center" src="/img/news/2020/cdv-blomberg-zwischenbericht-diele.jpg">
<p class="image-caption">Die Diele aus Sicht der Eingangstür</p>
<br/>   
 
 
<p>Für die Modellierung der 3D-Modelle benutze ich die Modellierungssoftware “Blender”. Mithilfe der “Unreal Engine 4”, einer Software, die vorwiegend für die Entwicklung von Computerspielen verwendet wird, werden die Modelle zusammengebracht und die Interaktionen entwickelt. Die Texturierung, also die Gestaltung der Materialien erfolgt über das Programm “Substance Painter”, welches auch über eine Bibliothek verfügt: “Substance Source”. Die VR-Brille, die ich zum Testen der Anwendung verwende, ist die “HTC Vive Pro”.</p> 

<p><i>Soweit der Bericht von Lukas. Bei der Preisverleihung von Coding da Vinci Saar-Lor-Lux wird Lukas das Projekt vorstellen. Sobald es eine Testversion online gibt, werden wir euch informieren.</i></p> 












