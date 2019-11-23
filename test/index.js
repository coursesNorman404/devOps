const sum = require('../')
const assert = require('assert')

describe('Sum', () => {
  it("Suma de numeros positicos", () => {
    assert.equal(sum(3, 5), 8)
  })
  it("Suma de numeros negativos", () => {
    assert.equal(sum(3, -5), -2)
  })
  it("Suma de decimales", () => {
    assert.equal(sum(3.5, 7.1), 10.6)
  })
})