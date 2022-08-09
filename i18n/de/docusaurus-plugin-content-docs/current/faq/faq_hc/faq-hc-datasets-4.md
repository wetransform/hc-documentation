---
title: "Fragen und Antworten für hale»connect"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: de
---

<h2>Werden Bildpyramiden in den Rasterdaten von hale»connect genutzt?</h2>

Rasterdaten werden von hale»connect intern konvertiert, wobei keine Bildpyramiden erzeugt werden.

Im Hintergrund wird immer in eine 32-bit-Bilddatei mit vier Kanälen (RGB + Alpha für Transparenz, 8bit je Kanal) konvertiert (mit GDAL). Bei solchen Quellen (auch wenn es PNGs sind) wurden bisher keine Probleme festgestellt. NoData wird unterstützt sofern diese Information mit GDAL bestimmbar ist. In jedem Fall findet eine Überführung in einen Alpha-Kanal statt.
