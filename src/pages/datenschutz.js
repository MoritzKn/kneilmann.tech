const html = require("../html");

const doc = require("../components/doc");
const footer = require("../components/footer");
const header = require("../components/header");

module.exports = async function impressum(ctx) {
  return doc(
    ctx,
    {
      title: "Datenschutzerklärung",
      noIndex: true
    },
    html`
      ${header(ctx)}

      <main class="text">
        <h1>Datenschutz&shy;erklärung</h1>

        <h2>Allgemeiner Hinweis und Pflicht&shy;infor&shy;ma&shytionen</h2>

        <h3>Benennung der verantwortlichen Stelle</h3>

        <p>
          Die verantwortliche Stelle für die Daten&shy;verarbeitung auf dieser
          Website ist:
        </p>

        <p>
          Moritz Kneilmann – Cloud and Web Consulting<br />
          Marienstraße 13<br />
          50825 Köln
        </p>

        <p>
          Die verantwortliche Stelle entscheidet allein oder gemeinsam mit
          anderen über die Zwecke und Mittel der Verarbeitung von
          personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
        </p>

        <h3>Widerruf Ihrer Einwilligung zur Daten&shy;verarbeitung</h3>

        <p>
          Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der
          Daten&shy;verarbeitung möglich. Ein Widerruf Ihrer bereits erteilten
          Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine
          formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum
          Widerruf erfolgten Daten&shy;verarbeitung bleibt vom Widerruf
          unberührt.
        </p>

        <h3>
          Recht auf Beschwerde bei der zuständigen Aufsichts&shy;behörde
        </h3>

        <p>
          Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen
          Verstoßes ein Beschwerderecht bei der zuständigen
          Aufsichts&shy;behörde zu. Zuständige Aufsichts&shy;behörde bezüglich
          datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des
          Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der
          folgende Link stellt eine Liste der Datenschutzbeauftragten sowie
          deren Kontaktdaten bereit:
        </p>
        <a
          rel="noopener"
          target="_blank"
          href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
        >
          https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
        </a>

        <h3>Recht auf Daten&shy;übertragbarkeit</h3>

        <p>
          Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer
          Einwilligung oder in Erfüllung eines Vertrags automatisiert
          verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die
          Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie
          die direkte Über&shy;tragung der Daten an einen anderen
          Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
          machbar ist.
        </p>

        <h3>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h3>

        <p>
          Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den
          Zweck der Daten&shy;verarbeitung und ggf. ein Recht auf Berichtigung,
          Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu
          weiteren Fragen zum Thema personenbezogene Daten können Sie sich
          jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an
          uns wenden.
        </p>

        <h2>SSL- bzw. TLS-Verschlüs&shy;selung</h2>

        <p>
          Aus Sicherheitsgründen und zum Schutz der Über&shy;tragung
          vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden,
          nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind
          Daten, die Sie über diese Website übermitteln, für Dritte nicht
          mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der
          „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der
          Browserzeile.
        </p>

        <h2>Server-Log-Dateien</h2>

        <p>
          In Server-Log-Dateien erhebt und speichert der Provider der Website
          automatisch Informationen, die Ihr Browser automatisch an uns
          übermittelt. Dies sind:
        </p>
        <ul>
          <li>Besuchte Seite auf unserer Domain</li>
          <li>Datum und Uhrzeit der Serveranfrage</li>
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>IP-Adresse</li>
        </ul>

        <p>
          Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen
          statt. Grundlage der Daten&shy;verarbeitung bildet Art. 6 Abs. 1 lit.
          b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags
          oder vorvertraglicher Maßnahmen gestattet.
        </p>

        <h2>Google Analytics</h2>
        <p>
          Unsere Website verwendet Funktionen des Webanalysedienstes Google
          Analytics. Anbieter des Webanalysedienstes ist die Google Inc., 1600
          Amphitheatre Parkway, Mountain View, CA 94043, USA.
        </p>
        <p>
          Google Analytics verwendet "Cookies." Das sind kleine Textdateien, die
          Ihr Webbrowser auf Ihrem Endgerät speichert und eine Analyse der
          Website-Benutzung ermöglichen. Mittels Cookie erzeugte Informationen
          über Ihre Benutzung unserer Website werden an einen Server von Google
          übermittelt und dort gespeichert. Server-Standort ist im Regelfall die
          USA.
        </p>
        <p>
          Das Setzen von Google-Analytics-Cookies erfolgt auf Grundlage von Art.
          6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein
          berechtigtes Interesse an der Analyse des Nutzerverhaltens, um unser
          Webangebot und ggf. auch Werbung zu optimieren.
        </p>
        <p>IP-Anonymisierung</p>
        <p>
          Wir setzen Google Analytics in Verbindung mit der Funktion
          IP-Anonymisierung ein. Sie gewährleistet, dass Google Ihre IP-Adresse
          innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen
          Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum
          vor der Übermittlung in die USA kürzt. Es kann Ausnahmefälle geben, in
          denen Google die volle IP-Adresse an einen Server in den USA überträgt
          und dort kürzt. In unserem Auftrag wird Google diese Informationen
          benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über
          Websiteaktivitäten zu erstellen und um weitere mit der Websitenutzung
          und der Internetnutzung verbundene Dienstleistungen gegenüber uns zu
          erbringen. Es findet keine Zusammenführung der von Google Analytics
          übermittelten IP-Adresse mit anderen Daten von Google statt.
        </p>

        <p>Browser Plugin</p>

        <p>
          Das Setzen von Cookies durch Ihren Webbrowser ist verhinderbar. Einige
          Funktionen unserer Website könnten dadurch jedoch eingeschränkt
          werden. Ebenso können Sie die Erfassung von Daten bezüglich Ihrer
          Website-Nutzung einschließlich Ihrer IP-Adresse mitsamt anschließender
          Verarbeitung durch Google unterbinden. Dies ist möglich, indem Sie das
          über folgenden Link erreichbare Browser-Plugin herunterladen und
          installieren:
        </p>
        <a
          rel="noopener"
          target="_blank"
          href="https://tools.google.com/dlpage/gaoptout?hl=de"
        >
          https://tools.google.com/dlpage/gaoptout
        </a>

        <p>Widerspruch gegen die Daten&shy;erfassung</p>
        <p>
          Sie können die Erfassung Ihrer Daten durch Google Analytics
          verhindern, indem Sie auf folgenden Link klicken. Es wird ein
          Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen
          Besuchen unserer Website verhindert: Google Analytics deaktivieren.
        </p>
        <p>
          Einzelheiten zum Umgang mit Nutzerdaten bei Google Analytics finden
          Sie in der Datenschutzerklärung von Google:
        </p>
        <a
          rel="noopener"
          target="_blank"
          href="https://support.google.com/analytics/answer/6004245?hl=de"
        >
          https://support.google.com/analytics/answer/6004245
        </a>

        <p>Auftragsverarbeitung</p>
        <p>
          Zur vollständigen Erfüllung der gesetzlichen Datenschutzvorgaben haben
          wir mit Google einen Vertrag über die Auftragsverarbeitung
          abgeschlossen.
        </p>
        <p>Demografische Merkmale bei Google Analytics</p>
        <p>
          Unsere Website verwendet die Funktion “demografische Merkmale” von
          Google Analytics. Mit ihr lassen sich Berichte erstellen, die Aussagen
          zu Alter, Geschlecht und Interessen der Seitenbesucher enthalten.
          Diese Daten stammen aus interessenbezogener Werbung von Google sowie
          aus Besucherdaten von Drittanbietern. Eine Zuordnung der Daten zu
          einer bestimmten Person ist nicht möglich. Sie können diese Funktion
          jederzeit deaktivieren. Dies ist über die Anzeigeneinstellungen in
          Ihrem Google-Konto möglich oder indem Sie die Erfassung Ihrer Daten
          durch Google Analytics, wie im Punkt “Widerspruch gegen die
          Datenerfassung” erläutert, generell untersagen.
        </p>

        <h2>Google Web Fonts</h2>
        <p>
          Unsere Website verwendet Web Fonts von Google. Anbieter ist die Google
          Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
        </p>
        <p>
          Durch den Einsatz dieser Web Fonts wird es möglich Ihnen die von uns
          gewünschte Darstellung unserer Website zu präsentieren, unabhängig
          davon welche Schriften Ihnen lokal zur Verfügung stehen. Dies erfolgt
          über den Abruf der Google Web Fonts von einem Server von Google in den
          USA und der damit verbundenen Weitergabe Ihre Daten an Google. Dabei
          handelt es sich um Ihre IP-Adresse und welche Seite Sie bei uns
          besucht haben. Der Einsatz von Google Web Fonts erfolgt auf Grundlage
          von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir
          ein berechtigtes Interesse an der optimalen Darstellung und
          Über&shy;tragung unseres Webauftritts.
        </p>
        <p>
          Das Unternehmen Google ist für das us-europäische
          Datenschutzübereinkommen "Privacy Shield" zertifiziert. Dieses
          Datenschutzübereinkommen soll die Einhaltung des in der EU geltenden
          Datenschutzniveaus gewährleisten.
        </p>
        <p>
          Einzelheiten über Google Web Fonts finden Sie unter:
        </p>

        <a rel="noopener" target="_blank" href="https://fonts.google.com/about">
          https://fonts.google.com/about
        </a>

        <p>
          und weitere Informationen in den Datenschutzbestimmungen von Google:
        </p>

        <a
          rel="noopener"
          target="_blank"
          href="https://policies.google.com/technologies/partner-sites?hl=de"
        >
          https://policies.google.com/technologies/partner-sites
        </a>

        <p>
          <small>
            Quelle: Datenschutz-Konfigurator von
            <a
              rel="noopener"
              target="_blank"
              href="http://www.mein-datenschutzbeauftragter.de"
            >
              mein-datenschutzbeauftragter.de
            </a>
          </small>
        </p>
      </main>

      ${footer(ctx)}
    `
  );
};
