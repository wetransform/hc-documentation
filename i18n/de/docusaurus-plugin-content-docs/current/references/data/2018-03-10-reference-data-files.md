---
title: "Dateien"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-data"
layout: help-detail
language: de
sidebar_position: 1

---

Im &laquo;Dateien&raquo;-Bereich wird grau hinterlegt die Anzahl der Dateien angezeigt, die mit dem Datensatz verbunden sind. In diesem Bereich können sie zusätzliche Dateien hochladen, Dateien ansehen, herunterladen oder löschen.

Es gibt mehrere Möglichkeiten, zusätzliche Dateien hochzuladen:
* Klicken sie auf &laquo;Datei(en) auswählen&raquo; und navigieren sie zur gewünschten Datei.
* Klicken sie auf &laquo;URL(s) eingeben&raquo; und fügen sie die gewünschte URL oder WFS GetFeature-Anfrage hinzu. Fügen sie den API-Schlüssel in das Feld Autorisierung ein, wenn sie einen API-Schlüssel im Autorisierungsheader der HTTP-Anfrage zum Herunterladen von Daten über die API übergeben möchten.
* Ziehen sie eine oder mehrere Dateien auf &laquo;Datei(en) hierher ziehen&raquo;.

Einige Datentypen (beispielsweise Shape-Files und Geodatenbanken) bestehen aus mehreren Einzeldateien. Diese werden in hale»connect als einzelne Dateien angezeigt. Um alle Einzeldateien anzeigen zu lassen, die zu einer Datei gehören, klicken sie auf den Dateinahmen oder das &laquo;+&raquo;-Zeichen. Um zur Anzeige aller vorhandenen Dateien zurückzukehren, klicken sie auf &laquo;Alle Dateien&raquo;.

 Um alle vorhandenen Dateien als Archiv herunterzuladen und auf ihrem Rechner zu speichern, klicken sie auf &laquo;Als Archiv herunterladen&raquo;. Wenn sie auf den Namen auf eine der vorliegenden Dateien klicken, wird die ausgewählte Datei heruntergeladen.

 Um eine einzelne Datei zu löschen, klicken sie auf das rote &laquo;x&raquo; in der oberen linken Ecke des Dateifeldes. Um alle Dateien zu löschen, klicken sie auf &laquo;Alle Dateien löschen&raquo;. Gelöschte Dateien können nicht wiederhergestellt werden.

 Mit dem Schalter «Mit Datenquelle synchron halten» können Benutzer auswählen, wie oft die über die API heruntergeladenen Datensätze aktualisiert werden. Updates können so konfiguriert werden, dass sie täglich, stündlich oder alle zehn Minuten ausgeführt werden. Die Schaltfläche «Jetzt synchronisieren» löst die sofortige Synchronisation von Dateien aus.

### **Anhänge hochladen**

 Es gibt verschiedene Wege, Dateianhänge auf hale»connect hochzuladen. Sie können Anhänge in den Abschnitt „Dateien“ ihres Datensatzes hochladen, sobald er veröffentlicht wurde, indem sie ihn per Drag-and-Drop ziehen, eine Datei von der Festplatte hochladen oder eine URL angeben. Per URL hochgeladene Anhänge können automatisch erneut heruntergeladen werden, indem sie auf die Schaltfläche «Anhänge erneut herunterladen» klicken. Alternativ können sie Anhänge während der Dateierstellung hochladen. Dateitypen für Anhänge können PDFs, GeoTIFFs oder Texturen für 3D-Dateien sein. Anhänge mit Punkten im Dateinamen werden nicht unterstützt. Anhangsdateien werden aus ihrem Datensatz referenziert.

 **Anhänge während des Anlegens von Datensätzen hochladen**

 Möglicherweise möchten sie einen Datensatz mit einer GML- oder einer Shape-Datei anlegen, aus dem auf Anhänge verwiesen wird. Wenn ihre GML-Datei relative Verweise enthält, können sie die referenzierten Dateien während des Anlegens des Datensatzes als Anhänge mit hochladen. hale»connect unterstützt auch die Veröffentlichung von Shape-Dateien mit Anhängen. Dateien, die aus einer Shape-Datei relativ referenziert werden, werden als Anhänge erkannt. Anhänge, die während des Anlegens eines Datensatzes hochgeladen werden, werden automatisch zu den Anhängen im &laquo;Dateien&raquo;-Bereich des Datensatzes hinzugefügt. Bei Datensätzen, für die eine Online-Transformation konfiguriert ist, werden die Anhänge automatisch in den Ziel-Datensatz kopiert.

 Auf hale»connect hochgeladene Anhang-Dateien haben einen öffentlich zugänglichen Link. Diese Links zu Anhang-Dateien können in ihren *Predefined Dataset*-Download-Dienst eingebunden werden und bei Nutzung des Feature Explorer-Werkzeuges eingesehen werden. Für die Anhang-Dateien werden keine separaten Dienste-Layer erstellt.

 Wenn ihr Datensatz veröffentlicht ist, können sie ihre Anhang-Dateien folgendermaßen einsehen:

   *	Gehen sie zu &laquo;Daten&raquo; und wählen sie den Datensatz aus der Ressourcen-Liste aus.
   *	Wählen sie den &laquo;Dateien&raquo;-Bereich aus.
   *  Anhänge werden im &laquo;Anhänge&raquo;-Fenster angezeigt. Wenn ihr Datensatz relative Links zu Ressourcen enthält, die nicht während des Anlegens des Datensatzes hochgeladen wurden, wird eine Warnung angezeigt. Sie können fehlende Anhang-Dateien direkt im &laquo;Anhänge&raquo;-Fenster hochladen. Veröffentlichen sie ihren Datensatz erneut um neue Anhang-Links einzubinden.

**Ihren GML-Dateien Platzhalter hinzufügen**

 Auf Anhang-Dateien, die manuell im &laquo;Dateien&raquo;-Bereich ihres Datensatzes hochgeladen werden, kann in ihren GML-Dateien verwiesen werden. Um auf eine Anhang-Datei zu verweisen, müssen sie ihre GML-Datei bearbeiten, sodass ein Platzhalter-Wert für ihren Anhang enthalten ist. Dieser Platzhalter-Wert muss in einem String-Attribut mit folgendem Muster gespeichert werden: ```attachment:///<uploadedAttachmentFile>```

**Beispiel:** ```<base:link>attachment:///MyFile.pdf<base:link>```

Auch auf externe URLs kann aus ihren GML-Datensätzen verwiesen werden. Externe URLs müssen in einem String-Attribut mit folgendem Muster gespeichert werden: ```attachment-<urlToExternalFile>```

**Beispiel:**```<base:link>attachment-http://www.mywebsite.de<base:link>```

Der nächste Schritt ist die Erstellung eines Datensatzes mit ihrer bearbeiteten GML-Datei. Die Datei-Analyse erkennt Referenzen auf Anhang-Dateien und externe URLs in ihren Quell-Dateien. Wenn sie in ihrer GML-Datei auf externe URLs verweisen, müssen sie keine Anhang-Dateien hochladen. Wenn sie auf Anhang-Dateien auf hale»connect verweisen, laden sie ihre Anhang-Dateien im &laquo;Dateien&raquo;-Bereich ihres Datensatzes hoch.

Um Anhang-Dateien hochzuladen:
  * Gehen sie auf &laquo;Daten&raquo; und wählen sie den Datensatz aus der Liste der Ressourcen aus.
  * Wählen sie den &laquo;Dateien&raquo;-Bereich aus.
  * Klicken sie auf &laquo;Anhänge hinzufügen&raquo; um den verknüpften Anhang hochzuladen. Der Name der Datei muss mit dem Dateinamen in der GML-Datei übereinstimmen. Wenn sie auf mehr als eine Anhang-Datei verweisen, wird ihnen im Anhänge-Bereich eine Liste von Dateinamen angezeigt.
  * Erneuern sie ihre Dienste.

Der Eintrag in der GML-Datei wird in einen öffentlich zugänglichen Link zu der hochgeladenen Anhang-Datei umgewandelt. Die Links zu den Anhang-Dateien und externen URLs werden im Feature Explorer, mit dessen Hilfe Attribute komplexer GML-Dateien eingesehen werden können, angezeigt.

### **Dateien zu Objektarten zuordnen**

Die Inhalte der einzelnen Dateien werden durch das System automatisch einer der zum Thema gehörigen Objektarten zugeordnet. Für XML-Dateien funktioniert dieser Prozess zuverlässig, für andere Dateitypen, bei denen keine qualifizierten Namensräume und konsistent definierte Attributnamen vorliegen, wird ein heuristisches Verfahren genutzt um die bestmögliche Zurodnung zu finden.In manchen Fällen kann es dabei zu fehlerhaften Zuordnungen kommen. Sie können die Inhalte einer Datei daher manuell mit einer Objektart in Verbindung setzen:

1.  Klicken sie auf das Stift-Symbol auf dem Feld der Datei, die sie neu zuordnen möchten.
2.  Wählen sie aus der Liste die Objektart aus, der sie die Datei zuordnen möchten.
