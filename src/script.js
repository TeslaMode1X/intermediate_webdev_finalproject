/**
 * Interest Rate Calculator
 *
 * Business logic is kept in small pure functions so it can be unit-tested
 * with Jasmine (see spec/scriptSpec.js); `calculate` wires them to the DOM.
 */

/**
 * Simple interest: (principal * rate * time) / 100
 * @param {number} principal  loan amount
 * @param {number} rate       yearly interest rate in percent
 * @param {number} time       duration in years
 * @returns {number}
 */
const calculateSimpleInterest = (principal, rate, time) => {
  return (principal * rate * time) / 100;
};

/**
 * Total payable amount: principal + interest
 * @param {number} principal
 * @param {number} interestAmount
 * @returns {number}
 */
const calculateTotalPayableAmount = (principal, interestAmount) => {
  return principal + interestAmount;
};

/**
 * Reads a numeric input field. Returns 0 when the element is missing or the
 * value is empty / not a number, so the maths never throws a TypeError.
 * @param {string} id
 * @returns {number}
 */
const readNumberInput = (id) => {
  const element = document.getElementById(id);
  if (!element) {
    return 0;
  }
  // Input values are always strings: convert them to numbers before use.
  const value = parseFloat(element.value);
  return Number.isNaN(value) ? 0 : value;
};

/**
 * Click handler for the Calculate button: reads the inputs, computes the
 * interest and total, and renders the result.
 */
const calculate = () => {
  const p = readNumberInput('principal');
  const r = readNumberInput('rate');
  const t = readNumberInput('time');

  const simpleInterest = calculateSimpleInterest(p, r, t);
  const amount = calculateTotalPayableAmount(p, simpleInterest);

  const result = document.getElementById('result');
  if (!result) {
    return;
  }

  result.innerHTML = `
    <div>Principal Amount: <span>${p.toFixed(2)}</span></div>
    <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
    <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};

// Expose `calculate` for the inline onclick handler. With Webpack the code is
// wrapped in a module scope, so the function must be attached to `window`.
if (typeof window !== 'undefined') {
  window.calculate = calculate;
}

// Export the pure functions for Jasmine (Node/CommonJS) without breaking the
// browser, where `module` is not defined.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculateSimpleInterest, calculateTotalPayableAmount, calculate };
}
