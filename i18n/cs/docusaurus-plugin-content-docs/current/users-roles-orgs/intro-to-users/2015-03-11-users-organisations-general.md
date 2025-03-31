---
title: "Všeobecné informace o uživatelích a organizacích"
categories:
- "help-page-category-users"
- "help-page-subcategory-users-general"
layout: help-detail
language: cs

---

Ve většině situací je uživatel přiřazen k organizaci a má v rámci organizace jen jednu z pěti předvolených rolí. Pět předvolených rolí je kumulativních, tj. Správce témat může dělat vše, co Správce dat:

1.	**Uživatel (US):** Uživatel, který se může přihlásit do systému a nemá v organizaci specifickou roli. Obvykle může číst pouze veřejné zdroje.
2.  **Správce dat (DM):** Uživatel, který se může přihlásit do systému a je odpovědný za nahrávání a udržování datových souborů.
3.  **Správce témat (TM):** Uživatel, který se může přihlásit do systému a spravovat témata, schémata a transformační projekty.
4.  **Superuživatel (SU):** Uživatel, který se může přihlásit do systému a je odpovědný za organizaci.
5.  **Administrátor (AD):** Uživatel, který se může přihlásit do systému a získat přístup ke všem funkcím a prostředkům systému. Přístup správce není definován prostřednictvím jeho organizační role.

Struktura organizací je hierarchická. Každá organizační struktura má kořenovou organizaci, jako například v tomto příkladu:

* Stát A
    * Okres A1
       * Obec A1a
       * Obec A1b
    * Okres A2
       * Obec A2a
       * Obec A2b
       * Obec A2c

Uživatel má v organizaci obvykle jen jednu roli. Uživatel získá přístup k prostředkům a funkcím systému prostřednictvím oprávnění definovaných pro roli. Některá oprávnění závisí na hierarchické struktuře organizací přihlášeného uživatele a vlastníka zdroje.

**Příklad:** Patříte do &laquo;OkresA1&raquo; s rolí &laquo;Superuživatel&raquo;. Jako &laquo;superuživatel&raquo; můžete vidět datové sady patřící vaší organizaci &laquo;Okres A1&raquo; a datové sady patřící různým podorganizacím, jež jsou spojeny s vaší kořenovou organizací. Můžete vytvořit nové uživatelské účty a podorganizace pro vaši organizaci nebo pro kteroukoli z jejích podorganizací. Můžete vytvořit libovolný počet úrovní podorganizací.

:::warning[Caution]

Vytvoříte-li nového uživatele jako správce, systém si vynutí přiřazení uživatele k organizaci a role.

:::

