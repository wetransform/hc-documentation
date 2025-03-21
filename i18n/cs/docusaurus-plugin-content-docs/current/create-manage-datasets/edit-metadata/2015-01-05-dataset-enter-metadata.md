---
title: "Úprava metadat pro soubor prostorových dat"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkfloweditmetadata"
layout: help-detail
language: cs
---

Úprava metadat může být časově náročný a někdy únavný proces. Z tohoto důvodu systém umožňuje automatizaci přibližně 95 % procesu. Zbývající pole je třeba vyplnit ručně nebo je upravit. Při manuální úpravě metadat mějte na paměti tato doporučení:

* Váš vstup musí být ve správném formátu. Některá pole povolí jakýkoli druh textu, zatímco jiná očekávají čísla, webové odkazy, e-mailové adresy, objekty JSON nebo objekty WKT (Well-Known-Text). Kulaté symboly vlevo od každého vstupu označují, jaký typ vstupu systém očekává. Umístíte-li kurzor myši na tyto symboly, získáte další informace.
* Některá pole mohou být nastavena vícekrát. Pro nastavení většího počtu hodnot, například v části &laquo;Keywords&raquo; kliknite na tlačítko &laquo;+&raquo;, tlačítko pod vstupním polem. Chcete-li pole znovu odstranit, klikněte na symbol odstranění hned vedle pole.
* Když upravujete metadata pro jakýkoli existující soubor dat, systém každou změnu uloží, jakmile stisknete enter nebo přejdete-li do jiného pole. Systém to indikuje zobrazením zeleného okraje a zaškrtnutím na upraveném vstupu.

Chcete-li upravit metadata, postupujte takto:

1. Přejděte na položku &laquo;Data&raquo; na hlavním panelu nástrojů.
1. Vyberte soubor dat ze seznamu zdrojů, pro který chcete upravit metadata
1. Přejděte na položku &laquo;Metadata&raquo;
1. Zadejte povinná a volitelná metadata pro vaši datovou sadu nebo služby. Kliknutím na název nebo šipku otevřete jednu z kategorií metadat. <img src={require("/images/help/cs/dataset_edit_metadata.png").default} alt="" title="Úprava metadat pro soubor prostorových dat" class="img-responsive img -inline-help" />
1. Zadejte hodnotu pro každé pole označené červeným symbolem. Můžete také upravit stávající hodnoty.
    * Po zadání požadovaných metadat se červené symboly změní na zelené a v hlavičce kategorie se aktualizuje počet chybějících požadovaných prvků metadat.
1. Opět zavřete kategorii a pokračujte další kategorií
1. Když se hodnoty, na které odkazují pravidla automatického doplňování, změnily nebo aktualizovaly, tlačítko «Vyplnit automaticky» hodnoty v metadatech aktualizuje. Například: Aktualizujete adresu své organizace v nastavení profilu organizace. V pravidle automatického doplňování jste odkázali na adresu organizace a chcete, aby se aktualizovaná adresa objevila ve vašich metadatech. Tlačítko «Vyplnit automaticky» lze použít k aktualizaci polí metadat.

Pro zobrazení aktualizovaných hodnot v metadatech je třeba znovu publikovat služby.
