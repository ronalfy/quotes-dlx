(self["webpackChunkquotes_dlx"] = self["webpackChunkquotes_dlx"] || []).push([["AdminMenuDefaults0.0.5"],{

/***/ "./src/js/admin-panel/admin-components/Notice/index.js":
/*!*************************************************************!*\
  !*** ./src/js/admin-panel/admin-components/Notice/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/a11y */ "./node_modules/@wordpress/a11y/build-module/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/notice/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// eslint-disable-next-line no-unused-vars

 // ES6



var Notice = function Notice(props) {
  var _classNames;
  var message = props.message,
    status = props.status,
    politeness = props.politeness,
    icon = props.icon,
    className = props.className,
    inline = props.inline,
    children = props.children,
    animate = props.animate,
    animationType = props.animationType;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_1__.speak)(message, politeness);
  }, [message, status, politeness]);
  var hasIcon = function hasIcon() {
    return icon !== null;
  };
  var getIcon = function getIcon(Icon) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
      width: 16,
      height: 16,
      fill: "#6c757d"
    });
  };
  var containerClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'qdlx-admin__notice', (_classNames = {
    'qdlx-admin__notice--has-icon': hasIcon()
  }, _defineProperty(_classNames, "qdlx-admin__notice-type--".concat(status), true), _defineProperty(_classNames, "qdlx-admin__notice-appearance--inline", inline), _defineProperty(_classNames, "qdlx-admin__notice-appearance--block", !inline), _defineProperty(_classNames, "qdlx-admin__notice-animate", animate), _defineProperty(_classNames, "qdlx-admin__notice-animate--".concat(animationType), animate), _classNames));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: containerClasses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    isDismissible: false,
    spokenMessage: message,
    actions: []
  }, props), hasIcon() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__notice-icon"
  }, getIcon(icon)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qldx-admin__notice-message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, message, " ", children, " "))));
};
Notice.defaultProps = {
  message: '',
  status: 'info',
  politeness: 'polite',
  icon: null,
  className: '',
  inline: false,
  animate: false,
  animationType: 'fadein'
};
Notice.propTypes = {
  message: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string).isRequired,
  status: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['info', 'warning', 'success', 'error']),
  politeness: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['assertive', 'polite']),
  icon: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  inline: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  animate: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  animatitionType: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['fadein', 'fadeout'])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notice);

/***/ }),

/***/ "./src/js/admin-panel/views/AdminContextualMenu.js":
/*!*********************************************************!*\
  !*** ./src/js/admin-panel/views/AdminContextualMenu.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/toggle-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/text-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var use_async_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-async-resource */ "./node_modules/use-async-resource/lib/index.js");
/* harmony import */ var use_async_resource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_async_resource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_SendCommand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/SendCommand */ "./src/js/utils/SendCommand.js");
/* harmony import */ var _admin_components_Notice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin-components/Notice */ "./src/js/admin-panel/admin-components/Notice/index.js");
/* harmony import */ var _admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin-components/Loaders/AdminDefaultsLoader */ "./src/js/admin-panel/admin-components/Loaders/AdminDefaultsLoader.js");
/* harmony import */ var _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/icons/CircularExplanation */ "./src/js/components/icons/CircularExplanation.js");
/* harmony import */ var _components_icons_FlaskIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/icons/FlaskIcon */ "./src/js/components/icons/FlaskIcon.js");
/* harmony import */ var _components_icons_CircularInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/icons/CircularInfo */ "./src/js/components/icons/CircularInfo.js");
/* harmony import */ var _components_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/icons/MenuIcon */ "./src/js/components/icons/MenuIcon.js");
/* harmony import */ var _contexts_TabsContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../contexts/TabsContext */ "./src/js/admin-panel/contexts/TabsContext.js");
/* harmony import */ var _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/icons/Spinner */ "./src/js/components/icons/Spinner.js");
/* harmony import */ var _admin_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../admin-components/ErrorBoundary */ "./src/js/admin-panel/admin-components/ErrorBoundary/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable no-unused-vars */
















var retrieveDefaults = function retrieveDefaults() {
  return (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_4__["default"])('quotes_dlx_retrieve_admin_menu_options_defaults', {
    nonce: quotes_dlx_admin.options_retrieve_nonce
  });
};
var AdminDefaults = function AdminDefaults(props) {
  var _useAsyncResource = (0,use_async_resource__WEBPACK_IMPORTED_MODULE_2__.useAsyncResource)(retrieveDefaults, []),
    _useAsyncResource2 = _slicedToArray(_useAsyncResource, 2),
    defaults = _useAsyncResource2[0],
    getDefaults = _useAsyncResource2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_13__["default"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Could not load contextual menu defaults.', 'quotes-dlx'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "https://dlxplugins.com/support/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "DLX Plugins Support"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Interface, _extends({
    defaults: defaults
  }, props))));
};
var Interface = function Interface(props) {
  var _errors$copyTextLabel2, _errors$copyTweetLabe2, _errors$copyLinkLabel2, _errors$tweetThisLabe2, _errors$shareThisLabe2, _errors$emailTextLabe2;
  var localStorageFieldValuesKey = 'quotes_dlx_menu_defaults';
  var defaults = props.defaults;
  var response = defaults();
  var _response$data = response.data,
    data = _response$data.data,
    success = _response$data.success;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_TabsContext__WEBPACK_IMPORTED_MODULE_11__["default"]),
    contextualMenuDefaultsDirtyCount = _useContext.contextualMenuDefaultsDirtyCount,
    setContextualMenuDefaultsDirtyCount = _useContext.setContextualMenuDefaultsDirtyCount;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.enable_contextual_menu),
    _useState2 = _slicedToArray(_useState, 2),
    contextMenuActive = _useState2[0],
    setContextMenuActive = _useState2[1];
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
  var enable_global_contextual_menu = data.enable_global_contextual_menu,
    enable_contextual_menu = data.enable_contextual_menu,
    enable_copy_text = data.enable_copy_text,
    enable_copy_tweet = data.enable_copy_tweet,
    enable_copy_link = data.enable_copy_link,
    enable_tweet_this = data.enable_tweet_this,
    enable_share_this = data.enable_share_this,
    enable_email_text = data.enable_email_text,
    email_text_label = data.email_text_label,
    copy_text_label = data.copy_text_label,
    copy_tweet_label = data.copy_tweet_label,
    copy_link_label = data.copy_link_label,
    tweet_this_label = data.tweet_this_label,
    share_this_label = data.share_this_label;
  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_14__.useForm)({
      defaultValues: {
        enableGlobalContextualMenu: enable_global_contextual_menu,
        enableContextualMenu: enable_contextual_menu,
        enableCopyText: enable_copy_text,
        enableCopyTweet: enable_copy_tweet,
        enableCopyLink: enable_copy_link,
        enableTweetThis: enable_tweet_this,
        enableShareThis: enable_share_this,
        enableEmailText: enable_email_text,
        copyTextLabel: copy_text_label,
        emailTextLabel: email_text_label,
        copyTweetLabel: copy_tweet_label,
        copyLinkLabel: copy_link_label,
        tweetThisLabel: tweet_this_label,
        shareThisLabel: share_this_label
      }
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
    setSaving(true);
    (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_4__["default"])('quotes_dlx_save_admin_menu_options', {
      nonce: quotes_dlx_admin.options_save_nonce,
      form_data: formData
    }).then(function (ajaxResponse) {
      var ajaxData = ajaxResponse.data.data;
      var ajaxSuccess = ajaxResponse.data.success;
      if (ajaxSuccess) {
        // Reset count.
        setContextualMenuDefaultsDirtyCount(0);

        // Clear form dirty.
        reset(ajaxData);
        localStorage.setItem(localStorageFieldValuesKey, JSON.stringify(ajaxData));
        localStorage.removeItem(localStorageFieldValuesKey + '_dirty_fields');
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
    (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_4__["default"])('quotes_dlx_reset_admin_menu_options', {
      nonce: quotes_dlx_admin.options_save_nonce
    }).then(function (ajaxResponse) {
      var ajaxData = ajaxResponse.data.data;
      var ajaxSuccess = ajaxResponse.data.success;
      if (ajaxSuccess) {
        // Reset local storage.
        setContextualMenuDefaultsDirtyCount(0);

        // Clear form dirty.
        // Set form fields.
        reset(ajaxData);
        localStorage.setItem(localStorageFieldValuesKey, JSON.stringify(ajaxData));
        localStorage.removeItem(localStorageFieldValuesKey + '_dirty_fields');
        setContextMenuActive(ajaxData.enableContextualMenu);
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
    var maybeSavedFormFields = localStorage.getItem(localStorageFieldValuesKey);
    var maybeDirtyFields = localStorage.getItem(localStorageFieldValuesKey + '_dirty_fields');
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
    if (isDirty || contextualMenuDefaultsDirtyCount > 0) {
      // Get current dirty fields.
      setContextualMenuDefaultsDirtyCount(Object.keys(dirtyFields).length);

      // Save form values to local storage.
      localStorage.setItem(localStorageFieldValuesKey, JSON.stringify(formValues));
      localStorage.setItem(localStorageFieldValuesKey + '_dirty_fields', JSON.stringify(dirtyFields));
    }
    setLoading(false);
  }, [formValues]);
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_6__["default"], null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    width: 48,
    height: 48,
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "qdlx-admin__heading--text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Contextual Menu Defaults', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A meatballs menu is three horizontal dots that resembles a meatball sandwich. It is enabled by default and sits on the top-right corner of your quote. This frees up screen real-estate and allows users to choose how to interact with your quote.', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "form-table",
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Menu Visibility', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "enableContextualMenu",
    control: control,
    render: function render(_ref) {
      var _ref$field = _ref.field,
        _onChange = _ref$field.onChange,
        value = _ref$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable or disable the menu by default.', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          setContextMenuActive(boolValue);
          _onChange(boolValue);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The contextual menu hides away some options so as to not clutter up the Quote interface', 'quotes-dlx'),
        disabled: saving || resetting
      });
    }
  }))), getValues('enableContextualMenu') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Copy Quote', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "enableCopyText",
    control: control,
    render: function render(_ref2) {
      var _ref2$field = _ref2.field,
        _onChange2 = _ref2$field.onChange,
        value = _ref2$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Copy Quote', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          _onChange2(boolValue);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable the copying of the full quote.', 'quotes-dlx'),
        disabled: saving || resetting
      });
    }
  }), getValues('enableCopyText') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "copyTextLabel",
    control: control,
    rules: {
      required: true
    },
    render: function render(_ref3) {
      var _errors$copyTextLabel;
      var field = _ref3.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({}, field, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Copy Quote Label', 'quotes-dlx'),
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx-admin__text-control', {
          'has-error': 'required' === ((_errors$copyTextLabel = errors.copyTextLabel) === null || _errors$copyTextLabel === void 0 ? void 0 : _errors$copyTextLabel.type),
          'is-required': true
        }),
        "aria-required": "true"
      }));
    }
  }), 'required' === ((_errors$copyTextLabel2 = errors.copyTextLabel) === null || _errors$copyTextLabel2 === void 0 ? void 0 : _errors$copyTextLabel2.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_7__["default"]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Copy Tweet', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "enableCopyTweet",
    control: control,
    render: function render(_ref4) {
      var _ref4$field = _ref4.field,
        _onChange3 = _ref4$field.onChange,
        value = _ref4$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Copy Tweet', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          _onChange3(boolValue);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable the copying of the tweet to be used elsewhere.', 'quotes-dlx'),
        disabled: saving || resetting
      });
    }
  }), getValues('enableCopyTweet') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "copyTweetLabel",
    control: control,
    rules: {
      required: true
    },
    render: function render(_ref5) {
      var _errors$copyTweetLabe;
      var field = _ref5.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({}, field, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Copy Tweet Label', 'quotes-dlx'),
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx-admin__text-control', {
          'has-error': 'required' === ((_errors$copyTweetLabe = errors.copyTweetLabel) === null || _errors$copyTweetLabe === void 0 ? void 0 : _errors$copyTweetLabe.type),
          'is-required': true
        }),
        "aria-required": "true"
      }));
    }
  }), 'required' === ((_errors$copyTweetLabe2 = errors.copyTweetLabel) === null || _errors$copyTweetLabe2 === void 0 ? void 0 : _errors$copyTweetLabe2.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_7__["default"]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Copy Link', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "enableCopyLink",
    control: control,
    render: function render(_ref6) {
      var _ref6$field = _ref6.field,
        _onChange4 = _ref6$field.onChange,
        value = _ref6$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Copy Link', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          _onChange4(boolValue);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable the copying of the link to the post or quote.', 'quotes-dlx'),
        disabled: saving || resetting
      });
    }
  }), getValues('enableCopyLink') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "copyLinkLabel",
    control: control,
    rules: {
      required: true
    },
    render: function render(_ref7) {
      var _errors$copyLinkLabel;
      var field = _ref7.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({}, field, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Copy Link Label', 'quotes-dlx'),
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx-admin__text-control', {
          'has-error': 'required' === ((_errors$copyLinkLabel = errors.copyLinkLabel) === null || _errors$copyLinkLabel === void 0 ? void 0 : _errors$copyLinkLabel.type),
          'is-required': true
        }),
        "aria-required": "true"
      }));
    }
  }), 'required' === ((_errors$copyLinkLabel2 = errors.copyLinkLabel) === null || _errors$copyLinkLabel2 === void 0 ? void 0 : _errors$copyLinkLabel2.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_7__["default"]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tweet This', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "enableTweetThis",
    control: control,
    render: function render(_ref8) {
      var _ref8$field = _ref8.field,
        _onChange5 = _ref8$field.onChange,
        value = _ref8$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Tweet This Button', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          _onChange5(boolValue);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A Tweet This option will show at the bottom of the menu with this selected.', 'quotes-dlx'),
        disabled: saving || resetting
      });
    }
  }), getValues('enableTweetThis') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "tweetThisLabel",
    control: control,
    rules: {
      required: true
    },
    render: function render(_ref9) {
      var _errors$tweetThisLabe;
      var field = _ref9.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({}, field, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tweet This Label', 'quotes-dlx'),
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx-admin__text-control', {
          'has-error': 'required' === ((_errors$tweetThisLabe = errors.tweetThisLabel) === null || _errors$tweetThisLabe === void 0 ? void 0 : _errors$tweetThisLabe.type),
          'is-required': true
        }),
        "aria-required": "true"
      }));
    }
  }), 'required' === ((_errors$tweetThisLabe2 = errors.tweetThisLabel) === null || _errors$tweetThisLabe2 === void 0 ? void 0 : _errors$tweetThisLabe2.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_7__["default"]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Share This', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "enableShareThis",
    control: control,
    render: function render(_ref10) {
      var _ref10$field = _ref10.field,
        _onChange6 = _ref10$field.onChange,
        value = _ref10$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Share This (Facebook) Button', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          _onChange6(boolValue);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A Share This (to Facebook) option will show at the bottom of the menu with this selected.', 'quotes-dlx'),
        disabled: saving || resetting
      });
    }
  }), getValues('enableShareThis') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "shareThisLabel",
    control: control,
    rules: {
      required: true
    },
    render: function render(_ref11) {
      var _errors$shareThisLabe;
      var field = _ref11.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({}, field, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Share This Label', 'quotes-dlx'),
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx-admin__text-control', {
          'has-error': 'required' === ((_errors$shareThisLabe = errors.shareThisLabel) === null || _errors$shareThisLabe === void 0 ? void 0 : _errors$shareThisLabe.type),
          'is-required': true
        }),
        "aria-required": "true"
      }));
    }
  }), 'required' === ((_errors$shareThisLabe2 = errors.shareThisLabel) === null || _errors$shareThisLabe2 === void 0 ? void 0 : _errors$shareThisLabe2.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_7__["default"]
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The following features are experimental and may be removed or revised in a future release.'),
    status: "warning",
    politeness: "polite",
    inline: false,
    icon: _components_icons_FlaskIcon__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "form-table",
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Email Option', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "enableEmailText",
    control: control,
    render: function render(_ref12) {
      var _ref12$field = _ref12.field,
        _onChange7 = _ref12$field.onChange,
        value = _ref12$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Email Option', 'quotes-dlx'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set whether users can email a quote to themselves or others.', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          setContextMenuActive(boolValue);
          _onChange7(boolValue);
        },
        disabled: saving || resetting
      });
    }
  }), getValues('enableEmailText') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "emailTextLabel",
    control: control,
    rules: {
      required: true
    },
    render: function render(_ref13) {
      var _errors$emailTextLabe;
      var field = _ref13.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({}, field, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Email Quote Label', 'quotes-dlx'),
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx-admin__text-control', {
          'has-error': 'required' === ((_errors$emailTextLabe = errors.emailTextLabel) === null || _errors$emailTextLabe === void 0 ? void 0 : _errors$emailTextLabe.type),
          'is-required': true
        }),
        "aria-required": "true",
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This text will be the text displayed for the Email Share option in the contextual menu.', 'quotes-dlx')
      }));
    }
  }), 'required' === ((_errors$emailTextLabe2 = errors.emailTextLabel) === null || _errors$emailTextLabe2 === void 0 ? void 0 : _errors$emailTextLabe2.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_7__["default"]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set Globally', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_14__.Controller, {
    name: "enableGlobalContextualMenu",
    control: control,
    render: function render(_ref14) {
      var _ref14$field = _ref14.field,
        _onChange8 = _ref14$field.onChange,
        value = _ref14$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set Contextual Menu Options Globally', 'quotes-dlx'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The options on this page will be applied globally throughout your site content.', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          setContextMenuActive(boolValue);
          _onChange8(boolValue);
        },
        disabled: saving || resetting
      });
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["default"], {
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
    text: saving ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Saving…', 'quotes-dlx') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save Menu Defaults', 'quotes-dlx'),
    icon: saving ? _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_12__["default"] : false,
    iconSize: "18",
    iconPosition: "right",
    disabled: saving || resetting
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx__btn qdlx__btn-danger qdlx__btn--icon-right', {
      'has-icon': resetting
    }, {
      'is-resetting': {
        resetting: resetting
      }
    }),
    type: "button",
    text: resetting ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Resetting…', 'quotes-dlx') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset Menu Defaults', 'quotes-dlx'),
    icon: resetting ? _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_12__["default"] : false,
    iconSize: "18",
    iconPosition: "right",
    disabled: saving || resetting,
    onClick: function onClick(e) {
      setResetting(true);
      handleReset(e);
    }
  })), hasErrors() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('There are form validation errors. Please correct them above.'),
    status: "error",
    politeness: "polite"
  }), isSaved && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your settings have been saved.'),
    status: "success",
    politeness: "assertive"
  }), isReset && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your settings have been reset to defaults.'),
    status: "success",
    politeness: "assertive"
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminDefaults);

/***/ }),

/***/ "./src/js/components/icons/CircularExplanation.js":
/*!********************************************************!*\
  !*** ./src/js/components/icons/CircularExplanation.js ***!
  \********************************************************/
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

 // ES6

var CircularExclamationIcon = function CircularExclamationIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: props.width,
    height: props.height
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "var( ".concat(props["var"], ")"),
    d: "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-24 152c0-13.2 10.8-24 24-24s24 10.75 24 24v128c0 13.25-10.75 24-24 24s-24-10.7-24-24V152zm24 248c-17.36 0-31.44-14.08-31.44-31.44s14.07-31.44 31.44-31.44 31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z"
  }));
};
CircularExclamationIcon.defaultProps = {
  width: 16,
  height: 16,
  fill: '#333333'
};
CircularExclamationIcon.propTypes = {
  width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  fill: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircularExclamationIcon);

/***/ }),

/***/ "./src/js/components/icons/CircularInfo.js":
/*!*************************************************!*\
  !*** ./src/js/components/icons/CircularInfo.js ***!
  \*************************************************/
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

 // ES6

var CircularInfo = function CircularInfo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: props.width,
    height: props.height
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: props.fill,
    d: "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 128c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.3-32-32 14.3-32 32-32zm40 256h-80c-13.2 0-24-10.7-24-24s10.75-24 24-24h16v-64h-8c-13.25 0-24-10.75-24-24s10.8-24 24-24h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24s-10.7 24-24 24z"
  }));
};
CircularInfo.defaultProps = {
  width: 16,
  height: 16,
  fill: '#333333'
};
CircularInfo.propTypes = {
  width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  fill: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircularInfo);

/***/ }),

/***/ "./src/js/components/icons/Spinner.js":
/*!********************************************!*\
  !*** ./src/js/components/icons/Spinner.js ***!
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

 // ES6

var Spinner = function Spinner(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512",
    width: props.width,
    height: props.height
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "fa-primary",
    fill: props.primaryColor,
    d: "M256 32c0-17.67 14.3-32 32-32 141.4 0 256 114.6 256 256 0 46.6-12.5 90.4-34.3 128-8.8 15.3-28.4 20.6-44.6 11.7-14.4-8.8-19.6-28.4-10.8-44.6 16.3-27.3 25.7-60.1 25.7-96 0-106-86-192-192-192-17.7 0-32-13.43-32-32v.9z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M287.1 64c-106 0-192 85.1-192 192 0 106 86 192 192 192 71 0 132.2-37.5 165.8-93.6l.1.1c-6.9 14.9-1.5 32.8 12.1 41.2 16.2 8.9 35.8 3.6 44.6-11.7.2-.3.4-.6.5-.9C466.1 460.1 383.1 512 288 512 146.6 512 32 397.4 32 256S146.6 0 288 0c-17.7 0-32 14.33-32 32s14.3 32 32 32h-.9z",
    fill: props.secondaryColor,
    style: {
      opacity: 0.4
    }
  }));
};
Spinner.defaultProps = {
  width: 24,
  height: 24,
  primaryColor: 'currentColor',
  secondaryColor: 'currentColor'
};
Spinner.propTypes = {
  width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  primaryColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  secondaryColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

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


function sendCommand(action, data, maybeAjaxUrl) {
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
    url: maybeAjaxUrl !== null && maybeAjaxUrl !== void 0 ? maybeAjaxUrl : ajaxurl,
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

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=AdminMenuDefaults0.0.5.js.map