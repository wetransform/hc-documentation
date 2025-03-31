---
title: "Harvesting endpoint"
categories:
- "help-page-category-users"
- "help-page-subcategory-users-metadata"
layout: help-detail
language: cs

---

Zajišťujeme koncový bod shromažďování pro katalogové služby, které chtějí shromažďovat metadata z platformy haleconnect. URL adresu shromažďování lze vytvořit pomocí následujícího vzoru:

```
    https://haleconnect.com/services/bsp/metadata/org/<your org num>
```

Katalogové služby získávají soubor zip obsahující veškerá metadata pro organizaci z URL adresy pro shromažďování.

Jako správce systému máte přístup na stránku s náhledem zobrazujícím metadata, která jsou dostupná z koncového bodu shromažďování. Webovou adresu stránky s ukázkou shromažďování lze vytvořit pomocí následujícího vzoru:

```
    https://haleconnect.com/services/bsp/metadata/org/<your org num>?preview=true
```

:::warning[Caution]

Chcete-li najít číslo své organizace, přejděte na stránku účtu své organizace v nastaveních (symbol ozubeného kolečka). Číslo vaší organizace se zobrazuje v URL adrese prohlížeče. Například: https://haleconnect.com/#/organisation/1 značí, že číslo vaší organizace je 1.

:::

Stránka Harvest-Preview zobrazuje URL adresu shromažďování, URL adresu stránky s náhledem a počet zdrojů v koncovém bodě. Existují také možnosti k řízení zahrnutí zdrojů vzdálených metadat a filtrů klíčových slov pomocí přepínačů. Přepínač includeremote vám umožňuje zahrnout vzdálená metadata do koncového bodu. Přepínač klíčových slov vám umožňuje filtrovat seznam zdrojů metadat pro datové sady pomocí klíčového slova „inspireidentifiziert“. Další klíčová slova můžete přidat zadáním jednoho nebo několika klíčových slov do seznamu odděleného čárkami do URL adresy stránky s náhledem za parametr klíčových slov.

Chcete-li například filtrovat klíčové slovo „infoFeatureAccessService“, vytvořte následující URL adresu:

```
    https://haleconnect.com/services/bsp/metadata/org/1?preview=true&keywords=infoFeatureAccessService
```

Stránka Harvest-Preview uvádí zdroje metadat v tabulkovém formátu ve spodní části stránky. Zdroje metadat jsou uvedeny v řádcích s následujícími sloupci:

* Typ: Typ služby
* Název: Název služby
* Jednoduchá klíčová slova: Klíčová slova extrahovaná z pole klíčových slov v souboru metadat
* Identifikátor souboru: Identifikační číslo souboru
* Název souboru: Název souboru metadat
* Odkaz: Hypertextový odkaz na soubor metadat
