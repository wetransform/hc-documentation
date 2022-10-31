---
title: "Začínáme s hale»connect"
categories:
- "help-page-category-start"
- "help-page-subcategory-start"
layout: "help-detail"
language: cs

---

Hale»connect je cloudová platforma, která uživatelům umožňuje publikovat datové sady, webové služby OGC a metadata. Pomocí hale»connect mohou uživatelé rovněž přistupovat k transformačním projektům vytvořeným v hale»studio pro automatizaci online transformací dat. Hale»connect poskytuje uživatelům možnost vytvářet, přistupovat, transformovat, spolupracovat a sdílet zdroje v rámci své organizace nebo s veřejností. Další informace o ročním předplatném hale»connect naleznete na naší [stránce produktu](https://www.wetransform.to/products/haleconnect/) v sekci dokumentace.

Tento rychlý průvodce provede uživatele registrací účtu a uvádí stručný přehled různých typů zdrojů spravovaných na hale»connect, jakož i úvod do některých nejběžnějších pracovních postupů zveřejňování dat. Další informace naleznete na našich [stránkách s dokumentací](../../).

### **Začínáme s hale»connect**

**Registrace účtu na platformě [hale»connect](https://haleconnect.com)**

Na https://haleconnect.com si můžete zaregistrovat bezplatný 30denní zkušební účet.
Na přihlašovací stránce si vytvořte účet zadáním uživatelského jména, hesla a vaší e-mailové adresy. Měli byste obdržet registrační e-mail s odkazem na aktivaci účtu hale»connect. Klikněte na odkaz a přihlaste se pomocí své e-mailové adresy a hesla, dostanete se na stránku svého účtu a můžete začít platformu hale»connect používat.

**Přijetí pozvánky do organizace**

Když vám správce systému vytvoří uživatelský účet, obdržíte registrační e-mail s odkazem na aktivaci vašeho nového účtu hale»connect. Automaticky se stanete členem organizace, kterou vybral váš správce systému. Abyste navštívili stránku svého účtu a mohli začít platformu hale»connect používat, klikněte na odkaz a nastavte si heslo.

### **Přehled hale»connect zdrojů**

**Úvod**

Zdroje na hale»connect spravují tři různé uživatelské role. Správci dat, Správci témat a Superuživatelé. Správci dat mohou nahrávat a udržovat datové sady, správci témat mohou konfigurovat témata, schémata a transformační projekty a superuživatelé mají navíc možnost vytvářet a spravovat organizace. Svoji roli uživatele si můžete prohlédnout na stránce profilu účtu. Jestliže jste se zaregistrovali na stránce hale»connect prostřednictvím webové stránky, je vám standardně přidělena role Správce témat.

Uživatelé hale»connect mohou spravovat svá schémata, témata, datové sady a transformační projekty na hale»connect. Na obrázku níže je zobrazen základní pracovní postup. Je důležité si uvědomit, že k vytvoření datové sady je zapotřebí schéma a téma. Pokud jste Správcem dat, bude je váš Správce témat muset nakonfigurovat.

<img src={require("/images/help/cs/publish_dataset.png").default} alt="" title="Zveřejnění datové sady" class="img-responsive img-inline-help"/>


**Zveřejnění datové sady**

Chcete-li publikovat novou datovou sadu na hale»connect, postupujte podle těchto kroků:

*	Přejděte na kartu «Data» na hlavním panelu nástrojů
*   Přejděte na «Vytvořit novou datovou sadu» ve spodní části seznamu datové sady
*   Vyberte téma, které chcete propojit s vaší datovou sadou. Téma obsahuje schéma a konfigurační nastavení, která řídí způsob publikování vašich webových služeb.
*   Vyberte zdrojové datové soubory. Existuje několik způsobů, jak nahrát soubory patřící do vaší datové sady:

    * Klikněte na «Vybrat soubor(y)» a přejděte na požadovanou datovou sadu.
    * Klikněte na «Zadejte URL adresu (adresy)» a přejděte na požadovanou URL nebo WFS.
    * Přesuňte datovou sadu «Sem přesuňte soubor(y)»
*   Pojmenujte svou datovou sadu.
*   Uveďte všechny povinné hodnoty metadat. Kategorie metadat zobrazují červený znak s počtem chybějících požadovaných prvků metadat.
*   Vyberte služby, které chcete zveřejnit. Když zveřejníte služby zobrazení a stahování, zveřejní se také vaše datová sada, metadata datové sady a metadata služby.

Další informace o datových sadách naleznete v následujících částech naší dokumentace:

[Vytvořit novou datovou sadu](../create-manage-datasets/create-dataset/2015-01-10-dataset-create.md)

[Upravit metadata pro datovou sadu](../create-manage-datasets/edit-metadata/2015-01-05-dataset-enter-metadata.md)

[Zveřejňování služeb pro datovou sadu](../create-manage-datasets/publish-services/2015-01-01-dataset-publish-services.md)

**Zveřejnění online transformačního projektu**

Publikování online transformace vyžaduje zdrojové téma, zdrojovou datovou sadu, cílové téma a transformační projekt. Cílová datová sada je automaticky generována online transformací. Níže uvedený pracovní postup může realizovat pouze Správce témat.

<img src={require("/images/help/cs/online_transformation.png").default} alt="" title="Zveřejnění online transformace" class="img-responsive img-inline-help"/>


Chcete-li spustit online transformaci na hale»connect, postupujte podle těchto kroků: 

*	Vytvořte zarovnání v hale studio a exportujte transformační projekt přímo do hale»connect.
*   Vytvořte schémata, která budete potřebovat k nahrání zdrojových dat a zveřejnění cílových dat. Jestliže vaše zdrojová nebo cílová data vyžadují použití více než jednoho schématu, potřebná schémata nahrajte.
*   Vytvořte zdrojové téma a přidejte všechny typy funkcí ze zdrojového schématu / zdrojových schémat, které vaše zdrojová data vyžadují.
*   Vytvořte cílové téma a přidejte všechny typy funkcí z cílového schématu / cílových schémat, které vaše cílová data vyžadují.
*	Přejděte na své zdrojové téma a v sekci Transformace přidejte konfiguraci transformace. Vyberte transformační projekt, který jste exportovali do hale»connect a cílové téma a klikněte na «Přidat konfiguraci».
*   Vytvořte zdrojovou datovou sadu pomocí zdrojového motivu a přidejte všechny soubory zdrojových dat, které používá váš transformační projekt. Můžete si vybrat:
    Publikování zobrazovacích a stahovacích služeb pro vaše zdrojová data
    Spuštění online transformace
    Publikování zobrazovacích a stahovacích služeb pro vaše transformovaná data
*	Výsledky si můžete prohlédnout v sekcích Zobrazit služby a Služby ke stažení v datových sadách.

  Potřebujete-li pomoc s pokročilými tématy, jako je online transformace, prozkoumejte naše možnosti podpory na [support](https://www.wetransform.to/services/support/).
