---
title: "Konfigurace online transformace na hale»connect"
categories:
- "help-page-category-tutorials"
- "help-page-subcategory-tutorials"
layout: help-detail
language: cs

---

Platformu hale»connect lze nakonfigurovat tak, aby uživatelům umožnila publikovat, transformovat a ověřovat datové sady, metadata a služby během několika minut. Stačí, když automatizované pracovní postupy nakonfiguruje pouze jednou Správce témat nebo Superuživatel, a kterýkoli uživatel v organizaci je může opakovaně používat. Uživatelům s daty, která se často aktualizují, usnadňují automatizované transformační pracovní postupy aktualizaci a opětovné publikování služeb zobrazení a stahování. Hale»connect dokáže rychle a automaticky znovu spustit transformace a znovu publikovat služby a metadata, aby odrážely změny ve zdrojových datech.

Tento tutoriál obsahuje přehled kroků potřebných pro konfiguraci automatizace pracovního toku online transformace. Publikování online transformace vyžaduje konfiguraci několika zdrojů a musí ji provést uživatel s oprávněními Správce témat nebo Superuživatele. Než začneme, zopakujme si seznam zdrojů, které potřebujeme:

* transformační projekt hale»studio
* schéma (schémata) pro vaše zdrojová data
* schéma (schémata) pro vaše cílová data
* zdrojové téma
* cílové téma
* zdrojovou datovou sadu

*DŮLEŽITÉ: Cílová datová sada se automaticky generuje online transformačním pracovním postupem. Cílová datová sada je obvykle transformovaná INSPIRE GML.*

### **Vstupy**

Instalace hale»studio a vytváření zarovnání přesahují rámec tohoto návodu. Více informací naleznete na [hale»studio](https://www.wetransform.to/products/halestudio/).

Pro tento tutoriál použijeme:

* Stávající transformační projekt hale»studio. Transformační projekt si můžete stáhnout [zde](https://wetransform.box.com/s/1x3r10u04fug4a4k2hzmlocqidz4tga8).
* Dva tvarové soubory *Obsahuje data OS © Crown Copyright and database right 2018*. Tvarové soubory si můžete stáhnout [zde](https://wetransform.box.com/shared/static/4958zkqhmr8sqt10rk5bugktbk63pv3e.zip).

Transformační projekt mapuje data UK Ordnance Survey Open Rivers na typy prvků INSPIRE WatercourseLink a HydroNode, které se nacházejí ve schématu INSPIRE Hydro Network 4.0. Zdrojovými daty jsou soubory tvaru UK Ordnance Survey, které obsahují říční data.

### **Zveřejnění online transformačního projektu**

**Krok 1: Vytvořte transformační projekt**

Nejjednodušší způsob, jak vytvořit transformační projekt na platformě hale»connect, je vyexportovat jej přímo z hale»studio. Hale»studio nabízí uživatelům možnost exportovat transformaci jako projekt hale»connect pomocí průvodce exportem. Průvodce vyžaduje, aby uživatelé zadali přihlašovací údaje hale»connect, které použije pro nahrání transformačního projektu do online účtu přihlášeného uživatele.

<a class="image-news text-center col-xs-12 mt mb"><img src={require("/images/help/cs/Tutorial_Export_wizard.png").default} alt="" title="Export transformačného projektu do hale»connect" class="img-responsive center-block"/>
</a>

Máte-li na svém počítači nainstalované hale»studio, můžete načíst transformační projekt s názvem „OpenRivers.halex“, který je součástí dat tutoriálu. Transformační projekt OpenRivers můžete exportovat přímo do svého účtu hale»connect. Potřebujete-li pomoc, navštivte příslušné téma nápovědy hale»studio User Guide [Sdílet a aktualizovat transformační projekt na hale»connect](http://help.halestudio.org/latest/index.jsp?topic=%2Feu.esdihumboldt.hale.doc.user%2Fhtml%2Ftasks%2Fhaleconnect%2Fshareproject.html), kde naleznete další pokyny.

Transformační projekt můžete rovněž nahrát manuálně.

Transformační projekt je projekt [hale»studio](https://www.wetransform.to/products/halestudio/) využívající formáty \*.halex nebo \*.halez, který byl nahrán do hale»connect. Projekt obsahuje odkazy na zdrojová a cílová schémata, zarovnání, které definuje transformaci mapováním prvků ze zdrojového schématu na prvky v cílovém schématu, dodatečnou konfiguraci pro načtená schémata a možnosti konfigurace pro požadovaný výstup.

Chcete-li vytvořit nový transformační projekt přímo v hale»connect, aniž byste jej nahráli z hale»studio, využijte tento pracovní postup s přihlášením jako Správce témat nebo Superuživatel:

*	Přejděte na „Transformační projekty“ na hlavním panelu nástrojů
* Přejděte na „Vytvořit nový transformační projekt “ v dolní části seznamu transformačních projektů <img src={require("/images/help/en/Tutorial_Transformation_overview.png").default} alt="" title="Vytvoření transformačního projektu" class="img-responsive img-inline-help"/>
* Nahrajte soubor OpenRivers.halez, který se nachází ve složce s výukovými daty. Po nahrání uvidíte soubor .halex.styles.sld, soubor .halex.alignment.xml a soubor .halex. V těchto souborech je uložen transformační projekt. <img src={require("/images/help/en/Tutorial_Upload_project.png").default} alt="" title="Nahrávání transformačního projektu" class="img-responsive img-inline-help"/>
  * Klikněte na &laquo;Vybrat soubor(y)&raquo; a přejděte na soubor(y) projektu.

    Kontrola verzí je ve výchozím nastavení vypnutá. Aktivujte přepínač řízení verzí, abyste zachovali záznamy o přírůstkových změnách v transformačním projektu. Historii změn transformačního projektu si můžete prohlédnout v sekci Historie vašeho transformačního projektu.
    Po dokončení klikněte na &laquo;Pokračovat&raquo;

* Název, autor a popis vašeho transformačního projektu budou po nahrání vyplněny automaticky. Extrahované informace můžete v případě potřeby upravit.
Po dokončení klikněte na &laquo;Pokračovat&raquo;

*	V posledním kroku svůj transformační projekt zkontrolujte a klikněte na &laquo;Vytvořit&raquo; uložit svůj projekt

**Krok 2: Vytvořte zdrojové schéma**

Dalším krokem pracovního postupu online transformačního projektu je vytvoření zdrojového schématu nebo schémat pro vaše zdrojová data. Vaše zdrojová data jsou data, která chcete transformovat do jiného formátu, například INSPIRE GML. Hale»connect nabízí pro vytvoření schématu několik možností. Můžete navštívit následující stránky dokumentace, kde se o vytváření schémat dozvíte více:

  * [Vytvořte schéma na základě přednastaveného schématu](../setup-hc/create-a-schema/2018-01-28-schema-preset.md)
  * [Vytvořte schéma nahráním souboru schématu](../setup-hc/create-a-schema/2018-01-28-schema-create-file.md)
  * [Vytvořte schéma pomocí webové adresy](../setup-hc/create-a-schema/2018-01-28-schema-create-external.md)
  * [Vytvořte nové schéma na základě stávajícího schématu](../setup-hc/create-a-schema/2018-01-28-schema-create-existing.md)

V tomto návodu budeme pracovat s možností vytvoření schématu nahráním souboru schématu. Vaše zdrojová data jsou ve formátu shapefile a možnost vytvořit schéma nahráním souboru schématu nám umožňuje shapefile jednoduše nahrát. Hale»connect shapefile automaticky přečte a schéma pro vás vygeneruje.

Chcete-li vytvořit nové schéma na základě souboru shapefile, postupujte podle tohoto pracovního postupu s přihlášením jako Správce témat nebo Superuživatel:

*	Přejděte na „Schémata“ na hlavním panelu nástrojů
* Přejděte na „Vytvořit nové schéma“ ve spodní části seznamu schémat
* Vyberte způsob vytvoření. V prvním kroku vyberte možnost &laquo;Nahrát soubor se schématem&raquo;. Klikněte na &laquo;Pokračovat&raquo;

* Dále definujte schéma, které chcete použít. Definice schématu je určena metodou vytváření, kterou jste vybrali v předchozím kroku.

    * Klikněte na &laquo;Vybrat soubor(y)&raquo; a přejděte na soubory shapefiles umístěné ve složce s daty výukového programu. Přidejte soubory shapefiles s názvem HydroNode a WatercourseLink. Rovněž můžete nahrát zazipovanou složku, která obsahuje soubory shapefiles. Po dokončení klikněte na &laquo;Pokračovat&raquo;<img src={require("/images/help/cs/Tutorial_Upload_new_schema.png").default} alt="" title="Vytváření nového schématu" class="img-responsive img-inline-help"/>

    * Doplňte informace. Uveďte název, autora, typ a verzi vašeho schématu. Po dokončení klikněte na &laquo;Pokračovat&raquo;

    * Potvrďte vytvoření. V posledním kroku své schéma zkontrolujte. Máte možnost přidat nebo vytvořit pro své schéma téma. Přepínačem povolíte vytvoření motivu. Po dokončení klikněte na tlačítko &laquo;Vytvořit&raquo; pro uložení schématu a vytvoření souvisejícího tématu.

**Krok 3: Vytvořte cílové schéma**

Dalším krokem je vytvoření schématu pro cílová data. Účelem pracovního postupu je vytvořit GML v souladu s INSPIRE, takže musíte vytvořit schéma, které bude používat cílová datová sada vygenerovaná online transformací. Transformační projekt, se kterým pracujete, transformuje data UK OpenRivers na funkce INSPIRE HydroNode a WatercouseLink. Tyto typy funkcí INSPIRE se nacházejí ve schématu INSPIRE Hydro Network 4.0, takže toto schéma vytvoříte na hale»connect. Hale»connect obsahuje velké množství přednastavených schémat, včetně všech schémat INSPIRE.

Chcete-li vytvořit nové schéma pomocí přednastaveného schématu, postupujte podle tohoto pracovního postupu a přihlaste se jako Správce témat nebo Superuživatel:

* Přejděte na „Schémata“ na hlavním panelu nástrojů
* Přejděte na „Vytvořit nové schéma“ ve spodní části seznamu schémat
* Vyberte způsob vytvoření. V prvním kroku zvolte &laquo;Vybrat předvolbu&raquo;. Klikněte na &laquo;Pokračovat&raquo;
* Definujte schéma. Dále definujte schéma, které chcete použít. Definice schématu je určena metodou vytváření.

    * Vyberte předvolbu schématu INSPIRE Hydro Network 4.0 z rozbalovacího seznamu dostupných předvoleb.<img src={require("/images/help/cs/Tutorial_Create_new_schema2.png").default} alt="" title="Vytvoření nového schématu z předvolby" class= "img-responsive img-inline-help"/>

    * Doplňte informace. Uveďte název, autora, typ a verzi vašeho schématu. Ujistěte se, že jste v rozbalovací nabídce vybrali jako typ INSPIRE. Po dokončení klikněte na &laquo;Pokračovat&raquo;

    * Potvrďte vytvoření. V posledním kroku své schéma zkontrolujte. Máte možnost přidat nebo vytvořit pro své schéma téma. Přepínačem povolíte vytvoření motivu. Po dokončení klikněte na &laquo;Vytvořit&raquo; pro uložení schématu a vytvoření souvisejícího tématu.

**Krok 4: Nakonfigurujte zdrojový motiv**

Téma je opětovně použitelný konfigurační objekt, který se používá k definování společných nastavení pro metadata datové sady, publikování služeb a transformaci. Téma má několik prvků:

* Schéma definované prostřednictvím spojení s množstvím typů funkcí
* Zobrazení vlastností pro pole a typy tohoto schématu, jako jsou aliasy a styly
* Konfigurace metadat, která definuje pole metadat, která je třeba uvést, jakož i přednastavené hodnoty a pravidla automatického doplňování pro vysoký stupeň automatizace
* Spojení s transformačním projektem, který umožňuje konverzi formátu a transformaci schémat
* Konfigurace pro automatizovaný pracovní tok, který lze nastavit tak, aby prováděl publikování služeb a transformaci dat při určitých událostech, jako je aktualizace datové sady

*DŮLEŽITÉ: Pro vytvoření a konfiguraci tématu musíte mít oprávnění Správce témat nebo Superuživatele.*

V tomto kroku nakonfigurujeme zdrojové téma pro provedení online transformace a aktualizujeme publikované webové služby, dojde-li ke změně zdrojových dat.

Nejprve přejděte na téma, které jste vytvořili během vytváření schématu v kroku 2.

* Přejděte na „Témata“ na hlavním panelu nástrojů
* Do vyhledávacího panelu zadejte název zdrojového motivu. Když vytvoříte téma během vytváření schématu, téma bude mít automaticky stejný název jako vaše schéma. Můžete také použít rozbalovací nabídku vedle položky „Seřadit pořadí“. Chcete-li zobrazit své nejnovější motivy, vyberte možnost „Naposledy upraveno“.
* Vyberte si téma ze seznamu zdrojů

První část, na kterou se podíváme, je část Tříd objektů.

* Klikněte na sekci s názvem Třídy objektů <img src={require("/images/help/cs/Tutorial_Theme_details.png").default} alt="" title="Třídy objektů" class="img-responsive img-inline-help"/>

Sekce Třídy objektů zobrazuje všechny třídy objektů ve schématu přiřazeném k tématu. Ověřte, zda vidíte oba typy funkcí WatercouseLink i HydroNode. Můžete kliknout na třídy objektů a přidat aliasy pro názvy polí.

Dále do zdrojového tématu v sekci Transformace přidáme konfiguraci transformace.

Konfigurace transformace přiřazuje transformační projekt a cílové téma k vašim zdrojovým datům. Konfigurace sděluje hale»connect, co má dělat, když nahráváte nová nebo aktualizovaná data. V tomto návodu chceme, aby hale»connect spustil online transformaci a publikoval transformované GML data vyhovující INSPIRE, a to při každé aktualizaci zdrojových dat. Proveďme to nyní.

* Klikněte na sekci s názvem Transformace <img src={require("/images/help/cs/Tutorial_transformation_config.png").default} alt="" title="Konfigurace transformace" class="img-responsive img-inline-help"/>
* Klikněte na „Přidat novou konfiguraci transformace“
* Klikněte na „+ Vybrat projekt“ a přejděte na transformační projekt, který jste nahráli do hale»connect. Pokud jste název neupravili, zadejte do vyhledávacího panelu OpenRivers. Kliknutím na tlačítko » přidejte projekt transformace
* Klikněte na „+ Vybrat cílové téma“ a přejděte na cílové téma, které jste vytvořili během vytváření schématu v kroku 3. Cílové téma poskytuje hale»connect informace potřebné ke zveřejnění transformovaných dat.
* Klikněte na „Přidat konfiguraci“

Nyní jsme do zdrojového tématu přidali konfiguraci transformace a můžeme rovněž nastavit pravidla automatizace, která určují, kdy hale»connect spustí online transformaci, kterou jsme právě přidali. Automatizovaný pracovní postup provádí publikování služeb a transformaci dat jako proces na pozadí, který nevyžaduje žádnou interakci uživatele. Automatizovaný pracovní postup reaguje na události včetně aktualizací a transformací dat a konfigurace. Dojde-li k událostem, získají se externí data nebo metadata, vytvoří se a zveřejní služby a provedou se transformační projekty. Pravidla automatizace můžeme přidat v sekci Automatizace zdrojového tématu.

* Klikněte na sekci s názvem Automatizace <img src={require("/images/help/cs/Tutorial_transformation_automation.png").default} alt="" title="Automatická transformace" class="img-responsive img-inline-help"/>
* Klikněte na rozbalovací nabídku a vyberte, kdy se má realizovat provedení – ručně, okamžitě nebo později.

Pokud jste vybrali «Později», pokračujte v nastavení, kdy přesně se má transformace a publikování provést:

  * Denně: Vyberte určitou hodinu, kdy se má transformace a zveřejnění provést.
  * Týdně: Vyberte den v týdnu a určitou hodinu, kdy se má transformace a zveřejnění provést.
  * Měsíčně: Vyberte den v měsíci a určitou hodinu, kdy se má transformace a zveřejnění provést.

**Krok 5: Nakonfigurujte cílové téma**

V tomto kroku nakonfigurujeme poskytování služeb zobrazení a stahování v souladu s INSPIRE. Cílové téma definuje, jak bude váš transformovaný INSPIRE GML publikován. Témata vám umožňují vybrat si typy nabízených webových služeb (WFS, Předdefinovaná datová sada, WMS), prostorové referenční systémy služeb a mnohé další. Pojďme se nyní podívat na některé z možností.

Nejprve přejděte na téma, které jste vytvořili během vytváření schématu v kroku 3.

* Přejděte na „Témata“ na hlavním panelu nástrojů
* Do vyhledávacího panelu zadejte název cílového tématu. Když vytvoříte téma během vytváření schématu, téma bude mít automaticky stejný název jako vaše schéma. Můžete také použít rozbalovací nabídku vedle položky „Seřadit pořadí“. Chcete-li zobrazit svá nejnovější témata, vyberte možnost „Naposledy upraveno“.
* Vyberte si téma ze seznamu zdrojů

Dále nakonfigurujeme nastavení služby Zobrazit.

* Klikněte na sekci s názvem Zobrazit služby <img src={require("/images/help/cs/Tutorial_view_services.png").default} alt="" title="Konfigurace služeb zobrazení" class="img-responsive img-inline-help"/>
* Kliknutím na „+“ pod přednastaveným prostorovým referenčním systémem přidáte další prostorový referenční systém
    * Přidejte prostorový referenční systém kompatibilní s INSPIRE EPSG:4258. Můžete upravit přednastavený prostorový referenční systém a přidat libovolný počet dalších prostorových referenčních systémů. Vaše zobrazovací služby budou dostupné v prostorových referenčních systémech, které konfigurujete v tomto nastavení.
* Klikněte na rozbalovací nabídku vedle položky GetFeatureInfo. Aktivace GetFeatureInfo umožňuje dotazování vašeho WMS.

Nyní se podívejme na nastavení Stahovací služby.

* Klikněte na sekci s názvem Stahovací služby <img src={require("/images/help/cs/Tutorial_download_services.png").default} alt="" title="Konfigurace služeb stahování" class="img-responsive img-inline-help"/>
* Kliknutím na „+“ v části Předdefinovaná datová sada přidáte další typ služby
    * Z rozbalovací nabídky vyberte možnost WFS. Nyní budou Stahovací služby dostupné jako ATOM feed (Predefined dataset) i jako WFS.
* Kliknutím na „+“ pod Shapefile 1.0 přidáte další formát dat
    * Z rozbalovací nabídky vyberte GML. Předdefinovanou datovou sadu nyní nabídne možnosti stahování souborů shapefile i GML. Stažené soubory budou dostupné v každém z prostorových referenčních systémů, které nakonfigurujete v nastaveních Stahovací služby.

Nakonec nakonfigurujeme cílové téma pro automatické opětovné publikování webových služeb INSPIRE, když se transformovaný GML aktualizuje nebo změní.

* Klikněte na sekci s názvem Automatizace
* Klikněte na rozbalovací nabídku a vyberte možnost „Ihned“

Toto nastavení zajišťuje, že vaše publikované webové služby budou okamžitě odrážet veškeré změny vašich transformovaných dat, které by mohly nastat v důsledku opětovného spuštění online transformačního projektu. 

**Krok 6: Vytvořte zdrojovou datovou sadu**

V posledním kroku vytvoříme zdrojovou datovou sadu a spustíme online transformační pracovní postup, který jsme nakonfigurovali v tomto návodu. S nakonfigurovanými zdrojovými i cílovými tématy můžeme nahrát data, spustit online transformaci a publikovat služby zobrazení a stahování INSPIRE jen pomocí několika kliknutí.

* Přejděte na &laquo;Data&raquo; na hlavním panelu nástrojů
* Přejděte na &laquo;Vytvořit novou datovou sadu&raquo; ve spodní části seznamu datové sady
* Vyberte své zdrojové téma k propojení s vaší datovou sadou.
* Klikněte na &laquo;Vybrat soubor(y)&raquo; a přejděte na výuková data s názvem [OpenRivers.zip](https://wetransform.box.com/shared/static/4958zkqhmr8sqt10rk5bugktbk63pv3e.zip). Pracujete-li s tvarovými soubory, doporučujeme vám, abyste je nahráli v souboru .zip.
* Pojmenujte svou datovou sadu. Tento název by vám měl umožnit rychlou a jasnou identifikaci datové sady v systému.
* Uveďte metadata pro svou datovou sadu. Existuje několik způsobů, jak přidat metadata pro datovou sadu. Více informací naleznete v naší sekci nápovědy.
* Krok «Nastavit proměnné projektu» se zobrazí, obsahuje-li vaše téma konfiguraci transformace a do svého transformačního projektu jste v hale»studio přidali proměnné projektu. hale»connect nabízí uživatelům v tomto volitelném kroku možnost upravit proměnnou transformačního projektu.  

*	V posledním kroku si můžete prohlédnout kroky procesu publikování a transformace nakonfigurované pro téma. Uvidíte pět přepínačů pro publikování služeb stahování a zobrazování pro vaši zdrojovou datovou sadu, pro transformaci nové datové sady a pro publikování služeb pro transformovanou datovou sadu. Aktivujte všechny přepínače a klikněte na &laquo;Vytvořit&raquo;

Hale»connect spustí pracovní tok online transformace a automaticky vás nasměruje na vaši nově publikovanou zdrojovou datovou sadu. Je důležité si uvědomit, že vaše zdrojová data byla rovněž transformována do INSPIRE GML a zveřejněna ve stejnou dobu. Chcete-li zobrazit transformovanou datovou sadu:

* Klikněte na sekci s názvem Transformovaná data
* Klikněte na transformační projekt uvedený v panelu
* Kliknutím na odkaz v části „Cílová datová sada:“ zobrazíte své INSPIRE zobrazení a služby stahování pro transformovaná data GML <img src={require("/images/help/cs/Tutorial_transformed_data.png").default} alt="" title="Transformovaná data" class="img-responsive img-inline-help"/>
* Klikněte na sekci Zobrazit služby v transformované datové sadě
* Kliknutím na „Zobrazení mapy“ si prohlédnete svou novou transformovanou datovou sadu

V tomto návodu jsme nakonfigurovali online transformační pracovní postup, který může opakovaně používat několik uživatelů s jakoukoli rolí tak často, jak je potřeba. Je-li postup nakonfigurován, lze jej snadno upravovat nebo aktualizovat, aby odrážel vaše měnící se potřeby. Můžete aktualizovat svůj stávající projekt hale»connect transformace přímo z hale»studia a upravit svá stávající zdrojová a cílová témata, požadujete-li změny. Online transformační pracovní toky jsou ideální pro uživatele se zdrojovými daty, která se často aktualizují, protože eliminují potřebu stále znovu provádět manuální transformace a publikace. Jakmile se vaše zdrojová data změní, pracovní tok online transformace automaticky znovu spustí transformaci a znovu zveřejní vaše služby INSPIRE s cílem poskytnout uživatelům nejaktuálnější verzi vašich dat.
