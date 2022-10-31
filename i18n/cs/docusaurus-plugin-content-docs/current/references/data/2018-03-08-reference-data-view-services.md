---
title: "Zobrazovací služby"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-data"
layout: help-detail
language: cs

---

Sekce Zobrazovací služby zobrazuje provozní stav vašich zveřejněných zobrazovacích služeb. Své služby můžete aktivovat a deaktivovat pomocí přepínače v levém horním rohu. Po aktivaci ručně spusťte proces publikování pomocí &laquo;Služby publikování&raquo; tlačítko v pravém horním rohu.

Panel Zobrazovací služby nabízí seznam publikovaných zobrazovacích služeb. Můžete přímo přistupovat k dokumentům funkcí pro WMS 1.1.1 a 1.3.0. Chcete-li zkopírovat libovolnou URL adresu do schránky, klikněte na ikonu <a class="btn btn-default" title="Kopírovat URL adresu"><span class="glyphicon glyphicon-copy"></span></a> vpravo od URL adresy. Zobrazení mapy nabízí jednoduchého webového mapového klienta, ve kterém si můžete zobrazit ukázku publikované služby zobrazení. Pro více informací o přístupu k nástroji Feature Explorer ze zobrazení HTML klienta GetFeatureInfo navštivte [Pomocí průzkumníka funkcí](../../create-manage-datasets/feature-explorer/2015-01-02-dataset-feature-explorer.md)

Panel Metadata uvádí seznam zveřejněných metadat. Kliknutím na „Metadata (Datová sada)“ nebo „Metadata (Služba zobrazení)“ je otevřete v prohlížeči a přímo zobrazíte data XML. Adresu URL služby zkopírujete kliknutím na ikonu <a class="btn btn-default" title="Kopírovat URL adresu"><span class="glyphicon glyphicon-copy"></span></a>.

Panel zpráv o testech uvádí seznam souborů PDF, které obsahují výsledky série testů provedených na publikovaných metadatech a službách. Kliknutím na zprávu o testu otevřete zprávu v prohlížeči a přímo zobrazíte výsledky testu.

Testy metadat se provádějí na metadatech datových sad a stahují a prohlížejí služby metadat. Testy kontrolují soulad s normami ISO, GDI-DE a INSPIRE v závislosti na jazyce tématu. Anglická témata jsou testována pro ověření schématu dle ISO. Německá témata se testují pomocí třídy shody dle „Konventionen der GDI-DE für INSPIRE-relevante Metadaten“.

Testy provedené na metadatech:

<table>
    <th colspan="2">Test</th>
    <th colspan="2">Conformity Level</th>
    <th colspan="2">Resource</th>
    <th>Comments</th>
  <tr>
    <td># internal identifier</td>
    <td>Title</td>
    <td>GDI-DE</td>
    <td>INSPIRE</td>
    <td>Dataset-Metadata</td>
    <td>Service-Metadata</td>
    <td></td>
  </tr>
  <tr>
    <td>md_gdi</td>
    <td>Metadaten | Metadata: ISO and GDI-DE</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td>X</td>
    <td>not executed for restricted services</td>
  </tr>
  <tr>
    <td>md_inspire</td>
    <td>Metadaten | Metadata: INSPIRE</td>
    <td></td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
  </tr>
</table>

<br/>

Panel Nastavení služby obsahuje přepínač pro obrácení souřadnicových os vaší datové sady. Pokud se vaše datová sada zobrazuje v obrácených souřadnicích, přepnutím přepínače zobrazení opravte.

Přepínač *Rozdělit soubory ke zveřejnění* umožňuje uživatelům nakonfigurovat prahovou hodnotu používanou k řízení maximálního počtu funkcí v každém souboru \*.gml nebo \*.gpkg. Rozdělení souborů lze použít k umožnění publikování velkých souborů. Maximální počet funkcí na soubor je stanoven na 10 000. Funkce rozdělení souborů při publikaci se nepoužije, když je pro většinu typů souborů povolen informační kanál Atom v sekci Služby stahování tématu. Funkci rozdělení souborů lze použít pouze u datové sady \*.gpkg s povolenými informačními kanály Atom, protože pro informační kanál Atom se používá původní soubor \*.gpkg, který nebyl rozdělen.

Přepínače optimalizace vykreslování jsou ve výchozím nastavení aktivovány nebo deaktivovány v závislosti na nastavení systému. Zda je lze použít, může záviset na struktuře dat a nakonfigurovaných pravidlech stylu. Přepínač *Povolit zobecnění geometrie* zobrazí zobecněné prvky při menších úrovních přiblížení. Jestliže zobecnění příliš zjednodušuje funkce, lze přepínač deaktivovat, může to však ovlivnit výkon zobrazovací služby. Přepínač *Limit funkcí pro interně vykreslené dlaždice mapy* omezuje počet objektů zobrazených v každé dlaždici. Jestliže se vynechané funkce stanou problémem ve vizualizaci, lze přepínač deaktivovat, může to však ovlivnit výkon zobrazovací služby.

Panel Servisní deník zobrazuje protokol transakcí, který popisuje procesy spuštěné na vaší datové sadě a všechny chyby, které se mohou vyskytnout při publikování. Servisní deník generuje vydavatel služby.
