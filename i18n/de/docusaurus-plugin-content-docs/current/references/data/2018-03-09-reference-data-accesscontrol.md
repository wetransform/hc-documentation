---
title: "Zugriffskontrollen"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-data"
layout: help-detail
language: de
sidebar_position: 2

---

Der Abschnitt &laquo;Zugriffskontrolle&raquo; definiert, wie auf veröffentlichte hale»connect-Dienste zugegriffen werden kann. hale»connect unterstützt sichere Serviceanfragen durch den Einsatz von Authentifizierungstokens. Aktivieren sie &laquo;Authentifizierung mit Organisations-Token&raquo;, um sichere Serviceanfragen zu ermöglichen. Darstellungs- und Download-Dienste können dabei unabhängig voneinander konfiguriert werden.

Authentifizierungstoken können auf der Profilseite der Organisation generiert werden. Klicken sie auf den Knopf «Token generieren», um ein Authentifizierungstoken zu generieren. Tokens sind zwei Wochen lang gültig und werden im Browser-Cache gespeichert. Der Parameter ```kelvin_token``` wird automatisch zu Diensten hinzugefügt, die über die Token-Authentifizierung geschützt sind. Das Token muss in der URL enthalten sein, um auf den geschützten Dienst zugreifen zu können.

<img src={require("/images/help/de/token_auth.png").default} alt="" title="Generieren eines Authentifizierungstokens auf der Profilseite der Organisation" className="img-responsive img-inline- Hilfe"/>

Es kann auch ein einfacher Passwortschutz aktiviert werden. Der grundlegende Passwortschutz ist nicht so sicher wie die Token-Authentifizierung. Aktivieren sie &laquo;Basic Authentifizierung mit festem Benutzernamen und Passwort&raquo;, um den Passwortschutz zu aktivieren. Bei Verwendung dieses Schutzmechanismus müssen Benutzende für den Zugriff auf Dienste Nutzername und Passwort eingeben.

Damit Änderungen an Zugriffskontrollen wirksam werden, müssen die Dienste erneut publiziert werden.

Derzeit wird die Token-Authentifizierung für Serien oder Serien-Unterdatensätze nicht unterstützt.
