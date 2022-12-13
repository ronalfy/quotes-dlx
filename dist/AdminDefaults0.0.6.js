"use strict";
(self["webpackChunkquotes_dlx"] = self["webpackChunkquotes_dlx"] || []).push([["AdminDefaults0.0.6"],{

/***/ "./src/js/admin-panel/views/AdminDefaults.js":
/*!***************************************************!*\
  !*** ./src/js/admin-panel/views/AdminDefaults.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/text-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/form-token-field/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/toggle-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/radio-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/button-group/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var use_async_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-async-resource */ "./node_modules/use-async-resource/lib/index.js");
/* harmony import */ var use_async_resource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_async_resource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_icons_Gear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/icons/Gear */ "./src/js/components/icons/Gear.js");
/* harmony import */ var _utils_SendCommand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/SendCommand */ "./src/js/utils/SendCommand.js");
/* harmony import */ var _admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin-components/Notice */ "./src/js/admin-panel/admin-components/Notice/index.js");
/* harmony import */ var _admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../admin-components/Loaders/AdminDefaultsLoader */ "./src/js/admin-panel/admin-components/Loaders/AdminDefaultsLoader.js");
/* harmony import */ var _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/icons/CircularExplanation */ "./src/js/components/icons/CircularExplanation.js");
/* harmony import */ var _validation_twitter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../validation/twitter */ "./src/js/validation/twitter.js");
/* harmony import */ var _components_icons_CircularInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/icons/CircularInfo */ "./src/js/components/icons/CircularInfo.js");
/* harmony import */ var _contexts_TabsContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../contexts/TabsContext */ "./src/js/admin-panel/contexts/TabsContext.js");
/* harmony import */ var _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/icons/Spinner */ "./src/js/components/icons/Spinner.js");
/* harmony import */ var _admin_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../admin-components/ErrorBoundary */ "./src/js/admin-panel/admin-components/ErrorBoundary/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-unused-vars */

















var retrieveDefaults = function retrieveDefaults() {
  return (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_5__["default"])('quotes_dlx_retrieve_admin_options_defaults', {
    nonce: quotes_dlx_admin.options_retrieve_nonce
  });
};

var AdminDefaults = function AdminDefaults(props) {
  var _useAsyncResource = (0,use_async_resource__WEBPACK_IMPORTED_MODULE_2__.useAsyncResource)(retrieveDefaults, []),
      _useAsyncResource2 = _slicedToArray(_useAsyncResource, 2),
      defaults = _useAsyncResource2[0],
      getDefaults = _useAsyncResource2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_13__["default"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Could not load admin defaults.', 'quotes-dlx'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "https://dlxplugins.com/support/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "DLX Plugins Support"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Interface, _extends({
    defaults: defaults
  }, props))));
};

var Interface = function Interface(props) {
  var _errors$twitterUserna, _errors$shareButtonTe2, _errors$anchorPrefix3, _errors$anchorPrefix4, _errors$maximumWidth3, _errors$maximumWidth4;

  var localStorageKey = 'quotes_dlx_form_defaults';

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_TabsContext__WEBPACK_IMPORTED_MODULE_11__["default"]),
      blockDefaultsDirtyCount = _useContext.blockDefaultsDirtyCount,
      setBlockDefaultsDirtyCount = _useContext.setBlockDefaultsDirtyCount;

  var defaults = props.defaults;
  var response = defaults();
  var _response$data = response.data,
      data = _response$data.data,
      success = _response$data.success;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.tweet_button_enabled),
      _useState2 = _slicedToArray(_useState, 2),
      showButtonOptions = _useState2[0],
      setShowButtonOptions = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.tweet_button_display),
      _useState4 = _slicedToArray(_useState3, 2),
      buttonDisplay = _useState4[0],
      setButtonDisplay = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.tweet_button_enabled),
      _useState6 = _slicedToArray(_useState5, 2),
      isTwitterButtonEnabled = _useState6[0],
      setIsTwitterButtonEnabled = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.facebook_button_enabled),
      _useState8 = _slicedToArray(_useState7, 2),
      isFacebookButtonEnabled = _useState8[0],
      setIsFacebookButtonEnabled = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.has_anchor),
      _useState10 = _slicedToArray(_useState9, 2),
      anchorDisplay = _useState10[0],
      setAnchorDisplay = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.enable_links_in_tweet),
      _useState12 = _slicedToArray(_useState11, 2),
      enableLinks = _useState12[0],
      setEnableLinks = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.url_shortener),
      _useState14 = _slicedToArray(_useState13, 2),
      enableUrlShortener = _useState14[0],
      setEnableUrlShortener = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState16 = _slicedToArray(_useState15, 2),
      loading = _useState16[0],
      setLoading = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      saving = _useState18[0],
      setSaving = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState20 = _slicedToArray(_useState19, 2),
      isSaved = _useState20[0],
      setIsSaved = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState22 = _slicedToArray(_useState21, 2),
      resetting = _useState22[0],
      setResetting = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState24 = _slicedToArray(_useState23, 2),
      isReset = _useState24[0],
      setIsReset = _useState24[1];

  var maximum_width = data.maximum_width,
      maximum_width_unit = data.maximum_width_unit,
      twitter_username = data.twitter_username,
      hashtags = data.hashtags,
      align = data.align,
      tweet_button_enabled = data.tweet_button_enabled,
      share_button_text = data.share_button_text,
      tweet_button_alignment = data.tweet_button_alignment,
      tweet_icon_alignment = data.tweet_icon_alignment,
      tweet_button_display = data.tweet_button_display,
      has_anchor = data.has_anchor,
      anchor_prefix = data.anchor_prefix,
      enable_links_in_tweet = data.enable_links_in_tweet,
      url_shortening_service = data.url_shortening_service,
      url_shortener = data.url_shortener,
      facebook_button_enabled = data.facebook_button_enabled,
      icon_appearance = data.icon_appearance,
      facebook_share_button_text = data.facebook_share_button_text;

  var getDefaultValues = function getDefaultValues() {
    return {
      maximumWidth: maximum_width,
      maximumWidthUnit: maximum_width_unit,
      twitterUsername: twitter_username,
      hashtags: hashtags,
      align: align,
      tweetButtonEnabled: tweet_button_enabled,
      shareButtonText: share_button_text,
      tweetButtonAlignment: tweet_button_alignment,
      tweetIconAlignment: tweet_icon_alignment,
      tweetButtonDisplay: tweet_button_display,
      anchorPrefix: anchor_prefix,
      hasAnchor: has_anchor,
      enableLinksInTweet: enable_links_in_tweet,
      urlShorteningService: url_shortening_service,
      urlShortener: url_shortener,
      facebookButtonEnabled: facebook_button_enabled,
      facebookShareButtonText: facebook_share_button_text,
      iconAppearance: icon_appearance
    };
  };

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_14__.useForm)({
    defaultValues: getDefaultValues()
  }),
      register = _useForm.register,
      control = _useForm.control,
      handleSubmit = _useForm.handleSubmit,
      setValue = _useForm.setValue,
      getValues = _useForm.getValues,
      reset = _useForm.reset;

  var formValues = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_14__.useWatch)({
    control: control
  });

  var _useFormState = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_14__.useFormState)({
    control: control
  }),
      errors = _useFormState.errors,
      isDirty = _useFormState.isDirty,
      dirtyFields = _useFormState.dirtyFields,
      touchedFields = _useFormState.touchedFields;

  var onSubmit = function onSubmit(formData) {
    setSaving(true); // Populate possible empty hashtags.

    if (formData.hashtags.length === 0) {
      formData.hashtags = null;
    }

    (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_5__["default"])('quotes_dlx_save_admin_options_defaults', {
      nonce: quotes_dlx_admin.options_save_nonce,
      form_data: formData
    }).then(function (ajaxResponse) {
      var ajaxData = ajaxResponse.data.data;
      var ajaxSuccess = ajaxResponse.data.success;

      if (ajaxSuccess) {
        // Reset count.
        setBlockDefaultsDirtyCount(0); // Clear form dirty.

        reset(ajaxData);
        localStorage.setItem(localStorageKey, JSON.stringify(ajaxData));
        localStorage.removeItem(localStorageKey + '_dirty_fields');
        setIsSaved(true);
        setTimeout(function () {
          setIsSaved(false);
        }, 3000);
      } else {// Error stuff.
      }
    })["catch"](function (ajaxResponse) {}).then(function (ajaxResponse) {
      setSaving(false);
    });
  };

  var handleReset = function handleReset(e) {
    setResetting(true);
    (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_5__["default"])('quotes_dlx_reset_admin_options_defaults', {
      nonce: quotes_dlx_admin.options_save_nonce
    }).then(function (ajaxResponse) {
      var ajaxData = ajaxResponse.data.data;
      var ajaxSuccess = ajaxResponse.data.success;

      if (ajaxSuccess) {
        // Reset local storage.
        setBlockDefaultsDirtyCount(0); // Clear form dirty.

        reset(ajaxData);
        localStorage.setItem(localStorageKey, JSON.stringify(ajaxData));
        localStorage.removeItem(localStorageKey + '_dirty_fields'); // Reset toggles.

        setShowButtonOptions(ajaxData.tweetButtonEnabled);
        setEnableLinks(ajaxData.enableLinksInTweet);
        setEnableUrlShortener(ajaxData.urlShortener);
        setAnchorDisplay(ajaxData.hasAnchor);
        setButtonDisplay(ajaxData.tweetButtonDisplay);
        setIsReset(true);
        setTimeout(function () {
          setIsReset(false);
        }, 3000);
      } else {// Error stuff.
      }
    })["catch"](function (ajaxResponse) {}).then(function (ajaxResponse) {
      setResetting(false);
    });
  };

  var hasErrors = function hasErrors() {
    return Object.keys(errors).length > 0;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Get saved local storage JSON strings.
    var maybeSavedFormFields = localStorage.getItem(localStorageKey);
    var maybeDirtyFields = localStorage.getItem(localStorageKey + '_dirty_fields');

    if (null !== maybeSavedFormFields) {
      // Parse saved JSON string into JSON object.
      var savedFormFields = JSON.parse(maybeSavedFormFields); // If saved form fields, proceed with setting fields.

      if (Object.keys(savedFormFields.length > 0)) {
        var savedDirtyFields = {}; // Get any dirty fields.

        if (null !== maybeDirtyFields) {
          savedDirtyFields = JSON.parse(maybeDirtyFields);
        }

        for (var _i2 = 0, _Object$entries = Object.entries(savedFormFields); _i2 < _Object$entries.length; _i2++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          // If key is in saved dirty fields, set dirty.
          if (savedDirtyFields.hasOwnProperty(key)) {
            // Key is dirty, so set dirty.
            setValue(key, value, {
              shouldDirty: true,
              shouldValidate: true
            });
          } else {
            // Key is not dirty, so set value without dirty.
            setValue(key, value, {
              shouldDirty: false,
              shouldValidate: false
            });
          }
        }
      }
    }

    setLoading(false);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (saving || resetting || loading) {
      return;
    }

    if (isDirty || blockDefaultsDirtyCount > 0) {
      // Get current dirty fields.
      setBlockDefaultsDirtyCount(Object.keys(dirtyFields).length); // Save form values to local storage.

      localStorage.setItem(localStorageKey, JSON.stringify(formValues));
      localStorage.setItem(localStorageKey + '_dirty_fields', JSON.stringify(dirtyFields));
    }

    setLoading(false);
  }, [formValues]); // Get URL Shortening services (i.e., bitly, jetpack).

  var linkShortenerServices = [];

  if (quotes_dlx_admin.bitly_plugin_active) {
    linkShortenerServices.push({
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bitly', 'quotes-dlx'),
      value: 'bitly'
    });
  }

  if (quotes_dlx_admin.jetpack_plugin_active) {
    linkShortenerServices.push({
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Jetpack', 'quotes-dlx'),
      value: 'jetpack'
    });
  }

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_7__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons_Gear__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: 48,
    height: 48,
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "qdlx-admin__heading--text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block Defaults', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('These default options will automatically be set when you insert the Quotes block.', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "form-table",
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tweet Defaults', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "twitterUsername",
    control: control,
    rules: {
      validate: function validate(value) {
        if (value.length === 0) {
          return true;
        }

        return _validation_twitter__WEBPACK_IMPORTED_MODULE_9__["default"].txt.isValidUsername('@' + value);
      }
    },
    render: function render(_ref) {
      var _ref$field = _ref.field,
          _onChange = _ref$field.onChange,
          value = _ref$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tweet Credit', 'quotes-dlx'),
        className: "qdlx-admin__text-control",
        register: "tweet_credit",
        placeholder: "TwitterUsername",
        value: value,
        onChange: function onChange(currentValue) {
          var twitterUsername = '';

          if (currentValue.length > 0) {
            var replacement = currentValue.replace('@', ''); // Strip @ symbol.

            if (currentValue.length > 0) {
              var usernames = _validation_twitter__WEBPACK_IMPORTED_MODULE_9__["default"].txt.extractMentions('@' + replacement);

              if (typeof usernames[0] !== 'undefined') {
                twitterUsername = usernames[0];
              } else {
                twitterUsername = replacement;
              }
            }
          } // onChange's arg will send value into hook form


          _onChange(twitterUsername);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Leave this blank to have no default Twitter credit', 'quotes-dlx')
      });
    }
  }), 'validate' === ((_errors$twitterUserna = errors.twitterUsername) === null || _errors$twitterUserna === void 0 ? void 0 : _errors$twitterUserna.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The Twitter Username is Invalid.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "hashtags",
    control: control,
    render: function render(_ref2) {
      var _ref2$field = _ref2.field,
          _onChange2 = _ref2$field.onChange,
          value = _ref2$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["default"], {
        value: value,
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter hashtags separated by commas.', 'quotes-dlx'),
        className: "quotes-dlx-hashtag-fields",
        tokenizeOnSpace: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hashtags', 'quotes-dlx'),
        onChange: function onChange(tokens) {
          var filteredTokens = [];
          tokens.forEach(function (item, index) {
            var replacement = item.replace('#', ''); // Strip hashtag symbol.

            var hashtag = _validation_twitter__WEBPACK_IMPORTED_MODULE_9__["default"].txt.extractHashtags('#' + replacement); // Add it back in for extraction.
            // Check if array contains anything.

            if (typeof hashtag[0] !== 'undefined') {
              filteredTokens.push(hashtag[0]);
            }
          });

          _onChange2(filteredTokens);
        }
      });
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Defaults', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "tweetButtonEnabled",
    control: control,
    render: function render(_ref3) {
      var _ref3$field = _ref3.field,
          _onChange3 = _ref3$field.onChange,
          value = _ref3$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Click to Tweet Button', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          setIsTwitterButtonEnabled(boolValue);

          _onChange3(boolValue);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable or Disable the Click to Tweet button. This is useful if you want to hide the button and use the block for just quotes.', 'quotes-dlx')
      });
    }
  }), isTwitterButtonEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "shareButtonText",
    control: control,
    rules: {
      required: true
    },
    render: function render(_ref4) {
      var _errors$shareButtonTe;

      var field = _ref4.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({}, field, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click to Tweet Text', 'quotes-dlx'),
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx-admin__text-control', {
          'has-error': 'required' === ((_errors$shareButtonTe = errors.shareButtonText) === null || _errors$shareButtonTe === void 0 ? void 0 : _errors$shareButtonTe.type),
          'is-required': true
        }),
        "aria-required": "true",
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This text will be the text displayed for the Click to Tweet button', 'quotes-dlx')
      }));
    }
  }), 'required' === ((_errors$shareButtonTe2 = errors.shareButtonText) === null || _errors$shareButtonTe2 === void 0 ? void 0 : _errors$shareButtonTe2.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_8__["default"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "facebookButtonEnabled",
    control: control,
    render: function render(_ref5) {
      var _ref5$field = _ref5.field,
          _onChange4 = _ref5$field.onChange,
          value = _ref5$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Share on Facebook Button', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: isFacebookButtonEnabled,
        onChange: function onChange(boolValue) {
          setIsFacebookButtonEnabled(boolValue);

          _onChange4(boolValue);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable or Disable the Share on Facebook button. If enabled, this will allow your users to share the quote on Facebook.', 'quotes-dlx')
      });
    }
  }), isFacebookButtonEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "facebookShareButtonText",
    control: control,
    rules: {
      required: true
    },
    render: function render(_ref6) {
      var _errors$facebookButto;

      var field = _ref6.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({}, field, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Facebook Button Text', 'quotes-dlx'),
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx-admin__text-control', {
          'has-error': 'required' === ((_errors$facebookButto = errors.facebookButtonEnabled) === null || _errors$facebookButto === void 0 ? void 0 : _errors$facebookButto.type),
          'is-required': true
        }),
        "aria-required": "true",
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This text will be the text displayed for the Facebook share button', 'quotes-dlx')
      }));
    }
  }), (isFacebookButtonEnabled || isTwitterButtonEnabled) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    control: control,
    name: "tweetButtonDisplay",
    render: function render(_ref7) {
      var _ref7$field = _ref7.field,
          _onChange5 = _ref7$field.onChange,
          value = _ref7$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Display', 'quotes-dlx'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose to show just text, just an icon, or both.', 'quotes-dlx'),
        selected: value,
        onChange: function onChange(newValue) {
          setButtonDisplay(newValue);

          _onChange5(newValue);
        },
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show text and icon', 'quotes-dlx'),
          value: 'full'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show text only', 'quotes-dlx'),
          value: 'text'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show icon only', 'quotes-dlx'),
          value: 'icon'
        }]
      });
    }
  }), getValues('tweetButtonDisplay') === 'icon' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    control: control,
    name: "iconAppearance",
    render: function render(_ref8) {
      var _ref8$field = _ref8.field,
          _onChange6 = _ref8$field.onChange,
          value = _ref8$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon Appearance', 'quotes-dlx'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Display the icons as buttons or choose transparent for no button appearance.', 'quotes-dlx'),
        selected: value,
        onChange: function onChange(newValue) {
          _onChange6(newValue);
        },
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button', 'quotes-dlx'),
          value: 'button'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Transparent', 'quotes-dlx'),
          value: 'transparent'
        }]
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "tweetButtonAlignment",
    control: control,
    render: function render(_ref9) {
      var _ref9$field = _ref9.field,
          onClick = _ref9$field.onClick,
          value = _ref9$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["default"], {
        className: "qdlx-admin__button-group--align"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default Button Alignment', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["default"], {
        variant: "primary",
        icon: "align-pull-left",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Left', 'quotes-dlx'),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Left', 'quotes-dlx'),
        value: "left",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
          'is-active': 'left' === value
        }),
        onClick: function onClick(e) {
          setValue('tweetButtonAlignment', 'left', {
            shouldDirty: true
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["default"], {
        variant: "primary",
        icon: "align-center",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Center', 'quotes-dlx'),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Center', 'quotes-dlx'),
        value: "center",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
          'is-active': 'center' === value
        }),
        onClick: function onClick(e) {
          setValue('tweetButtonAlignment', 'center', {
            shouldDirty: true
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["default"], {
        variant: "primary",
        icon: "align-pull-right",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Right', 'quotes-dlx'),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Right', 'quotes-dlx'),
        value: "right",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
          'is-active': 'right' === value
        }),
        onClick: function onClick(e) {
          setValue('tweetButtonAlignment', 'right', {
            shouldDirty: true
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "components-base-control__help"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right alignment is recommended.', 'quotes-dlx')));
    }
  }), ('icon' === buttonDisplay || 'full' === buttonDisplay) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "tweetIconAlignment",
    control: control,
    render: function render(_ref10) {
      var _ref10$field = _ref10.field,
          onClick = _ref10$field.onClick,
          value = _ref10$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["default"], {
        className: "qdlx-admin__button-group--align"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tweet Icon Alignment', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["default"], {
        variant: "primary",
        icon: "align-pull-left",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Left', 'quotes-dlx'),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Left', 'quotes-dlx'),
        value: "left",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
          'is-active': 'left' === value
        }),
        onClick: function onClick(e) {
          setValue('tweetIconAlignment', 'left', {
            shouldDirty: true
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["default"], {
        variant: "primary",
        icon: "align-pull-right",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Right', 'quotes-dlx'),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Right', 'quotes-dlx'),
        value: "right",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
          'is-active': 'right' === value
        }),
        onClick: function onClick(e) {
          setValue('tweetIconAlignment', 'right', {
            shouldDirty: true
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "components-base-control__help"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Adjust the icon to the left or right of the button.', 'quotes-dlx')));
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link Settings', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A link to your post is on by default. You can customize the link appearance here.'),
    status: "info",
    politeness: "polite",
    inline: false,
    icon: _components_icons_CircularInfo__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "enableLinksInTweet",
    control: control,
    render: function render(_ref11) {
      var _ref11$field = _ref11.field,
          _onChange7 = _ref11$field.onChange,
          value = _ref11$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Links in the Tweet', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          setEnableLinks(boolValue);

          _onChange7(boolValue);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can disable all links from showing in the Tweets', 'quotes-dlx')
      });
    }
  }), enableLinks && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "hasAnchor",
    control: control,
    render: function render(_ref12) {
      var _ref12$field = _ref12.field,
          _onChange8 = _ref12$field.onChange,
          value = _ref12$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Anchors', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          setAnchorDisplay(boolValue);

          _onChange8(boolValue);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Anchors are appended to the end of a URL.', 'quotes-dlx')
      });
    }
  }), anchorDisplay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "anchorPrefix",
    control: control,
    rules: {
      required: true,
      pattern: /^[a-z]+$/i
    },
    render: function render(_ref13) {
      var _errors$anchorPrefix, _errors$anchorPrefix2;

      var field = _ref13.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({}, field, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Anchor Prefix', 'quotes-dlx'),
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx-admin__text-control', {
          'has-error': 'pattern' === ((_errors$anchorPrefix = errors.anchorPrefix) === null || _errors$anchorPrefix === void 0 ? void 0 : _errors$anchorPrefix.type) || 'required' === ((_errors$anchorPrefix2 = errors.anchorPrefix) === null || _errors$anchorPrefix2 === void 0 ? void 0 : _errors$anchorPrefix2.type),
          'is-required': true
        }),
        "aria-required": "true",
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The anchor prefix will display at the end of your post URL.', 'quotes-dlx')
      }));
    }
  }), 'required' === ((_errors$anchorPrefix3 = errors.anchorPrefix) === null || _errors$anchorPrefix3 === void 0 ? void 0 : _errors$anchorPrefix3.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), 'pattern' === ((_errors$anchorPrefix4 = errors.anchorPrefix) === null || _errors$anchorPrefix4 === void 0 ? void 0 : _errors$anchorPrefix4.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please use only lowercase letters.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_8__["default"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "urlShortener",
    control: control,
    render: function render(_ref14) {
      var _ref14$field = _ref14.field,
          _onChange9 = _ref14$field.onChange,
          value = _ref14$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable URL Shortener', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          setEnableUrlShortener(boolValue);

          _onChange9(boolValue);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A URL shortener shortens your link so you can have more characters in your Tweet.', 'quotes-dlx')
      });
    }
  }), enableUrlShortener && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Both Bitly and Jetpack are supported. You will need the plugins activated and configured to set a default.', 'quotes-dlx'),
    status: "info",
    politeness: "polite",
    inline: false,
    icon: _components_icons_CircularInfo__WEBPACK_IMPORTED_MODULE_10__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://wordpress.org/plugins/wp-bitly/",
    target: "_blank",
    rel: "noreferrer"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Visit the Bitly plugin', 'quotes-dlx')), "\xA0|\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://wordpress.org/plugins/jetpack/",
    target: "_blank",
    rel: "noreferrer"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Visit the Jetpack plugin', 'quotes-dlx')))), linkShortenerServices.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    control: control,
    name: "urlShorteningService",
    render: function render(_ref15) {
      var _ref15$field = _ref15.field,
          _onChange10 = _ref15$field.onChange,
          value = _ref15$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('URL Shortening Service', 'quotes-dlx'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose a URL shortening service. Select none for no link shortener.', 'quotes-dlx'),
        selected: value,
        onChange: function onChange(shorteningValue) {
          _onChange10(shorteningValue);
        },
        options: linkShortenerServices
      });
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Container Settings', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "maximumWidth",
    control: control,
    rules: {
      required: true,
      pattern: /^[0-9]+$/i
    },
    render: function render(_ref16) {
      var _errors$maximumWidth, _errors$maximumWidth2;

      var field = _ref16.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({}, field, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block Maximum Width', 'quotes-dlx'),
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx-admin__text-control', {
          'has-error': 'pattern' === ((_errors$maximumWidth = errors.maximumWidth) === null || _errors$maximumWidth === void 0 ? void 0 : _errors$maximumWidth.type) || 'required' === ((_errors$maximumWidth2 = errors.maximumWidth) === null || _errors$maximumWidth2 === void 0 ? void 0 : _errors$maximumWidth2.type),
          'is-required': true
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('If you have a large layout for your theme, this will be the maximum width of the block.', 'quotes-dlx'),
        "aria-required": "true"
      }));
    }
  }), 'required' === ((_errors$maximumWidth3 = errors.maximumWidth) === null || _errors$maximumWidth3 === void 0 ? void 0 : _errors$maximumWidth3.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), 'pattern' === ((_errors$maximumWidth4 = errors.maximumWidth) === null || _errors$maximumWidth4 === void 0 ? void 0 : _errors$maximumWidth4.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Maximum width can only be numbers.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    control: control,
    name: "maximumWidthUnit",
    render: function render(_ref17) {
      var _ref17$field = _ref17.field,
          onChange = _ref17$field.onChange,
          value = _ref17$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Maximum Width Unit', 'quotes-dlx'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a unit for the max-width.', 'quotes-dlx'),
        selected: value,
        onChange: onChange,
        options: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: 'vw',
          value: 'vw'
        }]
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "align",
    control: control,
    render: function render(_ref18) {
      var _ref18$field = _ref18.field,
          onClick = _ref18$field.onClick,
          value = _ref18$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["default"], {
        className: "qdlx-admin__button-group--align"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default block alignment', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["default"], {
        variant: "primary",
        icon: "align-pull-left",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Left', 'quotes-dlx'),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Left', 'quotes-dlx'),
        value: "left",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
          'is-active': 'left' === value
        }),
        onClick: function onClick(e) {
          setValue('align', 'left', {
            shouldDirty: true
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["default"], {
        variant: "primary",
        icon: "align-center",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Center', 'quotes-dlx'),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Center', 'quotes-dlx'),
        value: "center",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
          'is-active': 'center' === value
        }),
        onClick: function onClick(e) {
          setValue('align', 'center', {
            shouldDirty: true
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["default"], {
        variant: "primary",
        icon: "align-pull-right",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Right', 'quotes-dlx'),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Right', 'quotes-dlx'),
        value: "right",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
          'is-active': 'right' === value
        }),
        onClick: function onClick(e) {
          setValue('align', 'right', {
            shouldDirty: true
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["default"], {
        variant: "primary",
        icon: "align-wide",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Wide Width', 'quotes-dlx'),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Wide Width', 'quotes-dlx'),
        value: "wide",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
          'is-active': 'wide' === value
        }),
        onClick: function onClick(e) {
          setValue('align', 'wide', {
            shouldDirty: true
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["default"], {
        variant: "primary",
        icon: "align-full-width",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Full Width', 'quotes-dlx'),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Full Width', 'quotes-dlx'),
        value: "full",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
          'is-active': 'full' === value
        }),
        onClick: function onClick(e) {
          setValue('align', 'full', {
            shouldDirty: true
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "components-base-control__help"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center alignment is recommended.', 'quotes-dlx')));
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx__btn qdlx__btn-primary qdlx__btn--icon-right', {
      'has-error': hasErrors()
    }, {
      'has-icon': saving
    }, {
      'is-saving': {
        saving: saving
      }
    }),
    type: "submit",
    text: saving ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Saving…', 'quotes-dlx') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save Defaults', 'quotes-dlx'),
    icon: saving ? _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_12__["default"] : false,
    iconSize: "18",
    iconPosition: "right",
    disabled: saving || resetting
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx__btn qdlx__btn-danger qdlx__btn--icon-right', {
      'has-icon': resetting
    }, {
      'is-resetting': {
        resetting: resetting
      }
    }),
    type: "button",
    text: resetting ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Resetting…', 'quotes-dlx') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset Defaults', 'quotes-dlx'),
    icon: resetting ? _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_12__["default"] : false,
    iconSize: "18",
    iconPosition: "right",
    disabled: saving || resetting,
    onClick: function onClick(e) {
      setResetting(true);
      handleReset(e);
    }
  })), hasErrors() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('There are form validation errors. Please correct them above.'),
    status: "error",
    politeness: "polite"
  }), isSaved && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your settings have been saved.'),
    status: "success",
    politeness: "assertive"
  }), isReset && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your settings have been reset to defaults.'),
    status: "success",
    politeness: "assertive"
  }))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminDefaults);

/***/ })

}]);
//# sourceMappingURL=AdminDefaults0.0.6.js.map