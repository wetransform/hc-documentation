---
title: "Stažení profilu jako testovacího balíčku nebo vzorového dokumentu XML"
categories:
- "help-page-category-profileworkflow"
- "help-page-subcategory-profileworkflow-files"
layout: help-detail
language: cs

---

Sekce Soubory obsahuje možnosti ke stažení testovacího balíčku a vzorového dokumentu XML na základě definice profilu.

**Stáhnout jako testovací balíček**

 Aby bylo možné stáhnout testovací sadu, musí existovat profil s alespoň jednou podmínkou. Formát testovací sady je ETF / BaseX kvůli požadované kompatibilitě s testovacími sadami AdV a GDI-DE (ve vývoji) a INSPIRE Reference Validator. Chcete-li použít testovací balíček ETF, musíte jej exportovat a nastavit v instalaci ETF.

**Vzorový dokument XML**

Aby bylo možné vygenerovat vzorový soubor XML, musí profil obsahovat platné vzorové hodnoty pro všechny povinné typy funkcí a vlastností. Pro každý profil by mělo být možné testovací data jednoduše generovat. Vzorové dokumenty XML jsou založeny na definicích schématu a profilu a na vzorových hodnotách zadaných pomocí označených hodnot.

Chcete-li exportovat vzorový soubor XML:
* Zadejte klíč označených hodnot, ze kterých se má vzorový soubor vygenerovat.
* Specifikujte, zda se kromě povinných prvků mají generovat i všechny volitelné prvky.
