---
title: "Zugriffskontrollen"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-data"
layout: help-detail
language: de
sidebar_position: 2

---

Der Abschnitt &laquo;Zugriffskontrolle&raquo; definiert, wie auf veröffentlichte hale»connect-Dienste zugegriffen werden kann. hale»connect unterstützt sichere Serviceanfragen durch den Einsatz von Authentifizierungstokens. Schalten sie &laquo;Authentifizierung mit Organisations-Token&raquo; um, um sichere Serviceanfragen zu ermöglichen. Darstellungs- und Download-Dienste können separat konfiguriert werden.

Authentifizierungstoken können auf der Profilseite der Organisation generiert werden. Klicken sie auf die Schaltfläche &laquo;Token generieren&raquo;. Klicken sie auf die Schaltfläche, um ein Authentifizierungstoken zu generieren. Tokens sind zwei Wochen lang gültig und werden im Browser-Cache gespeichert. Der Parameter ```kelvin_token``` wird automatisch zu Diensten hinzugefügt, die über die Token-Authentifizierung geschützt sind. Das Token muss in der URL enthalten sein, um auf den geschützten Dienst zugreifen zu können.

<img src={require("/images/help/de/token_auth.png").default} alt="" title="Generieren eines Authentifizierungstokens auf der Profilseite der Organisation" className="img-responsive img-inline- Hilfe"/>

Es kann auch ein einfacher Passwortschutz aktiviert werden. Der grundlegende Passwortschutz ist nicht so sicher wie die Token-Authentifizierung. Schalten sie &laquo;Basic Authentifizierung mit festem Benutzernamen und Passwort&raquo; um, um den Passwortschutz zu aktivieren. Bei Verwendung dieses Schutzmechanismus erfordert der Zugriff auf Dienste, dass ein Benutzende einen Benutzernamen und ein Kennwort eingibt.

Änderungen an Zugriffskontrollen erfordern, dass Dienste erneut veröffentlicht werden, damit sie wirksam werden.

Derzeit wird die Token-Authentifizierung für Serien oder Serien-Unterdatensätze nicht unterstützt.
