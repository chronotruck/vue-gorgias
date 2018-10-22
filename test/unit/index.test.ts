import assert from 'power-assert'
import { mount } from '@vue/test-utils'
import Vue from 'vue'

const Component = {
  name: 'my-comp',
  template: '<p>mounted</p>'
}

const _Vue = <any> Vue

describe('Vue-gorgias', () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = mount(Component)
  })

  it('should exposes the Gorgias object to Vue', () => {
    assert.equal(typeof _Vue.gorgias, 'object')
  })

  describe('ready', () => {
    it('should exposes the ready function', () => {
      assert.equal(typeof _Vue.gorgias.ready, 'function')
    })
  })

  describe('update user', () => {
    it('should exposes the updateUser function', () => {
      assert.equal(typeof _Vue.gorgias.updateUser, 'function')
    })
  })

  describe('update css', () => {
    it('should exposes the updateCSS function', () => {
      assert.equal(typeof _Vue.gorgias.updateCSS, 'function')
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })
})
