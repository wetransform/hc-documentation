---
title: "Vytvoření tématu"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-themecreate"
layout: help-detail
language: cs

---

Téma je opětovně použitelný konfigurační objekt, který se používá k definování společných nastavení pro metadata datové sady, publikování a transformaci služby. Správce témat spravuje témata, související schémata a transformační projekty.

Obvyklý proces vytváření tématu:

1. Vytvořte schéma
2. Nahrajte transformační projekt
3. Vytvořte téma
4. Upravte téma

Po vytvoření projektu schématu a transformace postupujte podle těchto kroků s přihlášením jako správce tématu nebo superuživatel organizace a vytvořte nové téma:

1. Přejděte na &laquo;Témata&raquo;
2. Přejděte na &laquo;Vytvořit nové téma&raquo; ve spodní části seznamu témat
3. Vyberte základní téma. V prvním kroku se rozhodněte, zda chcete znovu použít existující konfiguraci tématu odvozením nového tématu z vybraného. Později budete moci konfiguraci upravit. Klikněte na &laquo;Pokračovat&raquo;
4. Vyberte název a typ. Ve druhém kroku vyberte typ tématu a přiřaďte jeho název, verzi a popis. Můžete si vybrat jeden z existujících předkonfigurovaných typů témat z rozbalovací nabídky, nebo vybrat možnost Vlastní a vytvořit si vlastní typ tématu. Klikněte na &laquo;Pokračovat&raquo;<img src={require("/images/help/cs/create_theme.png").default} alt="" title="Vytváření tématu" class="img-responsive img-inline-help"/>
5. Přidejte typy funkcí. Ve třetím kroku klikněte na &laquo;Přidat nový typ&raquo;, chcete-li do tématu přidat typy funkcí.
Kliknutím na tlačítko » vyberte schéma, které obsahuje typy funkcí, které chcete přidat. Poté klikněte na tlačítko » a vyberte jeden typ funkce nebo klikněte na &laquo;Přidat vše&raquo;, chcete-li do tématu přidat všechny uvedené typy funkcí. Po dokončení klikněte na &laquo;Pokračovat&raquo;

K tématu můžete přiřadit libovolný počet funkcí. Jeden typ funkce může být spojen s mnoha tématy. Chcete-li odstranit přiřazení jednoho typu prvku, klikněte na červenou ikonu «odstranit» v pravém horním rohu typu prvku. Chcete-li odstranit všechny typy funkcí jednoho schématu aktuálně přiřazeného k tématu, klikněte na červenou ikonu «odstranit» v pravém horním rohu schématu. Po dokončení přidávání typů funkcí klikněte na &laquo;Pokračovat&raquo;
6. Potvrďte vytvoření. Ve čtvrtém kroku svůj motiv zkontrolujte a klikněte na &laquo;Vytvořit&raquo;, uložit téma.

:::warning[Caution]

Odvodíte-li své téma z existujícího tématu, pozdější změny původního tématu odvozené téma neovlivní.

:::

:::danger

Téma lze odstranit pouze tehdy, jestliže již k němu nejsou přiřazeny žádné datové sady.

:::
