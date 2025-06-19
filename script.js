function convertCurrency() {
  const inr = parseFloat(document.getElementById('inr').value);
  const result = document.getElementById('result');
  const exchangeRate = 0.012;

  if (isNaN(inr)) {
    result.textContent = "Please enter a valid amount in INR.";
    return;
  }

  const usd = inr * exchangeRate;
  document.getElementById("result").innerText = "USD: $" + usd.toFixed(2);
}
