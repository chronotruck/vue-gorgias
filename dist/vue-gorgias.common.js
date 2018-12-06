/*!
 * vue-gorgias v1.0.0 
 * (c) 2018 William DA SILVA
 * Released under the MIT License.
 */
'use strict';

/**
 * @function logDebug
 * @param {string} message
 */
function logDebug(message, p) {
    if (p.debug)
        { console.log(("Gorgias: " + message)); }
}

var Gorgias = function Gorgias(params) {
    this.params = {
        apiKey: null,
        chatId: null,
        injectCSS: null,
        debug: false
    };
    this.BASE_URL = 'https://config.gorgias.io/production/';
    var overrideParams = Object.assign({}, this.params, params);
    if (!overrideParams.apiKey)
        { throw new Error('API key is missing.'); }
    if (!overrideParams.chatId)
        { throw new Error('Chat ID is missing.'); }
    this.params = overrideParams;
    this.scriptTag = document.createElement('script');
};
Gorgias.prototype.getScriptSrc = function getScriptSrc () {
    return ("" + (this.BASE_URL) + (this.params.apiKey) + "/chat/" + (this.params.chatId) + ".js");
};
Gorgias.prototype.inject = function inject () {
    if (typeof window !== 'undefined') {
        // @ts-ignore
        window.gorgiasChatParameters = {};
        var gorgiasChat = document.createElement('div');
        gorgiasChat.setAttribute('id', 'gorgias-chat');
        this.scriptTag.setAttribute('src', this.getScriptSrc());
        this.scriptTag.setAttribute('defer', 'defer');
        gorgiasChat.appendChild(this.scriptTag);
        document.body.appendChild(gorgiasChat);
    }
    else {
        throw new Error('Could not inject Gorgias script in the DOM.');
    }
};
/**
 * @function callback
 * @param {function} callback
 */
Gorgias.prototype.ready = function ready (callback) {
        var this$1 = this;

    logDebug('Ready function called.', this.params);
    if ('GorgiasChat' in window) {
        logDebug('Script was already loaded, run callback.', this.params);
        this.updateCSS();
        callback();
    }
    else {
        this.scriptTag.addEventListener('load', function () {
            logDebug('Script loaded, run callback.', this$1.params);
            this$1.updateCSS();
            callback();
        });
    }
};
/**
 * Inject a link tag in the iframe element to change the Gorgias's button
 * position.
 * @function updateCSS
 */
Gorgias.prototype.updateCSS = function updateCSS () {
    if (this.params.injectCSS) {
        var iframe = document.querySelector('#gorgias-web-messenger-container');
        logDebug('Update CSS called.', this.params);
        if (iframe) {
            try {
                var link = document.createElement('link');
                link.setAttribute('href', this.params.injectCSS);
                link.setAttribute('rel', 'stylesheet');
                link.setAttribute('type', 'text/css');
                // @ts-ignore
                iframe.contentDocument.head.appendChild(link);
            }
            catch (e) {
                console.error('Gorgias: Could not append CSS in Gorgias iframe.', e);
            }
        }
    }
};
/**
 * @function updateUser
 * @param {object} userData
 * @param {string} userData.email
 * @param {string} userData.givenName
 * @param {string} userData.surname
 */
Gorgias.prototype.updateUser = function updateUser (userData) {
        var this$1 = this;

    if (typeof window !== 'undefined' && 'Smooch' in window) {
        logDebug('Update user requested.', this.params);
        // @ts-ignore
        window['Smooch'].on('ready', function () {
            logDebug('Smooch is ready, can request update.', this$1.params);
            // @ts-ignore
            window['Smooch'].updateUser(userData)
                .then(function () {
                logDebug('User data update done.', this$1.params);
            })
                .catch(function (err) {
                console.error('Gorgias: ', err);
            });
        });
    }
};

var version = '1.0.0';
var install = function (Vue, options) {
    var gorgiasInstance = new Gorgias(options);
    gorgiasInstance.inject();
    Vue.gorgias = gorgiasInstance;
};
var plugin = {
    install: install,
    version: version
};
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

module.exports = plugin;
