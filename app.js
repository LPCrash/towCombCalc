function berechne() {
  const brutto = parseFloat(document.getElementById('brutto').value);
  const steuersatz = parseFloat(document.getElementById('steuersatz').value);

  if (isNaN(brutto) || isNaN(steuersatz)) {
    document.getElementById('result').innerText = 'Ungültige Eingabe.';
    return;
  }

  const netto = brutto / (1 + steuersatz / 100);
  const steuer = brutto - netto;
  const t = translations[currentLang];

  document.getElementById('result').innerText = 
    `${t.resultNet}: ${netto.toFixed(2)} €\n${t.resultTax}: ${steuer.toFixed(2)} €`;
}
