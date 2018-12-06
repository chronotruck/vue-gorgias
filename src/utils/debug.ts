import GorgiasOptions from './../interfaces/GorgiasOptions'

/**
 * @function logDebug
 * @param {string} message
 */
export function logDebug (message: String, p: GorgiasOptions): void {
  if (p.debug) console.log(`Gorgias: ${message}`)
}
