---
title: "Erste Schritte mit hale»connect"
categories:
    - "help-page-category-start"
    - "help-page-subcategory-start"
layout: "help-detail"
language: de

---

hale»connect ist eine cloud-basierte Plattform, die es Nutzenden ermöglicht Datensätze, OGC Web-Services und Metadate zu veröffentlichen. Mit hale»connect können Nutzende außerdem auf Transformationsprojekte zugreifen, die mit hale»studio erstellt wurden, um diese für automatisierte online-Transformationen zu nutzen. hale»connect ermöglicht es Nutzenden Ressourcen innerhalb ihrer Organisation anzulegen, zuzugreifen, zu transformieren, gemeinsam zu bearbeiten und mit ihrer Organisation oder der Öffentlichkeit zu teilen. Mehr Informationen zu jährlichen Abonnements finden sie im [Produkt](https://www.wetransform.to/products/haleconnect/) Bereich der Homepage.

Diese Schnellstart-Anleitung begleitet Benutzende bei der Registrierung und liefert einen kurzen Überblick über die verschiedenen Arten von Ressourcen, die mit hale»connect verwaltet werden können, sowie eine Einführung zu einigen der meist genutzten Arbeitsabläufe für Veröffentlichungen. Mehr Informationen finden sie in der [Dokumentation](https://www.wetransform.to/help/de/).

### **Erste Schritte mit hale»connect**

**Für ein Konto auf der [hale»connect](https://haleconnect.com) Plattform registrieren**

Sie können sich auf [https://haleconnect.com](https://haleconnect.com) für ein kostenloses 30-tägiges Test-Profil registrieren.
Legen sie auf der Startseite ein Profil an, indem sie einen Nutzernamen, ein Passwort und ihre Email-Adresse angeben. Sie sollten daraufhin eine Registrierungs-Email mit einem Link zur Aktivierung ihres hale»connect-Profils erhalten. Klicken sie auf den Link und loggen sie sich mit ihrer Email-Adresse und ihrem Passwort ein um ihre Profil-Seite einzusehen und mit ihren Aktivitäten auf der hale»connect Plattform zu beginnen.

**Eine Einladung zu einer Organisation annehmen**

Sie erhalten eine Registrierungs-Email mit einem Link um ihr neues hale»connect-Profil zu aktivieren, wenn ihre System-Administratorin oder ihr System-Administrator ein Profil für sie anlegt. Sie werden automatisch Mitglied der Organisation, die ihre System-Administratorin oder ihr System-Administrator ausgewählt hat. Klicken sie auf den Link und legen sie ein Passwort fest um ihre Profil-Seite einzusehen und mit ihren Aktivitäten auf der hale»connect Plattform zu beginnen.

### **Überblick hale»connect-Ressourcen**

**Einleitung**

Ressourcen auf hale»connect werden von drei verschiedenen Nutzerrollen verwaltet: Datenmanager, Themenmanager und Superanwender. Nutzende mit der Rolle &laquo;Datenmanager&raquo; können Datensätze hochladen und verwalten, Nutzende mit der Rolle &laquo;Themenmanager&raquo; können Themen, Schemata und Transformationsprojekte konfigurieren und Nutzende mit der Rolle &laquo;Superanwender&raquo; haben zusätzlich die Möglichkeit, Organisationen anzulegen und zu verwalten. Sie können ihre Rolle auf ihrer Profilseite einsehen. Wenn sie sich über die Homepage für hale»connect registriert haben, wird ihnen standardmäßig die Rolle des Themenmanagers zugewiesen.

Benutzende von hale»connect können ihre Schemata, Themen, Datensätze und Transformationsprojekte auf hale»connect verwalten. Die folgende Graphik stellt einen grundlegenden Arbeitsablauf dar. Es ist wichtig zu verstehen, dass ein Schema und ein Thema benötigt werden, um einen Datensatz anzulegen. Wenn sie in der Rolle des Datenmanagers agieren, muss ihr Themenmanager diese für sie konfigurieren.

<img src={ require('@site/static/images/help/de/publish_dataset.png').default } alt="" title="Einen Datensatz veröffentlichen" className="img-responsive img-inline-help"/>

**Einen Datensatz veröffentlichen**

Folgen sie diesen Schritten um einen neuen Datensatz auf hale»connect zu veröffentlichen:

*	Gehen sie auf den Bereich &laquo;Daten&raquo; im Hauptmenü.
*	Klicken sie auf &laquo;+ Neuen Datensatz anlegen&raquo; am Ende der Datensatz-Liste.
*   Wählen sie ein Thema aus, dem ihr Datensatz angehören soll. Ein Thema enthält mindestens ein Schema sowie Konfigurationen zur Veröffentlichung der zugehörigen Web-Dienste.
*   Wählen sie die Quell-Dateien aus. Es gibt verschiedene Wege, die Dateien hochzuladen, die zu ihrem Datensatz gehören:
    * Klicken sie auf &laquo;+ Datei(en) auswählen&raquo; und navigieren sie zur gewünschten Datei.
    * Klicken sie auf &laquo;+ URL(s) eingeben&raquo; und navigieren sie zur gewünschten URL bzw. dem gewünschten WFS.
    * Ziehen sie eine Datei auf &laquo;+ Datei(en) hierher ziehen&raquo;.
*	Geben sie ihrem Datensatz einen Namen.
*	Geben sie alle verpflichtenden Metadaten-Elemente an. Metadaten-Kategorien werden mit einer roten Markierung gekennzeichnet, welche die Anzahl der darin fehlenden verpflichtenden Metadaten-Elemente angibt.
*	Wählen sie aus, welche Dienste veröffentlicht werden sollen. Wenn sie Darstellungs- und Download-Dienste veröffentlichen, werden auch ihr Datensatz, ihre Datensatz-Metadaten sowie ihre Service-Metadaten veröffentlicht.

Mehr Informationen zu Datensätzen finden sie in den folgenden Abschnitten der Dokumentation:

[Einen neuen Datensatz anlegen](../create-manage-datasets/create-dataset/2015-01-10-dataset-create.md)

[Metadaten für einen Datensatz bearbeiten](../create-manage-datasets/edit-metadata/2015-01-05-dataset-enter-metadata.md)

[Dienste für einen Datensatz veröffentlichen](../create-manage-datasets/publish-services/2015-01-01-dataset-publish-services.md)

**Ein online-Transformationsprojekt veröffentlichen**

Die Veröffentlichung einer online-Transformation erfordert ein Quell-Thema, einen Quell-Datensatz, ein Ziel-Thema und ein Transformationsprojekt. Der Ziel-Datensatz wird automatisch durch die online-Transformation erstellt. Sie müssen in der Rolle &laquo;Themenmanager&raquo; angemeldet sein, um den unten dargestellten Arbeitsablauf ausführen zu können.

<img src={ require('@site/static/images/help/de/online_transformation.png').default } alt="" title="Eine online-Transformation veröffentlichen" className="img-responsive img-inline-help"/>

Folgen sie diesen Schritten um eine online-Transformation auf hale»connect durchzuführen:  

*	Legen sie ein Transformationsprojekt mit hale»studio an und exportieren sie dieses direkt zu hale»connect.
*	Legen sie die Schemata an, die sie benötigen, um ihre Quelldaten hochzuladen und ihre Zieldaten zu veöffentlichen. Wenn ihre Quell- oder Zieldaten mehr als ein Schema benötigen, legen sie alle benötigten Schemata an.
*	Legen sie ein Quell-Thema an und fügen sie alle Objektarten aus den zuvor angelegten Schemata hinzu, die sie für ihre Quelldaten benötigen.
*	Legen sie ein Ziel-Thema an und fügen sie alle Objektarten aus den zuvor angelegten Schemata hinzu, die sie für ihre Zieldaten benötigen.
*	Navigieren sie zu ihrem Quell-Thema und fügen sie eine Transformations-Konfiguration im &laquo;Transformation&raquo;-Bereich hinzu. Wählen sie das Transformations-Projekt, das sie zu hale»connect exportiert haben, und ihr Ziel-Thema aus und klicken sie auf &laquo;Konfiguration hinzufügen&raquo;.
*	Legen sie unter Nutzung ihres Quell-Themas einen Quell-Datensatz an und fügen sie alle Quell-Dateien hinzu, die von ihrem Transformationsprojekt genutzt werden. Sie können auswählen, welche der folgenden Schritte ausgeführt werden sollen:
    Darstellungs- und Download-Dienste für ihre Quelldaten veröffentlichen
    Die online-Transformation ausführen
    Darstellungs- und Download-Dienste für ihre transformierten Daten veröffentlichen
*	Sie können die Ergebnisse im &laquo;Darstellungs-Dienste&raquo;- und im &laquo;Download-Dienste&raquo;-Bereich ihres Datensatzes einsehen.

Für Unterstützung bei fortgeschrittenen Themen wie Online-Transformation, beachten sie auch unsere Angebote Sie zu unterstützen unter [support](https://www.wetransform.to/services/support/).
