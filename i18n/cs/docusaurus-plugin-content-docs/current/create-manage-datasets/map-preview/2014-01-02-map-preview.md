---
title: "Použití náhledu mapy"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkflowmappreview"
layout: help-detail
language: cs
---

**Náhled mapy**

Náhled mapy je jednoduchá webová mapová aplikace, která umožňuje prohlížení publikovaných služeb WMS.
<img src={require("/images/help/en/map_preview.png").default} alt="Layer widget legend" title="Layer widget legend" className="img-responsive img-inline-help"/>

Svislá řada tlačítek v levém horním rohu náhledu mapy umožňuje uživatelům:
  * zvětšovat a zmenšovat
  * vygenerovat permalink s aktuálně zvoleným rozsahem, konfigurací vrstev a úrovní přiblížení, který lze sdílet
  * vytisknout aktuální rozsah mapy nebo vygenerovat soubor PDF

Mapu lze stáhnout ve formátu PNG nebo vytisknout jako PDF v režimu na výšku i na šířku. Vezměte prosím na vědomí, že tisk lze očekávat pouze na obrazovkách s rozlišením 1920x1080 (Full HD) a 2560x1440 (QHD).

## Widget vrstvy ##

Widget vrstvy obsahuje:

* informace o legendě,
* možnost přidat externí vrstvy WMS,
* možnosti zapnutí a vypnutí vrstev a
* možnost filtrovat rastrové datové sady pro zobrazení v rámci řady datových sad.

# Výběr jednotlivých datových sad v sérii datových sad #

U publikovaných služeb řad datových sad kliknutím na ikonu filtru v rámci widgetu vrstvy vyvoláte dialogové okno pro výběr datové sady a vyberete dílčí datové sady pro zobrazení.
<img src={require("/images/help/en/series.png").default} alt="Vybrané dílčí sady dat ve widgetu vrstvy" title="Vybrané dílčí sady dat ve widgetu vrstvy" className="img-responsive img-inline-help"/>

# Přidejte externí vrstvu WMS #

Widget vrstvy podporuje možnost přidat do náhledu mapy externí vrstvy WMS, aby bylo možné externí vrstvy zobrazit společně se službami hale "connect. Lze také přidat další služby hale "connect. Kliknutím na znaménko plus na panelu Vrstvy přidejte svůj WMS. Pořadí vrstev v seznamu vrstev můžete uspořádat a nakonfigurovat tak zobrazení vrstev v náhledu mapy.

# Přidání vlastní podkladové mapy #

Widget vrstev nabízí také možnost zadat vlastní adresu URL podkladové mapy. Kliknutím na znaménko plus na panelu Základní mapa přidáte svou adresu URL. Další informace o přidání vlastní podkladové mapy WMS pro vaši organizaci naleznete na následující stránce dokumentace: [Přidání organizace](../../users-roles-orgs/manage-orgs/2015-03-04-users-add-organisation).


# Přidat externí WMS jako mapu na pozadí #

Kromě toho widget vrstvy podporuje možnost přidat externí služby WMS do náhledu mapy, takže externí služby lze zobrazit vedle služeb hale "connect.

Náhled mapy obsahuje responzivní widget měřítka, včetně faktoru měřítka a zobrazení souřadnic kurzoru v pravém dolním rohu aplikace. Zadáním souřadnic lze aktualizovat rozsah mapy a přiblížit ji na konkrétní místo.
