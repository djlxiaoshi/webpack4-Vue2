/**
 * @Author JohnLi
 * @Date 2018/5/23 20:30
 */
import { typeCheck, isString } from '../../src/test.js'
describe('index.js的测试', function () {
  before (function () {
    console.log('start test')
  })
  it('djlxs是字符串', function() {
    typeCheck('djlxs').should.equal('string')
  })
  it('1应该是数字', function() {
    typeCheck(1).should.equal('number')
  })
  it('"1" 应该是字符', function() {
    isString('1').should.equal(true)
  })
  after (function () {
    console.log('end test')
  })
})