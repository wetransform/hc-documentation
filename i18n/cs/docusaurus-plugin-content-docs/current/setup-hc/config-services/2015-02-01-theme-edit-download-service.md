---
title: "Konfigurace stahovacích služeb"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-themeservices"
layout: help-detail
language: cs

---

Co se týče Zobrazovacích služeb, všechny datové sady propojené s tématem sdílejí společnou konfiguraci pro vytváření stahovacích služeb, jako jsou OGC Web Feature Services nebo INSPIRE Predefined Dataset Download Services. V konfiguraci Download Service můžete upravit aspekty, jako je typ služby a podporované formáty souborů a souřadnicové referenční systémy.

Chcete-li upravit tuto konfiguraci, proveďte tyto kroky, jste-li přihlášen jako správce tématu nebo superuživatel organizace:

1.  Přejděte na &laquo;Témata&raquo;
1.  Vyberte téma, pro které chcete změnit konfiguraci
1.  Přejděte na položku &laquo;Stáhnout služby&raquo;
1.  Vyberte typ služby, kterou chcete zveřejnit. Klikněte na tlačítko &laquo;+&raquo;, tlačítko pro přidání dalšího typu služby.<img src={require("/images/help/cs/configure_download_services1.png").default} alt="" title="Konfigurace stahovacích služeb" class="img-responsive img-inline-help"/>
1.	Vyberte alespoň jeden souřadnicový referenční systém (CRS), který by měl být podporován. Další CRS můžete přidat kliknutím na tlačítko &laquo;+&raquo;.
1.	Vyberte alespoň jeden formát souboru, který by měl být podporován. Datové sady budou zahrnuty ke stažení ve vybraných formátech v publikovaných kanálech atomů. Podporovanými formáty jsou \*.gml, \*.shp a \*.gpkg. Kliknutím na tlačítko &laquo;+&raquo; můžete přidat více než jeden podporovaný formát.
1.  Aktivujte přepínač *Zahrnout odkazy na přílohy ve službách stahování Předdefinované datové sady*, abyste do informačního kanálu atomů zahrnuli odkazy na přílohy. Odkazy na přílohy uživatelům umožňují stahovat přílohy přímo z publikované předdefinované služby stahování datové sady.
