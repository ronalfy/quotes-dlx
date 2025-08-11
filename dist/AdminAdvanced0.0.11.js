"use strict";
(self["webpackChunkquotes_dlx"] = self["webpackChunkquotes_dlx"] || []).push([["AdminAdvanced0.0.11"],{

/***/ "./src/fonts/fonts.js":
/*!****************************!*\
  !*** ./src/fonts/fonts.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var fontFamilies = {
  'Josefin Sans': {
    name: 'Josefin Sans',
    slug: 'josefin-sans',
    family: 'Josefin Sans',
    fallback: 'Helvetica, Arial, sans-serif'
  },
  Karla: {
    name: 'Karla',
    slug: 'karla',
    family: 'Karla',
    fallback: 'Helvetica, Arial, sans-serif'
  },
  Lato: {
    name: 'Lato',
    slug: 'lato',
    family: 'Lato',
    fallback: 'Helvetica, Arial, sans-serif'
  },
  Montserrat: {
    name: 'Montserrat',
    slug: 'montserrat',
    family: 'Montserrat',
    fallback: 'Helvetica, Arial, sans-serif'
  },
  Nunito: {
    name: 'Nunito',
    slug: 'nunito',
    family: 'Nunito',
    fallback: 'sans-serif'
  },
  'Open Sans': {
    name: 'Open Sans',
    slug: 'open-sans',
    family: 'Open Sans',
    fallback: 'Helvetica, Arial, sans-serif'
  },
  Oxygen: {
    name: 'Oxygen',
    slug: 'oxygen',
    family: 'Oxygen',
    fallback: 'sans-serif'
  },
  'Playfair Display': {
    name: 'Playfair Display',
    slug: 'playfair-display',
    family: 'Playfair Display',
    fallback: 'Helvetica, Arial, sans-serif'
  },
  Raleway: {
    name: 'Raleway',
    slug: 'raleway',
    family: 'Raleway',
    fallback: 'Helvetica, Arial, sans-serif'
  },
  Roboto: {
    name: 'Roboto',
    slug: 'roboto',
    family: 'Roboto',
    fallback: 'Helvetica, Arial, sans-serif'
  },
  'Source Sans Pro': {
    name: 'Source Sans Pro',
    slug: 'source-sans-pro',
    family: 'Source Sans Pro',
    fallback: 'Helvetica, Arial, sans-serif'
  },
  Spinnaker: {
    name: 'Spinnaker',
    slug: 'spinnaker',
    family: 'Spinnaker',
    fallback: 'sans-serif'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fontFamilies);

/***/ }),

/***/ "./src/js/admin-panel/views/AdminAdvanced.js":
/*!***************************************************!*\
  !*** ./src/js/admin-panel/views/AdminAdvanced.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_escape_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/escape-html */ "@wordpress/escape-html");
/* harmony import */ var _wordpress_escape_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var use_async_resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-async-resource */ "./node_modules/use-async-resource/lib/index.js");
/* harmony import */ var use_async_resource__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(use_async_resource__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_icons_Gear__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/icons/Gear */ "./src/js/components/icons/Gear.js");
/* harmony import */ var _utils_SendCommand__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/SendCommand */ "./src/js/utils/SendCommand.js");
/* harmony import */ var _admin_components_Notice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../admin-components/Notice */ "./src/js/admin-panel/admin-components/Notice/index.js");
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/index.esm.js");
/* harmony import */ var _admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../admin-components/Loaders/AdminDefaultsLoader */ "./src/js/admin-panel/admin-components/Loaders/AdminDefaultsLoader.js");
/* harmony import */ var _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/icons/CircularExplanation */ "./src/js/components/icons/CircularExplanation.js");
/* harmony import */ var _validation_twitter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../validation/twitter */ "./src/js/validation/twitter.js");
/* harmony import */ var _components_icons_CircularInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/icons/CircularInfo */ "./src/js/components/icons/CircularInfo.js");
/* harmony import */ var _components_icons_FlaskIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/icons/FlaskIcon */ "./src/js/components/icons/FlaskIcon.js");
/* harmony import */ var _contexts_TabsContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../contexts/TabsContext */ "./src/js/admin-panel/contexts/TabsContext.js");
/* harmony import */ var _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/icons/Spinner */ "./src/js/components/icons/Spinner.js");
/* harmony import */ var _fonts_fonts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../fonts/fonts */ "./src/fonts/fonts.js");
/* harmony import */ var _admin_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../admin-components/ErrorBoundary */ "./src/js/admin-panel/admin-components/ErrorBoundary/index.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* eslint-disable no-unused-vars */




















var retrieveDefaults = function retrieveDefaults() {
  return (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_8__["default"])('quotes_dlx_retrieve_admin_options_advanced', {
    nonce: quotes_dlx_admin.options_retrieve_nonce
  });
};
var AdminAdvanced = function AdminAdvanced(props) {
  var _useAsyncResource = (0,use_async_resource__WEBPACK_IMPORTED_MODULE_4__.useAsyncResource)(retrieveDefaults, []),
    _useAsyncResource2 = _slicedToArray(_useAsyncResource, 2),
    defaults = _useAsyncResource2[0],
    getDefaults = _useAsyncResource2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_19__["default"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Could not load advanced options.', 'quotes-dlx'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "https://dlxplugins.com/support/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "DLX Plugins Support"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_11__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Interface, _extends({
    defaults: defaults
  }, props))));
};
var Interface = function Interface(props) {
  var localStorageKey = 'quotes_dlx_form_advanced';
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_TabsContext__WEBPACK_IMPORTED_MODULE_16__["default"]),
    advancedTabDirtyCount = _useContext.advancedTabDirtyCount,
    setAdvancedTabDirtyCount = _useContext.setAdvancedTabDirtyCount,
    setThemesDefaultsDirtyCount = _useContext.setThemesDefaultsDirtyCount,
    setLicensesDirtyCount = _useContext.setLicensesDirtyCount,
    setBlockDefaultsDirtyCount = _useContext.setBlockDefaultsDirtyCount,
    setContextualMenuDefaultsDirtyCount = _useContext.setContextualMenuDefaultsDirtyCount,
    defaultTheme = _useContext.defaultTheme;
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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.has_anchor),
    _useState6 = _slicedToArray(_useState5, 2),
    anchorDisplay = _useState6[0],
    setAnchorDisplay = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.enable_links_in_tweet),
    _useState8 = _slicedToArray(_useState7, 2),
    enableLinks = _useState8[0],
    setEnableLinks = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.url_shortener),
    _useState0 = _slicedToArray(_useState9, 2),
    enableUrlShortener = _useState0[0],
    setEnableUrlShortener = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState10 = _slicedToArray(_useState1, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    saving = _useState12[0],
    setSaving = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    refreshingFonts = _useState14[0],
    setRefreshingFonts = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isSaved = _useState16[0],
    setIsSaved = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    resetting = _useState18[0],
    setResetting = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    uninstalling = _useState20[0],
    setUninstalling = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    hardReset = _useState22[0],
    setHardReset = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    hardUninstall = _useState24[0],
    setHardUninstall = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    isHardUninstall = _useState26[0],
    setIsHardUninstall = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    isHardReset = _useState28[0],
    setIsHardReset = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    isReset = _useState30[0],
    setIsReset = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.adobe_fonts),
    _useState32 = _slicedToArray(_useState31, 2),
    adobeFonts = _useState32[0],
    setAdobeFonts = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    canResetOptions = _useState34[0],
    setCanResetOptions = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    canUninstall = _useState36[0],
    setCanUninstall = _useState36[1];
  var enable_fonts = data.enable_fonts,
    custom_font_primary = data.custom_font_primary,
    custom_font_secondary = data.custom_font_secondary,
    primary_font_family = data.primary_font_family,
    secondary_font_family = data.secondary_font_family,
    enable_adobe_fonts = data.enable_adobe_fonts,
    adobe_project_id = data.adobe_project_id,
    activate_adobe_fonts_admin = data.activate_adobe_fonts_admin,
    activate_adobe_fonts_frontend = data.activate_adobe_fonts_frontend,
    template = data.template,
    facebook_app_id = data.facebook_app_id;
  var getDefaultValues = function getDefaultValues() {
    return {
      enableFonts: enable_fonts,
      customFontPrimary: custom_font_primary,
      customFontSecondary: custom_font_secondary,
      primaryFontFamily: primary_font_family,
      secondaryFontFamily: secondary_font_family,
      enableAdobeFonts: enable_adobe_fonts,
      adobeProjectId: adobe_project_id,
      activateAdobeFontsAdmin: activate_adobe_fonts_admin,
      activateAdobeFontsFrontend: activate_adobe_fonts_frontend
    };
  };
  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
      defaultValues: getDefaultValues()
    }),
    register = _useForm.register,
    control = _useForm.control,
    handleSubmit = _useForm.handleSubmit,
    setValue = _useForm.setValue,
    getValues = _useForm.getValues,
    reset = _useForm.reset,
    trigger = _useForm.trigger;
  var formValues = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useWatch)({
    control: control
  });
  var _useFormState = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useFormState)({
      control: control
    }),
    errors = _useFormState.errors,
    isDirty = _useFormState.isDirty,
    dirtyFields = _useFormState.dirtyFields,
    touchedFields = _useFormState.touchedFields;
  var onSubmit = function onSubmit(formData) {
    setSaving(true);
    (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_8__["default"])('quotes_dlx_save_admin_options_advanced', {
      nonce: quotes_dlx_admin.options_save_nonce,
      form_data: formData
    }).then(function (ajaxResponse) {
      var ajaxData = ajaxResponse.data.data;
      var ajaxSuccess = ajaxResponse.data.success;
      if (ajaxSuccess) {
        // Reset count.
        setAdvancedTabDirtyCount(0);
        localStorage.setItem(localStorageKey, JSON.stringify(ajaxData));
        localStorage.removeItem(localStorageKey + '_dirty_fields');
        // Clear form dirty.
        reset(ajaxData, {
          keepDirty: false,
          keepDirtyValues: false
        });
        setIsSaved(true);
        setTimeout(function () {
          setIsSaved(false);
        }, 3000);
      } else {
        // Error stuff.
      }
    })["catch"](function (ajaxResponse) {}).then(function (ajaxResponse) {
      setSaving(false);
    });
  };
  var handleReset = function handleReset(e) {
    setResetting(true);
    (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_8__["default"])('quotes_dlx_reset_admin_options_advanced', {
      nonce: quotes_dlx_admin.options_save_nonce
    }).then(function (ajaxResponse) {
      var ajaxData = ajaxResponse.data.data;
      var ajaxSuccess = ajaxResponse.data.success;
      if (ajaxSuccess) {
        // Reset local storage.
        setAdvancedTabDirtyCount(0);

        // Clear form dirty.
        reset(ajaxData);
        localStorage.setItem(localStorageKey, JSON.stringify(ajaxData));
        localStorage.removeItem(localStorageKey + '_dirty_fields');

        // On save, add local storage variable with from contents: qdlx_advanced_save
        // Read in saved local storage variable qdlx_advanced_save
        // Replace with saved local storage with no dirty update.
        // Remove local storage variable.

        // Reset toggles.
        // Override variable upon save.

        setIsReset(true);
        setTimeout(function () {
          setIsReset(false);
        }, 3000);
      } else {
        // Error stuff.
      }
    })["catch"](function (ajaxResponse) {}).then(function (ajaxResponse) {
      setResetting(false);
    });
  };
  var refreshAdobeFonts = function refreshAdobeFonts() {
    setRefreshingFonts(true);
    (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_8__["default"])('quotes_dlx_retrieve_remote_adobe_fonts', {
      nonce: quotes_dlx_admin.options_save_nonce,
      project_id: getValues('adobeProjectId')
    }).then(function (ajaxResponse) {
      var ajaxData = ajaxResponse.data.data;
      var ajaxSuccess = ajaxResponse.data.success;
      if (ajaxSuccess) {
        setAdobeFonts(ajaxData);
        setIsSaved(true);
        setTimeout(function () {
          setIsSaved(false);
        }, 3000);
      } else {
        // Error stuff.
      }
    })["catch"](function (ajaxResponse) {}).then(function (ajaxResponse) {
      setRefreshingFonts(false);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, []);
  var hasErrors = function hasErrors() {
    return Object.keys(errors).length > 0;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Get saved local storage JSON strings.
    var maybeSavedFormFields = localStorage.getItem(localStorageKey);
    var maybeDirtyFields = localStorage.getItem(localStorageKey + '_dirty_fields');
    if (null !== maybeSavedFormFields) {
      // Parse saved JSON string into JSON object.
      var savedFormFields = JSON.parse(maybeSavedFormFields);

      // If saved form fields, proceed with setting fields.
      if (Object.keys(savedFormFields.length > 0)) {
        var savedDirtyFields = {};

        // Get any dirty fields.
        if (null !== maybeDirtyFields) {
          savedDirtyFields = JSON.parse(maybeDirtyFields);
        }
        for (var _i = 0, _Object$entries = Object.entries(savedFormFields); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
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
    if (isDirty || advancedTabDirtyCount > 0) {
      // Get current dirty fields.
      setAdvancedTabDirtyCount(Object.keys(dirtyFields).length);

      // Save form values to local storage.
      localStorage.setItem(localStorageKey, JSON.stringify(formValues));
      localStorage.setItem(localStorageKey + '_dirty_fields', JSON.stringify(dirtyFields));
    }
    setLoading(false);
  }, [formValues]);
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_11__["default"], null);
  }
  var getAdobeFonts = function getAdobeFonts() {
    if (undefined === adobeFonts || false === adobeFonts) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "components-base-control"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      htmlFor: "adobe-font-list",
      className: "components-base-control__label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Current Adobe Fonts', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "quotes-dlx-adobe-font-list quotes-dlx-admin-list-ul",
      id: "adobe-font-list"
    }, adobeFonts.map(function (font) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: font.slug
      }, font.name);
    }))));
  };
  var getFontFamilies = function getFontFamilies() {
    // Get font families in value label pair.
    var families = [];

    // Try to get adobe fonts. Push them to the top.
    if (false !== adobeFonts && undefined !== adobeFonts && getValues('enableAdobeFonts')) {
      adobeFonts.forEach(function (font) {
        families.push({
          label: font.name,
          value: font.slug
        });
      });
    }

    // Get the rest of the fonts.
    for (var _i2 = 0, _Object$entries2 = Object.entries(_fonts_fonts__WEBPACK_IMPORTED_MODULE_18__["default"]); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        key = _Object$entries2$_i[0],
        fontfamily = _Object$entries2$_i[1];
      families.push({
        label: fontfamily.name,
        value: fontfamily.slug
      });
    }
    families.push({
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom', 'quotes-dlx'),
      value: 'custom'
    });
    return families;
  };
  var toTitleCase = function toTitleCase(string) {
    var firstLetterRegex = /(^[a-z])/g;
    var newString = string.replace(firstLetterRegex, function (match) {
      return match.toUpperCase();
    });
    return newString.replace(/-([a-z])/gi, function (all, letter) {
      return ' ' + letter.toUpperCase();
    });
  };
  var getPreviewLink = function getPreviewLink() {
    var selectedTemplate = template;
    if ('' !== defaultTheme) {
      selectedTemplate = defaultTheme;
    }
    return "".concat(ajaxurl, "?action=quotes_dlx_theme_preview&fontsize=16\n\t\t) }&lineheight=").concat(encodeURIComponent(1.65), "&buttonsize=").concat(encodeURIComponent(16), "&nonce=").concat(quotes_dlx_admin.options_retrieve_nonce, "&template=").concat(encodeURIComponent(selectedTemplate), "&screen=tablet&primary_font_family=").concat(encodeURIComponent(toTitleCase(getValues('primaryFontFamily'))), "&secondary_font_family=").concat(encodeURIComponent(toTitleCase(getValues('secondaryFontFamily'))));
  };

  /**
   * Remove all local storage keys and context.
   */
  var clearLocalStorage = function clearLocalStorage() {
    localStorage.removeItem('quotes_dlx_menu_defaults');
    localStorage.removeItem('quotes_dlx_form_defaults');
    localStorage.removeItem('quotes_dlx_licenses');
    localStorage.removeItem('quotes_dlx_themes_defaults');
    localStorage.removeItem('quotes_dlx_form_advanced');
    setAdvancedTabDirtyCount(0);
    setThemesDefaultsDirtyCount(0);
    setLicensesDirtyCount(0);
    setBlockDefaultsDirtyCount(0);
    setContextualMenuDefaultsDirtyCount(0);
  };

  /**
   * Uninstall and deactivate the QuotesDLX Plugin.
   */
  var uninstallAndDeactivate = function uninstallAndDeactivate() {
    // Clear local storage keys.
    clearLocalStorage();
    setHardUninstall(true);
    (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_8__["default"])('quotes_dlx_uninstall_and_deactivate', {
      nonce: quotes_dlx_admin.options_save_nonce
    }).then(function (ajaxResponse) {
      var ajaxData = ajaxResponse.data.data;
      var ajaxSuccess = ajaxResponse.data.success;
      if (ajaxSuccess) {
        setIsHardUninstall(true);
        setTimeout(function () {
          window.location.href = ajaxData.redirect_url;
        }, 3000);
      } else {
        // Error stuff.
      }
    })["catch"](function (ajaxResponse) {}).then(function (ajaxResponse) {
      setHardUninstall(false);
    });
  };
  var resetAllOptions = function resetAllOptions() {
    // Clear local storage keys.
    clearLocalStorage();
    setHardReset(true);
    (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_8__["default"])('quotes_dlx_reset_all_options', {
      nonce: quotes_dlx_admin.options_save_nonce
    }).then(function (ajaxResponse) {
      var ajaxData = ajaxResponse.data.data;
      var ajaxSuccess = ajaxResponse.data.success;
      if (ajaxSuccess) {
        setIsHardReset(true);
        setTimeout(function () {
          window.location.reload();
        }, 3000);
      } else {
        // Error stuff.
      }
    })["catch"](function (ajaxResponse) {}).then(function (ajaxResponse) {
      setHardReset(false);
    });
  };
  var getAdobeFontsInterface = function getAdobeFontsInterface() {
    var _errors$adobeProjectI, _errors$adobeProjectI2;
    if (!getValues('enableFonts')) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      scope: "row"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Adobe Fonts', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.Controller, {
      name: "enableAdobeFonts",
      control: control,
      render: function render(_ref) {
        var _ref$field = _ref.field,
          _onChange = _ref$field.onChange,
          value = _ref$field.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Adobe Fonts', 'quotes-dlx'),
          className: "qdlx-admin__toggle-control",
          checked: value,
          onChange: function onChange(boolValue) {
            _onChange(boolValue);
          },
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('If you are using Adobe Fonts, you can use them in QuotesDLX.', 'quotes-dlx')
        });
      }
    }), getValues('enableAdobeFonts') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.Controller, {
      name: "activateAdobeFontsAdmin",
      control: control,
      render: function render(_ref2) {
        var _ref2$field = _ref2.field,
          _onChange2 = _ref2$field.onChange,
          value = _ref2$field.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Activate Adobe Fonts in the Admin', 'quotes-dlx'),
          className: "qdlx-admin__toggle-control",
          checked: value,
          onChange: function onChange(boolValue) {
            _onChange2(boolValue);
          },
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('If you are not using a plugin to add Adobe fonts to your install, you can check this option to load Adobe Fonts in the admin area of your site.', 'quotes-dlx')
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.Controller, {
      name: "activateAdobeFontsFrontend",
      control: control,
      render: function render(_ref3) {
        var _ref3$field = _ref3.field,
          _onChange3 = _ref3$field.onChange,
          value = _ref3$field.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Activate Adobe Fonts on the Frontend', 'quotes-dlx'),
          className: "qdlx-admin__toggle-control",
          checked: value,
          onChange: function onChange(boolValue) {
            _onChange3(boolValue);
          },
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('If you are not using a plugin to add Adobe fonts to your site, you can check this option to load Adobe Fonts on the frontend area of your site.', 'quotes-dlx')
        });
      }
    })), getValues('enableAdobeFonts') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.Controller, {
      name: "adobeProjectId",
      control: control,
      rules: {
        required: true,
        pattern: /^[a-z0-9]+$/i
      },
      render: function render(_ref4) {
        var _errors$anchorPrefix, _errors$anchorPrefix2;
        var field = _ref4.field;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, _extends({}, field, {
          type: "password",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Adobe Fonts Project ID', 'quotes-dlx'),
          id: "search-qdlx-no-autofill",
          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('qdlx-admin__text-control', {
            'has-error': 'pattern' === ((_errors$anchorPrefix = errors.anchorPrefix) === null || _errors$anchorPrefix === void 0 ? void 0 : _errors$anchorPrefix.type) || 'required' === ((_errors$anchorPrefix2 = errors.anchorPrefix) === null || _errors$anchorPrefix2 === void 0 ? void 0 : _errors$anchorPrefix2.type),
            'is-required': true
          }),
          "aria-required": "true",
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter the Adobe Project ID of the web project in order to load Adobe Fonts.', 'quotes-dlx')
        }));
      }
    }), 'required' === ((_errors$adobeProjectI = errors.adobeProjectId) === null || _errors$adobeProjectI === void 0 ? void 0 : _errors$adobeProjectI.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_9__["default"], {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
      status: "error",
      politeness: "assertive",
      inline: true,
      icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_12__["default"]
    }), 'pattern' === ((_errors$adobeProjectI2 = errors.adobeProjectId) === null || _errors$adobeProjectI2 === void 0 ? void 0 : _errors$adobeProjectI2.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_9__["default"], {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please use only lowercase letters and numbers.'),
      status: "error",
      politeness: "assertive",
      inline: true,
      icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_12__["default"]
    }), false !== adobeFonts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, getAdobeFonts()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin__tabs--content-actions"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('qdlx__btn qdlx__btn-primary qdlx__btn--icon-right qdlx__btn-accent', {
        'has-error': hasErrors()
      }, {
        'has-icon': refreshingFonts
      }, {
        'is-saving': {
          refreshingFonts: refreshingFonts
        }
      }),
      type: "button",
      text: saving ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Getting Fonts…', 'quotes-dlx') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Refresh Fonts', 'quotes-dlx'),
      icon: refreshingFonts ? _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_17__["default"] : false,
      iconSize: "18",
      iconPosition: "right",
      disabled: refreshingFonts || resetting,
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var result;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return trigger('adobeProjectId');
            case 1:
              result = _context.v;
              if (result) {
                refreshAdobeFonts();
              }
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))
    }))))));
  };
  var getFontOptions = function getFontOptions() {
    var _errors$customFontPri3, _errors$customFontPri4, _errors$customFontSec3, _errors$customFontSec4;
    if (!getValues('enableFonts')) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      scope: "row"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Selection', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "quotes-dlx-admin-theme-options__select span-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.Controller, {
      name: "primaryFontFamily",
      control: control,
      render: function render(_ref6) {
        var _ref6$field = _ref6.field,
          _onChange4 = _ref6$field.onChange,
          value = _ref6$field.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          className: "qdlx-admin__themes--content-inner qdlx-admin__theme-fonts-select",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a Primary Font', 'quotes-dlx'),
          value: value,
          onChange: function onChange(newFont) {
            return _onChange4(newFont);
          },
          options: getFontFamilies()
        });
      }
    }), 'custom' === getValues('primaryFontFamily') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "quotes-dlx-admin-control-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.Controller, {
      name: "customFontPrimary",
      control: control,
      rules: {
        required: true,
        pattern: /^[-\' ,A-Za-z0-9]+$/i
      },
      render: function render(_ref7) {
        var _errors$customFontPri, _errors$customFontPri2;
        var field = _ref7.field;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, _extends({}, field, {
          value: (0,_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_3__.escapeAttribute)(field.value.replace(/\\\'/g, "'")),
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter your custom secondary font.', 'quotes-dlx'),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("e.g. 'Open Sans', sans-serif'", 'quotes-dlx'),
          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('qdlx-admin__text-control', {
            'has-error': 'pattern' === ((_errors$customFontPri = errors.customFontPrimary) === null || _errors$customFontPri === void 0 ? void 0 : _errors$customFontPri.type) || 'required' === ((_errors$customFontPri2 = errors.customFontPrimary) === null || _errors$customFontPri2 === void 0 ? void 0 : _errors$customFontPri2.type),
            'is-required': true
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set the font and fallbacks. Double quotes are not permitted.', 'quotes-dlx'),
          "aria-required": "true"
        }));
      }
    }), 'required' === ((_errors$customFontPri3 = errors.customFontPrimary) === null || _errors$customFontPri3 === void 0 ? void 0 : _errors$customFontPri3.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_9__["default"], {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
      status: "error",
      politeness: "assertive",
      inline: true,
      icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_12__["default"]
    }), 'pattern' === ((_errors$customFontPri4 = errors.customFontPrimary) === null || _errors$customFontPri4 === void 0 ? void 0 : _errors$customFontPri4.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_9__["default"], {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('There are invalid characters in the custom font. Make sure you are using single quotes and leave out the semi-colon at the end.'),
      status: "error",
      politeness: "assertive",
      inline: true,
      icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_12__["default"]
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "quotes-dlx-admin-theme-options__select span-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.Controller, {
      name: "secondaryFontFamily",
      control: control,
      render: function render(_ref8) {
        var _ref8$field = _ref8.field,
          _onChange5 = _ref8$field.onChange,
          value = _ref8$field.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          className: "qdlx-admin__themes--content-inner qdlx-admin__theme-fonts-select",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a Secondary Font', 'quotes-dlx'),
          value: value,
          onChange: function onChange(newFont) {
            return _onChange5(newFont);
          },
          options: getFontFamilies()
        });
      }
    }), 'custom' === getValues('secondaryFontFamily') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "quotes-dlx-admin-control-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.Controller, {
      name: "customFontSecondary",
      control: control,
      rules: {
        required: true,
        pattern: /^[-\' ,A-Za-z0-9]+$/i
      },
      render: function render(_ref9) {
        var _errors$customFontSec, _errors$customFontSec2;
        var field = _ref9.field;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, _extends({}, field, {
          value: (0,_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_3__.escapeAttribute)(field.value.replace(/\\\'/g, "'")),
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter your custom secondary font.', 'quotes-dlx'),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("e.g. 'Open Sans', sans-serif'", 'quotes-dlx'),
          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('qdlx-admin__text-control', {
            'has-error': 'pattern' === ((_errors$customFontSec = errors.customFontSecondary) === null || _errors$customFontSec === void 0 ? void 0 : _errors$customFontSec.type) || 'required' === ((_errors$customFontSec2 = errors.customFontSecondary) === null || _errors$customFontSec2 === void 0 ? void 0 : _errors$customFontSec2.type),
            'is-required': true
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set the font and fallbacks. Double quotes are not permitted.', 'quotes-dlx'),
          "aria-required": "true"
        }));
      }
    }), 'required' === ((_errors$customFontSec3 = errors.customFontSecondary) === null || _errors$customFontSec3 === void 0 ? void 0 : _errors$customFontSec3.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_9__["default"], {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
      status: "error",
      politeness: "assertive",
      inline: true,
      icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_12__["default"]
    }), 'pattern' === ((_errors$customFontSec4 = errors.customFontSecondary) === null || _errors$customFontSec4 === void 0 ? void 0 : _errors$customFontSec4.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_9__["default"], {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('There are invalid characters in the custom font. Make sure you are using single quotes and leave out the semi-colon at the end.'),
      status: "error",
      politeness: "assertive",
      inline: true,
      icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_12__["default"]
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "components-base-control"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      "data-fancybox": true,
      onClick: function onClick(e) {
        e.preventDefault();
        new _fancyapps_ui__WEBPACK_IMPORTED_MODULE_10__.Fancybox([{
          src: getPreviewLink(),
          type: 'iframe'
        }], {
          mainClass: 'qdlx-theme-preview-mobile',
          caption: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Preview', 'quotes-dlx')
        });
      },
      href: getPreviewLink()
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Preview Fonts', 'quotes-dlx'))))));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--home-grid-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons_FlaskIcon__WEBPACK_IMPORTED_MODULE_15__["default"], {
    width: 48,
    height: 48,
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "qdlx-admin__heading--text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced Options', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced options allow you to set default font families, breakpoints, and a reset options feature.', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "form-table",
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Options', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.Controller, {
    name: "enableFonts",
    control: control,
    render: function render(_ref0) {
      var _ref0$field = _ref0.field,
        _onChange6 = _ref0$field.onChange,
        value = _ref0$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Theme Fonts', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          _onChange6(boolValue);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('By default, the themes load their own fonts. If you would like to supply your own fonts, you can disable this option.', 'quotes-dlx')
      });
    }
  }))), getAdobeFontsInterface(), getFontOptions())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('qdlx__btn qdlx__btn-primary qdlx__btn--icon-right', {
      'has-error': hasErrors()
    }, {
      'has-icon': saving
    }, {
      'is-saving': {
        saving: saving
      }
    }),
    type: "submit",
    text: saving ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Saving…', 'quotes-dlx') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save Advanced Options', 'quotes-dlx'),
    icon: saving ? _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_17__["default"] : false,
    iconSize: "18",
    iconPosition: "right",
    disabled: saving || resetting
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('qdlx__btn qdlx__btn-danger qdlx__btn--icon-right', {
      'has-icon': resetting
    }, {
      'is-resetting': {
        resetting: resetting
      }
    }),
    type: "button",
    text: resetting ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Resetting…', 'quotes-dlx') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset Advanced Options', 'quotes-dlx'),
    icon: resetting ? _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_17__["default"] : false,
    iconSize: "18",
    iconPosition: "right",
    disabled: saving || resetting,
    onClick: function onClick(e) {
      setResetting(true);
      handleReset(e);
    }
  })), hasErrors() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_9__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('There are form validation errors. Please correct them above.'),
    status: "error",
    politeness: "polite"
  }), isSaved && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_9__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your settings have been saved.'),
    status: "success",
    politeness: "assertive"
  }), isReset && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_9__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your settings have been reset to defaults.'),
    status: "success",
    politeness: "assertive"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-heading qdlx-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_12__["default"], {
    width: 48,
    height: 48,
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "qdlx-admin__heading--text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset Options', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset all options. Resetting can not be undone.', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-actions no-flex-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin-reset-confirmation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    id: "qdlx-admin__reset-confirm",
    onClick: function onClick(e) {
      setCanResetOptions(e.target.checked);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "qdlx-admin__reset-confirm",
    className: "qdlx-admin__reset-confirm-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('I understand that this will reset all options.', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('qdlx__btn qdlx__btn-danger qdlx__btn--icon-right', {
      'has-icon': resetting
    }, {
      'is-resetting': {
        resetting: resetting
      }
    }),
    type: "button",
    text: hardReset ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Resetting…', 'quotes-dlx') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset Options', 'quotes-dlx'),
    icon: hardReset ? _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_17__["default"] : false,
    iconSize: "18",
    iconPosition: "right",
    disabled: saving || resetting || hardReset || hardUninstall || !canResetOptions,
    onClick: function onClick(e) {
      resetAllOptions();
    }
  })), isHardReset && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_9__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your settings have been reset. Reloading…', 'quotes-dlx'),
    status: "warning",
    politeness: "assertive"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-heading qdlx-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_12__["default"], {
    width: 48,
    height: 48,
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "qdlx-admin__heading--text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Uninstall and Deactivate', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove all options and deactivate QuotesDLX.', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-actions no-flex-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin-reset-confirmation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    id: "qdlx-admin__uninstall-confirm",
    onClick: function onClick(e) {
      setCanUninstall(e.target.checked);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "qdlx-admin__uninstall-confirm",
    className: "qdlx-admin__uninstall-confirm-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('I understand that this remove all saved options and deactivate the plugin.', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('qdlx__btn qdlx__btn-danger qdlx__btn--icon-right', {
      'has-icon': uninstalling
    }, {
      'is-resetting': {
        uninstalling: uninstalling
      }
    }),
    type: "button",
    text: hardUninstall ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Uninstalling…', 'quotes-dlx') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Uninstall QuotesDLX', 'quotes-dlx'),
    icon: hardUninstall ? _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_17__["default"] : false,
    iconSize: "18",
    iconPosition: "right",
    disabled: saving || resetting || hardReset || hardUninstall || !canUninstall,
    onClick: function onClick(e) {
      uninstallAndDeactivate();
    }
  })), isHardUninstall && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_9__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('QuotesDLX has been uninstalled. Redirecting to the plugins screen…', 'quotes-dlx'),
    status: "warning",
    politeness: "assertive"
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminAdvanced);

/***/ })

}]);
//# sourceMappingURL=AdminAdvanced0.0.11.js.map