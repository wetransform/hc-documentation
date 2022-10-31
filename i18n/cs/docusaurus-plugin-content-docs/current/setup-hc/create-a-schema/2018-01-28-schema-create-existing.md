---
title: "Vytvoření nového schématu na základě stávajícího schématu"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-schema-create"
layout: help-detail
language: cs

---

*schéma* popisuje strukturu datové sady prostřednictvím definice typů a jejich vlastností. Schémata lze importovat z více typů zdrojů dat, jako jsou databáze, soubory schémat XML nebo dokonce soubor Shapefile. Mohou být také vytvořeny přímo v hale connect pomocí zabudovaných modelovacích nástrojů.

Chcete-li vytvořit nové schéma pomocí nástrojů na modelování, postupujte podle tohoto pracovního postupu s přihlášením jako Správce témat nebo Superuživatel:

1.	Přejděte na „Schémata“ na hlavním panelu nástrojů
2.  Přejděte na „Vytvořit nové schéma“ ve spodní části seznamu schémat
3.  Vyberte způsob vytvoření. V prvním kroku vyberte možnost &laquo;Vytvořit na základě stávajícího schématu&raquo;. Klikněte na &laquo;Pokračovat&raquo;
4.  Definujte schéma. Dále definujte schéma, které chcete použít. Definice schématu je určena metodou vytváření.

    * Doplňte informace. Zadejte název, jmenný prostor, zkratku, autora, verzi a popis vašeho schématu. Po dokončení klikněte na &laquo;Pokračovat&raquo;

    * Přidat typ. Zadejte název a popis typu funkce. Klikněte na &laquo;Pokračovat&raquo;

    * Vytvořte vztah. Volitelně se můžete rozhodnout, zda by váš nový typ funkce měl souviset se stávajícím typem funkce. Chcete-li přiřadit nový typ funkce ke stávajícímu, klikněte na čárkované pole odpovídající typu přiřazení, který chcete použít. Na výběr jsou čtyři typy vzorů rozšíření:

        a.	[Aggregation](http://inspire-extensions.wetransform.to/patterns/aggregation.html)

        b.	[Inheritance](http://inspire-extensions.wetransform.to/patterns/inheritance.html)

        c.	[Association](http://inspire-extensions.wetransform.to/patterns/association.html)

        d.	[Composition](http://inspire-extensions.wetransform.to/patterns/composition.html)

        Poté musíte vybrat skutečný typ, ke kterému chcete přiřadit – nejprve vyberte schéma a poté vyberte konkrétní typ prvku.

        Pokud si nejste jistí, který vzor rozšíření typu použít, klikněte na &laquo;Potřebuji návrh&raquo;. Kliknutím na tlačítko  » vyberte schéma, které obsahuje typ prvku související s vaším novým typem prvku. Poté klikněte na tlačítko » a vyberte související typ funkce.

        Klikněte na šipku vedle každého dotazu a zadejte odpověď. Nabízí se návrh založený na vašich odpovědích. Pokud existuje více možností, zobrazí se pod příslušnými vzory rozšíření typu zelený pruh. Nejucelenější stavový řádek představuje nejvhodnější volbu. Vyberte jej kliknutím na vzor rozšíření typu.

        Po dokončení klikněte na &laquo;Pokračovat&raquo;.

    * Definujte vlastnosti. Klikněte na tlačítko &laquo;+&raquo; pro přidání další vlastnosti k typu objektu. Klikněte na Název a zadejte jej. Chcete-li upravit typy vlastností a omezení, klikněte na Konfigurovat vlastnost. Chcete-li uvést relevantní informace, použijte pole popisu. Po dokončení klikněte na &laquo;Pokračovat&raquo;

    * Potvrďte vytvoření. Pro uložení schématu klikněte na &laquo;Vytvořit&raquo;
