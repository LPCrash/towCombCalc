function calcCombatResult() {
  const wounds = parseFloat(document.getElementById('wounds').value);
  const closeOrder = parseFloat(document.getElementById('closeOrder').value);
  const ranks = parseFloat(document.getElementById('ranks').value);
  const Standard = parseFloat(document.getElementById('Standard').value);
  const BattleStandard = parseFloat(document.getElementById('BattleStandard').value);
  const flankAttack = parseFloat(document.getElementById('flankAttack').value);
  const rearAttack = parseFloat(document.getElementById('rearAttack').value);
  const highGround = parseFloat(document.getElementById('highGround').value);
  const overkill = parseFloat(document.getElementById('overkill').value);
  const other = parseFloat(document.getElementById('other').value);

  
  //if (isNaN(wounds) || isNaN(steuersatz)) {
  if (isNaN(wounds))
    document.getElementById('result').innerText = 'Ungültige Eingabe.';
    return;
  }

  const result = wounds + ranks;

  document.getElementById('result').innerText = 
    `${'Combat Result': ${result.toFixed(0)};
}
