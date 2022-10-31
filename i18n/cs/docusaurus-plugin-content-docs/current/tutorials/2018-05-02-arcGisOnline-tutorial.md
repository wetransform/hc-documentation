---
title: "Využití zdrojů z hale»connect v ArcGIS Online"
categories:
- "help-page-category-tutorials"
- "help-page-subcategory-tutorials"
layout: help-detail
language: cs

---

Open source i proprietární geografické informační systémy v současnosti nabízejí omezenou okamžitou podporu pro komplexní GML. Chcete-li podrobněji diskutovat o podpoře GML v softwaru GIS, navštivte [CanIUse INSPIRE github repository](https://github.com/INSPIRE-MIF/caniuse). Harmonizovaná data INSPIRE jsou komplexní GML a cílem tohoto tutoriálu je ukázat, jak lze prohlížet služby hale»connect WMS v ArcGIS Online.

***Implementace Esri WFS v ArcGIS Online podporuje pouze základní OGC WFS na úrovni jednoduchých funkcí.***

Tento tutoriál používá:

* aktuální verzi ArcGIS Online (duben 2019). Pro přihlášení do ArcGIS Online je zapotřebí platný účet Esri. Účet Esri si můžete zdarma vytvořit na webové stránce Esri.

### **Zobrazení WMS**

Abyste si mohli prohlédnout své hale»connect WMS v ArcGIS Online, budete potřebovat URL odkaz na dokument o možnostech vaší služby. Můžete přímo přistupovat k dokumentům s funkcemi pro WMS 1.1.1 a 1.3.0 ze sekce Zobrazit Služby vaší datové sady. Chcete-li zkopírovat libovolnou URL adresu do schránky, klikněte na ikonu <a class="btn btn-default" title="Kopírovat URL adresu"><span class="glyphicon glyphicon-copy"></span></a> vpravo od URL adresy.

Přihlaste se do ArcGIS Online a přejděte do části Moje mapa. Klikněte na kartu Přidat v levé horní části aplikace.

<img src={require("/images/help/cs/Tutorial_arcLogin.png").default} alt="" title="Přidání WMS do ArcGIS Online" class="img-responsive img-inline-help"/>

V nabídce Vrstva vyberte možnost Přidat vrstvu z Webu. V dialogovém okně Přidat vrstvu z Webu vyberte v rozbalovací nabídce jako typ služby WMS-OGC-Web-Service a zadejte URL adresu dokumentu s možnostmi WMS. Klikněte na Přidat vrstvu.

Vaše vrstva WMS by se měla objevit na panelu vrstev vlevo. Kliknutím levým tlačítkem myši na tři tečky, které se zobrazí pod názvem WMS zobrazíte nabídku možností. Nabídka obsahuje celou řadu možností, jako je přiblížení, průhlednost, přejmenování a možnost dalšího upřesnění parametrů požadavku OGC WMS.

<img src={require("/images/help/cs/Tutorial_arcLayerOptions.png").default} alt="" title="Možnosti WMS v ArcGIS Online" class="img-responsive img-inline-help"/>

Potom klikněte na černou šipku vedle názvu WMS. Měla by se zobrazit vaše vrstva WMS. Kliknutím levým tlačítkem myši na tři tečky, které se zobrazí pod názvem vrstvy, aktivujete automaticky otevíraná okna.

<img src={require("/images/help/cs/Tutorial_arcPopUp.png").default} alt="" title="Automaticky otevíraná okna v ArcGIS Online" class="img-responsive img-inline-help"/>

Po aktivaci automaticky otevíraných oken pro vaši vrstvu se v automaticky otevíraném dialogovém okně zobrazí odpověď GetFeatureInfo pro jakoukoli funkci, na kterou kliknete. Kliknete-li na oblast s překrývajícími se funkcemi, zobrazí se výsledky pro každou funkci. Služby hale»connect nabízejí jedinečnou schopnost prozkoumat komplexní GML prostřednictvím funkce hale»connect FeatureExplorer. V automaticky otevíraném dialogovém okně v ArcGIS Online klikněte na tlačítko Zobrazit Detaily pro funkci, která vás zajímá.

<img src={require("/images/help/cs/Tutorial_arcPopUpDialog.png").default} alt="" title="Automaticky otevíraná okna v ArcGIS Online" class="img-responsive img-inline-help"/>

Hale»connect FeatureExplorer se otevře na nové kartě ve vašem prohlížeči. FeatureExplorer vám umožňuje procházet přes jakoukoli úroveň vnořeného komplexního GML, abyste mohli dále zkoumat propojené zdroje, propojené funkce, seznamy kódů nebo atributy, které vás zajímají.

<img src={require("/images/help/cs/Tutorial_arcFeatureExplorer.png").default} alt="" title="FeatureExplorer v ArcGIS Online" class="img-responsive img-inline-help"/>

### **Zjisti více**

Další informace o ArcGIS Online naleznete na [the Esri website](https://www.arcgis.com/index.html).

ArcGIS Online spravuje své vlastní stránky zdrojů. Další informace o používání služeb OGC v ArcGIS Online naleznete na [the ArcGIS Online OGC support pages](https://doc.arcgis.com/en/arcgis-online/reference/ogc.htm).
