import GorgiasOptions from './interfaces/GorgiasOptions';
import GorgiasUserData from './interfaces/GorgiasUserData';
export default class Gorgias {
    private params;
    private scriptTag;
    private BASE_URL;
    constructor(params: GorgiasOptions | undefined);
    private getScriptSrc;
    inject(): void;
    /**
     * @function callback
     * @param {function} callback
     */
    ready(callback: Function): void;
    /**
     * Inject a link tag in the iframe element to change the Gorgias's button
     * position.
     * @function updateCSS
     */
    updateCSS(): void;
    /**
     * @function updateUser
     * @param {object} userData
     * @param {string} userData.email
     * @param {string} userData.givenName
     * @param {string} userData.surname
     */
    updateUser(userData: GorgiasUserData): void;
}
