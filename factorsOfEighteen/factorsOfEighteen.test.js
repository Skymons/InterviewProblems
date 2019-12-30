let factors = require('./factorsOfEighteen');

describe('Dynamic factors of dividend', () => {

  let dividend1 = 18;
  let dividend2 = 24;
  let dividend3 = 4;

  let nums = [2, 3, 4, 5, 6, 7, 8, 9];


  it('should return a string saying which numbers are factors of 18', () => {
    expect(factors(dividend1, nums)).toEqual(["2 is a factor of 18!", "3 is a factor of 18!", "6 is a factor of 18!", "9 is a factor of 18!"])
  })

  it('should return a string saying which numbers are factors of 24', () => {
    expect(factors(dividend2, nums)).toEqual(["2 is a factor of 24!", "3 is a factor of 24!", "4 is a factor of 24!", "6 is a factor of 24!", "8 is a factor of 24!"])
  })

  it('should return a string saying which numbers are factors of 4', () => {
    expect(factors(dividend3, nums)).toEqual(["2 is a factor of 4!", "4 is a factor of 4!"])
  })

})