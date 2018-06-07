import Vue from 'vue'
import Counter from '../../src/components/Counter.vue'
import {mount} from 'vue-test-utils'
describe('Counter.vue', () => {

  it('点击按钮后, count的值应该为1',  () => {
    const wrapper = mount(Counter);
    wrapper.find('button').trigger('click')
    // 断言:count的值应该是数字1
    expect(wrapper.vm.count).to.equal(1);
  })
})
