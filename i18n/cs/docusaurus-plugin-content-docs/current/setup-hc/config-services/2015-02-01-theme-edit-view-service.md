---
title: "Konfigurování zobrazovacích služeb"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-themeservices"
layout: help-detail
language: cs

---

Všechny datové sady propojené s tématem sdílejí společnou konfiguraci pro vytváření zobrazovacích služeb, jako jsou OGC Web Map Services nebo INSPIRE View Services. V konfiguraci View Service můžete upravit aspekty, jako je typ služby, souřadnicové referenční systémy a kartografický styl.

Chcete-li upravit tuto konfiguraci, proveďte tyto kroky, jste-li přihlášen jako správce tématu nebo superuživatel organizace:

1. Přejděte na &laquo;Témata&raquo;
1. Vyberte téma, pro které chcete změnit konfiguraci
1. Přejděte na položku &laquo;Zobrazit služby&raquo;
1. Vyberte typ služby, kterou chcete publikovat (od verze 1.0 jsou k dispozici pouze WMS 1.3.0 a WMTS 1.0.0)<img src={require("/images/help/cs/configure_view_services1.png").default} alt=" " title="Konfigurace služeb zobrazení" class="img-responsive img-inline-help"/>
1. Vyberte alespoň jeden souřadnicový referenční systém (CRS), který by měl být podporován. Další CRS můžete přidat kliknutím na &laquo;+&raquo;.
1. Aktivujte nebo deaktivujte GetFeatureInfo. Aktivace GetFeatureInfo povolí dotazování funkcí ve WMS.
1. Nahrajte Deskriptor stylizované vrstvy k definování kartografické konfigurace pro službu zobrazení.

SLD musí být plně platný soubor deskriptoru stylizované vrstvy. Postupujte podle příkladu, jak jsou vrstvy definovány ve WMS (název, popis, styl):

```xml
<StyledLayerDescriptor version="1.1.0" xmlns:usgovserv="http://inspire.ec.europa.eu/schemas/us-govserv/4.0" … >
  <NamedLayer>
    <se:Name>areas</se:Name>
    <se:Description>
      <se:Title>Bezirke</se:Title>
      <se:Abstract></se:Abstract>
    </se:Description>
    <UserStyle>
      <se:Name>US.GovernmentalService_1</se:Name>
      <se:FeatureTypeStyle>
        <se:FeatureTypeName>…:GovernmentalService</se:FeatureTypeName>
        <se:Rule>
          <se:PolygonSymbolizer>
            <se:Name>symbolizer_Schulstandorte</se:Name>
            <se:Geometry>
              <ogc:PropertyName>…:areaOfResponsibilityByPolygon
              </ogc:PropertyName>
            </se:Geometry>
            …
```

Další informace o SLD na hale»connect naleznete v [příručce SLD](../../tutorials/2018-05-03-sld-tutorial.md).

1. Aktivujte nebo deaktivujte další rastrové vrstvy z rastrových zdrojů. Přepínač umožňuje uživatelům nahrávat a publikovat rastrová data PNG nebo GeoTIFF kromě vektorových dat při vytváření datové sady. Rastrová data budou zveřejněna v samostatné rastrové vrstvě.
