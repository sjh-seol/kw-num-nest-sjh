// lib.test.js
const lib = require('./lib');

test('test identify prime numbers', () => {
    expect(lib.prime(2)).toBe(true);
    expect(lib.prime(6)).toBe(false);
    expect(lib.prime(17)).toBe(true);
    expect(lib.prime(1)).toBe(false);
});

test('test factorial', () => {
    expect(lib.factorial(5)).toBe(120);
    expect(lib.factorial(0)).toBe(1);
    expect(lib.factorial(1)).toBe(1);
    expect(lib.factorial(7)).toBe(5040);
});
