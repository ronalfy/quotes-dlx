"use strict";
(self["webpackChunkquotes_dlx"] = self["webpackChunkquotes_dlx"] || []).push([["AdminEmails0.0.4"],{

/***/ "./src/js/admin-panel/admin-components/EmailTemplateTags/index.js":
/*!************************************************************************!*\
  !*** ./src/js/admin-panel/admin-components/EmailTemplateTags/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_icons_TextInsert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/icons/TextInsert */ "./src/js/components/icons/TextInsert.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var TEMPLATE_TAGS = [{
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Site Name', 'quotes-dlx'),
  tag: '{{site_name}}'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Site URL', 'quotes-dlx'),
  tag: '{{site_url}}'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Post title', 'quotes-dlx'),
  tag: '{{post_title}}'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Post excerpt', 'quotes-dlx'),
  tag: '{{post_excerpt}}'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Post URL', 'quotes-dlx'),
  tag: '{{post_url}}'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Share Type', 'quotes-dlx'),
  tag: '{{share_type}}'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Date', 'quotes-dlx'),
  tag: '{{date}}'
}];
var EmailTemplateTags = function EmailTemplateTags(props) {
  var onSelect = props.onSelect;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(TEMPLATE_TAGS.concat(props.additionalTags)),
    _useState4 = _slicedToArray(_useState3, 1),
    tags = _useState4[0];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    popoverAnchor = _useState6[0],
    setPopoverAnchor = _useState6[1];
  var togglePopover = function togglePopover() {
    return setIsOpen(!isOpen);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-email-template-tags"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "qdlx-icon",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Insert Email Template Tag', 'quotes-dlx'),
    icon: _components_icons_TextInsert__WEBPACK_IMPORTED_MODULE_3__["default"],
    onClick: togglePopover,
    ref: setPopoverAnchor
  })), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
    className: "qdlx-email-template-tags__popover",
    placement: "right-end",
    onClose: togglePopover,
    anchor: popoverAnchor,
    noArrow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "qdlx-email-template-tags__popover-tags"
  }, tags.map(function (tag) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: tag.tag
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: function onClick() {
        onSelect(tag.tag);
        togglePopover();
      }
    }, tag.name));
  }))));
};
EmailTemplateTags.propTypes = {
  onSelect: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,
  additionalTags: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array)
};
EmailTemplateTags.defaultProps = {
  onSelect: function onSelect() {},
  additionalTags: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailTemplateTags);

/***/ }),

/***/ "./src/js/admin-panel/views/AdminEmails.js":
/*!*************************************************!*\
  !*** ./src/js/admin-panel/views/AdminEmails.js ***!
  \*************************************************/
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
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var use_async_resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-async-resource */ "./node_modules/use-async-resource/lib/index.js");
/* harmony import */ var use_async_resource__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(use_async_resource__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/index.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_icons_AtIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/icons/AtIcon */ "./src/js/components/icons/AtIcon.js");
/* harmony import */ var _utils_SendCommand__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/SendCommand */ "./src/js/utils/SendCommand.js");
/* harmony import */ var _admin_components_Notice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../admin-components/Notice */ "./src/js/admin-panel/admin-components/Notice/index.js");
/* harmony import */ var _admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../admin-components/Loaders/AdminDefaultsLoader */ "./src/js/admin-panel/admin-components/Loaders/AdminDefaultsLoader.js");
/* harmony import */ var _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/icons/CircularExplanation */ "./src/js/components/icons/CircularExplanation.js");
/* harmony import */ var _validation_twitter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../validation/twitter */ "./src/js/validation/twitter.js");
/* harmony import */ var _components_icons_CircularInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/icons/CircularInfo */ "./src/js/components/icons/CircularInfo.js");
/* harmony import */ var _contexts_TabsContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../contexts/TabsContext */ "./src/js/admin-panel/contexts/TabsContext.js");
/* harmony import */ var _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/icons/Spinner */ "./src/js/components/icons/Spinner.js");
/* harmony import */ var _admin_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../admin-components/ErrorBoundary */ "./src/js/admin-panel/admin-components/ErrorBoundary/index.js");
/* harmony import */ var _admin_components_EmailTemplateTags_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../admin-components/EmailTemplateTags/index */ "./src/js/admin-panel/admin-components/EmailTemplateTags/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable no-unused-vars */





















var ADDITIONAL_TEMPLATE_TAGS = [{
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('From Name', 'quotes-dlx'),
  tag: '{{from_name}}'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('From email', 'quotes-dlx'),
  tag: '{{from_email}}'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('To email', 'quotes-dlx'),
  tag: '{{to_email}}'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Share Text', 'quotes-dlx'),
  tag: '{{share_text}}'
}];
var retrieveDefaults = function retrieveDefaults() {
  return (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_9__["default"])('quotes_dlx_retrieve_admin_options_emails', {
    nonce: quotes_dlx_admin.options_retrieve_nonce
  });
};
var HtmlParser = (__webpack_require__(/*! html-to-react */ "./node_modules/html-to-react/index.js").Parser);
var HtmlParserInstance = new HtmlParser();
var AdminEmails = function AdminEmails(props) {
  var _useAsyncResource = (0,use_async_resource__WEBPACK_IMPORTED_MODULE_4__.useAsyncResource)(retrieveDefaults, []),
    _useAsyncResource2 = _slicedToArray(_useAsyncResource, 2),
    defaults = _useAsyncResource2[0],
    getDefaults = _useAsyncResource2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_17__["default"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Could not load admin defaults.', 'quotes-dlx'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
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
  var localStorageKey = 'quotes_dlx_form_emails';
  var defaults = props.defaults;
  var response = defaults();
  var _response$data = response.data,
    data = _response$data.data,
    success = _response$data.success;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_TabsContext__WEBPACK_IMPORTED_MODULE_15__["default"]),
    emailTabDirtyCount = _useContext.emailTabDirtyCount,
    setEmailTabDirtyCount = _useContext.setEmailTabDirtyCount;

  // Set up refs.
  var emailModalTitleInputRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  var emailSubjectInputRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  var emailBodyInputRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    saving = _useState4[0],
    setSaving = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isSaved = _useState6[0],
    setIsSaved = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    resetting = _useState8[0],
    setResetting = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isReset = _useState10[0],
    setIsReset = _useState10[1];
  var getDefaultValues = function getDefaultValues() {
    return {
      recaptchaEnabled: data.recaptchaEnabled,
      recaptchaSiteKey: data.recaptchaSiteKey,
      recaptchaSecretKey: data.recaptchaSecretKey,
      recaptchaScoreThreshold: data.recaptchaScoreThreshold,
      akismetEnabled: data.akismetEnabled,
      turnstileEnabled: data.turnstileEnabled,
      turnstileSiteKey: data.turnstileSiteKey,
      turnstileSecret: data.turnstileSecret,
      turnstileTheme: data.turnstileTheme,
      turnstileLanguage: data.turnstileLanguage,
      turnstileWidgetSize: data.turnstileWidgetSize,
      widgetAppearance: data.widgetAppearance,
      fromName: data.fromName,
      fromEmail: data.fromEmail,
      emailSendType: data.emailSendType,
      emailSubject: data.emailSubject,
      emailBody: data.emailBody,
      captchaType: data.captchaType
    };
  };
  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_19__.useForm)({
      defaultValues: getDefaultValues()
    }),
    register = _useForm.register,
    control = _useForm.control,
    handleSubmit = _useForm.handleSubmit,
    setValue = _useForm.setValue,
    getValues = _useForm.getValues,
    reset = _useForm.reset;
  var formValues = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_19__.useWatch)({
    control: control
  });
  var _useFormState = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_19__.useFormState)({
      control: control
    }),
    errors = _useFormState.errors,
    isDirty = _useFormState.isDirty,
    dirtyFields = _useFormState.dirtyFields,
    touchedFields = _useFormState.touchedFields,
    setError = _useFormState.setError,
    clearErrors = _useFormState.clearErrors;
  var onSubmit = function onSubmit(formData) {
    setSaving(true);
    (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_9__["default"])('quotes_dlx_save_admin_options_emails', {
      nonce: quotes_dlx_admin.options_save_nonce,
      form_data: formData
    }).then(function (ajaxResponse) {
      var ajaxData = ajaxResponse.data.data;
      var ajaxSuccess = ajaxResponse.data.success;
      if (ajaxSuccess) {
        // Reset count.
        setEmailTabDirtyCount(0);

        // Clear form dirty.
        reset(ajaxData);
        localStorage.setItem(localStorageKey, JSON.stringify(ajaxData));
        localStorage.removeItem(localStorageKey + '_dirty_fields');
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
    (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_9__["default"])('quotes_dlx_reset_admin_options_emails', {
      nonce: quotes_dlx_admin.options_save_nonce
    }).then(function (ajaxResponse) {
      var ajaxData = ajaxResponse.data.data;
      var ajaxSuccess = ajaxResponse.data.success;
      if (ajaxSuccess) {
        // Reset local storage.
        setEmailTabDirtyCount(0);

        // Clear form dirty.
        reset(ajaxData);
        localStorage.setItem(localStorageKey, JSON.stringify(ajaxData));
        localStorage.removeItem(localStorageKey + '_dirty_fields');
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
    if (isDirty || emailTabDirtyCount > 0) {
      // Get current dirty fields.
      setEmailTabDirtyCount(Object.keys(dirtyFields).length);

      // Save form values to local storage.
      localStorage.setItem(localStorageKey, JSON.stringify(formValues));
      localStorage.setItem(localStorageKey + '_dirty_fields', JSON.stringify(dirtyFields));
    }
    setLoading(false);
  }, [formValues]);
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_11__["default"], null);
  }

  /**
   * Retrieves and displays spam protection settings.
   *
   * @return {null} Return component or null.
   */
  var getSpamProtection = function getSpamProtection() {
    var _errors$recaptchaSite2, _errors$recaptchaSecr;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      scope: "row"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spam Protection', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "qdlx-admin-description"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable spam protection to help prevent unwanted emails.', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin-component-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_19__.Controller, {
      name: "akismet_enabled",
      control: control,
      render: function render(_ref) {
        var _ref$field = _ref.field,
          _onChange = _ref$field.onChange,
          value = _ref$field.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Akismet Spam protection', 'quotes-dlx'),
          className: "qdlx-admin__toggle-control",
          checked: value,
          onChange: function onChange(newValue) {
            setValue('akismetEnabled', newValue);
            _onChange(newValue);
          },
          disabled: !quotes_dlx_admin.akismet_plugin_active
        });
      }
    })), !quotes_dlx_admin.akismet_plugin_active && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_10__["default"], {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Akismet is not installed or activated. Please install and activate Akismet to use this feature.', 'quotes-dlx'),
      status: "warning",
      politeness: "assertive"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin-component-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_19__.Controller, {
      name: "captchaType",
      control: control,
      render: function render(_ref2) {
        var _ref2$field = _ref2.field,
          _onChange2 = _ref2$field.onChange,
          value = _ref2$field.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose which CAPTCHA version you would like to use', 'quotes-dlx'),
          name: "captchaType",
          selected: value,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('None', 'quotes-dlx'),
            value: 'none'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('reCAPTCHA 3', 'quotes-dlx'),
            value: 'recaptcha'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Turnstile', 'quotes-dlx'),
            value: 'turnstile'
          }],
          onChange: function onChange(newValue) {
            setValue('captchaType', newValue);
            _onChange2(newValue);
          }
        });
      }
    }), 'turnstile' === getValues('captchaType') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin-component-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "qdlx-admin-docs description"
    }, /* translators: %s: URL to Turnstile documentation */
    HtmlParserInstance.parse((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please read this guide on <a href="%s">how to retrieve your Turnstile keys</a>.', 'quotes-dlx'), 'https://dlxplugins.com/how-to/how-to-retrieve-your-cloudflare-turnstile-site-and-secret-keys/')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin-component-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_19__.Controller, {
      name: "turnstileSiteKey",
      control: control,
      rules: {
        required: true
      },
      render: function render(_ref3) {
        var _errors$turnstileSite;
        var _ref3$field = _ref3.field,
          _onChange3 = _ref3$field.onChange,
          value = _ref3$field.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Site Key', 'quotes-dlx'),
          value: value,
          onChange: function onChange(newValue) {
            _onChange3(newValue);
          },
          name: "search-turnstile-site-key",
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('qdlx-admin__text-control', {
            'qdlx-error': 'required' === ((_errors$turnstileSite = errors.turnstileSiteKey) === null || _errors$turnstileSite === void 0 ? void 0 : _errors$turnstileSite.type),
            'is-required': true
          })
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin-component-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_19__.Controller, {
      name: "turnstileSecret",
      control: control,
      rules: {
        required: true
      },
      render: function render(_ref4) {
        var _errors$turnstileSecr;
        var _ref4$field = _ref4.field,
          _onChange4 = _ref4$field.onChange,
          value = _ref4$field.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Turnstile Secret Key', 'quotes-dlx'),
          value: value,
          onChange: function onChange(newValue) {
            _onChange4(newValue);
          },
          type: "password",
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('qdlx-admin__text-control', {
            'qdlx-error': 'required' === ((_errors$turnstileSecr = errors.turnstileSecret) === null || _errors$turnstileSecr === void 0 ? void 0 : _errors$turnstileSecr.type),
            'is-required': true
          }),
          name: "search-turnstile-secret-key"
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin-component-row"
    }, getValues('turnstileSiteKey') && getValues('turnstileSecret') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "dlx-admin-component-row dlx-admin-component-row-button no-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Preview Turnstile', 'quotes-dlx'),
      className: "dlx-admin__button dlx__btn-white",
      onClick: function onClick() {
        var _formValues$language;
        // Build a URL from admin-ajax.
        var adminAjaxUrl = quotes_dlx_admin.ajaxurl; // Can't use global `ajaxurl` here because `ajaxurl` is a relative path.

        // Add query params to adminAjaxUrl.
        var url = new URL(adminAjaxUrl);
        url.searchParams.set('action', 'quotes_dlx_turnstile_admin_preview');
        url.searchParams.set('nonce', quotes_dlx_admin.preview_nonce);
        url.searchParams.set('siteKey', formValues.turnstileSiteKey);
        url.searchParams.set('secretKey', formValues.turnstileSecret);
        url.searchParams.set('language', (_formValues$language = formValues.language) !== null && _formValues$language !== void 0 ? _formValues$language : 'en');
        url.searchParams.set('widgetAppearance', formValues.widgetAppearance);
        url.searchParams.set('widgetTheme', formValues.turnstileTheme);
        url.searchParams.set('widgetSize', formValues.turnstileWidgetSize);

        // Let's get the URL.
        var iframeAjaxUrl = url.toString();

        // Launch iframe in fancybox.
        _fancyapps_ui__WEBPACK_IMPORTED_MODULE_6__.Fancybox.show([{
          src: iframeAjaxUrl,
          type: 'iframe',
          autoStart: false,
          id: 'dlx-quotes-turnstile-preview'
        }]);
      },
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
        size: "1x",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__.faEye,
        style: {
          color: 'currentColor'
        }
      }),
      iconSize: "1x"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Preview and Test', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: "dlx-admin__button dlx__btn-white",
      href: "https://dlxplugins.com/how-to/how-to-retrieve-your-cloudflare-turnstile-site-and-secret-keys/",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
        size: "1x",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__.faArrowUpRightFromSquare,
        style: {
          color: 'currentColor'
        }
      }),
      iconSize: "1x",
      target: "_blank"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Find Your Keys', 'quotes-dlx')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin-component-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_19__.Controller, {
      name: "turnstileTheme",
      control: control,
      render: function render(_ref5) {
        var _ref5$field = _ref5.field,
          _onChange5 = _ref5$field.onChange,
          value = _ref5$field.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose a Widget Theme', 'quotes-dlx'),
          className: "dlx-admin__select-control",
          value: value,
          onChange: function onChange(stringValue) {
            _onChange5(stringValue);
          },
          options: [/* light, dark, auto */
          {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Auto', 'quotes-dlx'),
            value: 'auto'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Light', 'quotes-dlx'),
            value: 'light'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dark', 'quotes-dlx'),
            value: 'dark'
          }],
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your Cloudflare Turnstile Widget Theme. If you select `auto`, the widget will automatically change between light and dark based on the user’s operating system preference.', 'quotes-dlx')
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin-component-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_19__.Controller, {
      name: "widgetAppearance",
      control: control,
      render: function render(_ref6) {
        var _ref6$field = _ref6.field,
          _onChange6 = _ref6$field.onChange,
          value = _ref6$field.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Visibility', 'quotes-dlx'),
          className: "dlx-admin__select-control",
          value: value,
          onChange: function onChange(stringValue) {
            _onChange6(stringValue);
          },
          options: [/* light, dark, auto */
          {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Always', 'quotes-dlx'),
            value: 'always'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Invisible', 'quotes-dlx'),
            value: 'interaction-only'
          }],
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set whether the widget is visible or invisible. Users can still be presented with a challenge if the widget is invisible.', 'quotes-dlx')
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin-component-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_19__.Controller, {
      name: "widgetSize",
      control: control,
      render: function render(_ref7) {
        var _ref7$field = _ref7.field,
          _onChange7 = _ref7$field.onChange,
          value = _ref7$field.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Widget Size', 'quotes-dlx'),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select the size for the widget.', 'quotes-dlx'),
          value: value,
          options: [/* normal, compact */
          {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Normal', 'quotes-dlx'),
            value: 'normal'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Compact', 'quotes-dlx'),
            value: 'compact'
          }],
          onChange: function onChange(widgetSizeValue) {
            _onChange7(widgetSizeValue);
          }
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin-component-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_19__.Controller, {
      name: "language",
      control: control,
      render: function render(_ref8) {
        var _ref8$field = _ref8.field,
          _onChange8 = _ref8$field.onChange,
          value = _ref8$field.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Language', 'quotes-dlx'),
          className: "dlx-admin__select-control",
          value: value,
          onChange: function onChange(stringValue) {
            _onChange8(stringValue);
          },
          options: [{
            value: 'ar',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Arabic', 'quotes-dlx')
          }, {
            value: 'ar-eg',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Arabic (Egypt)', 'quotes-dlx')
          }, {
            value: 'zh',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Chinese', 'quotes-dlx')
          }, {
            value: 'zh-cn',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Chinese (Simplified)', 'quotes-dlx')
          }, {
            value: 'zh-tw',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Chinese (Traditional)', 'quotes-dlx')
          }, {
            value: 'nl',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dutch', 'quotes-dlx')
          }, {
            value: 'en',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('English', 'quotes-dlx')
          }, {
            value: 'fa',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Farsi', 'quotes-dlx')
          }, {
            value: 'fr',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('French', 'quotes-dlx')
          }, {
            value: 'de',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('German', 'quotes-dlx')
          }, {
            value: 'id',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Indonesian', 'quotes-dlx')
          }, {
            value: 'it',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Italian', 'quotes-dlx')
          }, {
            value: 'ja',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Japanese', 'quotes-dlx')
          }, {
            value: 'ko',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Korean', 'quotes-dlx')
          }, {
            value: 'tlh',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Klingon', 'quotes-dlx')
          }, {
            value: 'pl',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Polish', 'quotes-dlx')
          }, {
            value: 'pt',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Portuguese', 'quotes-dlx')
          }, {
            value: 'pt-br',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Portuguese (Brazil)', 'quotes-dlx')
          }, {
            value: 'ru',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Russian', 'quotes-dlx')
          }, {
            value: 'es',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spanish', 'quotes-dlx')
          }, {
            value: 'tr',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Turkish', 'quotes-dlx')
          }, {
            value: 'uk',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Ukrainian', 'quotes-dlx')
          }, {
            value: 'uk-ua',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Ukrainian (Ukraine)', 'quotes-dlx')
          }],
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your Cloudflare Turnstile Language.', 'quotes-dlx')
        });
      }
    })))), 'recaptcha' === getValues('captchaType') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin-component-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_19__.Controller, {
      name: "recaptchaSiteKey",
      control: control,
      rules: {
        required: true
      },
      render: function render(_ref9) {
        var _errors$recaptchaSite;
        var field = _ref9.field;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, _extends({
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Recaptcha 3 Site Key', 'quotes-dlx')
        }, field, {
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('qdlx-admin__text-control', {
            'has-error': 'required' === ((_errors$recaptchaSite = errors.recaptchaSiteKey) === null || _errors$recaptchaSite === void 0 ? void 0 : _errors$recaptchaSite.type),
            'is-required': true
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter your Recaptcha 3 Site Key', 'comment-edit-pro'),
          "aria-required": "true"
        }));
      }
    }), 'required' === ((_errors$recaptchaSite2 = errors.recaptchaSiteKey) === null || _errors$recaptchaSite2 === void 0 ? void 0 : _errors$recaptchaSite2.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_10__["default"], {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
      status: "error",
      politeness: "assertive",
      inline: true,
      icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_12__["default"]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin-component-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_19__.Controller, {
      name: "recaptchaSecretKey",
      control: control,
      rules: {
        required: true
      },
      render: function render(_ref10) {
        var _errors$recaptchaSite3;
        var field = _ref10.field;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, _extends({
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Recaptcha 3 Secret Key', 'quotes-dlx')
        }, field, {
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('qdlx-admin__text-control', {
            'has-error': 'required' === ((_errors$recaptchaSite3 = errors.recaptchaSiteKey) === null || _errors$recaptchaSite3 === void 0 ? void 0 : _errors$recaptchaSite3.type),
            'is-required': true
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter your Recaptcha 3 Secret Key', 'comment-edit-pro'),
          "aria-required": "true"
        }));
      }
    }), 'required' === ((_errors$recaptchaSecr = errors.recaptchaSecretKey) === null || _errors$recaptchaSecr === void 0 ? void 0 : _errors$recaptchaSecr.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_10__["default"], {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
      status: "error",
      politeness: "assertive",
      inline: true,
      icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_12__["default"]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin-component-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_19__.Controller, {
      name: "recaptchaScoreThreshold",
      control: control,
      render: function render(_ref11) {
        var _ref11$field = _ref11.field,
          _onChange9 = _ref11$field.onChange,
          value = _ref11$field.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set reCAPTCHA Minimum Threshold', 'comment-edit-pro'),
          step: 0.05,
          value: value,
          max: 1,
          min: 0,
          currentInput: value,
          initialPosition: value,
          allowReset: true,
          className: "qdlx-admin__range-control",
          onChange: function onChange(recaptchaThreshold) {
            _onChange9(recaptchaThreshold);
          },
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The threshold score is between 0 and 1. The higher the score, the higher the chance of a successful reCAPTCHA challenge. The default value is 0.5. Meaning that the reCAPTCHA challenge will succeed if the score is greater than or equal to 0.5.', 'comment-edit-pro'),
          trackColor: "#8019c4",
          railColor: "#dad4eb"
        }));
      }
    }))))));
  };

  /**
   * Outputs email fields and template tags.
   *
   * @return {null} Return component or null.
   */
  var getEmailFields = function getEmailFields() {
    if (getValues('emailSendType') !== 'form') {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      scope: "row"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Email Fields', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "qdlx-admin-description"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Customize the fields that are displayed in the email form.', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin-component-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_19__.Controller, {
      name: "emailModalTitle",
      control: control,
      rules: {
        required: true
      },
      render: function render(_ref12) {
        var _errors$emailModalTit;
        var _ref12$field = _ref12.field,
          _onChange10 = _ref12$field.onChange,
          value = _ref12$field.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "qdlx-admin-email-template-tag-row"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Email Modal Title', 'quotes-dlx'),
          value: value,
          onChange: function onChange(newValue) {
            _onChange10(newValue);
          },
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('qdlx-admin__text-control', {
            'qdlx-error': 'required' === ((_errors$emailModalTit = errors.emailModalTitle) === null || _errors$emailModalTit === void 0 ? void 0 : _errors$emailModalTit.type),
            'is-required': true
          }),
          ref: emailModalTitleInputRef
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_EmailTemplateTags_index__WEBPACK_IMPORTED_MODULE_18__["default"], {
          onSelect: function onSelect(tag) {
            // Focus on the input field.
            emailModalTitleInputRef.current.focus();
            // Insert the tag at the cursor position.
            var cursorPosition = emailModalTitleInputRef.current.selectionStart;
            var newSubject = [value.slice(0, cursorPosition), tag, value.slice(cursorPosition)].join('');
            setValue('emailModalTitle', newSubject);
          }
        }));
      }
    }), errors.emailSubject && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_10__["default"], {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is required.'),
      status: "error",
      politeness: "assertive",
      inline: false,
      icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_12__["default"]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin-component-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_19__.Controller, {
      name: "fromEmail",
      control: control,
      rules: {
        required: true
      },
      render: function render(_ref13) {
        var _errors$fromEmail;
        var _ref13$field = _ref13.field,
          _onChange11 = _ref13$field.onChange,
          value = _ref13$field.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('From Email', 'quotes-dlx'),
          value: value,
          onChange: function onChange(newValue) {
            if (!(0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.isEmail)(newValue)) {
              setError('fromEmail', {
                shouldFocus: true
              });
            } else {
              clearErrors('fromEmail');
            }
            _onChange11(newValue);
          },
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('qdlx-admin__text-control', {
            'qdlx-error': 'required' === ((_errors$fromEmail = errors.fromEmail) === null || _errors$fromEmail === void 0 ? void 0 : _errors$fromEmail.type),
            'is-required': true
          })
        });
      }
    }), errors.fromEmail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_10__["default"], {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This does not appear to be a valid email address.'),
      status: "error",
      politeness: "assertive",
      inline: false,
      icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_12__["default"]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin-component-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_19__.Controller, {
      name: "fromName",
      control: control,
      rules: {
        required: true
      },
      render: function render(_ref14) {
        var _errors$fromName;
        var _ref14$field = _ref14.field,
          onChange = _ref14$field.onChange,
          value = _ref14$field.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('From Name', 'quotes-dlx'),
          value: value,
          onChange: onChange,
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('qdlx-admin__text-control', {
            'qdlx-error': 'required' === ((_errors$fromName = errors.fromName) === null || _errors$fromName === void 0 ? void 0 : _errors$fromName.type),
            'is-required': true
          }),
          ref: emailBodyInputRef
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin-component-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_19__.Controller, {
      name: "emailSubject",
      control: control,
      rules: {
        required: true
      },
      render: function render(_ref15) {
        var _errors$emailSubject;
        var _ref15$field = _ref15.field,
          _onChange12 = _ref15$field.onChange,
          value = _ref15$field.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "qdlx-admin-email-template-tag-row"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Email Subject', 'quotes-dlx'),
          value: value,
          onChange: function onChange(newValue) {
            _onChange12(newValue);
          },
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('qdlx-admin__text-control', {
            'qdlx-error': 'required' === ((_errors$emailSubject = errors.emailSubject) === null || _errors$emailSubject === void 0 ? void 0 : _errors$emailSubject.type),
            'is-required': true
          }),
          ref: emailSubjectInputRef
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_EmailTemplateTags_index__WEBPACK_IMPORTED_MODULE_18__["default"], {
          onSelect: function onSelect(tag) {
            // Focus on the input field.
            emailSubjectInputRef.current.focus();
            // Insert the tag at the cursor position.
            var cursorPosition = emailSubjectInputRef.current.selectionStart;
            var newSubject = [value.slice(0, cursorPosition), tag, value.slice(cursorPosition)].join('');
            setValue('emailSubject', newSubject);
          }
        }));
      }
    }), errors.emailSubject && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_10__["default"], {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is required.'),
      status: "error",
      politeness: "assertive",
      inline: false,
      icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_12__["default"]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin-component-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_19__.Controller, {
      name: "emailBody",
      control: control,
      rules: {
        required: true
      },
      render: function render(_ref16) {
        var _errors$emailBody;
        var _ref16$field = _ref16.field,
          _onChange13 = _ref16$field.onChange,
          value = _ref16$field.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "qdlx-admin-email-template-tag-row"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Email Body', 'quotes-dlx'),
          value: value,
          onChange: function onChange(newValue) {
            _onChange13(newValue);
          },
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('qdlx-admin__text-area-control', {
            'qdlx-error': 'required' === ((_errors$emailBody = errors.emailBody) === null || _errors$emailBody === void 0 ? void 0 : _errors$emailBody.type),
            'is-required': true
          }),
          innerRef: emailBodyInputRef
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_EmailTemplateTags_index__WEBPACK_IMPORTED_MODULE_18__["default"], {
          onSelect: function onSelect(tag) {
            // Focus on the input field.
            emailBodyInputRef.current.focus();
            // Insert the tag at the cursor position.
            var cursorPosition = emailBodyInputRef.current.selectionStart;
            var newBody = [value.slice(0, cursorPosition), tag, value.slice(cursorPosition)].join('');
            setValue('emailBody', newBody);
          },
          additionalTags: ADDITIONAL_TEMPLATE_TAGS
        }));
      }
    }), errors.emailBody && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_10__["default"], {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is required.'),
      status: "error",
      politeness: "assertive",
      inline: false,
      icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_12__["default"]
    }))));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons_AtIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    width: 48,
    height: 48,
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "qdlx-admin__heading--text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Email Settings', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set spam protection and customize the email settings when someone shares a quote.', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "form-table",
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Email Send Behavior', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "qdlx-admin-description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('By default, emails are sent via a form. You can also send emails via a default email client.', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_19__.Controller, {
    name: "emailSendType",
    control: control,
    render: function render(_ref17) {
      var _ref17$field = _ref17.field,
        _onChange14 = _ref17$field.onChange,
        value = _ref17$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
        selected: value,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Form', 'quotes-dlx'),
          value: 'form'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Email Client', 'quotes-dlx'),
          value: 'mailto'
        }],
        onChange: function onChange(newValue) {
          _onChange14(newValue);
        }
      });
    }
  }))), 'form' === getValues('emailSendType') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, getEmailFields(), getSpamProtection()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('qdlx__btn qdlx__btn-primary qdlx__btn--icon-right', {
      'qdlx-error': hasErrors()
    }, {
      'qdlx-icon': saving
    }, {
      'is-saving': {
        saving: saving
      }
    }),
    type: "submit",
    text: saving ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Saving…', 'quotes-dlx') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save Defaults', 'quotes-dlx'),
    icon: saving ? _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_16__["default"] : false,
    iconSize: "18",
    iconPosition: "right",
    disabled: saving || resetting
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('qdlx__btn qdlx__btn-danger qdlx__btn--icon-right', {
      'qdlx-icon': resetting
    }, {
      'is-resetting': {
        resetting: resetting
      }
    }),
    type: "button",
    text: resetting ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Resetting…', 'quotes-dlx') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset Defaults', 'quotes-dlx'),
    icon: resetting ? _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_16__["default"] : false,
    iconSize: "18",
    iconPosition: "right",
    disabled: saving || resetting,
    onClick: function onClick(e) {
      setResetting(true);
      handleReset(e);
    }
  })), hasErrors() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_10__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('There are form validation errors. Please correct them above.'),
    status: "error",
    politeness: "polite"
  }), isSaved && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_10__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your settings have been saved.'),
    status: "success",
    politeness: "assertive"
  }), isReset && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_10__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your settings have been reset to defaults.'),
    status: "success",
    politeness: "assertive"
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminEmails);

/***/ }),

/***/ "./src/js/components/icons/TextInsert.js":
/*!***********************************************!*\
  !*** ./src/js/components/icons/TextInsert.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

 // ES6

var TextInsertIcon = function TextInsertIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      enableBackground: 'new 0 0 512 512'
    },
    xmlSpace: "preserve",
    width: props.width,
    height: props.height
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: props.fill,
    d: "M0 0v173.419h49.548V49.548h123.871V0zM338.581 0v49.548h123.871v123.871H512V0zM462.452 338.581v123.871H338.581V512H512V338.581zM49.548 462.452V338.581H0V512h173.419v-49.548zM280.774 231.226v-90.839h-49.548v90.839h-90.839v49.548h90.839v90.839h49.548v-90.839h90.839v-49.548z"
  }));
};
TextInsertIcon.defaultProps = {
  width: 16,
  height: 16,
  fill: '#333333'
};
TextInsertIcon.propTypes = {
  width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  fill: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInsertIcon);

/***/ })

}]);
//# sourceMappingURL=AdminEmails0.0.4.js.map