import GorgiasOptions from './GorgiasOptions';
import VueGorgias from './VueGorgias';
export declare type PluginFunction<T> = (Vue: VueGorgias, options?: T) => void;
export default interface VueGorgiasOptions {
    install: PluginFunction<GorgiasOptions>;
    version: String;
}
