---
title: "Soubory"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-data"
layout: help-detail
language: cs

---

Sekce Soubory zobrazuje počet souborů přiřazených k datové sadě šedým znakem. V sekci Soubory můžete nahrávat další soubory, prohlížet si je, stahovat nebo mazat soubory.

Existuje několik způsobů, jak přidat soubory:

  * Klikněte na «Vybrat soubor(y)» a přejděte na svou datovou sadu.
  * Klikněte na «Zadejte URL adresu(adresy)» a přidejte požadovanou URL adresu nebo požadavek WFS GetFeature. Chcete-li zadat klíč API v záhlaví autorizace HTTP požadavku na stažení dat přes API, přidejte klíč API do pole Autorizace.
  * Kliknutím na «Sem přesuňte soubor(y)» přesuňte soubory 

Některé typy souborů (např. shapefile a geodatabases) sestávají z většího počtu dílčích souborů, takzvaných souhrnných souborů. hale»connect je zobrazí jako jeden logický soubor. Chcete-li zobrazit dílčí soubory spojené s agregovaným souborem, klikněte na název souboru nebo na znak „+“, čímž zobrazíte dílčí soubory jednotlivě. Chcete-li se vrátit zpět a zobrazit všechny soubory, klikněte na «Všechny soubory».

 Chcete-li stáhnout všechny soubory v jednom archívu, klikněte na «Stáhnout jako archív», čímž uložíte kopii souborů do svého počítače. Kliknutí na název souboru komponentu vám umožní stáhnout soubor.

 Chcete-li odstranit jeden (logický nebo komponentní) soubor, klikněte na červené „x“ v levém horním rohu pole souboru. Chcete-li odstranit všechny soubory, klikněte na «Odstranit všechny soubory». Vymazané soubory nelze obnovit.

 Přepínač «Zachovat synchronizaci se zdrojem dat» umožňuje uživatelům vybrat frekvenci, s níž se aktualizují datové sady stažené přes API. Aktualizace lze nakonfigurovat tak, aby se spouštěly denně, každou hodinu nebo každých deset minut. Tlačítko «Synchronizovat nyní» spustí okamžitou synchronizaci souborů.

### **Nahrát přílohy**

 Existuje několik způsobů, jak nahrát přílohy souborů na hale»connect. Přílohy můžete nahrát do sekce Soubory vaší datové sady po jejím zveřejnění přesunutím souborů, nahráním souboru z disku nebo uvedením URL adresy. Přílohy nahrané přes URL lze automaticky znovu stáhnout kliknutím na «Znovu stáhnout URL přílohy». Alternativně můžete přílohy nahrát při vytváření souboru. Typy souborů příloh mohou zahrnovat soubory PDF, GeoTIFF nebo textury pro 3D soubory. Přílohy s tečkami v názvu souboru nejsou podporovány. Na soubory příloh se odkazuje ve vaší datové sadě.

 **Nahrajte přílohy při vytváření datové sady**

 V některých případech možná budete chtít vytvořit datovou sadu se souborem \*.gml nebo \*.shp, který odkazuje na různé související dokumenty nebo zdroje. Pokud váš \*.gml obsahuje relativní odkazy na soubory, můžete odkazované zdroje nahrát při vytváření datové sady. hale»connect také podporuje publikování shapefiles s odkazovanými přílohami. Relativní odkazy na soubory přidané do polí v tabulkách atributů shapefile jsou rozpoznány jako přílohy. Přílohy nahrané při vytváření datové sady se automaticky přidají do sekce Soubory datové sady. Pro datové sady s konfiguracemi transformace se přílohy automaticky přenesou do cílové datové sady.

 Soubory příloh nahrané do hale»connect obsahují veřejně dostupný odkaz na soubor přílohy. Odkazy na soubory příloh lze zahrnout do služby stahování Předdefinované datové sady a zobrazit je pomocí nástroje Feature Explorer Tool. Pro soubory příloh se nevytváří samostatné vrstvy služeb.

 Po zveřejnění datové sady si můžete zobrazit soubory příloh:

   *	Přejděte na «Data» a ze seznamu zdrojů vyberte datovou sadu
   *  Vyberte sekci „Soubory“.
   *  Přílohy se zobrazí na panelu «Přílohy». Pokud vaše datová sada obsahuje relativní odkazy na zdroje, které nebyly nahrány při vytváření dat, zobrazí se upozornění. Všechny chybějící soubory příloh můžete nahrát přímo na panelu «Přílohy». Znovu publikujte svou datovou sadu, aby obsahovala nový odkaz (nové odkazy) na přílohu.

**Přidejte zástupné hodnoty do svého GML**

 Na soubory příloh nahrané ručně v sekcích Soubory vaší datové sady můžete odkazovat ve svých datových sadách GML. Chcete-li odkazovat na soubor přílohy, musíte svůj soubor GML upravit tak, aby obsahoval zástupné hodnoty pro vaši přílohu. Zástupná hodnota musí být zadána v atributu, který vyžaduje hodnotu řetězce, a musí následovat tento vzor:```attachment:///<uploadedAttachmentFile>```

**Příklad:** ```<base:link>attachment:///MyFile.pdf<base:link>```

Ve vašich datových sadách GML lze odkazovat také na externí URL adresy. Externí URL adresy musí být zadány v atributu, který vyžaduje hodnotu řetězce a musí následovat
tento vzor:```attachment-<urlToExternalFile>```

**Příklad:**```<base:link>attachment-http://www.mywebsite.de<base:link>```

Dalším krokem je vytvoření datové sady s upraveným GML. Analýza souborů identifikuje odkazy na přílohy a externí URL adresy ve vašich zdrojových datových souborech. Pokud ve svém GML odkazujete na externí URL adresy, soubory příloh nemusíte nahrávat. Pokud odkazujete na přílohy na platformě hale»connect, nahrajte své soubory příloh do sekce Soubory vašich dat.

Chcete-li nahrát soubory přílohy:

  *	Přejděte na «Data» a ze seznamu zdrojů vyberte datovou sadu
  * Vyberte sekci „Soubory“.
  * Kliknutím na «Nahrát přílohu» nahrajte odkazovanou přílohu. Název souboru se musí shodovat s názvem souboru v GML. Odkazujete-li na více než jednu přílohu, v sekci Přílohy se zobrazí seznam názvů souborů.
  * Obnovte své služby

Výraz v GML se změní na veřejně dostupný odkaz na nahraný soubor přílohy. Odkazy na soubory příloh a externí URL adresy lze zobrazit v nástroji Feature Explorer Tool, který vám umožňuje prozkoumat atributy složitých souborů GML.

### **Přiřazení souborů k typům funkcí**

Systém automaticky přiřadí obsah každého souboru k jednomu z typů funkcí tématu. Pro soubory XML je tento proces deterministický a bezpečný, pro ostatní typy souborů, které nemají kvalifikované jmenné prostory a konzistentně definované názvy atributů, používáme k identifikaci nejlepší shody heuristiku. V některých případech bude tato nejlepší shoda stále nesprávná. Můžete tak přiřadit obsah souboru k typu funkce ručně:

1.	Klikněte na ikonu pera v dlaždici souboru, který chcete znovu přiřadit
2.  Ze seznamu vyberte typ prvku, který chcete přiřadit
