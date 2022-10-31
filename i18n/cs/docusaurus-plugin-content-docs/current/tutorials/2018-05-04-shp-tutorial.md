---
title: "Příprava ESRI shapefiles k online transformaci"
categories:
- "help-page-category-tutorials"
- "help-page-subcategory-tutorials"
layout: help-detail
language: cs

---

### **Formát ESRI Shapefile**

ESRI shapefile je formát pro ukládání vektorových dat sestávající ze tří souborů se stejnou předponou názvu souboru:
  * shp: uloží geometrii jako seznam vrcholů
  * shx: index geometrie umožňující rychlé vyhledávání založené na indexu
  * dbf: soubor dBase používaný k ukládání informací o atributech

Soubory Shapefiles mohou obsahovat další soubory, například `.prj`, který ukládá informace o souřadnicovém systému (používá ArcGIS), nebo `.cpg`, který specifikuje kódovou stránku k identifikaci znakové sady, která se má použít. Podle definice je kartézský vektor (tj. X,Y) datová struktura používaná k ukládání prostorových dat. Většina geografických informačních systémů, včetně ESRI ArcGIS, uchovává geoprostorová data ve vektorovém formátu. Další běžné formáty prostorových dat zahrnují rastr a TIN.
Další informace naleznete v [Technický popis ESRI Shapefile: Bílá kniha ESRI – červenec 1988](https://www.esri.com/library/whitepapers/pdfs/shapefile.pdf)

**Soubory ESRI prj a soubory WKT**

Soubor shapefile je obvykle doprovázen souborem `.prj`, který obsahuje řetězec dobře známý text (WKT), ve kterém jsou uloženy informace o souřadnicovém referenčním systému. Dobře známý text (WKT) je textový značkovací jazyk pro reprezentaci objektů vektorové geometrie na mapě. Formát byl původně definován konsorciem Open Geospatial Consortium (OGC) a popsán v jeho specifikaci Simple Feature Access, jejímž přispěvatelem byla společnost ESRI. [Aktuální verze standardu WKT](https://www.opengeospatial.org/standards/wkt-crs) byla zveřejněna 13. srpna 2019.

Ne všechny soubory `.prj` obsahují stejné parametry. Mezi soubory ESRI WKT a soubory OGC WKT existují i syntaktické rozdíly. Chcete-li zobrazit příklady různých souborů WKT, navštivte stránku [EPSG.io](https://epsg.io/). Zde jsou příklady souborů WKT pro EPSG:25832:

***Příklad formátu Well Known Text (WKT) jako HTML***

  ```
  PROJCS["ETRS89 / UTM zone 32N",
    GEOGCS["ETRS89",
      DATUM["European_Terrestrial_Reference_System_1989",
          SPHEROID["GRS 1980",6378137,298.257222101,
              AUTHORITY["EPSG","7019"]],
          TOWGS84[0,0,0,0,0,0,0],
          AUTHORITY["EPSG","6258"]],
      PRIMEM["Greenwich",0,
          AUTHORITY["EPSG","8901"]],
      UNIT["degree",0.0174532925199433,
          AUTHORITY["EPSG","9122"]],
      AUTHORITY["EPSG","4258"]],
  PROJECTION["Transverse_Mercator"],
  PARAMETER["latitude_of_origin",0],
  PARAMETER["central_meridian",9],
  PARAMETER["scale_factor",0.9996],
  PARAMETER["false_easting",500000],
  PARAMETER["false_northing",0],
  UNIT["metre",1,
    AUTHORITY["EPSG","9001"]],
  AXIS["Easting",EAST],
  AXIS["Northing",NORTH],
  AUTHORITY["EPSG","25832"]]
  ```

***Příklad OGC WKT***

  ```
  PROJCS["ETRS89 / UTM zone 32N",
    GEOGCS["ETRS89",
      DATUM["European_Terrestrial_Reference_System_1989",
        SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],
	         TOWGS84[0,0,0,0,0,0,0],
	         AUTHORITY["EPSG","6258"]],
	       PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],
	       UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],
    AUTHORITY["EPSG","4258"]],
  PROJECTION["Transverse_Mercator"],
  PARAMETER["latitude_of_origin",0],
  PARAMETER["central_meridian",9],
  PARAMETER["scale_factor",0.9996],
  PARAMETER["false_easting",500000],
  PARAMETER["false_northing",0],
  UNIT["metre",1,AUTHORITY["EPSG","9001"]],
  AXIS["Easting",EAST],
  AXIS["Northing",NORTH],
  AUTHORITY["EPSG","25832"]]
  ```

***Příklad ESRI WKT***

  ```
  PROJCS["ETRS89_UTM_zone_32N",
    GEOGCS["GCS_ETRS_1989",
      DATUM["D_ETRS_1989",
	       SPHEROID["GRS_1980",6378137,298.257222101]],
	      PRIMEM["Greenwich",0],
	      UNIT["Degree",0.017453292519943295]],
  PROJECTION["Transverse_Mercator"],
  PARAMETER["latitude_of_origin",0],
  PARAMETER["central_meridian",9],
  PARAMETER["scale_factor",0.9996],
  PARAMETER["false_easting",500000],
  PARAMETER["false_northing",0],
  UNIT["Meter",1]]
  ```

### **Transformace souřadnicových systémů**

Transformace souřadnicových systémů jsou potřebné, když vaše transformace z jednoho souřadnicového systému do druhého zahrnuje geografický souřadnicový systém. Transformace souřadnicových systémů by měly být prováděny opatrně, protože mohou vést k významným posunům dat o 1 metr nebo více. Existuje několik různých metod používaných k provedení transformace dat – jednou z nich je Bursa-Wolf.

Parametr WKT `TOWGS84` se používá k aproximaci transformace z horizontálního nulového bodu na nulový bod WGS84.
Původní specifikace jednoduchých funkcí WKT nespecifikuje `TOWGS84` jako platné klíčové slovo. ESRI nepodporuje parametr `TOWGS84` ve WKT. Namísto použití pevné transformace software ESRI v případě potřeby žádá uživatele, aby si zvolil vhodnou metodu transformace, jako v případě QGIS.

Aktuální verze WKT nemá zpětnou kompatibilitu s `TOWGS84`. Popisy WKT geodetických dat zapsané podle specifikace OGC 01-009 nejsou čitelné implementacemi aktuální specifikace WKT, je-li uveden volitelný objekt `TOWGS84`.

### **Identifikace souřadnicového referenčního systému v hale»connect**

hale»connect využívá ke zpracování prostorových dat open source Java GIS toolkit GeoTools. GeoTools zase obsahuje kopii [databáze EPSG](http://www.epsg-registry.org/). Když se soubor shapefile nahraje na platformu, hale»connect použije knihovnu GeoTools, aby se pokusil porovnat WKT obsažený v souboru `.prj` s definicemi CRS v databázi EPSG. Nalezne-li se shoda, data se následně zpracují pomocí shodného kódu EPSG CRS.

V některých případech GeoTools nedokáže určit definici CRS na základě informací obsažených ve WKT. Na podporu GeoTools při hledání správné shody může uživatel přidat parametr `AUTHORITY` jako konečný parametr do souboru WKT. GeoTools pak použije kód EPSG dodaný uživatelem v parametru `AUTHORITY` k použití definice CRS definované v databázi EPSG na soubor shapefile. Tyto definice také obsahují Bursa-Wolfovy parametry potřebné k transformaci dat z definic CRS v databázi EPSG.

### **Manuální přidání parametru AUTHORITY do souboru prj ESRI**

Soubor `.prj` ESRI můžete manuálně upravit tak, aby obsahoval volitelný parametr `AUTHORITY`. Parametr musí být přidán jako konečný ukončovací parametr v souboru pomocí následujícího vzoru: `AUTHORITY["EPSG","25832"]`. Ačkoli je použití parametru `AUTHORITY` v současné verzi WKT oficiálně zastaralé, z důvodu zpětné kompatibility je jeho použití stále akceptováno.

V aktuální verzi WKT byl objekt `AUTHORITY` nahrazen objektem `ID`. Objekt identifikátoru není definován tak úzce, jako byl „AUTHORITY“ v předchozích verzích.

### **Překlopení osy** ###

Hlavní příčinou mnoha problémů s překlápěním osy, se kterými se uživatelé setkávají, je to, že osové pořadí geometrií v souboru tvaru je zeměpisná délka, zeměpisná šířka/východ, sever, avšak definice WKT v souboru `.prj` popisuje CRS, který má zeměpisnou šířku, zeměpisná délka/sever, pořadí východní osy. Například WGS 84 = EPSG:4326.

To je problematické, pokud neexistuje žádná definice EPSG pro CRS s pořadím os použitým v souboru shapefile, protože pro parametr `AUTHORITY` nelze uvést žádný odpovídající kód. V těchto případech je třeba použít přepínač "Obrátit pořadí souřadnic" k obrácení pořadí os po zveřejnění datové sady.

Nakonec je jediným způsobem, jak vyřešit pořadí os, analyzovat pořadí os geometrií souboru shapefile a určit, zda pořadí os vyhovuje definici CRS v souboru `.prj`, a podle toho jednat, tj. buď přidat parametr `AUTHORITY` do souboru `.prj`, nebo použít přepínač "Obrátit pořadí souřadnic" v hale»connect.
