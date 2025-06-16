const translations = {
  de: {
    title: "Brutto-Netto-Rechner",
    labelAmount: "Bruttobetrag (€):",
    labelTax: "Steuersatz (%):",
    button: "Berechnen",
    resultNet: "Netto",
    resultTax: "Steuer"
  },
  en: {
    title: "Gross-Net Calculator",
    labelAmount: "Gross Amount (€):",
    labelTax: "Tax Rate (%):",
    button: "Calculate",
    resultNet: "Net",
    resultTax: "Tax"
  }
};

let currentLang = "de";

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.getElementById("title").innerText = t.title;
  document.querySelector("label[for='brutto']").innerText = t.labelAmount;
  document.querySelector("label[for='steuersatz']").innerText = t.labelTax;
  document.querySelector("button").innerText = t.button;
}
