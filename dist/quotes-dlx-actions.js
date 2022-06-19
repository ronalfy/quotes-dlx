/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./src/js/tweet-actions/actions.js ***!
  \*****************************************/
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-undef */

/**
 * Main QuotesDLX front-end JS.
 */
(function () {
  var __ = wp.i18n.__; // Gather all wrappers.

  var wrappers = document.querySelectorAll('.quotes-dlx-wrapper');
  wrappers.forEach(function (wrapper) {
    // Click to copy quote.
    var copyQuoteWrapper = wrapper.querySelector('.quotes-dlx-meatball-menu-item-copy-quote');

    if (null !== copyQuoteWrapper) {
      copyQuoteWrapper.querySelector('button').addEventListener('click', function (e) {
        copyQuoteCallback(e, copyQuoteWrapper, wrapper);
      });
    } // Click to copy Tweet.


    var copyTweetWrapper = wrapper.querySelector('.quotes-dlx-meatball-menu-item-copy-tweet');

    if (null !== copyTweetWrapper) {
      copyTweetWrapper.querySelector('button').addEventListener('click', function (e) {
        copyTweetCallback(e, copyTweetWrapper, wrapper);
      });
    } // Click to copy link.


    var copyLinkWrapper = wrapper.querySelector('.quotes-dlx-meatball-menu-item-copy-link');

    if (null !== copyLinkWrapper) {
      copyLinkWrapper.querySelector('button').addEventListener('click', function (e) {
        copyLinkCallback(e, copyLinkWrapper, wrapper);
      });
    } // Click to Tweet.


    var dlxTweetButton = wrapper.querySelector('button.quotes-dlx-button');

    if (null !== dlxTweetButton) {
      dlxTweetButton.addEventListener('click', function (e) {
        tweet(e);
      });
    }

    var tweetButtonWrapper = wrapper.querySelector('.quotes-dlx-meatball-menu-item-tweet-this > button');

    if (null !== tweetButtonWrapper) {
      tweetButtonWrapper.addEventListener('click', function (e) {
        tweet(e);
      });
    }
  });
  /**
   * Do some behavior when the Copy Quote button is clicked.
   *
   * @param {Object}  event           Event object.
   * @param {element} listItemElement Wrapper Element.
   * @param {element} parentElement   Wrapper Element.
   */

  var copyQuoteCallback = function copyQuoteCallback(event, listItemElement, parentElement) {
    var text = listItemElement.getAttribute('data-text-full');
    var copyBlog = new Blob([text], {
      type: 'text/html'
    });
    var data = [new ClipboardItem(_defineProperty({}, copyBlog.type, copyBlog))];

    var successMessage = __('The Quote has been copied to your clipboard.', 'quotes-dlx');

    var failMessage = __('The Quote text could not be copied.', 'quotes-dlx');

    copyText(data, successMessage, failMessage, listItemElement, parentElement, copyQuoteCallback);
  };
  /**
   * Do some behavior when the Copy Quote button is clicked.
   *
   * @param {Object}  event           Event object.
   * @param {element} listItemElement Wrapper Element.
   * @param {element} parentElement   Wrapper Element.
   */


  var copyTweetCallback = function copyTweetCallback(event, listItemElement, parentElement) {
    var text = listItemElement.querySelector('.quotes-dlx-copy-tweet-textarea textarea').textContent.trim();
    var copyBlog = new Blob([text], {
      type: 'text/plain'
    });
    var data = [new ClipboardItem(_defineProperty({}, copyBlog.type, copyBlog))];

    var successMessage = __('The Tweet has been copied to your clipboard.', 'quotes-dlx');

    var failMessage = __('The Tweet text could not be copied.', 'quotes-dlx');

    copyText(data, successMessage, failMessage, listItemElement, parentElement, copyTweetCallback);
  };
  /**
   * Do some behavior when the Copy Link button is clicked.
   *
   * @param {Object}  event           Event object.
   * @param {element} listItemElement Wrapper Element.
   * @param {element} parentElement   Wrapper Element.
   */


  var copyLinkCallback = function copyLinkCallback(event, listItemElement, parentElement) {
    var text = listItemElement.getAttribute('data-url');
    var copyBlog = new Blob([text], {
      type: 'text/plain'
    });
    var data = [new ClipboardItem(_defineProperty({}, copyBlog.type, copyBlog))];

    var successMessage = __('The Link to this Quote has been copied to your clipboard.', 'quotes-dlx');

    var failMessage = __('The Link could not be copied.', 'quotes-dlx');

    copyText(data, successMessage, failMessage, listItemElement, parentElement, copyQuoteCallback);
  };
  /**
   * Copy text to clipboard.
   *
   * @param {ClipboardItem} data            Data to copy.
   * @param {string}        successMessage  Success message for a11y.
   * @param {string}        failMessage     Fail message for a11y.
   * @param {element}       listItemElement List item element.
   * @param {element}       parentElement   Parent element (wrapper).
   * @param {Function}      callback        Callback function.
   */


  var copyText = function copyText(data, successMessage, failMessage, listItemElement, parentElement, callback) {
    navigator.clipboard.write(data).then(function () {
      // Change the styling of the LI.
      var copyDiv = document.createElement('div'); // Get a copy of the button.

      var buttonClone = listItemElement.querySelector('button').cloneNode(true);
      copyDiv.style.cssText = 'background-color: green; color: #FFF; text-align: center; padding: 10px 20px;';
      copyDiv.textContent = __('Copied!', 'quotes-dlx');
      listItemElement.querySelector('button').replaceWith(copyDiv);
      wp.a11y.speak(successMessage, 'assertive');
      setTimeout(function () {
        copyDiv.replaceWith(buttonClone);
        buttonClone.addEventListener('click', function (e) {
          callback(e, listItemElement, parentElement);
        });
      }, 1500);
    }, function () {
      wp.a11y.speak(failMessage, 'assertive');
    });
  };

  var tweet = function tweet(e) {
    var tweetButton = e.target;
    var element = e.target.nodeName.toLowerCase(); // Check element type.

    if ('span' === element) {
      tweetButton = tweetButton.parentElement;
    }

    var hashtags = tweetButton.getAttribute('data-hashtags');
    var tweetText = tweetButton.getAttribute('data-tweet');
    var username = tweetButton.getAttribute('data-username');
    var permalink = tweetButton.getAttribute('data-url');
    var newTweet = '';

    if (username !== '' && username !== null) {
      newTweet += '&via=' + username;
    }

    if (permalink !== '' && permalink !== null) {
      newTweet += '&url=' + permalink.trim();
    }

    if (hashtags !== '' && hashtags !== null) {
      newTweet += '&hashtags=' + hashtags;
    }

    if (tweetText !== '' && tweetText !== null) {
      newTweet += '&text=' + tweetText + "\n\r";
    }

    if (newTweet !== '') {
      newTweet = 'https://twitter.com/intent/tweet?' + newTweet;
    } // Replace case if first item has an ampsersand.


    newTweet = newTweet.replace('?&', '?');
    window.open(newTweet, '_blank');
  };
})();
/******/ })()
;
//# sourceMappingURL=quotes-dlx-actions.js.map