---
title: "Využití zdrojů z hale»connect v QGIS"
categories:
- "help-page-category-tutorials"
- "help-page-subcategory-tutorials"
layout: help-detail
language: cs

---

Open source i proprietární geografické informační systémy v současnosti nabízejí omezenou okamžitou podporu pro komplexní GML. Jednoduché prohlížení vektorové geometrie a dat souvisejících atributů je podporováno některými GIS, např. QGIS, avšak standardní operace geozpracování a prostorové analýzy nejsou pro komplexní GML podporovány. Chcete-li podrobněji diskutovat o podpoře GML v softwaru GIS, navštivte [CanIUse INSPIRE github repository](https://github.com/INSPIRE-MIF/caniuse). Harmonizovaná data INSPIRE jsou komplexní GML a tento tutoriál si klade za cíl ukázat, jak lze načíst služby zobrazení a stahování hale»connect v QGIS.

Tento tutoriál používá:

* aktuální verzi QGIS 3.6.1 'Noosa' vydanou dne 22. 3. 2019
* aktuální verzi QGIS GML Application Schema Toolbox plugin 1.2.0

### **Zobrazení WMS**

Chcete-li zobrazit své hale»connect WMS v QGIS, budete potřebovat URL odkaz na dokument o možnostech vaší služby. Můžete přímo přistupovat k dokumentům s funkcemi pro WMS 1.1.1 a 1.3.0 ze sekce View Services vaší datové sady. Chcete-li zkopírovat libovolnou URL adresu do schránky, klikněte na ikonu <a class="btn btn-default" title="Kopírovat URL adresu "><span class="glyphicon glyphicon-copy"></span></a> vpravo od URL adresy.

Otevřete QGIS a klikněte na nabídku Vrstva. V nabídce Vrstva vyberte položku Přidat vrstvu a poté vyberte položku Přidat vrstvu WMS/WMTS.

<img src={require("/images/help/cs/Tutorial_qgisAddLayer.png").default} alt="" title="Přidání vrstvy WMS do QGIS" class="img-responsive img-inline-help"/>

V dialogovém okně Správce zdrojů dat klikněte na tlačítko Nový. Otevře se dialogové okno, které vám umožní definovat nové WMS připojení. Pojmenujte své nové připojení a do pole URL zadejte URL adresu vaší služby hale»connect. Klikněte na tlačítko OK.

<img src={require("/images/help/cs/Tutorial_qgisAddWMS.png").default} alt="" title="Přidání vrstvy WMS do QGIS" class="img-responsive center-block"/>

Vaše nová vrstva by se měla zobrazit v horní části Správce zdrojů dat. Kliknutím na tlačítko Připojit získáte přístup ke službě. Můžete vybrat jednu nebo více vrstev, které chcete přidat do mapy. Kliknutím na kartu Pořadí vrstev v dialogovém okně Správce zdrojů dat můžete řídit pořadí kreslení vrstev. Po dokončení klikněte na tlačítko Přidat v pravém dolním rohu dialogového okna Správce zdroje dat a přidejte data do své mapy.

<img src={require("/images/help/cs/Tutorial_qgisAddWMS1.png").default} alt="" title="Přidání vrstvy WMS do QGIS" class="img-responsive img-inline-help"/>

Vrstvy, které vyberete, by se měly zobrazit na panelu vrstev vlevo. QGIS zobrazuje legendu přijatou z požadavku GetLegendGraphic odeslaného do WMS. Kliknutím pravým tlačítkem myši na vrstvu a výběrem položky Vlastnosti zobrazíte další informace o službě.

<img src={require("/images/help/cs/Tutorial_qgisMap.png").default} alt="" title="Vrstva WMS v QGIS" class="img-responsive img-inline-help"/>

### **Identifikace funkcí ve WMS**

Po přidání vrstev služby zobrazení na mapu je můžete prozkoumat pomocí tlačítka Identifikovat.

<img src={require("/images/help/cs/Tutorial_qgisIdentify.png").default} alt="" title="Identifikace funkce v QGIS" class="img-responsive center-block"/>

Klikněte na tlačítko Identifikovat. Ve standardní instalaci QGIS se tlačítko nachází v horním řádku panelů nástrojů. Označení představuje informační symbol a bílá šipka. Nejprve klikněte na ikonu Identifikovat. Potom klikněte na vrstvu, kterou chcete prozkoumat, na panelu Vrstva vlevo. Poté klikněte na objekt na mapě. Napravo se zobrazí panel Identifikovat výsledky obsahující odpověď GetFeatureInfo. Kliknete-li na oblast s překrývajícími se funkcemi, zobrazí se výsledky pro každou funkci. Služby hale»connect nabízejí jedinečnou schopnost prozkoumat komplexní GML prostřednictvím funkce hale»connect FeatureExplorer. V panelu Identify Results v QGIS klikněte na tlačítko zobrazení Detailů pro funkci, která vás zajímá. Hale»connect FeatureExplorer se otevře v novém dialogu v QGIS. FeatureExplorer vám umožňuje procházet přes jakoukoli úroveň vnořeného komplexního GML, abyste mohli dále zkoumat propojené zdroje, propojené funkce, seznamy kódů nebo atributy, které vás zajímají.

<img src={require("/images/help/cs/Tutorial_qgisFeatureExplorer.png").default} alt="" title="Průzkumník prvků" class="img-responsive img-inline-help"/>

### **Zobrazení WFS**

Chcete-li zobrazit WFS založený na komplexním GML v QGIS, musíte nejprve nainstalovat zásuvný modul QGIS GML Application Schema Toolbox.

**Instalace zásuvného modulu GML Application Schema Toolbox**

Otevřete QGIS a klikněte na nabídku Zásuvné moduly. V nabídce Zásuvné moduly vyberte Spravovat a Instalovat Zásuvné moduly. Otevře se dialogové okno Zásuvné moduly.

<img src={require("/images/help/cs/Tutorial_qgisPlugins.png").default} alt="" title="dialogové okno Zásuvných modulů QGIS" class="img-responsive img-inline-help"/>

Do vyhledávacího panelu zadejte schéma aplikace GML. Vyberte zásuvný modul a klikněte na Instalovat zásuvný modul v pravém dolním rohu. Nainstaluje se zásuvný modul QGIS GML Application Schema Toolbox.

Pro přístup k zásuvnému modulu klikněte na nabídku Zásuvné moduly v QGIS. Možnost nabídky zásuvného modulu QGIS GML Application Schema Toolbox je přidána do rozbalovací nabídky Zásuvné moduly.

**Pomocí zásuvného modulu GML Application Schema Toolbox**

Chcete-li zobrazit své hale»connect WFS v QGIS, budete potřebovat URL odkaz na vaši stahovací službu. K URL adrese můžete přímo přistupovat ze sekce Služby stahování vaší datové sady. Chcete-li zkopírovat URL adresu do schránky, klikněte na ikonu <a class="btn btn-default" title="Kopírovat URL adresu"><span class="glyphicon glyphicon-copy"></span></a> vpravo od adresy URL.

Otevřete QGIS a klikněte na nabídku Zásuvné moduly. Z nabídky Zásuvné moduly vyberte QGIS GML Application Schema Toolbox. Dále vyberte Načíst (průvodce).

<img src={require("/images/help/cs/Tutorial_qgisAppSchema.png").default} alt="" title="QGIS GML Application Schema Toolbox" class="img-responsive img-inline-help"/>

V Průvodci načítáním vyberte WFS a klikněte na Další.

<img src={require("/images/help/cs/Tutorial_qgisLoad.png").default} alt="" title="QGIS GML Application Schema Toolbox" class="img-responsive center-block"/>

V nabídce Možnosti WFS v průvodci načítáním klikněte na tlačítko Nový. Otevře se dialogové okno, které vám umožní definovat nové WFS připojení. Pojmenujte své nové připojení a do pole URL zadejte URL adresu vaší služby hale»connect. Klikněte na tlačítko OK.

<img src={require("/images/help/cs/Tutorial_qgisAddWFS.png").default} alt="" title="Přidání vrstvy WFS do QGIS" class="img-responsive center-block"/>

Vaše nová vrstva by se měla zobrazit v horní části nabídky Možnosti WFS. Kliknutím na tlačítko Připojit získáte přístup ke službě. Můžete si vybrat jeden nebo více typů objektů, které chcete přidat do své mapy. Počet požadovaných funkcí můžete omezit zaškrtnutím parametru Omezit na. Po dokončení klikněte na tlačítko Další. Vyberte Načíst v režimu XML a klikněte na tlačítko Další.

<img src={require("/images/help/cs/Tutorial_qgisMode.png").default} alt="" title="Možnosti načtení" class="img-responsive center-block"/>

V nabídce možností XML klikněte na položku Vyměnit osu X/Y. Předvolený souřadnicový referenční systém služeb hale»connect je EPSG:4326. hale»connect používá definici EPSG databáze EPSG kódu 4326 (WGS 84) a QGIS používá Proj4 definici EPSG kódu 4326 (WGS 84), což zajistí překlopení osy. Použitý CRS můžete změnit v sekci Zdroj vlastností vrstvy po načtení WFS. Kliknutím na tlačítko Dokončit v pravém dolním rohu dialogového okna Průvodce načítáním přidejte data do své mapy.

<img src={require("/images/help/cs/Tutorial_qgisSwapAxis.png").default} alt="" title="Výměna osy X/Y" class="img-responsive center-block"/>

Vrstvy, které vyberete, by se měly zobrazit na panelu vrstev vlevo. Kliknutím pravým tlačítkem myši na vrstvu a výběrem položky Vlastnosti zobrazíte další informace o službě.

### **Identifikace funkcí ve WFS**

Po přidání vrstev stahovací služby na mapu je můžete prozkoumat pomocí tlačítka Identifikovat.

<img src={require("/images/help/cs/Tutorial_qgisIdentify.png").default} alt="" title="Identifikace funkce v QGIS" class="img-responsive center-block"/>

Klikněte na tlačítko Identifikovat. Ve standardní instalaci QGIS se tlačítko nachází v horním řádku panelů nástrojů. Označení představuje informační symbol a bílá šipka. Nejprve klikněte na ikonu Identifikovat. Potom klikněte na vrstvu, kterou chcete prozkoumat, na panelu Vrstva vlevo. Poté klikněte na objekt na mapě. Vpravo se zobrazí panel Identifikovat výsledky, kliknutím na ikonu formuláře Zobrazit funkci zobrazíte atributy funkce, která vás zajímá.

<img src={require("/images/help/cs/Tutorial_qgisViewFeatureForm.png").default} alt="" title="Identifikace funkce v QGIS" class="img-responsive center-block"/>

V QGIS se otevře nové dialogové okno, které vám umožní procházet přes jakoukoli úroveň vnořeného komplexního GML, abyste mohli dále zkoumat propojené zdroje, propojené funkce, seznamy kódů nebo atributy, které vás zajímají.

### **Zjisti více**

QGIS si vede vlastní dokumentaci. Další informace o používání služeb OGC v QGIS naleznete v následujícím odkazu: [Práce s daty OGC](https://docs.qgis.org/3.4/en/docs/user_manual/working_with_ogc/ogc_client_support.html#wms-wmts-client)
