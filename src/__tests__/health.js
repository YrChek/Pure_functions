import healthLevel from '../health';

test.each([
  ['critical', { name: 'Маг', health: 14 }, 'critical'],
  ['wounded_15', { name: 'Маг', health: 15 }, 'wounded'],
  ['wounded_50', { name: 'Маг', health: 50 }, 'wounded'],
  ['healthy', { name: 'Маг', health: 51 }, 'healthy'],
])('testing the "health Level" function with the "%s" status', (_, arry, expected) => {
  const result = healthLevel(arry);
  expect(result).toBe(expected);
});
