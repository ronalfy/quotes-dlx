(self["webpackChunkquotes_dlx"] = self["webpackChunkquotes_dlx"] || []).push([["AdminLicense0.0.8"],{

/***/ "./src/js/admin-panel/admin-components/Notice/index.js"
/*!*************************************************************!*\
  !*** ./src/js/admin-panel/admin-components/Notice/index.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// eslint-disable-next-line no-unused-vars
;
 // ES6



var Notice = function Notice(props) {
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
    (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_2__.speak)(message, politeness);
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
  var containerClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'qdlx-admin__notice', _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    'qdlx-admin__notice--has-icon': hasIcon()
  }, "qdlx-admin__notice-type--".concat(status), true), "qdlx-admin__notice-appearance--inline", inline), "qdlx-admin__notice-appearance--block", !inline), "qdlx-admin__notice-animate", animate), "qdlx-admin__notice-animate--".concat(animationType), animate));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: containerClasses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Notice, _extends({
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
  message: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  status: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['info', 'warning', 'success', 'error']),
  politeness: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['assertive', 'polite']),
  icon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  inline: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  animate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  animatitionType: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['fadein', 'fadeout'])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notice);

/***/ },

/***/ "./src/js/admin-panel/views/AdminLicense.js"
/*!**************************************************!*\
  !*** ./src/js/admin-panel/views/AdminLicense.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var use_async_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-async-resource */ "./node_modules/use-async-resource/lib/index.js");
/* harmony import */ var use_async_resource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_async_resource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_SendCommand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/SendCommand */ "./src/js/utils/SendCommand.js");
/* harmony import */ var _admin_components_Notice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../admin-components/Notice */ "./src/js/admin-panel/admin-components/Notice/index.js");
/* harmony import */ var _admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../admin-components/Loaders/AdminDefaultsLoader */ "./src/js/admin-panel/admin-components/Loaders/AdminDefaultsLoader.js");
/* harmony import */ var _components_icons_KeyIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/icons/KeyIcon */ "./src/js/components/icons/KeyIcon.js");
/* harmony import */ var _components_icons_VialIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/icons/VialIcon */ "./src/js/components/icons/VialIcon.js");
/* harmony import */ var _contexts_TabsContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../contexts/TabsContext */ "./src/js/admin-panel/contexts/TabsContext.js");
/* harmony import */ var _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/icons/Spinner */ "./src/js/components/icons/Spinner.js");
/* harmony import */ var _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/icons/CircularExplanation */ "./src/js/components/icons/CircularExplanation.js");
/* harmony import */ var _components_icons_CircularInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/icons/CircularInfo */ "./src/js/components/icons/CircularInfo.js");
/* harmony import */ var _components_icons_CodeBranchIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/icons/CodeBranchIcon */ "./src/js/components/icons/CodeBranchIcon.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/eye-off.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/eye.js");
/* harmony import */ var _admin_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../admin-components/ErrorBoundary */ "./src/js/admin-panel/admin-components/ErrorBoundary/index.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
;

















var retrieveDefaults = function retrieveDefaults() {
  return (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_6__["default"])('quotes_dlx_retrieve_admin_license_core', {
    nonce: quotes_dlx_admin.options_retrieve_nonce
  });
};
var AdminLicense = function AdminLicense(props) {
  var _useAsyncResource = (0,use_async_resource__WEBPACK_IMPORTED_MODULE_3__.useAsyncResource)(retrieveDefaults, []),
    _useAsyncResource2 = _slicedToArray(_useAsyncResource, 2),
    defaults = _useAsyncResource2[0],
    getDefaults = _useAsyncResource2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_18__["default"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Could not load license defaults.', 'quotes-dlx'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "https://dlxplugins.com/support/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "DLX Plugins Support"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Interface, _extends({
    defaults: defaults
  }, props))));
};
var Interface = function Interface(props) {
  var _errors$quotesdlxLice3, _errors$quotesdlxLice4, _errors$quotesdlxLice5;
  var localStorageKey = 'quotes_dlx_licenses';
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_TabsContext__WEBPACK_IMPORTED_MODULE_11__["default"]),
    licensesDirtyCount = _useContext.licensesDirtyCount,
    setLicensesDirtyCount = _useContext.setLicensesDirtyCount;
  var defaults = props.defaults;
  var response = defaults();
  var _response$data = response.data,
    data = _response$data.data,
    success = _response$data.success;
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
    betaSaving = _useState6[0],
    setBetaSaving = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.beta),
    _useState8 = _slicedToArray(_useState7, 2),
    betaEnabled = _useState8[0],
    setBetaEnabled = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    isSaved = _useState0[0],
    setIsSaved = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    revokingLicense = _useState10[0],
    setRevokingLicense = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isRevoked = _useState12[0],
    setIsRevoked = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.license),
    _useState14 = _slicedToArray(_useState13, 2),
    validLicense = _useState14[0],
    setValidLicense = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.license_activated),
    _useState16 = _slicedToArray(_useState15, 2),
    licenseActivated = _useState16[0],
    setLicenseActivated = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data),
    _useState18 = _slicedToArray(_useState17, 2),
    licenseData = _useState18[0],
    setLicenseData = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.license_activated ? false : true),
    _useState20 = _slicedToArray(_useState19, 2),
    showSecret = _useState20[0],
    setShowSecret = _useState20[1];
  var license_key = data.license_key,
    item_name = data.item_name,
    expires = data.expires,
    expires_human_time_diff = data.expires_human_time_diff,
    license_limit = data.license_limit,
    site_count = data.site_count,
    activations_left = data.activations_left,
    license_activated = data.license_activated,
    price_id = data.price_id;
  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
      defaultValues: {
        quotesdlxLicense: license_key.substr(0, 8) + '********'
      }
    }),
    register = _useForm.register,
    control = _useForm.control,
    handleSubmit = _useForm.handleSubmit,
    setValue = _useForm.setValue,
    setError = _useForm.setError,
    getValues = _useForm.getValues,
    reset = _useForm.reset,
    resetField = _useForm.resetField;
  var formValues = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useWatch)({
    control: control
  });
  var _useFormState = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormState)({
      control: control
    }),
    errors = _useFormState.errors,
    isDirty = _useFormState.isDirty,
    dirtyFields = _useFormState.dirtyFields,
    touchedFields = _useFormState.touchedFields;
  var onSubmit = function onSubmit(formData) {
    setSaving(true);
    var quotesdlxLicense = formData.quotesdlxLicense;
    (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_6__["default"])('quotes_dlx_save_admin_license_core', {
      nonce: quotes_dlx_admin.options_save_nonce,
      license_key: quotesdlxLicense
    }).then(function (ajaxResponse) {
      var ajaxData = ajaxResponse.data.data;
      var ajaxSuccess = ajaxResponse.data.success;
      setLicenseData(ajaxData);
      if (ajaxSuccess) {
        if (ajaxData.license_activated) {
          setLicenseActivated(true);
        } else {
          setLicenseActivated(false);
        }
        setIsSaved(true);
        localStorage.setItem(localStorageKey, JSON.stringify(Object.assign(formValues, ajaxData)));
        localStorage.removeItem(localStorageKey + '_dirty_fields');
        resetField('quotesdlxLicense', {
          keepDirty: false,
          keepError: false,
          keepTouched: false,
          defaultValue: ajaxData.quotesdlxLicense.substr(0, 8) + '********'
        });
        // Reset count.
        setLicensesDirtyCount(0);
        setTimeout(function () {
          setIsSaved(false);
        }, 3000);
      } else {
        // Error stuff.
        setError('quotesdlxLicense', {
          type: 'validate',
          message: ajaxData.message
        });
      }
    })["catch"](function (ajaxResponse) {}).then(function (ajaxResponse) {
      setSaving(false);
    });
  };
  var revokeLicense = function revokeLicense(e) {
    setRevokingLicense(true);
    (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_6__["default"])('quotes_dlx_revoke_admin_license_core', {
      nonce: quotes_dlx_admin.options_save_nonce
    }).then(function (ajaxResponse) {
      var ajaxData = ajaxResponse.data.data;
      var ajaxSuccess = ajaxResponse.data.success;
      if (ajaxSuccess) {
        // // Reset count.
        setLicensesDirtyCount(0);
        setLicenseActivated(false);
        setIsRevoked(true);
        localStorage.setItem(localStorageKey, JSON.stringify(Object.assign(formValues, ajaxData)));
        localStorage.removeItem(localStorageKey + '_dirty_fields');
        setTimeout(function () {
          setIsRevoked(false);
        }, 3000);
      } else {
        setError('quotesdlxLicense', {
          type: 'validate',
          message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Revoking the license resulted in an error and could not be deactivated. Please reactivate the license and try again.', 'quotes-dlx')
        });
        setLicenseActivated(false);
      }
    })["catch"](function (ajaxResponse) {}).then(function (ajaxResponse) {
      setRevokingLicense(false);
    });
  };
  var onBetaToggle = function onBetaToggle(on_or_off) {
    setBetaSaving(true);
    (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_6__["default"])('quotes_dlx_save_beta_option', {
      nonce: quotes_dlx_admin.options_save_nonce,
      beta: on_or_off
    }).then(function (ajaxResponse) {
      var ajaxData = ajaxResponse.data.data;
      var ajaxSuccess = ajaxResponse.data.success;
      if (ajaxSuccess) {
        setBetaEnabled(ajaxData.beta);
      }
    })["catch"](function (ajaxResponse) {}).then(function (ajaxResponse) {
      setBetaSaving(false);
    });
  };
  var hasErrors = function hasErrors() {
    return Object.keys(errors).length > 0;
  };
  var getLicenseType = function getLicenseType() {
    switch (price_id) {
      case '1':
        return 'Hobbyist';
        // removed by dead control flow

      case '2':
        return 'Freelancer';
        // removed by dead control flow

      case '3':
        return 'Agency';
        // removed by dead control flow

      case '4':
        return 'Unlimited';
        // removed by dead control flow

      default:
        return 'Subscriber';
        // removed by dead control flow

    }
    return 'Subscriber';
  };
  var getSaveButton = function getSaveButton() {
    var saveText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save License', 'quotes-dlx');
    var saveTextLoading = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Saving…', 'quotes-dlx');
    if (!licenseActivated) {
      saveText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Activate License', 'quotes-dlx');
      saveTextLoading = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Activating…', 'quotes-dlx');
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('qdlx__btn qdlx__btn-primary qdlx__btn--icon-right', {
        'has-error': hasErrors()
      }, {
        'has-icon': saving
      }, {
        'is-saving': {
          saving: saving
        }
      }),
      type: "submit",
      text: saving ? saveTextLoading : saveText,
      icon: saving ? _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_12__["default"] : false,
      iconSize: "18",
      iconPosition: "right",
      disabled: saving || revokingLicense
    }));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Get saved local storage JSON strings.
    var maybeSavedFormFields = localStorage.getItem(localStorageKey);
    var maybeDirtyFields = localStorage.getItem(localStorageKey + '_dirty_fields');
    if (null !== maybeSavedFormFields) {
      // Parse saved JSON string into JSON object.
      var savedFormFields = JSON.parse(maybeSavedFormFields);
      setLicenseData(savedFormFields);
      if (savedFormFields.hasOwnProperty('license')) {
        if ('valid' === savedFormFields.license) {
          setLicenseActivated(true);
        }
      }

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

          var keyValue = value;
          if ('quotesdlxLicense' === key) {
            keyValue = value.substr(0, 8) + '********';
          }
          if (savedDirtyFields.hasOwnProperty(key)) {
            // Key is dirty, so set dirty.
            setValue(key, keyValue, {
              shouldDirty: true,
              shouldValidate: true
            });
          } else {
            // Key is not dirty, so set value without dirty.
            setValue(key, keyValue, {
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
    if (saving || revokingLicense || loading) {
      return;
    }
    if (isDirty || licensesDirtyCount > 0) {
      // Get current dirty fields.
      setLicensesDirtyCount(Object.keys(dirtyFields).length);

      // Save form values to local storage.
      localStorage.setItem(localStorageKey, JSON.stringify(Object.assign(formValues, licenseData)));
      localStorage.setItem(localStorageKey + '_dirty_fields', JSON.stringify(dirtyFields));
    }
    setLoading(false);
  }, [formValues]);
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_8__["default"], null);
  }
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons_KeyIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    width: 48,
    height: 48,
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "qdlx-admin__heading--text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('License', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add a license key to receive support and updates.', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__license--wrapper is-required"
  }, licenseActivated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your license is valid.', 'quotes-dlx'),
    status: "success",
    politeness: "polite"
  }), !licenseActivated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please enter a valid license to receive support and updates', 'quotes-dlx'),
    status: "warning",
    politeness: "polite"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__license--input-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_4__.Controller, {
    name: "quotesdlxLicense",
    control: control,
    rules: {
      required: true,
      pattern: /^[0-9A-Za-z]+$/i,
      validate: true
    },
    render: function render(_ref) {
      var _errors$quotesdlxLice, _errors$quotesdlxLice2;
      var field = _ref.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, _extends({}, field, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('License Key', 'quotes-dlx'),
        id: "search-quotes-dlx-license-secret",
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('qdlx-admin__text-control', 'qdlx-admin__text-control-license', {
          'has-error': 'pattern' === ((_errors$quotesdlxLice = errors.quotesdlxLicense) === null || _errors$quotesdlxLice === void 0 ? void 0 : _errors$quotesdlxLice.type) || 'required' === ((_errors$quotesdlxLice2 = errors.quotesdlxLicense) === null || _errors$quotesdlxLice2 === void 0 ? void 0 : _errors$quotesdlxLice2.type),
          'is-required': true
        }),
        disabled: licenseActivated,
        "aria-required": "true",
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Entering a license will enable support and updates.', 'quotes-dlx'),
        type: showSecret ? 'text' : 'password'
      }));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__license--input-preview"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    id: "quotes-dlx-license-show-hide",
    type: "checkbox",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click to Show or Hide the License', 'quotes-dlx'),
    onClick: function onClick() {
      if (showSecret) {
        setShowSecret(false);
      } else {
        setShowSecret(true);
      }
    },
    title: showSecret ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide License', 'quotes-dlx') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show License', 'quotes-dlx')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "quotes-dlx-license-show-hide not-is-required"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "quotes-dlx-license-show-hide--label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click to Show or Hide the License', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "quotes-dlx-license-show-hide--icon"
  }, !showSecret ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_17__["default"], {
    "aria-hidden": "true"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_16__["default"], {
    "aria-hidden": "true"
  })))), 'required' === ((_errors$quotesdlxLice3 = errors.quotesdlxLicense) === null || _errors$quotesdlxLice3 === void 0 ? void 0 : _errors$quotesdlxLice3.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_13__["default"]
  }), 'pattern' === ((_errors$quotesdlxLice4 = errors.quotesdlxLicense) === null || _errors$quotesdlxLice4 === void 0 ? void 0 : _errors$quotesdlxLice4.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('It appears there are invalid characters in the license.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_13__["default"]
  }), 'validate' === ((_errors$quotesdlxLice5 = errors.quotesdlxLicense) === null || _errors$quotesdlxLice5 === void 0 ? void 0 : _errors$quotesdlxLice5.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: errors.quotesdlxLicense.message,
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_13__["default"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-actions"
  }, !licenseActivated && getSaveButton(), licenseActivated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('qdlx__btn qdlx__btn-danger qdlx__btn--icon-right', {
      'has-icon': revokingLicense
    }, {
      'is-resetting': {
        revokingLicense: revokingLicense
      }
    }),
    type: "button",
    text: revokingLicense ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Revoking License…', 'quotes-dlx') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Revoke License', 'quotes-dlx'),
    icon: revokingLicense ? _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_12__["default"] : false,
    iconSize: "18",
    iconPosition: "right",
    disabled: saving || revokingLicense,
    onClick: function onClick(e) {
      setRevokingLicense(true);
      revokeLicense(e);
    }
  })), hasErrors() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('There are form validation errors. Please correct them above.', 'quotes-dlx'),
    status: "error",
    politeness: "polite"
  }), isSaved && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your settings have been saved.', 'quotes-dlx'),
    status: "success",
    politeness: "assertive"
  }), isRevoked && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your license has been deactivated for this site.', 'quotes-dlx'),
    status: "success",
    politeness: "assertive"
  }))))), licenseActivated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons_CircularInfo__WEBPACK_IMPORTED_MODULE_14__["default"], {
    width: 48,
    height: 48,
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "qdlx-admin__heading--text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('License Information', 'quotes-dlx')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "quotes-dlx-table quotes-dlx-table--responsive quotes-dlx-table--license-ui"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Item Name', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('License Type', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('License Activations', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expires On', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "col"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Days Left', 'quotes-dlx')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    "data-header": "Item Name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, licenseData.item_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    "data-header": "License Type"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, getLicenseType())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    "data-header": "License Activations"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: ""
  }, licenseData.site_count, " of", ' ', licenseData.license_limit === 0 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Unlimited', 'quotes-dlx') : licenseData.license_limit))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    "data-header": "Expires On"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, licenseData.expires)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    "data-header": "Days Left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, licenseData.expires_human_time_diff)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons_VialIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    width: 48,
    height: 48,
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "qdlx-admin__heading--text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Beta Releases', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "description"
  }, "You can enable Beta Releases by checking this option.")), betaEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Beta Updates are enabled. You will receive beta updates for this plugin.', 'quotes-dlx'),
    status: "info",
    politeness: "assertive",
    icon: _components_icons_CodeBranchIcon__WEBPACK_IMPORTED_MODULE_15__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-inner"
  }, betaSaving && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__license-beta-saving"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons_Spinner__WEBPACK_IMPORTED_MODULE_12__["default"], null)), !betaSaving && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Beta Releases', 'quotes-dlx'),
    className: "qdlx-admin__toggle-control",
    checked: betaEnabled,
    onChange: function onChange(boolValue) {
      onBetaToggle(boolValue);
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('If enabled, any betas available for release will show up in Dashboard->Updates.', 'quotes-dlx')
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminLicense);

/***/ },

/***/ "./src/js/components/icons/CircularExplanation.js"
/*!********************************************************!*\
  !*** ./src/js/components/icons/CircularExplanation.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/***/ },

/***/ "./src/js/components/icons/CircularInfo.js"
/*!*************************************************!*\
  !*** ./src/js/components/icons/CircularInfo.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/***/ },

/***/ "./src/js/components/icons/CodeBranchIcon.js"
/*!***************************************************!*\
  !*** ./src/js/components/icons/CodeBranchIcon.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
;
 // ES6

var CodeBranchIcon = function CodeBranchIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    width: props.width,
    height: props.height
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", _extends({}, props, {
    d: "M160 80c0 32.8-19.7 60.1-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7c-28.3-13.2-48-40.5-48-73.3 0-44.18 35.8-80 80-80s80 35.82 80 80c0 32.8-19.7 60.1-48 73.3v6.7c0 70.7-57.3 128-128 128h-96c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80-44.18 0-80-35.8-80-80 0-32.8 19.75-61 48-73.3V153.3C19.75 140.1 0 112.8 0 80 0 35.82 35.82 0 80 0c44.2 0 80 35.82 80 80zm-80 24c13.25 0 24-10.75 24-24S93.25 56 80 56 56 66.75 56 80s10.75 24 24 24zm288-48c-13.3 0-24 10.75-24 24s10.7 24 24 24 24-10.75 24-24-10.7-24-24-24zM80 456c13.25 0 24-10.7 24-24s-10.75-24-24-24-24 10.7-24 24 10.75 24 24 24z"
  })));
};
CodeBranchIcon.defaultProps = {
  width: 16,
  height: 16,
  fill: '#333333'
};
CodeBranchIcon.propTypes = {
  width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  fill: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CodeBranchIcon);

/***/ },

/***/ "./src/js/components/icons/Spinner.js"
/*!********************************************!*\
  !*** ./src/js/components/icons/Spinner.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/***/ },

/***/ "./src/js/components/icons/VialIcon.js"
/*!*********************************************!*\
  !*** ./src/js/components/icons/VialIcon.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
;
 // ES6

var VialIcon = function VialIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    width: props.width,
    height: props.height
  }, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: props.fill,
    d: "m502.6 169.4-160-160C336.4 3.125 328.2 0 320 0s-16.38 3.125-22.62 9.375c-12.5 12.5-12.5 32.75 0 45.25l6.975 6.977-271.4 271c-38.75 38.75-45.13 102-9.375 143.5C44.08 500 72.76 512 101.5 512h.447c26.38 0 52.75-9.1 72.88-30.12l275.2-274.6 7.365 7.367C463.6 220.9 471.8 224 480 224s16.38-3.125 22.62-9.375C515.1 202.1 515.1 181.9 502.6 169.4zm-192 86.6H200.2l149.3-149.1 55.18 55.12L310.6 256z"
  }));
};
VialIcon.defaultProps = {
  width: 16,
  height: 16,
  fill: '#333333'
};
VialIcon.propTypes = {
  width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  fill: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VialIcon);

/***/ },

/***/ "./src/js/utils/SendCommand.js"
/*!*************************************!*\
  !*** ./src/js/utils/SendCommand.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendCommand)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
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
      return qs__WEBPACK_IMPORTED_MODULE_1__.stringify(jsparams, {
        arrayFormat: 'brackets'
      });
    },
    data: qs__WEBPACK_IMPORTED_MODULE_1__.stringify(data)
  };
  return (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])(options);
}

/***/ },

/***/ "./node_modules/lucide-react/dist/esm/Icon.js"
/*!****************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/Icon.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultAttributes.js */ "./node_modules/lucide-react/dist/esm/defaultAttributes.js");
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/utils.js */ "./node_modules/lucide-react/dist/esm/shared/src/utils.js");
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
    "svg",
    {
      ref,
      ..._defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)("lucide", className),
      ...!children && !(0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.hasA11yProp)(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);


//# sourceMappingURL=Icon.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/createLucideIcon.js"
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/createLucideIcon.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLucideIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/src/utils.js */ "./node_modules/lucide-react/dist/esm/shared/src/utils.js");
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.js */ "./node_modules/lucide-react/dist/esm/Icon.js");
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const createLucideIcon = (iconName, iconNode) => {
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
    ({ className, ...props }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icon_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ref,
      iconNode,
      className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.mergeClasses)(
        `lucide-${(0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.toKebabCase)((0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.toPascalCase)(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.toPascalCase)(iconName);
  return Component;
};


//# sourceMappingURL=createLucideIcon.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/defaultAttributes.js"
/*!*****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/defaultAttributes.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultAttributes)
/* harmony export */ });
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/eye-off.js"
/*!*************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/eye-off.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ EyeOff)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("eye-off", __iconNode);


//# sourceMappingURL=eye-off.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/eye.js"
/*!*********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/eye.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Eye)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("eye", __iconNode);


//# sourceMappingURL=eye.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/shared/src/utils.js"
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/shared/src/utils.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasA11yProp: () => (/* binding */ hasA11yProp),
/* harmony export */   mergeClasses: () => (/* binding */ mergeClasses),
/* harmony export */   toCamelCase: () => (/* binding */ toCamelCase),
/* harmony export */   toKebabCase: () => (/* binding */ toKebabCase),
/* harmony export */   toPascalCase: () => (/* binding */ toPascalCase)
/* harmony export */ });
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};


//# sourceMappingURL=utils.js.map


/***/ },

/***/ "?4f7e"
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
() {

/* (ignored) */

/***/ }

}]);
//# sourceMappingURL=AdminLicense0.0.8.js.map