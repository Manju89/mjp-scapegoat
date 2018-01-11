module.exports = {
  escape: function(html) {
    let sampleJS = new SampleJS();
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

import SampleJS from "./SampleJS";

