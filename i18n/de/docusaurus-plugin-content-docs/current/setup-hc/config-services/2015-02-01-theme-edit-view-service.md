---
title: "Darstellungsdienste konfigurieren"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-themeservices"
layout: help-detail
language: de
---

Für alle Datensätze, die dem Thema zugeordnet werden, gilt eine einheitliche Konfiguration für Darstellungsdienste. Es lassen sich verschiedene Aspekte der Konfiguration solcher Dienste anpassen, insbesondere die Art des Dienstes (WMS oder WMTS), die unterstützten räumlichen Bezugssysteme, sowie die kartografische Darstellung.

Um diese anzupassen, gehen sie in der Rolle &laquo;Themenmanager&raquo; oder &laquo;Superanwender&raquo; wie folgt vor:

1.	Gehen sie auf &laquo;Themen&raquo;.
2.	Wählen sie das Thema aus, das sie bearbeiten wollen.
3.	Gehen sie auf &laquo;Darstellungsdienste&raquo;.
4.	Wählen sie die Dienstart aus. (zur Zeit nur WMS 1.3.0 und WMTS 1.0.0 verfügbar)<img src={require("/images/help/de/configure_view_services1.png").default} alt="" title="Darstellungs-Dienste konfigurieren" className="img-responsive img-inline-help"/>
5.	Wählen sie mindestens ein räumliches Bezugssystem aus, das unterstützt werden soll. Sie können durch klicken auf den &laquo;+&raquo;-Knopf weitere räumliche Bezugssysteme hinzufügen.
6.	Aktivieren oder deaktivieren sie GetFeatureInfo. Das Aktivieren von GetFeatureInfo ermöglicht die Abfrage von Objekten im WMS.
7.	Laden sie einen Styled Layer Descriptor hoch, um die kartographische Konfiguration des Darstellungsdiensts vorzunehmen.
Das SLD muss eine valide Styled Layer Descriptor-Datei sein. Im folgenden ist ein Beispiel aufgeführt um zu verdeutlichen wie Layer im WMS definiert werden (Name, Beschreibung, Darstellung):

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
Für weitere Informationen zu SLD-Dateien auf hale»connect, besuchen sie bitte das [SLD-Tutorial](../../tutorials/2018-05-03-sld-tutorial.md).

1. Aktivieren sie den &laquo;Zusätzliche Ebenen aus Raster-Quellen erlauben&raquo;-Schalter. Das Aktivieren des Schalters ermöglicht es Nutzenden, zusätzlich zu Vektor-Daten Raster-Daten im PNG- oder GeoTIFF-Format während des Anlegens eines Datensatzes hochzuladen und zu veröffentlichen. Die Raster-Daten werden in einem separaten Raster-Layer veröffentlicht.
