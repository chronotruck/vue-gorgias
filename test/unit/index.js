import Vue from 'vue'
import plugin from '../../src/index'

Vue.config.productionTip = false
Vue.use(plugin, {
  apiKey: 'hello',
  chatId: 'world'
})

// require all test files
const testsContext = require.context('./', true, /\.test/)
testsContext.keys().forEach(testsContext)
