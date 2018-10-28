import generateHash from './generateHash'

test('generateHash() is a string', () => {
  expect(typeof generateHash()).toBe("string")
})
