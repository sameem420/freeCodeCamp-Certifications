import { useState, useMemo } from "react";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [startCurrency, setStartCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");

  const currencies = ["USD", "EUR", "GBP", "JPY"];

  const currenciesRate = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7,
  };

  const convertedAmount = useMemo(() => {
    return amount / currenciesRate[startCurrency];
  }, [amount, startCurrency]);

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <label htmlFor="amount">
        {startCurrency} to {targetCurrency} Conversion
      </label>
      <input
        type="number"
        min={0}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        id="amount"
        name="amount"
      />
      <label htmlFor="startCurrency">Start Currency:</label>
      <select
        name="startCurrency"
        id="startCurrency"
        value={startCurrency}
        onChange={(e) => setStartCurrency(e.target.value)}
      >
        {currencies.map((currency) => {
          return <option key={currency}>{currency}</option>;
        })}
      </select>
      <label htmlFor="targetCurrency">Target Currency:</label>
      <select
        name="targetCurrency"
        id="targetCurrency"
        value={targetCurrency}
        onChange={(e) => setTargetCurrency(e.target.value)}
      >
        {currencies.map((currency) => {
          return <option key={currency}>{currency}</option>;
        })}
      </select>
      <p>
        Converted Amount:{" "}
        {(convertedAmount * currenciesRate[targetCurrency]).toFixed(2)}{" "}
        {targetCurrency}
      </p>
    </div>
  );
}
