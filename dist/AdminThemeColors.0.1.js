(self["webpackChunkquotes_dlx"] = self["webpackChunkquotes_dlx"] || []).push([["AdminThemeColors.0.1"],{

/***/ "./src/js/admin-panel/views/AdminThemeColors.js":
/*!******************************************************!*\
  !*** ./src/js/admin-panel/views/AdminThemeColors.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var photoswipe_dynamic_caption_plugin_photoswipe_dynamic_caption_plugin_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css */ "./node_modules/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/select-control/index.js");
/* harmony import */ var use_async_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-async-resource */ "./node_modules/use-async-resource/lib/index.js");
/* harmony import */ var use_async_resource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_async_resource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_SendCommand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/SendCommand */ "./src/js/utils/SendCommand.js");
/* harmony import */ var _admin_components_Loaders_AdminThemeDefaultsLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin-components/Loaders/AdminThemeDefaultsLoader */ "./src/js/admin-panel/admin-components/Loaders/AdminThemeDefaultsLoader.js");
/* harmony import */ var _components_icons_ColorPalette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/icons/ColorPalette */ "./src/js/components/icons/ColorPalette.js");
/* harmony import */ var _contexts_TabsContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/TabsContext */ "./src/js/admin-panel/contexts/TabsContext.js");
/* harmony import */ var _components_icons_twitter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/icons/twitter */ "./src/js/components/icons/twitter.js");
/* harmony import */ var _components_MeatballMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/MeatballMenu */ "./src/js/components/MeatballMenu/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable no-unused-vars */













var retrieveDefaults = function retrieveDefaults() {
  return (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_5__["default"])('quotes_dlx_retrieve_admin_themes_defaults', {
    nonce: quotes_dlx_admin.options_retrieve_nonce
  });
};

var AdminDefaults = function AdminDefaults(props) {
  var _useAsyncResource = (0,use_async_resource__WEBPACK_IMPORTED_MODULE_3__.useAsyncResource)(retrieveDefaults, []),
      _useAsyncResource2 = _slicedToArray(_useAsyncResource, 2),
      defaults = _useAsyncResource2[0],
      getDefaults = _useAsyncResource2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Loaders_AdminThemeDefaultsLoader__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Interface, _extends({
    defaults: defaults
  }, props)));
};

var Interface = function Interface(props) {
  var _classNames;

  var localStorageKey = 'quotes_dlx_themes_defaults';

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_TabsContext__WEBPACK_IMPORTED_MODULE_8__["default"]),
      defaultTheme = _useContext.defaultTheme,
      setDefaultTheme = _useContext.setDefaultTheme;

  var defaults = props.defaults;
  var response = defaults();
  var _response$data = response.data,
      data = _response$data.data,
      success = _response$data.success;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.template),
      _useState2 = _slicedToArray(_useState, 2),
      activeTheme = _useState2[0],
      setActiveTheme = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      saving = _useState6[0],
      setSaving = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isSaved = _useState8[0],
      setIsSaved = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      resetting = _useState10[0],
      setResetting = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isReset = _useState12[0],
      setIsReset = _useState12[1];

  var template = data.template,
      categories = data.categories;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLoading(false);
  }, []);

  var getActiveThemeStylesheet = function getActiveThemeStylesheet() {
    var stylesheet = '';
    categories.forEach(function (cat) {
      cat.themes.forEach(function (theme) {
        if (theme.slug === activeTheme) {
          stylesheet = theme.stylesheet;
        }
      });
    });
    return stylesheet;
  };

  var getCategories = function getCategories() {
    return categories.map(function (cat, catIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["default"], {
        key: cat.slug,
        className: "qdlx-admin__themes--content-inner",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a Theme', 'quotes-dlx'),
        value: activeTheme,
        onChange: function onChange(newTheme) {
          return setActiveTheme(newTheme);
        }
      }, getThemes(cat));
    });
  };

  var GetThemePreview = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "stylesheet",
    href: getActiveThemeStylesheet()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('quotes-dlx', (_classNames = {}, _defineProperty(_classNames, "quotes-dlx-block-theme-".concat(activeTheme), true), _defineProperty(_classNames, 'quotes-dlx-context-menu-disabled', false), _defineProperty(_classNames, 'quotes-dlx-has-no-tweet-button', false), _classNames)),
    style: {
      maxWidth: '650px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "quotes-dlx-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("blockquote", {
    className: "quotes-dlx-text-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "quotes-dlx-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet leo sed tellus ultrices, eget lobortis eros molestie."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Phasellus vehicula metus non nulla porttitor, non bibendum risus iaculis."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "By"), ": ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", null, "Maximus"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "quotes-dlx-button-wrapper right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "quotes-dlx-button full quotes-dlx-button-icon-right",
    onClick: function onClick(e) {
      e.preventDefault();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "quotes-dlx-button-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click to Tweet', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "quotes-dlx-button-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons_twitter__WEBPACK_IMPORTED_MODULE_9__["default"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_MeatballMenu__WEBPACK_IMPORTED_MODULE_10__["default"], {
    enable_copy_text: true,
    enable_copy_tweet: true,
    enable_copy_link: true,
    enable_tweet_this: true
  })))); // const getAuthor = ( selectedTheme ) => {
  // 	return <a href={ selectedTheme.author_url }>{ selectedTheme.author_name }</a>;
  // };
  // const onThemeSelect = ( themeSlug ) => {
  // 	setSaving( true );
  // 	sendCommand( 'quotes_dlx_save_admin_options_defaults', {
  // 		nonce: quotes_dlx_admin.options_save_nonce,
  // 		form_data: {
  // 			template: themeSlug,
  // 		},
  // 	} )
  // 		.then( ( ajaxResponse ) => {
  // 			const ajaxData = ajaxResponse.data.data;
  // 			const ajaxSuccess = ajaxResponse.data.success;
  // 			if ( ajaxSuccess ) {
  // 				// Add local storage.
  // 				localStorage.setItem(
  // 					localStorageKey,
  // 					JSON.stringify( { theme: ajaxData.theme } )
  // 				);
  // 				setIsSaved( true );
  // 				setTimeout( () => {
  // 					setIsSaved( false );
  // 				}, 3000 );
  // 			} else {
  // 				// Error stuff.
  // 			}
  // 		} )
  // 		.catch( ( ajaxResponse ) => {} )
  // 		.then( ( ajaxResponse ) => {
  // 			setSaving( false );
  // 		} );
  // };

  var getThemes = function getThemes(category) {
    return category.themes.map(function (theme, themeIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        key: themeIndex,
        value: theme.slug
      }, theme.name);
    });
  };

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Loaders_AdminThemeDefaultsLoader__WEBPACK_IMPORTED_MODULE_6__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons_ColorPalette__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: 48,
    height: 48,
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "qdlx-admin__heading--text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Theme Colors', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can modify the primary, secondary, and accent colors of each theme.', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-inner"
  }, getCategories()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__theme-preview"
  }, GetThemePreview))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminDefaults);

/***/ }),

/***/ "./src/js/components/MeatballMenu/index.js":
/*!*************************************************!*\
  !*** ./src/js/components/MeatballMenu/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var _MeatballMenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MeatballMenuItem */ "./src/js/components/MeatballMenuItem/index.js");
/* harmony import */ var _icons_QuoteIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/QuoteIcon */ "./src/js/components/icons/QuoteIcon.js");
/* harmony import */ var _icons_CopyIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/CopyIcon */ "./src/js/components/icons/CopyIcon.js");
/* harmony import */ var _icons_LinkIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/LinkIcon */ "./src/js/components/icons/LinkIcon.js");
/* harmony import */ var _icons_twitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/twitter */ "./src/js/components/icons/twitter.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/js/components/MeatballMenu/editor.scss");
/* eslint-disable camelcase */









var MeatballMenu = function MeatballMenu(attributes) {
  var enable_copy_text = attributes.enable_copy_text,
      enable_copy_tweet = attributes.enable_copy_tweet,
      enable_copy_link = attributes.enable_copy_link,
      enable_tweet_this = attributes.enable_tweet_this;

  var getIcon = function getIcon(Icon) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
      width: 16,
      height: 16,
      fill: "#6c757d"
    });
  };

  var getButton = function getButton() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "quotes-dlx-meatball-menu"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "quotes-dlx-meatball-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open menu options', 'quotes-dlx')
    }), (enable_copy_text || enable_copy_tweet || enable_copy_link || enable_tweet_this) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, enable_copy_text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MeatballMenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      Icon: function Icon() {
        return getIcon(_icons_QuoteIcon__WEBPACK_IMPORTED_MODULE_3__["default"]);
      },
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Copy Quote', 'quotes-dlx'),
      onClick: function onClick(e) {}
    }), enable_copy_tweet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MeatballMenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      Icon: function Icon() {
        return getIcon(_icons_CopyIcon__WEBPACK_IMPORTED_MODULE_4__["default"]);
      },
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Copy Tweet', 'quotes-dlx'),
      onClick: function onClick(e) {}
    }), enable_copy_link && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MeatballMenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      Icon: function Icon() {
        return getIcon(_icons_LinkIcon__WEBPACK_IMPORTED_MODULE_5__["default"]);
      },
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Copy Link', 'quotes-dlx'),
      onClick: function onClick(e) {}
    }), enable_tweet_this && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MeatballMenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      Icon: function Icon() {
        return getIcon(_icons_twitter__WEBPACK_IMPORTED_MODULE_6__["default"]);
      },
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tweet This', 'quotes-dlx'),
      onClick: function onClick(e) {}
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "quotes-dlx-meatball-icon-wrapper",
      "aria-hidden": "true"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "quotes-dlx-meatball-icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null))))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, getButton());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeatballMenu);

/***/ }),

/***/ "./src/js/components/MeatballMenuItem/index.js":
/*!*****************************************************!*\
  !*** ./src/js/components/MeatballMenuItem/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/js/components/MeatballMenuItem/editor.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var MeatballMenuItem = function MeatballMenuItem(props) {
  var Icon = props.Icon,
      text = props.text,
      onClick = props.onClick;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      menuOpen = _useState2[0],
      setMenuOpen = _useState2[1];

  var getMenuItem = function getMenuItem() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "quotes-dlx-meatball-menu-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "button-reset",
      onClick: onClick
    }, Icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "quotes-dlx-meatball-menu-icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, null)), text)));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, getMenuItem());
};

MeatballMenuItem.defaultProps = {
  text: '',
  Icon: '',
  onClick: null
};
MeatballMenuItem.propTypes = {
  text: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeatballMenuItem);

/***/ }),

/***/ "./src/js/components/icons/CopyIcon.js":
/*!*********************************************!*\
  !*** ./src/js/components/icons/CopyIcon.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var CopyIcon = function CopyIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: props.width,
    height: props.height
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: props.fill,
    d: "M384 96V0H272c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48V128h-95.1c-18.5 0-32.9-14.4-32.9-32zm32-96v96h96L416 0zM192 352V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48v-48h-32c-35.3 0-64-28.7-64-64z"
  }));
};

CopyIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000000'
};
CopyIcon.propTypes = {
  width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  fill: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopyIcon);

/***/ }),

/***/ "./src/js/components/icons/LinkIcon.js":
/*!*********************************************!*\
  !*** ./src/js/components/icons/LinkIcon.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var LinkIcon = function LinkIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512",
    width: props.width,
    height: props.height
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: props.fill,
    d: "M172.5 131.1c55.6-55.59 148-55.59 203.6 0 50 50 57.4 129.7 16.3 187.2l-1.1 1.6c-10.3 14.3-30.3 17.7-44.6 7.4-14.4-10.3-17.8-30.3-7.5-44.6l1.1-1.6c22.9-32.1 19.3-76-8.6-103.9-31.4-31.4-82.5-31.4-114 0L105.5 289.5c-31.51 30.6-31.51 82.5 0 114 27.8 27.9 71.8 31.5 103.8 8.6l1.6-2c14.4-9.4 34.4-6.1 44.6 8.3 10.3 14.4 7 34.4-7.4 44.7l-1.6 1.1c-58.4 41.1-136.3 34.5-186.29-15.4-56.469-56.5-56.469-148.1 0-204.5L172.5 131.1zm295 248.9c-56.5 56.5-148 56.5-204.5 0-50-50-56.5-128.8-15.4-186.3l1.1-1.6c9.4-14.3 29.4-17.7 44.6-7.4 14.4 9.4 17.8 29.4 7.5 44.6l-1.1 1.6c-22.9 31.2-19.3 76 8.6 103.9 31.4 31.4 82.5 31.4 114 0l112.2-112.3c31.5-31.5 31.5-83.4 0-114-27.8-27.87-71.8-31.51-103.8-8.6l-1.6 1.1c-14.4 10.3-34.4 6.1-44.6-7.42-10.3-14.38-7-34.37 7.4-44.64l1.6-1.12C451 6.731 529.8 13.25 579.8 63.24c56.5 56.46 56.5 148.06 0 204.46L467.5 380z"
  }));
};

LinkIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000000'
};
LinkIcon.propTypes = {
  width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  fill: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkIcon);

/***/ }),

/***/ "./src/js/components/icons/QuoteIcon.js":
/*!**********************************************!*\
  !*** ./src/js/components/icons/QuoteIcon.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var QuoteIcon = function QuoteIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    width: props.width,
    height: props.height
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: props.fill,
    d: "M96 224c-11.28 0-21.95 2.3-32 5.9V224c0-35.3 28.7-64 64-64 17.67 0 32-14.33 32-32s-14.3-32-32-32C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96-43-96-96-96zm256 0c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64 17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96-43-96-96-96z"
  }));
};

QuoteIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000000'
};
QuoteIcon.propTypes = {
  width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  fill: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuoteIcon);

/***/ }),

/***/ "./src/js/components/icons/twitter.js":
/*!********************************************!*\
  !*** ./src/js/components/icons/twitter.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var TwitterIcon = function TwitterIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    "aria-hidden": "true",
    "data-prefix": "fab",
    "data-icon": "twitter",
    className: "prefix__svg-inline--fa prefix__fa-twitter prefix__fa-w-16",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: props.width,
    height: props.height
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: props.fill,
    d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
  }));
};

TwitterIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#FFFFFF'
};
TwitterIcon.propTypes = {
  width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  fill: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TwitterIcon);

/***/ }),

/***/ "./src/js/utils/SendCommand.js":
/*!*************************************!*\
  !*** ./src/js/utils/SendCommand.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendCommand)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable no-undef */

/* eslint-disable camelcase */


function sendCommand(action, data) {
  var params = {
    action: action
  };
  var default_data = {
    nonce: false,
    action: action
  };

  if ('undefined' === typeof data) {
    data = {};
  }

  for (var opt in default_data) {
    if (!data.hasOwnProperty(opt)) {
      data[opt] = default_data[opt];
    }
  }

  var options = {
    method: 'post',
    url: ajaxurl,
    params: params,
    paramsSerializer: function paramsSerializer(jsparams) {
      return qs__WEBPACK_IMPORTED_MODULE_1___default().stringify(jsparams, {
        arrayFormat: 'brackets'
      });
    },
    data: qs__WEBPACK_IMPORTED_MODULE_1___default().stringify(data)
  };
  return axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
}

/***/ }),

/***/ "./src/js/components/MeatballMenu/editor.scss":
/*!****************************************************!*\
  !*** ./src/js/components/MeatballMenu/editor.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/components/MeatballMenuItem/editor.scss":
/*!********************************************************!*\
  !*** ./src/js/components/MeatballMenuItem/editor.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=AdminThemeColors.0.1.js.map