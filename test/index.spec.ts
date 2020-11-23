import { expect } from 'chai'
import { add } from '../src/index'
describe('add test', () => {
  it('Should return 3', () => {
    const result = add(1, 2)
    expect(result).to.equal(3)
  })
})
