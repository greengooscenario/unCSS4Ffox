function CSSoff(tab) {
  browser.tabs.insertCSS(tab.id, {
    code: `
      * {
        all: initial !important;
      }
      a, a:visited, a:hover, a:active {
        color: blue !important;
        text-decoration: underline !important;
      }
      body {
        display: block !important;
        background: white !important;
        color: black !important;
        font-family: sans-serif !important;
        font-size: medium !important;
        line-height: 1.2 !important;
        margin: 0 !important;
        padding: 1em !important;
      }
      img {
        max-width: 100% !important;
        height: auto !important;
      }
    `,
    runAt: "document_start"
  });
}

browser.browserAction.onClicked.addListener(CSSoff);


