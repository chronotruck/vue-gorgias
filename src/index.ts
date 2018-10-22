import _Vue from 'vue'
import GorgiasOptions from './interfaces/GorgiasOptions'
import VueGorgiasOptions, { PluginFunction } from './interfaces/VueGorgiasOptions'
import Gorgias from './gorgias';

const version = '__VERSION__'

interface Window {
  Vue: any
}

const install: PluginFunction<GorgiasOptions> = (Vue, options): void => {
  const gorgiasInstance = new Gorgias(options)
  gorgiasInstance.inject()
  Vue.gorgias = gorgiasInstance
}

const plugin: VueGorgiasOptions = {
  install,
  version
}

export default plugin

if (typeof window !== 'undefined' && (<any>window).Vue) {
  (<any>window).Vue.use(plugin)
}
