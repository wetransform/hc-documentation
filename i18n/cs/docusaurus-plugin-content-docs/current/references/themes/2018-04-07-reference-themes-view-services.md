---
title: "Zobrazovací služby"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-themes"
layout: help-detail
language: cs

---

Sekce Přehled služeb zobrazuje několik možností konfigurace pro vaše publikované zobrazovací služby.

Můžete si vybrat typ služby svých zobrazovacích služeb. V současnosti jsou podporovány pouze typy zobrazovacích služeb WMS (1.1.1) a WMS (1.3.0). Upozorňujeme, že implicitní vyrovnávací paměť dlaždic je generována vždy, ale není přístupná zvenčí. Chcete-li odstranit typ služby, klikněte na červený znak “-” vedle služby.

Můžete si vybrat prostorové referenční systémy, které jsou podporovány vašimi publikovanými službami. Kliknutím na tlačítko „+“ přidáte další prostorové referenční systémy. Uživatelé vaší služby si mohou vyžádat zobrazení vaší datové sady ve vybraných prostorových referenčních systémech. Chcete-li odstranit prostorový referenční systém, klikněte na červený znak “-” vedle služby.

**Poznámka: Chcete-li do seznamu prostorových referenčních systémů přidat další možnosti, požádejte správce, aby je nakonfiguroval za vás.**

GetFeatureInfo pro váš WMS můžete aktivovat a deaktivovat pomocí rozbalovací nabídky. GetFeatureInfo je volitelná operace, která uživatelům vašeho WMS umožňuje dotazovat se na vrstvy. GetFeatureInfo podporují pouze vrstvy s atributem queryable="1" (true).

Ve výchozím nastavení vygeneruje hale»connect styl pro vaše data. V současnosti služby obsahují všechny vrstvy, pro které je definován styl – bez ohledu na to, zda datová sada obsahuje relevantní objekty, či nikoli. Na platformě hale»connect jsou výchozí styly definovány pro většinu vrstev INSPIRE. Tyto vrstvy se tedy vytvářejí, i když jsou prázdné. Chcete-li specificky kontrolovat vzhled svých dat a vyhnout se vytváření prázdných vrstev, nahrajte soubor Styled Layer Descriptor (SLD). Chcete-li jej použít pro své téma, klikněte na “Vybrat soubor(y)” a vyberte soubor XML SLD. Upozorňujeme, že v současnosti není možné vyměnit použitou SLD za publikaci série, pokud již byla jednou publikována.

Aktivujte přepínač *Povolit další vrstvy z rastrových zdrojů*, abyste umožnili nahrávání rastrových dat při vytváření datové sady. Přepínač umožňuje uživatelům nahrávat a publikovat rastrová data PNG nebo GeoTIFF kromě vektorových dat při vytváření datové sady. Rastrová data budou zveřejněna v samostatné rastrové vrstvě.
