---
title: "Preparing ESRI shapefiles for online transformation"
categories:
- "help-page-category-tutorials"
- "help-page-subcategory-tutorials"
layout: help-detail
language: en

---

### **ESRI Shapefile format**

The ESRI shapefile is a vector data storage format comprised of three files with the same file name prefix:
  * shp: stores the geometry as a list of vertices
  * shx: index of the geometry to enable fast, index-based searches
  * dbf: dBase file used to store attribute information

Shapefiles may have additional files, such as `.prj` which stores coordinate system information (used by ArcGIS), or `.cpg` which specifies the code page for identifying the character set to be used. By definition, a vector is a Cartesian-based (i.e. X,Y) data structure used to store spatial data. Most geographic information systems, including ESRI's ArcGIS, store geospatial data in vector format. Other common spatial data formats include raster and TIN.
For more information, read the [ESRI Shapefile Technical Description: An ESRI White Paper-July 1988](https://www.esri.com/library/whitepapers/pdfs/shapefile.pdf)

**ESRI prj files and WKT files**

A shapefile is typically accompanied by a `.prj` file that contains a Well known text (WKT) string which stores coordinate reference system information. Well known text (WKT) is a text markup language for representing vector geometry objects on a map. The format was originally defined by the Open Geospatial Consortium (OGC) and described in their Simple Feature Access specification, to which ESRI was a contributing member. The [current version of the WKT standard](https://www.opengeospatial.org/standards/wkt-crs) was published on August 13, 2019.

Not all `.prj` files contain the same parameters. There are also syntactical differences between ESRI WKT files and OGC WKT files. Visit the [EPSG.io](https://epsg.io/) to view examples of different WKT files. Here are examples of WKT files for EPSG:25832:

***Example of Well Known Text as HTML***

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

***Example of OGC WKT***

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

***Example of ESRI WKT***

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

### **Datum transformations**

Datum transformations are required when your transformation from one coordinate system to another includes a geographic coordinate system. Datum transformations should be performed with caution because they can result in significant data shifts of 1 meter or more. There are several different methods used to perform datum transformation- Bursa-Wolf is one method.

The WKT parameter `TOWGS84` is used to approximate a transformation from the horizontal datum to the WGS84 datum.
The original Simple Features specification of WKT does not specify `TOWGS84` as a valid keyword. ESRI does not support the `TOWGS84` parameter in WKT. Instead of using a fixed transformation, ESRI software asks the user to choose an appropriate transformation method when necessary, as does QGIS.

The current version of WKT has no backward compatibility with `TOWGS84`. WKT descriptions of geodetic datums written to the OGC 01-009 specification are not readable by implementations of the current WKT specification if the optional `TOWGS84` object is provided.

### **Coordinate reference system identification in hale»connect**

hale»connect uses the open source Java GIS toolkit GeoTools to process spatial data. GeoTools, in turn, contains a copy of the [EPSG database](http://www.epsg-registry.org/). When a shapefile is uploaded to the platform, hale»connect uses the GeoTools library to attempt to match the WKT contained in the `.prj` file to the CRS definitions in the EPSG database. If a match is found, the data is subsequently processed using the matched EPSG CRS code.

In some cases, GeoTools cannot determine the CRS definition based on the information contained in the WKT. To support GeoTools in finding the correct match, the user can add an `AUTHORITY` parameter as the final parameter to the WKT file. GeoTools then uses the user-supplied EPSG code in the `AUTHORITY` parameter to apply the CRS definition defined in the EPSG database to the shapefile. These definitions also contain the Bursa-Wolf parameters required for datum transformation from the CRS definitions in the EPSG database.

### **Manually adding the AUTHORITY parameter to an ESRI prj file**

You can manually edit an ESRI `.prj` file to include the optional `AUTHORITY` parameter. The parameter must be added as the final, terminating parameter in the file using the following pattern: `AUTHORITY["EPSG","25832"]`. Although the use of the `AUTHORITY` parameter is officially deprecated in the current version of WKT, for purposes of backward compatibility its use is still accepted.

In the current version of WKT, the `AUTHORITY` object has been replaced by the `ID` object. The identifier object is not as narrowly defined as `AUTHORITY` was in previous versions.

### **Axis flip** ###

The root cause for many of the axis-flip problems users experience, is that the axis order of the geometries in the shapefile is longitude, latitude/Easting, Northing but the WKT definition in the `.prj` file describes a CRS that has latitude, longitude/Northing, Easting axis order. For example, WGS 84 = EPSG:4326.

This is problematic if no EPSG definition for the CRS with the axis order used in the shapefile exists, because no matching code can be provided for the `AUTHORITY` parameter. In these cases it is necessary to use the "Flip coordinate order" toggle to flip the axis order after publishing the dataset.

In the end, the only way to handle axis order is to analyze the axis order of the shapefile geometries and determine if the axis order fits the CRS definition in the `.prj` file and act accordingly, i.e. either add an `AUTHORITY` parameter to the `.prj` file or utilize the "Flip coordinate order" toggle in hale»connect.
