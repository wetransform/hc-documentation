---
title: "Publikování služby pro soubor prostorových dat"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkflowpublishservices"
layout: help-detail
language: cs
---

Má-li téma propojené s vaší datovou sadou platnou konfiguraci služby, můžete publikovat služby zobrazení a stahování. Publikační služby se realizují buď spuštěním procesu automatizovaného publikování na konci vytváření souboru dat, nebo později pomocí manuálního příkazu. Když publikujete služby, systém vždy vytvoří všechny typy nakonfigurovaných služeb najednou; jinými slovy, pokud vaše konfigurace tématu obsahuje službu zobrazení a stahování, nelze publikovat pouze službu stahování. Důvodem je to, že metadata každé ze služeb obsahují odkazy na jiné služby.

Pokud jste přihlášeni jako správce dat nebo správce témat, pro manuální zveřejnění služeb postupujte podle těchto kroků:

1. Přejděte na položku &laquo;Data&raquo; na hlavním panelu nástrojů.
2. Vyberte soubor dat ze seznamu zdrojů, pro který chcete publikovat služby
3. Přejděte na položku &laquo;Zobrazit služby&raquo; nebo &laquo;Převzít služby&raquo;
4. Aktivujte přepínač
5.  Klikněte na položku &laquo;Publikovat služby&raquo; vytvořit a spustit službu a také spustit všechny nakonfigurované testovací soupravy
    *	Tento proces běží na pozadí a může chvíli trvat. Zobrazí se indikátor průběhu zobrazující stav vytváření služby, testování služby a publikování služby. Po dokončení procesu publikování rovněž obdržíte e-mail s informacemi o úspěšnosti nebo neúspěšnosti publikování služby. Platforma považuje publikace, které trvají déle než jednu hodinu, za neúspěšné a zašle vám e-mail, i když je publikace stále spuštěná.<img src={require("/images/help/cs/publish_services.png").default} alt="" title="Publikování služeb zobrazení" class="img-responsive img-inline-help"/>
6.	Po dokončení každého procesu budou k dispozici další informace:
    *	Odkazy na služby a metadata souboru dat
    *	V případě služeb zobrazení získáte i odkaz na ukázku
    *	Testovací zprávy
    * Nastavení služby
    * Servisní deník <img src={require("/images/help/cs/publish_services_testing.png").default} alt="" title="Zverejňování služeb zobrazení" class="img-responsive img-inline-help"/>
7.	Chcete-li zrušit zveřejnění služby, deaktivujte přepínač a klikněte na položku &laquo;Odstranit služby&raquo;.
