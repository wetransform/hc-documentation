---
title: "Stahovací služby"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-data"
layout: help-detail
language: cs

---

Sekce Stahovací služby zobrazuje provozní stav vašich publikovaných stahovacích služeb. Své služby můžete aktivovat a deaktivovat pomocí přepínače v levém horním rohu. Po aktivaci ručně spusťte proces publikování pomocí &laquo;Služby publikování&raquo;, tlačítko v pravém horním rohu.

Panel Stahovací služby nabízí seznam publikovaných stahovacích služeb. Kliknutím na název služby otevřete službu v prohlížeči a přímo zobrazíte data. URL adresu služby zkopírujete kliknutím na ikonu <a class="btn btn-default" title="Kopírovat URL adresu"><span class="glyphicon glyphicon-copy"></span></a>. URL adresa (Download-Service/ATOM) uvádí URL adresu informačního kanálu ATOM. Tuto URL adresu lze nejlépe sledovat pomocí prohlížeče Firefox nebo klienta informačního kanálu ATOM. IE11, Chrome a Edge nemají nativní klienty informačních kanálů ATOM, i když jsou doplňky dostupné.

Panel Metadata uvádí seznam zveřejněných metadat. Chcete-li zkopírovat libovolnou URL adresu do schránky, klikněte na
<a class="btn btn-default" title="Kopírovat URL adresu"><span class="glyphicon glyphicon-copy"></span></a>
 ikonu napravo od URL adresy.

Panel zpráv o testech uvádí seznam souborů PDF, které obsahují výsledky série testů provedených na publikovaných metadatech a službách. Kliknutím na zprávu o testu otevřete zprávu v prohlížeči a přímo zobrazíte výsledky testu.

Počet a typ testů provedených na vašich metadatech a službách odráží vaše požadavky na soulad.

Testy metadat se provádějí na datových sadách metadat a stahují a prohlížejí služby metadat. Testy kontrolují soulad s normami ISO, GDI-DE a INSPIRE.

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

Panel Servisní deník zobrazuje protokol transakcí, který popisuje procesy spuštěné na vaší datové sadě a všechny chyby, které se mohou vyskytnout při publikování. Servisní deník generuje vydavatel služby.
