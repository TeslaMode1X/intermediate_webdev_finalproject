const { calculateSimpleInterest, calculateTotalPayableAmount } = require('../src/script');

describe('Interest Rate Calculator', () => {
  it('calculates simple interest as (principal * rate * time) / 100', () => {
    const interest = calculateSimpleInterest(1000, 5, 1);
    expect(interest).toBe(50);
  });

  it('calculates the total payable amount as principal + interest', () => {
    const total = calculateTotalPayableAmount(1000, 50);
    expect(total).toBe(1050);
  });
});
