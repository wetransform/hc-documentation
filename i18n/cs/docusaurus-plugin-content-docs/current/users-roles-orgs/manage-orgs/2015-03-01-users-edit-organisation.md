---
title: "Úprava a odstranění profilu organizace"
categories:
- "help-page-category-users"
- "help-page-subcategory-users-orgs"
layout: help-detail
language: cs

---

Administrátor a superuživatelé organizace mohou upravovat stránku profilu organizace. Přístup na stránku profilu organizace:

1.  Přejděte do nastavení (symbol ozubeného kolečka)
2.  Přejděte do části &laquo;Organizace&raquo;
3.  Ze seznamu vyberte svou organizaci

Můžete rovněž kliknout na název organizace ve svém uživatelském profilu.

Na stránce profilu organizace je k dispozici několik možností konfigurace.

- **Profilový obrázek:** Kliknutím na profilový obrázek nahrajete logo vaší organizace nebo vlastní avatar. Akceptované formáty souborů zahrnují JPEG a PNG.
- **Název právnické osoby:** Toto nepovinné pole umožňuje uživatelům zadat název právnické osoby.
- **Popis:** Toto volitelné pole umožňuje uživatelům zadat popis své organizace.
- **Přidat kontaktní informace:** Tato standardní pole kontaktních informací pomáhají ostatním uživatelům vás kontaktovat a lze je využít pro pravidla automatického doplňování metadat.
-	**Konfigurace mapy:** Tato část umožňuje uživatelům zadat adresu URL k podkladové mapě WMS a volitelně uvést autorské právo zobrazené v zobrazení mapy (viz obrázek níže). Pole autorského práva podporuje odkazy HTML, např. `&kopírovat; GeoBasis-DE / <a href="https://www.bkg.bund.de/">BKG</a> 2025 CC BY 4.0`. <br/>Jako superuživatel nebo správce organizace můžete nakonfigurovat výchozí podkladovou mapu pro zobrazení mapy v části zobrazení služeb vašich datových sad. Když členové vaší organizace zobrazí publikované služby na platformě, data se zobrazí pomocí vašeho nakonfigurovaného WMS jako základní mapy. Uživatelé mají navíc možnost nahrát svou vlastní podkladovou mapu WMS prostřednictvím rozhraní zobrazení mapy.<img src={require("/images/help/en/copyright_attribution.png").default} alt="" title="Přiřazení autorských práv k podkladové mapě" className="img-responsive img-inline-help"/>
Při používání funkcí rozhraní OGC API můžete definovat výchozí základní mapu a související výchozí základní vrstvy pro prostorový rozsah ve službách zobrazení funkcí rozhraní OGC API. V současnosti je jako výchozí podkladová mapa podporována pouze WMS verze 1.3.0. Můžete určit jednu nebo více výchozích základních vrstev tak, že je zadáte jako seznam oddělený čárkami do pole „Výchozí základní vrstva“. Všimněte si, že pro funkce OGC API, pokud chcete zadat vlastní výchozí základní mapu, musíte také zadat *alespoň jednu* výchozí základní vrstvu. Pokud zadáte pouze `Výchozí základní mapu`, ale ne `Výchozí základní vrstvu`, bude pro zobrazení stahování funkcí OGC API použita standardní základní mapa.
Pro zobrazení mapy v prohlížecí službě se zadaná podkladová mapa použije jednoduše s první vrstvou, pokud jste nezadali žádné další vrstvy.

- **Události** Aktivujte &laquo;Přihlášeno k odběru&raquo; přepněte na přijímání e-mailových upozornění na automatizované pracovní postupy. Oznámení uvádějí informace o stavu online transformací a publikování služeb při každém spuštění pracovního toku.
- **Metadata CSW INSPIRE** Pole: Podporované jazyky, Výchozí jazyk, Datum, Klíčová slova Gemet, Soulad služby a Dočasný rozsah umožňují správcům organizací s aktivovaným koncovým bodem organizace CSW konfigurovat dokument CSW GetCapabilities. Předvolené hodnoty se do dokumentu CSW GetCapabilities zadají automaticky, nejsou-li do polí zadány žádné hodnoty. Zadané hodnoty se objeví po noční aktualizaci CSW.
- **Přidat vlastní pole:** Taková pole se používají pro uložení uživatelem definovaných hodnot pro pravidla automatického doplňování metadat. Vy a vaše organizace byste se měli dohodnout na klíčích pro tato uživatelem definovaná pole, aby se dala efektivně použít v pravidlech automatického doplňování.

Správci a superuživatelé organizace mají také možnost vytvářet podorganizace, vytvářet uživatele, přidávat stávající uživatele a odstraňovat organizaci přímo ze stránky profilu organizace.

:::warning[Caution]

Když odeberete organizaci, uživatelské účty přiřazené k organizaci zůstanou aktivní. Tyto uživatelské účty již nemají organizaci ani roli, a proto mají velmi omezená oprávnění, dokud nejsou propojeny s novou organizací.

:::

:::warning[Caution]

Název organizace nelze upravit.

:::