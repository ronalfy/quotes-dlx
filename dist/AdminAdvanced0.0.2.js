"use strict";
(self["webpackChunkquotes_dlx"] = self["webpackChunkquotes_dlx"] || []).push([["AdminAdvanced0.0.2"],{

/***/ "./node_modules/@wordpress/components/build-module/button-group/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/components/build-module/button-group/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonGroup": () => (/* binding */ ButtonGroup),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/react/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

function UnforwardedButtonGroup(props, ref) {
  const {
    className,
    ...restProps
  } = props;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('components-button-group', className);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    role: "group",
    className: classes
  }, restProps));
}
/**
 * ButtonGroup can be used to group any related buttons together. To emphasize
 * related buttons, a group should share a common container.
 *
 * ```jsx
 * import { Button, ButtonGroup } from '@wordpress/components';
 *
 * const MyButtonGroup = () => (
 *   <ButtonGroup>
 *     <Button variant="primary">Button 1</Button>
 *     <Button variant="primary">Button 2</Button>
 *   </ButtonGroup>
 * );
 * ```
 */


const ButtonGroup = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(UnforwardedButtonGroup);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonGroup);
//# sourceMappingURL=index.js.map

/***/ }),

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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/toggle-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/select-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/text-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/radio-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/button-group/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var use_async_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-async-resource */ "./node_modules/use-async-resource/lib/index.js");
/* harmony import */ var use_async_resource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_async_resource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_icons_Gear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/icons/Gear */ "./src/js/components/icons/Gear.js");
/* harmony import */ var _utils_SendCommand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/SendCommand */ "./src/js/utils/SendCommand.js");
/* harmony import */ var _admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin-components/Notice */ "./src/js/admin-panel/admin-components/Notice/index.js");
/* harmony import */ var _admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../admin-components/Loaders/AdminDefaultsLoader */ "./src/js/admin-panel/admin-components/Loaders/AdminDefaultsLoader.js");
/* harmony import */ var _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/icons/CircularExplanation */ "./src/js/components/icons/CircularExplanation.js");
/* harmony import */ var _validation_twitter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../validation/twitter */ "./src/js/validation/twitter.js");
/* harmony import */ var _components_icons_CircularInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/icons/CircularInfo */ "./src/js/components/icons/CircularInfo.js");
/* harmony import */ var _components_icons_FlaskIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/icons/FlaskIcon */ "./src/js/components/icons/FlaskIcon.js");
/* harmony import */ var _contexts_TabsContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../contexts/TabsContext */ "./src/js/admin-panel/contexts/TabsContext.js");
/* harmony import */ var _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/icons/Spinner */ "./src/js/components/icons/Spinner.js");
/* harmony import */ var _fonts_fonts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../fonts/fonts */ "./src/fonts/fonts.js");
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
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Interface, _extends({
    defaults: defaults
  }, props)));
};

var Interface = function Interface(props) {
  var _errors$desktopBreakp3, _errors$desktopBreakp4, _errors$tabletBreakpo3, _errors$tabletBreakpo4, _errors$mobileBreakpo3, _errors$mobileBreakpo4, _errors$shareButtonTe2, _errors$anchorPrefix3, _errors$anchorPrefix4;

  var localStorageKey = 'quotes_dlx_form_advanced';

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_TabsContext__WEBPACK_IMPORTED_MODULE_12__["default"]),
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

  var desktop_breakpoint = data.desktop_breakpoint,
      desktop_breakpoint_unit = data.desktop_breakpoint_unit,
      tablet_breakpoint = data.tablet_breakpoint,
      tablet_breakpoint_unit = data.tablet_breakpoint_unit,
      mobile_breakpoint = data.mobile_breakpoint,
      mobile_breakpoint_unit = data.mobile_breakpoint_unit,
      enable_fonts = data.enable_fonts,
      enable_custom_fonts = data.enable_custom_fonts,
      primary_font_family = data.primary_font_family,
      secondary_font_family = data.secondary_font_family,
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
      url_shortener = data.url_shortener;

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_15__.useForm)({
    defaultValues: {
      desktopBreakpoint: desktop_breakpoint,
      desktopBreakpointUnit: desktop_breakpoint_unit,
      tabletBreakpoint: tablet_breakpoint,
      tabletBreakpointUnit: tablet_breakpoint_unit,
      mobileBreakpoint: mobile_breakpoint,
      mobileBreakpointUnit: mobile_breakpoint_unit,
      enableFonts: enable_fonts,
      enableCustomFonts: enable_custom_fonts,
      primaryFontFamily: primary_font_family,
      secondaryFontFamily: secondary_font_family,
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
      urlShortener: url_shortener
    }
  }),
      register = _useForm.register,
      control = _useForm.control,
      handleSubmit = _useForm.handleSubmit,
      setValue = _useForm.setValue,
      getValues = _useForm.getValues,
      reset = _useForm.reset;

  var formValues = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_15__.useWatch)({
    control: control
  });

  var _useFormState = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_15__.useFormState)({
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

  var hasErrors = function hasErrors() {
    return Object.keys(errors).length > 0;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log(advancedTabDirtyCount);
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Loaders_AdminDefaultsLoader__WEBPACK_IMPORTED_MODULE_7__["default"], null);
  }

  var getFontFamilies = function getFontFamilies() {
    // Get font families in value label pair.
    var families = [];

    for (var _i3 = 0, _Object$entries2 = Object.entries(_fonts_fonts__WEBPACK_IMPORTED_MODULE_14__["default"]); _i3 < _Object$entries2.length; _i3++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
          key = _Object$entries2$_i[0],
          fontfamily = _Object$entries2$_i[1];

      families.push({
        label: fontfamily.name,
        value: fontfamily.slug
      });
    }

    return families;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons_FlaskIcon__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fonts', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    name: "enableFonts",
    control: control,
    render: function render(_ref) {
      var _ref$field = _ref.field,
          _onChange = _ref$field.onChange,
          value = _ref$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Theme Fonts', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          _onChange(boolValue);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('By default, the themes load their own fonts. If you would like to supply your own fonts, you can disable this option.', 'quotes-dlx')
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "quotes-dlx-admin-theme-options__select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    name: "primaryFontFamily",
    control: control,
    render: function render(_ref2) {
      var _ref2$field = _ref2.field,
          _onChange2 = _ref2$field.onChange,
          value = _ref2$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["default"], {
        className: "qdlx-admin__themes--content-inner qdlx-admin__theme-fonts-select",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a Primary Font', 'quotes-dlx'),
        value: value,
        onChange: function onChange(newFont) {
          return _onChange2(newFont);
        },
        options: getFontFamilies()
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "quotes-dlx-admin-theme-options__select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    name: "secondaryFontFamily",
    control: control,
    render: function render(_ref3) {
      var _ref3$field = _ref3.field,
          _onChange3 = _ref3$field.onChange,
          value = _ref3$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["default"], {
        className: "qdlx-admin__themes--content-inner qdlx-admin__theme-fonts-select",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a Secondary Font', 'quotes-dlx'),
        value: value,
        onChange: function onChange(newFont) {
          return _onChange3(newFont);
        },
        options: getFontFamilies()
      });
    }
  })), getValues('enableFonts') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    name: "enableCustomFonts",
    control: control,
    render: function render(_ref4) {
      var _ref4$field = _ref4.field,
          _onChange4 = _ref4$field.onChange,
          value = _ref4$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Custom Fonts', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          _onChange4(boolValue);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter your own font stack to use for the themes. If you would like to use the default fonts, you can disable this option.', 'quotes-dlx')
      });
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Breakpoints', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__control-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    name: "desktopBreakpoint",
    control: control,
    rules: {
      required: true,
      pattern: /^[0-9]+$/i
    },
    render: function render(_ref5) {
      var _errors$desktopBreakp, _errors$desktopBreakp2;

      var field = _ref5.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["default"], _extends({}, field, {
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
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), 'pattern' === ((_errors$desktopBreakp4 = errors.desktopBreakpoint) === null || _errors$desktopBreakp4 === void 0 ? void 0 : _errors$desktopBreakp4.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The desktop breakpoint can only be numbers.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    control: control,
    name: "desktopBreakpointUnit",
    render: function render(_ref6) {
      var _ref6$field = _ref6.field,
          onChange = _ref6$field.onChange,
          value = _ref6$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    name: "tabletBreakpoint",
    control: control,
    rules: {
      required: true,
      pattern: /^[0-9]+$/i
    },
    render: function render(_ref7) {
      var _errors$tabletBreakpo, _errors$tabletBreakpo2;

      var field = _ref7.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["default"], _extends({}, field, {
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
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), 'pattern' === ((_errors$tabletBreakpo4 = errors.tabletBreakpoint) === null || _errors$tabletBreakpo4 === void 0 ? void 0 : _errors$tabletBreakpo4.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The tablet breakpoint can only be numbers.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    control: control,
    name: "tabletBreakpointUnit",
    render: function render(_ref8) {
      var _ref8$field = _ref8.field,
          onChange = _ref8$field.onChange,
          value = _ref8$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    name: "mobileBreakpoint",
    control: control,
    rules: {
      required: true,
      pattern: /^[0-9]+$/i
    },
    render: function render(_ref9) {
      var _errors$mobileBreakpo, _errors$mobileBreakpo2;

      var field = _ref9.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["default"], _extends({}, field, {
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
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), 'pattern' === ((_errors$mobileBreakpo4 = errors.mobileBreakpoint) === null || _errors$mobileBreakpo4 === void 0 ? void 0 : _errors$mobileBreakpo4.type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_components_Notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The mobile breakpoint can only be numbers.'),
    status: "error",
    politeness: "assertive",
    inline: true,
    icon: _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    control: control,
    name: "mobileBreakpointUnit",
    render: function render(_ref10) {
      var _ref10$field = _ref10.field,
          onChange = _ref10$field.onChange,
          value = _ref10$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tablet Breakpoint', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tweet Button Defaults', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    name: "tweetButtonEnabled",
    control: control,
    render: function render(_ref11) {
      var _ref11$field = _ref11.field,
          _onChange5 = _ref11$field.onChange,
          value = _ref11$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Click to Tweet Button', 'quotes-dlx'),
        className: "qdlx-admin__toggle-control",
        checked: value,
        onChange: function onChange(boolValue) {
          setShowButtonOptions(boolValue);

          _onChange5(boolValue);
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable or Disable the Click to Tweet button. This is useful if you want to hide the button and use the block for just quotes.', 'quotes-dlx')
      });
    }
  }), showButtonOptions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    control: control,
    name: "tweetButtonDisplay",
    render: function render(_ref12) {
      var _ref12$field = _ref12.field,
          _onChange6 = _ref12$field.onChange,
          value = _ref12$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tweet Button Display', 'quotes-dlx'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose to show just text, just an icon, or both.', 'quotes-dlx'),
        selected: value,
        onChange: function onChange(value) {
          setButtonDisplay(value);

          _onChange6(value);
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
  }), ('text' === buttonDisplay || 'full' === buttonDisplay) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    name: "shareButtonText",
    control: control,
    rules: {
      required: true
    },
    render: function render(_ref13) {
      var _errors$shareButtonTe;

      var field = _ref13.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["default"], _extends({}, field, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click Button Text', 'quotes-dlx'),
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    name: "tweetButtonAlignment",
    control: control,
    render: function render(_ref14) {
      var _ref14$field = _ref14.field,
          onClick = _ref14$field.onClick,
          value = _ref14$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["default"], {
        className: "qdlx-admin__button-group--align"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default Button Alignment', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
  }), ('icon' === buttonDisplay || 'full' === buttonDisplay) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    name: "tweetIconAlignment",
    control: control,
    render: function render(_ref15) {
      var _ref15$field = _ref15.field,
          onClick = _ref15$field.onClick,
          value = _ref15$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["default"], {
        className: "qdlx-admin__button-group--align"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tweet Icon Alignment', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    name: "enableLinksInTweet",
    control: control,
    render: function render(_ref16) {
      var _ref16$field = _ref16.field,
          _onChange7 = _ref16$field.onChange,
          value = _ref16$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
  }), enableLinks && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    name: "hasAnchor",
    control: control,
    render: function render(_ref17) {
      var _ref17$field = _ref17.field,
          _onChange8 = _ref17$field.onChange,
          value = _ref17$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
  }), anchorDisplay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    name: "anchorPrefix",
    control: control,
    rules: {
      required: true,
      pattern: /^[a-z]+$/i
    },
    render: function render(_ref18) {
      var _errors$anchorPrefix, _errors$anchorPrefix2;

      var field = _ref18.field;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["default"], _extends({}, field, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    name: "urlShortener",
    control: control,
    render: function render(_ref19) {
      var _ref19$field = _ref19.field,
          _onChange9 = _ref19$field.onChange,
          value = _ref19$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Visit the Jetpack plugin', 'quotes-dlx')))), linkShortenerServices.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    control: control,
    name: "urlShorteningService",
    render: function render(_ref20) {
      var _ref20$field = _ref20.field,
          _onChange10 = _ref20$field.onChange,
          value = _ref20$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Container Settings', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
    name: "align",
    control: control,
    render: function render(_ref21) {
      var _ref21$field = _ref21.field,
          onClick = _ref21$field.onClick,
          value = _ref21$field.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["default"], {
        className: "qdlx-admin__button-group--align"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default block alignment', 'quotes-dlx')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
    icon: saving ? _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_13__["default"] : false,
    iconSize: "18",
    iconPosition: "right",
    disabled: saving || resetting
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_21__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('qdlx__btn qdlx__btn-danger qdlx__btn--icon-right', {
      'has-icon': resetting
    }, {
      'is-resetting': {
        resetting: resetting
      }
    }),
    type: "button",
    text: resetting ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Resetting…', 'quotes-dlx') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset Defaults', 'quotes-dlx'),
    icon: resetting ? _components_icons_Spinner__WEBPACK_IMPORTED_MODULE_13__["default"] : false,
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminAdvanced);

/***/ })

}]);
//# sourceMappingURL=AdminAdvanced0.0.2.js.map