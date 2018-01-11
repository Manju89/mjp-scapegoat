/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 */
import SampleJS from "./SampleJS"

let sampleJS = new SampleJS();
module.exports = {
  escape: function(html) {
    return sampleJS.customMethod(html);
  },

  /**
   * Unescape special characters in the given string of html.
   *
   * @param  {String} html
   * @return {String}
   */
  unescape: function(html) {
    return String(html)
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, '\'')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }
};
