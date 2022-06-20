"use strict";
(self["webpackChunkquotes_dlx"] = self["webpackChunkquotes_dlx"] || []).push([["AdminHome"],{

/***/ "./src/js/admin-panel/views/AdminHome.js":
/*!***********************************************!*\
  !*** ./src/js/admin-panel/views/AdminHome.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-photoswipe-gallery */ "./node_modules/react-photoswipe-gallery/dist/index.js");
/* harmony import */ var photoswipe_dynamic_caption_plugin_photoswipe_dynamic_caption_plugin_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css */ "./node_modules/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css");
/* harmony import */ var photoswipe_dynamic_caption_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! photoswipe-dynamic-caption-plugin */ "./node_modules/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.esm.js");
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! photoswipe/dist/photoswipe.css */ "./node_modules/photoswipe/dist/photoswipe.css");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "./node_modules/@fortawesome/pro-solid-svg-icons/index.es.js");
/* harmony import */ var _contexts_TabsContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/TabsContext */ "./src/js/admin-panel/contexts/TabsContext.js");
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable no-unused-vars */









var _quotes_dlx_admin = quotes_dlx_admin,
    defaults = _quotes_dlx_admin.defaults,
    themes = _quotes_dlx_admin.themes;

var AdminHome = function AdminHome() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_TabsContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
      defaultTheme = _useContext.defaultTheme,
      setCurrentTheme = _useContext.setCurrentTheme;

  var outputCurrentTheme = function outputCurrentTheme() {
    // Get default theme from options or override with context.
    var selectedTemplate = defaults.template;

    if ('' !== defaultTheme) {
      selectedTemplate = defaultTheme;
    }

    var currentTheme = themes.find(function (_ref) {
      var slug = _ref.slug;
      return slug === selectedTemplate;
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin__tabs--content-wrap"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin__tabs--content-panel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin__tabs--content-heading"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
      size: '1x',
      icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faPalette
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "qdlx-admin__heading--text"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Default Theme', 'quotes-dlx')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-admin__tabs--content-inner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "button-reset show-cursor",
      "data-fancybox": true,
      "data-src": currentTheme.preview_image_url,
      "data-caption": currentTheme.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_2__.Gallery, {
      withCaption: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_2__.Item, {
      original: currentTheme.preview_image_url,
      thumbnail: currentTheme.preview_image_url,
      width: currentTheme.image_width,
      height: currentTheme.image_height,
      caption: currentTheme.name
    }, function (_ref2) {
      var ref = _ref2.ref,
          open = _ref2.open;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        ref: ref,
        onClick: open,
        src: currentTheme.preview_image_url,
        caption: currentTheme.name,
        alt: currentTheme.name,
        style: {
          maxWidth: '100%',
          height: 'auto'
        },
        width: currentTheme.image_width,
        height: currentTheme.image_height
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figcaption", null, currentTheme.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "qdlx-button-primary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "qdlx__btn qdlx__btn-primary qdlx__btn--icon-left",
      href: "#/themes"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Change the Default Theme', 'quotes-dlx'))))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--home-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--home-grid-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    size: '1x',
    icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faHandWave
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "qdlx-admin__heading--text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Welcome to Quotes Deluxe!', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('For a quick overview, please check out the video below.', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__themes--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
    width: "560",
    height: "315",
    src: "https://www.youtube.com/embed/kQxFr3Jt_ro",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }))))), outputCurrentTheme(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    size: '1x',
    icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faGears
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "qdlx-admin__heading--text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Block Defaults', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Set block defaults to save you time when inserting the QuotesDLX block', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-button-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "qdlx__btn qdlx__btn-primary qdlx__btn--icon-left",
    href: "#/defaults"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Change the Block Defaults', 'quotes-dlx')))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    size: '1x',
    icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faPuzzle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "qdlx-admin__heading--text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Planning for…', 'quotes-dlx'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Several add-ons are planned should this plugin take off. Here are a few items that are in the planning stage.', 'quotes-dlx'), ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-admin__tabs--content-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Presets"), ": Similar to block patterns and reusable blocks, these will allow you to save and re-use presets depending on what type of quote you are creating."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Overrides"), ": Globally override the block settings regardless of what was set when the block was."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Themes"), ": More DLX themes are planned.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "qdlx-button-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "qdlx__btn qdlx__btn-primary qdlx__btn--icon-left",
    href: "https://mediaron.com/plugins/quotes-dlx/newsletter/"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Sign-up for Updates (external link)', 'quotes-dlx'))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://mediaron.com/highlight-and-share",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    style: {
      maxWidth: '100%'
    },
    src: quotes_dlx_admin.image_dir + '/has-banner.jpg',
    alt: "Highlight and Share banner"
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminHome);

/***/ })

}]);
//# sourceMappingURL=AdminHome.js.map