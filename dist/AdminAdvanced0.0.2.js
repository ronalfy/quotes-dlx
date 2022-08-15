"use strict";
(self["webpackChunkquotes_dlx"] = self["webpackChunkquotes_dlx"] || []).push([["AdminAdvanced0.0.2"],{

/***/ "./node_modules/@wordpress/components/build-module/form-toggle/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/components/build-module/form-toggle/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "noop": () => (/* binding */ noop)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/react/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



/**
 * External dependencies
 */

const noop = () => {};

function FormToggle(_ref) {
  let {
    className,
    checked,
    id,
    disabled,
    onChange = noop,
    ...props
  } = _ref;
  const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('components-form-toggle', className, {
    'is-checked': checked,
    'is-disabled': disabled
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", {
    className: wrapperClasses
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "components-form-toggle__input",
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", {
    className: "components-form-toggle__track"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", {
    className: "components-form-toggle__thumb"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormToggle);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/components/build-module/radio-control/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/components/build-module/radio-control/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioControl": () => (/* binding */ RadioControl),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/react/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "./node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
/* harmony import */ var _base_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-control */ "./node_modules/@wordpress/components/build-module/base-control/index.js");



/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



/**
 * Render a user interface to select the user type using radio inputs.
 *
 * ```jsx
 * import { RadioControl } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyRadioControl = () => {
 *   const [ option, setOption ] = useState( 'a' );
 *
 *   return (
 *     <RadioControl
 *       label="User type"
 *       help="The type of the current user"
 *       selected={ option }
 *       options={ [
 *         { label: 'Author', value: 'a' },
 *         { label: 'Editor', value: 'e' },
 *       ] }
 *       onChange={ ( value ) => setOption( value ) }
 *     />
 *   );
 * };
 * ```
 */
function RadioControl( // ref is omitted until we have `WordPressComponentPropsWithoutRef` or add
// ref forwarding to RadioControl.
props) {
  const {
    label,
    className,
    selected,
    help,
    onChange,
    hideLabelFromVision,
    options = [],
    ...additionalProps
  } = props;
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["default"])(RadioControl);
  const id = `inspector-radio-control-${instanceId}`;

  const onChangeValue = event => onChange(event.target.value);

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(options)) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(_base_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: label,
    id: id,
    hideLabelFromVision: hideLabelFromVision,
    help: help,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'components-radio-control')
  }, options.map((option, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)("div", {
    key: `${id}-${index}`,
    className: "components-radio-control__option"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: `${id}-${index}`,
    className: "components-radio-control__input",
    type: "radio",
    name: id,
    value: option.value,
    onChange: onChangeValue,
    checked: option.value === selected,
    "aria-describedby": !!help ? `${id}__help` : undefined
  }, additionalProps)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)("label", {
    htmlFor: `${id}-${index}`
  }, option.label))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioControl);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/components/build-module/text-control/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/components/build-module/text-control/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextControl": () => (/* binding */ TextControl),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/react/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "./node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
/* harmony import */ var _base_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-control */ "./node_modules/@wordpress/components/build-module/base-control/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function UnforwardedTextControl(props, ref) {
  const {
    label,
    hideLabelFromVision,
    value,
    help,
    className,
    onChange,
    type = 'text',
    ...additionalProps
  } = props;
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(TextControl);
  const id = `inspector-text-control-${instanceId}`;

  const onChangeValue = event => onChange(event.target.value);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_base_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    hideLabelFromVision: hideLabelFromVision,
    id: id,
    help: help,
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "components-text-control__input",
    type: type,
    id: id,
    value: value,
    onChange: onChangeValue,
    "aria-describedby": !!help ? id + '__help' : undefined,
    ref: ref
  }, additionalProps)));
}
/**
 * TextControl components let users enter and edit text.
 *
 *
 * @example
 * ```jsx
 * import { TextControl } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyTextControl = () => {
 *   const [ className, setClassName ] = useState( '' );
 *
 *   return (
 *     <TextControl
 *       label="Additional CSS Class"
 *       value={ className }
 *       onChange={ ( value ) => setClassName( value ) }
 *     />
 *   );
 * };
 * ```
 */


const TextControl = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(UnforwardedTextControl);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextControl);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/components/build-module/toggle-control/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/components/build-module/toggle-control/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/react/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "./node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
/* harmony import */ var _form_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form-toggle */ "./node_modules/@wordpress/components/build-module/form-toggle/index.js");
/* harmony import */ var _base_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-control */ "./node_modules/@wordpress/components/build-module/base-control/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function ToggleControl(_ref) {
  let {
    label,
    checked,
    help,
    className,
    onChange,
    disabled
  } = _ref;

  function onChangeToggle(event) {
    onChange(event.target.checked);
  }

  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(ToggleControl);
  const id = `inspector-toggle-control-${instanceId}`;
  let describedBy, helpLabel;

  if (help) {
    describedBy = id + '__help';
    helpLabel = typeof help === 'function' ? help(checked) : help;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_base_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: id,
    help: helpLabel,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('components-toggle-control', className)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_form_toggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: id,
    checked: checked,
    onChange: onChangeToggle,
    "aria-describedby": describedBy,
    disabled: disabled
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("label", {
    htmlFor: id,
    className: "components-toggle-control__label"
  }, label));
}
//# sourceMappingURL=index.js.map

/***/ }),

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
  Roboto: {
    name: 'Roboto',
    slug: 'roboto',
    family: 'Roboto',
    fallback: 'Helvetica, Arial, sans-serif'
  },
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
  'Open Sans': {
    name: 'Open Sans',
    slug: 'open-sans',
    family: 'Open Sans',
    fallback: 'Helvetica, Arial, sans-serif'
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
  'Source Sans Pro': {
    name: 'Source Sans Pro',
    slug: 'source-sans-pro',
    family: 'Source Sans Pro',
    fallback: 'Helvetica, Arial, sans-serif'
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/toggle-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/text-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/select-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/radio-control/index.js");
/* harmony import */ var use_async_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-async-resource */ "./node_modules/use-async-resource/lib/index.js");
/* harmony import */ var use_async_resource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_async_resource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_icons_Gear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/icons/Gear */ "./src/js/components/icons/Gear.js");
/* harmony import */ var _utils_SendCommand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/SendCommand */ "./src/js/utils/SendCommand.js");
/* harmony import */ var _admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin-components/Notice */ "./src/js/admin-panel/admin-components/Notice/index.js");
/* harmony import */ var _fancyapps_ui_src_Fancybox_Fancybox_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fancyapps/ui/src/Fancybox/Fancybox.js */ "./node_modules/@fancyapps/ui/src/Fancybox/Fancybox.js");
/* harmony import */ var _fancyapps_ui_dist_fancybox_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fancyapps/ui/dist/fancybox.css */ "./node_modules/@fancyapps/ui/dist/fancybox.css");
/* harmony import */ var _admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../admin-components/Loaders/AdminDefaultsLoader */ "./src/js/admin-panel/admin-components/Loaders/AdminDefaultsLoader.js");
/* harmony import */ var _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/icons/CircularExplanation */ "./src/js/components/icons/CircularExplanation.js");
/* harmony import */ var _validation_twitter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../validation/twitter */ "./src/js/validation/twitter.js");
/* harmony import */ var _components_icons_CircularInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/icons/CircularInfo */ "./src/js/components/icons/CircularInfo.js");
/* harmony import */ var _components_icons_FlaskIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/icons/FlaskIcon */ "./src/js/components/icons/FlaskIcon.js");
/* harmony import */ var _contexts_TabsContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../contexts/TabsContext */ "./src/js/admin-panel/contexts/TabsContext.js");
/* harmony import */ var _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/icons/Spinner */ "./src/js/components/icons/Spinner.js");
/* harmony import */ var _fonts_fonts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../fonts/fonts */ "./src/fonts/fonts.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var AdminAdvanced = function AdminAdvanced(props) {
  var _useAsyncResource = (0,use_async_resource__WEBPACK_IMPORTED_MODULE_2__.useAsyncResource)(retrieveDefaults, []),
      _useAsyncResource2 = _slicedToArray(_useAsyncResource, 2),
      defaults = _useAsyncResource2[0],
      getDefaults = _useAsyncResource2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Interface, _extends({
    defaults: defaults
  }, props)));
};

var Interface = function Interface(props) {
  var _errors$adobeProjectI, _errors$adobeProjectI2, _errors$customFontPri3, _errors$customFontPri4, _errors$customFontSec3, _errors$customFontSec4, _errors$desktopBreakp3, _errors$desktopBreakp4, _errors$tabletBreakpo3, _errors$tabletBreakpo4, _errors$mobileBreakpo3, _errors$mobileBreakpo4;

  var localStorageKey = 'quotes_dlx_form_advanced';

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_TabsContext__WEBPACK_IMPORTED_MODULE_14__["default"]),
      advancedTabDirtyCount = _useContext.advancedTabDirtyCount,
      setAdvancedTabDirtyCount = _useContext.setAdvancedTabDirtyCount;

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
      _useState10 = _slicedToArray(_useState9, 2),
      enableUrlShortener = _useState10[0],
      setEnableUrlShortener = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState12 = _slicedToArray(_useState11, 2),
      loading = _useState12[0],
      setLoading = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      saving = _useState14[0],
      setSaving = _useState14[1];

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
      isReset = _useState20[0],
      setIsReset = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.adobe_fonts),
      _useState22 = _slicedToArray(_useState21, 2),
      adobeFonts = _useState22[0],
      setAdobeFonts = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState24 = _slicedToArray(_useState23, 2),
      canResetOptions = _useState24[0],
      setCanResetOptions = _useState24[1];

  var desktop_breakpoint = data.desktop_breakpoint,
      desktop_breakpoint_unit = data.desktop_breakpoint_unit,
      tablet_breakpoint = data.tablet_breakpoint,
      tablet_breakpoint_unit = data.tablet_breakpoint_unit,
      mobile_breakpoint = data.mobile_breakpoint,
      mobile_breakpoint_unit = data.mobile_breakpoint_unit,
      enable_fonts = data.enable_fonts,
      custom_font_primary = data.custom_font_primary,
      custom_font_secondary = data.custom_font_secondary,
      enable_custom_fonts = data.enable_custom_fonts,
      primary_font_family = data.primary_font_family,
      secondary_font_family = data.secondary_font_family,
      enable_adobe_fonts = data.enable_adobe_fonts,
      adobe_project_id = data.adobe_project_id,
      activate_adobe_fonts_admin = data.activate_adobe_fonts_admin,
      activate_adobe_fonts_frontend = data.activate_adobe_fonts_frontend,
      template = data.template;

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_17__.useForm)({
    defaultValues: {
      desktopBreakpoint: desktop_breakpoint,
      desktopBreakpointUnit: desktop_breakpoint_unit,
      tabletBreakpoint: tablet_breakpoint,
      tabletBreakpointUnit: tablet_breakpoint_unit,
      mobileBreakpoint: mobile_breakpoint,
      mobileBreakpointUnit: mobile_breakpoint_unit,
      enableFonts: enable_fonts,
      enableCustomFonts: enable_custom_fonts,
      customFontPrimary: custom_font_primary,
      customFontSecondary: custom_font_secondary,
      primaryFontFamily: primary_font_family,
      secondaryFontFamily: secondary_font_family,
      enableAdobeFonts: enable_adobe_fonts,
      adobeProjectId: adobe_project_id,
      activateAdobeFontsAdmin: activate_adobe_fonts_admin,
      activateAdobeFontsFrontend: activate_adobe_fonts_frontend
    }
  }),
      register = _useForm.register,
      control = _useForm.control,
      handleSubmit = _useForm.handleSubmit,
      setValue = _useForm.setValue,
      getValues = _useForm.getValues,
      reset = _useForm.reset,
      trigger = _useForm.trigger;

  var formValues = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_17__.useWatch)({
    control: control
  });

  var _useFormState = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_17__.useFormState)({
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
        setAdvancedTabDirtyCount(0); // Clear form dirty.

        reset(ajaxData);
        localStorage.removeItem(localStorageKey);
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
        setAdvancedTabDirtyCount(0); // Clear form dirty.

        reset(ajaxData);
        localStorage.removeItem(localStorageKey); // Reset toggles.

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

  var refreshAdobeFonts = function refreshAdobeFonts() {
    setSaving(true);
    (0,_utils_SendCommand__WEBPACK_IMPORTED_MODULE_5__["default"])('quotes_dlx_retrieve_remote_adobe_fonts', {
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
      } else {// Error stuff.
      }
    })["catch"](function (ajaxResponse) {}).then(function (ajaxResponse) {
      setSaving(false);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, []);

  var hasErrors = function hasErrors() {
    return Object.keys(errors).length > 0;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var maybeSavedFormFields = localStorage.getItem(localStorageKey);

    if (null !== maybeSavedFormFields) {
      var valuesToSave = JSON.parse(maybeSavedFormFields);

      for (var _i2 = 0, _Object$entries = Object.entries(valuesToSave); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        setValue(key, value, {
          shouldDirty: true,
          shouldValidate: true
        });
      }
    }

    if (isDirty) {
      var touchedFieldsCountToSave = Object.keys(dirtyFields).length;
      setAdvancedTabDirtyCount(touchedFieldsCountToSave);
    }

    setLoading(false);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (saving || resetting || loading) {
      return;
    }

    if (isDirty || advancedTabDirtyCount > 0) {
      // Get current form values.
      var formValuesToSave = JSON.stringify(getValues()); // Get the length of the fields that need to be saved.

      var touchedFieldsCountToSave = Object.keys(dirtyFields).length;
      setAdvancedTabDirtyCount(touchedFieldsCountToSave); // Store touched fields.

      localStorage.setItem(localStorageKey, formValuesToSave);
    } else {
      setAdvancedTabDirtyCount(0);
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_9__["default"], null);
  }

  var getAdobeFonts = function getAdobeFonts() {
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
    var families = []; // Try to get adobe fonts. Push them to the top.

    if (false !== adobeFonts && getValues('enableAdobeFonts')) {
      adobeFonts.forEach(function (font) {
        families.push({
          label: font.name,
          value: font.slug
        });
      });
    } // Get the rest of the fonts.


    for (var _i3 = 0, _Object$entries2 = Object.entries(_fonts_fonts__WEBPACK_IMPORTED_MODULE_16__["default"]); _i3 < _Object$entries2.length; _i3++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
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
    return "".concat(ajaxurl, "?action=quotes_dlx_theme_preview&fontsize=16\n\t\t) }&lineheight=").concat(encodeURIComponent(1.65), "&buttonsize=").concat(encodeURIComponent(16), "&nonce=").concat(quotes_dlx_admin.options_retrieve_nonce, "&template=").concat(encodeURIComponent(template), "&screen=tablet&primary_font_family=").concat(encodeURIComponent(toTitleCase(getValues('primaryFontFamily'))), "&secondary_font_family=").concat(encodeURIComponent(toTitleCase(getValues('secondaryFontFamily'))));
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons_FlaskIcon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    width: 48,
    height: 48,
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "qdlx-admin__heading--text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced Options', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced options allow you to set breakpoints and reset options.', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "form-table",
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Options', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_17__.Controller, {
    name: "enableFonts",
    control: control,
    render: function render(_ref) {
      var _ref$field = _ref.field,
          _onChange = _ref$field.onChange,
          value = _ref$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Theme Fonts', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          _onChange(boolValue);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('By default, the themes load their own fonts. If you would like to supply your own fonts, you can disable this option.', 'quotes-dlx')
      });
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Adobe Fonts', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_17__.Controller, {
    name: "enableAdobeFonts",
    control: control,
    render: function render(_ref2) {
      var _ref2$field = _ref2.field,
          _onChange2 = _ref2$field.onChange,
          value = _ref2$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Adobe Fonts', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          _onChange2(boolValue);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('If you are using Adobe Fonts, you can use them in QuotesDLX.', 'quotes-dlx')
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_17__.Controller, {
    name: "activateAdobeFontsAdmin",
    control: control,
    render: function render(_ref3) {
      var _ref3$field = _ref3.field,
          _onChange3 = _ref3$field.onChange,
          value = _ref3$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Activate Adobe Fonts in the Admin', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          _onChange3(boolValue);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('If you are not using a plugin to add Adobe fonts to your install, you can check this option to load Adobe Fonts in the admin area of your site.', 'quotes-dlx')
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_17__.Controller, {
    name: "activateAdobeFontsFrontend",
    control: control,
    render: function render(_ref4) {
      var _ref4$field = _ref4.field,
          _onChange4 = _ref4$field.onChange,
          value = _ref4$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Activate Adobe Fonts on the Frontend', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          _onChange4(boolValue);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('If you are not using a plugin to add Adobe fonts to your site, you can check this option to load Adobe Fonts on the frontend area of your site.', 'quotes-dlx')
      });
    }
  }), getValues('enableAdobeFonts') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_17__.Controller, {
    name: "adobeProjectId",
    control: control,
    rules: {
      required: true,
      pattern: /^[a-z0-9]+$/i
    },
    render: function render(_ref5) {
      var _errors$anchorPrefix, _errors$anchorPrefix2;

      var field = _ref5.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({}, field, {
        type: "password",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Adobe Fonts Project ID', 'quotes-dlx'),
        id: "search-qdlx-no-autofill",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx-admin__text-control', {
          'has-error': 'pattern' === ((_errors$anchorPrefix = errors.anchorPrefix) === null || _errors$anchorPrefix === void 0 ? void 0 : _errors$anchorPrefix.type) || 'required' === ((_errors$anchorPrefix2 = errors.anchorPrefix) === null || _errors$anchorPrefix2 === void 0 ? void 0 : _errors$anchorPrefix2.type),
          'is-required': true
        }),
        "aria-required": "true",
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter the Adobe Project ID of the web project in order to load Adobe Fonts.', 'quotes-dlx')
      }));
    }
  }), 'required' === ((_errors$adobeProjectI = errors.adobeProjectId) === null || _errors$adobeProjectI === void 0 ? void 0 : _errors$adobeProjectI.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), 'pattern' === ((_errors$adobeProjectI2 = errors.adobeProjectId) === null || _errors$adobeProjectI2 === void 0 ? void 0 : _errors$adobeProjectI2.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please use only lowercase letters and numbers.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), false !== adobeFonts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, getAdobeFonts()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    type: "button",
    text: saving ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Saving…', 'quotes-dlx') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save and Refresh Fonts', 'quotes-dlx'),
    icon: saving ? _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_15__["default"] : false,
    iconSize: "18",
    iconPosition: "right",
    disabled: saving || resetting,
    onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return trigger('adobeProjectId');

            case 2:
              result = _context.sent;

              if (result) {
                refreshAdobeFonts();
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Selection', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "quotes-dlx-admin-theme-options__select span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_17__.Controller, {
    name: "primaryFontFamily",
    control: control,
    render: function render(_ref7) {
      var _ref7$field = _ref7.field,
          _onChange5 = _ref7$field.onChange,
          value = _ref7$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_21__["default"], {
        className: "qdlx-admin__themes--content-inner qdlx-admin__theme-fonts-select",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a Primary Font', 'quotes-dlx'),
        value: value,
        onChange: function onChange(newFont) {
          return _onChange5(newFont);
        },
        options: getFontFamilies()
      });
    }
  }), 'custom' === getValues('primaryFontFamily') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "quotes-dlx-admin-control-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_17__.Controller, {
    name: "customFontPrimary",
    control: control,
    rules: {
      required: true,
      pattern: /^[-\" ,A-Za-z0-9]+$/i
    },
    render: function render(_ref8) {
      var _errors$customFontPri, _errors$customFontPri2;

      var field = _ref8.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({}, field, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter your custom secondary font.', 'quotes-dlx'),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('e.g. "Open Sans", sans-serif', 'quotes-dlx'),
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx-admin__text-control', {
          'has-error': 'pattern' === ((_errors$customFontPri = errors.customFontPrimary) === null || _errors$customFontPri === void 0 ? void 0 : _errors$customFontPri.type) || 'required' === ((_errors$customFontPri2 = errors.customFontPrimary) === null || _errors$customFontPri2 === void 0 ? void 0 : _errors$customFontPri2.type),
          'is-required': true
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set the font and fallbacks.', 'quotes-dlx'),
        "aria-required": "true"
      }));
    }
  }), 'required' === ((_errors$customFontPri3 = errors.customFontPrimary) === null || _errors$customFontPri3 === void 0 ? void 0 : _errors$customFontPri3.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), 'pattern' === ((_errors$customFontPri4 = errors.customFontPrimary) === null || _errors$customFontPri4 === void 0 ? void 0 : _errors$customFontPri4.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('There are invalid characters in the custom font. Make sure you are using double quotes instead of single quotes and leave out the semi-colon at the end.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_10__["default"]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "quotes-dlx-admin-theme-options__select span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_17__.Controller, {
    name: "secondaryFontFamily",
    control: control,
    render: function render(_ref9) {
      var _ref9$field = _ref9.field,
          _onChange6 = _ref9$field.onChange,
          value = _ref9$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_21__["default"], {
        className: "qdlx-admin__themes--content-inner qdlx-admin__theme-fonts-select",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a Secondary Font', 'quotes-dlx'),
        value: value,
        onChange: function onChange(newFont) {
          return _onChange6(newFont);
        },
        options: getFontFamilies()
      });
    }
  }), 'custom' === getValues('secondaryFontFamily') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "quotes-dlx-admin-control-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_17__.Controller, {
    name: "customFontSecondary",
    control: control,
    rules: {
      required: true,
      pattern: /^[-\" ,A-Za-z0-9]+$/i
    },
    render: function render(_ref10) {
      var _errors$customFontSec, _errors$customFontSec2;

      var field = _ref10.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({}, field, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter your custom secondary font.', 'quotes-dlx'),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('e.g. "Open Sans", sans-serif', 'quotes-dlx'),
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx-admin__text-control', {
          'has-error': 'pattern' === ((_errors$customFontSec = errors.customFontSecondary) === null || _errors$customFontSec === void 0 ? void 0 : _errors$customFontSec.type) || 'required' === ((_errors$customFontSec2 = errors.customFontSecondary) === null || _errors$customFontSec2 === void 0 ? void 0 : _errors$customFontSec2.type),
          'is-required': true
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set the font and fallbacks.', 'quotes-dlx'),
        "aria-required": "true"
      }));
    }
  }), 'required' === ((_errors$customFontSec3 = errors.customFontSecondary) === null || _errors$customFontSec3 === void 0 ? void 0 : _errors$customFontSec3.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), 'pattern' === ((_errors$customFontSec4 = errors.customFontSecondary) === null || _errors$customFontSec4 === void 0 ? void 0 : _errors$customFontSec4.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('There are invalid characters in the custom font. Make sure you are using double quotes instead of single quotes and leave out the semi-colon at the end.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_10__["default"]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "components-base-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    "data-fancybox": true,
    onClick: function onClick(e) {
      e.preventDefault();
      new _fancyapps_ui_src_Fancybox_Fancybox_js__WEBPACK_IMPORTED_MODULE_7__.Fancybox([{
        src: getPreviewLink(),
        type: 'iframe'
      }], {
        mainClass: 'qdlx-theme-preview-mobile',
        caption: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Preview', 'quotes-dlx')
      });
    },
    href: getPreviewLink()
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Preview Fonts', 'quotes-dlx'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Breakpoints', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__control-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_17__.Controller, {
    name: "desktopBreakpoint",
    control: control,
    rules: {
      required: true,
      pattern: /^[0-9]+$/i
    },
    render: function render(_ref11) {
      var _errors$desktopBreakp, _errors$desktopBreakp2;

      var field = _ref11.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({}, field, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Desktop Breakpoint', 'quotes-dlx'),
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx-admin__text-control', {
          'has-error': 'pattern' === ((_errors$desktopBreakp = errors.desktopBreakpoint) === null || _errors$desktopBreakp === void 0 ? void 0 : _errors$desktopBreakp.type) || 'required' === ((_errors$desktopBreakp2 = errors.desktopBreakpoint) === null || _errors$desktopBreakp2 === void 0 ? void 0 : _errors$desktopBreakp2.type),
          'is-required': true
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set the desktop breakpoint for all themes.', 'quotes-dlx'),
        "aria-required": "true"
      }));
    }
  }), 'required' === ((_errors$desktopBreakp3 = errors.desktopBreakpoint) === null || _errors$desktopBreakp3 === void 0 ? void 0 : _errors$desktopBreakp3.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), 'pattern' === ((_errors$desktopBreakp4 = errors.desktopBreakpoint) === null || _errors$desktopBreakp4 === void 0 ? void 0 : _errors$desktopBreakp4.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The desktop breakpoint can only be numbers.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_17__.Controller, {
    control: control,
    name: "desktopBreakpointUnit",
    render: function render(_ref12) {
      var _ref12$field = _ref12.field,
          onChange = _ref12$field.onChange,
          value = _ref12$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_22__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Desktop Breakpoint Unit', 'quotes-dlx'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a unit for the desktop breakpoint.', 'quotes-dlx'),
        selected: value,
        onChange: onChange,
        options: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }]
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__control-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_17__.Controller, {
    name: "tabletBreakpoint",
    control: control,
    rules: {
      required: true,
      pattern: /^[0-9]+$/i
    },
    render: function render(_ref13) {
      var _errors$tabletBreakpo, _errors$tabletBreakpo2;

      var field = _ref13.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({}, field, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tablet Breakpoint', 'quotes-dlx'),
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx-admin__text-control', {
          'has-error': 'pattern' === ((_errors$tabletBreakpo = errors.tabletBreakpoint) === null || _errors$tabletBreakpo === void 0 ? void 0 : _errors$tabletBreakpo.type) || 'required' === ((_errors$tabletBreakpo2 = errors.tabletBreakpoint) === null || _errors$tabletBreakpo2 === void 0 ? void 0 : _errors$tabletBreakpo2.type),
          'is-required': true
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set the tablet breakpoint for all themes.', 'quotes-dlx'),
        "aria-required": "true"
      }));
    }
  }), 'required' === ((_errors$tabletBreakpo3 = errors.tabletBreakpoint) === null || _errors$tabletBreakpo3 === void 0 ? void 0 : _errors$tabletBreakpo3.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), 'pattern' === ((_errors$tabletBreakpo4 = errors.tabletBreakpoint) === null || _errors$tabletBreakpo4 === void 0 ? void 0 : _errors$tabletBreakpo4.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The tablet breakpoint can only be numbers.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_17__.Controller, {
    control: control,
    name: "tabletBreakpointUnit",
    render: function render(_ref14) {
      var _ref14$field = _ref14.field,
          onChange = _ref14$field.onChange,
          value = _ref14$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_22__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tablet Breakpoint Unit', 'quotes-dlx'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a unit for the tablet breakpoint.', 'quotes-dlx'),
        selected: value,
        onChange: onChange,
        options: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }]
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__control-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_17__.Controller, {
    name: "mobileBreakpoint",
    control: control,
    rules: {
      required: true,
      pattern: /^[0-9]+$/i
    },
    render: function render(_ref15) {
      var _errors$mobileBreakpo, _errors$mobileBreakpo2;

      var field = _ref15.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({}, field, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mobile Breakpoint', 'quotes-dlx'),
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx-admin__text-control', {
          'has-error': 'pattern' === ((_errors$mobileBreakpo = errors.mobileBreakpoint) === null || _errors$mobileBreakpo === void 0 ? void 0 : _errors$mobileBreakpo.type) || 'required' === ((_errors$mobileBreakpo2 = errors.mobileBreakpoint) === null || _errors$mobileBreakpo2 === void 0 ? void 0 : _errors$mobileBreakpo2.type),
          'is-required': true
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set the mobile breakpoint for all themes.', 'quotes-dlx'),
        "aria-required": "true"
      }));
    }
  }), 'required' === ((_errors$mobileBreakpo3 = errors.mobileBreakpoint) === null || _errors$mobileBreakpo3 === void 0 ? void 0 : _errors$mobileBreakpo3.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This field is a required field.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), 'pattern' === ((_errors$mobileBreakpo4 = errors.mobileBreakpoint) === null || _errors$mobileBreakpo4 === void 0 ? void 0 : _errors$mobileBreakpo4.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The mobile breakpoint can only be numbers.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_17__.Controller, {
    control: control,
    name: "mobileBreakpointUnit",
    render: function render(_ref16) {
      var _ref16$field = _ref16.field,
          onChange = _ref16$field.onChange,
          value = _ref16$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_22__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mobile Breakpoint Unit', 'quotes-dlx'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a unit for the mobile breakpoint.', 'quotes-dlx'),
        selected: value,
        onChange: onChange,
        options: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }]
      });
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    icon: saving ? _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_15__["default"] : false,
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
    icon: resetting ? _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_15__["default"] : false,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
    className: "qdlx-admin__tabs--content-actions no-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin-reset-confirmation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    id: "qdlx-admin__reset-confirm",
    onClick: function onClick(e) {
      setCanResetOptions(e.target.checked);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "qdlx-admin__reset-confirm"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('I understand that this will reset all options.', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx__btn qdlx__btn-danger qdlx__btn--icon-right', {
      'has-icon': resetting
    }, {
      'is-resetting': {
        resetting: resetting
      }
    }),
    type: "button",
    text: resetting ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Resetting…', 'quotes-dlx') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset Options', 'quotes-dlx'),
    icon: resetting ? _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_15__["default"] : false,
    iconSize: "18",
    iconPosition: "right",
    disabled: saving || resetting || !canResetOptions,
    onClick: function onClick(e) {
      setResetting(true);
      handleReset(e);
    }
  })), isReset && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your settings have been reset to defaults.'),
    status: "success",
    politeness: "assertive"
  })))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminAdvanced);

/***/ })

}]);
//# sourceMappingURL=AdminAdvanced0.0.2.js.map