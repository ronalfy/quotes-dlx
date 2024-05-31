/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/js/turnstile/frontend.js ***!
  \**************************************/
/**
 * Turnstile JS functionality.
 */

/**
 * This is the main callback for Cloudflare.
 */
window.qdlxInitiateTurnstile = function () {
  // Check that turnstile is present.
  if (typeof turnstile === 'undefined') {
    return;
  }

  /**
   * This is the callback for when the user has filled out the textarea.
   * We wait until the textarea is filled out to load turnstile to avoid the 300 second timeout of the token.
   */
  var turnstileBeginRender = function turnstileBeginRender() {
    // Now init turnstile.
    var widgetId = turnstile.render('#qdlx-turnstile', {
      sitekey: qdlx_email.turnstile_site_key,
      callback: function callback(token) {
        setTimeout(function () {
          // Reset the widget.
          turnstile.reset(widgetId);
        }, 300000); // 300 seconds (5 mins).
      },
      size: qdlx_email.turnstile_size,
      theme: qdlx_email.turnstile_theme,
      language: qdlx_email.turnstile_language
    });
  };
  turnstileBeginRender();
};
/******/ })()
;
//# sourceMappingURL=quotes-dlx-turnstile-frontend.js.map