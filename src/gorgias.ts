import { logDebug } from './utils/debug'
import GorgiasOptions from './interfaces/GorgiasOptions'
import GorgiasUserData from './interfaces/GorgiasUserData'

export default class Gorgias {
  private params: GorgiasOptions = {
    apiKey: null,
    chatId: null,
    injectCSS: null,
    debug: false
  }
  private scriptTag: Element
  private BASE_URL: String = 'https://config.gorgias.io/production/'

  constructor (params: GorgiasOptions | undefined) {
    const overrideParams = Object.assign({}, this.params, params);

    if (!overrideParams.apiKey) throw new Error('API key is missing.')
    if (!overrideParams.chatId) throw new Error('Chat ID is missing.')

    this.params = overrideParams
    this.scriptTag = document.createElement('script')
  }

  private getScriptSrc (): string {
    return `${this.BASE_URL}${this.params.apiKey}/chat/${this.params.chatId}.js`
  }

  inject (): void {
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.gorgiasChatParameters = {}
      const gorgiasChat = document.createElement('div')
      gorgiasChat.setAttribute('id', 'gorgias-chat')

      this.scriptTag.setAttribute('src', this.getScriptSrc())
      this.scriptTag.setAttribute('defer', 'defer')

      gorgiasChat.appendChild(this.scriptTag)
      document.body.appendChild(gorgiasChat)
    } else {
      throw new Error('Could not inject Gorgias script in the DOM.')
    }
  }

  /**
   * @function callback
   * @param {function} callback
   */
  ready (callback: Function): void {
    logDebug('Ready function called.', this.params)
    if ('GorgiasChat' in window) {
      logDebug('Script was already loaded, run callback.', this.params)
      this.updateCSS()
      callback()
    } else {
      this.scriptTag.addEventListener('load', () => {
        logDebug('Script loaded, run callback.', this.params)
        this.updateCSS()
        callback()
      })
    }
  }

  /**
   * Inject a link tag in the iframe element to change the Gorgias's button
   * position.
   * @function updateCSS
   */
  updateCSS (): void {
    if (this.params.injectCSS) {
      const iframe: HTMLIFrameElement | null = document.querySelector('#gorgias-web-messenger-container')
      logDebug('Update CSS called.', this.params)
      if (iframe) {
        try {
          const link = document.createElement('link')
          link.setAttribute('href', this.params.injectCSS)
          link.setAttribute('rel', 'stylesheet')
          link.setAttribute('type', 'text/css');

          // @ts-ignore
          iframe.contentDocument.head.appendChild(link)
        } catch (e) {
          console.error('Gorgias: Could not append CSS in Gorgias iframe.', e)
        }
      }
    }
  }

  /**
   * @function updateUser
   * @param {object} userData
   * @param {string} userData.email
   * @param {string} userData.givenName
   * @param {string} userData.surname
   */
  updateUser (userData: GorgiasUserData): void {
    if (typeof window !== 'undefined' && 'Smooch' in window) {
      logDebug('Update user requested.', this.params)
      // @ts-ignore
      window['Smooch'].on('ready', () => {
        logDebug('Smooch is ready, can request update.', this.params)
        // @ts-ignore
        window['Smooch'].updateUser(userData)
          .then(() => {
            logDebug('User data update done.', this.params)
          })
          .catch((err: Error) => {
            console.error('Gorgias: ', err)
          })
      })
    }
  }
}
