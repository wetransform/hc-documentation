---
title: "Používání nástroje Feature Explorer Tool"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkflowfeatureExplorer"
layout: help-detail
language: cs
---

The Feature Explorer usnadňuje navigaci ve vnořené struktuře komplexních GML a
umožňuje zkoumání komplexních atributů GML. Atributy GML, které obsahují odkazy na související funkce, seznamy kódů nebo soubory příloh, lze zobrazit prostřednictvím nástroje.

K nástroji Feature Explorer lze přistupovat pomocí tlačítka «zobrazit podrobnosti» v odpovědi HTML GetFeatureInfo zobrazovacích služeb WMS na serveru hale»connect.
<img src={require("/images/help/cs/Feature Explorer.png").default} alt="" title="Přístup k nástroji Feature Explorer pomocí tlačítka zobrazit podrobnosti" class="img-responsive img-inline-help"/>

 Chcete-li nástroj povolit, nejprve aktivujte GetFeatureInfo ve svém tématu.
  * Přejděte do nabídky «Témata» a ze seznamu vyberte téma, se kterým pracujete
  *	Vyberte sekci „Zobrazit služby“ tématu
  *	V rozbalovací nabídce vedle položky GetFeatureInfo vyberte možnost „Aktivováno“.

GetFeatureInfo je volitelná operace, která uživatelům vašich zobrazovacích služeb umožňuje dotazovat se na vaše WMS vrstvy. Klient GetFeatureInfo je dostupný pouze pro vrstvy WMS, které byly nakonfigurovány pro podporu operace GetFeatureInfo.

Dalším krokem je vytvoření datové sady a zveřejnění zobrazovacích služeb.

Chcete-li získat přístup k nástroji Feature Explorer, klikněte na odkaz Zobrazení mapy v sekci Zobrazit služby datové sady:
  * Přejděte do nabídky „Data“ a vyberte soubor dat, který chcete prozkoumat
  * Vyberte sekci „Zobrazit služby“ datové sady
  * Kliknutím na zobrazení mapy otevřete ukázkovou službu WMS
  * V demo WMS službě klikněte na objekt v zobrazení mapy
  * Klikněte na tlačítko «zobrazit podrobnosti» v HTML zobrazení klienta GetFeatureInfo

Feature Explorer se otevře na nové kartě, která zobrazuje atributy spojené s vybranou funkcí. Kliknutím na libovolný odkaz můžete dále prozkoumat atributy a související funkce. Kliknutím na tlačítko «+» vpravo od atributu rozbalíte další úrovně vnoření atributů.
