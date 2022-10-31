---
title: "Automatizované Publikování a Transformace"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-themetransformation-automation"
layout: help-detail
language: cs

---

Automatizovaný pracovní postup provádí publikování služeb a transformaci dat jako proces na pozadí, který nevyžaduje žádnou interakci uživatele. Automatizovaný pracovní postup reaguje na události včetně aktualizací a transformací služeb. Nastanou-li události, služby se vytvoří a zveřejní a realizují se transformační projekty. Typický automatizovaný pracovní postup vypadá takto:

1. Vytvoření datové sady mimo INSPIRE
1. Zveřejňování služeb pro datovou sadu mimo INSPIRE
1. Transformace dat do cílového modelu INSPIRE
1. Zveřejnění služeb pro nově vytvořenou datovou sadu INSPIRE

Přihlásíte-li se jako správce témat nebo superuživatel organizace, proveďte za účelem nastavení automatického pracovního postupu tyto kroky:

1. Přejděte na &laquo;Témata&raquo;
1. Ze seznamu témat vyberte téma, které chcete automatizovat
1. Přejděte na položku &laquo;Automatizace&raquo;
1. Nastavte pravidla provádění pro aktualizace a transformace služeb. Rozhodněte se, kdy se má provedení realizovat – ručně, okamžitě nebo později.
1.	Pokud jste vybrali možnost &laquo;Později&raquo;, pokračujte v nastavení, kdy přesně se má transformace a publikování provést:
    * **Denně:** Vyberte určitou hodinu, kdy se má transformace a zveřejnění provést.
    * **Týdně:** Vyberte den v týdnu a určitou hodinu, kdy se má transformace a zveřejnění provést.
    * **Měsíčně:** Vyberte den v měsíci a určitou hodinu, kdy se má transformace a zveřejnění provést.
    <br/>
    <img src={require("/images/help/cs/automated_publishing.png").default} alt="" title="Automatické publikování" class="img-responsive img-inline-help"/>
