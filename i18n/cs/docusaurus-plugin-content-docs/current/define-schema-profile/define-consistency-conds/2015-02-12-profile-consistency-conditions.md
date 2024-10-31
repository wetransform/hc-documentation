---
title: "Definování podmínek konzistence profilu"
categories:
- "help-page-category-profileworkflow"
- "help-page-subcategory-profileworkflow-cc"
layout: help-detail
language: cs

---

Část Podmínky konzistence podporuje definici logických podmínek aplikovaných na prvky profilu pomocí booleovských operátorů.

**Závislosti hodnot** lze definovat na prvcích profilu, např. má-li prvek A hodnotu X, prvok B musí mít hodnotu Y.

**Závislosti existence** lze definovat na prvcích profilu, například existuje-li prvek A, prvek B nesmí existovat.

**Kombinace hodnotových a existenčních závislostí** se dá definovat, například má-li prvek A hodnotu X, prvek B nesmí existovat.

Je možné vytvořit několik podmínek konzistence. <img src={require("/images/help/cs/Screenshot_2018-10-23 Create condition.png").default} alt="" title="Vytváření podmínky konzistence" class="img-responsive img-inline-help"/>

Chcete-li vytvořit novou podmínku konzistence, dodržujte tento pracovní postup a přihlaste se jako Superuživatel nebo Správce témat:

1. Klikněte na &laquo;Přidat podmínku konzistence&raquo;.
2. Z rozbalovací nabídky vyberte booleovský operátor.
3. Klikněte na &laquo;+Vytvořit podmínku&raquo;.
4. Vyberte typ prvku, na který byste chtěli v podmínkách odkazovat.
5. Kliknutím na název vlastnosti zobrazíte dostupné podmínky. Z rozbalovací nabídky vyberte podmínku, kterou chcete použít. Použije se jako &laquo;Jestliže&raquo; příkaz pro podmínku.<img src={require("/images/help/en/Screenshot_2018-10-23 Create condition(3).png").default} alt="" title="Výběr booleovského operátoru" class="img-responsive img- inline-help" />
Vyberte druhou vlastnost a zopakováním procesu přidejte jako druhou část podmínky prohlášení &laquo;Pak&raquo;. Chcete-li zobrazit výraz podmínky konzistence, který jste vytvořili, přejděte na dolní část dialogového okna.<img src={require("/images/help/en/Screenshot_2018-10-23 Create condition(4)2.png").default} alt="" title= "Podmínka konzistence" class="img-responsive img-inline-help"/>
6. Po dokončení klikněte na tlačítko &laquo;Potvrdit&raquo;
7. V posledním kroku přidejte k podmínce konzistence název a popis. Při zadávání názvu se ujistěte, že jste nepoužili speciální znaky ani mezery (např. &, %, ?, #) a dbejte na to, abyste namísto teček, mezer nebo lomítek použili velká písmena a podtržítka nebo spojovníky. Na popis se nevztahují žádná omezení.
<img src={require("/images/help/cs/Screenshot_2018-10-23 Create condition(5).png").default} alt="" title="Vytváření podmínky konzistence" class="img-responsive img-inline-help"/> Chcete-li k podmínce přidat označenou hodnotu, klikněte na položku &laquo;+Přidat označenou hodnotu&laquo;. Z rozbalovací nabídky vyberte název značky. Do příslušného textového pole zadejte hodnotu. Není možné použít více hodnot označených pro týž název značky. Po dokončení klikněte na &laquo;Vytvořit&raquo;.
