/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./src/js/blocks/tweet-quotes/edit.js":
/*!********************************************!*\
  !*** ./src/js/blocks/tweet-quotes/edit.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validation_twitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validation/twitter */ "./src/js/validation/twitter.js");
/* harmony import */ var _components_icons_Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/icons/Circle */ "./src/js/components/icons/Circle.js");
/* harmony import */ var _components_unit_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/unit-picker */ "./src/js/components/unit-picker/index.js");
/* harmony import */ var _components_icons_twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/icons/twitter */ "./src/js/components/icons/twitter.js");
/* harmony import */ var _components_icons_paintbrush__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/icons/paintbrush */ "./src/js/components/icons/paintbrush.js");
/* harmony import */ var _components_icons_Preview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/icons/Preview */ "./src/js/components/icons/Preview.js");
/* harmony import */ var _components_icons_NewWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/icons/NewWindow */ "./src/js/components/icons/NewWindow.js");
/* harmony import */ var _components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/icons/CircularExplanation */ "./src/js/components/icons/CircularExplanation.js");
/* harmony import */ var _components_alignment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/alignment */ "./src/js/components/alignment/index.js");
/* harmony import */ var _components_CircularCount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/CircularCount */ "./src/js/components/CircularCount/index.js");
/* harmony import */ var _components_LineCount__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/LineCount */ "./src/js/components/LineCount/index.js");
/* harmony import */ var _components_MeatballMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/MeatballMenu */ "./src/js/components/MeatballMenu/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_20__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */

/* eslint-disable camelcase */

/**
 * External dependencies
 */






















var HtmlToReactParser = (__webpack_require__(/*! html-to-react */ "./node_modules/html-to-react/index.js").Parser);

var TweetQuotes = function TweetQuotes(props) {
  var _classnames, _classnames2;

  var manualUrlInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_13__.createRef)(null);
  var shareTextInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_13__.createRef)(null); // State.

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_13__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      tweetCharacterTotal = _useState2[0],
      setTweetCharacterTotal = _useState2[1];

  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_13__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      tweetHashtagCharLength = _useState4[0],
      setTweetHashtagCharLength = _useState4[1];

  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_13__.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      tweetContentCharLength = _useState6[0],
      setTweetContentCharLength = _useState6[1];

  var _useState7 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_13__.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      tweetUsernameCharLength = _useState8[0],
      setTweetUsernameCharLength = _useState8[1];

  var _useState9 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_13__.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      tweetPermalinkCharLength = _useState10[0],
      setTweetPermalinkCharLength = _useState10[1];

  var _useState11 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_13__.useState)('appearance'),
      _useState12 = _slicedToArray(_useState11, 2),
      selectedTab = _useState12[0],
      setSelectedTab = _useState12[1];

  var _useState13 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_13__.useState)('default'),
      _useState14 = _slicedToArray(_useState13, 2),
      urlShortener = _useState14[0],
      setUrlShortener = _useState14[1]; // Shortcuts.


  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected;
  var generatedUniqueId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_18__.useInstanceId)(TweetQuotes, attributes.anchor_prefix);
  var postObject = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_14__.useSelect)(function (select) {
    // Useful functions: getCurrentPost, getCurrentPostId, getPermalink
    // Credit: https://ryanwelcher.com/2021/08/requesting-data-in-gutenberg-with-getentityrecords/
    return select('core/editor').getCurrentPost();
  }); // Nonce var.
  // eslint-disable-next-line no-undef

  var _tweet_quotes_block_v = tweet_quotes_block_vars,
      themes = _tweet_quotes_block_v.themes,
      defaults = _tweet_quotes_block_v.defaults; // Ajax object.

  var uniqueId = attributes.uniqueId,
      template = attributes.template,
      hashtags = attributes.hashtags,
      twitter_username = attributes.twitter_username,
      share_text = attributes.share_text,
      share_text_override = attributes.share_text_override,
      share_text_override_enabled = attributes.share_text_override_enabled,
      share_button_text = attributes.share_button_text,
      maximum_width = attributes.maximum_width,
      maximum_width_unit = attributes.maximum_width_unit,
      tweet_button_enabled = attributes.tweet_button_enabled,
      tweet_button_alignment = attributes.tweet_button_alignment,
      tweet_icon_alignment = attributes.tweet_icon_alignment,
      rtl = attributes.rtl,
      tweet_button_display = attributes.tweet_button_display,
      tweet_styles_disabled = attributes.tweet_styles_disabled,
      anchor = attributes.anchor,
      has_anchor = attributes.has_anchor,
      url_shortener = attributes.url_shortener,
      url_shortening_service = attributes.url_shortening_service,
      permalink = attributes.permalink,
      manualPermalink = attributes.manualPermalink,
      enable_links_in_tweet = attributes.enable_links_in_tweet,
      enable_contextual_menu = attributes.enable_contextual_menu,
      enable_copy_text = attributes.enable_copy_text,
      enable_copy_tweet = attributes.enable_copy_tweet,
      enable_copy_link = attributes.enable_copy_link,
      enable_tweet_this = attributes.enable_tweet_this,
      preview = attributes.preview,
      blockOnly = attributes.blockOnly,
      defaultsApplied = attributes.defaultsApplied,
      transforming = attributes.transforming;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    countCharacters();
    countInfoCharacters();
  }, [twitter_username, share_text, share_text_override, hashtags, share_text_override_enabled, enable_links_in_tweet, permalink, anchor, has_anchor]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    setAttributes({
      uniqueId: generatedUniqueId,
      anchor: generatedUniqueId
    }); // Check to see if defaults have been applied.

    if (!defaultsApplied) {
      // Get original values before defaults applied.
      var originalAtts = attributes; // Override with defaults.

      setAttributes(_objectSpread({}, defaults));
      setAttributes({
        defaultsApplied: true
      }); // If transforming form certain blocks, set the button text and username (override the override).

      if (transforming) {
        setAttributes({
          share_button_text: originalAtts.share_button_text,
          twitter_username: originalAtts.twitter_username,
          enable_links_in_tweet: originalAtts.enable_links_in_tweet,
          has_anchor: originalAtts.has_anchor,
          url_shortener: originalAtts.has_anchor,
          url_shortening_service: originalAtts.permalink ? 'manual' : defaults.url_shortening_service,
          transforming: false
        });
      }
    }
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    console.log(isSelected);

    if (selectedTab === 'appearance' && shareTextInput.current !== null && isSelected) {
      shareTextInput.current.focus(); // Note to self: not possible with component to focus on last character.
    }
  }, [isSelected, shareTextInput, selectedTab]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    if (manualUrlInput.current !== null && 'manual' === urlShortener && 'appearance' !== selectedTab) {
      manualUrlInput.current.focus();
      manualUrlInput.current.select();
    }
  }, [url_shortening_service]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    var link = '' === permalink ? postObject.link : permalink;
    var manualLink = '' === manualPermalink ? postObject.link : permalink;

    switch (url_shortening_service) {
      case 'none':
        setAttributes({
          permalink: manualPermalink,
          manualPermalink: postObject.link
        });
        break;

      case 'bitly':
        setAttributes({
          manualPermalink: tweet_quotes_block_vars.bitly_plugin_short_url
        });
        break;

      case 'jetpack':
        setAttributes({
          manualPermalink: tweet_quotes_block_vars.jetpack_plugin_short_url
        });
        break;

      case 'manual':
        setAttributes({
          manualPermalink: link
        });
    }
  }, [postObject, url_shortening_service]);
  /**
   * Count  the characters including text, links, hashtags, and mentions.
   */

  var countCharacters = function countCharacters() {
    // Begin adding text entered.
    var tweetContent = ''; // Get main tweet text.

    if (share_text_override_enabled) {
      tweetContent += share_text_override;
    } else {
      tweetContent += share_text;
    }

    if (tweetContent !== '') {
      tweetContent += '\r\n';
    } // Add hashtags.


    if (hashtags.length > 0) {
      tweetContent += hashtags.join('#');
    }

    if (tweetContent !== '' && hashtags.length > 0) {
      tweetContent += '\r\n';
    } // Add via.


    if (twitter_username.length > 0) {
      tweetContent += 'Via ';
      tweetContent += twitter_username;
    }

    if (permalink.length > 0 && enable_links_in_tweet) {
      tweetContent += '\r\n';
      tweetContent += permalink + (has_anchor ? '#' + anchor : '');
    }

    setTweetCharacterTotal(_validation_twitter__WEBPACK_IMPORTED_MODULE_1__["default"].txt.getTweetLength(tweetContent));
  };

  var countInfoCharacters = function countInfoCharacters() {
    setTweetHashtagCharLength(getHashtagsLength());
    setTweetContentCharLength(getTweetTextLength());
    setTweetUsernameCharLength(getUsernameLength());
    setTweetPermalinkCharLength(getPermalinkLength());
  };

  var getUsernameLength = function getUsernameLength() {
    var tweetContent = ''; // Add via.

    if (twitter_username.length > 0) {
      tweetContent += (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Via', 'quotes-dlx') + ' ';
      tweetContent += twitter_username;
    }

    var count = _validation_twitter__WEBPACK_IMPORTED_MODULE_1__["default"].txt.getTweetLength(tweetContent);
    return count;
  };

  var getTweetTextLength = function getTweetTextLength() {
    var tweetContent = ''; // Get main tweet text.

    if (share_text_override_enabled) {
      tweetContent += share_text_override;
    } else {
      tweetContent += share_text;
    }

    if (tweetContent !== '') {
      tweetContent += '\r\n';
    }

    var count = _validation_twitter__WEBPACK_IMPORTED_MODULE_1__["default"].txt.getTweetLength(tweetContent);
    return count;
  };

  var getHashtagsLength = function getHashtagsLength() {
    var tweetContent = '';

    if (hashtags.length > 0) {
      tweetContent += hashtags.join('#');
      tweetContent += '\r\n';
    }

    var count = _validation_twitter__WEBPACK_IMPORTED_MODULE_1__["default"].txt.getTweetLength(tweetContent);
    return count;
  };

  var getPermalinkLength = function getPermalinkLength() {
    var tweetContent = '';

    if (permalink.length > 0 && enable_links_in_tweet) {
      tweetContent += '\r\n';
      tweetContent += permalink + (has_anchor ? '#' + anchor : '');
    }

    var count = _validation_twitter__WEBPACK_IMPORTED_MODULE_1__["default"].txt.getTweetLength(tweetContent);
    return count;
  };

  var getCharacterBar = function getCharacterBar() {
    return /*#__PURE__*/React.createElement(_components_LineCount__WEBPACK_IMPORTED_MODULE_11__["default"], {
      chars: tweetCharacterTotal
    });
  };

  var getClickToShareButton = function getClickToShareButton() {
    if (!tweet_button_enabled) {
      return /*#__PURE__*/React.createElement(React.Fragment, null);
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "quotes-dlx-button-wrapper  ".concat(tweet_button_alignment, " ")
    }, /*#__PURE__*/React.createElement("button", {
      className: "quotes-dlx-button ".concat(tweet_button_display, " quotes-dlx-button-icon-").concat(tweet_icon_alignment),
      onClick: function onClick(value) {}
    }, /*#__PURE__*/React.createElement(React.Fragment, null, (tweet_button_display === 'full' || tweet_button_display === 'text') && /*#__PURE__*/React.createElement("span", {
      className: "quotes-dlx-button-text"
    }, share_button_text), (tweet_button_display === 'icon' || tweet_button_display === 'full') && /*#__PURE__*/React.createElement("span", {
      className: "quotes-dlx-button-icon"
    }, /*#__PURE__*/React.createElement(_components_icons_twitter__WEBPACK_IMPORTED_MODULE_4__["default"], null)))));
  };

  var inspectorControls = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.PanelBody, {
    initialOpen: true,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Characters', 'quotes-dlx')
  }, /*#__PURE__*/React.createElement(_components_CircularCount__WEBPACK_IMPORTED_MODULE_10__["default"], {
    chars: tweetCharacterTotal
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.PanelBody, {
    initialOpen: true,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Container Settings', 'quotes-dlx')
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_unit_picker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Maximum Width', 'quotes-dlx'),
    value: maximum_width_unit,
    units: ['px', '%', 'vw'],
    onClick: function onClick(value) {
      setAttributes({
        maximum_width_unit: value
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.TextControl, {
    type: 'number',
    value: maximum_width ? maximum_width : '',
    onChange: function onChange(value) {
      setAttributes({
        maximum_width: parseFloat(value)
      });
    }
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.PanelBody, {
    initialOpen: true,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Click to Tweet Button', 'quotes-dlx')
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Enable Click to Tweet Button', 'quotes-dlx'),
    checked: tweet_button_enabled,
    onChange: function onChange(value) {
      setAttributes({
        tweet_button_enabled: value
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Show or hide the Click to Tweet button.', 'quotes-dlx')
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Button Text', 'quotes-dlx'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Enter the Click to Tweet button text.'),
    value: share_button_text,
    onChange: function onChange(value) {
      setAttributes({
        share_button_text: value
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.PanelRow, null, /*#__PURE__*/React.createElement(_components_alignment__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Button Alignment', 'quotes-dlx'),
    alignment: tweet_button_alignment,
    onClick: function onClick(value) {
      setAttributes({
        tweet_button_alignment: value
      });
    }
  })), tweet_button_display === 'full' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.PanelRow, null, /*#__PURE__*/React.createElement(_components_alignment__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Icon Alignment', 'quotes-dlx'),
    alignment: tweet_icon_alignment,
    onClick: function onClick(value) {
      setAttributes({
        tweet_icon_alignment: value
      });
    },
    centerOn: false
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.PanelRow, {
    className: "quotes-dlx-sidebar-button-options"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Button Options', 'quotes-dlx'),
    selected: tweet_button_display,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Text Only', 'quotes-dlx'),
      value: 'text'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Icon Only', 'quotes-dlx'),
      value: 'icon'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Text and Icon', 'quotes-dlx'),
      value: 'full'
    }],
    onChange: function onChange(value) {
      setAttributes({
        tweet_button_display: value
      });
    }
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.PanelBody, {
    initialOpen: false,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Contextual Menu', 'quotes-dlx')
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Enable Menu', 'quotes-dlx'),
    checked: enable_contextual_menu,
    onChange: function onChange(value) {
      setAttributes({
        enable_contextual_menu: value
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Turn on the contextual menu.', 'quotes-dlx')
  })), enable_contextual_menu && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Enable Copy Text', 'quotes-dlx'),
    checked: enable_copy_text,
    onChange: function onChange(value) {
      setAttributes({
        enable_copy_text: value
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Not recommended for most cases. Format is rich text, which may confuse some users.', 'quotes-dlx')
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Enable Copy Tweet', 'quotes-dlx'),
    checked: enable_copy_tweet,
    onChange: function onChange(value) {
      setAttributes({
        enable_copy_tweet: value
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Enable Copy Link', 'quotes-dlx'),
    checked: enable_copy_link,
    onChange: function onChange(value) {
      setAttributes({
        enable_copy_link: value
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Enable Tweet This', 'quotes-dlx'),
    checked: enable_tweet_this,
    onChange: function onChange(value) {
      setAttributes({
        enable_tweet_this: value
      });
    }
  }))))); // Load themes and display them in a dropdown menu.
  // There's a side-effect here if a theme is deleted. Need to use useEffect to
  // set default theme. This causes more issues, so solution is to set default on PHP side (front-end).

  var toolbarThemes = [];
  themes.forEach(function (theme) {
    toolbarThemes.push({
      title: theme.name,
      isActive: template === theme.slug,
      icon: /*#__PURE__*/React.createElement(_components_icons_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        height: 24,
        width: 24,
        gradient: theme.gradient,
        className: template === theme.name ? 'has selected quotes-dlx' : 'quotes-dlx'
      }),
      onClick: function onClick() {
        setAttributes({
          template: theme.slug
        });
      }
    });
  }); // Calculate max width.

  var maxWidthStyle = {
    maxWidth: maximum_width + maximum_width_unit
  };
  var toolbarPreview = [{
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Preview On', 'quotes-dlx'),
    isActive: preview,
    onClick: function onClick() {
      setAttributes({
        preview: true
      });
    }
  }, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Preview Off', 'quotes-dlx'),
    isActive: !preview,
    onClick: function onClick() {
      setAttributes({
        preview: false
      });
    }
  }]; // Start theme hooks. Find a way through PHP perhaps?

  var toolbarThemeHook = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_15__.createHooks)();
  toolbarThemes = toolbarThemeHook.applyFilters('has_ctt_react_themes', toolbarThemes); // Allow others to add themes via React.

  var blockToolbar = /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_20__.BlockControls, null, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.ToolbarGroup, {
    icon: /*#__PURE__*/React.createElement(_components_icons_paintbrush__WEBPACK_IMPORTED_MODULE_5__["default"], {
      width: 24,
      height: 24,
      fill: "#000000"
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Select a Theme', 'quotes-dlx'),
    isCollapsed: true,
    popoverProps: {
      className: "quotes-dlx-popover ".concat(template)
    },
    controls: [toolbarThemes]
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.ToolbarGroup, {
    icon: /*#__PURE__*/React.createElement(_components_icons_Preview__WEBPACK_IMPORTED_MODULE_6__["default"], {
      width: 25,
      height: 25,
      opacity: preview ? 0.8 : 0.4,
      fill: "#000000"
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Preview Mode', 'quotes-dlx'),
    isCollapsed: true,
    popoverProps: {
      className: "quotes-dlx-preview-popover ".concat(template)
    },
    controls: [toolbarPreview]
  })));
  var previewBlockInspectorControls = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.PanelBody, {
    initialOpen: true,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Preview Mode Active', 'quotes-dlx')
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.Button, {
    variant: "link",
    onClick: function onClick(e) {
      setAttributes({
        preview: false
      });
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Turn Preview Mode Off', 'quotes-dlx'))));
  var htmlToReactParser = new HtmlToReactParser();
  var previewBlock = /*#__PURE__*/React.createElement(React.Fragment, null, !blockOnly && blockToolbar, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_20__.InspectorControls, null, previewBlockInspectorControls), /*#__PURE__*/React.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('quotes-dlx', (_classnames = {}, _defineProperty(_classnames, "quotes-dlx-block-theme-".concat(template), true), _defineProperty(_classnames, 'quotes-dlx-context-menu-disabled', !enable_contextual_menu), _defineProperty(_classnames, 'quotes-dlx-has-no-tweet-button', !tweet_button_enabled), _classnames)),
    style: maxWidthStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "quotes-dlx-wrapper"
  }, /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("blockquote", {
    className: "quotes-dlx-text-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quotes-dlx-text"
  }, htmlToReactParser.parse((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_17__.toHTMLString)({
    // Stolen from: https://github.com/WordPress/gutenberg/pull/23562/files
    value: (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_17__.create)({
      html: share_text,
      preserveWhiteSpace: true
    }),
    multilineTag: 'p'
  }))))), getClickToShareButton(), enable_contextual_menu && !blockOnly && (enable_copy_text || enable_copy_tweet || enable_copy_link || enable_tweet_this) && /*#__PURE__*/React.createElement(_components_MeatballMenu__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({
    id: uniqueId
  }, attributes)))));
  var block = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_20__.InspectorControls, null, inspectorControls), blockToolbar, /*#__PURE__*/React.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('quotes-dlx', (_classnames2 = {}, _defineProperty(_classnames2, "quotes-dlx-block-theme-".concat(template), true), _defineProperty(_classnames2, 'quotes-dlx-context-menu-disabled', !enable_contextual_menu), _defineProperty(_classnames2, 'quotes-dlx-has-no-tweet-button', !tweet_button_enabled), _classnames2)),
    style: maxWidthStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "quotes-dlx-tabs"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.TabPanel, {
    activeClass: "active-tab",
    onSelect: function onSelect(currentTab) {
      setSelectedTab(currentTab);
    },
    tabs: [{
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Appearance', 'quotes-dlx'),
      name: 'appearance',
      className: 'quotes-dlx-tab-appearance'
    }, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Tweet Settings', 'quotes-dlx'),
      name: 'settings',
      className: 'quotes-dlx-tab-settings'
    }, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Link Settings', 'quotes-dlx'),
      name: 'link',
      className: 'quotes-dlx-tab-link'
    }]
  }, function (tab) {
    var tabContent;

    if ('appearance' === tab.name) {
      tabContent = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "quotes-dlx-wrapper"
      }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_20__.RichText, {
        tagName: "blockquote",
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Add text to share', 'quotes-dlx'),
        value: share_text,
        preserveWhiteSpace: true,
        className: "quotes-dlx-text quotes-dlx-text-wrapper",
        allowedFormats: ['core/bold', 'core/italic', 'core/text-color', 'core/subscript', 'core/superscript', 'core/strikethrough', 'core/link'],
        onChange: function onChange(value) {
          setAttributes({
            share_text: value
          });
        },
        ref: shareTextInput
      })), getClickToShareButton(), enable_contextual_menu && (enable_copy_text || enable_copy_tweet || enable_copy_link || enable_tweet_this) && /*#__PURE__*/React.createElement(_components_MeatballMenu__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({
        id: uniqueId
      }, attributes)))));
    } else if ('settings' === tab.name) {
      tabContent = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Customize Twitter Content', 'quotes-dlx'),
        checked: share_text_override_enabled,
        onChange: function onChange(value) {
          setAttributes({
            share_text_override_enabled: value
          });
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('If your quote is too large for Twitter, you can create custom tweet content here.', 'quotes-dlx')
      }), share_text_override_enabled && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.TextareaControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Custom Tweet Content', 'quotes-dlx'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Enter your custom tweet content here if your quote is too long for Twitter'),
        value: share_text_override,
        onChange: function onChange(value) {
          setAttributes({
            share_text_override: value
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.FormTokenField, {
        value: hashtags,
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Enter hashtags separated by commas.', 'quotes-dlx'),
        className: "quotes-dlx-hashtag-fields",
        tokenizeOnSpace: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Hashtags', 'quotes-dlx'),
        onChange: function onChange(tokens) {
          var filteredTokens = [];
          tokens.forEach(function (item, index) {
            var replacement = item.replace('#', ''); // Strip hashtag symbol.

            var hashtag = _validation_twitter__WEBPACK_IMPORTED_MODULE_1__["default"].txt.extractHashtags('#' + replacement); // Add it back in for extraction.
            // Check if array contains anything.

            if (typeof hashtag[0] !== 'undefined') {
              filteredTokens.push(hashtag[0]);
            }
          });
          setAttributes({
            hashtags: filteredTokens
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Tweet Credit (via)', 'quotes-dlx'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Enter the Twitter username you would like to credit. Leave empty for no credit.'),
        value: twitter_username,
        onChange: function onChange(value) {
          var replacement = value.replace('@', ''); // Strip @ symbol.

          if (value.length > 0) {
            var usernames = _validation_twitter__WEBPACK_IMPORTED_MODULE_1__["default"].txt.extractMentions(replacement);

            if (typeof usernames[0] !== 'undefined') {
              setAttributes({
                twitter_username: usernames[0].replace('@', '')
              });
              return;
            }
          }

          setAttributes({
            twitter_username: replacement
          });
        }
      }));
    } else if ('link' === tab.name) {
      tabContent = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Enable Link in Tweet', 'quotes-dlx'),
        checked: enable_links_in_tweet,
        onChange: function onChange(value) {
          setAttributes({
            enable_links_in_tweet: value
          });
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Disabling this will strip the link from the Tweet.', 'quotes-dlx')
      }), enable_links_in_tweet && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Enable Anchor', 'quotes-dlx'),
        checked: has_anchor,
        onChange: function onChange(value) {
          setAttributes({
            has_anchor: value
          });
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Enable anchors so users can link directly to the quote.', 'quotes-dlx')
      }), has_anchor && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Anchor (ID)', 'quotes-dlx'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Enter a unique anchor for the tweet container so that you can directly link to it. Do not use the hashtag (#) symbol.'),
        value: anchor,
        onChange: function onChange(value) {
          setAttributes({
            anchor: value
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Enable URL Shortening', 'quotes-dlx'),
        checked: url_shortener,
        onChange: function onChange(value) {
          setAttributes({
            url_shortener: value
          });
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Enable the URL shortener for your tweets.', 'quotes-dlx')
      }), url_shortener && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.RadioControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Shortlink Service', 'quotes-dlx'),
        selected: url_shortening_service,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Bitly', 'quotes-dlx'),
          value: 'bitly'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Jetpack', 'quotes-dlx'),
          value: 'jetpack'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Manual', 'quotes-dlx'),
          value: 'manual'
        }],
        onChange: function onChange(value) {
          setAttributes({
            url_shortening_service: value
          });
          setUrlShortener(value);
        }
      }), url_shortening_service === 'bitly' && !tweet_quotes_block_vars.bitly_plugin_short_url && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.Notice, {
        className: "quotes-dlx-notice quotes-dlx-notice-warning",
        status: "warning",
        politeness: "assertive",
        isDismissible: false
      }, /*#__PURE__*/React.createElement("div", {
        className: "quotes-dlx-notice-icon"
      }, /*#__PURE__*/React.createElement(_components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_8__["default"], {
        width: 36,
        height: 36,
        className: "quotes-dlx-icon",
        "var": "--quotes-dlx--preset--notice-warning-icon-color"
      })), /*#__PURE__*/React.createElement("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('The Bitly short URL cannot be found.', 'quotes-dlx')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('You may need to regenerate a Bitly short URL for this post or reauthorize the Bitly plugin.', 'quotes-dlx'))), url_shortening_service === 'bitly' && !tweet_quotes_block_vars.bitly_plugin_active && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.Notice, {
        className: "quotes-dlx-notice quotes-dlx-notice-warning",
        status: "warning",
        politeness: "assertive",
        isDismissible: false
      }, /*#__PURE__*/React.createElement("div", {
        className: "quotes-dlx-notice-icon"
      }, /*#__PURE__*/React.createElement(_components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_8__["default"], {
        width: 36,
        height: 36,
        className: "quotes-dlx-icon",
        "var": "--quotes-dlx--preset--notice-warning-icon-color"
      })), /*#__PURE__*/React.createElement("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('The official Bitly plugin is not installed.', 'quotes-dlx')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Please install and activate the Bitly WordPress Plugin and revisit this section. Alternatively, you can paste your URL in using the Manual option.', 'quotes-dlx')), /*#__PURE__*/React.createElement("div", {
        className: "quotes-dlx-notice-button"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.Button, {
        variant: "link",
        href: "https://wordpress.org/plugins/wp-bitly/",
        target: "_blank",
        icon: /*#__PURE__*/React.createElement(_components_icons_NewWindow__WEBPACK_IMPORTED_MODULE_7__["default"], {
          width: 12,
          height: 12
        }),
        iconPosition: "right"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Visit the Bitly plugin on WordPress.org', 'quotes-dlx')))), url_shortening_service === 'jetpack' && !tweet_quotes_block_vars.jetpack_plugin_short_url && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.Notice, {
        className: "quotes-dlx-notice quotes-dlx-notice-warning",
        status: "warning",
        politeness: "assertive",
        isDismissible: false
      }, /*#__PURE__*/React.createElement("div", {
        className: "quotes-dlx-notice-icon"
      }, /*#__PURE__*/React.createElement(_components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_8__["default"], {
        width: 36,
        height: 36,
        className: "quotes-dlx-icon",
        "var": "--quotes-dlx--preset--notice-warning-icon-color"
      })), /*#__PURE__*/React.createElement("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('A shortlink from Jetpack could not be found', 'quotes-dlx')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Please ensure that Jetpack is installed and that shortlinks are enabled.', 'quotes-dlx')), /*#__PURE__*/React.createElement("div", {
        className: "quotes-dlx-notice-button"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.Button, {
        variant: "link",
        href: "https://jetpack.com/support/wp-me-shortlinks/",
        target: "_blank",
        icon: /*#__PURE__*/React.createElement(_components_icons_NewWindow__WEBPACK_IMPORTED_MODULE_7__["default"], {
          width: 12,
          height: 12
        }),
        iconPosition: "right"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Visit the Jetpack Shortlink Documentation', 'quotes-dlx')))), url_shortening_service === 'jetpack' && !tweet_quotes_block_vars.jetpack_plugin_active && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.Notice, {
        className: "quotes-dlx-notice quotes-dlx-notice-warning",
        status: "warning",
        politeness: "assertive",
        isDismissible: false
      }, /*#__PURE__*/React.createElement("div", {
        className: "quotes-dlx-notice-icon"
      }, /*#__PURE__*/React.createElement(_components_icons_CircularExplanation__WEBPACK_IMPORTED_MODULE_8__["default"], {
        width: 36,
        height: 36,
        className: "quotes-dlx-icon",
        "var": "--quotes-dlx--preset--notice-warning-icon-color"
      })), /*#__PURE__*/React.createElement("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('The official Jetpack plugin is not installed.', 'quotes-dlx')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Please install and activate the Jetpack WordPress Plugin, enable shortlinks, and revisit this section. Alternatively, you can paste your URL in using the Manual option.', 'quotes-dlx')), /*#__PURE__*/React.createElement("div", {
        className: "quotes-dlx-notice-button"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.Button, {
        variant: "link",
        href: "https://wordpress.org/plugins/jetpack/",
        target: "_blank",
        icon: /*#__PURE__*/React.createElement(_components_icons_NewWindow__WEBPACK_IMPORTED_MODULE_7__["default"], {
          width: 12,
          height: 12
        }),
        iconPosition: "right"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Visit the Jetpack plugin on WordPress.org', 'quotes-dlx'))))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('Page URL', 'quotes-dlx'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_16__.__)('This displays the permanent URL to this block.'),
        placeholder: manualPermalink,
        value: manualPermalink !== null && manualPermalink !== void 0 ? manualPermalink : '',
        onChange: function onChange(value) {
          setAttributes({
            manualPermalink: value,
            permalink: value
          });
        },
        disabled: url_shortening_service !== 'manual' ? 'disabled' : '',
        ref: manualUrlInput
      })));
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, getCharacterBar(), tabContent);
  }))));
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_20__.useBlockProps)({
    className: "quotes-dlx template-".concat(template)
  });

  if (preview) {
    return /*#__PURE__*/React.createElement("div", blockProps, previewBlock); // eslint-disable-next-line no-else-return
  } else {
    return /*#__PURE__*/React.createElement("div", blockProps, block);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (TweetQuotes);

/***/ }),

/***/ "./src/js/components/CircularCount/index.js":
/*!**************************************************!*\
  !*** ./src/js/components/CircularCount/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/js/components/CircularCount/editor.scss");
// From: https://itnext.io/how-to-create-a-twitter-inspired-character-counter-with-an-svg-progress-ring-react-js-352f3c8eefbc
 // ES6



var baseColor = '#99cc33';
var preWarningColor = '#4F8A10';
var warningColor = '#ffae42';
var preErrorColor = '#ff9966';
var errorColor = '#cc3300';
var maxChars = 280;

var CircularCount = function CircularCount(props) {
  var chars = props.chars;
  var r = 15;
  var circleLength = 2 * Math.PI * r;
  var status = circleLength * chars / 280;
  var colorDefault = circleLength - status > 0 ? circleLength - status : 0;
  /**
   *
   * @param { number } characters Number of characters.
   * @return { string } hex code for error color.
   */

  var getColor = function getColor(characters) {
    if (characters >= 280) {
      return errorColor;
    }

    if (characters >= 260) {
      return preErrorColor;
    }

    if (characters >= 220) {
      return warningColor;
    }

    if (characters >= 180) {
      return preWarningColor;
    }

    return baseColor;
  };

  var getChars = function getChars() {
    if (chars > maxChars) {
      return maxChars - chars;
    }

    return chars;
  };

  var getCharsLabel = function getCharsLabel() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, getChars(), ' ', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._n)('Character', 'Characters', getChars(), 'highlight-and-share'));
  };

  var ringStyle = {
    stroke: getColor(chars),
    strokeDasharray: "".concat(status, "  ").concat(colorDefault)
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "quotes-dlx-character-counter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quotes-dlx-circular-count"
  }, /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("circle", {
    className: "default",
    cx: "50%",
    cy: "50%",
    r: "15"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "status",
    cx: "50%",
    cy: "50%",
    r: "15",
    style: ringStyle
  }))), /*#__PURE__*/React.createElement("div", {
    className: "quotes-dlx-circular-characters"
  }, getCharsLabel()));
};

CircularCount.defaultProps = {
  chars: 0
};
CircularCount.propTypes = {
  chars: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
};
/* harmony default export */ __webpack_exports__["default"] = (CircularCount);

/***/ }),

/***/ "./src/js/components/LineCount/index.js":
/*!**********************************************!*\
  !*** ./src/js/components/LineCount/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/js/components/LineCount/editor.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // ES6





var baseColor = '#99cc33';
var preWarningColor = '#4F8A10';
var warningColor = '#ffae42';
var preErrorColor = '#ff9966';
var errorColor = '#cc3300';
var maxChars = 280;
var minChars = 35;

var LineCount = function LineCount(props) {
  var chars = props.chars;

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    width: '0',
    backgroundColor: baseColor
  }),
      _useState2 = _slicedToArray(_useState, 2),
      lineStyle = _useState2[0],
      setLineStyle = _useState2[1];

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setLineStyle({
      width: getPercentage(),
      backgroundColor: getColor(chars)
    });
  }, [chars]);
  /**
   *
   * @param { number } characters Number of characters.
   * @return { string } hex code for error color.
   */

  var getColor = function getColor(characters) {
    if (characters >= 280) {
      return errorColor;
    }

    if (characters >= 260) {
      return preErrorColor;
    }

    if (characters >= 220) {
      return warningColor;
    }

    if (characters >= 180) {
      return preWarningColor;
    }

    return baseColor;
  };

  var getPercentage = function getPercentage() {
    if (chars >= maxChars) {
      return '100%';
    }

    var percentage = Math.round(chars / maxChars * 100);
    return percentage + '%';
  };

  var getChars = function getChars() {
    if (chars > maxChars) {
      return maxChars - chars;
    }

    return chars;
  };

  var getLineCountProgressClasses = function getLineCountProgressClasses() {
    return classnames__WEBPACK_IMPORTED_MODULE_0___default()('has-line-count-progress', {
      'has-line-count-min-chars': chars <= minChars
    });
  };

  var getCharsLabel = function getCharsLabel() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, getChars(), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('Character', 'Characters', getChars(), 'highlight-and-share'));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "has-line-count"
  }, /*#__PURE__*/React.createElement("span", {
    className: getLineCountProgressClasses(),
    style: lineStyle
  }, /*#__PURE__*/React.createElement("span", {
    className: "has-line-count-characters"
  }, getCharsLabel())));
};

LineCount.defaultProps = {
  chars: 0
};
LineCount.propTypes = {
  chars: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
};
/* harmony default export */ __webpack_exports__["default"] = (LineCount);

/***/ }),

/***/ "./src/js/components/MeatballMenu/index.js":
/*!*************************************************!*\
  !*** ./src/js/components/MeatballMenu/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MeatballMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MeatballMenuItem */ "./src/js/components/MeatballMenuItem/index.js");
/* harmony import */ var _icons_QuoteIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/QuoteIcon */ "./src/js/components/icons/QuoteIcon.js");
/* harmony import */ var _icons_CopyIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/CopyIcon */ "./src/js/components/icons/CopyIcon.js");
/* harmony import */ var _icons_LinkIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/LinkIcon */ "./src/js/components/icons/LinkIcon.js");
/* harmony import */ var _icons_twitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/twitter */ "./src/js/components/icons/twitter.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/js/components/MeatballMenu/editor.scss");
/* eslint-disable camelcase */








var MeatballMenu = function MeatballMenu(attributes) {
  var enable_copy_text = attributes.enable_copy_text,
      enable_copy_tweet = attributes.enable_copy_tweet,
      enable_copy_link = attributes.enable_copy_link,
      enable_tweet_this = attributes.enable_tweet_this;

  var getIcon = function getIcon(Icon) {
    return /*#__PURE__*/React.createElement(Icon, {
      width: 16,
      height: 16,
      fill: "#6c757d"
    });
  };

  var getButton = function getButton() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "quotes-dlx-meatball-menu"
    }, /*#__PURE__*/React.createElement("div", {
      className: "quotes-dlx-meatball-content"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open menu options', 'quotes-dlx')
    }), (enable_copy_text || enable_copy_tweet || enable_copy_link || enable_tweet_this) && /*#__PURE__*/React.createElement("ul", null, enable_copy_text && /*#__PURE__*/React.createElement(_MeatballMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      Icon: function Icon() {
        return getIcon(_icons_QuoteIcon__WEBPACK_IMPORTED_MODULE_2__["default"]);
      },
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Copy Quote', 'quotes-dlx'),
      onClick: function onClick(e) {}
    }), enable_copy_tweet && /*#__PURE__*/React.createElement(_MeatballMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      Icon: function Icon() {
        return getIcon(_icons_CopyIcon__WEBPACK_IMPORTED_MODULE_3__["default"]);
      },
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Copy Tweet', 'quotes-dlx'),
      onClick: function onClick(e) {}
    }), enable_copy_link && /*#__PURE__*/React.createElement(_MeatballMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      Icon: function Icon() {
        return getIcon(_icons_LinkIcon__WEBPACK_IMPORTED_MODULE_4__["default"]);
      },
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Copy Link', 'quotes-dlx'),
      onClick: function onClick(e) {}
    }), enable_tweet_this && /*#__PURE__*/React.createElement(_MeatballMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      Icon: function Icon() {
        return getIcon(_icons_twitter__WEBPACK_IMPORTED_MODULE_5__["default"]);
      },
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tweet This', 'quotes-dlx'),
      onClick: function onClick(e) {}
    })), /*#__PURE__*/React.createElement("div", {
      className: "quotes-dlx-meatball-icon-wrapper",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("div", {
      className: "quotes-dlx-meatball-icon"
    }, /*#__PURE__*/React.createElement("span", null))))));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, getButton());
};

/* harmony default export */ __webpack_exports__["default"] = (MeatballMenu);

/***/ }),

/***/ "./src/js/components/MeatballMenuItem/index.js":
/*!*****************************************************!*\
  !*** ./src/js/components/MeatballMenuItem/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
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

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      menuOpen = _useState2[0],
      setMenuOpen = _useState2[1];

  var getMenuItem = function getMenuItem() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
      className: "quotes-dlx-meatball-menu-item"
    }, /*#__PURE__*/React.createElement("button", {
      className: "button-reset",
      onClick: onClick
    }, Icon && /*#__PURE__*/React.createElement("span", {
      className: "quotes-dlx-meatball-menu-icon"
    }, /*#__PURE__*/React.createElement(Icon, null)), text)));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, getMenuItem());
};

MeatballMenuItem.defaultProps = {
  text: '',
  Icon: '',
  onClick: null
};
MeatballMenuItem.propTypes = {
  text: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (MeatballMenuItem);

/***/ }),

/***/ "./src/js/components/alignment/index.js":
/*!**********************************************!*\
  !*** ./src/js/components/alignment/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/js/components/alignment/editor.scss");
/**
 * Alignment Group (Left|Center|Right) with a label and button icons.
 *
 * Pass onClick prop to propagate up to parent. Values are (left|center|right).
 */





var AlignmentGroup = function AlignmentGroup(props) {
  var alignment = props.alignment,
      label = props.label,
      alignLeftLabel = props.alignLeftLabel,
      alignCenterLabel = props.alignCenterLabel,
      alignRightLabel = props.alignRightLabel,
      leftOn = props.leftOn,
      centerOn = props.centerOn,
      rightOn = props.rightOn;
  return /*#__PURE__*/React.createElement("div", {
    className: "quotes-dlx-alignment-component-base"
  }, /*#__PURE__*/React.createElement("span", {
    className: "quotes-dlx-alignment-component-label"
  }, label), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, null, /*#__PURE__*/React.createElement(React.Fragment, null, leftOn && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isPressed: 'left' === alignment ? true : false,
    isSecondary: true,
    icon: "editor-alignleft",
    label: alignLeftLabel,
    onClick: function onClick() {
      props.onClick('left');
    }
  }), centerOn && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isPressed: 'center' === alignment ? true : false,
    isSecondary: true,
    icon: "editor-aligncenter",
    label: alignCenterLabel,
    onClick: function onClick() {
      props.onClick('center');
    }
  }), rightOn && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isPressed: 'right' === alignment ? true : false,
    isSecondary: true,
    icon: "editor-alignright",
    label: alignRightLabel,
    onClick: function onClick() {
      props.onClick('right');
    }
  }))));
};

AlignmentGroup.defaultProps = {
  alignment: 'left',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Change Alignment', 'quotes-dlx'),
  alignLeftLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Align Left', 'Align items left', 'quotes-dlx'),
  alignCenterLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Align Center', 'Align items center/middle', 'quotes-dlx'),
  alignRightLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Align Right', 'Align items right', 'quotes-dlx'),
  leftOn: true,
  centerOn: true,
  rightOn: true
};
AlignmentGroup.propTypes = {
  alignment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  alignLeftLabel: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  alignCenterLabel: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  alignRightLabel: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  leftOn: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  centerOn: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  rightOn: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
/* harmony default export */ __webpack_exports__["default"] = (AlignmentGroup);

/***/ }),

/***/ "./src/js/components/icons/Circle.js":
/*!*******************************************!*\
  !*** ./src/js/components/icons/Circle.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 // ES6



var IconCircle = function IconCircle(props) {
  var Circle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\twidth: ", "px;\n\t\theight: ", "px;\n\t\tbackground-image: ", ";\n\t\tborder-radius: 50%;\n\t\tmargin-right: 6px;\n\t"])), props.width, props.height, props.gradient.replace(';', ''));
  return /*#__PURE__*/React.createElement(Circle, {
    className: "quotes dlx quotes-dlx-icon-circle"
  });
};

IconCircle.defaultProps = {
  stroke: '#000',
  width: 16,
  height: 16
};
IconCircle.propTypes = {
  gradient: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  stroke: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (IconCircle);

/***/ }),

/***/ "./src/js/components/icons/CircularExplanation.js":
/*!********************************************************!*\
  !*** ./src/js/components/icons/CircularExplanation.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (CircularExclamationIcon);

/***/ }),

/***/ "./src/js/components/icons/CopyIcon.js":
/*!*********************************************!*\
  !*** ./src/js/components/icons/CopyIcon.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


var CopyIcon = function CopyIcon(props) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: props.width,
    height: props.height
  }, /*#__PURE__*/React.createElement("path", {
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
  width: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  fill: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (CopyIcon);

/***/ }),

/***/ "./src/js/components/icons/LinkIcon.js":
/*!*********************************************!*\
  !*** ./src/js/components/icons/LinkIcon.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


var LinkIcon = function LinkIcon(props) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512",
    width: props.width,
    height: props.height
  }, /*#__PURE__*/React.createElement("path", {
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
  width: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  fill: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (LinkIcon);

/***/ }),

/***/ "./src/js/components/icons/NewWindow.js":
/*!**********************************************!*\
  !*** ./src/js/components/icons/NewWindow.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


 // ES6

var NewWindowIcon = function NewWindowIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: props.width,
    height: props.height
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: props.fill,
    d: "M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32H64c-35.35 0-64 28.65-64 64v288c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96c0-17.7-14.3-32-32-32zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96 169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25 6.2 6.25 14.4 9.35 22.6 9.35s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24c0-13.26-10.7-24-24-24z"
  }));
};

NewWindowIcon.defaultProps = {
  width: 16,
  height: 16,
  fill: '#333333'
};
NewWindowIcon.propTypes = {
  width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  fill: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (NewWindowIcon);

/***/ }),

/***/ "./src/js/components/icons/Preview.js":
/*!********************************************!*\
  !*** ./src/js/components/icons/Preview.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
 // ES6

var PreviewIcon = function PreviewIcon(props) {
  return /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    "data-prefix": "fad",
    "data-icon": "eye",
    className: "svg-inline--fa fa-eye fa-w-18",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512",
    width: props.width,
    height: props.height
  }, /*#__PURE__*/React.createElement("g", {
    className: "fa-group",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    className: "fa-secondary",
    d: "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288.14 400H288a143.93 143.93 0 1 1 .14 0z",
    opacity: props.opacity
  }), /*#__PURE__*/React.createElement("path", {
    className: "fa-primary",
    d: "M380.66 280.87a95.78 95.78 0 1 1-184.87-50.18 47.85 47.85 0 0 0 66.9-66.9 95.3 95.3 0 0 1 118 117.08z"
  })));
};

PreviewIcon.defaultProps = {
  opacity: 0.4,
  width: 16,
  height: 16
};
PreviewIcon.propTypes = {
  opacity: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  width: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
};
/* harmony default export */ __webpack_exports__["default"] = (PreviewIcon);

/***/ }),

/***/ "./src/js/components/icons/QuoteIcon.js":
/*!**********************************************!*\
  !*** ./src/js/components/icons/QuoteIcon.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


var QuoteIcon = function QuoteIcon(props) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    width: props.width,
    height: props.height
  }, /*#__PURE__*/React.createElement("path", {
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
  width: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  fill: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (QuoteIcon);

/***/ }),

/***/ "./src/js/components/icons/QuotesIcon.js":
/*!***********************************************!*\
  !*** ./src/js/components/icons/QuotesIcon.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


var QuotesIcon = function QuotesIcon(props) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 4450 4450",
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    style: {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: 2
    },
    width: props.width,
    height: props.height
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2224.495 4449.097c1225.292 0 2224.626-999.334 2224.626-2224.502 0-1225.26-999.334-2224.59-2224.626-2224.59C999.339.006.005 999.336.005 2224.596c0 1225.168 999.334 2224.502 2224.49 2224.502Z",
    fill: props.fill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M645.766 833.41c72.396-19.418 146.805 23.555 166.223 95.952 26.731 99.748-16.611 257.328-201.629 281.878 40.111-41.13 65.254-71.09 75.658-111.12-61.938 2.38-119.509-38.12-136.205-100.515-19.417-72.397 23.555-146.807 95.953-166.195ZM988.445 833.41c72.395-19.418 146.835 23.555 166.225 95.952 26.73 99.748-16.58 257.328-201.601 281.878 40.082-41.13 65.221-71.09 75.631-111.12-61.939 2.38-119.512-38.12-136.207-100.515-19.389-72.397 23.556-146.807 95.952-166.195Z",
    fill: props.secondaryFill,
    transform: "translate(-1325.8 -2025.45) scale(4.16667)"
  }));
};

QuotesIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000000',
  secondaryFill: '#FFFFFF'
};
QuotesIcon.propTypes = {
  width: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  fill: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  secondaryFill: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (QuotesIcon);

/***/ }),

/***/ "./src/js/components/icons/paintbrush.js":
/*!***********************************************!*\
  !*** ./src/js/components/icons/paintbrush.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var PaintbrushIcon = function PaintbrushIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "paint-brush-alt",
    className: "svg-inline--fa fa-paint-brush-alt fa-w-16",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: props.fill,
    d: "M365.99 33.1 194.11 289.51l78 65 218.81-221.52C564.15 52.52 427.95-55.3 365.99 33.1zM167.87 309.29c-40.45 2.41-77.23 17.53-98.03 72.35-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.39-.68-6.64-1.06-9.96l-87.07-72.56z"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PaintbrushIcon);

/***/ }),

/***/ "./src/js/components/icons/twitter.js":
/*!********************************************!*\
  !*** ./src/js/components/icons/twitter.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


var TwitterIcon = function TwitterIcon(props) {
  return /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    "data-prefix": "fab",
    "data-icon": "twitter",
    className: "prefix__svg-inline--fa prefix__fa-twitter prefix__fa-w-16",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: props.width,
    height: props.height
  }, /*#__PURE__*/React.createElement("path", {
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
  width: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  fill: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (TwitterIcon);

/***/ }),

/***/ "./src/js/components/unit-picker/index.js":
/*!************************************************!*\
  !*** ./src/js/components/unit-picker/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/js/components/unit-picker/editor.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Unit Picker Component.
 * Credit: Forked from @GenerateBlocks
 */




var UnitChooser = function UnitChooser(props) {
  var label = props.label,
      value = props.value,
      _onClick = props.onClick,
      units = props.units;
  return /*#__PURE__*/React.createElement("div", {
    className: "components-has-units-control-header__units"
  }, /*#__PURE__*/React.createElement("div", {
    className: "components-has-units-control-label__units"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "components-has-control__units"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    className: "components-has-control-buttons__units",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Units', 'quotes-dlx')
  }, units.map(function (unit) {
    var unitName = unit;

    if ('px' === unit) {
      unitName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Pixel', 'A size unit for CSS markup', 'quotes-dlx');
    }

    if ('em' === unit) {
      unitName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Em', 'A size unit for CSS markup', 'quotes-dlx');
    }

    if ('%' === unit) {
      unitName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Percentage', 'A size unit for CSS markup', 'quotes-dlx');
    }

    if ('vw' === unit) {
      unitName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('View Width', 'A size unit for CSS markup', 'quotes-dlx');
    }

    if ('rem' === unit) {
      unitName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Rem', 'A size unit for CSS markup', 'quotes-dlx');
    }

    if ('deg' === unit) {
      unitName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Degree', 'A size unit for CSS markup', 'quotes-dlx');
    }

    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)(
      /* translators: Unit type (px, em, %) */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('%s Units', 'quotes-dlx'), unitName),
      key: unit
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      key: unit,
      className: 'components-has-control-button__units--' + unit,
      isSmall: true,
      isPrimary: value === unit,
      "aria-pressed": value === unit,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)(
      /* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('%s Units', 'quotes-dlx'), unitName),
      onClick: function onClick() {
        return _onClick(unit);
      }
    }, unit));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (UnitChooser);

/***/ }),

/***/ "./src/js/validation/twitter.js":
/*!**************************************!*\
  !*** ./src/js/validation/twitter.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* eslint-disable no-var */

/* eslint-disable wrap-iife */
var twttr = function () {
  if (typeof twttr === 'undefined' || twttr === null) {
    var twttr = {};
  }

  twttr.txt = {};
  twttr.txt.regexen = {};
  var HTML_ENTITIES = {
    '&': '&amp;',
    '>': '&gt;',
    '<': '&lt;',
    '"': '&quot;',
    "'": '&#39;'
  }; // HTML escaping

  twttr.txt.htmlEscape = function (text) {
    return text && text.replace(/[&"'><]/g, function (character) {
      return HTML_ENTITIES[character];
    });
  }; // Builds a RegExp


  function regexSupplant(regex, flags) {
    flags = flags || '';

    if (typeof regex !== 'string') {
      if (regex.global && flags.indexOf('g') < 0) {
        flags += 'g';
      }

      if (regex.ignoreCase && flags.indexOf('i') < 0) {
        flags += 'i';
      }

      if (regex.multiline && flags.indexOf('m') < 0) {
        flags += 'm';
      }

      regex = regex.source;
    }

    return new RegExp(regex.replace(/#\{(\w+)\}/g, function (match, name) {
      var newRegex = twttr.txt.regexen[name] || '';

      if (typeof newRegex !== 'string') {
        newRegex = newRegex.source;
      }

      return newRegex;
    }), flags);
  }

  twttr.txt.regexSupplant = regexSupplant; // simple string interpolation

  function stringSupplant(str, values) {
    return str.replace(/#\{(\w+)\}/g, function (match, name) {
      return values[name] || '';
    });
  }

  twttr.txt.stringSupplant = stringSupplant;

  function addCharsToCharClass(charClass, start, end) {
    var s = String.fromCharCode(start);

    if (end !== start) {
      s += '-' + String.fromCharCode(end);
    }

    charClass.push(s);
    return charClass;
  }

  twttr.txt.addCharsToCharClass = addCharsToCharClass; // Space is more than %20, U+3000 for example is the full-width space used with Kanji. Provide a short-hand
  // to access both the list of characters and a pattern suitible for use with String#split
  // Taken from: ActiveSupport::Multibyte::Handlers::UTF8Handler::UNICODE_WHITESPACE

  var fromCode = String.fromCharCode;
  var UNICODE_SPACES = [fromCode(0x0020), // White_Space # Zs       SPACE
  fromCode(0x0085), // White_Space # Cc       <control-0085>
  fromCode(0x00a0), // White_Space # Zs       NO-BREAK SPACE
  fromCode(0x1680), // White_Space # Zs       OGHAM SPACE MARK
  fromCode(0x180e), // White_Space # Zs       MONGOLIAN VOWEL SEPARATOR
  fromCode(0x2028), // White_Space # Zl       LINE SEPARATOR
  fromCode(0x2029), // White_Space # Zp       PARAGRAPH SEPARATOR
  fromCode(0x202f), // White_Space # Zs       NARROW NO-BREAK SPACE
  fromCode(0x205f), // White_Space # Zs       MEDIUM MATHEMATICAL SPACE
  fromCode(0x3000) // White_Space # Zs       IDEOGRAPHIC SPACE
  ];
  addCharsToCharClass(UNICODE_SPACES, 0x009, 0x00d); // White_Space # Cc   [5] <control-0009>..<control-000D>

  addCharsToCharClass(UNICODE_SPACES, 0x2000, 0x200a); // White_Space # Zs  [11] EN QUAD..HAIR SPACE

  var INVALID_CHARS = [fromCode(0xfffe), fromCode(0xfeff), // BOM
  fromCode(0xffff) // Special
  ];
  addCharsToCharClass(INVALID_CHARS, 0x202a, 0x202e); // Directional change

  twttr.txt.regexen.spaces_group = regexSupplant(UNICODE_SPACES.join(''));
  twttr.txt.regexen.spaces = regexSupplant('[' + UNICODE_SPACES.join('') + ']');
  twttr.txt.regexen.invalid_chars_group = regexSupplant(INVALID_CHARS.join(''));
  twttr.txt.regexen.punct = /\!'#%&'\(\)*\+,\\\-\.\/:;<=>\?@\[\]\^_{|}~\$/;
  twttr.txt.regexen.rtl_chars = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm;
  twttr.txt.regexen.non_bmp_code_pairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/gm;
  var latinAccentChars = []; // Latin accented characters (subtracted 0xD7 from the range, it's a confusable multiplication sign. Looks like "x")

  addCharsToCharClass(latinAccentChars, 0x00c0, 0x00d6);
  addCharsToCharClass(latinAccentChars, 0x00d8, 0x00f6);
  addCharsToCharClass(latinAccentChars, 0x00f8, 0x00ff); // Latin Extended A and B

  addCharsToCharClass(latinAccentChars, 0x0100, 0x024f); // assorted IPA Extensions

  addCharsToCharClass(latinAccentChars, 0x0253, 0x0254);
  addCharsToCharClass(latinAccentChars, 0x0256, 0x0257);
  addCharsToCharClass(latinAccentChars, 0x0259, 0x0259);
  addCharsToCharClass(latinAccentChars, 0x025b, 0x025b);
  addCharsToCharClass(latinAccentChars, 0x0263, 0x0263);
  addCharsToCharClass(latinAccentChars, 0x0268, 0x0268);
  addCharsToCharClass(latinAccentChars, 0x026f, 0x026f);
  addCharsToCharClass(latinAccentChars, 0x0272, 0x0272);
  addCharsToCharClass(latinAccentChars, 0x0289, 0x0289);
  addCharsToCharClass(latinAccentChars, 0x028b, 0x028b); // Okina for Hawaiian (it *is* a letter character)

  addCharsToCharClass(latinAccentChars, 0x02bb, 0x02bb); // Combining diacritics

  addCharsToCharClass(latinAccentChars, 0x0300, 0x036f); // Latin Extended Additional

  addCharsToCharClass(latinAccentChars, 0x1e00, 0x1eff);
  twttr.txt.regexen.latinAccentChars = regexSupplant(latinAccentChars.join('')); // Some minimizers convert string escapes into their literal values, which leads to intermittent Unicode normalization bugs and
  // increases the gzipped download size. Use RegEx literals as opposed to string literals to prevent that.

  var unicodeLettersAndMarks = /A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2D/.source;
  var unicodeNumbers = /0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19/.source;
  var hashtagSpecialChars = /_\u200c\u200d\ua67e\u05be\u05f3\u05f4\uff5e\u301c\u309b\u309c\u30a0\u30fb\u3003\u0f0b\u0f0c\u00b7/.source; // A hashtag must contain at least one unicode letter or mark, as well as numbers, underscores, and select special characters.

  twttr.txt.regexen.hashSigns = /[#＃]/;
  twttr.txt.regexen.hashtagAlpha = new RegExp('[' + unicodeLettersAndMarks + ']');
  twttr.txt.regexen.hashtagAlphaNumeric = new RegExp('[' + unicodeLettersAndMarks + unicodeNumbers + hashtagSpecialChars + ']');
  twttr.txt.regexen.endHashtagMatch = regexSupplant(/^(?:#{hashSigns}|:\/\/)/);
  twttr.txt.regexen.hashtagBoundary = new RegExp('(?:^|$|[^&' + unicodeLettersAndMarks + unicodeNumbers + hashtagSpecialChars + '])');
  twttr.txt.regexen.validHashtag = regexSupplant(/(#{hashtagBoundary})(#{hashSigns})(?!\ufe0f|\u20e3)(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi); // Mention related regex collection

  twttr.txt.regexen.validMentionPrecedingChars = /(?:^|[^a-zA-Z0-9_!#$%&*@＠]|(?:^|[^a-zA-Z0-9_+~.-])(?:rt|RT|rT|Rt):?)/;
  twttr.txt.regexen.atSigns = /[@＠]/;
  twttr.txt.regexen.validMentionOrList = regexSupplant('(#{validMentionPrecedingChars})' + // $1: Preceding character
  '(#{atSigns})' + // $2: At mark
  '([a-zA-Z0-9_]{1,20})' + // $3: Screen name
  '(/[a-zA-Z][a-zA-Z0-9_-]{0,24})?', // $4: List (optional)
  'g');
  twttr.txt.regexen.validReply = regexSupplant(/^(?:#{spaces})*#{atSigns}([a-zA-Z0-9_]{1,20})/);
  twttr.txt.regexen.endMentionMatch = regexSupplant(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/); // URL related regex collection

  twttr.txt.regexen.validUrlPrecedingChars = regexSupplant(/(?:[^A-Za-z0-9@＠$#＃#{invalid_chars_group}]|^)/);
  twttr.txt.regexen.invalidUrlWithoutProtocolPrecedingChars = /[-_.\/]$/;
  twttr.txt.regexen.invalidDomainChars = stringSupplant('#{punct}#{spaces_group}#{invalid_chars_group}', twttr.txt.regexen);
  twttr.txt.regexen.validDomainChars = regexSupplant(/[^#{invalidDomainChars}]/);
  twttr.txt.regexen.validSubdomain = regexSupplant(/(?:(?:#{validDomainChars}(?:[_-]|#{validDomainChars})*)?#{validDomainChars}\.)/);
  twttr.txt.regexen.validDomainName = regexSupplant(/(?:(?:#{validDomainChars}(?:-|#{validDomainChars})*)?#{validDomainChars}\.)/);
  twttr.txt.regexen.validGTLD = regexSupplant(RegExp('(?:(?:' + 'abb|abbott|abogado|academy|accenture|accountant|accountants|aco|active|actor|ads|adult|aeg|aero|' + 'afl|agency|aig|airforce|airtel|allfinanz|alsace|amsterdam|android|apartments|app|aquarelle|' + 'archi|army|arpa|asia|associates|attorney|auction|audio|auto|autos|axa|azure|band|bank|bar|' + 'barcelona|barclaycard|barclays|bargains|bauhaus|bayern|bbc|bbva|bcn|beer|bentley|berlin|best|' + 'bet|bharti|bible|bid|bike|bing|bingo|bio|biz|black|blackfriday|bloomberg|blue|bmw|bnl|' + 'bnpparibas|boats|bond|boo|boots|boutique|bradesco|bridgestone|broker|brother|brussels|budapest|' + 'build|builders|business|buzz|bzh|cab|cafe|cal|camera|camp|cancerresearch|canon|capetown|capital|' + 'caravan|cards|care|career|careers|cars|cartier|casa|cash|casino|cat|catering|cba|cbn|ceb|center|' + 'ceo|cern|cfa|cfd|chanel|channel|chat|cheap|chloe|christmas|chrome|church|cisco|citic|city|' + 'claims|cleaning|click|clinic|clothing|cloud|club|coach|codes|coffee|college|cologne|com|' + 'commbank|community|company|computer|condos|construction|consulting|contractors|cooking|cool|' + 'coop|corsica|country|coupons|courses|credit|creditcard|cricket|crown|crs|cruises|cuisinella|' + 'cymru|cyou|dabur|dad|dance|date|dating|datsun|day|dclk|deals|degree|delivery|delta|democrat|' + 'dental|dentist|desi|design|dev|diamonds|diet|digital|direct|directory|discount|dnp|docs|dog|' + 'doha|domains|doosan|download|drive|durban|dvag|earth|eat|edu|education|email|emerck|energy|' + 'engineer|engineering|enterprises|epson|equipment|erni|esq|estate|eurovision|eus|events|everbank|' + 'exchange|expert|exposed|express|fage|fail|faith|family|fan|fans|farm|fashion|feedback|film|' + 'finance|financial|firmdale|fish|fishing|fit|fitness|flights|florist|flowers|flsmidth|fly|foo|' + 'football|forex|forsale|forum|foundation|frl|frogans|fund|furniture|futbol|fyi|gal|gallery|game|' + 'garden|gbiz|gdn|gent|genting|ggee|gift|gifts|gives|giving|glass|gle|global|globo|gmail|gmo|gmx|' + 'gold|goldpoint|golf|goo|goog|google|gop|gov|graphics|gratis|green|gripe|group|guge|guide|' + 'guitars|guru|hamburg|hangout|haus|healthcare|help|here|hermes|hiphop|hitachi|hiv|hockey|' + 'holdings|holiday|homedepot|homes|honda|horse|host|hosting|hoteles|hotmail|house|how|hsbc|ibm|' + 'icbc|ice|icu|ifm|iinet|immo|immobilien|industries|infiniti|info|ing|ink|institute|insure|int|' + 'international|investments|ipiranga|irish|ist|istanbul|itau|iwc|java|jcb|jetzt|jewelry|jlc|jll|' + 'jobs|joburg|jprs|juegos|kaufen|kddi|kim|kitchen|kiwi|koeln|komatsu|krd|kred|kyoto|lacaixa|' + 'lancaster|land|lasalle|lat|latrobe|law|lawyer|lds|lease|leclerc|legal|lexus|lgbt|liaison|lidl|' + 'life|lighting|limited|limo|link|live|lixil|loan|loans|lol|london|lotte|lotto|love|ltda|lupin|' + 'luxe|luxury|madrid|maif|maison|man|management|mango|market|marketing|markets|marriott|mba|media|' + 'meet|melbourne|meme|memorial|men|menu|miami|microsoft|mil|mini|mma|mobi|moda|moe|mom|monash|' + 'money|montblanc|mormon|mortgage|moscow|motorcycles|mov|movie|movistar|mtn|mtpc|museum|nadex|' + 'nagoya|name|navy|nec|net|netbank|network|neustar|new|news|nexus|ngo|nhk|nico|ninja|nissan|nokia|' + 'nra|nrw|ntt|nyc|office|okinawa|omega|one|ong|onl|online|ooo|oracle|orange|org|organic|osaka|' + 'otsuka|ovh|page|panerai|paris|partners|parts|party|pet|pharmacy|philips|photo|photography|' + 'photos|physio|piaget|pics|pictet|pictures|pink|pizza|place|play|plumbing|plus|pohl|poker|porn|' + 'post|praxi|press|pro|prod|productions|prof|properties|property|pub|qpon|quebec|racing|realtor|' + 'realty|recipes|red|redstone|rehab|reise|reisen|reit|ren|rent|rentals|repair|report|republican|' + 'rest|restaurant|review|reviews|rich|ricoh|rio|rip|rocks|rodeo|rsvp|ruhr|run|ryukyu|saarland|' + 'sakura|sale|samsung|sandvik|sandvikcoromant|sanofi|sap|sarl|saxo|sca|scb|schmidt|scholarships|' + 'school|schule|schwarz|science|scor|scot|seat|seek|sener|services|sew|sex|sexy|shiksha|shoes|' + 'show|shriram|singles|site|ski|sky|skype|sncf|soccer|social|software|sohu|solar|solutions|sony|' + 'soy|space|spiegel|spreadbetting|srl|starhub|statoil|studio|study|style|sucks|supplies|supply|' + 'support|surf|surgery|suzuki|swatch|swiss|sydney|systems|taipei|tatamotors|tatar|tattoo|tax|taxi|' + 'team|tech|technology|tel|telefonica|temasek|tennis|thd|theater|tickets|tienda|tips|tires|tirol|' + 'today|tokyo|tools|top|toray|toshiba|tours|town|toyota|toys|trade|trading|training|travel|trust|' + 'tui|ubs|university|uno|uol|vacations|vegas|ventures|vermögensberater|vermögensberatung|' + 'versicherung|vet|viajes|video|villas|vin|vision|vista|vistaprint|vlaanderen|vodka|vote|voting|' + 'voto|voyage|wales|walter|wang|watch|webcam|website|wed|wedding|weir|whoswho|wien|wiki|' + 'williamhill|win|windows|wine|wme|work|works|world|wtc|wtf|xbox|xerox|xin|xperia|xxx|xyz|yachts|' + 'yandex|yodobashi|yoga|yokohama|youtube|zip|zone|zuerich|дети|ком|москва|онлайн|орг|рус|сайт|קום|' + 'بازار|شبكة|كوم|موقع|कॉम|नेट|संगठन|คอม|みんな|グーグル|コム|世界|中信|中文网|企业|佛山|信息|健康|八卦|公司|公益|商城|商店|商标|在线|大拿|' + '娱乐|工行|广东|慈善|我爱你|手机|政务|政府|新闻|时尚|机构|淡马锡|游戏|点看|移动|组织机构|网址|网店|网络|谷歌|集团|飞利浦|餐厅|닷넷|닷컴|삼성|onion' + ')(?=[^0-9a-zA-Z@]|$))'));
  twttr.txt.regexen.validCCTLD = regexSupplant(RegExp('(?:(?:' + 'ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bl|bm|bn|bo|bq|' + 'br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|' + 'ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|' + 'gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|' + 'la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mf|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|' + 'my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|' + 'rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|' + 'tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|ελ|' + 'бел|мкд|мон|рф|срб|укр|қаз|հայ|الاردن|الجزائر|السعودية|المغرب|امارات|ایران|بھارت|تونس|سودان|' + 'سورية|عراق|عمان|فلسطين|قطر|مصر|مليسيا|پاکستان|भारत|বাংলা|ভারত|ਭਾਰਤ|ભારત|இந்தியா|இலங்கை|' + 'சிங்கப்பூர்|భారత్|ලංකා|ไทย|გე|中国|中國|台湾|台灣|新加坡|澳門|香港|한국' + ')(?=[^0-9a-zA-Z@]|$))'));
  twttr.txt.regexen.validPunycode = regexSupplant(/(?:xn--[0-9a-z]+)/);
  twttr.txt.regexen.validSpecialCCTLD = regexSupplant(RegExp('(?:(?:co|tv)(?=[^0-9a-zA-Z@]|$))'));
  twttr.txt.regexen.validDomain = regexSupplant(/(?:#{validSubdomain}*#{validDomainName}(?:#{validGTLD}|#{validCCTLD}|#{validPunycode}))/);
  twttr.txt.regexen.validAsciiDomain = regexSupplant(/(?:(?:[\-a-z0-9#{latinAccentChars}]+)\.)+(?:#{validGTLD}|#{validCCTLD}|#{validPunycode})/gi);
  twttr.txt.regexen.invalidShortDomain = regexSupplant(/^#{validDomainName}#{validCCTLD}$/i);
  twttr.txt.regexen.validSpecialShortDomain = regexSupplant(/^#{validDomainName}#{validSpecialCCTLD}$/i);
  twttr.txt.regexen.validPortNumber = regexSupplant(/[0-9]+/);
  twttr.txt.regexen.cyrillicLettersAndMarks = regexSupplant(/\u0400-\u04FF/);
  twttr.txt.regexen.validGeneralUrlPathChars = regexSupplant(/[a-z#{cyrillicLettersAndMarks}0-9!\*';:=\+,\.\$\/%#\[\]\-_~@\|&#{latinAccentChars}]/i); // Allow URL paths to contain up to two nested levels of balanced parens
  //  1. Used in Wikipedia URLs like /Primer_(film)
  //  2. Used in IIS sessions like /S(dfd346)/
  //  3. Used in Rdio URLs like /track/We_Up_(Album_Version_(Edited))/

  twttr.txt.regexen.validUrlBalancedParens = regexSupplant('\\(' + '(?:' + '#{validGeneralUrlPathChars}+' + '|' + // allow one nested level of balanced parentheses
  '(?:' + '#{validGeneralUrlPathChars}*' + '\\(' + '#{validGeneralUrlPathChars}+' + '\\)' + '#{validGeneralUrlPathChars}*' + ')' + ')' + '\\)', 'i'); // Valid end-of-path chracters (so /foo. does not gobble the period).
  // 1. Allow =&# for empty URL parameters and other URL-join artifacts

  twttr.txt.regexen.validUrlPathEndingChars = regexSupplant(/[\+\-a-z#{cyrillicLettersAndMarks}0-9=_#\/#{latinAccentChars}]|(?:#{validUrlBalancedParens})/i); // Allow @ in a url, but only in the middle. Catch things like http://example.com/@user/

  twttr.txt.regexen.validUrlPath = regexSupplant('(?:' + '(?:' + '#{validGeneralUrlPathChars}*' + '(?:#{validUrlBalancedParens}#{validGeneralUrlPathChars}*)*' + '#{validUrlPathEndingChars}' + ')|(?:@#{validGeneralUrlPathChars}+/)' + ')', 'i');
  twttr.txt.regexen.validUrlQueryChars = /[a-z0-9!?\*'@\(\);:&=\+\$\/%#\[\]\-_\.,~|]/i;
  twttr.txt.regexen.validUrlQueryEndingChars = /[a-z0-9_&=#\/]/i;
  twttr.txt.regexen.extractUrl = regexSupplant('(' + // $1 total match
  '(#{validUrlPrecedingChars})' + // $2 Preceeding chracter
  '(' + // $3 URL
  '(https?:\\/\\/)?' + // $4 Protocol (optional)
  '(#{validDomain})' + // $5 Domain(s)
  '(?::(#{validPortNumber}))?' + // $6 Port number (optional)
  '(\\/#{validUrlPath}*)?' + // $7 URL Path
  '(\\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?' + // $8 Query String
  ')' + ')', 'gi');
  twttr.txt.regexen.validTcoUrl = /^https?:\/\/t\.co\/[a-z0-9]+/i;
  twttr.txt.regexen.urlHasProtocol = /^https?:\/\//i;
  twttr.txt.regexen.urlHasHttps = /^https:\/\//i; // cashtag related regex

  twttr.txt.regexen.cashtag = /[a-z]{1,6}(?:[._][a-z]{1,2})?/i;
  twttr.txt.regexen.validCashtag = regexSupplant('(^|#{spaces})(\\$)(#{cashtag})(?=$|\\s|[#{punct}])', 'gi'); // These URL validation pattern strings are based on the ABNF from RFC 3986

  twttr.txt.regexen.validateUrlUnreserved = /[a-z\u0400-\u04FF0-9\-._~]/i;
  twttr.txt.regexen.validateUrlPctEncoded = /(?:%[0-9a-f]{2})/i;
  twttr.txt.regexen.validateUrlSubDelims = /[!$&'()*+,;=]/i;
  twttr.txt.regexen.validateUrlPchar = regexSupplant('(?:' + '#{validateUrlUnreserved}|' + '#{validateUrlPctEncoded}|' + '#{validateUrlSubDelims}|' + '[:|@]' + ')', 'i');
  twttr.txt.regexen.validateUrlScheme = /(?:[a-z][a-z0-9+\-.]*)/i;
  twttr.txt.regexen.validateUrlUserinfo = regexSupplant('(?:' + '#{validateUrlUnreserved}|' + '#{validateUrlPctEncoded}|' + '#{validateUrlSubDelims}|' + ':' + ')*', 'i');
  twttr.txt.regexen.validateUrlDecOctet = /(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9]{2})|(?:2[0-4][0-9])|(?:25[0-5]))/i;
  twttr.txt.regexen.validateUrlIpv4 = regexSupplant(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i); // Punting on real IPv6 validation for now

  twttr.txt.regexen.validateUrlIpv6 = /(?:\[[a-f0-9:\.]+\])/i; // Also punting on IPvFuture for now

  twttr.txt.regexen.validateUrlIp = regexSupplant('(?:' + '#{validateUrlIpv4}|' + '#{validateUrlIpv6}' + ')', 'i'); // This is more strict than the rfc specifies

  twttr.txt.regexen.validateUrlSubDomainSegment = /(?:[a-z0-9](?:[a-z0-9_\-]*[a-z0-9])?)/i;
  twttr.txt.regexen.validateUrlDomainSegment = /(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)/i;
  twttr.txt.regexen.validateUrlDomainTld = /(?:[a-z](?:[a-z0-9\-]*[a-z0-9])?)/i;
  twttr.txt.regexen.validateUrlDomain = regexSupplant(/(?:(?:#{validateUrlSubDomainSegment]}\.)*(?:#{validateUrlDomainSegment]}\.)#{validateUrlDomainTld})/i);
  twttr.txt.regexen.validateUrlHost = regexSupplant('(?:' + '#{validateUrlIp}|' + '#{validateUrlDomain}' + ')', 'i'); // Unencoded internationalized domains - this doesn't check for invalid UTF-8 sequences

  twttr.txt.regexen.validateUrlUnicodeSubDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;
  twttr.txt.regexen.validateUrlUnicodeDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;
  twttr.txt.regexen.validateUrlUnicodeDomainTld = /(?:(?:[a-z]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;
  twttr.txt.regexen.validateUrlUnicodeDomain = regexSupplant(/(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i);
  twttr.txt.regexen.validateUrlUnicodeHost = regexSupplant('(?:' + '#{validateUrlIp}|' + '#{validateUrlUnicodeDomain}' + ')', 'i');
  twttr.txt.regexen.validateUrlPort = /[0-9]{1,5}/;
  twttr.txt.regexen.validateUrlUnicodeAuthority = regexSupplant('(?:(#{validateUrlUserinfo})@)?' + // $1 userinfo
  '(#{validateUrlUnicodeHost})' + // $2 host
  '(?::(#{validateUrlPort}))?', //$3 port
  'i');
  twttr.txt.regexen.validateUrlAuthority = regexSupplant('(?:(#{validateUrlUserinfo})@)?' + // $1 userinfo
  '(#{validateUrlHost})' + // $2 host
  '(?::(#{validateUrlPort}))?', // $3 port
  'i');
  twttr.txt.regexen.validateUrlPath = regexSupplant(/(\/#{validateUrlPchar}*)*/i);
  twttr.txt.regexen.validateUrlQuery = regexSupplant(/(#{validateUrlPchar}|\/|\?)*/i);
  twttr.txt.regexen.validateUrlFragment = regexSupplant(/(#{validateUrlPchar}|\/|\?)*/i); // Modified version of RFC 3986 Appendix B

  twttr.txt.regexen.validateUrlUnencoded = regexSupplant('^' + // Full URL
  '(?:' + '([^:/?#]+):\\/\\/' + // $1 Scheme
  ')?' + '([^/?#]*)' + // $2 Authority
  '([^?#]*)' + // $3 Path
  '(?:' + '\\?([^#]*)' + // $4 Query
  ')?' + '(?:' + '#(.*)' + // $5 Fragment
  ')?$', 'i'); // Default CSS class for auto-linked lists (along with the url class)

  var DEFAULT_LIST_CLASS = 'tweet-url list-slug'; // Default CSS class for auto-linked usernames (along with the url class)

  var DEFAULT_USERNAME_CLASS = 'tweet-url username'; // Default CSS class for auto-linked hashtags (along with the url class)

  var DEFAULT_HASHTAG_CLASS = 'tweet-url hashtag'; // Default CSS class for auto-linked cashtags (along with the url class)

  var DEFAULT_CASHTAG_CLASS = 'tweet-url cashtag'; // Options which should not be passed as HTML attributes

  var OPTIONS_NOT_ATTRIBUTES = {
    urlClass: true,
    listClass: true,
    usernameClass: true,
    hashtagClass: true,
    cashtagClass: true,
    usernameUrlBase: true,
    listUrlBase: true,
    hashtagUrlBase: true,
    cashtagUrlBase: true,
    usernameUrlBlock: true,
    listUrlBlock: true,
    hashtagUrlBlock: true,
    linkUrlBlock: true,
    usernameIncludeSymbol: true,
    suppressLists: true,
    suppressNoFollow: true,
    targetBlank: true,
    suppressDataScreenName: true,
    urlEntities: true,
    symbolTag: true,
    textWithSymbolTag: true,
    urlTarget: true,
    invisibleTagAttrs: true,
    linkAttributeBlock: true,
    linkTextBlock: true,
    htmlEscapeNonEntities: true
  };
  var BOOLEAN_ATTRIBUTES = {
    disabled: true,
    readonly: true,
    multiple: true,
    checked: true
  }; // Simple object cloning function for simple objects

  function clone(o) {
    var r = {};

    for (var k in o) {
      if (o.hasOwnProperty(k)) {
        r[k] = o[k];
      }
    }

    return r;
  }

  twttr.txt.tagAttrs = function (attributes) {
    var htmlAttrs = '';

    for (var k in attributes) {
      var v = attributes[k];

      if (BOOLEAN_ATTRIBUTES[k]) {
        v = v ? k : null;
      }

      if (v == null) {
        continue;
      }

      htmlAttrs += ' ' + twttr.txt.htmlEscape(k) + '="' + twttr.txt.htmlEscape(v.toString()) + '"';
    }

    return htmlAttrs;
  };

  twttr.txt.linkToText = function (entity, text, attributes, options) {
    if (!options.suppressNoFollow) {
      attributes.rel = 'nofollow';
    } // if linkAttributeBlock is specified, call it to modify the attributes


    if (options.linkAttributeBlock) {
      options.linkAttributeBlock(entity, attributes);
    } // if linkTextBlock is specified, call it to get a new/modified link text


    if (options.linkTextBlock) {
      text = options.linkTextBlock(entity, text);
    }

    var d = {
      text: text,
      attr: twttr.txt.tagAttrs(attributes)
    };
    return stringSupplant('<a#{attr}>#{text}</a>', d);
  };

  twttr.txt.linkToTextWithSymbol = function (entity, symbol, text, attributes, options) {
    var taggedSymbol = options.symbolTag ? '<' + options.symbolTag + '>' + symbol + '</' + options.symbolTag + '>' : symbol;
    text = twttr.txt.htmlEscape(text);
    var taggedText = options.textWithSymbolTag ? '<' + options.textWithSymbolTag + '>' + text + '</' + options.textWithSymbolTag + '>' : text;

    if (options.usernameIncludeSymbol || !symbol.match(twttr.txt.regexen.atSigns)) {
      return twttr.txt.linkToText(entity, taggedSymbol + taggedText, attributes, options);
    }

    return taggedSymbol + twttr.txt.linkToText(entity, taggedText, attributes, options);
  };

  twttr.txt.linkToHashtag = function (entity, text, options) {
    var hash = text.substring(entity.indices[0], entity.indices[0] + 1);
    var hashtag = twttr.txt.htmlEscape(entity.hashtag);
    var attrs = clone(options.htmlAttrs || {});
    attrs.href = options.hashtagUrlBase + hashtag;
    attrs.title = '#' + hashtag;
    attrs["class"] = options.hashtagClass;

    if (hashtag.charAt(0).match(twttr.txt.regexen.rtl_chars)) {
      attrs["class"] += ' rtl';
    }

    if (options.targetBlank) {
      attrs.target = '_blank';
    }

    return twttr.txt.linkToTextWithSymbol(entity, hash, hashtag, attrs, options);
  };

  twttr.txt.linkToCashtag = function (entity, text, options) {
    var cashtag = twttr.txt.htmlEscape(entity.cashtag);
    var attrs = clone(options.htmlAttrs || {});
    attrs.href = options.cashtagUrlBase + cashtag;
    attrs.title = '$' + cashtag;
    attrs["class"] = options.cashtagClass;

    if (options.targetBlank) {
      attrs.target = '_blank';
    }

    return twttr.txt.linkToTextWithSymbol(entity, '$', cashtag, attrs, options);
  };

  twttr.txt.linkToMentionAndList = function (entity, text, options) {
    var at = text.substring(entity.indices[0], entity.indices[0] + 1);
    var user = twttr.txt.htmlEscape(entity.screenName);
    var slashListname = twttr.txt.htmlEscape(entity.listSlug);
    var isList = entity.listSlug && !options.suppressLists;
    var attrs = clone(options.htmlAttrs || {});
    attrs["class"] = isList ? options.listClass : options.usernameClass;
    attrs.href = isList ? options.listUrlBase + user + slashListname : options.usernameUrlBase + user;

    if (!isList && !options.suppressDataScreenName) {
      attrs['data-screen-name'] = user;
    }

    if (options.targetBlank) {
      attrs.target = '_blank';
    }

    return twttr.txt.linkToTextWithSymbol(entity, at, isList ? user + slashListname : user, attrs, options);
  };

  twttr.txt.linkToUrl = function (entity, text, options) {
    var url = entity.url;
    var displayUrl = url;
    var linkText = twttr.txt.htmlEscape(displayUrl); // If the caller passed a urlEntities object (provided by a Twitter API
    // response with include_entities=true), we use that to render the display_url
    // for each URL instead of it's underlying t.co URL.

    var urlEntity = options.urlEntities && options.urlEntities[url] || entity;

    if (urlEntity.display_url) {
      linkText = twttr.txt.linkTextWithEntity(urlEntity, options);
    }

    var attrs = clone(options.htmlAttrs || {});

    if (!url.match(twttr.txt.regexen.urlHasProtocol)) {
      url = 'http://' + url;
    }

    attrs.href = url;

    if (options.targetBlank) {
      attrs.target = '_blank';
    } // set class only if urlClass is specified.


    if (options.urlClass) {
      attrs["class"] = options.urlClass;
    } // set target only if urlTarget is specified.


    if (options.urlTarget) {
      attrs.target = options.urlTarget;
    }

    if (!options.title && urlEntity.display_url) {
      attrs.title = urlEntity.expanded_url;
    }

    return twttr.txt.linkToText(entity, linkText, attrs, options);
  };

  twttr.txt.linkTextWithEntity = function (entity, options) {
    var displayUrl = entity.display_url;
    var expandedUrl = entity.expanded_url; // Goal: If a user copies and pastes a tweet containing t.co'ed link, the resulting paste
    // should contain the full original URL (expanded_url), not the display URL.
    //
    // Method: Whenever possible, we actually emit HTML that contains expanded_url, and use
    // font-size:0 to hide those parts that should not be displayed (because they are not part of display_url).
    // Elements with font-size:0 get copied even though they are not visible.
    // Note that display:none doesn't work here. Elements with display:none don't get copied.
    //
    // Additionally, we want to *display* ellipses, but we don't want them copied.  To make this happen we
    // wrap the ellipses in a tco-ellipsis class and provide an onCopy handler that sets display:none on
    // everything with the tco-ellipsis class.
    //
    // Exception: pic.twitter.com images, for which expandedUrl = "https://twitter.com/#!/username/status/1234/photo/1
    // For those URLs, display_url is not a substring of expanded_url, so we don't do anything special to render the elided parts.
    // For a pic.twitter.com URL, the only elided part will be the "https://", so this is fine.

    var displayUrlSansEllipses = displayUrl.replace(/…/g, ''); // We have to disregard ellipses for matching
    // Note: we currently only support eliding parts of the URL at the beginning or the end.
    // Eventually we may want to elide parts of the URL in the *middle*.  If so, this code will
    // become more complicated.  We will probably want to create a regexp out of display URL,
    // replacing every ellipsis with a ".*".

    if (expandedUrl.indexOf(displayUrlSansEllipses) != -1) {
      var displayUrlIndex = expandedUrl.indexOf(displayUrlSansEllipses);
      var v = {
        displayUrlSansEllipses: displayUrlSansEllipses,
        // Portion of expandedUrl that precedes the displayUrl substring
        beforeDisplayUrl: expandedUrl.substr(0, displayUrlIndex),
        // Portion of expandedUrl that comes after displayUrl
        afterDisplayUrl: expandedUrl.substr(displayUrlIndex + displayUrlSansEllipses.length),
        precedingEllipsis: displayUrl.match(/^…/) ? '…' : '',
        followingEllipsis: displayUrl.match(/…$/) ? '…' : ''
      };

      for (var k in v) {
        if (v.hasOwnProperty(k)) {
          v[k] = twttr.txt.htmlEscape(v[k]);
        }
      } // As an example: The user tweets "hi http://longdomainname.com/foo"
      // This gets shortened to "hi http://t.co/xyzabc", with display_url = "…nname.com/foo"
      // This will get rendered as:
      // <span class='tco-ellipsis'> <!-- This stuff should get displayed but not copied -->
      //   …
      //   <!-- There's a chance the onCopy event handler might not fire. In case that happens,
      //        we include an &nbsp; here so that the … doesn't bump up against the URL and ruin it.
      //        The &nbsp; is inside the tco-ellipsis span so that when the onCopy handler *does*
      //        fire, it doesn't get copied.  Otherwise the copied text would have two spaces in a row,
      //        e.g. "hi  http://longdomainname.com/foo".
      //   <span style='font-size:0'>&nbsp;</span>
      // </span>
      // <span style='font-size:0'>  <!-- This stuff should get copied but not displayed -->
      //   http://longdomai
      // </span>
      // <span class='js-display-url'> <!-- This stuff should get displayed *and* copied -->
      //   nname.com/foo
      // </span>
      // <span class='tco-ellipsis'> <!-- This stuff should get displayed but not copied -->
      //   <span style='font-size:0'>&nbsp;</span>
      //   …
      // </span>


      v.invisible = options.invisibleTagAttrs;
      return stringSupplant("<span class='tco-ellipsis'>#{precedingEllipsis}<span #{invisible}>&nbsp;</span></span><span #{invisible}>#{beforeDisplayUrl}</span><span class='js-display-url'>#{displayUrlSansEllipses}</span><span #{invisible}>#{afterDisplayUrl}</span><span class='tco-ellipsis'><span #{invisible}>&nbsp;</span>#{followingEllipsis}</span>", v);
    }

    return displayUrl;
  };

  twttr.txt.autoLinkEntities = function (text, entities, options) {
    options = clone(options || {});
    options.hashtagClass = options.hashtagClass || DEFAULT_HASHTAG_CLASS;
    options.hashtagUrlBase = options.hashtagUrlBase || 'https://twitter.com/#!/search?q=%23';
    options.cashtagClass = options.cashtagClass || DEFAULT_CASHTAG_CLASS;
    options.cashtagUrlBase = options.cashtagUrlBase || 'https://twitter.com/#!/search?q=%24';
    options.listClass = options.listClass || DEFAULT_LIST_CLASS;
    options.usernameClass = options.usernameClass || DEFAULT_USERNAME_CLASS;
    options.usernameUrlBase = options.usernameUrlBase || 'https://twitter.com/';
    options.listUrlBase = options.listUrlBase || 'https://twitter.com/';
    options.htmlAttrs = twttr.txt.extractHtmlAttrsFromOptions(options);
    options.invisibleTagAttrs = options.invisibleTagAttrs || "style='position:absolute;left:-9999px;'"; // remap url entities to hash

    var urlEntities, i, len;

    if (options.urlEntities) {
      urlEntities = {};

      for (i = 0, len = options.urlEntities.length; i < len; i++) {
        urlEntities[options.urlEntities[i].url] = options.urlEntities[i];
      }

      options.urlEntities = urlEntities;
    }

    var result = '';
    var beginIndex = 0; // sort entities by start index

    entities.sort(function (a, b) {
      return a.indices[0] - b.indices[0];
    });
    var nonEntity = options.htmlEscapeNonEntities ? twttr.txt.htmlEscape : function (text) {
      return text;
    };

    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i];
      result += nonEntity(text.substring(beginIndex, entity.indices[0]));

      if (entity.url) {
        result += twttr.txt.linkToUrl(entity, text, options);
      } else if (entity.hashtag) {
        result += twttr.txt.linkToHashtag(entity, text, options);
      } else if (entity.screenName) {
        result += twttr.txt.linkToMentionAndList(entity, text, options);
      } else if (entity.cashtag) {
        result += twttr.txt.linkToCashtag(entity, text, options);
      }

      beginIndex = entity.indices[1];
    }

    result += nonEntity(text.substring(beginIndex, text.length));
    return result;
  };

  twttr.txt.autoLinkWithJSON = function (text, json, options) {
    // map JSON entity to twitter-text entity
    if (json.user_mentions) {
      for (var i = 0; i < json.user_mentions.length; i++) {
        // this is a @mention
        json.user_mentions[i].screenName = json.user_mentions[i].screen_name;
      }
    }

    if (json.hashtags) {
      for (var i = 0; i < json.hashtags.length; i++) {
        // this is a #hashtag
        json.hashtags[i].hashtag = json.hashtags[i].text;
      }
    }

    if (json.symbols) {
      for (var i = 0; i < json.symbols.length; i++) {
        // this is a $CASH tag
        json.symbols[i].cashtag = json.symbols[i].text;
      }
    } // concatenate all entities


    var entities = [];

    for (var key in json) {
      entities = entities.concat(json[key]);
    } // modify indices to UTF-16


    twttr.txt.modifyIndicesFromUnicodeToUTF16(text, entities);
    return twttr.txt.autoLinkEntities(text, entities, options);
  };

  twttr.txt.extractHtmlAttrsFromOptions = function (options) {
    var htmlAttrs = {};

    for (var k in options) {
      var v = options[k];

      if (OPTIONS_NOT_ATTRIBUTES[k]) {
        continue;
      }

      if (BOOLEAN_ATTRIBUTES[k]) {
        v = v ? k : null;
      }

      if (v == null) {
        continue;
      }

      htmlAttrs[k] = v;
    }

    return htmlAttrs;
  };

  twttr.txt.autoLink = function (text, options) {
    var entities = twttr.txt.extractEntitiesWithIndices(text, {
      extractUrlsWithoutProtocol: false
    });
    return twttr.txt.autoLinkEntities(text, entities, options);
  };

  twttr.txt.autoLinkUsernamesOrLists = function (text, options) {
    var entities = twttr.txt.extractMentionsOrListsWithIndices(text);
    return twttr.txt.autoLinkEntities(text, entities, options);
  };

  twttr.txt.autoLinkHashtags = function (text, options) {
    var entities = twttr.txt.extractHashtagsWithIndices(text);
    return twttr.txt.autoLinkEntities(text, entities, options);
  };

  twttr.txt.autoLinkCashtags = function (text, options) {
    var entities = twttr.txt.extractCashtagsWithIndices(text);
    return twttr.txt.autoLinkEntities(text, entities, options);
  };

  twttr.txt.autoLinkUrlsCustom = function (text, options) {
    var entities = twttr.txt.extractUrlsWithIndices(text, {
      extractUrlsWithoutProtocol: false
    });
    return twttr.txt.autoLinkEntities(text, entities, options);
  };

  twttr.txt.removeOverlappingEntities = function (entities) {
    entities.sort(function (a, b) {
      return a.indices[0] - b.indices[0];
    });
    var prev = entities[0];

    for (var i = 1; i < entities.length; i++) {
      if (prev.indices[1] > entities[i].indices[0]) {
        entities.splice(i, 1);
        i--;
      } else {
        prev = entities[i];
      }
    }
  };

  twttr.txt.extractEntitiesWithIndices = function (text, options) {
    var entities = twttr.txt.extractUrlsWithIndices(text, options).concat(twttr.txt.extractMentionsOrListsWithIndices(text)).concat(twttr.txt.extractHashtagsWithIndices(text, {
      checkUrlOverlap: false
    })).concat(twttr.txt.extractCashtagsWithIndices(text));

    if (entities.length == 0) {
      return [];
    }

    twttr.txt.removeOverlappingEntities(entities);
    return entities;
  };

  twttr.txt.extractMentions = function (text) {
    var screenNamesOnly = [],
        screenNamesWithIndices = twttr.txt.extractMentionsWithIndices(text);

    for (var i = 0; i < screenNamesWithIndices.length; i++) {
      var screenName = screenNamesWithIndices[i].screenName;
      screenNamesOnly.push(screenName);
    }

    return screenNamesOnly;
  };

  twttr.txt.extractMentionsWithIndices = function (text) {
    var mentions = [],
        mentionOrList,
        mentionsOrLists = twttr.txt.extractMentionsOrListsWithIndices(text);

    for (var i = 0; i < mentionsOrLists.length; i++) {
      mentionOrList = mentionsOrLists[i];

      if (mentionOrList.listSlug == '') {
        mentions.push({
          screenName: mentionOrList.screenName,
          indices: mentionOrList.indices
        });
      }
    }

    return mentions;
  };
  /**
   * Extract list or user mentions.
   * (Presence of listSlug indicates a list)
   *
   * @param text
   */


  twttr.txt.extractMentionsOrListsWithIndices = function (text) {
    if (!text || !text.match(twttr.txt.regexen.atSigns)) {
      return [];
    }

    var possibleNames = [],
        slashListname;
    text.replace(twttr.txt.regexen.validMentionOrList, function (match, before, atSign, screenName, slashListname, offset, chunk) {
      var after = chunk.slice(offset + match.length);

      if (!after.match(twttr.txt.regexen.endMentionMatch)) {
        slashListname = slashListname || '';
        var startPosition = offset + before.length;
        var endPosition = startPosition + screenName.length + slashListname.length + 1;
        possibleNames.push({
          screenName: screenName,
          listSlug: slashListname,
          indices: [startPosition, endPosition]
        });
      }
    });
    return possibleNames;
  };

  twttr.txt.extractReplies = function (text) {
    if (!text) {
      return null;
    }

    var possibleScreenName = text.match(twttr.txt.regexen.validReply);

    if (!possibleScreenName || RegExp.rightContext.match(twttr.txt.regexen.endMentionMatch)) {
      return null;
    }

    return possibleScreenName[1];
  };

  twttr.txt.extractUrls = function (text, options) {
    var urlsOnly = [],
        urlsWithIndices = twttr.txt.extractUrlsWithIndices(text, options);

    for (var i = 0; i < urlsWithIndices.length; i++) {
      urlsOnly.push(urlsWithIndices[i].url);
    }

    return urlsOnly;
  };

  twttr.txt.extractUrlsWithIndices = function (text, options) {
    if (!options) {
      options = {
        extractUrlsWithoutProtocol: true
      };
    }

    if (!text || (options.extractUrlsWithoutProtocol ? !text.match(/\./) : !text.match(/:/))) {
      return [];
    }

    var urls = [];

    while (twttr.txt.regexen.extractUrl.exec(text)) {
      var before = RegExp.$2,
          url = RegExp.$3,
          protocol = RegExp.$4,
          domain = RegExp.$5,
          path = RegExp.$7;
      var endPosition = twttr.txt.regexen.extractUrl.lastIndex,
          startPosition = endPosition - url.length; // if protocol is missing and domain contains non-ASCII characters,
      // extract ASCII-only domains.

      if (!protocol) {
        if (!options.extractUrlsWithoutProtocol || before.match(twttr.txt.regexen.invalidUrlWithoutProtocolPrecedingChars)) {
          continue;
        }

        var lastUrl = null,
            asciiEndPosition = 0;
        domain.replace(twttr.txt.regexen.validAsciiDomain, function (asciiDomain) {
          var asciiStartPosition = domain.indexOf(asciiDomain, asciiEndPosition);
          asciiEndPosition = asciiStartPosition + asciiDomain.length;
          lastUrl = {
            url: asciiDomain,
            indices: [startPosition + asciiStartPosition, startPosition + asciiEndPosition]
          };

          if (path || asciiDomain.match(twttr.txt.regexen.validSpecialShortDomain) || !asciiDomain.match(twttr.txt.regexen.invalidShortDomain)) {
            urls.push(lastUrl);
          }
        }); // no ASCII-only domain found. Skip the entire URL.

        if (lastUrl == null) {
          continue;
        } // lastUrl only contains domain. Need to add path and query if they exist.


        if (path) {
          lastUrl.url = url.replace(domain, lastUrl.url);
          lastUrl.indices[1] = endPosition;
        }
      } else {
        // In the case of t.co URLs, don't allow additional path characters.
        if (url.match(twttr.txt.regexen.validTcoUrl)) {
          url = RegExp.lastMatch;
          endPosition = startPosition + url.length;
        }

        urls.push({
          url: url,
          indices: [startPosition, endPosition]
        });
      }
    }

    return urls;
  };

  twttr.txt.extractHashtags = function (text) {
    var hashtagsOnly = [],
        hashtagsWithIndices = twttr.txt.extractHashtagsWithIndices(text);

    for (var i = 0; i < hashtagsWithIndices.length; i++) {
      hashtagsOnly.push(hashtagsWithIndices[i].hashtag);
    }

    return hashtagsOnly;
  };

  twttr.txt.extractHashtagsWithIndices = function (text, options) {
    if (!options) {
      options = {
        checkUrlOverlap: true
      };
    }

    if (!text || !text.match(twttr.txt.regexen.hashSigns)) {
      return [];
    }

    var tags = [];
    text.replace(twttr.txt.regexen.validHashtag, function (match, before, hash, hashText, offset, chunk) {
      var after = chunk.slice(offset + match.length);

      if (after.match(twttr.txt.regexen.endHashtagMatch)) {
        return;
      }

      var startPosition = offset + before.length;
      var endPosition = startPosition + hashText.length + 1;
      tags.push({
        hashtag: hashText,
        indices: [startPosition, endPosition]
      });
    });

    if (options.checkUrlOverlap) {
      // also extract URL entities
      var urls = twttr.txt.extractUrlsWithIndices(text);

      if (urls.length > 0) {
        var entities = tags.concat(urls); // remove overlap

        twttr.txt.removeOverlappingEntities(entities); // only push back hashtags

        tags = [];

        for (var i = 0; i < entities.length; i++) {
          if (entities[i].hashtag) {
            tags.push(entities[i]);
          }
        }
      }
    }

    return tags;
  };

  twttr.txt.extractCashtags = function (text) {
    var cashtagsOnly = [],
        cashtagsWithIndices = twttr.txt.extractCashtagsWithIndices(text);

    for (var i = 0; i < cashtagsWithIndices.length; i++) {
      cashtagsOnly.push(cashtagsWithIndices[i].cashtag);
    }

    return cashtagsOnly;
  };

  twttr.txt.extractCashtagsWithIndices = function (text) {
    if (!text || text.indexOf('$') == -1) {
      return [];
    }

    var tags = [];
    text.replace(twttr.txt.regexen.validCashtag, function (match, before, dollar, cashtag, offset, chunk) {
      var startPosition = offset + before.length;
      var endPosition = startPosition + cashtag.length + 1;
      tags.push({
        cashtag: cashtag,
        indices: [startPosition, endPosition]
      });
    });
    return tags;
  };

  twttr.txt.modifyIndicesFromUnicodeToUTF16 = function (text, entities) {
    twttr.txt.convertUnicodeIndices(text, entities, false);
  };

  twttr.txt.modifyIndicesFromUTF16ToUnicode = function (text, entities) {
    twttr.txt.convertUnicodeIndices(text, entities, true);
  };

  twttr.txt.getUnicodeTextLength = function (text) {
    return text.replace(twttr.txt.regexen.non_bmp_code_pairs, ' ').length;
  };

  twttr.txt.convertUnicodeIndices = function (text, entities, indicesInUTF16) {
    if (entities.length == 0) {
      return;
    }

    var charIndex = 0;
    var codePointIndex = 0; // sort entities by start index

    entities.sort(function (a, b) {
      return a.indices[0] - b.indices[0];
    });
    var entityIndex = 0;
    var entity = entities[0];

    while (charIndex < text.length) {
      if (entity.indices[0] == (indicesInUTF16 ? charIndex : codePointIndex)) {
        var len = entity.indices[1] - entity.indices[0];
        entity.indices[0] = indicesInUTF16 ? codePointIndex : charIndex;
        entity.indices[1] = entity.indices[0] + len;
        entityIndex++;

        if (entityIndex == entities.length) {
          // no more entity
          break;
        }

        entity = entities[entityIndex];
      }

      var c = text.charCodeAt(charIndex);

      if (0xd800 <= c && c <= 0xdbff && charIndex < text.length - 1) {
        // Found high surrogate char
        c = text.charCodeAt(charIndex + 1);

        if (0xdc00 <= c && c <= 0xdfff) {
          // Found surrogate pair
          charIndex++;
        }
      }

      codePointIndex++;
      charIndex++;
    }
  }; // this essentially does text.split(/<|>/)
  // except that won't work in IE, where empty strings are ommitted
  // so "<>".split(/<|>/) => [] in IE, but is ["", "", ""] in all others
  // but "<<".split("<") => ["", "", ""]


  twttr.txt.splitTags = function (text) {
    var firstSplits = text.split('<'),
        secondSplits,
        allSplits = [],
        split;

    for (var i = 0; i < firstSplits.length; i += 1) {
      split = firstSplits[i];

      if (!split) {
        allSplits.push('');
      } else {
        secondSplits = split.split('>');

        for (var j = 0; j < secondSplits.length; j += 1) {
          allSplits.push(secondSplits[j]);
        }
      }
    }

    return allSplits;
  };

  twttr.txt.hitHighlight = function (text, hits, options) {
    var defaultHighlightTag = 'em';
    hits = hits || [];
    options = options || {};

    if (hits.length === 0) {
      return text;
    }

    var tagName = options.tag || defaultHighlightTag,
        tags = ['<' + tagName + '>', '</' + tagName + '>'],
        chunks = twttr.txt.splitTags(text),
        i,
        j,
        result = '',
        chunkIndex = 0,
        chunk = chunks[0],
        prevChunksLen = 0,
        chunkCursor = 0,
        startInChunk = false,
        chunkChars = chunk,
        flatHits = [],
        index,
        hit,
        tag,
        placed,
        hitSpot;

    for (i = 0; i < hits.length; i += 1) {
      for (j = 0; j < hits[i].length; j += 1) {
        flatHits.push(hits[i][j]);
      }
    }

    for (index = 0; index < flatHits.length; index += 1) {
      hit = flatHits[index];
      tag = tags[index % 2];
      placed = false;

      while (chunk != null && hit >= prevChunksLen + chunk.length) {
        result += chunkChars.slice(chunkCursor);

        if (startInChunk && hit === prevChunksLen + chunkChars.length) {
          result += tag;
          placed = true;
        }

        if (chunks[chunkIndex + 1]) {
          result += '<' + chunks[chunkIndex + 1] + '>';
        }

        prevChunksLen += chunkChars.length;
        chunkCursor = 0;
        chunkIndex += 2;
        chunk = chunks[chunkIndex];
        chunkChars = chunk;
        startInChunk = false;
      }

      if (!placed && chunk != null) {
        hitSpot = hit - prevChunksLen;
        result += chunkChars.slice(chunkCursor, hitSpot) + tag;
        chunkCursor = hitSpot;

        if (index % 2 === 0) {
          startInChunk = true;
        } else {
          startInChunk = false;
        }
      } else if (!placed) {
        placed = true;
        result += tag;
      }
    }

    if (chunk != null) {
      if (chunkCursor < chunkChars.length) {
        result += chunkChars.slice(chunkCursor);
      }

      for (index = chunkIndex + 1; index < chunks.length; index += 1) {
        result += index % 2 === 0 ? chunks[index] : '<' + chunks[index] + '>';
      }
    }

    return result;
  };

  var MAX_LENGTH = 140; // Characters not allowed in Tweets

  var INVALID_CHARACTERS = [// BOM
  fromCode(0xfffe), fromCode(0xfeff), // Special
  fromCode(0xffff), // Directional Change
  fromCode(0x202a), fromCode(0x202b), fromCode(0x202c), fromCode(0x202d), fromCode(0x202e)]; // Returns the length of Tweet text with consideration to t.co URL replacement
  // and chars outside the basic multilingual plane that use 2 UTF16 code points

  twttr.txt.getTweetLength = function (text, options) {
    if (!options) {
      options = {
        // These come from https://api.twitter.com/1/help/configuration.json
        // described by https://dev.twitter.com/docs/api/1/get/help/configuration
        short_url_length: 23,
        short_url_length_https: 23
      };
    }

    var textLength = twttr.txt.getUnicodeTextLength(text),
        urlsWithIndices = twttr.txt.extractUrlsWithIndices(text);
    twttr.txt.modifyIndicesFromUTF16ToUnicode(text, urlsWithIndices);

    for (var i = 0; i < urlsWithIndices.length; i++) {
      // Subtract the length of the original URL
      textLength += urlsWithIndices[i].indices[0] - urlsWithIndices[i].indices[1]; // Add 23 characters for URL starting with https://
      // http:// URLs still use https://t.co so they are 23 characters as well

      if (urlsWithIndices[i].url.toLowerCase().match(twttr.txt.regexen.urlHasHttps)) {
        textLength += options.short_url_length_https;
      } else {
        textLength += options.short_url_length;
      }
    }

    return textLength;
  }; // Check the text for any reason that it may not be valid as a Tweet. This is meant as a pre-validation
  // before posting to api.twitter.com. There are several server-side reasons for Tweets to fail but this pre-validation
  // will allow quicker feedback.
  //
  // Returns false if this text is valid. Otherwise one of the following strings will be returned:
  //
  //   "too_long": if the text is too long
  //   "empty": if the text is nil or empty
  //   "invalid_characters": if the text contains non-Unicode or any of the disallowed Unicode characters


  twttr.txt.isInvalidTweet = function (text) {
    if (!text) {
      return 'empty';
    } // Determine max length independent of URL length


    if (twttr.txt.getTweetLength(text) > MAX_LENGTH) {
      return 'too_long';
    }

    if (twttr.txt.hasInvalidCharacters(text)) {
      return 'invalid_characters';
    }

    return false;
  };

  twttr.txt.hasInvalidCharacters = function (text) {
    for (var i = 0; i < INVALID_CHARACTERS.length; i++) {
      if (text.indexOf(INVALID_CHARACTERS[i]) >= 0) {
        return true;
      }
    }

    return false;
  };

  twttr.txt.isValidTweetText = function (text) {
    return !twttr.txt.isInvalidTweet(text);
  };

  twttr.txt.isValidUsername = function (username) {
    if (!username) {
      return false;
    }

    var extracted = twttr.txt.extractMentions(username); // Should extract the username minus the @ sign, hence the .slice(1)

    return extracted.length === 1 && extracted[0] === username.slice(1);
  };

  var VALID_LIST_RE = regexSupplant(/^#{validMentionOrList}$/);

  twttr.txt.isValidList = function (usernameList) {
    var match = usernameList.match(VALID_LIST_RE); // Must have matched and had nothing before or after

    return !!(match && match[1] == '' && match[4]);
  };

  twttr.txt.isValidHashtag = function (hashtag) {
    if (!hashtag) {
      return false;
    }

    var extracted = twttr.txt.extractHashtags(hashtag); // Should extract the hashtag minus the # sign, hence the .slice(1)

    return extracted.length === 1 && extracted[0] === hashtag.slice(1);
  };

  twttr.txt.isValidUrl = function (url, unicodeDomains, requireProtocol) {
    if (unicodeDomains == null) {
      unicodeDomains = true;
    }

    if (requireProtocol == null) {
      requireProtocol = true;
    }

    if (!url) {
      return false;
    }

    var urlParts = url.match(twttr.txt.regexen.validateUrlUnencoded);

    if (!urlParts || urlParts[0] !== url) {
      return false;
    }

    var scheme = urlParts[1],
        authority = urlParts[2],
        path = urlParts[3],
        query = urlParts[4],
        fragment = urlParts[5];

    if (!((!requireProtocol || isValidMatch(scheme, twttr.txt.regexen.validateUrlScheme) && scheme.match(/^https?$/i)) && isValidMatch(path, twttr.txt.regexen.validateUrlPath) && isValidMatch(query, twttr.txt.regexen.validateUrlQuery, true) && isValidMatch(fragment, twttr.txt.regexen.validateUrlFragment, true))) {
      return false;
    }

    return unicodeDomains && isValidMatch(authority, twttr.txt.regexen.validateUrlUnicodeAuthority) || !unicodeDomains && isValidMatch(authority, twttr.txt.regexen.validateUrlAuthority);
  };

  function isValidMatch(string, regex, optional) {
    if (!optional) {
      // RegExp["$&"] is the text of the last match
      // blank strings are ok, but are falsy, so we check stringiness instead of truthiness
      return typeof string === 'string' && string.match(regex) && RegExp['$&'] === string;
    } // RegExp["$&"] is the text of the last match


    return !string || string.match(regex) && RegExp['$&'] === string;
  }

  if ( true && module.exports) {
    module.exports = twttr.txt;
  }

  if (typeof define === 'function' && __webpack_require__.amdO) {
    define([], twttr.txt);
  }

  if (typeof window !== 'undefined') {
    if (window.twttr) {
      for (var prop in twttr) {
        window.twttr[prop] = twttr[prop];
      }
    } else {
      window.twttr = twttr;
    }
  }

  return twttr;
}();

/* harmony default export */ __webpack_exports__["default"] = (twttr);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/domhandler/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/domhandler/lib/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomHandler = void 0;
var domelementtype_1 = __webpack_require__(/*! domelementtype */ "./node_modules/domhandler/node_modules/domelementtype/lib/index.js");
var node_1 = __webpack_require__(/*! ./node */ "./node_modules/domhandler/lib/node.js");
__exportStar(__webpack_require__(/*! ./node */ "./node_modules/domhandler/lib/node.js"), exports);
var reWhitespace = /\s+/g;
// Default options
var defaultOpts = {
    normalizeWhitespace: false,
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false,
};
var DomHandler = /** @class */ (function () {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */
    function DomHandler(callback, options, elementCB) {
        /** The elements of the DOM */
        this.dom = [];
        /** The root element for the DOM */
        this.root = new node_1.Document(this.dom);
        /** Indicated whether parsing has been completed. */
        this.done = false;
        /** Stack of open tags. */
        this.tagStack = [this.root];
        /** A data node that is still being written to. */
        this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */
        this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    DomHandler.prototype.onparserinit = function (parser) {
        this.parser = parser;
    };
    // Resets the handler back to starting state
    DomHandler.prototype.onreset = function () {
        this.dom = [];
        this.root = new node_1.Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
    };
    // Signals the handler that parsing is done
    DomHandler.prototype.onend = function () {
        if (this.done)
            return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    };
    DomHandler.prototype.onerror = function (error) {
        this.handleCallback(error);
    };
    DomHandler.prototype.onclosetag = function () {
        this.lastNode = null;
        var elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB)
            this.elementCB(elem);
    };
    DomHandler.prototype.onopentag = function (name, attribs) {
        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
        var element = new node_1.Element(name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    };
    DomHandler.prototype.ontext = function (data) {
        var normalizeWhitespace = this.options.normalizeWhitespace;
        var lastNode = this.lastNode;
        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            if (normalizeWhitespace) {
                lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
            }
            else {
                lastNode.data += data;
            }
            if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
            }
        }
        else {
            if (normalizeWhitespace) {
                data = data.replace(reWhitespace, " ");
            }
            var node = new node_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
        }
    };
    DomHandler.prototype.oncomment = function (data) {
        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
        }
        var node = new node_1.Comment(data);
        this.addNode(node);
        this.lastNode = node;
    };
    DomHandler.prototype.oncommentend = function () {
        this.lastNode = null;
    };
    DomHandler.prototype.oncdatastart = function () {
        var text = new node_1.Text("");
        var node = new node_1.NodeWithChildren(domelementtype_1.ElementType.CDATA, [text]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    };
    DomHandler.prototype.oncdataend = function () {
        this.lastNode = null;
    };
    DomHandler.prototype.onprocessinginstruction = function (name, data) {
        var node = new node_1.ProcessingInstruction(name, data);
        this.addNode(node);
    };
    DomHandler.prototype.handleCallback = function (error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        }
        else if (error) {
            throw error;
        }
    };
    DomHandler.prototype.addNode = function (node) {
        var parent = this.tagStack[this.tagStack.length - 1];
        var previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    };
    return DomHandler;
}());
exports.DomHandler = DomHandler;
exports["default"] = DomHandler;


/***/ }),

/***/ "./node_modules/domhandler/lib/node.js":
/*!*********************************************!*\
  !*** ./node_modules/domhandler/lib/node.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
var domelementtype_1 = __webpack_require__(/*! domelementtype */ "./node_modules/domhandler/node_modules/domelementtype/lib/index.js");
var nodeTypes = new Map([
    [domelementtype_1.ElementType.Tag, 1],
    [domelementtype_1.ElementType.Script, 1],
    [domelementtype_1.ElementType.Style, 1],
    [domelementtype_1.ElementType.Directive, 1],
    [domelementtype_1.ElementType.Text, 3],
    [domelementtype_1.ElementType.CDATA, 4],
    [domelementtype_1.ElementType.Comment, 8],
    [domelementtype_1.ElementType.Root, 9],
]);
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
var Node = /** @class */ (function () {
    /**
     *
     * @param type The type of the node.
     */
    function Node(type) {
        this.type = type;
        /** Parent of the node */
        this.parent = null;
        /** Previous sibling */
        this.prev = null;
        /** Next sibling */
        this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
        this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
        this.endIndex = null;
    }
    Object.defineProperty(Node.prototype, "nodeType", {
        // Read-only aliases
        /**
         * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible
         * node {@link type}.
         */
        get: function () {
            var _a;
            return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.parent;
        },
        set: function (parent) {
            this.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.prev;
        },
        set: function (prev) {
            this.prev = prev;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.next;
        },
        set: function (next) {
            this.next = next;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
    Node.prototype.cloneNode = function (recursive) {
        if (recursive === void 0) { recursive = false; }
        return cloneNode(this, recursive);
    };
    return Node;
}());
exports.Node = Node;
/**
 * A node that contains some data.
 */
var DataNode = /** @class */ (function (_super) {
    __extends(DataNode, _super);
    /**
     * @param type The type of the node
     * @param data The content of the data node
     */
    function DataNode(type, data) {
        var _this = _super.call(this, type) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataNode.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.data;
        },
        set: function (data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode;
}(Node));
exports.DataNode = DataNode;
/**
 * Text within the document.
 */
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(data) {
        return _super.call(this, domelementtype_1.ElementType.Text, data) || this;
    }
    return Text;
}(DataNode));
exports.Text = Text;
/**
 * Comments within the document.
 */
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment(data) {
        return _super.call(this, domelementtype_1.ElementType.Comment, data) || this;
    }
    return Comment;
}(DataNode));
exports.Comment = Comment;
/**
 * Processing instructions, including doc types.
 */
var ProcessingInstruction = /** @class */ (function (_super) {
    __extends(ProcessingInstruction, _super);
    function ProcessingInstruction(name, data) {
        var _this = _super.call(this, domelementtype_1.ElementType.Directive, data) || this;
        _this.name = name;
        return _this;
    }
    return ProcessingInstruction;
}(DataNode));
exports.ProcessingInstruction = ProcessingInstruction;
/**
 * A `Node` that can have children.
 */
var NodeWithChildren = /** @class */ (function (_super) {
    __extends(NodeWithChildren, _super);
    /**
     * @param type Type of the node.
     * @param children Children of the node. Only certain node types can have children.
     */
    function NodeWithChildren(type, children) {
        var _this = _super.call(this, type) || this;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function () {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
        /** Last child of the node. */
        get: function () {
            return this.children.length > 0
                ? this.children[this.children.length - 1]
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.children;
        },
        set: function (children) {
            this.children = children;
        },
        enumerable: false,
        configurable: true
    });
    return NodeWithChildren;
}(Node));
exports.NodeWithChildren = NodeWithChildren;
/**
 * The root node of the document.
 */
var Document = /** @class */ (function (_super) {
    __extends(Document, _super);
    function Document(children) {
        return _super.call(this, domelementtype_1.ElementType.Root, children) || this;
    }
    return Document;
}(NodeWithChildren));
exports.Document = Document;
/**
 * An element within the DOM.
 */
var Element = /** @class */ (function (_super) {
    __extends(Element, _super);
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    function Element(name, attribs, children, type) {
        if (children === void 0) { children = []; }
        if (type === void 0) { type = name === "script"
            ? domelementtype_1.ElementType.Script
            : name === "style"
                ? domelementtype_1.ElementType.Style
                : domelementtype_1.ElementType.Tag; }
        var _this = _super.call(this, type, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        return _this;
    }
    Object.defineProperty(Element.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (name) {
                var _a, _b;
                return ({
                    name: name,
                    value: _this.attribs[name],
                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
                });
            });
        },
        enumerable: false,
        configurable: true
    });
    return Element;
}(NodeWithChildren));
exports.Element = Element;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
function isTag(node) {
    return (0, domelementtype_1.isTag)(node);
}
exports.isTag = isTag;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
function isCDATA(node) {
    return node.type === domelementtype_1.ElementType.CDATA;
}
exports.isCDATA = isCDATA;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
function isText(node) {
    return node.type === domelementtype_1.ElementType.Text;
}
exports.isText = isText;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
function isComment(node) {
    return node.type === domelementtype_1.ElementType.Comment;
}
exports.isComment = isComment;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDirective(node) {
    return node.type === domelementtype_1.ElementType.Directive;
}
exports.isDirective = isDirective;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDocument(node) {
    return node.type === domelementtype_1.ElementType.Root;
}
exports.isDocument = isDocument;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `NodeWithChildren` (has children), `false` otherwise.
 */
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
exports.hasChildren = hasChildren;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
function cloneNode(node, recursive) {
    if (recursive === void 0) { recursive = false; }
    var result;
    if (isText(node)) {
        result = new Text(node.data);
    }
    else if (isComment(node)) {
        result = new Comment(node.data);
    }
    else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
        children.forEach(function (child) { return (child.parent = clone_1); });
        if (node.namespace != null) {
            clone_1.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
            clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
    }
    else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new NodeWithChildren(domelementtype_1.ElementType.CDATA, children);
        children.forEach(function (child) { return (child.parent = clone_2); });
        result = clone_2;
    }
    else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function (child) { return (child.parent = clone_3); });
        if (node["x-mode"]) {
            clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
    }
    else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    }
    else {
        throw new Error("Not implemented yet: ".concat(node.type));
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
exports.cloneNode = cloneNode;
function cloneChildren(childs) {
    var children = childs.map(function (child) { return cloneNode(child, true); });
    for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}


/***/ }),

/***/ "./node_modules/domhandler/node_modules/domelementtype/lib/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/domhandler/node_modules/domelementtype/lib/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
/** Types of elements found in htmlparser2's DOM */
var ElementType;
(function (ElementType) {
    /** Type for the root element of a document */
    ElementType["Root"] = "root";
    /** Type for Text */
    ElementType["Text"] = "text";
    /** Type for <? ... ?> */
    ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */
    ElementType["Comment"] = "comment";
    /** Type for <script> tags */
    ElementType["Script"] = "script";
    /** Type for <style> tags */
    ElementType["Style"] = "style";
    /** Type for Any tag */
    ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */
    ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */
    ElementType["Doctype"] = "doctype";
})(ElementType = exports.ElementType || (exports.ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag(elem) {
    return (elem.type === ElementType.Tag ||
        elem.type === ElementType.Script ||
        elem.type === ElementType.Style);
}
exports.isTag = isTag;
// Exports for backwards compatibility
/** Type for the root element of a document */
exports.Root = ElementType.Root;
/** Type for Text */
exports.Text = ElementType.Text;
/** Type for <? ... ?> */
exports.Directive = ElementType.Directive;
/** Type for <!-- ... --> */
exports.Comment = ElementType.Comment;
/** Type for <script> tags */
exports.Script = ElementType.Script;
/** Type for <style> tags */
exports.Style = ElementType.Style;
/** Type for Any tag */
exports.Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
exports.CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */
exports.Doctype = ElementType.Doctype;


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/html-to-react/index.js":
/*!*********************************************!*\
  !*** ./node_modules/html-to-react/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const parser = __webpack_require__(/*! ./lib/parser */ "./node_modules/html-to-react/lib/parser.js");
const processingInstructions = __webpack_require__(/*! ./lib/processing-instructions */ "./node_modules/html-to-react/lib/processing-instructions.js");
const isValidNodeDefinitions = __webpack_require__(/*! ./lib/is-valid-node-definitions */ "./node_modules/html-to-react/lib/is-valid-node-definitions.js");
const processNodeDefinitions = __webpack_require__(/*! ./lib/process-node-definitions */ "./node_modules/html-to-react/lib/process-node-definitions.js");

module.exports = {
  Parser: parser,
  ProcessingInstructions: processingInstructions,
  IsValidNodeDefinitions: isValidNodeDefinitions,
  ProcessNodeDefinitions: processNodeDefinitions,
};


/***/ }),

/***/ "./node_modules/html-to-react/lib/camel-case-attribute-names.js":
/*!**********************************************************************!*\
  !*** ./node_modules/html-to-react/lib/camel-case-attribute-names.js ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";
// These are all sourced from https://facebook.github.io/react/docs/tags-and-attributes.html -
// all attributes regardless of whether they have a different case to their HTML equivalents are
// listed to reduce the chance of human error and make it easier to just copy-paste the new list if
// it changes.

const HTML_ATTRIBUTES = [
  'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency',
  'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding',
  'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className',
  'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords',
  'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download',
  'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate',
  'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang',
  'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType',
  'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth',
  'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted',
  'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster',
  'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role',
  'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected',
  'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start',
  'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width',
  'wmode', 'wrap', 'onClick',
];

const NON_STANDARD_ATTRIBUTES = [
  'autoCapitalize', 'autoCorrect', 'color', 'itemProp', 'itemScope', 'itemType', 'itemRef',
  'itemID', 'security', 'unselectable', 'results', 'autoSave',
];

const SVG_ATTRIBUTES = [
  'accentHeight', 'accumulate', 'additive', 'alignmentBaseline', 'allowReorder', 'alphabetic',
  'amplitude', 'arabicForm', 'ascent', 'attributeName', 'attributeType', 'autoReverse', 'azimuth',
  'baseFrequency', 'baseProfile', 'baselineShift', 'bbox', 'begin', 'bias', 'by', 'calcMode',
  'capHeight', 'clip', 'clipPath', 'clipPathUnits', 'clipRule', 'colorInterpolation',
  'colorInterpolationFilters', 'colorProfile', 'colorRendering', 'contentScriptType',
  'contentStyleType', 'cursor', 'cx', 'cy', 'd', 'decelerate', 'descent', 'diffuseConstant',
  'direction', 'display', 'divisor', 'dominantBaseline', 'dur', 'dx', 'dy', 'edgeMode',
  'elevation', 'enableBackground', 'end', 'exponent', 'externalResourcesRequired', 'fill',
  'fillOpacity', 'fillRule', 'filter', 'filterRes', 'filterUnits', 'floodColor', 'floodOpacity',
  'focusable', 'fontFamily', 'fontSize', 'fontSizeAdjust', 'fontStretch', 'fontStyle',
  'fontVariant', 'fontWeight', 'format', 'from', 'fx', 'fy', 'g1', 'g2', 'glyphName',
  'glyphOrientationHorizontal', 'glyphOrientationVertical', 'glyphRef',
  'gradientTransform', 'gradientUnits', 'hanging', 'horizAdvX', 'horizOriginX', 'ideographic',
  'imageRendering', 'in', 'in2', 'intercept', 'k', 'k1', 'k2', 'k3', 'k4', 'kernelMatrix',
  'kernelUnitLength', 'kerning', 'keyPoints', 'keySplines', 'keyTimes', 'lengthAdjust',
  'letterSpacing', 'lightingColor', 'limitingConeAngle', 'local', 'markerEnd', 'markerHeight',
  'markerMid', 'markerStart', 'markerUnits', 'markerWidth', 'mask', 'maskContentUnits',
  'maskUnits', 'mathematical', 'mode', 'numOctaves', 'offset', 'opacity', 'operator', 'order',
  'orient', 'orientation', 'origin', 'overflow', 'overlinePosition', 'overlineThickness',
  'paintOrder', 'panose1', 'pathLength', 'patternContentUnits', 'patternTransform',
  'patternUnits', 'pointerEvents', 'points', 'pointsAtX', 'pointsAtY', 'pointsAtZ',
  'preserveAlpha', 'preserveAspectRatio', 'primitiveUnits', 'r', 'radius', 'refX', 'refY',
  'renderingIntent', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures',
  'restart', 'result', 'rotate', 'rx', 'ry', 'scale', 'seed', 'shapeRendering', 'slope',
  'spacing', 'specularConstant', 'specularExponent', 'speed', 'spreadMethod', 'startOffset',
  'stdDeviation', 'stemh', 'stemv', 'stitchTiles', 'stopColor', 'stopOpacity',
  'strikethroughPosition', 'strikethroughThickness', 'string', 'stroke', 'strokeDasharray',
  'strokeDashoffset', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity',
  'strokeWidth', 'surfaceScale', 'systemLanguage', 'tableValues', 'targetX', 'targetY',
  'textAnchor', 'textDecoration', 'textLength', 'textRendering', 'to', 'transform', 'u1',
  'u2', 'underlinePosition', 'underlineThickness', 'unicode', 'unicodeBidi', 'unicodeRange',
  'unitsPerEm', 'vAlphabetic', 'vHanging', 'vIdeographic', 'vMathematical', 'values',
  'vectorEffect', 'version', 'vertAdvY', 'vertOriginX', 'vertOriginY', 'viewBox',
  'viewTarget', 'visibility', 'widths', 'wordSpacing', 'writingMode', 'x', 'x1', 'x2',
  'xChannelSelector', 'xHeight', 'xlinkActuate', 'xlinkArcrole', 'xlinkHref', 'xlinkRole',
  'xlinkShow', 'xlinkTitle', 'xlinkType', 'xmlns', 'xmlnsXlink', 'xmlBase', 'xmlLang',
  'xmlSpace', 'y', 'y1', 'y2', 'yChannelSelector', 'z', 'zoomAndPan',
];

const camelCaseMap = HTML_ATTRIBUTES
  .concat(NON_STANDARD_ATTRIBUTES)
  .concat(SVG_ATTRIBUTES)
  .reduce(function (soFar, attr) {
    const lower = attr.toLowerCase();
    if (lower !== attr) {
      soFar[lower] = attr;
    }
    return soFar;
  }, {});

module.exports = camelCaseMap;


/***/ }),

/***/ "./node_modules/html-to-react/lib/is-valid-node-definitions.js":
/*!*********************************************************************!*\
  !*** ./node_modules/html-to-react/lib/is-valid-node-definitions.js ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";

function alwaysValid() {
  return true;
}

module.exports = {
  alwaysValid: alwaysValid,
};


/***/ }),

/***/ "./node_modules/html-to-react/lib/parser.js":
/*!**************************************************!*\
  !*** ./node_modules/html-to-react/lib/parser.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const forEach = __webpack_require__(/*! ramda/src/forEach */ "./node_modules/ramda/src/forEach.js");
const find = __webpack_require__(/*! ramda/src/find */ "./node_modules/ramda/src/find.js");
const reject = __webpack_require__(/*! ramda/src/reject */ "./node_modules/ramda/src/reject.js");
const addIndex = __webpack_require__(/*! ramda/src/addIndex */ "./node_modules/ramda/src/addIndex.js");
const map = __webpack_require__(/*! ramda/src/map */ "./node_modules/ramda/src/map.js");
const HtmlParser = (__webpack_require__(/*! htmlparser2 */ "./node_modules/html-to-react/node_modules/htmlparser2/lib/index.js").Parser);
const DomHandler = (__webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js").DomHandler);
const ProcessingInstructions = __webpack_require__(/*! ./processing-instructions */ "./node_modules/html-to-react/lib/processing-instructions.js");
const IsValidNodeDefinitions = __webpack_require__(/*! ./is-valid-node-definitions */ "./node_modules/html-to-react/lib/is-valid-node-definitions.js");
const utils = __webpack_require__(/*! ./utils */ "./node_modules/html-to-react/lib/utils.js");

function Html2ReactParser(options) {
  function parseHtmlToTree(html) {
    options = options || {};
    options.decodeEntities = true;
    const handler = new DomHandler();
    const parser = new HtmlParser(handler, options);
    parser.parseComplete(html);
    return handler.dom.filter(function (element) {
      return element.type !== 'directive';
    });
  };

  function traverseDom(node, isValidNode, processingInstructions, preprocessingInstructions,
    index) {
    if (isValidNode(node)) {
      forEach(function (preprocessingInstruction) {
        if (preprocessingInstruction.shouldPreprocessNode(node)) {
          preprocessingInstruction.preprocessNode(node, index);
        }
      }, preprocessingInstructions || []);

      const processingInstruction = find(function (processingInstruction) {
        return processingInstruction.shouldProcessNode(node);
      }, processingInstructions || []);
      if (processingInstruction != null) {
        const children = reject(function (x) {return x == null || x === false;},
          addIndex(map)(function (child, i) {
            return traverseDom(child, isValidNode, processingInstructions,
              preprocessingInstructions, i);
          }, node.children || []));

        if (processingInstruction.replaceChildren) {
          return utils.createElement(node, index, node.data, [
            processingInstruction.processNode(node, children, index),
          ]);
        } else {
          return processingInstruction.processNode(node, children, index);
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  function parseWithInstructions(html, isValidNode, processingInstructions,
      preprocessingInstructions) {
    const domTree = parseHtmlToTree(html);
    const list = domTree.map(function (domTreeItem, index) {
      return traverseDom(domTreeItem, isValidNode, processingInstructions,
        preprocessingInstructions, index);
    });
    return list.length <= 1 ? list[0] : list;
  };

  function parse(html) {
    const processingInstructions = new ProcessingInstructions();
    return parseWithInstructions(html,
      IsValidNodeDefinitions.alwaysValid,
      processingInstructions.defaultProcessingInstructions);
  };

  return {
    parse: parse,
    parseWithInstructions: parseWithInstructions,
  };
};

module.exports = Html2ReactParser;


/***/ }),

/***/ "./node_modules/html-to-react/lib/process-node-definitions.js":
/*!********************************************************************!*\
  !*** ./node_modules/html-to-react/lib/process-node-definitions.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const utils = __webpack_require__(/*! ./utils */ "./node_modules/html-to-react/lib/utils.js");

// eslint-disable-next-line max-len
// https://github.com/facebook/react/blob/15.0-stable/src/renderers/dom/shared/ReactDOMComponent.js#L457
const voidElementTags = [
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param',
  'source', 'track', 'wbr', 'menuitem', 'textarea',
];

function ProcessNodeDefinitions() {
  function processDefaultNode(node, children, index) {
    if (node.type === 'text') {
      return node.data;
    } else if (node.type === 'comment') {
      // FIXME: The following doesn't work as the generated HTML results in
      // "&lt;!--  This is a comment  --&gt;"
      // return '<!-- ' + node.data + ' -->';
      return false;
    }

    if (voidElementTags.indexOf(node.name) > -1) {
      return utils.createElement(node, index);
    } else {
      return utils.createElement(node, index, node.data, children);
    }
  }

  return {
    processDefaultNode: processDefaultNode,
  };
}

module.exports = ProcessNodeDefinitions;


/***/ }),

/***/ "./node_modules/html-to-react/lib/processing-instructions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/html-to-react/lib/processing-instructions.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const ShouldProcessNodeDefinitions = __webpack_require__(/*! ./should-process-node-definitions */ "./node_modules/html-to-react/lib/should-process-node-definitions.js");
const ProcessNodeDefinitions = __webpack_require__(/*! ./process-node-definitions */ "./node_modules/html-to-react/lib/process-node-definitions.js");

function ProcessingInstructions() {
  const processNodeDefinitions = new ProcessNodeDefinitions();

  return {
    defaultProcessingInstructions: [{
      shouldProcessNode: ShouldProcessNodeDefinitions.shouldProcessEveryNode,
      processNode: processNodeDefinitions.processDefaultNode,
    },],
  };
};

module.exports = ProcessingInstructions;


/***/ }),

/***/ "./node_modules/html-to-react/lib/should-process-node-definitions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/html-to-react/lib/should-process-node-definitions.js ***!
  \***************************************************************************/
/***/ (function(module) {

"use strict";

function shouldProcessEveryNode(node) {
  return true;
}

module.exports = {
  shouldProcessEveryNode: shouldProcessEveryNode,
};


/***/ }),

/***/ "./node_modules/html-to-react/lib/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/html-to-react/lib/utils.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const camelCase = __webpack_require__(/*! lodash.camelcase */ "./node_modules/lodash.camelcase/index.js");
const toPairs = __webpack_require__(/*! ramda/src/toPairs */ "./node_modules/ramda/src/toPairs.js");
const reduce = __webpack_require__(/*! ramda/src/reduce */ "./node_modules/ramda/src/reduce.js");
const startsWith = __webpack_require__(/*! ramda/src/startsWith */ "./node_modules/ramda/src/startsWith.js");
const React = __webpack_require__(/*! react */ "react");
const includes = __webpack_require__(/*! ramda/src/includes */ "./node_modules/ramda/src/includes.js");
const camelCaseAttrMap = __webpack_require__(/*! ./camel-case-attribute-names */ "./node_modules/html-to-react/lib/camel-case-attribute-names.js");

function createStyleJsonFromString(styleString) {
  styleString = styleString || '';
  const styles = styleString.split(/;(?!base64)/);
  let singleStyle, key, value, jsonStyles = {};
  for (let i = 0; i < styles.length; ++i) {
    singleStyle = styles[i].split(':');
    if (singleStyle.length > 2) {
      singleStyle[1] = singleStyle.slice(1).join(':');
    }

    key = singleStyle[0];
    value = singleStyle[1];
    if (typeof value === 'string'){
      value = value.trim();
    }

    if (key != null && value != null && key.length > 0 && value.length > 0) {
      jsonStyles[camelCase(key)] = value;
    }
  }
  return jsonStyles;
}

// Boolean HTML attributes, copied from https://meiert.com/en/blog/boolean-attributes-of-html/,
// on the form React expects.
const booleanAttrs = [
  'allowFullScreen',
  'allowpaymentrequest',
  'async',
  'autoFocus',
  'autoPlay',
  'checked',
  'controls',
  'default',
  'disabled',
  'formNoValidate',
  'hidden',
  'ismap',
  'itemScope',
  'loop',
  'multiple',
  'muted',
  'nomodule',
  'noValidate',
  'open',
  'playsinline',
  'readOnly',
  'required',
  'reversed',
  'selected',
  'truespeed',
];

function createElement(node, index, data, children) {
  let elementProps = {
    key: index,
  };
  if (node.attribs) {
    elementProps = reduce(function(result, keyAndValue) {
      let key = keyAndValue[0];
      let value = keyAndValue[1];
      key = camelCaseAttrMap[key.replace(/[-:]/, '')] || key;
      if (key === 'style') {
        value = createStyleJsonFromString(value);
      } else if (key === 'class') {
        key = 'className';
      } else if (key === 'for') {
        key = 'htmlFor';
      } else if (startsWith('on', key)) {
        value = Function(value);
      }

      if (includes(key, booleanAttrs) && (value || '') === '') {
        value = key;
      }

      result[key] = value;
      return result;
    }, elementProps, toPairs(node.attribs));
  }

  children = children || [];
  const allChildren = data != null ? [data,].concat(children) : children;
  return React.createElement.apply(
    null, [node.name, elementProps,].concat(allChildren)
  );
}

module.exports = {
  createElement,
};


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/dom-serializer/lib/foreignNames.js":
/*!************************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/dom-serializer/lib/foreignNames.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.attributeNames = exports.elementNames = void 0;
exports.elementNames = new Map([
    ["altglyph", "altGlyph"],
    ["altglyphdef", "altGlyphDef"],
    ["altglyphitem", "altGlyphItem"],
    ["animatecolor", "animateColor"],
    ["animatemotion", "animateMotion"],
    ["animatetransform", "animateTransform"],
    ["clippath", "clipPath"],
    ["feblend", "feBlend"],
    ["fecolormatrix", "feColorMatrix"],
    ["fecomponenttransfer", "feComponentTransfer"],
    ["fecomposite", "feComposite"],
    ["feconvolvematrix", "feConvolveMatrix"],
    ["fediffuselighting", "feDiffuseLighting"],
    ["fedisplacementmap", "feDisplacementMap"],
    ["fedistantlight", "feDistantLight"],
    ["fedropshadow", "feDropShadow"],
    ["feflood", "feFlood"],
    ["fefunca", "feFuncA"],
    ["fefuncb", "feFuncB"],
    ["fefuncg", "feFuncG"],
    ["fefuncr", "feFuncR"],
    ["fegaussianblur", "feGaussianBlur"],
    ["feimage", "feImage"],
    ["femerge", "feMerge"],
    ["femergenode", "feMergeNode"],
    ["femorphology", "feMorphology"],
    ["feoffset", "feOffset"],
    ["fepointlight", "fePointLight"],
    ["fespecularlighting", "feSpecularLighting"],
    ["fespotlight", "feSpotLight"],
    ["fetile", "feTile"],
    ["feturbulence", "feTurbulence"],
    ["foreignobject", "foreignObject"],
    ["glyphref", "glyphRef"],
    ["lineargradient", "linearGradient"],
    ["radialgradient", "radialGradient"],
    ["textpath", "textPath"],
]);
exports.attributeNames = new Map([
    ["definitionurl", "definitionURL"],
    ["attributename", "attributeName"],
    ["attributetype", "attributeType"],
    ["basefrequency", "baseFrequency"],
    ["baseprofile", "baseProfile"],
    ["calcmode", "calcMode"],
    ["clippathunits", "clipPathUnits"],
    ["diffuseconstant", "diffuseConstant"],
    ["edgemode", "edgeMode"],
    ["filterunits", "filterUnits"],
    ["glyphref", "glyphRef"],
    ["gradienttransform", "gradientTransform"],
    ["gradientunits", "gradientUnits"],
    ["kernelmatrix", "kernelMatrix"],
    ["kernelunitlength", "kernelUnitLength"],
    ["keypoints", "keyPoints"],
    ["keysplines", "keySplines"],
    ["keytimes", "keyTimes"],
    ["lengthadjust", "lengthAdjust"],
    ["limitingconeangle", "limitingConeAngle"],
    ["markerheight", "markerHeight"],
    ["markerunits", "markerUnits"],
    ["markerwidth", "markerWidth"],
    ["maskcontentunits", "maskContentUnits"],
    ["maskunits", "maskUnits"],
    ["numoctaves", "numOctaves"],
    ["pathlength", "pathLength"],
    ["patterncontentunits", "patternContentUnits"],
    ["patterntransform", "patternTransform"],
    ["patternunits", "patternUnits"],
    ["pointsatx", "pointsAtX"],
    ["pointsaty", "pointsAtY"],
    ["pointsatz", "pointsAtZ"],
    ["preservealpha", "preserveAlpha"],
    ["preserveaspectratio", "preserveAspectRatio"],
    ["primitiveunits", "primitiveUnits"],
    ["refx", "refX"],
    ["refy", "refY"],
    ["repeatcount", "repeatCount"],
    ["repeatdur", "repeatDur"],
    ["requiredextensions", "requiredExtensions"],
    ["requiredfeatures", "requiredFeatures"],
    ["specularconstant", "specularConstant"],
    ["specularexponent", "specularExponent"],
    ["spreadmethod", "spreadMethod"],
    ["startoffset", "startOffset"],
    ["stddeviation", "stdDeviation"],
    ["stitchtiles", "stitchTiles"],
    ["surfacescale", "surfaceScale"],
    ["systemlanguage", "systemLanguage"],
    ["tablevalues", "tableValues"],
    ["targetx", "targetX"],
    ["targety", "targetY"],
    ["textlength", "textLength"],
    ["viewbox", "viewBox"],
    ["viewtarget", "viewTarget"],
    ["xchannelselector", "xChannelSelector"],
    ["ychannelselector", "yChannelSelector"],
    ["zoomandpan", "zoomAndPan"],
]);


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/dom-serializer/lib/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/dom-serializer/lib/index.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/*
 * Module dependencies
 */
var ElementType = __importStar(__webpack_require__(/*! domelementtype */ "./node_modules/html-to-react/node_modules/domelementtype/lib/index.js"));
var entities_1 = __webpack_require__(/*! entities */ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/index.js");
/**
 * Mixed-case SVG and MathML tags & attributes
 * recognized by the HTML parser.
 *
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */
var foreignNames_1 = __webpack_require__(/*! ./foreignNames */ "./node_modules/html-to-react/node_modules/dom-serializer/lib/foreignNames.js");
var unencodedElements = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript",
]);
/**
 * Format attributes
 */
function formatAttributes(attributes, opts) {
    if (!attributes)
        return;
    return Object.keys(attributes)
        .map(function (key) {
        var _a, _b;
        var value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") {
            /* Fix up mixed-case attribute names */
            key = (_b = foreignNames_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
            return key;
        }
        return key + "=\"" + (opts.decodeEntities !== false
            ? entities_1.encodeXML(value)
            : value.replace(/"/g, "&quot;")) + "\"";
    })
        .join(" ");
}
/**
 * Self-enclosing tags
 */
var singleTag = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);
/**
 * Renders a DOM node or an array of DOM nodes to a string.
 *
 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
 *
 * @param node Node to be rendered.
 * @param options Changes serialization behavior
 */
function render(node, options) {
    if (options === void 0) { options = {}; }
    var nodes = "length" in node ? node : [node];
    var output = "";
    for (var i = 0; i < nodes.length; i++) {
        output += renderNode(nodes[i], options);
    }
    return output;
}
exports["default"] = render;
function renderNode(node, options) {
    switch (node.type) {
        case ElementType.Root:
            return render(node.children, options);
        case ElementType.Directive:
        case ElementType.Doctype:
            return renderDirective(node);
        case ElementType.Comment:
            return renderComment(node);
        case ElementType.CDATA:
            return renderCdata(node);
        case ElementType.Script:
        case ElementType.Style:
        case ElementType.Tag:
            return renderTag(node, options);
        case ElementType.Text:
            return renderText(node, options);
    }
}
var foreignModeIntegrationPoints = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title",
]);
var foreignElements = new Set(["svg", "math"]);
function renderTag(elem, opts) {
    var _a;
    // Handle SVG / MathML in HTML
    if (opts.xmlMode === "foreign") {
        /* Fix up mixed-case element names */
        elem.name = (_a = foreignNames_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        /* Exit foreign mode at integration points */
        if (elem.parent &&
            foreignModeIntegrationPoints.has(elem.parent.name)) {
            opts = __assign(__assign({}, opts), { xmlMode: false });
        }
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
    }
    var tag = "<" + elem.name;
    var attribs = formatAttributes(elem.attribs, opts);
    if (attribs) {
        tag += " " + attribs;
    }
    if (elem.children.length === 0 &&
        (opts.xmlMode
            ? // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
                opts.selfClosingTags !== false
            : // User explicitly asked for self-closing tags, even in HTML mode
                opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode)
            tag += " ";
        tag += "/>";
    }
    else {
        tag += ">";
        if (elem.children.length > 0) {
            tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
            tag += "</" + elem.name + ">";
        }
    }
    return tag;
}
function renderDirective(elem) {
    return "<" + elem.data + ">";
}
function renderText(elem, opts) {
    var data = elem.data || "";
    // If entities weren't decoded, no need to encode them back
    if (opts.decodeEntities !== false &&
        !(!opts.xmlMode &&
            elem.parent &&
            unencodedElements.has(elem.parent.name))) {
        data = entities_1.encodeXML(data);
    }
    return data;
}
function renderCdata(elem) {
    return "<![CDATA[" + elem.children[0].data + "]]>";
}
function renderComment(elem) {
    return "<!--" + elem.data + "-->";
}


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/decode.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/decode.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
var entities_json_1 = __importDefault(__webpack_require__(/*! ./maps/entities.json */ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/maps/entities.json"));
var legacy_json_1 = __importDefault(__webpack_require__(/*! ./maps/legacy.json */ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/maps/legacy.json"));
var xml_json_1 = __importDefault(__webpack_require__(/*! ./maps/xml.json */ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/maps/xml.json"));
var decode_codepoint_1 = __importDefault(__webpack_require__(/*! ./decode_codepoint */ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/decode_codepoint.js"));
var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
exports.decodeXML = getStrictDecoder(xml_json_1.default);
exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
function getStrictDecoder(map) {
    var replace = getReplacer(map);
    return function (str) { return String(str).replace(strictEntityRe, replace); };
}
var sorter = function (a, b) { return (a < b ? 1 : -1); };
exports.decodeHTML = (function () {
    var legacy = Object.keys(legacy_json_1.default).sort(sorter);
    var keys = Object.keys(entities_json_1.default).sort(sorter);
    for (var i = 0, j = 0; i < keys.length; i++) {
        if (legacy[j] === keys[i]) {
            keys[i] += ";?";
            j++;
        }
        else {
            keys[i] += ";";
        }
    }
    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
    var replace = getReplacer(entities_json_1.default);
    function replacer(str) {
        if (str.substr(-1) !== ";")
            str += ";";
        return replace(str);
    }
    // TODO consider creating a merged map
    return function (str) { return String(str).replace(re, replacer); };
})();
function getReplacer(map) {
    return function replace(str) {
        if (str.charAt(1) === "#") {
            var secondChar = str.charAt(2);
            if (secondChar === "X" || secondChar === "x") {
                return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            }
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        return map[str.slice(1, -1)] || str;
    };
}


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/decode_codepoint.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/decode_codepoint.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var decode_json_1 = __importDefault(__webpack_require__(/*! ./maps/decode.json */ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/maps/decode.json"));
// Adapted from https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
var fromCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.fromCodePoint ||
    function (codePoint) {
        var output = "";
        if (codePoint > 0xffff) {
            codePoint -= 0x10000;
            output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
            codePoint = 0xdc00 | (codePoint & 0x3ff);
        }
        output += String.fromCharCode(codePoint);
        return output;
    };
function decodeCodePoint(codePoint) {
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }
    if (codePoint in decode_json_1.default) {
        codePoint = decode_json_1.default[codePoint];
    }
    return fromCodePoint(codePoint);
}
exports["default"] = decodeCodePoint;


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/encode.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/encode.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = void 0;
var xml_json_1 = __importDefault(__webpack_require__(/*! ./maps/xml.json */ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/maps/xml.json"));
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = __importDefault(__webpack_require__(/*! ./maps/entities.json */ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/maps/entities.json"));
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
/**
 * Encodes all entities and non-ASCII characters in the input.
 *
 * This includes characters that are valid ASCII characters in HTML documents.
 * For example `#` will be encoded as `&num;`. To get a more compact output,
 * consider using the `encodeNonAsciiHTML` function.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(obj) {
    return Object.keys(obj)
        .sort()
        .reduce(function (inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
    }, {});
}
function getInverseReplacer(inverse) {
    var single = [];
    var multiple = [];
    for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
        var k = _a[_i];
        if (k.length === 1) {
            // Add value to single array
            single.push("\\" + k);
        }
        else {
            // Add value to multiple array
            multiple.push(k);
        }
    }
    // Add ranges to single characters.
    single.sort();
    for (var start = 0; start < single.length - 1; start++) {
        // Find the end of a run of characters
        var end = start;
        while (end < single.length - 1 &&
            single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
            end += 1;
        }
        var count = 1 + end - start;
        // We want to replace at least three characters
        if (count < 3)
            continue;
        single.splice(start, count, single[start] + "-" + single[end]);
    }
    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
}
// /[^\0-\x7F]/gu
var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var getCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null
    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        function (str) { return str.codePointAt(0); }
    : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        function (c) {
            return (c.charCodeAt(0) - 0xd800) * 0x400 +
                c.charCodeAt(1) -
                0xdc00 +
                0x10000;
        };
function singleCharReplacer(c) {
    return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0))
        .toString(16)
        .toUpperCase() + ";";
}
function getInverse(inverse, re) {
    return function (data) {
        return data
            .replace(re, function (name) { return inverse[name]; })
            .replace(reNonASCII, singleCharReplacer);
    };
}
var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */
function escape(data) {
    return data.replace(reEscapeChars, singleCharReplacer);
}
exports.escape = escape;
/**
 * Encodes all characters not valid in XML documents using numeric hexadecimal
 * reference (eg. `&#xfc;`).
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */
function escapeUTF8(data) {
    return data.replace(xmlReplacer, singleCharReplacer);
}
exports.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(obj) {
    return function (data) {
        return data.replace(reEscapeChars, function (c) { return obj[c] || singleCharReplacer(c); });
    };
}


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/index.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
var decode_1 = __webpack_require__(/*! ./decode */ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/decode.js");
var encode_1 = __webpack_require__(/*! ./encode */ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/encode.js");
/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeXML` or `decodeHTML` directly.
 */
function decode(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
}
exports.decode = decode;
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeHTMLStrict` or `decodeXML` directly.
 */
function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
}
exports.decodeStrict = decodeStrict;
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param level Optional level to encode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `encodeHTML`, `encodeXML` or `encodeNonAsciiHTML` directly.
 */
function encode(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
}
exports.encode = encode;
var encode_2 = __webpack_require__(/*! ./encode */ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/encode.js");
Object.defineProperty(exports, "encodeXML", ({ enumerable: true, get: function () { return encode_2.encodeXML; } }));
Object.defineProperty(exports, "encodeHTML", ({ enumerable: true, get: function () { return encode_2.encodeHTML; } }));
Object.defineProperty(exports, "encodeNonAsciiHTML", ({ enumerable: true, get: function () { return encode_2.encodeNonAsciiHTML; } }));
Object.defineProperty(exports, "escape", ({ enumerable: true, get: function () { return encode_2.escape; } }));
Object.defineProperty(exports, "escapeUTF8", ({ enumerable: true, get: function () { return encode_2.escapeUTF8; } }));
// Legacy aliases (deprecated)
Object.defineProperty(exports, "encodeHTML4", ({ enumerable: true, get: function () { return encode_2.encodeHTML; } }));
Object.defineProperty(exports, "encodeHTML5", ({ enumerable: true, get: function () { return encode_2.encodeHTML; } }));
var decode_2 = __webpack_require__(/*! ./decode */ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/decode.js");
Object.defineProperty(exports, "decodeXML", ({ enumerable: true, get: function () { return decode_2.decodeXML; } }));
Object.defineProperty(exports, "decodeHTML", ({ enumerable: true, get: function () { return decode_2.decodeHTML; } }));
Object.defineProperty(exports, "decodeHTMLStrict", ({ enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } }));
// Legacy aliases (deprecated)
Object.defineProperty(exports, "decodeHTML4", ({ enumerable: true, get: function () { return decode_2.decodeHTML; } }));
Object.defineProperty(exports, "decodeHTML5", ({ enumerable: true, get: function () { return decode_2.decodeHTML; } }));
Object.defineProperty(exports, "decodeHTML4Strict", ({ enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } }));
Object.defineProperty(exports, "decodeHTML5Strict", ({ enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } }));
Object.defineProperty(exports, "decodeXMLStrict", ({ enumerable: true, get: function () { return decode_2.decodeXML; } }));


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/domelementtype/lib/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/domelementtype/lib/index.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
/** Types of elements found in htmlparser2's DOM */
var ElementType;
(function (ElementType) {
    /** Type for the root element of a document */
    ElementType["Root"] = "root";
    /** Type for Text */
    ElementType["Text"] = "text";
    /** Type for <? ... ?> */
    ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */
    ElementType["Comment"] = "comment";
    /** Type for <script> tags */
    ElementType["Script"] = "script";
    /** Type for <style> tags */
    ElementType["Style"] = "style";
    /** Type for Any tag */
    ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */
    ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */
    ElementType["Doctype"] = "doctype";
})(ElementType = exports.ElementType || (exports.ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag(elem) {
    return (elem.type === ElementType.Tag ||
        elem.type === ElementType.Script ||
        elem.type === ElementType.Style);
}
exports.isTag = isTag;
// Exports for backwards compatibility
/** Type for the root element of a document */
exports.Root = ElementType.Root;
/** Type for Text */
exports.Text = ElementType.Text;
/** Type for <? ... ?> */
exports.Directive = ElementType.Directive;
/** Type for <!-- ... --> */
exports.Comment = ElementType.Comment;
/** Type for <script> tags */
exports.Script = ElementType.Script;
/** Type for <style> tags */
exports.Style = ElementType.Style;
/** Type for Any tag */
exports.Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
exports.CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */
exports.Doctype = ElementType.Doctype;


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/domutils/lib/feeds.js":
/*!***********************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/domutils/lib/feeds.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFeed = void 0;
var stringify_1 = __webpack_require__(/*! ./stringify */ "./node_modules/html-to-react/node_modules/domutils/lib/stringify.js");
var legacy_1 = __webpack_require__(/*! ./legacy */ "./node_modules/html-to-react/node_modules/domutils/lib/legacy.js");
/**
 * Get the feed object from the root of a DOM tree.
 *
 * @param doc - The DOM to to extract the feed from.
 * @returns The feed.
 */
function getFeed(doc) {
    var feedRoot = getOneElement(isValidFeed, doc);
    return !feedRoot
        ? null
        : feedRoot.name === "feed"
            ? getAtomFeed(feedRoot)
            : getRssFeed(feedRoot);
}
exports.getFeed = getFeed;
/**
 * Parse an Atom feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */
function getAtomFeed(feedRoot) {
    var _a;
    var childs = feedRoot.children;
    var feed = {
        type: "atom",
        items: (0, legacy_1.getElementsByTagName)("entry", childs).map(function (item) {
            var _a;
            var children = item.children;
            var entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            var href = (_a = getOneElement("link", children)) === null || _a === void 0 ? void 0 : _a.attribs.href;
            if (href) {
                entry.link = href;
            }
            var description = fetch("summary", children) || fetch("content", children);
            if (description) {
                entry.description = description;
            }
            var pubDate = fetch("updated", children);
            if (pubDate) {
                entry.pubDate = new Date(pubDate);
            }
            return entry;
        }),
    };
    addConditionally(feed, "id", "id", childs);
    addConditionally(feed, "title", "title", childs);
    var href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs.href;
    if (href) {
        feed.link = href;
    }
    addConditionally(feed, "description", "subtitle", childs);
    var updated = fetch("updated", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "email", childs, true);
    return feed;
}
/**
 * Parse a RSS feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */
function getRssFeed(feedRoot) {
    var _a, _b;
    var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
    var feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: (0, legacy_1.getElementsByTagName)("item", feedRoot.children).map(function (item) {
            var children = item.children;
            var entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            var pubDate = fetch("pubDate", children);
            if (pubDate)
                entry.pubDate = new Date(pubDate);
            return entry;
        }),
    };
    addConditionally(feed, "title", "title", childs);
    addConditionally(feed, "link", "link", childs);
    addConditionally(feed, "description", "description", childs);
    var updated = fetch("lastBuildDate", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "managingEditor", childs, true);
    return feed;
}
var MEDIA_KEYS_STRING = ["url", "type", "lang"];
var MEDIA_KEYS_INT = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width",
];
/**
 * Get all media elements of a feed item.
 *
 * @param where Nodes to search in.
 * @returns Media elements.
 */
function getMediaElements(where) {
    return (0, legacy_1.getElementsByTagName)("media:content", where).map(function (elem) {
        var attribs = elem.attribs;
        var media = {
            medium: attribs.medium,
            isDefault: !!attribs.isDefault,
        };
        for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
            var attrib = MEDIA_KEYS_STRING_1[_i];
            if (attribs[attrib]) {
                media[attrib] = attribs[attrib];
            }
        }
        for (var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++) {
            var attrib = MEDIA_KEYS_INT_1[_a];
            if (attribs[attrib]) {
                media[attrib] = parseInt(attribs[attrib], 10);
            }
        }
        if (attribs.expression) {
            media.expression =
                attribs.expression;
        }
        return media;
    });
}
/**
 * Get one element by tag name.
 *
 * @param tagName Tag name to look for
 * @param node Node to search in
 * @returns The element or null
 */
function getOneElement(tagName, node) {
    return (0, legacy_1.getElementsByTagName)(tagName, node, true, 1)[0];
}
/**
 * Get the text content of an element with a certain tag name.
 *
 * @param tagName Tag name to look for.
 * @param where  Node to search in.
 * @param recurse Whether to recurse into child nodes.
 * @returns The text content of the element.
 */
function fetch(tagName, where, recurse) {
    if (recurse === void 0) { recurse = false; }
    return (0, stringify_1.textContent)((0, legacy_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
}
/**
 * Adds a property to an object if it has a value.
 *
 * @param obj Object to be extended
 * @param prop Property name
 * @param tagName Tag name that contains the conditionally added property
 * @param where Element to search for the property
 * @param recurse Whether to recurse into child nodes.
 */
function addConditionally(obj, prop, tagName, where, recurse) {
    if (recurse === void 0) { recurse = false; }
    var val = fetch(tagName, where, recurse);
    if (val)
        obj[prop] = val;
}
/**
 * Checks if an element is a feed root node.
 *
 * @param value The name of the element to check.
 * @returns Whether an element is a feed root node.
 */
function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
}


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/domutils/lib/helpers.js":
/*!*************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/domutils/lib/helpers.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uniqueSort = exports.compareDocumentPosition = exports.removeSubsets = void 0;
var domhandler_1 = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
/**
 * Given an array of nodes, remove any member that is contained by another.
 *
 * @param nodes Nodes to filter.
 * @returns Remaining nodes that aren't subtrees of each other.
 */
function removeSubsets(nodes) {
    var idx = nodes.length;
    /*
     * Check if each node (or one of its ancestors) is already contained in the
     * array.
     */
    while (--idx >= 0) {
        var node = nodes[idx];
        /*
         * Remove the node if it is not unique.
         * We are going through the array from the end, so we only
         * have to check nodes that preceed the node under consideration in the array.
         */
        if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
        }
        for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
            if (nodes.includes(ancestor)) {
                nodes.splice(idx, 1);
                break;
            }
        }
    }
    return nodes;
}
exports.removeSubsets = removeSubsets;
/**
 * Compare the position of one node against another node in any other document.
 * The return value is a bitmask with the following values:
 *
 * Document order:
 * > There is an ordering, document order, defined on all the nodes in the
 * > document corresponding to the order in which the first character of the
 * > XML representation of each node occurs in the XML representation of the
 * > document after expansion of general entities. Thus, the document element
 * > node will be the first node. Element nodes occur before their children.
 * > Thus, document order orders element nodes in order of the occurrence of
 * > their start-tag in the XML (after expansion of entities). The attribute
 * > nodes of an element occur after the element and before its children. The
 * > relative order of attribute nodes is implementation-dependent./
 *
 * Source:
 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
 *
 * @param nodeA The first node to use in the comparison
 * @param nodeB The second node to use in the comparison
 * @returns A bitmask describing the input nodes' relative position.
 *
 * See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
 * a description of these values.
 */
function compareDocumentPosition(nodeA, nodeB) {
    var aParents = [];
    var bParents = [];
    if (nodeA === nodeB) {
        return 0;
    }
    var current = (0, domhandler_1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
    while (current) {
        aParents.unshift(current);
        current = current.parent;
    }
    current = (0, domhandler_1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
    while (current) {
        bParents.unshift(current);
        current = current.parent;
    }
    var maxIdx = Math.min(aParents.length, bParents.length);
    var idx = 0;
    while (idx < maxIdx && aParents[idx] === bParents[idx]) {
        idx++;
    }
    if (idx === 0) {
        return 1 /* DISCONNECTED */;
    }
    var sharedParent = aParents[idx - 1];
    var siblings = sharedParent.children;
    var aSibling = aParents[idx];
    var bSibling = bParents[idx];
    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
            return 4 /* FOLLOWING */ | 16 /* CONTAINED_BY */;
        }
        return 4 /* FOLLOWING */;
    }
    if (sharedParent === nodeA) {
        return 2 /* PRECEDING */ | 8 /* CONTAINS */;
    }
    return 2 /* PRECEDING */;
}
exports.compareDocumentPosition = compareDocumentPosition;
/**
 * Sort an array of nodes based on their relative position in the document and
 * remove any duplicate nodes. If the array contains nodes that do not belong
 * to the same document, sort order is unspecified.
 *
 * @param nodes Array of DOM nodes.
 * @returns Collection of unique nodes, sorted in document order.
 */
function uniqueSort(nodes) {
    nodes = nodes.filter(function (node, i, arr) { return !arr.includes(node, i + 1); });
    nodes.sort(function (a, b) {
        var relative = compareDocumentPosition(a, b);
        if (relative & 2 /* PRECEDING */) {
            return -1;
        }
        else if (relative & 4 /* FOLLOWING */) {
            return 1;
        }
        return 0;
    });
    return nodes;
}
exports.uniqueSort = uniqueSort;


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/domutils/lib/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/domutils/lib/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
__exportStar(__webpack_require__(/*! ./stringify */ "./node_modules/html-to-react/node_modules/domutils/lib/stringify.js"), exports);
__exportStar(__webpack_require__(/*! ./traversal */ "./node_modules/html-to-react/node_modules/domutils/lib/traversal.js"), exports);
__exportStar(__webpack_require__(/*! ./manipulation */ "./node_modules/html-to-react/node_modules/domutils/lib/manipulation.js"), exports);
__exportStar(__webpack_require__(/*! ./querying */ "./node_modules/html-to-react/node_modules/domutils/lib/querying.js"), exports);
__exportStar(__webpack_require__(/*! ./legacy */ "./node_modules/html-to-react/node_modules/domutils/lib/legacy.js"), exports);
__exportStar(__webpack_require__(/*! ./helpers */ "./node_modules/html-to-react/node_modules/domutils/lib/helpers.js"), exports);
__exportStar(__webpack_require__(/*! ./feeds */ "./node_modules/html-to-react/node_modules/domutils/lib/feeds.js"), exports);
/** @deprecated Use these methods from `domhandler` directly. */
var domhandler_1 = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
Object.defineProperty(exports, "isTag", ({ enumerable: true, get: function () { return domhandler_1.isTag; } }));
Object.defineProperty(exports, "isCDATA", ({ enumerable: true, get: function () { return domhandler_1.isCDATA; } }));
Object.defineProperty(exports, "isText", ({ enumerable: true, get: function () { return domhandler_1.isText; } }));
Object.defineProperty(exports, "isComment", ({ enumerable: true, get: function () { return domhandler_1.isComment; } }));
Object.defineProperty(exports, "isDocument", ({ enumerable: true, get: function () { return domhandler_1.isDocument; } }));
Object.defineProperty(exports, "hasChildren", ({ enumerable: true, get: function () { return domhandler_1.hasChildren; } }));


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/domutils/lib/legacy.js":
/*!************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/domutils/lib/legacy.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getElementsByTagType = exports.getElementsByTagName = exports.getElementById = exports.getElements = exports.testElement = void 0;
var domhandler_1 = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
var querying_1 = __webpack_require__(/*! ./querying */ "./node_modules/html-to-react/node_modules/domutils/lib/querying.js");
var Checks = {
    tag_name: function (name) {
        if (typeof name === "function") {
            return function (elem) { return (0, domhandler_1.isTag)(elem) && name(elem.name); };
        }
        else if (name === "*") {
            return domhandler_1.isTag;
        }
        return function (elem) { return (0, domhandler_1.isTag)(elem) && elem.name === name; };
    },
    tag_type: function (type) {
        if (typeof type === "function") {
            return function (elem) { return type(elem.type); };
        }
        return function (elem) { return elem.type === type; };
    },
    tag_contains: function (data) {
        if (typeof data === "function") {
            return function (elem) { return (0, domhandler_1.isText)(elem) && data(elem.data); };
        }
        return function (elem) { return (0, domhandler_1.isText)(elem) && elem.data === data; };
    },
};
/**
 * @param attrib Attribute to check.
 * @param value Attribute value to look for.
 * @returns A function to check whether the a node has an attribute with a particular value.
 */
function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
        return function (elem) { return (0, domhandler_1.isTag)(elem) && value(elem.attribs[attrib]); };
    }
    return function (elem) { return (0, domhandler_1.isTag)(elem) && elem.attribs[attrib] === value; };
}
/**
 * @param a First function to combine.
 * @param b Second function to combine.
 * @returns A function taking a node and returning `true` if either
 * of the input functions returns `true` for the node.
 */
function combineFuncs(a, b) {
    return function (elem) { return a(elem) || b(elem); };
}
/**
 * @param options An object describing nodes to look for.
 * @returns A function executing all checks in `options` and returning `true`
 * if any of them match a node.
 */
function compileTest(options) {
    var funcs = Object.keys(options).map(function (key) {
        var value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key)
            ? Checks[key](value)
            : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
/**
 * @param options An object describing nodes to look for.
 * @param node The element to test.
 * @returns Whether the element matches the description in `options`.
 */
function testElement(options, node) {
    var test = compileTest(options);
    return test ? test(node) : true;
}
exports.testElement = testElement;
/**
 * @param options An object describing nodes to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes that match `options`.
 */
function getElements(options, nodes, recurse, limit) {
    if (limit === void 0) { limit = Infinity; }
    var test = compileTest(options);
    return test ? (0, querying_1.filter)(test, nodes, recurse, limit) : [];
}
exports.getElements = getElements;
/**
 * @param id The unique ID attribute value to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @returns The node with the supplied ID.
 */
function getElementById(id, nodes, recurse) {
    if (recurse === void 0) { recurse = true; }
    if (!Array.isArray(nodes))
        nodes = [nodes];
    return (0, querying_1.findOne)(getAttribCheck("id", id), nodes, recurse);
}
exports.getElementById = getElementById;
/**
 * @param tagName Tag name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `tagName`.
 */
function getElementsByTagName(tagName, nodes, recurse, limit) {
    if (recurse === void 0) { recurse = true; }
    if (limit === void 0) { limit = Infinity; }
    return (0, querying_1.filter)(Checks.tag_name(tagName), nodes, recurse, limit);
}
exports.getElementsByTagName = getElementsByTagName;
/**
 * @param type Element type to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `type`.
 */
function getElementsByTagType(type, nodes, recurse, limit) {
    if (recurse === void 0) { recurse = true; }
    if (limit === void 0) { limit = Infinity; }
    return (0, querying_1.filter)(Checks.tag_type(type), nodes, recurse, limit);
}
exports.getElementsByTagType = getElementsByTagType;


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/domutils/lib/manipulation.js":
/*!******************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/domutils/lib/manipulation.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prepend = exports.prependChild = exports.append = exports.appendChild = exports.replaceElement = exports.removeElement = void 0;
/**
 * Remove an element from the dom
 *
 * @param elem The element to be removed
 */
function removeElement(elem) {
    if (elem.prev)
        elem.prev.next = elem.next;
    if (elem.next)
        elem.next.prev = elem.prev;
    if (elem.parent) {
        var childs = elem.parent.children;
        childs.splice(childs.lastIndexOf(elem), 1);
    }
}
exports.removeElement = removeElement;
/**
 * Replace an element in the dom
 *
 * @param elem The element to be replaced
 * @param replacement The element to be added
 */
function replaceElement(elem, replacement) {
    var prev = (replacement.prev = elem.prev);
    if (prev) {
        prev.next = replacement;
    }
    var next = (replacement.next = elem.next);
    if (next) {
        next.prev = replacement;
    }
    var parent = (replacement.parent = elem.parent);
    if (parent) {
        var childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
    }
}
exports.replaceElement = replaceElement;
/**
 * Append a child to an element.
 *
 * @param elem The element to append to.
 * @param child The element to be added as a child.
 */
function appendChild(elem, child) {
    removeElement(child);
    child.next = null;
    child.parent = elem;
    if (elem.children.push(child) > 1) {
        var sibling = elem.children[elem.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
    }
    else {
        child.prev = null;
    }
}
exports.appendChild = appendChild;
/**
 * Append an element after another.
 *
 * @param elem The element to append after.
 * @param next The element be added.
 */
function append(elem, next) {
    removeElement(next);
    var parent = elem.parent;
    var currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;
    if (currNext) {
        currNext.prev = next;
        if (parent) {
            var childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
    }
    else if (parent) {
        parent.children.push(next);
    }
}
exports.append = append;
/**
 * Prepend a child to an element.
 *
 * @param elem The element to prepend before.
 * @param child The element to be added as a child.
 */
function prependChild(elem, child) {
    removeElement(child);
    child.parent = elem;
    child.prev = null;
    if (elem.children.unshift(child) !== 1) {
        var sibling = elem.children[1];
        sibling.prev = child;
        child.next = sibling;
    }
    else {
        child.next = null;
    }
}
exports.prependChild = prependChild;
/**
 * Prepend an element before another.
 *
 * @param elem The element to prepend before.
 * @param prev The element be added.
 */
function prepend(elem, prev) {
    removeElement(prev);
    var parent = elem.parent;
    if (parent) {
        var childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
    }
    if (elem.prev) {
        elem.prev.next = prev;
    }
    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
}
exports.prepend = prepend;


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/domutils/lib/querying.js":
/*!**************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/domutils/lib/querying.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findAll = exports.existsOne = exports.findOne = exports.findOneChild = exports.find = exports.filter = void 0;
var domhandler_1 = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
/**
 * Search a node and its children for nodes passing a test function.
 *
 * @param test Function to test nodes on.
 * @param node Node to search. Will be included in the result set if it matches.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */
function filter(test, node, recurse, limit) {
    if (recurse === void 0) { recurse = true; }
    if (limit === void 0) { limit = Infinity; }
    if (!Array.isArray(node))
        node = [node];
    return find(test, node, recurse, limit);
}
exports.filter = filter;
/**
 * Search an array of node and its children for nodes passing a test function.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */
function find(test, nodes, recurse, limit) {
    var result = [];
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var elem = nodes_1[_i];
        if (test(elem)) {
            result.push(elem);
            if (--limit <= 0)
                break;
        }
        if (recurse && (0, domhandler_1.hasChildren)(elem) && elem.children.length > 0) {
            var children = find(test, elem.children, recurse, limit);
            result.push.apply(result, children);
            limit -= children.length;
            if (limit <= 0)
                break;
        }
    }
    return result;
}
exports.find = find;
/**
 * Finds the first element inside of an array that matches a test function.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns The first node in the array that passes `test`.
 */
function findOneChild(test, nodes) {
    return nodes.find(test);
}
exports.findOneChild = findOneChild;
/**
 * Finds one element in a tree that passes a test.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @returns The first child node that passes `test`.
 */
function findOne(test, nodes, recurse) {
    if (recurse === void 0) { recurse = true; }
    var elem = null;
    for (var i = 0; i < nodes.length && !elem; i++) {
        var checked = nodes[i];
        if (!(0, domhandler_1.isTag)(checked)) {
            continue;
        }
        else if (test(checked)) {
            elem = checked;
        }
        else if (recurse && checked.children.length > 0) {
            elem = findOne(test, checked.children);
        }
    }
    return elem;
}
exports.findOne = findOne;
/**
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns Whether a tree of nodes contains at least one node passing a test.
 */
function existsOne(test, nodes) {
    return nodes.some(function (checked) {
        return (0, domhandler_1.isTag)(checked) &&
            (test(checked) ||
                (checked.children.length > 0 &&
                    existsOne(test, checked.children)));
    });
}
exports.existsOne = existsOne;
/**
 * Search and array of nodes and its children for nodes passing a test function.
 *
 * Same as `find`, only with less options, leading to reduced complexity.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns All nodes passing `test`.
 */
function findAll(test, nodes) {
    var _a;
    var result = [];
    var stack = nodes.filter(domhandler_1.isTag);
    var elem;
    while ((elem = stack.shift())) {
        var children = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.filter(domhandler_1.isTag);
        if (children && children.length > 0) {
            stack.unshift.apply(stack, children);
        }
        if (test(elem))
            result.push(elem);
    }
    return result;
}
exports.findAll = findAll;


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/domutils/lib/stringify.js":
/*!***************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/domutils/lib/stringify.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.innerText = exports.textContent = exports.getText = exports.getInnerHTML = exports.getOuterHTML = void 0;
var domhandler_1 = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
var dom_serializer_1 = __importDefault(__webpack_require__(/*! dom-serializer */ "./node_modules/html-to-react/node_modules/dom-serializer/lib/index.js"));
var domelementtype_1 = __webpack_require__(/*! domelementtype */ "./node_modules/html-to-react/node_modules/domelementtype/lib/index.js");
/**
 * @param node Node to get the outer HTML of.
 * @param options Options for serialization.
 * @deprecated Use the `dom-serializer` module directly.
 * @returns `node`'s outer HTML.
 */
function getOuterHTML(node, options) {
    return (0, dom_serializer_1.default)(node, options);
}
exports.getOuterHTML = getOuterHTML;
/**
 * @param node Node to get the inner HTML of.
 * @param options Options for serialization.
 * @deprecated Use the `dom-serializer` module directly.
 * @returns `node`'s inner HTML.
 */
function getInnerHTML(node, options) {
    return (0, domhandler_1.hasChildren)(node)
        ? node.children.map(function (node) { return getOuterHTML(node, options); }).join("")
        : "";
}
exports.getInnerHTML = getInnerHTML;
/**
 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags.
 *
 * @deprecated Use `textContent` instead.
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 */
function getText(node) {
    if (Array.isArray(node))
        return node.map(getText).join("");
    if ((0, domhandler_1.isTag)(node))
        return node.name === "br" ? "\n" : getText(node.children);
    if ((0, domhandler_1.isCDATA)(node))
        return getText(node.children);
    if ((0, domhandler_1.isText)(node))
        return node.data;
    return "";
}
exports.getText = getText;
/**
 * Get a node's text content.
 *
 * @param node Node to get the text content of.
 * @returns `node`'s text content.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
 */
function textContent(node) {
    if (Array.isArray(node))
        return node.map(textContent).join("");
    if ((0, domhandler_1.hasChildren)(node) && !(0, domhandler_1.isComment)(node)) {
        return textContent(node.children);
    }
    if ((0, domhandler_1.isText)(node))
        return node.data;
    return "";
}
exports.textContent = textContent;
/**
 * Get a node's inner text.
 *
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
 */
function innerText(node) {
    if (Array.isArray(node))
        return node.map(innerText).join("");
    if ((0, domhandler_1.hasChildren)(node) && (node.type === domelementtype_1.ElementType.Tag || (0, domhandler_1.isCDATA)(node))) {
        return innerText(node.children);
    }
    if ((0, domhandler_1.isText)(node))
        return node.data;
    return "";
}
exports.innerText = innerText;


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/domutils/lib/traversal.js":
/*!***************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/domutils/lib/traversal.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prevElementSibling = exports.nextElementSibling = exports.getName = exports.hasAttrib = exports.getAttributeValue = exports.getSiblings = exports.getParent = exports.getChildren = void 0;
var domhandler_1 = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
var emptyArray = [];
/**
 * Get a node's children.
 *
 * @param elem Node to get the children of.
 * @returns `elem`'s children, or an empty array.
 */
function getChildren(elem) {
    var _a;
    return (_a = elem.children) !== null && _a !== void 0 ? _a : emptyArray;
}
exports.getChildren = getChildren;
/**
 * Get a node's parent.
 *
 * @param elem Node to get the parent of.
 * @returns `elem`'s parent node.
 */
function getParent(elem) {
    return elem.parent || null;
}
exports.getParent = getParent;
/**
 * Gets an elements siblings, including the element itself.
 *
 * Attempts to get the children through the element's parent first.
 * If we don't have a parent (the element is a root node),
 * we walk the element's `prev` & `next` to get all remaining nodes.
 *
 * @param elem Element to get the siblings of.
 * @returns `elem`'s siblings.
 */
function getSiblings(elem) {
    var _a, _b;
    var parent = getParent(elem);
    if (parent != null)
        return getChildren(parent);
    var siblings = [elem];
    var prev = elem.prev, next = elem.next;
    while (prev != null) {
        siblings.unshift(prev);
        (_a = prev, prev = _a.prev);
    }
    while (next != null) {
        siblings.push(next);
        (_b = next, next = _b.next);
    }
    return siblings;
}
exports.getSiblings = getSiblings;
/**
 * Gets an attribute from an element.
 *
 * @param elem Element to check.
 * @param name Attribute name to retrieve.
 * @returns The element's attribute value, or `undefined`.
 */
function getAttributeValue(elem, name) {
    var _a;
    return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}
exports.getAttributeValue = getAttributeValue;
/**
 * Checks whether an element has an attribute.
 *
 * @param elem Element to check.
 * @param name Attribute name to look for.
 * @returns Returns whether `elem` has the attribute `name`.
 */
function hasAttrib(elem, name) {
    return (elem.attribs != null &&
        Object.prototype.hasOwnProperty.call(elem.attribs, name) &&
        elem.attribs[name] != null);
}
exports.hasAttrib = hasAttrib;
/**
 * Get the tag name of an element.
 *
 * @param elem The element to get the name for.
 * @returns The tag name of `elem`.
 */
function getName(elem) {
    return elem.name;
}
exports.getName = getName;
/**
 * Returns the next element sibling of a node.
 *
 * @param elem The element to get the next sibling of.
 * @returns `elem`'s next sibling that is a tag.
 */
function nextElementSibling(elem) {
    var _a;
    var next = elem.next;
    while (next !== null && !(0, domhandler_1.isTag)(next))
        (_a = next, next = _a.next);
    return next;
}
exports.nextElementSibling = nextElementSibling;
/**
 * Returns the previous element sibling of a node.
 *
 * @param elem The element to get the previous sibling of.
 * @returns `elem`'s previous sibling that is a tag.
 */
function prevElementSibling(elem) {
    var _a;
    var prev = elem.prev;
    while (prev !== null && !(0, domhandler_1.isTag)(prev))
        (_a = prev, prev = _a.prev);
    return prev;
}
exports.prevElementSibling = prevElementSibling;


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/entities/lib/decode.js":
/*!************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/entities/lib/decode.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeXML = exports.decodeHTMLStrict = exports.decodeHTML = exports.determineBranch = exports.JUMP_OFFSET_BASE = exports.BinTrieFlags = exports.xmlDecodeTree = exports.htmlDecodeTree = void 0;
var decode_data_html_1 = __importDefault(__webpack_require__(/*! ./generated/decode-data-html */ "./node_modules/html-to-react/node_modules/entities/lib/generated/decode-data-html.js"));
exports.htmlDecodeTree = decode_data_html_1.default;
var decode_data_xml_1 = __importDefault(__webpack_require__(/*! ./generated/decode-data-xml */ "./node_modules/html-to-react/node_modules/entities/lib/generated/decode-data-xml.js"));
exports.xmlDecodeTree = decode_data_xml_1.default;
var decode_codepoint_1 = __importDefault(__webpack_require__(/*! ./decode_codepoint */ "./node_modules/html-to-react/node_modules/entities/lib/decode_codepoint.js"));
var BinTrieFlags;
(function (BinTrieFlags) {
    BinTrieFlags[BinTrieFlags["HAS_VALUE"] = 32768] = "HAS_VALUE";
    BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 32512] = "BRANCH_LENGTH";
    BinTrieFlags[BinTrieFlags["MULTI_BYTE"] = 128] = "MULTI_BYTE";
    BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags = exports.BinTrieFlags || (exports.BinTrieFlags = {}));
exports.JUMP_OFFSET_BASE = 48 /* ZERO */ - 1;
function getDecoder(decodeTree) {
    return function decodeHTMLBinary(str, strict) {
        var ret = "";
        var lastIdx = 0;
        var strIdx = 0;
        while ((strIdx = str.indexOf("&", strIdx)) >= 0) {
            ret += str.slice(lastIdx, strIdx);
            lastIdx = strIdx;
            // Skip the "&"
            strIdx += 1;
            // If we have a numeric entity, handle this separately.
            if (str.charCodeAt(strIdx) === 35 /* NUM */) {
                // Skip the leading "&#". For hex entities, also skip the leading "x".
                var start = strIdx + 1;
                var base = 10;
                var cp = str.charCodeAt(start);
                if ((cp | 32 /* To_LOWER_BIT */) === 120 /* LOWER_X */) {
                    base = 16;
                    strIdx += 1;
                    start += 1;
                }
                while (((cp = str.charCodeAt(++strIdx)) >= 48 /* ZERO */ &&
                    cp <= 57 /* NINE */) ||
                    (base === 16 &&
                        (cp | 32 /* To_LOWER_BIT */) >= 97 /* LOWER_A */ &&
                        (cp | 32 /* To_LOWER_BIT */) <= 102 /* LOWER_F */))
                    ;
                if (start !== strIdx) {
                    var entity = str.substring(start, strIdx);
                    var parsed = parseInt(entity, base);
                    if (str.charCodeAt(strIdx) === 59 /* SEMI */) {
                        strIdx += 1;
                    }
                    else if (strict) {
                        continue;
                    }
                    ret += decode_codepoint_1.default(parsed);
                    lastIdx = strIdx;
                }
                continue;
            }
            var result = null;
            var excess = 1;
            var treeIdx = 0;
            var current = decodeTree[treeIdx];
            for (; strIdx < str.length; strIdx++, excess++) {
                treeIdx = determineBranch(decodeTree, current, treeIdx + 1, str.charCodeAt(strIdx));
                if (treeIdx < 0)
                    break;
                current = decodeTree[treeIdx];
                // If the branch is a value, store it and continue
                if (current & BinTrieFlags.HAS_VALUE) {
                    // If we have a legacy entity while parsing strictly, just skip the number of bytes
                    if (strict && str.charCodeAt(strIdx) !== 59 /* SEMI */) {
                        // No need to consider multi-byte values, as the legacy entity is always a single byte
                        treeIdx += 1;
                    }
                    else {
                        // If this is a surrogate pair, combine the higher bits from the node with the next byte
                        result =
                            current & BinTrieFlags.MULTI_BYTE
                                ? String.fromCharCode(decodeTree[++treeIdx], decodeTree[++treeIdx])
                                : String.fromCharCode(decodeTree[++treeIdx]);
                        excess = 0;
                    }
                }
            }
            if (result != null) {
                ret += result;
                lastIdx = strIdx - excess + 1;
            }
        }
        return ret + str.slice(lastIdx);
    };
}
function determineBranch(decodeTree, current, nodeIdx, char) {
    if (current <= 128) {
        return char === current ? nodeIdx : -1;
    }
    var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 8;
    if (branchCount === 0) {
        return -1;
    }
    if (branchCount === 1) {
        return char === decodeTree[nodeIdx] ? nodeIdx + 1 : -1;
    }
    var jumpOffset = current & BinTrieFlags.JUMP_TABLE;
    if (jumpOffset) {
        var value = char - exports.JUMP_OFFSET_BASE - jumpOffset;
        return value < 0 || value > branchCount
            ? -1
            : decodeTree[nodeIdx + value] - 1;
    }
    // Binary search for the character.
    var lo = nodeIdx;
    var hi = lo + branchCount - 1;
    while (lo <= hi) {
        var mid = (lo + hi) >>> 1;
        var midVal = decodeTree[mid];
        if (midVal < char) {
            lo = mid + 1;
        }
        else if (midVal > char) {
            hi = mid - 1;
        }
        else {
            return decodeTree[mid + branchCount];
        }
    }
    return -1;
}
exports.determineBranch = determineBranch;
var htmlDecoder = getDecoder(decode_data_html_1.default);
var xmlDecoder = getDecoder(decode_data_xml_1.default);
function decodeHTML(str) {
    return htmlDecoder(str, false);
}
exports.decodeHTML = decodeHTML;
function decodeHTMLStrict(str) {
    return htmlDecoder(str, true);
}
exports.decodeHTMLStrict = decodeHTMLStrict;
function decodeXML(str) {
    return xmlDecoder(str, true);
}
exports.decodeXML = decodeXML;


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/entities/lib/decode_codepoint.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/entities/lib/decode_codepoint.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
Object.defineProperty(exports, "__esModule", ({ value: true }));
var decodeMap = new Map([
    [0, 65533],
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376],
]);
var fromCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
String.fromCodePoint ||
    function (codePoint) {
        var output = "";
        if (codePoint > 0xffff) {
            codePoint -= 0x10000;
            output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
            codePoint = 0xdc00 | (codePoint & 0x3ff);
        }
        output += String.fromCharCode(codePoint);
        return output;
    };
function decodeCodePoint(codePoint) {
    var _a;
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }
    return fromCodePoint((_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint);
}
exports["default"] = decodeCodePoint;


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/entities/lib/generated/decode-data-html.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/entities/lib/generated/decode-data-html.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// Generated using scripts/write-decode-map.ts
// prettier-ignore
exports["default"] = new Uint16Array([14866, 60, 237, 340, 721, 1312, 1562, 1654, 1838, 1957, 2183, 2239, 2301, 2958, 3037, 3893, 4123, 4298, 4330, 4801, 5191, 5395, 5752, 5903, 5943, 5972, 6050, 0, 0, 0, 0, 0, 0, 6135, 6565, 7422, 8183, 8738, 9242, 9503, 9938, 10189, 10573, 10637, 10715, 11950, 12246, 13539, 13950, 14445, 14533, 15364, 16514, 16980, 17390, 17763, 17849, 18036, 18125, 4096, 69, 77, 97, 98, 99, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 92, 100, 106, 115, 122, 137, 142, 151, 157, 163, 167, 182, 196, 204, 220, 229, 108, 105, 103, 33024, 198, 59, 32768, 198, 80, 33024, 38, 59, 32768, 38, 99, 117, 116, 101, 33024, 193, 59, 32768, 193, 114, 101, 118, 101, 59, 32768, 258, 512, 105, 121, 127, 134, 114, 99, 33024, 194, 59, 32768, 194, 59, 32768, 1040, 114, 59, 32896, 55349, 56580, 114, 97, 118, 101, 33024, 192, 59, 32768, 192, 112, 104, 97, 59, 32768, 913, 97, 99, 114, 59, 32768, 256, 100, 59, 32768, 10835, 512, 103, 112, 172, 177, 111, 110, 59, 32768, 260, 102, 59, 32896, 55349, 56632, 112, 108, 121, 70, 117, 110, 99, 116, 105, 111, 110, 59, 32768, 8289, 105, 110, 103, 33024, 197, 59, 32768, 197, 512, 99, 115, 209, 214, 114, 59, 32896, 55349, 56476, 105, 103, 110, 59, 32768, 8788, 105, 108, 100, 101, 33024, 195, 59, 32768, 195, 109, 108, 33024, 196, 59, 32768, 196, 2048, 97, 99, 101, 102, 111, 114, 115, 117, 253, 278, 282, 310, 315, 321, 327, 332, 512, 99, 114, 258, 267, 107, 115, 108, 97, 115, 104, 59, 32768, 8726, 583, 271, 274, 59, 32768, 10983, 101, 100, 59, 32768, 8966, 121, 59, 32768, 1041, 768, 99, 114, 116, 289, 296, 306, 97, 117, 115, 101, 59, 32768, 8757, 110, 111, 117, 108, 108, 105, 115, 59, 32768, 8492, 97, 59, 32768, 914, 114, 59, 32896, 55349, 56581, 112, 102, 59, 32896, 55349, 56633, 101, 118, 101, 59, 32768, 728, 99, 114, 59, 32768, 8492, 109, 112, 101, 113, 59, 32768, 8782, 3584, 72, 79, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 117, 368, 373, 380, 426, 461, 466, 487, 491, 495, 533, 593, 695, 701, 707, 99, 121, 59, 32768, 1063, 80, 89, 33024, 169, 59, 32768, 169, 768, 99, 112, 121, 387, 393, 419, 117, 116, 101, 59, 32768, 262, 512, 59, 105, 398, 400, 32768, 8914, 116, 97, 108, 68, 105, 102, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 32768, 8517, 108, 101, 121, 115, 59, 32768, 8493, 1024, 97, 101, 105, 111, 435, 441, 449, 454, 114, 111, 110, 59, 32768, 268, 100, 105, 108, 33024, 199, 59, 32768, 199, 114, 99, 59, 32768, 264, 110, 105, 110, 116, 59, 32768, 8752, 111, 116, 59, 32768, 266, 512, 100, 110, 471, 478, 105, 108, 108, 97, 59, 32768, 184, 116, 101, 114, 68, 111, 116, 59, 32768, 183, 114, 59, 32768, 8493, 105, 59, 32768, 935, 114, 99, 108, 101, 1024, 68, 77, 80, 84, 508, 513, 520, 526, 111, 116, 59, 32768, 8857, 105, 110, 117, 115, 59, 32768, 8854, 108, 117, 115, 59, 32768, 8853, 105, 109, 101, 115, 59, 32768, 8855, 111, 512, 99, 115, 539, 562, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 32768, 8754, 101, 67, 117, 114, 108, 121, 512, 68, 81, 573, 586, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 32768, 8221, 117, 111, 116, 101, 59, 32768, 8217, 1024, 108, 110, 112, 117, 602, 614, 648, 664, 111, 110, 512, 59, 101, 609, 611, 32768, 8759, 59, 32768, 10868, 768, 103, 105, 116, 621, 629, 634, 114, 117, 101, 110, 116, 59, 32768, 8801, 110, 116, 59, 32768, 8751, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 32768, 8750, 512, 102, 114, 653, 656, 59, 32768, 8450, 111, 100, 117, 99, 116, 59, 32768, 8720, 110, 116, 101, 114, 67, 108, 111, 99, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 32768, 8755, 111, 115, 115, 59, 32768, 10799, 99, 114, 59, 32896, 55349, 56478, 112, 512, 59, 67, 713, 715, 32768, 8915, 97, 112, 59, 32768, 8781, 2816, 68, 74, 83, 90, 97, 99, 101, 102, 105, 111, 115, 743, 758, 763, 768, 773, 795, 809, 821, 826, 910, 1295, 512, 59, 111, 748, 750, 32768, 8517, 116, 114, 97, 104, 100, 59, 32768, 10513, 99, 121, 59, 32768, 1026, 99, 121, 59, 32768, 1029, 99, 121, 59, 32768, 1039, 768, 103, 114, 115, 780, 786, 790, 103, 101, 114, 59, 32768, 8225, 114, 59, 32768, 8609, 104, 118, 59, 32768, 10980, 512, 97, 121, 800, 806, 114, 111, 110, 59, 32768, 270, 59, 32768, 1044, 108, 512, 59, 116, 815, 817, 32768, 8711, 97, 59, 32768, 916, 114, 59, 32896, 55349, 56583, 512, 97, 102, 831, 897, 512, 99, 109, 836, 891, 114, 105, 116, 105, 99, 97, 108, 1024, 65, 68, 71, 84, 852, 859, 877, 884, 99, 117, 116, 101, 59, 32768, 180, 111, 581, 864, 867, 59, 32768, 729, 98, 108, 101, 65, 99, 117, 116, 101, 59, 32768, 733, 114, 97, 118, 101, 59, 32768, 96, 105, 108, 100, 101, 59, 32768, 732, 111, 110, 100, 59, 32768, 8900, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 32768, 8518, 2113, 920, 0, 0, 0, 925, 946, 0, 1139, 102, 59, 32896, 55349, 56635, 768, 59, 68, 69, 931, 933, 938, 32768, 168, 111, 116, 59, 32768, 8412, 113, 117, 97, 108, 59, 32768, 8784, 98, 108, 101, 1536, 67, 68, 76, 82, 85, 86, 961, 978, 996, 1080, 1101, 1125, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 32768, 8751, 111, 1093, 985, 0, 0, 988, 59, 32768, 168, 110, 65, 114, 114, 111, 119, 59, 32768, 8659, 512, 101, 111, 1001, 1034, 102, 116, 768, 65, 82, 84, 1010, 1017, 1029, 114, 114, 111, 119, 59, 32768, 8656, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 8660, 101, 101, 59, 32768, 10980, 110, 103, 512, 76, 82, 1041, 1068, 101, 102, 116, 512, 65, 82, 1049, 1056, 114, 114, 111, 119, 59, 32768, 10232, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 10234, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 10233, 105, 103, 104, 116, 512, 65, 84, 1089, 1096, 114, 114, 111, 119, 59, 32768, 8658, 101, 101, 59, 32768, 8872, 112, 1042, 1108, 0, 0, 1115, 114, 114, 111, 119, 59, 32768, 8657, 111, 119, 110, 65, 114, 114, 111, 119, 59, 32768, 8661, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 32768, 8741, 110, 1536, 65, 66, 76, 82, 84, 97, 1152, 1179, 1186, 1236, 1272, 1288, 114, 114, 111, 119, 768, 59, 66, 85, 1163, 1165, 1170, 32768, 8595, 97, 114, 59, 32768, 10515, 112, 65, 114, 114, 111, 119, 59, 32768, 8693, 114, 101, 118, 101, 59, 32768, 785, 101, 102, 116, 1315, 1196, 0, 1209, 0, 1220, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59, 32768, 10576, 101, 101, 86, 101, 99, 116, 111, 114, 59, 32768, 10590, 101, 99, 116, 111, 114, 512, 59, 66, 1229, 1231, 32768, 8637, 97, 114, 59, 32768, 10582, 105, 103, 104, 116, 805, 1245, 0, 1256, 101, 101, 86, 101, 99, 116, 111, 114, 59, 32768, 10591, 101, 99, 116, 111, 114, 512, 59, 66, 1265, 1267, 32768, 8641, 97, 114, 59, 32768, 10583, 101, 101, 512, 59, 65, 1279, 1281, 32768, 8868, 114, 114, 111, 119, 59, 32768, 8615, 114, 114, 111, 119, 59, 32768, 8659, 512, 99, 116, 1300, 1305, 114, 59, 32896, 55349, 56479, 114, 111, 107, 59, 32768, 272, 4096, 78, 84, 97, 99, 100, 102, 103, 108, 109, 111, 112, 113, 115, 116, 117, 120, 1344, 1348, 1354, 1363, 1386, 1391, 1396, 1405, 1413, 1460, 1475, 1483, 1514, 1527, 1531, 1538, 71, 59, 32768, 330, 72, 33024, 208, 59, 32768, 208, 99, 117, 116, 101, 33024, 201, 59, 32768, 201, 768, 97, 105, 121, 1370, 1376, 1383, 114, 111, 110, 59, 32768, 282, 114, 99, 33024, 202, 59, 32768, 202, 59, 32768, 1069, 111, 116, 59, 32768, 278, 114, 59, 32896, 55349, 56584, 114, 97, 118, 101, 33024, 200, 59, 32768, 200, 101, 109, 101, 110, 116, 59, 32768, 8712, 512, 97, 112, 1418, 1423, 99, 114, 59, 32768, 274, 116, 121, 1060, 1431, 0, 0, 1444, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 32768, 9723, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 32768, 9643, 512, 103, 112, 1465, 1470, 111, 110, 59, 32768, 280, 102, 59, 32896, 55349, 56636, 115, 105, 108, 111, 110, 59, 32768, 917, 117, 512, 97, 105, 1489, 1504, 108, 512, 59, 84, 1495, 1497, 32768, 10869, 105, 108, 100, 101, 59, 32768, 8770, 108, 105, 98, 114, 105, 117, 109, 59, 32768, 8652, 512, 99, 105, 1519, 1523, 114, 59, 32768, 8496, 109, 59, 32768, 10867, 97, 59, 32768, 919, 109, 108, 33024, 203, 59, 32768, 203, 512, 105, 112, 1543, 1549, 115, 116, 115, 59, 32768, 8707, 111, 110, 101, 110, 116, 105, 97, 108, 69, 59, 32768, 8519, 1280, 99, 102, 105, 111, 115, 1572, 1576, 1581, 1620, 1648, 121, 59, 32768, 1060, 114, 59, 32896, 55349, 56585, 108, 108, 101, 100, 1060, 1591, 0, 0, 1604, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 32768, 9724, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 32768, 9642, 1601, 1628, 0, 1633, 0, 0, 1639, 102, 59, 32896, 55349, 56637, 65, 108, 108, 59, 32768, 8704, 114, 105, 101, 114, 116, 114, 102, 59, 32768, 8497, 99, 114, 59, 32768, 8497, 3072, 74, 84, 97, 98, 99, 100, 102, 103, 111, 114, 115, 116, 1678, 1683, 1688, 1701, 1708, 1729, 1734, 1739, 1742, 1748, 1828, 1834, 99, 121, 59, 32768, 1027, 33024, 62, 59, 32768, 62, 109, 109, 97, 512, 59, 100, 1696, 1698, 32768, 915, 59, 32768, 988, 114, 101, 118, 101, 59, 32768, 286, 768, 101, 105, 121, 1715, 1721, 1726, 100, 105, 108, 59, 32768, 290, 114, 99, 59, 32768, 284, 59, 32768, 1043, 111, 116, 59, 32768, 288, 114, 59, 32896, 55349, 56586, 59, 32768, 8921, 112, 102, 59, 32896, 55349, 56638, 101, 97, 116, 101, 114, 1536, 69, 70, 71, 76, 83, 84, 1766, 1783, 1794, 1803, 1809, 1821, 113, 117, 97, 108, 512, 59, 76, 1775, 1777, 32768, 8805, 101, 115, 115, 59, 32768, 8923, 117, 108, 108, 69, 113, 117, 97, 108, 59, 32768, 8807, 114, 101, 97, 116, 101, 114, 59, 32768, 10914, 101, 115, 115, 59, 32768, 8823, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32768, 10878, 105, 108, 100, 101, 59, 32768, 8819, 99, 114, 59, 32896, 55349, 56482, 59, 32768, 8811, 2048, 65, 97, 99, 102, 105, 111, 115, 117, 1854, 1861, 1874, 1880, 1884, 1897, 1919, 1934, 82, 68, 99, 121, 59, 32768, 1066, 512, 99, 116, 1866, 1871, 101, 107, 59, 32768, 711, 59, 32768, 94, 105, 114, 99, 59, 32768, 292, 114, 59, 32768, 8460, 108, 98, 101, 114, 116, 83, 112, 97, 99, 101, 59, 32768, 8459, 833, 1902, 0, 1906, 102, 59, 32768, 8461, 105, 122, 111, 110, 116, 97, 108, 76, 105, 110, 101, 59, 32768, 9472, 512, 99, 116, 1924, 1928, 114, 59, 32768, 8459, 114, 111, 107, 59, 32768, 294, 109, 112, 533, 1940, 1950, 111, 119, 110, 72, 117, 109, 112, 59, 32768, 8782, 113, 117, 97, 108, 59, 32768, 8783, 3584, 69, 74, 79, 97, 99, 100, 102, 103, 109, 110, 111, 115, 116, 117, 1985, 1990, 1996, 2001, 2010, 2025, 2030, 2034, 2043, 2077, 2134, 2155, 2160, 2167, 99, 121, 59, 32768, 1045, 108, 105, 103, 59, 32768, 306, 99, 121, 59, 32768, 1025, 99, 117, 116, 101, 33024, 205, 59, 32768, 205, 512, 105, 121, 2015, 2022, 114, 99, 33024, 206, 59, 32768, 206, 59, 32768, 1048, 111, 116, 59, 32768, 304, 114, 59, 32768, 8465, 114, 97, 118, 101, 33024, 204, 59, 32768, 204, 768, 59, 97, 112, 2050, 2052, 2070, 32768, 8465, 512, 99, 103, 2057, 2061, 114, 59, 32768, 298, 105, 110, 97, 114, 121, 73, 59, 32768, 8520, 108, 105, 101, 115, 59, 32768, 8658, 837, 2082, 0, 2110, 512, 59, 101, 2086, 2088, 32768, 8748, 512, 103, 114, 2093, 2099, 114, 97, 108, 59, 32768, 8747, 115, 101, 99, 116, 105, 111, 110, 59, 32768, 8898, 105, 115, 105, 98, 108, 101, 512, 67, 84, 2120, 2127, 111, 109, 109, 97, 59, 32768, 8291, 105, 109, 101, 115, 59, 32768, 8290, 768, 103, 112, 116, 2141, 2146, 2151, 111, 110, 59, 32768, 302, 102, 59, 32896, 55349, 56640, 97, 59, 32768, 921, 99, 114, 59, 32768, 8464, 105, 108, 100, 101, 59, 32768, 296, 828, 2172, 0, 2177, 99, 121, 59, 32768, 1030, 108, 33024, 207, 59, 32768, 207, 1280, 99, 102, 111, 115, 117, 2193, 2206, 2211, 2217, 2232, 512, 105, 121, 2198, 2203, 114, 99, 59, 32768, 308, 59, 32768, 1049, 114, 59, 32896, 55349, 56589, 112, 102, 59, 32896, 55349, 56641, 820, 2222, 0, 2227, 114, 59, 32896, 55349, 56485, 114, 99, 121, 59, 32768, 1032, 107, 99, 121, 59, 32768, 1028, 1792, 72, 74, 97, 99, 102, 111, 115, 2253, 2258, 2263, 2269, 2283, 2288, 2294, 99, 121, 59, 32768, 1061, 99, 121, 59, 32768, 1036, 112, 112, 97, 59, 32768, 922, 512, 101, 121, 2274, 2280, 100, 105, 108, 59, 32768, 310, 59, 32768, 1050, 114, 59, 32896, 55349, 56590, 112, 102, 59, 32896, 55349, 56642, 99, 114, 59, 32896, 55349, 56486, 2816, 74, 84, 97, 99, 101, 102, 108, 109, 111, 115, 116, 2323, 2328, 2333, 2374, 2396, 2775, 2780, 2797, 2804, 2934, 2954, 99, 121, 59, 32768, 1033, 33024, 60, 59, 32768, 60, 1280, 99, 109, 110, 112, 114, 2344, 2350, 2356, 2360, 2370, 117, 116, 101, 59, 32768, 313, 98, 100, 97, 59, 32768, 923, 103, 59, 32768, 10218, 108, 97, 99, 101, 116, 114, 102, 59, 32768, 8466, 114, 59, 32768, 8606, 768, 97, 101, 121, 2381, 2387, 2393, 114, 111, 110, 59, 32768, 317, 100, 105, 108, 59, 32768, 315, 59, 32768, 1051, 512, 102, 115, 2401, 2702, 116, 2560, 65, 67, 68, 70, 82, 84, 85, 86, 97, 114, 2423, 2470, 2479, 2530, 2537, 2561, 2618, 2666, 2683, 2690, 512, 110, 114, 2428, 2441, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 32768, 10216, 114, 111, 119, 768, 59, 66, 82, 2451, 2453, 2458, 32768, 8592, 97, 114, 59, 32768, 8676, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 8646, 101, 105, 108, 105, 110, 103, 59, 32768, 8968, 111, 838, 2485, 0, 2498, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 32768, 10214, 110, 805, 2503, 0, 2514, 101, 101, 86, 101, 99, 116, 111, 114, 59, 32768, 10593, 101, 99, 116, 111, 114, 512, 59, 66, 2523, 2525, 32768, 8643, 97, 114, 59, 32768, 10585, 108, 111, 111, 114, 59, 32768, 8970, 105, 103, 104, 116, 512, 65, 86, 2546, 2553, 114, 114, 111, 119, 59, 32768, 8596, 101, 99, 116, 111, 114, 59, 32768, 10574, 512, 101, 114, 2566, 2591, 101, 768, 59, 65, 86, 2574, 2576, 2583, 32768, 8867, 114, 114, 111, 119, 59, 32768, 8612, 101, 99, 116, 111, 114, 59, 32768, 10586, 105, 97, 110, 103, 108, 101, 768, 59, 66, 69, 2604, 2606, 2611, 32768, 8882, 97, 114, 59, 32768, 10703, 113, 117, 97, 108, 59, 32768, 8884, 112, 768, 68, 84, 86, 2626, 2638, 2649, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 32768, 10577, 101, 101, 86, 101, 99, 116, 111, 114, 59, 32768, 10592, 101, 99, 116, 111, 114, 512, 59, 66, 2659, 2661, 32768, 8639, 97, 114, 59, 32768, 10584, 101, 99, 116, 111, 114, 512, 59, 66, 2676, 2678, 32768, 8636, 97, 114, 59, 32768, 10578, 114, 114, 111, 119, 59, 32768, 8656, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8660, 115, 1536, 69, 70, 71, 76, 83, 84, 2716, 2730, 2741, 2750, 2756, 2768, 113, 117, 97, 108, 71, 114, 101, 97, 116, 101, 114, 59, 32768, 8922, 117, 108, 108, 69, 113, 117, 97, 108, 59, 32768, 8806, 114, 101, 97, 116, 101, 114, 59, 32768, 8822, 101, 115, 115, 59, 32768, 10913, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32768, 10877, 105, 108, 100, 101, 59, 32768, 8818, 114, 59, 32896, 55349, 56591, 512, 59, 101, 2785, 2787, 32768, 8920, 102, 116, 97, 114, 114, 111, 119, 59, 32768, 8666, 105, 100, 111, 116, 59, 32768, 319, 768, 110, 112, 119, 2811, 2899, 2904, 103, 1024, 76, 82, 108, 114, 2821, 2848, 2860, 2887, 101, 102, 116, 512, 65, 82, 2829, 2836, 114, 114, 111, 119, 59, 32768, 10229, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 10231, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 10230, 101, 102, 116, 512, 97, 114, 2868, 2875, 114, 114, 111, 119, 59, 32768, 10232, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 10234, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 10233, 102, 59, 32896, 55349, 56643, 101, 114, 512, 76, 82, 2911, 2922, 101, 102, 116, 65, 114, 114, 111, 119, 59, 32768, 8601, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 8600, 768, 99, 104, 116, 2941, 2945, 2948, 114, 59, 32768, 8466, 59, 32768, 8624, 114, 111, 107, 59, 32768, 321, 59, 32768, 8810, 2048, 97, 99, 101, 102, 105, 111, 115, 117, 2974, 2978, 2982, 3007, 3012, 3022, 3028, 3033, 112, 59, 32768, 10501, 121, 59, 32768, 1052, 512, 100, 108, 2987, 2998, 105, 117, 109, 83, 112, 97, 99, 101, 59, 32768, 8287, 108, 105, 110, 116, 114, 102, 59, 32768, 8499, 114, 59, 32896, 55349, 56592, 110, 117, 115, 80, 108, 117, 115, 59, 32768, 8723, 112, 102, 59, 32896, 55349, 56644, 99, 114, 59, 32768, 8499, 59, 32768, 924, 2304, 74, 97, 99, 101, 102, 111, 115, 116, 117, 3055, 3060, 3067, 3089, 3201, 3206, 3874, 3880, 3889, 99, 121, 59, 32768, 1034, 99, 117, 116, 101, 59, 32768, 323, 768, 97, 101, 121, 3074, 3080, 3086, 114, 111, 110, 59, 32768, 327, 100, 105, 108, 59, 32768, 325, 59, 32768, 1053, 768, 103, 115, 119, 3096, 3160, 3194, 97, 116, 105, 118, 101, 768, 77, 84, 86, 3108, 3121, 3145, 101, 100, 105, 117, 109, 83, 112, 97, 99, 101, 59, 32768, 8203, 104, 105, 512, 99, 110, 3128, 3137, 107, 83, 112, 97, 99, 101, 59, 32768, 8203, 83, 112, 97, 99, 101, 59, 32768, 8203, 101, 114, 121, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 32768, 8203, 116, 101, 100, 512, 71, 76, 3168, 3184, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 32768, 8811, 101, 115, 115, 76, 101, 115, 115, 59, 32768, 8810, 76, 105, 110, 101, 59, 32768, 10, 114, 59, 32896, 55349, 56593, 1024, 66, 110, 112, 116, 3215, 3222, 3238, 3242, 114, 101, 97, 107, 59, 32768, 8288, 66, 114, 101, 97, 107, 105, 110, 103, 83, 112, 97, 99, 101, 59, 32768, 160, 102, 59, 32768, 8469, 3328, 59, 67, 68, 69, 71, 72, 76, 78, 80, 82, 83, 84, 86, 3269, 3271, 3293, 3312, 3352, 3430, 3455, 3551, 3589, 3625, 3678, 3821, 3861, 32768, 10988, 512, 111, 117, 3276, 3286, 110, 103, 114, 117, 101, 110, 116, 59, 32768, 8802, 112, 67, 97, 112, 59, 32768, 8813, 111, 117, 98, 108, 101, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 32768, 8742, 768, 108, 113, 120, 3319, 3327, 3345, 101, 109, 101, 110, 116, 59, 32768, 8713, 117, 97, 108, 512, 59, 84, 3335, 3337, 32768, 8800, 105, 108, 100, 101, 59, 32896, 8770, 824, 105, 115, 116, 115, 59, 32768, 8708, 114, 101, 97, 116, 101, 114, 1792, 59, 69, 70, 71, 76, 83, 84, 3373, 3375, 3382, 3394, 3404, 3410, 3423, 32768, 8815, 113, 117, 97, 108, 59, 32768, 8817, 117, 108, 108, 69, 113, 117, 97, 108, 59, 32896, 8807, 824, 114, 101, 97, 116, 101, 114, 59, 32896, 8811, 824, 101, 115, 115, 59, 32768, 8825, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32896, 10878, 824, 105, 108, 100, 101, 59, 32768, 8821, 117, 109, 112, 533, 3437, 3448, 111, 119, 110, 72, 117, 109, 112, 59, 32896, 8782, 824, 113, 117, 97, 108, 59, 32896, 8783, 824, 101, 512, 102, 115, 3461, 3492, 116, 84, 114, 105, 97, 110, 103, 108, 101, 768, 59, 66, 69, 3477, 3479, 3485, 32768, 8938, 97, 114, 59, 32896, 10703, 824, 113, 117, 97, 108, 59, 32768, 8940, 115, 1536, 59, 69, 71, 76, 83, 84, 3506, 3508, 3515, 3524, 3531, 3544, 32768, 8814, 113, 117, 97, 108, 59, 32768, 8816, 114, 101, 97, 116, 101, 114, 59, 32768, 8824, 101, 115, 115, 59, 32896, 8810, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32896, 10877, 824, 105, 108, 100, 101, 59, 32768, 8820, 101, 115, 116, 101, 100, 512, 71, 76, 3561, 3578, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 32896, 10914, 824, 101, 115, 115, 76, 101, 115, 115, 59, 32896, 10913, 824, 114, 101, 99, 101, 100, 101, 115, 768, 59, 69, 83, 3603, 3605, 3613, 32768, 8832, 113, 117, 97, 108, 59, 32896, 10927, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32768, 8928, 512, 101, 105, 3630, 3645, 118, 101, 114, 115, 101, 69, 108, 101, 109, 101, 110, 116, 59, 32768, 8716, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 768, 59, 66, 69, 3663, 3665, 3671, 32768, 8939, 97, 114, 59, 32896, 10704, 824, 113, 117, 97, 108, 59, 32768, 8941, 512, 113, 117, 3683, 3732, 117, 97, 114, 101, 83, 117, 512, 98, 112, 3694, 3712, 115, 101, 116, 512, 59, 69, 3702, 3705, 32896, 8847, 824, 113, 117, 97, 108, 59, 32768, 8930, 101, 114, 115, 101, 116, 512, 59, 69, 3722, 3725, 32896, 8848, 824, 113, 117, 97, 108, 59, 32768, 8931, 768, 98, 99, 112, 3739, 3757, 3801, 115, 101, 116, 512, 59, 69, 3747, 3750, 32896, 8834, 8402, 113, 117, 97, 108, 59, 32768, 8840, 99, 101, 101, 100, 115, 1024, 59, 69, 83, 84, 3771, 3773, 3781, 3793, 32768, 8833, 113, 117, 97, 108, 59, 32896, 10928, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32768, 8929, 105, 108, 100, 101, 59, 32896, 8831, 824, 101, 114, 115, 101, 116, 512, 59, 69, 3811, 3814, 32896, 8835, 8402, 113, 117, 97, 108, 59, 32768, 8841, 105, 108, 100, 101, 1024, 59, 69, 70, 84, 3834, 3836, 3843, 3854, 32768, 8769, 113, 117, 97, 108, 59, 32768, 8772, 117, 108, 108, 69, 113, 117, 97, 108, 59, 32768, 8775, 105, 108, 100, 101, 59, 32768, 8777, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 32768, 8740, 99, 114, 59, 32896, 55349, 56489, 105, 108, 100, 101, 33024, 209, 59, 32768, 209, 59, 32768, 925, 3584, 69, 97, 99, 100, 102, 103, 109, 111, 112, 114, 115, 116, 117, 118, 3921, 3927, 3936, 3951, 3958, 3963, 3972, 3996, 4002, 4034, 4037, 4055, 4071, 4078, 108, 105, 103, 59, 32768, 338, 99, 117, 116, 101, 33024, 211, 59, 32768, 211, 512, 105, 121, 3941, 3948, 114, 99, 33024, 212, 59, 32768, 212, 59, 32768, 1054, 98, 108, 97, 99, 59, 32768, 336, 114, 59, 32896, 55349, 56594, 114, 97, 118, 101, 33024, 210, 59, 32768, 210, 768, 97, 101, 105, 3979, 3984, 3989, 99, 114, 59, 32768, 332, 103, 97, 59, 32768, 937, 99, 114, 111, 110, 59, 32768, 927, 112, 102, 59, 32896, 55349, 56646, 101, 110, 67, 117, 114, 108, 121, 512, 68, 81, 4014, 4027, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 32768, 8220, 117, 111, 116, 101, 59, 32768, 8216, 59, 32768, 10836, 512, 99, 108, 4042, 4047, 114, 59, 32896, 55349, 56490, 97, 115, 104, 33024, 216, 59, 32768, 216, 105, 573, 4060, 4067, 100, 101, 33024, 213, 59, 32768, 213, 101, 115, 59, 32768, 10807, 109, 108, 33024, 214, 59, 32768, 214, 101, 114, 512, 66, 80, 4085, 4109, 512, 97, 114, 4090, 4094, 114, 59, 32768, 8254, 97, 99, 512, 101, 107, 4101, 4104, 59, 32768, 9182, 101, 116, 59, 32768, 9140, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 32768, 9180, 2304, 97, 99, 102, 104, 105, 108, 111, 114, 115, 4141, 4150, 4154, 4159, 4163, 4166, 4176, 4198, 4284, 114, 116, 105, 97, 108, 68, 59, 32768, 8706, 121, 59, 32768, 1055, 114, 59, 32896, 55349, 56595, 105, 59, 32768, 934, 59, 32768, 928, 117, 115, 77, 105, 110, 117, 115, 59, 32768, 177, 512, 105, 112, 4181, 4194, 110, 99, 97, 114, 101, 112, 108, 97, 110, 101, 59, 32768, 8460, 102, 59, 32768, 8473, 1024, 59, 101, 105, 111, 4207, 4209, 4251, 4256, 32768, 10939, 99, 101, 100, 101, 115, 1024, 59, 69, 83, 84, 4223, 4225, 4232, 4244, 32768, 8826, 113, 117, 97, 108, 59, 32768, 10927, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32768, 8828, 105, 108, 100, 101, 59, 32768, 8830, 109, 101, 59, 32768, 8243, 512, 100, 112, 4261, 4267, 117, 99, 116, 59, 32768, 8719, 111, 114, 116, 105, 111, 110, 512, 59, 97, 4278, 4280, 32768, 8759, 108, 59, 32768, 8733, 512, 99, 105, 4289, 4294, 114, 59, 32896, 55349, 56491, 59, 32768, 936, 1024, 85, 102, 111, 115, 4306, 4313, 4318, 4323, 79, 84, 33024, 34, 59, 32768, 34, 114, 59, 32896, 55349, 56596, 112, 102, 59, 32768, 8474, 99, 114, 59, 32896, 55349, 56492, 3072, 66, 69, 97, 99, 101, 102, 104, 105, 111, 114, 115, 117, 4354, 4360, 4366, 4395, 4417, 4473, 4477, 4481, 4743, 4764, 4776, 4788, 97, 114, 114, 59, 32768, 10512, 71, 33024, 174, 59, 32768, 174, 768, 99, 110, 114, 4373, 4379, 4383, 117, 116, 101, 59, 32768, 340, 103, 59, 32768, 10219, 114, 512, 59, 116, 4389, 4391, 32768, 8608, 108, 59, 32768, 10518, 768, 97, 101, 121, 4402, 4408, 4414, 114, 111, 110, 59, 32768, 344, 100, 105, 108, 59, 32768, 342, 59, 32768, 1056, 512, 59, 118, 4422, 4424, 32768, 8476, 101, 114, 115, 101, 512, 69, 85, 4433, 4458, 512, 108, 113, 4438, 4446, 101, 109, 101, 110, 116, 59, 32768, 8715, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 32768, 8651, 112, 69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 32768, 10607, 114, 59, 32768, 8476, 111, 59, 32768, 929, 103, 104, 116, 2048, 65, 67, 68, 70, 84, 85, 86, 97, 4501, 4547, 4556, 4607, 4614, 4671, 4719, 4736, 512, 110, 114, 4506, 4519, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 32768, 10217, 114, 111, 119, 768, 59, 66, 76, 4529, 4531, 4536, 32768, 8594, 97, 114, 59, 32768, 8677, 101, 102, 116, 65, 114, 114, 111, 119, 59, 32768, 8644, 101, 105, 108, 105, 110, 103, 59, 32768, 8969, 111, 838, 4562, 0, 4575, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 32768, 10215, 110, 805, 4580, 0, 4591, 101, 101, 86, 101, 99, 116, 111, 114, 59, 32768, 10589, 101, 99, 116, 111, 114, 512, 59, 66, 4600, 4602, 32768, 8642, 97, 114, 59, 32768, 10581, 108, 111, 111, 114, 59, 32768, 8971, 512, 101, 114, 4619, 4644, 101, 768, 59, 65, 86, 4627, 4629, 4636, 32768, 8866, 114, 114, 111, 119, 59, 32768, 8614, 101, 99, 116, 111, 114, 59, 32768, 10587, 105, 97, 110, 103, 108, 101, 768, 59, 66, 69, 4657, 4659, 4664, 32768, 8883, 97, 114, 59, 32768, 10704, 113, 117, 97, 108, 59, 32768, 8885, 112, 768, 68, 84, 86, 4679, 4691, 4702, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 32768, 10575, 101, 101, 86, 101, 99, 116, 111, 114, 59, 32768, 10588, 101, 99, 116, 111, 114, 512, 59, 66, 4712, 4714, 32768, 8638, 97, 114, 59, 32768, 10580, 101, 99, 116, 111, 114, 512, 59, 66, 4729, 4731, 32768, 8640, 97, 114, 59, 32768, 10579, 114, 114, 111, 119, 59, 32768, 8658, 512, 112, 117, 4748, 4752, 102, 59, 32768, 8477, 110, 100, 73, 109, 112, 108, 105, 101, 115, 59, 32768, 10608, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8667, 512, 99, 104, 4781, 4785, 114, 59, 32768, 8475, 59, 32768, 8625, 108, 101, 68, 101, 108, 97, 121, 101, 100, 59, 32768, 10740, 3328, 72, 79, 97, 99, 102, 104, 105, 109, 111, 113, 115, 116, 117, 4827, 4842, 4849, 4856, 4889, 4894, 4949, 4955, 4967, 4973, 5059, 5065, 5070, 512, 67, 99, 4832, 4838, 72, 99, 121, 59, 32768, 1065, 121, 59, 32768, 1064, 70, 84, 99, 121, 59, 32768, 1068, 99, 117, 116, 101, 59, 32768, 346, 1280, 59, 97, 101, 105, 121, 4867, 4869, 4875, 4881, 4886, 32768, 10940, 114, 111, 110, 59, 32768, 352, 100, 105, 108, 59, 32768, 350, 114, 99, 59, 32768, 348, 59, 32768, 1057, 114, 59, 32896, 55349, 56598, 111, 114, 116, 1024, 68, 76, 82, 85, 4906, 4917, 4928, 4940, 111, 119, 110, 65, 114, 114, 111, 119, 59, 32768, 8595, 101, 102, 116, 65, 114, 114, 111, 119, 59, 32768, 8592, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 8594, 112, 65, 114, 114, 111, 119, 59, 32768, 8593, 103, 109, 97, 59, 32768, 931, 97, 108, 108, 67, 105, 114, 99, 108, 101, 59, 32768, 8728, 112, 102, 59, 32896, 55349, 56650, 1091, 4979, 0, 0, 4983, 116, 59, 32768, 8730, 97, 114, 101, 1024, 59, 73, 83, 85, 4994, 4996, 5010, 5052, 32768, 9633, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 59, 32768, 8851, 117, 512, 98, 112, 5016, 5033, 115, 101, 116, 512, 59, 69, 5024, 5026, 32768, 8847, 113, 117, 97, 108, 59, 32768, 8849, 101, 114, 115, 101, 116, 512, 59, 69, 5043, 5045, 32768, 8848, 113, 117, 97, 108, 59, 32768, 8850, 110, 105, 111, 110, 59, 32768, 8852, 99, 114, 59, 32896, 55349, 56494, 97, 114, 59, 32768, 8902, 1024, 98, 99, 109, 112, 5079, 5102, 5155, 5158, 512, 59, 115, 5084, 5086, 32768, 8912, 101, 116, 512, 59, 69, 5093, 5095, 32768, 8912, 113, 117, 97, 108, 59, 32768, 8838, 512, 99, 104, 5107, 5148, 101, 101, 100, 115, 1024, 59, 69, 83, 84, 5120, 5122, 5129, 5141, 32768, 8827, 113, 117, 97, 108, 59, 32768, 10928, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32768, 8829, 105, 108, 100, 101, 59, 32768, 8831, 84, 104, 97, 116, 59, 32768, 8715, 59, 32768, 8721, 768, 59, 101, 115, 5165, 5167, 5185, 32768, 8913, 114, 115, 101, 116, 512, 59, 69, 5176, 5178, 32768, 8835, 113, 117, 97, 108, 59, 32768, 8839, 101, 116, 59, 32768, 8913, 2816, 72, 82, 83, 97, 99, 102, 104, 105, 111, 114, 115, 5213, 5221, 5227, 5241, 5252, 5274, 5279, 5323, 5362, 5368, 5378, 79, 82, 78, 33024, 222, 59, 32768, 222, 65, 68, 69, 59, 32768, 8482, 512, 72, 99, 5232, 5237, 99, 121, 59, 32768, 1035, 121, 59, 32768, 1062, 512, 98, 117, 5246, 5249, 59, 32768, 9, 59, 32768, 932, 768, 97, 101, 121, 5259, 5265, 5271, 114, 111, 110, 59, 32768, 356, 100, 105, 108, 59, 32768, 354, 59, 32768, 1058, 114, 59, 32896, 55349, 56599, 512, 101, 105, 5284, 5300, 835, 5289, 0, 5297, 101, 102, 111, 114, 101, 59, 32768, 8756, 97, 59, 32768, 920, 512, 99, 110, 5305, 5315, 107, 83, 112, 97, 99, 101, 59, 32896, 8287, 8202, 83, 112, 97, 99, 101, 59, 32768, 8201, 108, 100, 101, 1024, 59, 69, 70, 84, 5335, 5337, 5344, 5355, 32768, 8764, 113, 117, 97, 108, 59, 32768, 8771, 117, 108, 108, 69, 113, 117, 97, 108, 59, 32768, 8773, 105, 108, 100, 101, 59, 32768, 8776, 112, 102, 59, 32896, 55349, 56651, 105, 112, 108, 101, 68, 111, 116, 59, 32768, 8411, 512, 99, 116, 5383, 5388, 114, 59, 32896, 55349, 56495, 114, 111, 107, 59, 32768, 358, 5426, 5417, 5444, 5458, 5473, 0, 5480, 5485, 0, 0, 0, 0, 0, 5494, 5500, 5564, 5579, 0, 5726, 5732, 5738, 5745, 512, 99, 114, 5421, 5429, 117, 116, 101, 33024, 218, 59, 32768, 218, 114, 512, 59, 111, 5435, 5437, 32768, 8607, 99, 105, 114, 59, 32768, 10569, 114, 820, 5449, 0, 5453, 121, 59, 32768, 1038, 118, 101, 59, 32768, 364, 512, 105, 121, 5462, 5469, 114, 99, 33024, 219, 59, 32768, 219, 59, 32768, 1059, 98, 108, 97, 99, 59, 32768, 368, 114, 59, 32896, 55349, 56600, 114, 97, 118, 101, 33024, 217, 59, 32768, 217, 97, 99, 114, 59, 32768, 362, 512, 100, 105, 5504, 5548, 101, 114, 512, 66, 80, 5511, 5535, 512, 97, 114, 5516, 5520, 114, 59, 32768, 95, 97, 99, 512, 101, 107, 5527, 5530, 59, 32768, 9183, 101, 116, 59, 32768, 9141, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 32768, 9181, 111, 110, 512, 59, 80, 5555, 5557, 32768, 8899, 108, 117, 115, 59, 32768, 8846, 512, 103, 112, 5568, 5573, 111, 110, 59, 32768, 370, 102, 59, 32896, 55349, 56652, 2048, 65, 68, 69, 84, 97, 100, 112, 115, 5595, 5624, 5635, 5648, 5664, 5671, 5682, 5712, 114, 114, 111, 119, 768, 59, 66, 68, 5606, 5608, 5613, 32768, 8593, 97, 114, 59, 32768, 10514, 111, 119, 110, 65, 114, 114, 111, 119, 59, 32768, 8645, 111, 119, 110, 65, 114, 114, 111, 119, 59, 32768, 8597, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 32768, 10606, 101, 101, 512, 59, 65, 5655, 5657, 32768, 8869, 114, 114, 111, 119, 59, 32768, 8613, 114, 114, 111, 119, 59, 32768, 8657, 111, 119, 110, 97, 114, 114, 111, 119, 59, 32768, 8661, 101, 114, 512, 76, 82, 5689, 5700, 101, 102, 116, 65, 114, 114, 111, 119, 59, 32768, 8598, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 8599, 105, 512, 59, 108, 5718, 5720, 32768, 978, 111, 110, 59, 32768, 933, 105, 110, 103, 59, 32768, 366, 99, 114, 59, 32896, 55349, 56496, 105, 108, 100, 101, 59, 32768, 360, 109, 108, 33024, 220, 59, 32768, 220, 2304, 68, 98, 99, 100, 101, 102, 111, 115, 118, 5770, 5776, 5781, 5785, 5798, 5878, 5883, 5889, 5895, 97, 115, 104, 59, 32768, 8875, 97, 114, 59, 32768, 10987, 121, 59, 32768, 1042, 97, 115, 104, 512, 59, 108, 5793, 5795, 32768, 8873, 59, 32768, 10982, 512, 101, 114, 5803, 5806, 59, 32768, 8897, 768, 98, 116, 121, 5813, 5818, 5866, 97, 114, 59, 32768, 8214, 512, 59, 105, 5823, 5825, 32768, 8214, 99, 97, 108, 1024, 66, 76, 83, 84, 5837, 5842, 5848, 5859, 97, 114, 59, 32768, 8739, 105, 110, 101, 59, 32768, 124, 101, 112, 97, 114, 97, 116, 111, 114, 59, 32768, 10072, 105, 108, 100, 101, 59, 32768, 8768, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 32768, 8202, 114, 59, 32896, 55349, 56601, 112, 102, 59, 32896, 55349, 56653, 99, 114, 59, 32896, 55349, 56497, 100, 97, 115, 104, 59, 32768, 8874, 1280, 99, 101, 102, 111, 115, 5913, 5919, 5925, 5930, 5936, 105, 114, 99, 59, 32768, 372, 100, 103, 101, 59, 32768, 8896, 114, 59, 32896, 55349, 56602, 112, 102, 59, 32896, 55349, 56654, 99, 114, 59, 32896, 55349, 56498, 1024, 102, 105, 111, 115, 5951, 5956, 5959, 5965, 114, 59, 32896, 55349, 56603, 59, 32768, 926, 112, 102, 59, 32896, 55349, 56655, 99, 114, 59, 32896, 55349, 56499, 2304, 65, 73, 85, 97, 99, 102, 111, 115, 117, 5990, 5995, 6000, 6005, 6014, 6027, 6032, 6038, 6044, 99, 121, 59, 32768, 1071, 99, 121, 59, 32768, 1031, 99, 121, 59, 32768, 1070, 99, 117, 116, 101, 33024, 221, 59, 32768, 221, 512, 105, 121, 6019, 6024, 114, 99, 59, 32768, 374, 59, 32768, 1067, 114, 59, 32896, 55349, 56604, 112, 102, 59, 32896, 55349, 56656, 99, 114, 59, 32896, 55349, 56500, 109, 108, 59, 32768, 376, 2048, 72, 97, 99, 100, 101, 102, 111, 115, 6066, 6071, 6078, 6092, 6097, 6119, 6123, 6128, 99, 121, 59, 32768, 1046, 99, 117, 116, 101, 59, 32768, 377, 512, 97, 121, 6083, 6089, 114, 111, 110, 59, 32768, 381, 59, 32768, 1047, 111, 116, 59, 32768, 379, 835, 6102, 0, 6116, 111, 87, 105, 100, 116, 104, 83, 112, 97, 99, 101, 59, 32768, 8203, 97, 59, 32768, 918, 114, 59, 32768, 8488, 112, 102, 59, 32768, 8484, 99, 114, 59, 32896, 55349, 56501, 5938, 6159, 6168, 6175, 0, 6214, 6222, 6233, 0, 0, 0, 0, 6242, 6267, 6290, 6429, 6444, 0, 6495, 6503, 6531, 6540, 0, 6547, 99, 117, 116, 101, 33024, 225, 59, 32768, 225, 114, 101, 118, 101, 59, 32768, 259, 1536, 59, 69, 100, 105, 117, 121, 6187, 6189, 6193, 6196, 6203, 6210, 32768, 8766, 59, 32896, 8766, 819, 59, 32768, 8767, 114, 99, 33024, 226, 59, 32768, 226, 116, 101, 33024, 180, 59, 32768, 180, 59, 32768, 1072, 108, 105, 103, 33024, 230, 59, 32768, 230, 512, 59, 114, 6226, 6228, 32768, 8289, 59, 32896, 55349, 56606, 114, 97, 118, 101, 33024, 224, 59, 32768, 224, 512, 101, 112, 6246, 6261, 512, 102, 112, 6251, 6257, 115, 121, 109, 59, 32768, 8501, 104, 59, 32768, 8501, 104, 97, 59, 32768, 945, 512, 97, 112, 6271, 6284, 512, 99, 108, 6276, 6280, 114, 59, 32768, 257, 103, 59, 32768, 10815, 33024, 38, 59, 32768, 38, 1077, 6295, 0, 0, 6326, 1280, 59, 97, 100, 115, 118, 6305, 6307, 6312, 6315, 6322, 32768, 8743, 110, 100, 59, 32768, 10837, 59, 32768, 10844, 108, 111, 112, 101, 59, 32768, 10840, 59, 32768, 10842, 1792, 59, 101, 108, 109, 114, 115, 122, 6340, 6342, 6345, 6349, 6391, 6410, 6422, 32768, 8736, 59, 32768, 10660, 101, 59, 32768, 8736, 115, 100, 512, 59, 97, 6356, 6358, 32768, 8737, 2098, 6368, 6371, 6374, 6377, 6380, 6383, 6386, 6389, 59, 32768, 10664, 59, 32768, 10665, 59, 32768, 10666, 59, 32768, 10667, 59, 32768, 10668, 59, 32768, 10669, 59, 32768, 10670, 59, 32768, 10671, 116, 512, 59, 118, 6397, 6399, 32768, 8735, 98, 512, 59, 100, 6405, 6407, 32768, 8894, 59, 32768, 10653, 512, 112, 116, 6415, 6419, 104, 59, 32768, 8738, 59, 32768, 197, 97, 114, 114, 59, 32768, 9084, 512, 103, 112, 6433, 6438, 111, 110, 59, 32768, 261, 102, 59, 32896, 55349, 56658, 1792, 59, 69, 97, 101, 105, 111, 112, 6458, 6460, 6463, 6469, 6472, 6476, 6480, 32768, 8776, 59, 32768, 10864, 99, 105, 114, 59, 32768, 10863, 59, 32768, 8778, 100, 59, 32768, 8779, 115, 59, 32768, 39, 114, 111, 120, 512, 59, 101, 6488, 6490, 32768, 8776, 113, 59, 32768, 8778, 105, 110, 103, 33024, 229, 59, 32768, 229, 768, 99, 116, 121, 6509, 6514, 6517, 114, 59, 32896, 55349, 56502, 59, 32768, 42, 109, 112, 512, 59, 101, 6524, 6526, 32768, 8776, 113, 59, 32768, 8781, 105, 108, 100, 101, 33024, 227, 59, 32768, 227, 109, 108, 33024, 228, 59, 32768, 228, 512, 99, 105, 6551, 6559, 111, 110, 105, 110, 116, 59, 32768, 8755, 110, 116, 59, 32768, 10769, 4096, 78, 97, 98, 99, 100, 101, 102, 105, 107, 108, 110, 111, 112, 114, 115, 117, 6597, 6602, 6673, 6688, 6701, 6707, 6768, 6773, 6891, 6898, 6999, 7023, 7309, 7316, 7334, 7383, 111, 116, 59, 32768, 10989, 512, 99, 114, 6607, 6652, 107, 1024, 99, 101, 112, 115, 6617, 6623, 6632, 6639, 111, 110, 103, 59, 32768, 8780, 112, 115, 105, 108, 111, 110, 59, 32768, 1014, 114, 105, 109, 101, 59, 32768, 8245, 105, 109, 512, 59, 101, 6646, 6648, 32768, 8765, 113, 59, 32768, 8909, 583, 6656, 6661, 101, 101, 59, 32768, 8893, 101, 100, 512, 59, 103, 6667, 6669, 32768, 8965, 101, 59, 32768, 8965, 114, 107, 512, 59, 116, 6680, 6682, 32768, 9141, 98, 114, 107, 59, 32768, 9142, 512, 111, 121, 6693, 6698, 110, 103, 59, 32768, 8780, 59, 32768, 1073, 113, 117, 111, 59, 32768, 8222, 1280, 99, 109, 112, 114, 116, 6718, 6731, 6738, 6743, 6749, 97, 117, 115, 512, 59, 101, 6726, 6728, 32768, 8757, 59, 32768, 8757, 112, 116, 121, 118, 59, 32768, 10672, 115, 105, 59, 32768, 1014, 110, 111, 117, 59, 32768, 8492, 768, 97, 104, 119, 6756, 6759, 6762, 59, 32768, 946, 59, 32768, 8502, 101, 101, 110, 59, 32768, 8812, 114, 59, 32896, 55349, 56607, 103, 1792, 99, 111, 115, 116, 117, 118, 119, 6789, 6809, 6834, 6850, 6872, 6879, 6884, 768, 97, 105, 117, 6796, 6800, 6805, 112, 59, 32768, 8898, 114, 99, 59, 32768, 9711, 112, 59, 32768, 8899, 768, 100, 112, 116, 6816, 6821, 6827, 111, 116, 59, 32768, 10752, 108, 117, 115, 59, 32768, 10753, 105, 109, 101, 115, 59, 32768, 10754, 1090, 6840, 0, 0, 6846, 99, 117, 112, 59, 32768, 10758, 97, 114, 59, 32768, 9733, 114, 105, 97, 110, 103, 108, 101, 512, 100, 117, 6862, 6868, 111, 119, 110, 59, 32768, 9661, 112, 59, 32768, 9651, 112, 108, 117, 115, 59, 32768, 10756, 101, 101, 59, 32768, 8897, 101, 100, 103, 101, 59, 32768, 8896, 97, 114, 111, 119, 59, 32768, 10509, 768, 97, 107, 111, 6905, 6976, 6994, 512, 99, 110, 6910, 6972, 107, 768, 108, 115, 116, 6918, 6927, 6935, 111, 122, 101, 110, 103, 101, 59, 32768, 10731, 113, 117, 97, 114, 101, 59, 32768, 9642, 114, 105, 97, 110, 103, 108, 101, 1024, 59, 100, 108, 114, 6951, 6953, 6959, 6965, 32768, 9652, 111, 119, 110, 59, 32768, 9662, 101, 102, 116, 59, 32768, 9666, 105, 103, 104, 116, 59, 32768, 9656, 107, 59, 32768, 9251, 770, 6981, 0, 6991, 771, 6985, 0, 6988, 59, 32768, 9618, 59, 32768, 9617, 52, 59, 32768, 9619, 99, 107, 59, 32768, 9608, 512, 101, 111, 7004, 7019, 512, 59, 113, 7009, 7012, 32896, 61, 8421, 117, 105, 118, 59, 32896, 8801, 8421, 116, 59, 32768, 8976, 1024, 112, 116, 119, 120, 7032, 7037, 7049, 7055, 102, 59, 32896, 55349, 56659, 512, 59, 116, 7042, 7044, 32768, 8869, 111, 109, 59, 32768, 8869, 116, 105, 101, 59, 32768, 8904, 3072, 68, 72, 85, 86, 98, 100, 104, 109, 112, 116, 117, 118, 7080, 7101, 7126, 7147, 7182, 7187, 7208, 7233, 7240, 7246, 7253, 7274, 1024, 76, 82, 108, 114, 7089, 7092, 7095, 7098, 59, 32768, 9559, 59, 32768, 9556, 59, 32768, 9558, 59, 32768, 9555, 1280, 59, 68, 85, 100, 117, 7112, 7114, 7117, 7120, 7123, 32768, 9552, 59, 32768, 9574, 59, 32768, 9577, 59, 32768, 9572, 59, 32768, 9575, 1024, 76, 82, 108, 114, 7135, 7138, 7141, 7144, 59, 32768, 9565, 59, 32768, 9562, 59, 32768, 9564, 59, 32768, 9561, 1792, 59, 72, 76, 82, 104, 108, 114, 7162, 7164, 7167, 7170, 7173, 7176, 7179, 32768, 9553, 59, 32768, 9580, 59, 32768, 9571, 59, 32768, 9568, 59, 32768, 9579, 59, 32768, 9570, 59, 32768, 9567, 111, 120, 59, 32768, 10697, 1024, 76, 82, 108, 114, 7196, 7199, 7202, 7205, 59, 32768, 9557, 59, 32768, 9554, 59, 32768, 9488, 59, 32768, 9484, 1280, 59, 68, 85, 100, 117, 7219, 7221, 7224, 7227, 7230, 32768, 9472, 59, 32768, 9573, 59, 32768, 9576, 59, 32768, 9516, 59, 32768, 9524, 105, 110, 117, 115, 59, 32768, 8863, 108, 117, 115, 59, 32768, 8862, 105, 109, 101, 115, 59, 32768, 8864, 1024, 76, 82, 108, 114, 7262, 7265, 7268, 7271, 59, 32768, 9563, 59, 32768, 9560, 59, 32768, 9496, 59, 32768, 9492, 1792, 59, 72, 76, 82, 104, 108, 114, 7289, 7291, 7294, 7297, 7300, 7303, 7306, 32768, 9474, 59, 32768, 9578, 59, 32768, 9569, 59, 32768, 9566, 59, 32768, 9532, 59, 32768, 9508, 59, 32768, 9500, 114, 105, 109, 101, 59, 32768, 8245, 512, 101, 118, 7321, 7326, 118, 101, 59, 32768, 728, 98, 97, 114, 33024, 166, 59, 32768, 166, 1024, 99, 101, 105, 111, 7343, 7348, 7353, 7364, 114, 59, 32896, 55349, 56503, 109, 105, 59, 32768, 8271, 109, 512, 59, 101, 7359, 7361, 32768, 8765, 59, 32768, 8909, 108, 768, 59, 98, 104, 7372, 7374, 7377, 32768, 92, 59, 32768, 10693, 115, 117, 98, 59, 32768, 10184, 573, 7387, 7399, 108, 512, 59, 101, 7392, 7394, 32768, 8226, 116, 59, 32768, 8226, 112, 768, 59, 69, 101, 7406, 7408, 7411, 32768, 8782, 59, 32768, 10926, 512, 59, 113, 7416, 7418, 32768, 8783, 59, 32768, 8783, 6450, 7448, 0, 7523, 7571, 7576, 7613, 0, 7618, 7647, 0, 0, 7764, 0, 0, 7779, 0, 0, 7899, 7914, 7949, 7955, 0, 8158, 0, 8176, 768, 99, 112, 114, 7454, 7460, 7509, 117, 116, 101, 59, 32768, 263, 1536, 59, 97, 98, 99, 100, 115, 7473, 7475, 7480, 7487, 7500, 7505, 32768, 8745, 110, 100, 59, 32768, 10820, 114, 99, 117, 112, 59, 32768, 10825, 512, 97, 117, 7492, 7496, 112, 59, 32768, 10827, 112, 59, 32768, 10823, 111, 116, 59, 32768, 10816, 59, 32896, 8745, 65024, 512, 101, 111, 7514, 7518, 116, 59, 32768, 8257, 110, 59, 32768, 711, 1024, 97, 101, 105, 117, 7531, 7544, 7552, 7557, 833, 7536, 0, 7540, 115, 59, 32768, 10829, 111, 110, 59, 32768, 269, 100, 105, 108, 33024, 231, 59, 32768, 231, 114, 99, 59, 32768, 265, 112, 115, 512, 59, 115, 7564, 7566, 32768, 10828, 109, 59, 32768, 10832, 111, 116, 59, 32768, 267, 768, 100, 109, 110, 7582, 7589, 7596, 105, 108, 33024, 184, 59, 32768, 184, 112, 116, 121, 118, 59, 32768, 10674, 116, 33280, 162, 59, 101, 7603, 7605, 32768, 162, 114, 100, 111, 116, 59, 32768, 183, 114, 59, 32896, 55349, 56608, 768, 99, 101, 105, 7624, 7628, 7643, 121, 59, 32768, 1095, 99, 107, 512, 59, 109, 7635, 7637, 32768, 10003, 97, 114, 107, 59, 32768, 10003, 59, 32768, 967, 114, 1792, 59, 69, 99, 101, 102, 109, 115, 7662, 7664, 7667, 7742, 7745, 7752, 7757, 32768, 9675, 59, 32768, 10691, 768, 59, 101, 108, 7674, 7676, 7680, 32768, 710, 113, 59, 32768, 8791, 101, 1074, 7687, 0, 0, 7709, 114, 114, 111, 119, 512, 108, 114, 7695, 7701, 101, 102, 116, 59, 32768, 8634, 105, 103, 104, 116, 59, 32768, 8635, 1280, 82, 83, 97, 99, 100, 7719, 7722, 7725, 7730, 7736, 59, 32768, 174, 59, 32768, 9416, 115, 116, 59, 32768, 8859, 105, 114, 99, 59, 32768, 8858, 97, 115, 104, 59, 32768, 8861, 59, 32768, 8791, 110, 105, 110, 116, 59, 32768, 10768, 105, 100, 59, 32768, 10991, 99, 105, 114, 59, 32768, 10690, 117, 98, 115, 512, 59, 117, 7771, 7773, 32768, 9827, 105, 116, 59, 32768, 9827, 1341, 7785, 7804, 7850, 0, 7871, 111, 110, 512, 59, 101, 7791, 7793, 32768, 58, 512, 59, 113, 7798, 7800, 32768, 8788, 59, 32768, 8788, 1086, 7809, 0, 0, 7820, 97, 512, 59, 116, 7814, 7816, 32768, 44, 59, 32768, 64, 768, 59, 102, 108, 7826, 7828, 7832, 32768, 8705, 110, 59, 32768, 8728, 101, 512, 109, 120, 7838, 7844, 101, 110, 116, 59, 32768, 8705, 101, 115, 59, 32768, 8450, 824, 7854, 0, 7866, 512, 59, 100, 7858, 7860, 32768, 8773, 111, 116, 59, 32768, 10861, 110, 116, 59, 32768, 8750, 768, 102, 114, 121, 7877, 7881, 7886, 59, 32896, 55349, 56660, 111, 100, 59, 32768, 8720, 33280, 169, 59, 115, 7892, 7894, 32768, 169, 114, 59, 32768, 8471, 512, 97, 111, 7903, 7908, 114, 114, 59, 32768, 8629, 115, 115, 59, 32768, 10007, 512, 99, 117, 7918, 7923, 114, 59, 32896, 55349, 56504, 512, 98, 112, 7928, 7938, 512, 59, 101, 7933, 7935, 32768, 10959, 59, 32768, 10961, 512, 59, 101, 7943, 7945, 32768, 10960, 59, 32768, 10962, 100, 111, 116, 59, 32768, 8943, 1792, 100, 101, 108, 112, 114, 118, 119, 7969, 7983, 7996, 8009, 8057, 8147, 8152, 97, 114, 114, 512, 108, 114, 7977, 7980, 59, 32768, 10552, 59, 32768, 10549, 1089, 7989, 0, 0, 7993, 114, 59, 32768, 8926, 99, 59, 32768, 8927, 97, 114, 114, 512, 59, 112, 8004, 8006, 32768, 8630, 59, 32768, 10557, 1536, 59, 98, 99, 100, 111, 115, 8022, 8024, 8031, 8044, 8049, 8053, 32768, 8746, 114, 99, 97, 112, 59, 32768, 10824, 512, 97, 117, 8036, 8040, 112, 59, 32768, 10822, 112, 59, 32768, 10826, 111, 116, 59, 32768, 8845, 114, 59, 32768, 10821, 59, 32896, 8746, 65024, 1024, 97, 108, 114, 118, 8066, 8078, 8116, 8123, 114, 114, 512, 59, 109, 8073, 8075, 32768, 8631, 59, 32768, 10556, 121, 768, 101, 118, 119, 8086, 8104, 8109, 113, 1089, 8093, 0, 0, 8099, 114, 101, 99, 59, 32768, 8926, 117, 99, 99, 59, 32768, 8927, 101, 101, 59, 32768, 8910, 101, 100, 103, 101, 59, 32768, 8911, 101, 110, 33024, 164, 59, 32768, 164, 101, 97, 114, 114, 111, 119, 512, 108, 114, 8134, 8140, 101, 102, 116, 59, 32768, 8630, 105, 103, 104, 116, 59, 32768, 8631, 101, 101, 59, 32768, 8910, 101, 100, 59, 32768, 8911, 512, 99, 105, 8162, 8170, 111, 110, 105, 110, 116, 59, 32768, 8754, 110, 116, 59, 32768, 8753, 108, 99, 116, 121, 59, 32768, 9005, 4864, 65, 72, 97, 98, 99, 100, 101, 102, 104, 105, 106, 108, 111, 114, 115, 116, 117, 119, 122, 8221, 8226, 8231, 8267, 8282, 8296, 8327, 8351, 8366, 8379, 8466, 8471, 8487, 8621, 8647, 8676, 8697, 8712, 8720, 114, 114, 59, 32768, 8659, 97, 114, 59, 32768, 10597, 1024, 103, 108, 114, 115, 8240, 8246, 8252, 8256, 103, 101, 114, 59, 32768, 8224, 101, 116, 104, 59, 32768, 8504, 114, 59, 32768, 8595, 104, 512, 59, 118, 8262, 8264, 32768, 8208, 59, 32768, 8867, 572, 8271, 8278, 97, 114, 111, 119, 59, 32768, 10511, 97, 99, 59, 32768, 733, 512, 97, 121, 8287, 8293, 114, 111, 110, 59, 32768, 271, 59, 32768, 1076, 768, 59, 97, 111, 8303, 8305, 8320, 32768, 8518, 512, 103, 114, 8310, 8316, 103, 101, 114, 59, 32768, 8225, 114, 59, 32768, 8650, 116, 115, 101, 113, 59, 32768, 10871, 768, 103, 108, 109, 8334, 8339, 8344, 33024, 176, 59, 32768, 176, 116, 97, 59, 32768, 948, 112, 116, 121, 118, 59, 32768, 10673, 512, 105, 114, 8356, 8362, 115, 104, 116, 59, 32768, 10623, 59, 32896, 55349, 56609, 97, 114, 512, 108, 114, 8373, 8376, 59, 32768, 8643, 59, 32768, 8642, 1280, 97, 101, 103, 115, 118, 8390, 8418, 8421, 8428, 8433, 109, 768, 59, 111, 115, 8398, 8400, 8415, 32768, 8900, 110, 100, 512, 59, 115, 8407, 8409, 32768, 8900, 117, 105, 116, 59, 32768, 9830, 59, 32768, 9830, 59, 32768, 168, 97, 109, 109, 97, 59, 32768, 989, 105, 110, 59, 32768, 8946, 768, 59, 105, 111, 8440, 8442, 8461, 32768, 247, 100, 101, 33280, 247, 59, 111, 8450, 8452, 32768, 247, 110, 116, 105, 109, 101, 115, 59, 32768, 8903, 110, 120, 59, 32768, 8903, 99, 121, 59, 32768, 1106, 99, 1088, 8478, 0, 0, 8483, 114, 110, 59, 32768, 8990, 111, 112, 59, 32768, 8973, 1280, 108, 112, 116, 117, 119, 8498, 8504, 8509, 8556, 8570, 108, 97, 114, 59, 32768, 36, 102, 59, 32896, 55349, 56661, 1280, 59, 101, 109, 112, 115, 8520, 8522, 8535, 8542, 8548, 32768, 729, 113, 512, 59, 100, 8528, 8530, 32768, 8784, 111, 116, 59, 32768, 8785, 105, 110, 117, 115, 59, 32768, 8760, 108, 117, 115, 59, 32768, 8724, 113, 117, 97, 114, 101, 59, 32768, 8865, 98, 108, 101, 98, 97, 114, 119, 101, 100, 103, 101, 59, 32768, 8966, 110, 768, 97, 100, 104, 8578, 8585, 8597, 114, 114, 111, 119, 59, 32768, 8595, 111, 119, 110, 97, 114, 114, 111, 119, 115, 59, 32768, 8650, 97, 114, 112, 111, 111, 110, 512, 108, 114, 8608, 8614, 101, 102, 116, 59, 32768, 8643, 105, 103, 104, 116, 59, 32768, 8642, 563, 8625, 8633, 107, 97, 114, 111, 119, 59, 32768, 10512, 1088, 8638, 0, 0, 8643, 114, 110, 59, 32768, 8991, 111, 112, 59, 32768, 8972, 768, 99, 111, 116, 8654, 8666, 8670, 512, 114, 121, 8659, 8663, 59, 32896, 55349, 56505, 59, 32768, 1109, 108, 59, 32768, 10742, 114, 111, 107, 59, 32768, 273, 512, 100, 114, 8681, 8686, 111, 116, 59, 32768, 8945, 105, 512, 59, 102, 8692, 8694, 32768, 9663, 59, 32768, 9662, 512, 97, 104, 8702, 8707, 114, 114, 59, 32768, 8693, 97, 114, 59, 32768, 10607, 97, 110, 103, 108, 101, 59, 32768, 10662, 512, 99, 105, 8725, 8729, 121, 59, 32768, 1119, 103, 114, 97, 114, 114, 59, 32768, 10239, 4608, 68, 97, 99, 100, 101, 102, 103, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 120, 8774, 8788, 8807, 8844, 8849, 8852, 8866, 8895, 8929, 8977, 8989, 9004, 9046, 9136, 9151, 9171, 9184, 9199, 512, 68, 111, 8779, 8784, 111, 116, 59, 32768, 10871, 116, 59, 32768, 8785, 512, 99, 115, 8793, 8801, 117, 116, 101, 33024, 233, 59, 32768, 233, 116, 101, 114, 59, 32768, 10862, 1024, 97, 105, 111, 121, 8816, 8822, 8835, 8841, 114, 111, 110, 59, 32768, 283, 114, 512, 59, 99, 8828, 8830, 32768, 8790, 33024, 234, 59, 32768, 234, 108, 111, 110, 59, 32768, 8789, 59, 32768, 1101, 111, 116, 59, 32768, 279, 59, 32768, 8519, 512, 68, 114, 8857, 8862, 111, 116, 59, 32768, 8786, 59, 32896, 55349, 56610, 768, 59, 114, 115, 8873, 8875, 8883, 32768, 10906, 97, 118, 101, 33024, 232, 59, 32768, 232, 512, 59, 100, 8888, 8890, 32768, 10902, 111, 116, 59, 32768, 10904, 1024, 59, 105, 108, 115, 8904, 8906, 8914, 8917, 32768, 10905, 110, 116, 101, 114, 115, 59, 32768, 9191, 59, 32768, 8467, 512, 59, 100, 8922, 8924, 32768, 10901, 111, 116, 59, 32768, 10903, 768, 97, 112, 115, 8936, 8941, 8960, 99, 114, 59, 32768, 275, 116, 121, 768, 59, 115, 118, 8950, 8952, 8957, 32768, 8709, 101, 116, 59, 32768, 8709, 59, 32768, 8709, 112, 512, 49, 59, 8966, 8975, 516, 8970, 8973, 59, 32768, 8196, 59, 32768, 8197, 32768, 8195, 512, 103, 115, 8982, 8985, 59, 32768, 331, 112, 59, 32768, 8194, 512, 103, 112, 8994, 8999, 111, 110, 59, 32768, 281, 102, 59, 32896, 55349, 56662, 768, 97, 108, 115, 9011, 9023, 9028, 114, 512, 59, 115, 9017, 9019, 32768, 8917, 108, 59, 32768, 10723, 117, 115, 59, 32768, 10865, 105, 768, 59, 108, 118, 9036, 9038, 9043, 32768, 949, 111, 110, 59, 32768, 949, 59, 32768, 1013, 1024, 99, 115, 117, 118, 9055, 9071, 9099, 9128, 512, 105, 111, 9060, 9065, 114, 99, 59, 32768, 8790, 108, 111, 110, 59, 32768, 8789, 1082, 9077, 0, 0, 9081, 109, 59, 32768, 8770, 97, 110, 116, 512, 103, 108, 9088, 9093, 116, 114, 59, 32768, 10902, 101, 115, 115, 59, 32768, 10901, 768, 97, 101, 105, 9106, 9111, 9116, 108, 115, 59, 32768, 61, 115, 116, 59, 32768, 8799, 118, 512, 59, 68, 9122, 9124, 32768, 8801, 68, 59, 32768, 10872, 112, 97, 114, 115, 108, 59, 32768, 10725, 512, 68, 97, 9141, 9146, 111, 116, 59, 32768, 8787, 114, 114, 59, 32768, 10609, 768, 99, 100, 105, 9158, 9162, 9167, 114, 59, 32768, 8495, 111, 116, 59, 32768, 8784, 109, 59, 32768, 8770, 512, 97, 104, 9176, 9179, 59, 32768, 951, 33024, 240, 59, 32768, 240, 512, 109, 114, 9189, 9195, 108, 33024, 235, 59, 32768, 235, 111, 59, 32768, 8364, 768, 99, 105, 112, 9206, 9210, 9215, 108, 59, 32768, 33, 115, 116, 59, 32768, 8707, 512, 101, 111, 9220, 9230, 99, 116, 97, 116, 105, 111, 110, 59, 32768, 8496, 110, 101, 110, 116, 105, 97, 108, 101, 59, 32768, 8519, 4914, 9262, 0, 9276, 0, 9280, 9287, 0, 0, 9318, 9324, 0, 9331, 0, 9352, 9357, 9386, 0, 9395, 9497, 108, 108, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 32768, 8786, 121, 59, 32768, 1092, 109, 97, 108, 101, 59, 32768, 9792, 768, 105, 108, 114, 9293, 9299, 9313, 108, 105, 103, 59, 32768, 64259, 1082, 9305, 0, 0, 9309, 103, 59, 32768, 64256, 105, 103, 59, 32768, 64260, 59, 32896, 55349, 56611, 108, 105, 103, 59, 32768, 64257, 108, 105, 103, 59, 32896, 102, 106, 768, 97, 108, 116, 9337, 9341, 9346, 116, 59, 32768, 9837, 105, 103, 59, 32768, 64258, 110, 115, 59, 32768, 9649, 111, 102, 59, 32768, 402, 833, 9361, 0, 9366, 102, 59, 32896, 55349, 56663, 512, 97, 107, 9370, 9375, 108, 108, 59, 32768, 8704, 512, 59, 118, 9380, 9382, 32768, 8916, 59, 32768, 10969, 97, 114, 116, 105, 110, 116, 59, 32768, 10765, 512, 97, 111, 9399, 9491, 512, 99, 115, 9404, 9487, 1794, 9413, 9443, 9453, 9470, 9474, 0, 9484, 1795, 9421, 9426, 9429, 9434, 9437, 0, 9440, 33024, 189, 59, 32768, 189, 59, 32768, 8531, 33024, 188, 59, 32768, 188, 59, 32768, 8533, 59, 32768, 8537, 59, 32768, 8539, 772, 9447, 0, 9450, 59, 32768, 8532, 59, 32768, 8534, 1285, 9459, 9464, 0, 0, 9467, 33024, 190, 59, 32768, 190, 59, 32768, 8535, 59, 32768, 8540, 53, 59, 32768, 8536, 775, 9478, 0, 9481, 59, 32768, 8538, 59, 32768, 8541, 56, 59, 32768, 8542, 108, 59, 32768, 8260, 119, 110, 59, 32768, 8994, 99, 114, 59, 32896, 55349, 56507, 4352, 69, 97, 98, 99, 100, 101, 102, 103, 105, 106, 108, 110, 111, 114, 115, 116, 118, 9537, 9547, 9575, 9582, 9595, 9600, 9679, 9684, 9694, 9700, 9705, 9725, 9773, 9779, 9785, 9810, 9917, 512, 59, 108, 9542, 9544, 32768, 8807, 59, 32768, 10892, 768, 99, 109, 112, 9554, 9560, 9572, 117, 116, 101, 59, 32768, 501, 109, 97, 512, 59, 100, 9567, 9569, 32768, 947, 59, 32768, 989, 59, 32768, 10886, 114, 101, 118, 101, 59, 32768, 287, 512, 105, 121, 9587, 9592, 114, 99, 59, 32768, 285, 59, 32768, 1075, 111, 116, 59, 32768, 289, 1024, 59, 108, 113, 115, 9609, 9611, 9614, 9633, 32768, 8805, 59, 32768, 8923, 768, 59, 113, 115, 9621, 9623, 9626, 32768, 8805, 59, 32768, 8807, 108, 97, 110, 116, 59, 32768, 10878, 1024, 59, 99, 100, 108, 9642, 9644, 9648, 9667, 32768, 10878, 99, 59, 32768, 10921, 111, 116, 512, 59, 111, 9655, 9657, 32768, 10880, 512, 59, 108, 9662, 9664, 32768, 10882, 59, 32768, 10884, 512, 59, 101, 9672, 9675, 32896, 8923, 65024, 115, 59, 32768, 10900, 114, 59, 32896, 55349, 56612, 512, 59, 103, 9689, 9691, 32768, 8811, 59, 32768, 8921, 109, 101, 108, 59, 32768, 8503, 99, 121, 59, 32768, 1107, 1024, 59, 69, 97, 106, 9714, 9716, 9719, 9722, 32768, 8823, 59, 32768, 10898, 59, 32768, 10917, 59, 32768, 10916, 1024, 69, 97, 101, 115, 9734, 9737, 9751, 9768, 59, 32768, 8809, 112, 512, 59, 112, 9743, 9745, 32768, 10890, 114, 111, 120, 59, 32768, 10890, 512, 59, 113, 9756, 9758, 32768, 10888, 512, 59, 113, 9763, 9765, 32768, 10888, 59, 32768, 8809, 105, 109, 59, 32768, 8935, 112, 102, 59, 32896, 55349, 56664, 97, 118, 101, 59, 32768, 96, 512, 99, 105, 9790, 9794, 114, 59, 32768, 8458, 109, 768, 59, 101, 108, 9802, 9804, 9807, 32768, 8819, 59, 32768, 10894, 59, 32768, 10896, 34304, 62, 59, 99, 100, 108, 113, 114, 9824, 9826, 9838, 9843, 9849, 9856, 32768, 62, 512, 99, 105, 9831, 9834, 59, 32768, 10919, 114, 59, 32768, 10874, 111, 116, 59, 32768, 8919, 80, 97, 114, 59, 32768, 10645, 117, 101, 115, 116, 59, 32768, 10876, 1280, 97, 100, 101, 108, 115, 9867, 9882, 9887, 9906, 9912, 833, 9872, 0, 9879, 112, 114, 111, 120, 59, 32768, 10886, 114, 59, 32768, 10616, 111, 116, 59, 32768, 8919, 113, 512, 108, 113, 9893, 9899, 101, 115, 115, 59, 32768, 8923, 108, 101, 115, 115, 59, 32768, 10892, 101, 115, 115, 59, 32768, 8823, 105, 109, 59, 32768, 8819, 512, 101, 110, 9922, 9932, 114, 116, 110, 101, 113, 113, 59, 32896, 8809, 65024, 69, 59, 32896, 8809, 65024, 2560, 65, 97, 98, 99, 101, 102, 107, 111, 115, 121, 9958, 9963, 10015, 10020, 10026, 10060, 10065, 10085, 10147, 10171, 114, 114, 59, 32768, 8660, 1024, 105, 108, 109, 114, 9972, 9978, 9982, 9988, 114, 115, 112, 59, 32768, 8202, 102, 59, 32768, 189, 105, 108, 116, 59, 32768, 8459, 512, 100, 114, 9993, 9998, 99, 121, 59, 32768, 1098, 768, 59, 99, 119, 10005, 10007, 10012, 32768, 8596, 105, 114, 59, 32768, 10568, 59, 32768, 8621, 97, 114, 59, 32768, 8463, 105, 114, 99, 59, 32768, 293, 768, 97, 108, 114, 10033, 10048, 10054, 114, 116, 115, 512, 59, 117, 10041, 10043, 32768, 9829, 105, 116, 59, 32768, 9829, 108, 105, 112, 59, 32768, 8230, 99, 111, 110, 59, 32768, 8889, 114, 59, 32896, 55349, 56613, 115, 512, 101, 119, 10071, 10078, 97, 114, 111, 119, 59, 32768, 10533, 97, 114, 111, 119, 59, 32768, 10534, 1280, 97, 109, 111, 112, 114, 10096, 10101, 10107, 10136, 10141, 114, 114, 59, 32768, 8703, 116, 104, 116, 59, 32768, 8763, 107, 512, 108, 114, 10113, 10124, 101, 102, 116, 97, 114, 114, 111, 119, 59, 32768, 8617, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8618, 102, 59, 32896, 55349, 56665, 98, 97, 114, 59, 32768, 8213, 768, 99, 108, 116, 10154, 10159, 10165, 114, 59, 32896, 55349, 56509, 97, 115, 104, 59, 32768, 8463, 114, 111, 107, 59, 32768, 295, 512, 98, 112, 10176, 10182, 117, 108, 108, 59, 32768, 8259, 104, 101, 110, 59, 32768, 8208, 5426, 10211, 0, 10220, 0, 10239, 10255, 10267, 0, 10276, 10312, 0, 0, 10318, 10371, 10458, 10485, 10491, 0, 10500, 10545, 10558, 99, 117, 116, 101, 33024, 237, 59, 32768, 237, 768, 59, 105, 121, 10226, 10228, 10235, 32768, 8291, 114, 99, 33024, 238, 59, 32768, 238, 59, 32768, 1080, 512, 99, 120, 10243, 10247, 121, 59, 32768, 1077, 99, 108, 33024, 161, 59, 32768, 161, 512, 102, 114, 10259, 10262, 59, 32768, 8660, 59, 32896, 55349, 56614, 114, 97, 118, 101, 33024, 236, 59, 32768, 236, 1024, 59, 105, 110, 111, 10284, 10286, 10300, 10306, 32768, 8520, 512, 105, 110, 10291, 10296, 110, 116, 59, 32768, 10764, 116, 59, 32768, 8749, 102, 105, 110, 59, 32768, 10716, 116, 97, 59, 32768, 8489, 108, 105, 103, 59, 32768, 307, 768, 97, 111, 112, 10324, 10361, 10365, 768, 99, 103, 116, 10331, 10335, 10357, 114, 59, 32768, 299, 768, 101, 108, 112, 10342, 10345, 10351, 59, 32768, 8465, 105, 110, 101, 59, 32768, 8464, 97, 114, 116, 59, 32768, 8465, 104, 59, 32768, 305, 102, 59, 32768, 8887, 101, 100, 59, 32768, 437, 1280, 59, 99, 102, 111, 116, 10381, 10383, 10389, 10403, 10409, 32768, 8712, 97, 114, 101, 59, 32768, 8453, 105, 110, 512, 59, 116, 10396, 10398, 32768, 8734, 105, 101, 59, 32768, 10717, 100, 111, 116, 59, 32768, 305, 1280, 59, 99, 101, 108, 112, 10420, 10422, 10427, 10444, 10451, 32768, 8747, 97, 108, 59, 32768, 8890, 512, 103, 114, 10432, 10438, 101, 114, 115, 59, 32768, 8484, 99, 97, 108, 59, 32768, 8890, 97, 114, 104, 107, 59, 32768, 10775, 114, 111, 100, 59, 32768, 10812, 1024, 99, 103, 112, 116, 10466, 10470, 10475, 10480, 121, 59, 32768, 1105, 111, 110, 59, 32768, 303, 102, 59, 32896, 55349, 56666, 97, 59, 32768, 953, 114, 111, 100, 59, 32768, 10812, 117, 101, 115, 116, 33024, 191, 59, 32768, 191, 512, 99, 105, 10504, 10509, 114, 59, 32896, 55349, 56510, 110, 1280, 59, 69, 100, 115, 118, 10521, 10523, 10526, 10531, 10541, 32768, 8712, 59, 32768, 8953, 111, 116, 59, 32768, 8949, 512, 59, 118, 10536, 10538, 32768, 8948, 59, 32768, 8947, 59, 32768, 8712, 512, 59, 105, 10549, 10551, 32768, 8290, 108, 100, 101, 59, 32768, 297, 828, 10562, 0, 10567, 99, 121, 59, 32768, 1110, 108, 33024, 239, 59, 32768, 239, 1536, 99, 102, 109, 111, 115, 117, 10585, 10598, 10603, 10609, 10615, 10630, 512, 105, 121, 10590, 10595, 114, 99, 59, 32768, 309, 59, 32768, 1081, 114, 59, 32896, 55349, 56615, 97, 116, 104, 59, 32768, 567, 112, 102, 59, 32896, 55349, 56667, 820, 10620, 0, 10625, 114, 59, 32896, 55349, 56511, 114, 99, 121, 59, 32768, 1112, 107, 99, 121, 59, 32768, 1108, 2048, 97, 99, 102, 103, 104, 106, 111, 115, 10653, 10666, 10680, 10685, 10692, 10697, 10702, 10708, 112, 112, 97, 512, 59, 118, 10661, 10663, 32768, 954, 59, 32768, 1008, 512, 101, 121, 10671, 10677, 100, 105, 108, 59, 32768, 311, 59, 32768, 1082, 114, 59, 32896, 55349, 56616, 114, 101, 101, 110, 59, 32768, 312, 99, 121, 59, 32768, 1093, 99, 121, 59, 32768, 1116, 112, 102, 59, 32896, 55349, 56668, 99, 114, 59, 32896, 55349, 56512, 5888, 65, 66, 69, 72, 97, 98, 99, 100, 101, 102, 103, 104, 106, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 10761, 10783, 10789, 10799, 10804, 10957, 11011, 11047, 11094, 11349, 11372, 11382, 11409, 11414, 11451, 11478, 11526, 11698, 11711, 11755, 11823, 11910, 11929, 768, 97, 114, 116, 10768, 10773, 10777, 114, 114, 59, 32768, 8666, 114, 59, 32768, 8656, 97, 105, 108, 59, 32768, 10523, 97, 114, 114, 59, 32768, 10510, 512, 59, 103, 10794, 10796, 32768, 8806, 59, 32768, 10891, 97, 114, 59, 32768, 10594, 4660, 10824, 0, 10830, 0, 10838, 0, 0, 0, 0, 0, 10844, 10850, 0, 10867, 10870, 10877, 0, 10933, 117, 116, 101, 59, 32768, 314, 109, 112, 116, 121, 118, 59, 32768, 10676, 114, 97, 110, 59, 32768, 8466, 98, 100, 97, 59, 32768, 955, 103, 768, 59, 100, 108, 10857, 10859, 10862, 32768, 10216, 59, 32768, 10641, 101, 59, 32768, 10216, 59, 32768, 10885, 117, 111, 33024, 171, 59, 32768, 171, 114, 2048, 59, 98, 102, 104, 108, 112, 115, 116, 10894, 10896, 10907, 10911, 10915, 10919, 10923, 10928, 32768, 8592, 512, 59, 102, 10901, 10903, 32768, 8676, 115, 59, 32768, 10527, 115, 59, 32768, 10525, 107, 59, 32768, 8617, 112, 59, 32768, 8619, 108, 59, 32768, 10553, 105, 109, 59, 32768, 10611, 108, 59, 32768, 8610, 768, 59, 97, 101, 10939, 10941, 10946, 32768, 10923, 105, 108, 59, 32768, 10521, 512, 59, 115, 10951, 10953, 32768, 10925, 59, 32896, 10925, 65024, 768, 97, 98, 114, 10964, 10969, 10974, 114, 114, 59, 32768, 10508, 114, 107, 59, 32768, 10098, 512, 97, 107, 10979, 10991, 99, 512, 101, 107, 10985, 10988, 59, 32768, 123, 59, 32768, 91, 512, 101, 115, 10996, 10999, 59, 32768, 10635, 108, 512, 100, 117, 11005, 11008, 59, 32768, 10639, 59, 32768, 10637, 1024, 97, 101, 117, 121, 11020, 11026, 11040, 11044, 114, 111, 110, 59, 32768, 318, 512, 100, 105, 11031, 11036, 105, 108, 59, 32768, 316, 108, 59, 32768, 8968, 98, 59, 32768, 123, 59, 32768, 1083, 1024, 99, 113, 114, 115, 11056, 11060, 11072, 11090, 97, 59, 32768, 10550, 117, 111, 512, 59, 114, 11067, 11069, 32768, 8220, 59, 32768, 8222, 512, 100, 117, 11077, 11083, 104, 97, 114, 59, 32768, 10599, 115, 104, 97, 114, 59, 32768, 10571, 104, 59, 32768, 8626, 1280, 59, 102, 103, 113, 115, 11105, 11107, 11228, 11231, 11250, 32768, 8804, 116, 1280, 97, 104, 108, 114, 116, 11119, 11136, 11157, 11169, 11216, 114, 114, 111, 119, 512, 59, 116, 11128, 11130, 32768, 8592, 97, 105, 108, 59, 32768, 8610, 97, 114, 112, 111, 111, 110, 512, 100, 117, 11147, 11153, 111, 119, 110, 59, 32768, 8637, 112, 59, 32768, 8636, 101, 102, 116, 97, 114, 114, 111, 119, 115, 59, 32768, 8647, 105, 103, 104, 116, 768, 97, 104, 115, 11180, 11194, 11204, 114, 114, 111, 119, 512, 59, 115, 11189, 11191, 32768, 8596, 59, 32768, 8646, 97, 114, 112, 111, 111, 110, 115, 59, 32768, 8651, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 32768, 8621, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 32768, 8907, 59, 32768, 8922, 768, 59, 113, 115, 11238, 11240, 11243, 32768, 8804, 59, 32768, 8806, 108, 97, 110, 116, 59, 32768, 10877, 1280, 59, 99, 100, 103, 115, 11261, 11263, 11267, 11286, 11298, 32768, 10877, 99, 59, 32768, 10920, 111, 116, 512, 59, 111, 11274, 11276, 32768, 10879, 512, 59, 114, 11281, 11283, 32768, 10881, 59, 32768, 10883, 512, 59, 101, 11291, 11294, 32896, 8922, 65024, 115, 59, 32768, 10899, 1280, 97, 100, 101, 103, 115, 11309, 11317, 11322, 11339, 11344, 112, 112, 114, 111, 120, 59, 32768, 10885, 111, 116, 59, 32768, 8918, 113, 512, 103, 113, 11328, 11333, 116, 114, 59, 32768, 8922, 103, 116, 114, 59, 32768, 10891, 116, 114, 59, 32768, 8822, 105, 109, 59, 32768, 8818, 768, 105, 108, 114, 11356, 11362, 11368, 115, 104, 116, 59, 32768, 10620, 111, 111, 114, 59, 32768, 8970, 59, 32896, 55349, 56617, 512, 59, 69, 11377, 11379, 32768, 8822, 59, 32768, 10897, 562, 11386, 11405, 114, 512, 100, 117, 11391, 11394, 59, 32768, 8637, 512, 59, 108, 11399, 11401, 32768, 8636, 59, 32768, 10602, 108, 107, 59, 32768, 9604, 99, 121, 59, 32768, 1113, 1280, 59, 97, 99, 104, 116, 11425, 11427, 11432, 11440, 11446, 32768, 8810, 114, 114, 59, 32768, 8647, 111, 114, 110, 101, 114, 59, 32768, 8990, 97, 114, 100, 59, 32768, 10603, 114, 105, 59, 32768, 9722, 512, 105, 111, 11456, 11462, 100, 111, 116, 59, 32768, 320, 117, 115, 116, 512, 59, 97, 11470, 11472, 32768, 9136, 99, 104, 101, 59, 32768, 9136, 1024, 69, 97, 101, 115, 11487, 11490, 11504, 11521, 59, 32768, 8808, 112, 512, 59, 112, 11496, 11498, 32768, 10889, 114, 111, 120, 59, 32768, 10889, 512, 59, 113, 11509, 11511, 32768, 10887, 512, 59, 113, 11516, 11518, 32768, 10887, 59, 32768, 8808, 105, 109, 59, 32768, 8934, 2048, 97, 98, 110, 111, 112, 116, 119, 122, 11543, 11556, 11561, 11616, 11640, 11660, 11667, 11680, 512, 110, 114, 11548, 11552, 103, 59, 32768, 10220, 114, 59, 32768, 8701, 114, 107, 59, 32768, 10214, 103, 768, 108, 109, 114, 11569, 11596, 11604, 101, 102, 116, 512, 97, 114, 11577, 11584, 114, 114, 111, 119, 59, 32768, 10229, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 10231, 97, 112, 115, 116, 111, 59, 32768, 10236, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 10230, 112, 97, 114, 114, 111, 119, 512, 108, 114, 11627, 11633, 101, 102, 116, 59, 32768, 8619, 105, 103, 104, 116, 59, 32768, 8620, 768, 97, 102, 108, 11647, 11651, 11655, 114, 59, 32768, 10629, 59, 32896, 55349, 56669, 117, 115, 59, 32768, 10797, 105, 109, 101, 115, 59, 32768, 10804, 562, 11671, 11676, 115, 116, 59, 32768, 8727, 97, 114, 59, 32768, 95, 768, 59, 101, 102, 11687, 11689, 11695, 32768, 9674, 110, 103, 101, 59, 32768, 9674, 59, 32768, 10731, 97, 114, 512, 59, 108, 11705, 11707, 32768, 40, 116, 59, 32768, 10643, 1280, 97, 99, 104, 109, 116, 11722, 11727, 11735, 11747, 11750, 114, 114, 59, 32768, 8646, 111, 114, 110, 101, 114, 59, 32768, 8991, 97, 114, 512, 59, 100, 11742, 11744, 32768, 8651, 59, 32768, 10605, 59, 32768, 8206, 114, 105, 59, 32768, 8895, 1536, 97, 99, 104, 105, 113, 116, 11768, 11774, 11779, 11782, 11798, 11817, 113, 117, 111, 59, 32768, 8249, 114, 59, 32896, 55349, 56513, 59, 32768, 8624, 109, 768, 59, 101, 103, 11790, 11792, 11795, 32768, 8818, 59, 32768, 10893, 59, 32768, 10895, 512, 98, 117, 11803, 11806, 59, 32768, 91, 111, 512, 59, 114, 11812, 11814, 32768, 8216, 59, 32768, 8218, 114, 111, 107, 59, 32768, 322, 34816, 60, 59, 99, 100, 104, 105, 108, 113, 114, 11841, 11843, 11855, 11860, 11866, 11872, 11878, 11885, 32768, 60, 512, 99, 105, 11848, 11851, 59, 32768, 10918, 114, 59, 32768, 10873, 111, 116, 59, 32768, 8918, 114, 101, 101, 59, 32768, 8907, 109, 101, 115, 59, 32768, 8905, 97, 114, 114, 59, 32768, 10614, 117, 101, 115, 116, 59, 32768, 10875, 512, 80, 105, 11890, 11895, 97, 114, 59, 32768, 10646, 768, 59, 101, 102, 11902, 11904, 11907, 32768, 9667, 59, 32768, 8884, 59, 32768, 9666, 114, 512, 100, 117, 11916, 11923, 115, 104, 97, 114, 59, 32768, 10570, 104, 97, 114, 59, 32768, 10598, 512, 101, 110, 11934, 11944, 114, 116, 110, 101, 113, 113, 59, 32896, 8808, 65024, 69, 59, 32896, 8808, 65024, 3584, 68, 97, 99, 100, 101, 102, 104, 105, 108, 110, 111, 112, 115, 117, 11978, 11984, 12061, 12075, 12081, 12095, 12100, 12104, 12170, 12181, 12188, 12204, 12207, 12223, 68, 111, 116, 59, 32768, 8762, 1024, 99, 108, 112, 114, 11993, 11999, 12019, 12055, 114, 33024, 175, 59, 32768, 175, 512, 101, 116, 12004, 12007, 59, 32768, 9794, 512, 59, 101, 12012, 12014, 32768, 10016, 115, 101, 59, 32768, 10016, 512, 59, 115, 12024, 12026, 32768, 8614, 116, 111, 1024, 59, 100, 108, 117, 12037, 12039, 12045, 12051, 32768, 8614, 111, 119, 110, 59, 32768, 8615, 101, 102, 116, 59, 32768, 8612, 112, 59, 32768, 8613, 107, 101, 114, 59, 32768, 9646, 512, 111, 121, 12066, 12072, 109, 109, 97, 59, 32768, 10793, 59, 32768, 1084, 97, 115, 104, 59, 32768, 8212, 97, 115, 117, 114, 101, 100, 97, 110, 103, 108, 101, 59, 32768, 8737, 114, 59, 32896, 55349, 56618, 111, 59, 32768, 8487, 768, 99, 100, 110, 12111, 12118, 12146, 114, 111, 33024, 181, 59, 32768, 181, 1024, 59, 97, 99, 100, 12127, 12129, 12134, 12139, 32768, 8739, 115, 116, 59, 32768, 42, 105, 114, 59, 32768, 10992, 111, 116, 33024, 183, 59, 32768, 183, 117, 115, 768, 59, 98, 100, 12155, 12157, 12160, 32768, 8722, 59, 32768, 8863, 512, 59, 117, 12165, 12167, 32768, 8760, 59, 32768, 10794, 564, 12174, 12178, 112, 59, 32768, 10971, 114, 59, 32768, 8230, 112, 108, 117, 115, 59, 32768, 8723, 512, 100, 112, 12193, 12199, 101, 108, 115, 59, 32768, 8871, 102, 59, 32896, 55349, 56670, 59, 32768, 8723, 512, 99, 116, 12212, 12217, 114, 59, 32896, 55349, 56514, 112, 111, 115, 59, 32768, 8766, 768, 59, 108, 109, 12230, 12232, 12240, 32768, 956, 116, 105, 109, 97, 112, 59, 32768, 8888, 97, 112, 59, 32768, 8888, 6144, 71, 76, 82, 86, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 109, 111, 112, 114, 115, 116, 117, 118, 119, 12294, 12315, 12364, 12376, 12393, 12472, 12496, 12547, 12553, 12636, 12641, 12703, 12725, 12747, 12752, 12876, 12881, 12957, 13033, 13089, 13294, 13359, 13384, 13499, 512, 103, 116, 12299, 12303, 59, 32896, 8921, 824, 512, 59, 118, 12308, 12311, 32896, 8811, 8402, 59, 32896, 8811, 824, 768, 101, 108, 116, 12322, 12348, 12352, 102, 116, 512, 97, 114, 12329, 12336, 114, 114, 111, 119, 59, 32768, 8653, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8654, 59, 32896, 8920, 824, 512, 59, 118, 12357, 12360, 32896, 8810, 8402, 59, 32896, 8810, 824, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8655, 512, 68, 100, 12381, 12387, 97, 115, 104, 59, 32768, 8879, 97, 115, 104, 59, 32768, 8878, 1280, 98, 99, 110, 112, 116, 12404, 12409, 12415, 12420, 12452, 108, 97, 59, 32768, 8711, 117, 116, 101, 59, 32768, 324, 103, 59, 32896, 8736, 8402, 1280, 59, 69, 105, 111, 112, 12431, 12433, 12437, 12442, 12446, 32768, 8777, 59, 32896, 10864, 824, 100, 59, 32896, 8779, 824, 115, 59, 32768, 329, 114, 111, 120, 59, 32768, 8777, 117, 114, 512, 59, 97, 12459, 12461, 32768, 9838, 108, 512, 59, 115, 12467, 12469, 32768, 9838, 59, 32768, 8469, 836, 12477, 0, 12483, 112, 33024, 160, 59, 32768, 160, 109, 112, 512, 59, 101, 12489, 12492, 32896, 8782, 824, 59, 32896, 8783, 824, 1280, 97, 101, 111, 117, 121, 12507, 12519, 12525, 12540, 12544, 833, 12512, 0, 12515, 59, 32768, 10819, 111, 110, 59, 32768, 328, 100, 105, 108, 59, 32768, 326, 110, 103, 512, 59, 100, 12532, 12534, 32768, 8775, 111, 116, 59, 32896, 10861, 824, 112, 59, 32768, 10818, 59, 32768, 1085, 97, 115, 104, 59, 32768, 8211, 1792, 59, 65, 97, 100, 113, 115, 120, 12568, 12570, 12575, 12596, 12602, 12608, 12623, 32768, 8800, 114, 114, 59, 32768, 8663, 114, 512, 104, 114, 12581, 12585, 107, 59, 32768, 10532, 512, 59, 111, 12590, 12592, 32768, 8599, 119, 59, 32768, 8599, 111, 116, 59, 32896, 8784, 824, 117, 105, 118, 59, 32768, 8802, 512, 101, 105, 12613, 12618, 97, 114, 59, 32768, 10536, 109, 59, 32896, 8770, 824, 105, 115, 116, 512, 59, 115, 12631, 12633, 32768, 8708, 59, 32768, 8708, 114, 59, 32896, 55349, 56619, 1024, 69, 101, 115, 116, 12650, 12654, 12688, 12693, 59, 32896, 8807, 824, 768, 59, 113, 115, 12661, 12663, 12684, 32768, 8817, 768, 59, 113, 115, 12670, 12672, 12676, 32768, 8817, 59, 32896, 8807, 824, 108, 97, 110, 116, 59, 32896, 10878, 824, 59, 32896, 10878, 824, 105, 109, 59, 32768, 8821, 512, 59, 114, 12698, 12700, 32768, 8815, 59, 32768, 8815, 768, 65, 97, 112, 12710, 12715, 12720, 114, 114, 59, 32768, 8654, 114, 114, 59, 32768, 8622, 97, 114, 59, 32768, 10994, 768, 59, 115, 118, 12732, 12734, 12744, 32768, 8715, 512, 59, 100, 12739, 12741, 32768, 8956, 59, 32768, 8954, 59, 32768, 8715, 99, 121, 59, 32768, 1114, 1792, 65, 69, 97, 100, 101, 115, 116, 12767, 12772, 12776, 12781, 12785, 12853, 12858, 114, 114, 59, 32768, 8653, 59, 32896, 8806, 824, 114, 114, 59, 32768, 8602, 114, 59, 32768, 8229, 1024, 59, 102, 113, 115, 12794, 12796, 12821, 12842, 32768, 8816, 116, 512, 97, 114, 12802, 12809, 114, 114, 111, 119, 59, 32768, 8602, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8622, 768, 59, 113, 115, 12828, 12830, 12834, 32768, 8816, 59, 32896, 8806, 824, 108, 97, 110, 116, 59, 32896, 10877, 824, 512, 59, 115, 12847, 12850, 32896, 10877, 824, 59, 32768, 8814, 105, 109, 59, 32768, 8820, 512, 59, 114, 12863, 12865, 32768, 8814, 105, 512, 59, 101, 12871, 12873, 32768, 8938, 59, 32768, 8940, 105, 100, 59, 32768, 8740, 512, 112, 116, 12886, 12891, 102, 59, 32896, 55349, 56671, 33536, 172, 59, 105, 110, 12899, 12901, 12936, 32768, 172, 110, 1024, 59, 69, 100, 118, 12911, 12913, 12917, 12923, 32768, 8713, 59, 32896, 8953, 824, 111, 116, 59, 32896, 8949, 824, 818, 12928, 12931, 12934, 59, 32768, 8713, 59, 32768, 8951, 59, 32768, 8950, 105, 512, 59, 118, 12942, 12944, 32768, 8716, 818, 12949, 12952, 12955, 59, 32768, 8716, 59, 32768, 8958, 59, 32768, 8957, 768, 97, 111, 114, 12964, 12992, 12999, 114, 1024, 59, 97, 115, 116, 12974, 12976, 12983, 12988, 32768, 8742, 108, 108, 101, 108, 59, 32768, 8742, 108, 59, 32896, 11005, 8421, 59, 32896, 8706, 824, 108, 105, 110, 116, 59, 32768, 10772, 768, 59, 99, 101, 13006, 13008, 13013, 32768, 8832, 117, 101, 59, 32768, 8928, 512, 59, 99, 13018, 13021, 32896, 10927, 824, 512, 59, 101, 13026, 13028, 32768, 8832, 113, 59, 32896, 10927, 824, 1024, 65, 97, 105, 116, 13042, 13047, 13066, 13077, 114, 114, 59, 32768, 8655, 114, 114, 768, 59, 99, 119, 13056, 13058, 13062, 32768, 8603, 59, 32896, 10547, 824, 59, 32896, 8605, 824, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8603, 114, 105, 512, 59, 101, 13084, 13086, 32768, 8939, 59, 32768, 8941, 1792, 99, 104, 105, 109, 112, 113, 117, 13104, 13128, 13151, 13169, 13174, 13179, 13194, 1024, 59, 99, 101, 114, 13113, 13115, 13120, 13124, 32768, 8833, 117, 101, 59, 32768, 8929, 59, 32896, 10928, 824, 59, 32896, 55349, 56515, 111, 114, 116, 1086, 13137, 0, 0, 13142, 105, 100, 59, 32768, 8740, 97, 114, 97, 108, 108, 101, 108, 59, 32768, 8742, 109, 512, 59, 101, 13157, 13159, 32768, 8769, 512, 59, 113, 13164, 13166, 32768, 8772, 59, 32768, 8772, 105, 100, 59, 32768, 8740, 97, 114, 59, 32768, 8742, 115, 117, 512, 98, 112, 13186, 13190, 101, 59, 32768, 8930, 101, 59, 32768, 8931, 768, 98, 99, 112, 13201, 13241, 13254, 1024, 59, 69, 101, 115, 13210, 13212, 13216, 13219, 32768, 8836, 59, 32896, 10949, 824, 59, 32768, 8840, 101, 116, 512, 59, 101, 13226, 13229, 32896, 8834, 8402, 113, 512, 59, 113, 13235, 13237, 32768, 8840, 59, 32896, 10949, 824, 99, 512, 59, 101, 13247, 13249, 32768, 8833, 113, 59, 32896, 10928, 824, 1024, 59, 69, 101, 115, 13263, 13265, 13269, 13272, 32768, 8837, 59, 32896, 10950, 824, 59, 32768, 8841, 101, 116, 512, 59, 101, 13279, 13282, 32896, 8835, 8402, 113, 512, 59, 113, 13288, 13290, 32768, 8841, 59, 32896, 10950, 824, 1024, 103, 105, 108, 114, 13303, 13307, 13315, 13319, 108, 59, 32768, 8825, 108, 100, 101, 33024, 241, 59, 32768, 241, 103, 59, 32768, 8824, 105, 97, 110, 103, 108, 101, 512, 108, 114, 13330, 13344, 101, 102, 116, 512, 59, 101, 13338, 13340, 32768, 8938, 113, 59, 32768, 8940, 105, 103, 104, 116, 512, 59, 101, 13353, 13355, 32768, 8939, 113, 59, 32768, 8941, 512, 59, 109, 13364, 13366, 32768, 957, 768, 59, 101, 115, 13373, 13375, 13380, 32768, 35, 114, 111, 59, 32768, 8470, 112, 59, 32768, 8199, 2304, 68, 72, 97, 100, 103, 105, 108, 114, 115, 13403, 13409, 13415, 13420, 13426, 13439, 13446, 13476, 13493, 97, 115, 104, 59, 32768, 8877, 97, 114, 114, 59, 32768, 10500, 112, 59, 32896, 8781, 8402, 97, 115, 104, 59, 32768, 8876, 512, 101, 116, 13431, 13435, 59, 32896, 8805, 8402, 59, 32896, 62, 8402, 110, 102, 105, 110, 59, 32768, 10718, 768, 65, 101, 116, 13453, 13458, 13462, 114, 114, 59, 32768, 10498, 59, 32896, 8804, 8402, 512, 59, 114, 13467, 13470, 32896, 60, 8402, 105, 101, 59, 32896, 8884, 8402, 512, 65, 116, 13481, 13486, 114, 114, 59, 32768, 10499, 114, 105, 101, 59, 32896, 8885, 8402, 105, 109, 59, 32896, 8764, 8402, 768, 65, 97, 110, 13506, 13511, 13532, 114, 114, 59, 32768, 8662, 114, 512, 104, 114, 13517, 13521, 107, 59, 32768, 10531, 512, 59, 111, 13526, 13528, 32768, 8598, 119, 59, 32768, 8598, 101, 97, 114, 59, 32768, 10535, 9252, 13576, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13579, 0, 13596, 13617, 13653, 13659, 13673, 13695, 13708, 0, 0, 13713, 13750, 0, 13788, 13794, 0, 13815, 13890, 13913, 13937, 13944, 59, 32768, 9416, 512, 99, 115, 13583, 13591, 117, 116, 101, 33024, 243, 59, 32768, 243, 116, 59, 32768, 8859, 512, 105, 121, 13600, 13613, 114, 512, 59, 99, 13606, 13608, 32768, 8858, 33024, 244, 59, 32768, 244, 59, 32768, 1086, 1280, 97, 98, 105, 111, 115, 13627, 13632, 13638, 13642, 13646, 115, 104, 59, 32768, 8861, 108, 97, 99, 59, 32768, 337, 118, 59, 32768, 10808, 116, 59, 32768, 8857, 111, 108, 100, 59, 32768, 10684, 108, 105, 103, 59, 32768, 339, 512, 99, 114, 13663, 13668, 105, 114, 59, 32768, 10687, 59, 32896, 55349, 56620, 1600, 13680, 0, 0, 13684, 0, 13692, 110, 59, 32768, 731, 97, 118, 101, 33024, 242, 59, 32768, 242, 59, 32768, 10689, 512, 98, 109, 13699, 13704, 97, 114, 59, 32768, 10677, 59, 32768, 937, 110, 116, 59, 32768, 8750, 1024, 97, 99, 105, 116, 13721, 13726, 13741, 13746, 114, 114, 59, 32768, 8634, 512, 105, 114, 13731, 13735, 114, 59, 32768, 10686, 111, 115, 115, 59, 32768, 10683, 110, 101, 59, 32768, 8254, 59, 32768, 10688, 768, 97, 101, 105, 13756, 13761, 13766, 99, 114, 59, 32768, 333, 103, 97, 59, 32768, 969, 768, 99, 100, 110, 13773, 13779, 13782, 114, 111, 110, 59, 32768, 959, 59, 32768, 10678, 117, 115, 59, 32768, 8854, 112, 102, 59, 32896, 55349, 56672, 768, 97, 101, 108, 13800, 13804, 13809, 114, 59, 32768, 10679, 114, 112, 59, 32768, 10681, 117, 115, 59, 32768, 8853, 1792, 59, 97, 100, 105, 111, 115, 118, 13829, 13831, 13836, 13869, 13875, 13879, 13886, 32768, 8744, 114, 114, 59, 32768, 8635, 1024, 59, 101, 102, 109, 13845, 13847, 13859, 13864, 32768, 10845, 114, 512, 59, 111, 13853, 13855, 32768, 8500, 102, 59, 32768, 8500, 33024, 170, 59, 32768, 170, 33024, 186, 59, 32768, 186, 103, 111, 102, 59, 32768, 8886, 114, 59, 32768, 10838, 108, 111, 112, 101, 59, 32768, 10839, 59, 32768, 10843, 768, 99, 108, 111, 13896, 13900, 13908, 114, 59, 32768, 8500, 97, 115, 104, 33024, 248, 59, 32768, 248, 108, 59, 32768, 8856, 105, 573, 13917, 13924, 100, 101, 33024, 245, 59, 32768, 245, 101, 115, 512, 59, 97, 13930, 13932, 32768, 8855, 115, 59, 32768, 10806, 109, 108, 33024, 246, 59, 32768, 246, 98, 97, 114, 59, 32768, 9021, 5426, 13972, 0, 14013, 0, 14017, 14053, 0, 14058, 14086, 0, 0, 14107, 14199, 0, 14202, 0, 0, 14229, 14425, 0, 14438, 114, 1024, 59, 97, 115, 116, 13981, 13983, 13997, 14009, 32768, 8741, 33280, 182, 59, 108, 13989, 13991, 32768, 182, 108, 101, 108, 59, 32768, 8741, 1082, 14003, 0, 0, 14007, 109, 59, 32768, 10995, 59, 32768, 11005, 59, 32768, 8706, 121, 59, 32768, 1087, 114, 1280, 99, 105, 109, 112, 116, 14028, 14033, 14038, 14043, 14046, 110, 116, 59, 32768, 37, 111, 100, 59, 32768, 46, 105, 108, 59, 32768, 8240, 59, 32768, 8869, 101, 110, 107, 59, 32768, 8241, 114, 59, 32896, 55349, 56621, 768, 105, 109, 111, 14064, 14074, 14080, 512, 59, 118, 14069, 14071, 32768, 966, 59, 32768, 981, 109, 97, 116, 59, 32768, 8499, 110, 101, 59, 32768, 9742, 768, 59, 116, 118, 14092, 14094, 14103, 32768, 960, 99, 104, 102, 111, 114, 107, 59, 32768, 8916, 59, 32768, 982, 512, 97, 117, 14111, 14132, 110, 512, 99, 107, 14117, 14128, 107, 512, 59, 104, 14123, 14125, 32768, 8463, 59, 32768, 8462, 118, 59, 32768, 8463, 115, 2304, 59, 97, 98, 99, 100, 101, 109, 115, 116, 14152, 14154, 14160, 14163, 14168, 14179, 14182, 14188, 14193, 32768, 43, 99, 105, 114, 59, 32768, 10787, 59, 32768, 8862, 105, 114, 59, 32768, 10786, 512, 111, 117, 14173, 14176, 59, 32768, 8724, 59, 32768, 10789, 59, 32768, 10866, 110, 33024, 177, 59, 32768, 177, 105, 109, 59, 32768, 10790, 119, 111, 59, 32768, 10791, 59, 32768, 177, 768, 105, 112, 117, 14208, 14216, 14221, 110, 116, 105, 110, 116, 59, 32768, 10773, 102, 59, 32896, 55349, 56673, 110, 100, 33024, 163, 59, 32768, 163, 2560, 59, 69, 97, 99, 101, 105, 110, 111, 115, 117, 14249, 14251, 14254, 14258, 14263, 14336, 14348, 14367, 14413, 14418, 32768, 8826, 59, 32768, 10931, 112, 59, 32768, 10935, 117, 101, 59, 32768, 8828, 512, 59, 99, 14268, 14270, 32768, 10927, 1536, 59, 97, 99, 101, 110, 115, 14283, 14285, 14293, 14302, 14306, 14331, 32768, 8826, 112, 112, 114, 111, 120, 59, 32768, 10935, 117, 114, 108, 121, 101, 113, 59, 32768, 8828, 113, 59, 32768, 10927, 768, 97, 101, 115, 14313, 14321, 14326, 112, 112, 114, 111, 120, 59, 32768, 10937, 113, 113, 59, 32768, 10933, 105, 109, 59, 32768, 8936, 105, 109, 59, 32768, 8830, 109, 101, 512, 59, 115, 14343, 14345, 32768, 8242, 59, 32768, 8473, 768, 69, 97, 115, 14355, 14358, 14362, 59, 32768, 10933, 112, 59, 32768, 10937, 105, 109, 59, 32768, 8936, 768, 100, 102, 112, 14374, 14377, 14402, 59, 32768, 8719, 768, 97, 108, 115, 14384, 14390, 14396, 108, 97, 114, 59, 32768, 9006, 105, 110, 101, 59, 32768, 8978, 117, 114, 102, 59, 32768, 8979, 512, 59, 116, 14407, 14409, 32768, 8733, 111, 59, 32768, 8733, 105, 109, 59, 32768, 8830, 114, 101, 108, 59, 32768, 8880, 512, 99, 105, 14429, 14434, 114, 59, 32896, 55349, 56517, 59, 32768, 968, 110, 99, 115, 112, 59, 32768, 8200, 1536, 102, 105, 111, 112, 115, 117, 14457, 14462, 14467, 14473, 14480, 14486, 114, 59, 32896, 55349, 56622, 110, 116, 59, 32768, 10764, 112, 102, 59, 32896, 55349, 56674, 114, 105, 109, 101, 59, 32768, 8279, 99, 114, 59, 32896, 55349, 56518, 768, 97, 101, 111, 14493, 14513, 14526, 116, 512, 101, 105, 14499, 14508, 114, 110, 105, 111, 110, 115, 59, 32768, 8461, 110, 116, 59, 32768, 10774, 115, 116, 512, 59, 101, 14520, 14522, 32768, 63, 113, 59, 32768, 8799, 116, 33024, 34, 59, 32768, 34, 5376, 65, 66, 72, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 110, 111, 112, 114, 115, 116, 117, 120, 14575, 14597, 14603, 14608, 14775, 14829, 14865, 14901, 14943, 14966, 15000, 15139, 15159, 15176, 15182, 15236, 15261, 15267, 15309, 15352, 15360, 768, 97, 114, 116, 14582, 14587, 14591, 114, 114, 59, 32768, 8667, 114, 59, 32768, 8658, 97, 105, 108, 59, 32768, 10524, 97, 114, 114, 59, 32768, 10511, 97, 114, 59, 32768, 10596, 1792, 99, 100, 101, 110, 113, 114, 116, 14623, 14637, 14642, 14650, 14672, 14679, 14751, 512, 101, 117, 14628, 14632, 59, 32896, 8765, 817, 116, 101, 59, 32768, 341, 105, 99, 59, 32768, 8730, 109, 112, 116, 121, 118, 59, 32768, 10675, 103, 1024, 59, 100, 101, 108, 14660, 14662, 14665, 14668, 32768, 10217, 59, 32768, 10642, 59, 32768, 10661, 101, 59, 32768, 10217, 117, 111, 33024, 187, 59, 32768, 187, 114, 2816, 59, 97, 98, 99, 102, 104, 108, 112, 115, 116, 119, 14703, 14705, 14709, 14720, 14723, 14727, 14731, 14735, 14739, 14744, 14748, 32768, 8594, 112, 59, 32768, 10613, 512, 59, 102, 14714, 14716, 32768, 8677, 115, 59, 32768, 10528, 59, 32768, 10547, 115, 59, 32768, 10526, 107, 59, 32768, 8618, 112, 59, 32768, 8620, 108, 59, 32768, 10565, 105, 109, 59, 32768, 10612, 108, 59, 32768, 8611, 59, 32768, 8605, 512, 97, 105, 14756, 14761, 105, 108, 59, 32768, 10522, 111, 512, 59, 110, 14767, 14769, 32768, 8758, 97, 108, 115, 59, 32768, 8474, 768, 97, 98, 114, 14782, 14787, 14792, 114, 114, 59, 32768, 10509, 114, 107, 59, 32768, 10099, 512, 97, 107, 14797, 14809, 99, 512, 101, 107, 14803, 14806, 59, 32768, 125, 59, 32768, 93, 512, 101, 115, 14814, 14817, 59, 32768, 10636, 108, 512, 100, 117, 14823, 14826, 59, 32768, 10638, 59, 32768, 10640, 1024, 97, 101, 117, 121, 14838, 14844, 14858, 14862, 114, 111, 110, 59, 32768, 345, 512, 100, 105, 14849, 14854, 105, 108, 59, 32768, 343, 108, 59, 32768, 8969, 98, 59, 32768, 125, 59, 32768, 1088, 1024, 99, 108, 113, 115, 14874, 14878, 14885, 14897, 97, 59, 32768, 10551, 100, 104, 97, 114, 59, 32768, 10601, 117, 111, 512, 59, 114, 14892, 14894, 32768, 8221, 59, 32768, 8221, 104, 59, 32768, 8627, 768, 97, 99, 103, 14908, 14934, 14938, 108, 1024, 59, 105, 112, 115, 14918, 14920, 14925, 14931, 32768, 8476, 110, 101, 59, 32768, 8475, 97, 114, 116, 59, 32768, 8476, 59, 32768, 8477, 116, 59, 32768, 9645, 33024, 174, 59, 32768, 174, 768, 105, 108, 114, 14950, 14956, 14962, 115, 104, 116, 59, 32768, 10621, 111, 111, 114, 59, 32768, 8971, 59, 32896, 55349, 56623, 512, 97, 111, 14971, 14990, 114, 512, 100, 117, 14977, 14980, 59, 32768, 8641, 512, 59, 108, 14985, 14987, 32768, 8640, 59, 32768, 10604, 512, 59, 118, 14995, 14997, 32768, 961, 59, 32768, 1009, 768, 103, 110, 115, 15007, 15123, 15127, 104, 116, 1536, 97, 104, 108, 114, 115, 116, 15022, 15039, 15060, 15086, 15099, 15111, 114, 114, 111, 119, 512, 59, 116, 15031, 15033, 32768, 8594, 97, 105, 108, 59, 32768, 8611, 97, 114, 112, 111, 111, 110, 512, 100, 117, 15050, 15056, 111, 119, 110, 59, 32768, 8641, 112, 59, 32768, 8640, 101, 102, 116, 512, 97, 104, 15068, 15076, 114, 114, 111, 119, 115, 59, 32768, 8644, 97, 114, 112, 111, 111, 110, 115, 59, 32768, 8652, 105, 103, 104, 116, 97, 114, 114, 111, 119, 115, 59, 32768, 8649, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 32768, 8605, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 32768, 8908, 103, 59, 32768, 730, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 32768, 8787, 768, 97, 104, 109, 15146, 15151, 15156, 114, 114, 59, 32768, 8644, 97, 114, 59, 32768, 8652, 59, 32768, 8207, 111, 117, 115, 116, 512, 59, 97, 15168, 15170, 32768, 9137, 99, 104, 101, 59, 32768, 9137, 109, 105, 100, 59, 32768, 10990, 1024, 97, 98, 112, 116, 15191, 15204, 15209, 15229, 512, 110, 114, 15196, 15200, 103, 59, 32768, 10221, 114, 59, 32768, 8702, 114, 107, 59, 32768, 10215, 768, 97, 102, 108, 15216, 15220, 15224, 114, 59, 32768, 10630, 59, 32896, 55349, 56675, 117, 115, 59, 32768, 10798, 105, 109, 101, 115, 59, 32768, 10805, 512, 97, 112, 15241, 15253, 114, 512, 59, 103, 15247, 15249, 32768, 41, 116, 59, 32768, 10644, 111, 108, 105, 110, 116, 59, 32768, 10770, 97, 114, 114, 59, 32768, 8649, 1024, 97, 99, 104, 113, 15276, 15282, 15287, 15290, 113, 117, 111, 59, 32768, 8250, 114, 59, 32896, 55349, 56519, 59, 32768, 8625, 512, 98, 117, 15295, 15298, 59, 32768, 93, 111, 512, 59, 114, 15304, 15306, 32768, 8217, 59, 32768, 8217, 768, 104, 105, 114, 15316, 15322, 15328, 114, 101, 101, 59, 32768, 8908, 109, 101, 115, 59, 32768, 8906, 105, 1024, 59, 101, 102, 108, 15338, 15340, 15343, 15346, 32768, 9657, 59, 32768, 8885, 59, 32768, 9656, 116, 114, 105, 59, 32768, 10702, 108, 117, 104, 97, 114, 59, 32768, 10600, 59, 32768, 8478, 6706, 15391, 15398, 15404, 15499, 15516, 15592, 0, 15606, 15660, 0, 0, 15752, 15758, 0, 15827, 15863, 15886, 16000, 16006, 16038, 16086, 0, 16467, 0, 0, 16506, 99, 117, 116, 101, 59, 32768, 347, 113, 117, 111, 59, 32768, 8218, 2560, 59, 69, 97, 99, 101, 105, 110, 112, 115, 121, 15424, 15426, 15429, 15441, 15446, 15458, 15463, 15482, 15490, 15495, 32768, 8827, 59, 32768, 10932, 833, 15434, 0, 15437, 59, 32768, 10936, 111, 110, 59, 32768, 353, 117, 101, 59, 32768, 8829, 512, 59, 100, 15451, 15453, 32768, 10928, 105, 108, 59, 32768, 351, 114, 99, 59, 32768, 349, 768, 69, 97, 115, 15470, 15473, 15477, 59, 32768, 10934, 112, 59, 32768, 10938, 105, 109, 59, 32768, 8937, 111, 108, 105, 110, 116, 59, 32768, 10771, 105, 109, 59, 32768, 8831, 59, 32768, 1089, 111, 116, 768, 59, 98, 101, 15507, 15509, 15512, 32768, 8901, 59, 32768, 8865, 59, 32768, 10854, 1792, 65, 97, 99, 109, 115, 116, 120, 15530, 15535, 15556, 15562, 15566, 15572, 15587, 114, 114, 59, 32768, 8664, 114, 512, 104, 114, 15541, 15545, 107, 59, 32768, 10533, 512, 59, 111, 15550, 15552, 32768, 8600, 119, 59, 32768, 8600, 116, 33024, 167, 59, 32768, 167, 105, 59, 32768, 59, 119, 97, 114, 59, 32768, 10537, 109, 512, 105, 110, 15578, 15584, 110, 117, 115, 59, 32768, 8726, 59, 32768, 8726, 116, 59, 32768, 10038, 114, 512, 59, 111, 15597, 15600, 32896, 55349, 56624, 119, 110, 59, 32768, 8994, 1024, 97, 99, 111, 121, 15614, 15619, 15632, 15654, 114, 112, 59, 32768, 9839, 512, 104, 121, 15624, 15629, 99, 121, 59, 32768, 1097, 59, 32768, 1096, 114, 116, 1086, 15640, 0, 0, 15645, 105, 100, 59, 32768, 8739, 97, 114, 97, 108, 108, 101, 108, 59, 32768, 8741, 33024, 173, 59, 32768, 173, 512, 103, 109, 15664, 15681, 109, 97, 768, 59, 102, 118, 15673, 15675, 15678, 32768, 963, 59, 32768, 962, 59, 32768, 962, 2048, 59, 100, 101, 103, 108, 110, 112, 114, 15698, 15700, 15705, 15715, 15725, 15735, 15739, 15745, 32768, 8764, 111, 116, 59, 32768, 10858, 512, 59, 113, 15710, 15712, 32768, 8771, 59, 32768, 8771, 512, 59, 69, 15720, 15722, 32768, 10910, 59, 32768, 10912, 512, 59, 69, 15730, 15732, 32768, 10909, 59, 32768, 10911, 101, 59, 32768, 8774, 108, 117, 115, 59, 32768, 10788, 97, 114, 114, 59, 32768, 10610, 97, 114, 114, 59, 32768, 8592, 1024, 97, 101, 105, 116, 15766, 15788, 15796, 15808, 512, 108, 115, 15771, 15783, 108, 115, 101, 116, 109, 105, 110, 117, 115, 59, 32768, 8726, 104, 112, 59, 32768, 10803, 112, 97, 114, 115, 108, 59, 32768, 10724, 512, 100, 108, 15801, 15804, 59, 32768, 8739, 101, 59, 32768, 8995, 512, 59, 101, 15813, 15815, 32768, 10922, 512, 59, 115, 15820, 15822, 32768, 10924, 59, 32896, 10924, 65024, 768, 102, 108, 112, 15833, 15839, 15857, 116, 99, 121, 59, 32768, 1100, 512, 59, 98, 15844, 15846, 32768, 47, 512, 59, 97, 15851, 15853, 32768, 10692, 114, 59, 32768, 9023, 102, 59, 32896, 55349, 56676, 97, 512, 100, 114, 15868, 15882, 101, 115, 512, 59, 117, 15875, 15877, 32768, 9824, 105, 116, 59, 32768, 9824, 59, 32768, 8741, 768, 99, 115, 117, 15892, 15921, 15977, 512, 97, 117, 15897, 15909, 112, 512, 59, 115, 15903, 15905, 32768, 8851, 59, 32896, 8851, 65024, 112, 512, 59, 115, 15915, 15917, 32768, 8852, 59, 32896, 8852, 65024, 117, 512, 98, 112, 15927, 15952, 768, 59, 101, 115, 15934, 15936, 15939, 32768, 8847, 59, 32768, 8849, 101, 116, 512, 59, 101, 15946, 15948, 32768, 8847, 113, 59, 32768, 8849, 768, 59, 101, 115, 15959, 15961, 15964, 32768, 8848, 59, 32768, 8850, 101, 116, 512, 59, 101, 15971, 15973, 32768, 8848, 113, 59, 32768, 8850, 768, 59, 97, 102, 15984, 15986, 15996, 32768, 9633, 114, 566, 15991, 15994, 59, 32768, 9633, 59, 32768, 9642, 59, 32768, 9642, 97, 114, 114, 59, 32768, 8594, 1024, 99, 101, 109, 116, 16014, 16019, 16025, 16031, 114, 59, 32896, 55349, 56520, 116, 109, 110, 59, 32768, 8726, 105, 108, 101, 59, 32768, 8995, 97, 114, 102, 59, 32768, 8902, 512, 97, 114, 16042, 16053, 114, 512, 59, 102, 16048, 16050, 32768, 9734, 59, 32768, 9733, 512, 97, 110, 16058, 16081, 105, 103, 104, 116, 512, 101, 112, 16067, 16076, 112, 115, 105, 108, 111, 110, 59, 32768, 1013, 104, 105, 59, 32768, 981, 115, 59, 32768, 175, 1280, 98, 99, 109, 110, 112, 16096, 16221, 16288, 16291, 16295, 2304, 59, 69, 100, 101, 109, 110, 112, 114, 115, 16115, 16117, 16120, 16125, 16137, 16143, 16154, 16160, 16166, 32768, 8834, 59, 32768, 10949, 111, 116, 59, 32768, 10941, 512, 59, 100, 16130, 16132, 32768, 8838, 111, 116, 59, 32768, 10947, 117, 108, 116, 59, 32768, 10945, 512, 69, 101, 16148, 16151, 59, 32768, 10955, 59, 32768, 8842, 108, 117, 115, 59, 32768, 10943, 97, 114, 114, 59, 32768, 10617, 768, 101, 105, 117, 16173, 16206, 16210, 116, 768, 59, 101, 110, 16181, 16183, 16194, 32768, 8834, 113, 512, 59, 113, 16189, 16191, 32768, 8838, 59, 32768, 10949, 101, 113, 512, 59, 113, 16201, 16203, 32768, 8842, 59, 32768, 10955, 109, 59, 32768, 10951, 512, 98, 112, 16215, 16218, 59, 32768, 10965, 59, 32768, 10963, 99, 1536, 59, 97, 99, 101, 110, 115, 16235, 16237, 16245, 16254, 16258, 16283, 32768, 8827, 112, 112, 114, 111, 120, 59, 32768, 10936, 117, 114, 108, 121, 101, 113, 59, 32768, 8829, 113, 59, 32768, 10928, 768, 97, 101, 115, 16265, 16273, 16278, 112, 112, 114, 111, 120, 59, 32768, 10938, 113, 113, 59, 32768, 10934, 105, 109, 59, 32768, 8937, 105, 109, 59, 32768, 8831, 59, 32768, 8721, 103, 59, 32768, 9834, 3328, 49, 50, 51, 59, 69, 100, 101, 104, 108, 109, 110, 112, 115, 16322, 16327, 16332, 16337, 16339, 16342, 16356, 16368, 16382, 16388, 16394, 16405, 16411, 33024, 185, 59, 32768, 185, 33024, 178, 59, 32768, 178, 33024, 179, 59, 32768, 179, 32768, 8835, 59, 32768, 10950, 512, 111, 115, 16347, 16351, 116, 59, 32768, 10942, 117, 98, 59, 32768, 10968, 512, 59, 100, 16361, 16363, 32768, 8839, 111, 116, 59, 32768, 10948, 115, 512, 111, 117, 16374, 16378, 108, 59, 32768, 10185, 98, 59, 32768, 10967, 97, 114, 114, 59, 32768, 10619, 117, 108, 116, 59, 32768, 10946, 512, 69, 101, 16399, 16402, 59, 32768, 10956, 59, 32768, 8843, 108, 117, 115, 59, 32768, 10944, 768, 101, 105, 117, 16418, 16451, 16455, 116, 768, 59, 101, 110, 16426, 16428, 16439, 32768, 8835, 113, 512, 59, 113, 16434, 16436, 32768, 8839, 59, 32768, 10950, 101, 113, 512, 59, 113, 16446, 16448, 32768, 8843, 59, 32768, 10956, 109, 59, 32768, 10952, 512, 98, 112, 16460, 16463, 59, 32768, 10964, 59, 32768, 10966, 768, 65, 97, 110, 16473, 16478, 16499, 114, 114, 59, 32768, 8665, 114, 512, 104, 114, 16484, 16488, 107, 59, 32768, 10534, 512, 59, 111, 16493, 16495, 32768, 8601, 119, 59, 32768, 8601, 119, 97, 114, 59, 32768, 10538, 108, 105, 103, 33024, 223, 59, 32768, 223, 5938, 16538, 16552, 16557, 16579, 16584, 16591, 0, 16596, 16692, 0, 0, 0, 0, 0, 16731, 16780, 0, 16787, 16908, 0, 0, 0, 16938, 1091, 16543, 0, 0, 16549, 103, 101, 116, 59, 32768, 8982, 59, 32768, 964, 114, 107, 59, 32768, 9140, 768, 97, 101, 121, 16563, 16569, 16575, 114, 111, 110, 59, 32768, 357, 100, 105, 108, 59, 32768, 355, 59, 32768, 1090, 111, 116, 59, 32768, 8411, 108, 114, 101, 99, 59, 32768, 8981, 114, 59, 32896, 55349, 56625, 1024, 101, 105, 107, 111, 16604, 16641, 16670, 16684, 835, 16609, 0, 16624, 101, 512, 52, 102, 16614, 16617, 59, 32768, 8756, 111, 114, 101, 59, 32768, 8756, 97, 768, 59, 115, 118, 16631, 16633, 16638, 32768, 952, 121, 109, 59, 32768, 977, 59, 32768, 977, 512, 99, 110, 16646, 16665, 107, 512, 97, 115, 16652, 16660, 112, 112, 114, 111, 120, 59, 32768, 8776, 105, 109, 59, 32768, 8764, 115, 112, 59, 32768, 8201, 512, 97, 115, 16675, 16679, 112, 59, 32768, 8776, 105, 109, 59, 32768, 8764, 114, 110, 33024, 254, 59, 32768, 254, 829, 16696, 16701, 16727, 100, 101, 59, 32768, 732, 101, 115, 33536, 215, 59, 98, 100, 16710, 16712, 16723, 32768, 215, 512, 59, 97, 16717, 16719, 32768, 8864, 114, 59, 32768, 10801, 59, 32768, 10800, 116, 59, 32768, 8749, 768, 101, 112, 115, 16737, 16741, 16775, 97, 59, 32768, 10536, 1024, 59, 98, 99, 102, 16750, 16752, 16757, 16762, 32768, 8868, 111, 116, 59, 32768, 9014, 105, 114, 59, 32768, 10993, 512, 59, 111, 16767, 16770, 32896, 55349, 56677, 114, 107, 59, 32768, 10970, 97, 59, 32768, 10537, 114, 105, 109, 101, 59, 32768, 8244, 768, 97, 105, 112, 16793, 16798, 16899, 100, 101, 59, 32768, 8482, 1792, 97, 100, 101, 109, 112, 115, 116, 16813, 16868, 16873, 16876, 16883, 16889, 16893, 110, 103, 108, 101, 1280, 59, 100, 108, 113, 114, 16828, 16830, 16836, 16850, 16853, 32768, 9653, 111, 119, 110, 59, 32768, 9663, 101, 102, 116, 512, 59, 101, 16844, 16846, 32768, 9667, 113, 59, 32768, 8884, 59, 32768, 8796, 105, 103, 104, 116, 512, 59, 101, 16862, 16864, 32768, 9657, 113, 59, 32768, 8885, 111, 116, 59, 32768, 9708, 59, 32768, 8796, 105, 110, 117, 115, 59, 32768, 10810, 108, 117, 115, 59, 32768, 10809, 98, 59, 32768, 10701, 105, 109, 101, 59, 32768, 10811, 101, 122, 105, 117, 109, 59, 32768, 9186, 768, 99, 104, 116, 16914, 16926, 16931, 512, 114, 121, 16919, 16923, 59, 32896, 55349, 56521, 59, 32768, 1094, 99, 121, 59, 32768, 1115, 114, 111, 107, 59, 32768, 359, 512, 105, 111, 16942, 16947, 120, 116, 59, 32768, 8812, 104, 101, 97, 100, 512, 108, 114, 16956, 16967, 101, 102, 116, 97, 114, 114, 111, 119, 59, 32768, 8606, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8608, 4608, 65, 72, 97, 98, 99, 100, 102, 103, 104, 108, 109, 111, 112, 114, 115, 116, 117, 119, 17016, 17021, 17026, 17043, 17057, 17072, 17095, 17110, 17119, 17139, 17172, 17187, 17202, 17290, 17330, 17336, 17365, 17381, 114, 114, 59, 32768, 8657, 97, 114, 59, 32768, 10595, 512, 99, 114, 17031, 17039, 117, 116, 101, 33024, 250, 59, 32768, 250, 114, 59, 32768, 8593, 114, 820, 17049, 0, 17053, 121, 59, 32768, 1118, 118, 101, 59, 32768, 365, 512, 105, 121, 17062, 17069, 114, 99, 33024, 251, 59, 32768, 251, 59, 32768, 1091, 768, 97, 98, 104, 17079, 17084, 17090, 114, 114, 59, 32768, 8645, 108, 97, 99, 59, 32768, 369, 97, 114, 59, 32768, 10606, 512, 105, 114, 17100, 17106, 115, 104, 116, 59, 32768, 10622, 59, 32896, 55349, 56626, 114, 97, 118, 101, 33024, 249, 59, 32768, 249, 562, 17123, 17135, 114, 512, 108, 114, 17128, 17131, 59, 32768, 8639, 59, 32768, 8638, 108, 107, 59, 32768, 9600, 512, 99, 116, 17144, 17167, 1088, 17150, 0, 0, 17163, 114, 110, 512, 59, 101, 17156, 17158, 32768, 8988, 114, 59, 32768, 8988, 111, 112, 59, 32768, 8975, 114, 105, 59, 32768, 9720, 512, 97, 108, 17177, 17182, 99, 114, 59, 32768, 363, 33024, 168, 59, 32768, 168, 512, 103, 112, 17192, 17197, 111, 110, 59, 32768, 371, 102, 59, 32896, 55349, 56678, 1536, 97, 100, 104, 108, 115, 117, 17215, 17222, 17233, 17257, 17262, 17280, 114, 114, 111, 119, 59, 32768, 8593, 111, 119, 110, 97, 114, 114, 111, 119, 59, 32768, 8597, 97, 114, 112, 111, 111, 110, 512, 108, 114, 17244, 17250, 101, 102, 116, 59, 32768, 8639, 105, 103, 104, 116, 59, 32768, 8638, 117, 115, 59, 32768, 8846, 105, 768, 59, 104, 108, 17270, 17272, 17275, 32768, 965, 59, 32768, 978, 111, 110, 59, 32768, 965, 112, 97, 114, 114, 111, 119, 115, 59, 32768, 8648, 768, 99, 105, 116, 17297, 17320, 17325, 1088, 17303, 0, 0, 17316, 114, 110, 512, 59, 101, 17309, 17311, 32768, 8989, 114, 59, 32768, 8989, 111, 112, 59, 32768, 8974, 110, 103, 59, 32768, 367, 114, 105, 59, 32768, 9721, 99, 114, 59, 32896, 55349, 56522, 768, 100, 105, 114, 17343, 17348, 17354, 111, 116, 59, 32768, 8944, 108, 100, 101, 59, 32768, 361, 105, 512, 59, 102, 17360, 17362, 32768, 9653, 59, 32768, 9652, 512, 97, 109, 17370, 17375, 114, 114, 59, 32768, 8648, 108, 33024, 252, 59, 32768, 252, 97, 110, 103, 108, 101, 59, 32768, 10663, 3840, 65, 66, 68, 97, 99, 100, 101, 102, 108, 110, 111, 112, 114, 115, 122, 17420, 17425, 17437, 17443, 17613, 17617, 17623, 17667, 17672, 17678, 17693, 17699, 17705, 17711, 17754, 114, 114, 59, 32768, 8661, 97, 114, 512, 59, 118, 17432, 17434, 32768, 10984, 59, 32768, 10985, 97, 115, 104, 59, 32768, 8872, 512, 110, 114, 17448, 17454, 103, 114, 116, 59, 32768, 10652, 1792, 101, 107, 110, 112, 114, 115, 116, 17469, 17478, 17485, 17494, 17515, 17526, 17578, 112, 115, 105, 108, 111, 110, 59, 32768, 1013, 97, 112, 112, 97, 59, 32768, 1008, 111, 116, 104, 105, 110, 103, 59, 32768, 8709, 768, 104, 105, 114, 17501, 17505, 17508, 105, 59, 32768, 981, 59, 32768, 982, 111, 112, 116, 111, 59, 32768, 8733, 512, 59, 104, 17520, 17522, 32768, 8597, 111, 59, 32768, 1009, 512, 105, 117, 17531, 17537, 103, 109, 97, 59, 32768, 962, 512, 98, 112, 17542, 17560, 115, 101, 116, 110, 101, 113, 512, 59, 113, 17553, 17556, 32896, 8842, 65024, 59, 32896, 10955, 65024, 115, 101, 116, 110, 101, 113, 512, 59, 113, 17571, 17574, 32896, 8843, 65024, 59, 32896, 10956, 65024, 512, 104, 114, 17583, 17589, 101, 116, 97, 59, 32768, 977, 105, 97, 110, 103, 108, 101, 512, 108, 114, 17600, 17606, 101, 102, 116, 59, 32768, 8882, 105, 103, 104, 116, 59, 32768, 8883, 121, 59, 32768, 1074, 97, 115, 104, 59, 32768, 8866, 768, 101, 108, 114, 17630, 17648, 17654, 768, 59, 98, 101, 17637, 17639, 17644, 32768, 8744, 97, 114, 59, 32768, 8891, 113, 59, 32768, 8794, 108, 105, 112, 59, 32768, 8942, 512, 98, 116, 17659, 17664, 97, 114, 59, 32768, 124, 59, 32768, 124, 114, 59, 32896, 55349, 56627, 116, 114, 105, 59, 32768, 8882, 115, 117, 512, 98, 112, 17685, 17689, 59, 32896, 8834, 8402, 59, 32896, 8835, 8402, 112, 102, 59, 32896, 55349, 56679, 114, 111, 112, 59, 32768, 8733, 116, 114, 105, 59, 32768, 8883, 512, 99, 117, 17716, 17721, 114, 59, 32896, 55349, 56523, 512, 98, 112, 17726, 17740, 110, 512, 69, 101, 17732, 17736, 59, 32896, 10955, 65024, 59, 32896, 8842, 65024, 110, 512, 69, 101, 17746, 17750, 59, 32896, 10956, 65024, 59, 32896, 8843, 65024, 105, 103, 122, 97, 103, 59, 32768, 10650, 1792, 99, 101, 102, 111, 112, 114, 115, 17777, 17783, 17815, 17820, 17826, 17829, 17842, 105, 114, 99, 59, 32768, 373, 512, 100, 105, 17788, 17809, 512, 98, 103, 17793, 17798, 97, 114, 59, 32768, 10847, 101, 512, 59, 113, 17804, 17806, 32768, 8743, 59, 32768, 8793, 101, 114, 112, 59, 32768, 8472, 114, 59, 32896, 55349, 56628, 112, 102, 59, 32896, 55349, 56680, 59, 32768, 8472, 512, 59, 101, 17834, 17836, 32768, 8768, 97, 116, 104, 59, 32768, 8768, 99, 114, 59, 32896, 55349, 56524, 5428, 17871, 17891, 0, 17897, 0, 17902, 17917, 0, 0, 17920, 17935, 17940, 17945, 0, 0, 17977, 17992, 0, 18008, 18024, 18029, 768, 97, 105, 117, 17877, 17881, 17886, 112, 59, 32768, 8898, 114, 99, 59, 32768, 9711, 112, 59, 32768, 8899, 116, 114, 105, 59, 32768, 9661, 114, 59, 32896, 55349, 56629, 512, 65, 97, 17906, 17911, 114, 114, 59, 32768, 10234, 114, 114, 59, 32768, 10231, 59, 32768, 958, 512, 65, 97, 17924, 17929, 114, 114, 59, 32768, 10232, 114, 114, 59, 32768, 10229, 97, 112, 59, 32768, 10236, 105, 115, 59, 32768, 8955, 768, 100, 112, 116, 17951, 17956, 17970, 111, 116, 59, 32768, 10752, 512, 102, 108, 17961, 17965, 59, 32896, 55349, 56681, 117, 115, 59, 32768, 10753, 105, 109, 101, 59, 32768, 10754, 512, 65, 97, 17981, 17986, 114, 114, 59, 32768, 10233, 114, 114, 59, 32768, 10230, 512, 99, 113, 17996, 18001, 114, 59, 32896, 55349, 56525, 99, 117, 112, 59, 32768, 10758, 512, 112, 116, 18012, 18018, 108, 117, 115, 59, 32768, 10756, 114, 105, 59, 32768, 9651, 101, 101, 59, 32768, 8897, 101, 100, 103, 101, 59, 32768, 8896, 2048, 97, 99, 101, 102, 105, 111, 115, 117, 18052, 18068, 18081, 18087, 18092, 18097, 18103, 18109, 99, 512, 117, 121, 18058, 18065, 116, 101, 33024, 253, 59, 32768, 253, 59, 32768, 1103, 512, 105, 121, 18073, 18078, 114, 99, 59, 32768, 375, 59, 32768, 1099, 110, 33024, 165, 59, 32768, 165, 114, 59, 32896, 55349, 56630, 99, 121, 59, 32768, 1111, 112, 102, 59, 32896, 55349, 56682, 99, 114, 59, 32896, 55349, 56526, 512, 99, 109, 18114, 18118, 121, 59, 32768, 1102, 108, 33024, 255, 59, 32768, 255, 2560, 97, 99, 100, 101, 102, 104, 105, 111, 115, 119, 18145, 18152, 18166, 18171, 18186, 18191, 18196, 18204, 18210, 18216, 99, 117, 116, 101, 59, 32768, 378, 512, 97, 121, 18157, 18163, 114, 111, 110, 59, 32768, 382, 59, 32768, 1079, 111, 116, 59, 32768, 380, 512, 101, 116, 18176, 18182, 116, 114, 102, 59, 32768, 8488, 97, 59, 32768, 950, 114, 59, 32896, 55349, 56631, 99, 121, 59, 32768, 1078, 103, 114, 97, 114, 114, 59, 32768, 8669, 112, 102, 59, 32896, 55349, 56683, 99, 114, 59, 32896, 55349, 56527, 512, 106, 110, 18221, 18224, 59, 32768, 8205, 106, 59, 32768, 8204]);


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/entities/lib/generated/decode-data-xml.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/entities/lib/generated/decode-data-xml.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// Generated using scripts/write-decode-map.ts
// prettier-ignore
exports["default"] = new Uint16Array([1024, 97, 103, 108, 113, 9, 23, 27, 31, 1086, 15, 0, 0, 19, 112, 59, 32768, 38, 111, 115, 59, 32768, 39, 116, 59, 32768, 62, 116, 59, 32768, 60, 117, 111, 116, 59, 32768, 34]);


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/htmlparser2/lib/FeedHandler.js":
/*!********************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/htmlparser2/lib/FeedHandler.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseFeed = exports.FeedHandler = exports.getFeed = void 0;
var domhandler_1 = __importDefault(__webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js"));
var domutils_1 = __webpack_require__(/*! domutils */ "./node_modules/html-to-react/node_modules/domutils/lib/index.js");
Object.defineProperty(exports, "getFeed", ({ enumerable: true, get: function () { return domutils_1.getFeed; } }));
var Parser_1 = __webpack_require__(/*! ./Parser */ "./node_modules/html-to-react/node_modules/htmlparser2/lib/Parser.js");
/** @deprecated Handler is no longer necessary; use `getFeed` or `parseFeed` instead. */
var FeedHandler = /** @class */ (function (_super) {
    __extends(FeedHandler, _super);
    /**
     *
     * @param callback
     * @param options
     */
    function FeedHandler(callback, options) {
        var _this = this;
        if (typeof callback === "object") {
            callback = undefined;
            options = callback;
        }
        _this = _super.call(this, callback, options) || this;
        return _this;
    }
    FeedHandler.prototype.onend = function () {
        var feed = (0, domutils_1.getFeed)(this.dom);
        if (feed) {
            this.feed = feed;
            this.handleCallback(null);
        }
        else {
            this.handleCallback(new Error("couldn't find root of feed"));
        }
    };
    return FeedHandler;
}(domhandler_1.default));
exports.FeedHandler = FeedHandler;
/**
 * Parse a feed.
 *
 * @param feed The feed that should be parsed, as a string.
 * @param options Optionally, options for parsing. When using this, you should set `xmlMode` to `true`.
 */
function parseFeed(feed, options) {
    if (options === void 0) { options = { xmlMode: true }; }
    var handler = new domhandler_1.default(null, options);
    new Parser_1.Parser(handler, options).end(feed);
    return (0, domutils_1.getFeed)(handler.dom);
}
exports.parseFeed = parseFeed;


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/htmlparser2/lib/Parser.js":
/*!***************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/htmlparser2/lib/Parser.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Parser = void 0;
var Tokenizer_1 = __importDefault(__webpack_require__(/*! ./Tokenizer */ "./node_modules/html-to-react/node_modules/htmlparser2/lib/Tokenizer.js"));
var formTags = new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea",
]);
var pTag = new Set(["p"]);
var tableSectionTags = new Set(["thead", "tbody"]);
var ddtTags = new Set(["dd", "dt"]);
var rtpTags = new Set(["rt", "rp"]);
var openImpliesClose = new Map([
    ["tr", new Set(["tr", "th", "td"])],
    ["th", new Set(["th"])],
    ["td", new Set(["thead", "th", "td"])],
    ["body", new Set(["head", "link", "script"])],
    ["li", new Set(["li"])],
    ["p", pTag],
    ["h1", pTag],
    ["h2", pTag],
    ["h3", pTag],
    ["h4", pTag],
    ["h5", pTag],
    ["h6", pTag],
    ["select", formTags],
    ["input", formTags],
    ["output", formTags],
    ["button", formTags],
    ["datalist", formTags],
    ["textarea", formTags],
    ["option", new Set(["option"])],
    ["optgroup", new Set(["optgroup", "option"])],
    ["dd", ddtTags],
    ["dt", ddtTags],
    ["address", pTag],
    ["article", pTag],
    ["aside", pTag],
    ["blockquote", pTag],
    ["details", pTag],
    ["div", pTag],
    ["dl", pTag],
    ["fieldset", pTag],
    ["figcaption", pTag],
    ["figure", pTag],
    ["footer", pTag],
    ["form", pTag],
    ["header", pTag],
    ["hr", pTag],
    ["main", pTag],
    ["nav", pTag],
    ["ol", pTag],
    ["pre", pTag],
    ["section", pTag],
    ["table", pTag],
    ["ul", pTag],
    ["rt", rtpTags],
    ["rp", rtpTags],
    ["tbody", tableSectionTags],
    ["tfoot", tableSectionTags],
]);
var voidElements = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);
var foreignContextElements = new Set(["math", "svg"]);
var htmlIntegrationElements = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignobject",
    "desc",
    "title",
]);
var reNameEnd = /\s|\//;
var Parser = /** @class */ (function () {
    function Parser(cbs, options) {
        if (options === void 0) { options = {}; }
        var _a, _b, _c, _d, _e;
        this.options = options;
        /** The start index of the last event. */
        this.startIndex = 0;
        /** The end index of the last event. */
        this.endIndex = 0;
        /**
         * Store the start index of the current open tag,
         * so we can update the start index for attributes.
         */
        this.openTagStart = 0;
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack = [];
        this.foreignContext = [];
        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
        this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
        this.lowerCaseAttributeNames =
            (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
        this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_1.default)(this.options, this);
        (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
    }
    // Tokenizer event handlers
    /** @internal */
    Parser.prototype.ontext = function (data) {
        var _a, _b;
        var idx = this.tokenizer.getAbsoluteIndex();
        this.endIndex = idx - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
        this.startIndex = idx;
    };
    Parser.prototype.isVoidElement = function (name) {
        return !this.options.xmlMode && voidElements.has(name);
    };
    /** @internal */
    Parser.prototype.onopentagname = function (name) {
        this.endIndex = this.tokenizer.getAbsoluteIndex();
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        this.emitOpenTag(name);
    };
    Parser.prototype.emitOpenTag = function (name) {
        var _a, _b, _c, _d;
        this.openTagStart = this.startIndex;
        this.tagname = name;
        var impliesClose = !this.options.xmlMode && openImpliesClose.get(name);
        if (impliesClose) {
            while (this.stack.length > 0 &&
                impliesClose.has(this.stack[this.stack.length - 1])) {
                var el = this.stack.pop();
                (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, el, true);
            }
        }
        if (!this.isVoidElement(name)) {
            this.stack.push(name);
            if (foreignContextElements.has(name)) {
                this.foreignContext.push(true);
            }
            else if (htmlIntegrationElements.has(name)) {
                this.foreignContext.push(false);
            }
        }
        (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
        if (this.cbs.onopentag)
            this.attribs = {};
    };
    Parser.prototype.endOpenTag = function (isImplied) {
        var _a, _b;
        this.startIndex = this.openTagStart;
        this.endIndex = this.tokenizer.getAbsoluteIndex();
        if (this.attribs) {
            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs, isImplied);
            this.attribs = null;
        }
        if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
            this.cbs.onclosetag(this.tagname, true);
        }
        this.tagname = "";
    };
    /** @internal */
    Parser.prototype.onopentagend = function () {
        this.endOpenTag(false);
        // Set `startIndex` for next node
        this.startIndex = this.endIndex + 1;
    };
    /** @internal */
    Parser.prototype.onclosetag = function (name) {
        var _a, _b, _c, _d, _e, _f;
        this.endIndex = this.tokenizer.getAbsoluteIndex();
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        if (foreignContextElements.has(name) ||
            htmlIntegrationElements.has(name)) {
            this.foreignContext.pop();
        }
        if (!this.isVoidElement(name)) {
            var pos = this.stack.lastIndexOf(name);
            if (pos !== -1) {
                if (this.cbs.onclosetag) {
                    var count = this.stack.length - pos;
                    while (count--) {
                        // We know the stack has sufficient elements.
                        this.cbs.onclosetag(this.stack.pop(), count !== 0);
                    }
                }
                else
                    this.stack.length = pos;
            }
            else if (!this.options.xmlMode && name === "p") {
                this.emitOpenTag(name);
                this.closeCurrentTag(true);
            }
        }
        else if (!this.options.xmlMode && name === "br") {
            // We can't go through `emitOpenTag` here, as `br` would be implicitly closed.
            (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, name);
            (_d = (_c = this.cbs).onopentag) === null || _d === void 0 ? void 0 : _d.call(_c, name, {}, true);
            (_f = (_e = this.cbs).onclosetag) === null || _f === void 0 ? void 0 : _f.call(_e, name, false);
        }
        // Set `startIndex` for next node
        this.startIndex = this.endIndex + 1;
    };
    /** @internal */
    Parser.prototype.onselfclosingtag = function () {
        if (this.options.xmlMode ||
            this.options.recognizeSelfClosing ||
            this.foreignContext[this.foreignContext.length - 1]) {
            this.closeCurrentTag(false);
            // Set `startIndex` for next node
            this.startIndex = this.endIndex + 1;
        }
        else {
            // Ignore the fact that the tag is self-closing.
            this.onopentagend();
        }
    };
    Parser.prototype.closeCurrentTag = function (isOpenImplied) {
        var _a, _b;
        var name = this.tagname;
        this.endOpenTag(isOpenImplied);
        // Self-closing tags will be on the top of the stack
        if (this.stack[this.stack.length - 1] === name) {
            // If the opening tag isn't implied, the closing tag has to be implied.
            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name, !isOpenImplied);
            this.stack.pop();
        }
    };
    /** @internal */
    Parser.prototype.onattribname = function (name) {
        this.startIndex = this.tokenizer.getAbsoluteSectionStart();
        if (this.lowerCaseAttributeNames) {
            name = name.toLowerCase();
        }
        this.attribname = name;
    };
    /** @internal */
    Parser.prototype.onattribdata = function (value) {
        this.attribvalue += value;
    };
    /** @internal */
    Parser.prototype.onattribend = function (quote) {
        var _a, _b;
        this.endIndex = this.tokenizer.getAbsoluteIndex();
        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote);
        if (this.attribs &&
            !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
            this.attribs[this.attribname] = this.attribvalue;
        }
        this.attribname = "";
        this.attribvalue = "";
    };
    Parser.prototype.getInstructionName = function (value) {
        var idx = value.search(reNameEnd);
        var name = idx < 0 ? value : value.substr(0, idx);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        return name;
    };
    /** @internal */
    Parser.prototype.ondeclaration = function (value) {
        this.endIndex = this.tokenizer.getAbsoluteIndex();
        if (this.cbs.onprocessinginstruction) {
            var name_1 = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("!" + name_1, "!" + value);
        }
        // Set `startIndex` for next node
        this.startIndex = this.endIndex + 1;
    };
    /** @internal */
    Parser.prototype.onprocessinginstruction = function (value) {
        this.endIndex = this.tokenizer.getAbsoluteIndex();
        if (this.cbs.onprocessinginstruction) {
            var name_2 = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("?" + name_2, "?" + value);
        }
        // Set `startIndex` for next node
        this.startIndex = this.endIndex + 1;
    };
    /** @internal */
    Parser.prototype.oncomment = function (value) {
        var _a, _b, _c, _d;
        this.endIndex = this.tokenizer.getAbsoluteIndex();
        (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, value);
        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
        // Set `startIndex` for next node
        this.startIndex = this.endIndex + 1;
    };
    /** @internal */
    Parser.prototype.oncdata = function (value) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.endIndex = this.tokenizer.getAbsoluteIndex();
        if (this.options.xmlMode || this.options.recognizeCDATA) {
            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
            (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
        }
        else {
            (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, "[CDATA[" + value + "]]");
            (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
        }
        // Set `startIndex` for next node
        this.startIndex = this.endIndex + 1;
    };
    /** @internal */
    Parser.prototype.onerror = function (err) {
        var _a, _b;
        (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    /** @internal */
    Parser.prototype.onend = function () {
        var _a, _b;
        if (this.cbs.onclosetag) {
            // Set the end index for all remaining tags
            this.endIndex = this.startIndex;
            for (var i = this.stack.length; i > 0; this.cbs.onclosetag(this.stack[--i], true))
                ;
        }
        (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    /**
     * Resets the parser to a blank state, ready to parse a new HTML document
     */
    Parser.prototype.reset = function () {
        var _a, _b, _c, _d;
        (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribs = null;
        this.stack = [];
        this.startIndex = 0;
        this.endIndex = 0;
        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
    };
    /**
     * Resets the parser, then parses a complete document and
     * pushes it to the handler.
     *
     * @param data Document to parse.
     */
    Parser.prototype.parseComplete = function (data) {
        this.reset();
        this.end(data);
    };
    /**
     * Parses a chunk of data and calls the corresponding callbacks.
     *
     * @param chunk Chunk to parse.
     */
    Parser.prototype.write = function (chunk) {
        this.tokenizer.write(chunk);
    };
    /**
     * Parses the end of the buffer and clears the stack, calls onend.
     *
     * @param chunk Optional final chunk to parse.
     */
    Parser.prototype.end = function (chunk) {
        this.tokenizer.end(chunk);
    };
    /**
     * Pauses parsing. The parser won't emit events until `resume` is called.
     */
    Parser.prototype.pause = function () {
        this.tokenizer.pause();
    };
    /**
     * Resumes parsing after `pause` was called.
     */
    Parser.prototype.resume = function () {
        this.tokenizer.resume();
    };
    /**
     * Alias of `write`, for backwards compatibility.
     *
     * @param chunk Chunk to parse.
     * @deprecated
     */
    Parser.prototype.parseChunk = function (chunk) {
        this.write(chunk);
    };
    /**
     * Alias of `end`, for backwards compatibility.
     *
     * @param chunk Optional final chunk to parse.
     * @deprecated
     */
    Parser.prototype.done = function (chunk) {
        this.end(chunk);
    };
    return Parser;
}());
exports.Parser = Parser;


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/htmlparser2/lib/Tokenizer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/htmlparser2/lib/Tokenizer.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var decode_codepoint_1 = __importDefault(__webpack_require__(/*! entities/lib/decode_codepoint */ "./node_modules/html-to-react/node_modules/entities/lib/decode_codepoint.js"));
var decode_1 = __webpack_require__(/*! entities/lib/decode */ "./node_modules/html-to-react/node_modules/entities/lib/decode.js");
function isWhitespace(c) {
    return (c === 32 /* Space */ ||
        c === 10 /* NewLine */ ||
        c === 9 /* Tab */ ||
        c === 12 /* FormFeed */ ||
        c === 13 /* CarriageReturn */);
}
function isEndOfTagSection(c) {
    return c === 47 /* Slash */ || c === 62 /* Gt */ || isWhitespace(c);
}
function isNumber(c) {
    return c >= 48 /* Zero */ && c <= 57 /* Nine */;
}
function isASCIIAlpha(c) {
    return ((c >= 97 /* LowerA */ && c <= 122 /* LowerZ */) ||
        (c >= 65 /* UpperA */ && c <= 90 /* UpperZ */));
}
/**
 * Sequences used to match longer strings.
 *
 * We don't have `Script`, `Style`, or `Title` here. Instead, we re-use the *End
 * sequences with an increased offset.
 */
var Sequences = {
    Cdata: new Uint16Array([0x43, 0x44, 0x41, 0x54, 0x41, 0x5b]),
    CdataEnd: new Uint16Array([0x5d, 0x5d, 0x3e]),
    CommentEnd: new Uint16Array([0x2d, 0x2d, 0x3e]),
    ScriptEnd: new Uint16Array([
        0x3c, 0x2f, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74,
    ]),
    StyleEnd: new Uint16Array([0x3c, 0x2f, 0x73, 0x74, 0x79, 0x6c, 0x65]),
    TitleEnd: new Uint16Array([0x3c, 0x2f, 0x74, 0x69, 0x74, 0x6c, 0x65]), // `</title`
};
var Tokenizer = /** @class */ (function () {
    function Tokenizer(_a, cbs) {
        var _b = _a.xmlMode, xmlMode = _b === void 0 ? false : _b, _c = _a.decodeEntities, decodeEntities = _c === void 0 ? true : _c;
        this.cbs = cbs;
        /** The current state the tokenizer is in. */
        this._state = 1 /* Text */;
        /** The read buffer. */
        this.buffer = "";
        /** The beginning of the section that is currently being read. */
        this.sectionStart = 0;
        /** The index within the buffer that we are currently looking at. */
        this._index = 0;
        /**
         * Data that has already been processed will be removed from the buffer occasionally.
         * `_bufferOffset` keeps track of how many characters have been removed, to make sure position information is accurate.
         */
        this.bufferOffset = 0;
        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
        this.baseState = 1 /* Text */;
        /** For special parsing behavior inside of script and style tags. */
        this.isSpecial = false;
        /** Indicates whether the tokenizer has been paused. */
        this.running = true;
        /** Indicates whether the tokenizer has finished running / `.end` has been called. */
        this.ended = false;
        this.sequenceIndex = 0;
        this.trieIndex = 0;
        this.trieCurrent = 0;
        this.trieResult = null;
        this.entityExcess = 0;
        this.xmlMode = xmlMode;
        this.decodeEntities = decodeEntities;
        this.entityTrie = xmlMode ? decode_1.xmlDecodeTree : decode_1.htmlDecodeTree;
    }
    Tokenizer.prototype.reset = function () {
        this._state = 1 /* Text */;
        this.buffer = "";
        this.sectionStart = 0;
        this._index = 0;
        this.bufferOffset = 0;
        this.baseState = 1 /* Text */;
        this.currentSequence = undefined;
        this.running = true;
        this.ended = false;
    };
    Tokenizer.prototype.write = function (chunk) {
        if (this.ended)
            return this.cbs.onerror(Error(".write() after done!"));
        this.buffer += chunk;
        this.parse();
    };
    Tokenizer.prototype.end = function (chunk) {
        if (this.ended)
            return this.cbs.onerror(Error(".end() after done!"));
        if (chunk)
            this.write(chunk);
        this.ended = true;
        if (this.running)
            this.finish();
    };
    Tokenizer.prototype.pause = function () {
        this.running = false;
    };
    Tokenizer.prototype.resume = function () {
        this.running = true;
        if (this._index < this.buffer.length) {
            this.parse();
        }
        if (this.ended) {
            this.finish();
        }
    };
    /**
     * The start of the current section.
     */
    Tokenizer.prototype.getAbsoluteSectionStart = function () {
        return this.sectionStart + this.bufferOffset;
    };
    /**
     * The current index within all of the written data.
     */
    Tokenizer.prototype.getAbsoluteIndex = function () {
        return this.bufferOffset + this._index;
    };
    Tokenizer.prototype.stateText = function (c) {
        if (c === 60 /* Lt */ ||
            (!this.decodeEntities && this.fastForwardTo(60 /* Lt */))) {
            if (this._index > this.sectionStart) {
                this.cbs.ontext(this.getSection());
            }
            this._state = 2 /* BeforeTagName */;
            this.sectionStart = this._index;
        }
        else if (this.decodeEntities && c === 38 /* Amp */) {
            this._state = 25 /* BeforeEntity */;
        }
    };
    Tokenizer.prototype.stateSpecialStartSequence = function (c) {
        var isEnd = this.sequenceIndex === this.currentSequence.length;
        var isMatch = isEnd
            ? // If we are at the end of the sequence, make sure the tag name has ended
                isEndOfTagSection(c)
            : // Otherwise, do a case-insensitive comparison
                (c | 0x20) === this.currentSequence[this.sequenceIndex];
        if (!isMatch) {
            this.isSpecial = false;
        }
        else if (!isEnd) {
            this.sequenceIndex++;
            return;
        }
        this.sequenceIndex = 0;
        this._state = 3 /* InTagName */;
        this.stateInTagName(c);
    };
    /** Look for an end tag. For <title> tags, also decode entities. */
    Tokenizer.prototype.stateInSpecialTag = function (c) {
        if (this.sequenceIndex === this.currentSequence.length) {
            if (c === 62 /* Gt */ || isWhitespace(c)) {
                var endOfText = this._index - this.currentSequence.length;
                if (this.sectionStart < endOfText) {
                    // Spoof the index so that reported locations match up.
                    var actualIndex = this._index;
                    this._index = endOfText;
                    this.cbs.ontext(this.getSection());
                    this._index = actualIndex;
                }
                this.isSpecial = false;
                this.sectionStart = endOfText + 2; // Skip over the `</`
                this.stateInClosingTagName(c);
                return; // We are done; skip the rest of the function.
            }
            this.sequenceIndex = 0;
        }
        if ((c | 0x20) === this.currentSequence[this.sequenceIndex]) {
            this.sequenceIndex += 1;
        }
        else if (this.sequenceIndex === 0) {
            if (this.currentSequence === Sequences.TitleEnd) {
                // We have to parse entities in <title> tags.
                if (this.decodeEntities && c === 38 /* Amp */) {
                    this._state = 25 /* BeforeEntity */;
                }
            }
            else if (this.fastForwardTo(60 /* Lt */)) {
                // Outside of <title> tags, we can fast-forward.
                this.sequenceIndex = 1;
            }
        }
        else {
            // If we see a `<`, set the sequence index to 1; useful for eg. `<</script>`.
            this.sequenceIndex = Number(c === 60 /* Lt */);
        }
    };
    Tokenizer.prototype.stateCDATASequence = function (c) {
        if (c === Sequences.Cdata[this.sequenceIndex]) {
            if (++this.sequenceIndex === Sequences.Cdata.length) {
                this._state = 21 /* InCommentLike */;
                this.currentSequence = Sequences.CdataEnd;
                this.sequenceIndex = 0;
                this.sectionStart = this._index + 1;
            }
        }
        else {
            this.sequenceIndex = 0;
            this._state = 16 /* InDeclaration */;
            this.stateInDeclaration(c); // Reconsume the character
        }
    };
    /**
     * When we wait for one specific character, we can speed things up
     * by skipping through the buffer until we find it.
     *
     * @returns Whether the character was found.
     */
    Tokenizer.prototype.fastForwardTo = function (c) {
        while (++this._index < this.buffer.length) {
            if (this.buffer.charCodeAt(this._index) === c) {
                return true;
            }
        }
        /*
         * We increment the index at the end of the `parse` loop,
         * so set it to `buffer.length - 1` here.
         *
         * TODO: Refactor `parse` to increment index before calling states.
         */
        this._index = this.buffer.length - 1;
        return false;
    };
    /**
     * Comments and CDATA end with `-->` and `]]>`.
     *
     * Their common qualities are:
     * - Their end sequences have a distinct character they start with.
     * - That character is then repeated, so we have to check multiple repeats.
     * - All characters but the start character of the sequence can be skipped.
     */
    Tokenizer.prototype.stateInCommentLike = function (c) {
        if (c === this.currentSequence[this.sequenceIndex]) {
            if (++this.sequenceIndex === this.currentSequence.length) {
                // Remove 2 trailing chars
                var section = this.buffer.slice(this.sectionStart, this._index - 2);
                if (this.currentSequence === Sequences.CdataEnd) {
                    this.cbs.oncdata(section);
                }
                else {
                    this.cbs.oncomment(section);
                }
                this.sequenceIndex = 0;
                this.sectionStart = this._index + 1;
                this._state = 1 /* Text */;
            }
        }
        else if (this.sequenceIndex === 0) {
            // Fast-forward to the first character of the sequence
            if (this.fastForwardTo(this.currentSequence[0])) {
                this.sequenceIndex = 1;
            }
        }
        else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
            // Allow long sequences, eg. --->, ]]]>
            this.sequenceIndex = 0;
        }
    };
    /**
     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
     *
     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
     * We allow anything that wouldn't end the tag.
     */
    Tokenizer.prototype.isTagStartChar = function (c) {
        return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
    };
    Tokenizer.prototype.startSpecial = function (sequence, offset) {
        this.isSpecial = true;
        this.currentSequence = sequence;
        this.sequenceIndex = offset;
        this._state = 23 /* SpecialStartSequence */;
    };
    Tokenizer.prototype.stateBeforeTagName = function (c) {
        if (c === 33 /* ExclamationMark */) {
            this._state = 15 /* BeforeDeclaration */;
            this.sectionStart = this._index + 1;
        }
        else if (c === 63 /* Questionmark */) {
            this._state = 17 /* InProcessingInstruction */;
            this.sectionStart = this._index + 1;
        }
        else if (this.isTagStartChar(c)) {
            var lower = c | 0x20;
            this.sectionStart = this._index;
            if (!this.xmlMode && lower === Sequences.TitleEnd[2]) {
                this.startSpecial(Sequences.TitleEnd, 3);
            }
            else {
                this._state =
                    !this.xmlMode && lower === Sequences.ScriptEnd[2]
                        ? 22 /* BeforeSpecialS */
                        : 3 /* InTagName */;
            }
        }
        else if (c === 47 /* Slash */) {
            this._state = 5 /* BeforeClosingTagName */;
        }
        else {
            this._state = 1 /* Text */;
            this.stateText(c);
        }
    };
    Tokenizer.prototype.stateInTagName = function (c) {
        if (isEndOfTagSection(c)) {
            this.cbs.onopentagname(this.getSection());
            this.sectionStart = -1;
            this._state = 8 /* BeforeAttributeName */;
            this.stateBeforeAttributeName(c);
        }
    };
    Tokenizer.prototype.stateBeforeClosingTagName = function (c) {
        if (isWhitespace(c)) {
            // Ignore
        }
        else if (c === 62 /* Gt */) {
            this._state = 1 /* Text */;
        }
        else {
            this._state = this.isTagStartChar(c)
                ? 6 /* InClosingTagName */
                : 20 /* InSpecialComment */;
            this.sectionStart = this._index;
        }
    };
    Tokenizer.prototype.stateInClosingTagName = function (c) {
        if (c === 62 /* Gt */ || isWhitespace(c)) {
            this.cbs.onclosetag(this.getSection());
            this.sectionStart = -1;
            this._state = 7 /* AfterClosingTagName */;
            this.stateAfterClosingTagName(c);
        }
    };
    Tokenizer.prototype.stateAfterClosingTagName = function (c) {
        // Skip everything until ">"
        if (c === 62 /* Gt */ || this.fastForwardTo(62 /* Gt */)) {
            this._state = 1 /* Text */;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer.prototype.stateBeforeAttributeName = function (c) {
        if (c === 62 /* Gt */) {
            this.cbs.onopentagend();
            if (this.isSpecial) {
                this._state = 24 /* InSpecialTag */;
                this.sequenceIndex = 0;
            }
            else {
                this._state = 1 /* Text */;
            }
            this.baseState = this._state;
            this.sectionStart = this._index + 1;
        }
        else if (c === 47 /* Slash */) {
            this._state = 4 /* InSelfClosingTag */;
        }
        else if (!isWhitespace(c)) {
            this._state = 9 /* InAttributeName */;
            this.sectionStart = this._index;
        }
    };
    Tokenizer.prototype.stateInSelfClosingTag = function (c) {
        if (c === 62 /* Gt */) {
            this.cbs.onselfclosingtag();
            this._state = 1 /* Text */;
            this.baseState = 1 /* Text */;
            this.sectionStart = this._index + 1;
            this.isSpecial = false; // Reset special state, in case of self-closing special tags
        }
        else if (!isWhitespace(c)) {
            this._state = 8 /* BeforeAttributeName */;
            this.stateBeforeAttributeName(c);
        }
    };
    Tokenizer.prototype.stateInAttributeName = function (c) {
        if (c === 61 /* Eq */ || isEndOfTagSection(c)) {
            this.cbs.onattribname(this.getSection());
            this.sectionStart = -1;
            this._state = 10 /* AfterAttributeName */;
            this.stateAfterAttributeName(c);
        }
    };
    Tokenizer.prototype.stateAfterAttributeName = function (c) {
        if (c === 61 /* Eq */) {
            this._state = 11 /* BeforeAttributeValue */;
        }
        else if (c === 47 /* Slash */ || c === 62 /* Gt */) {
            this.cbs.onattribend(undefined);
            this._state = 8 /* BeforeAttributeName */;
            this.stateBeforeAttributeName(c);
        }
        else if (!isWhitespace(c)) {
            this.cbs.onattribend(undefined);
            this._state = 9 /* InAttributeName */;
            this.sectionStart = this._index;
        }
    };
    Tokenizer.prototype.stateBeforeAttributeValue = function (c) {
        if (c === 34 /* DoubleQuote */) {
            this._state = 12 /* InAttributeValueDq */;
            this.sectionStart = this._index + 1;
        }
        else if (c === 39 /* SingleQuote */) {
            this._state = 13 /* InAttributeValueSq */;
            this.sectionStart = this._index + 1;
        }
        else if (!isWhitespace(c)) {
            this.sectionStart = this._index;
            this._state = 14 /* InAttributeValueNq */;
            this.stateInAttributeValueNoQuotes(c); // Reconsume token
        }
    };
    Tokenizer.prototype.handleInAttributeValue = function (c, quote) {
        if (c === quote ||
            (!this.decodeEntities && this.fastForwardTo(quote))) {
            this.cbs.onattribdata(this.getSection());
            this.sectionStart = -1;
            this.cbs.onattribend(String.fromCharCode(quote));
            this._state = 8 /* BeforeAttributeName */;
        }
        else if (this.decodeEntities && c === 38 /* Amp */) {
            this.baseState = this._state;
            this._state = 25 /* BeforeEntity */;
        }
    };
    Tokenizer.prototype.stateInAttributeValueDoubleQuotes = function (c) {
        this.handleInAttributeValue(c, 34 /* DoubleQuote */);
    };
    Tokenizer.prototype.stateInAttributeValueSingleQuotes = function (c) {
        this.handleInAttributeValue(c, 39 /* SingleQuote */);
    };
    Tokenizer.prototype.stateInAttributeValueNoQuotes = function (c) {
        if (isWhitespace(c) || c === 62 /* Gt */) {
            this.cbs.onattribdata(this.getSection());
            this.sectionStart = -1;
            this.cbs.onattribend(null);
            this._state = 8 /* BeforeAttributeName */;
            this.stateBeforeAttributeName(c);
        }
        else if (this.decodeEntities && c === 38 /* Amp */) {
            this.baseState = this._state;
            this._state = 25 /* BeforeEntity */;
        }
    };
    Tokenizer.prototype.stateBeforeDeclaration = function (c) {
        if (c === 91 /* OpeningSquareBracket */) {
            this._state = 19 /* CDATASequence */;
            this.sequenceIndex = 0;
        }
        else {
            this._state =
                c === 45 /* Dash */
                    ? 18 /* BeforeComment */
                    : 16 /* InDeclaration */;
        }
    };
    Tokenizer.prototype.stateInDeclaration = function (c) {
        if (c === 62 /* Gt */ || this.fastForwardTo(62 /* Gt */)) {
            this.cbs.ondeclaration(this.getSection());
            this._state = 1 /* Text */;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer.prototype.stateInProcessingInstruction = function (c) {
        if (c === 62 /* Gt */ || this.fastForwardTo(62 /* Gt */)) {
            this.cbs.onprocessinginstruction(this.getSection());
            this._state = 1 /* Text */;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer.prototype.stateBeforeComment = function (c) {
        if (c === 45 /* Dash */) {
            this._state = 21 /* InCommentLike */;
            this.currentSequence = Sequences.CommentEnd;
            // Allow short comments (eg. <!-->)
            this.sequenceIndex = 2;
            this.sectionStart = this._index + 1;
        }
        else {
            this._state = 16 /* InDeclaration */;
        }
    };
    Tokenizer.prototype.stateInSpecialComment = function (c) {
        if (c === 62 /* Gt */ || this.fastForwardTo(62 /* Gt */)) {
            this.cbs.oncomment(this.getSection());
            this._state = 1 /* Text */;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer.prototype.stateBeforeSpecialS = function (c) {
        var lower = c | 0x20;
        if (lower === Sequences.ScriptEnd[3]) {
            this.startSpecial(Sequences.ScriptEnd, 4);
        }
        else if (lower === Sequences.StyleEnd[3]) {
            this.startSpecial(Sequences.StyleEnd, 4);
        }
        else {
            this._state = 3 /* InTagName */;
            this.stateInTagName(c); // Consume the token again
        }
    };
    Tokenizer.prototype.stateBeforeEntity = function (c) {
        // Start excess with 1 to include the '&'
        this.entityExcess = 1;
        if (c === 35 /* Num */) {
            this._state = 26 /* BeforeNumericEntity */;
        }
        else if (c === 38 /* Amp */) {
            // We have two `&` characters in a row. Stay in the current state.
        }
        else {
            this.trieIndex = 0;
            this.trieCurrent = this.entityTrie[0];
            this.trieResult = null;
            this._state = 27 /* InNamedEntity */;
            this.stateInNamedEntity(c);
        }
    };
    Tokenizer.prototype.stateInNamedEntity = function (c) {
        this.entityExcess += 1;
        this.trieIndex = (0, decode_1.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, c);
        if (this.trieIndex < 0) {
            this.emitNamedEntity();
            this._index--;
            return;
        }
        this.trieCurrent = this.entityTrie[this.trieIndex];
        // If the branch is a value, store it and continue
        if (this.trieCurrent & decode_1.BinTrieFlags.HAS_VALUE) {
            // If we have a legacy entity while parsing strictly, just skip the number of bytes
            if (!this.allowLegacyEntity() && c !== 59 /* Semi */) {
                // No need to consider multi-byte values, as the legacy entity is always a single byte
                this.trieIndex += 1;
            }
            else {
                // Add 1 as we have already incremented the excess
                var entityStart = this._index - this.entityExcess + 1;
                if (entityStart > this.sectionStart) {
                    this.emitPartial(this.buffer.substring(this.sectionStart, entityStart));
                }
                // If this is a surrogate pair, combine the higher bits from the node with the next byte
                this.trieResult =
                    this.trieCurrent & decode_1.BinTrieFlags.MULTI_BYTE
                        ? String.fromCharCode(this.entityTrie[++this.trieIndex], this.entityTrie[++this.trieIndex])
                        : String.fromCharCode(this.entityTrie[++this.trieIndex]);
                this.entityExcess = 0;
                this.sectionStart = this._index + 1;
            }
        }
    };
    Tokenizer.prototype.emitNamedEntity = function () {
        if (this.trieResult) {
            this.emitPartial(this.trieResult);
        }
        this._state = this.baseState;
    };
    Tokenizer.prototype.stateBeforeNumericEntity = function (c) {
        if ((c | 0x20) === 120 /* LowerX */) {
            this.entityExcess++;
            this._state = 29 /* InHexEntity */;
        }
        else {
            this._state = 28 /* InNumericEntity */;
            this.stateInNumericEntity(c);
        }
    };
    Tokenizer.prototype.decodeNumericEntity = function (base, strict) {
        var entityStart = this._index - this.entityExcess - 1;
        var numberStart = entityStart + 2 + (base >> 4);
        if (numberStart !== this._index) {
            // Emit leading data if any
            if (entityStart > this.sectionStart) {
                this.emitPartial(this.buffer.substring(this.sectionStart, entityStart));
            }
            // Parse entity
            var entity = this.buffer.substring(numberStart, this._index);
            var parsed = parseInt(entity, base);
            this.emitPartial((0, decode_codepoint_1.default)(parsed));
            this.sectionStart = this._index + Number(strict);
        }
        this._state = this.baseState;
    };
    Tokenizer.prototype.stateInNumericEntity = function (c) {
        if (c === 59 /* Semi */) {
            this.decodeNumericEntity(10, true);
        }
        else if (!isNumber(c)) {
            if (this.allowLegacyEntity()) {
                this.decodeNumericEntity(10, false);
            }
            else {
                this._state = this.baseState;
            }
            this._index--;
        }
        else {
            this.entityExcess++;
        }
    };
    Tokenizer.prototype.stateInHexEntity = function (c) {
        if (c === 59 /* Semi */) {
            this.decodeNumericEntity(16, true);
        }
        else if ((c < 97 /* LowerA */ || c > 102 /* LowerF */) &&
            (c < 65 /* UpperA */ || c > 70 /* UpperF */) &&
            !isNumber(c)) {
            if (this.allowLegacyEntity()) {
                this.decodeNumericEntity(16, false);
            }
            else {
                this._state = this.baseState;
            }
            this._index--;
        }
        else {
            this.entityExcess++;
        }
    };
    Tokenizer.prototype.allowLegacyEntity = function () {
        return (!this.xmlMode &&
            (this.baseState === 1 /* Text */ ||
                this.baseState === 24 /* InSpecialTag */));
    };
    /**
     * Remove data that has already been consumed from the buffer.
     */
    Tokenizer.prototype.cleanup = function () {
        // If we are inside of text, emit what we already have.
        if (this.running &&
            this.sectionStart !== this._index &&
            (this._state === 1 /* Text */ ||
                (this._state === 24 /* InSpecialTag */ &&
                    this.sequenceIndex === 0))) {
            // TODO: We could emit attribute data here as well.
            this.cbs.ontext(this.buffer.substr(this.sectionStart));
            this.sectionStart = this._index;
        }
        var start = this.sectionStart < 0 ? this._index : this.sectionStart;
        this.buffer =
            start === this.buffer.length ? "" : this.buffer.substr(start);
        this._index -= start;
        this.bufferOffset += start;
        if (this.sectionStart > 0) {
            this.sectionStart = 0;
        }
    };
    Tokenizer.prototype.shouldContinue = function () {
        return this._index < this.buffer.length && this.running;
    };
    /**
     * Iterates through the buffer, calling the function corresponding to the current state.
     *
     * States that are more likely to be hit are higher up, as a performance improvement.
     */
    Tokenizer.prototype.parse = function () {
        while (this.shouldContinue()) {
            var c = this.buffer.charCodeAt(this._index);
            if (this._state === 1 /* Text */) {
                this.stateText(c);
            }
            else if (this._state === 23 /* SpecialStartSequence */) {
                this.stateSpecialStartSequence(c);
            }
            else if (this._state === 24 /* InSpecialTag */) {
                this.stateInSpecialTag(c);
            }
            else if (this._state === 19 /* CDATASequence */) {
                this.stateCDATASequence(c);
            }
            else if (this._state === 12 /* InAttributeValueDq */) {
                this.stateInAttributeValueDoubleQuotes(c);
            }
            else if (this._state === 9 /* InAttributeName */) {
                this.stateInAttributeName(c);
            }
            else if (this._state === 21 /* InCommentLike */) {
                this.stateInCommentLike(c);
            }
            else if (this._state === 20 /* InSpecialComment */) {
                this.stateInSpecialComment(c);
            }
            else if (this._state === 8 /* BeforeAttributeName */) {
                this.stateBeforeAttributeName(c);
            }
            else if (this._state === 3 /* InTagName */) {
                this.stateInTagName(c);
            }
            else if (this._state === 6 /* InClosingTagName */) {
                this.stateInClosingTagName(c);
            }
            else if (this._state === 2 /* BeforeTagName */) {
                this.stateBeforeTagName(c);
            }
            else if (this._state === 10 /* AfterAttributeName */) {
                this.stateAfterAttributeName(c);
            }
            else if (this._state === 13 /* InAttributeValueSq */) {
                this.stateInAttributeValueSingleQuotes(c);
            }
            else if (this._state === 11 /* BeforeAttributeValue */) {
                this.stateBeforeAttributeValue(c);
            }
            else if (this._state === 5 /* BeforeClosingTagName */) {
                this.stateBeforeClosingTagName(c);
            }
            else if (this._state === 7 /* AfterClosingTagName */) {
                this.stateAfterClosingTagName(c);
            }
            else if (this._state === 22 /* BeforeSpecialS */) {
                this.stateBeforeSpecialS(c);
            }
            else if (this._state === 14 /* InAttributeValueNq */) {
                this.stateInAttributeValueNoQuotes(c);
            }
            else if (this._state === 4 /* InSelfClosingTag */) {
                this.stateInSelfClosingTag(c);
            }
            else if (this._state === 16 /* InDeclaration */) {
                this.stateInDeclaration(c);
            }
            else if (this._state === 15 /* BeforeDeclaration */) {
                this.stateBeforeDeclaration(c);
            }
            else if (this._state === 18 /* BeforeComment */) {
                this.stateBeforeComment(c);
            }
            else if (this._state === 17 /* InProcessingInstruction */) {
                this.stateInProcessingInstruction(c);
            }
            else if (this._state === 27 /* InNamedEntity */) {
                this.stateInNamedEntity(c);
            }
            else if (this._state === 25 /* BeforeEntity */) {
                this.stateBeforeEntity(c);
            }
            else if (this._state === 29 /* InHexEntity */) {
                this.stateInHexEntity(c);
            }
            else if (this._state === 28 /* InNumericEntity */) {
                this.stateInNumericEntity(c);
            }
            else {
                // `this._state === State.BeforeNumericEntity`
                this.stateBeforeNumericEntity(c);
            }
            this._index++;
        }
        this.cleanup();
    };
    Tokenizer.prototype.finish = function () {
        if (this._state === 27 /* InNamedEntity */) {
            this.emitNamedEntity();
        }
        // If there is remaining data, emit it in a reasonable way
        if (this.sectionStart < this._index) {
            this.handleTrailingData();
        }
        this.cbs.onend();
    };
    /** Handle any trailing data. */
    Tokenizer.prototype.handleTrailingData = function () {
        var data = this.buffer.substr(this.sectionStart);
        if (this._state === 21 /* InCommentLike */) {
            if (this.currentSequence === Sequences.CdataEnd) {
                this.cbs.oncdata(data);
            }
            else {
                this.cbs.oncomment(data);
            }
        }
        else if (this._state === 28 /* InNumericEntity */ &&
            this.allowLegacyEntity()) {
            this.decodeNumericEntity(10, false);
            // All trailing data will have been consumed
        }
        else if (this._state === 29 /* InHexEntity */ &&
            this.allowLegacyEntity()) {
            this.decodeNumericEntity(16, false);
            // All trailing data will have been consumed
        }
        else if (this._state === 3 /* InTagName */ ||
            this._state === 8 /* BeforeAttributeName */ ||
            this._state === 11 /* BeforeAttributeValue */ ||
            this._state === 10 /* AfterAttributeName */ ||
            this._state === 9 /* InAttributeName */ ||
            this._state === 13 /* InAttributeValueSq */ ||
            this._state === 12 /* InAttributeValueDq */ ||
            this._state === 14 /* InAttributeValueNq */ ||
            this._state === 6 /* InClosingTagName */) {
            /*
             * If we are currently in an opening or closing tag, us not calling the
             * respective callback signals that the tag should be ignored.
             */
        }
        else {
            this.cbs.ontext(data);
        }
    };
    Tokenizer.prototype.getSection = function () {
        return this.buffer.substring(this.sectionStart, this._index);
    };
    Tokenizer.prototype.emitPartial = function (value) {
        if (this.baseState !== 1 /* Text */ &&
            this.baseState !== 24 /* InSpecialTag */) {
            this.cbs.onattribdata(value);
        }
        else {
            this.cbs.ontext(value);
        }
    };
    return Tokenizer;
}());
exports["default"] = Tokenizer;


/***/ }),

/***/ "./node_modules/html-to-react/node_modules/htmlparser2/lib/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/htmlparser2/lib/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RssHandler = exports.DefaultHandler = exports.DomUtils = exports.ElementType = exports.Tokenizer = exports.createDomStream = exports.parseDOM = exports.parseDocument = exports.DomHandler = exports.Parser = void 0;
var Parser_1 = __webpack_require__(/*! ./Parser */ "./node_modules/html-to-react/node_modules/htmlparser2/lib/Parser.js");
Object.defineProperty(exports, "Parser", ({ enumerable: true, get: function () { return Parser_1.Parser; } }));
var domhandler_1 = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
Object.defineProperty(exports, "DomHandler", ({ enumerable: true, get: function () { return domhandler_1.DomHandler; } }));
Object.defineProperty(exports, "DefaultHandler", ({ enumerable: true, get: function () { return domhandler_1.DomHandler; } }));
// Helper methods
/**
 * Parses the data, returns the resulting document.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 */
function parseDocument(data, options) {
    var handler = new domhandler_1.DomHandler(undefined, options);
    new Parser_1.Parser(handler, options).end(data);
    return handler.root;
}
exports.parseDocument = parseDocument;
/**
 * Parses data, returns an array of the root nodes.
 *
 * Note that the root nodes still have a `Document` node as their parent.
 * Use `parseDocument` to get the `Document` node instead.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 * @deprecated Use `parseDocument` instead.
 */
function parseDOM(data, options) {
    return parseDocument(data, options).children;
}
exports.parseDOM = parseDOM;
/**
 * Creates a parser instance, with an attached DOM handler.
 *
 * @param cb A callback that will be called once parsing has been completed.
 * @param options Optional options for the parser and DOM builder.
 * @param elementCb An optional callback that will be called every time a tag has been completed inside of the DOM.
 */
function createDomStream(cb, options, elementCb) {
    var handler = new domhandler_1.DomHandler(cb, options, elementCb);
    return new Parser_1.Parser(handler, options);
}
exports.createDomStream = createDomStream;
var Tokenizer_1 = __webpack_require__(/*! ./Tokenizer */ "./node_modules/html-to-react/node_modules/htmlparser2/lib/Tokenizer.js");
Object.defineProperty(exports, "Tokenizer", ({ enumerable: true, get: function () { return __importDefault(Tokenizer_1).default; } }));
var ElementType = __importStar(__webpack_require__(/*! domelementtype */ "./node_modules/html-to-react/node_modules/domelementtype/lib/index.js"));
exports.ElementType = ElementType;
/*
 * All of the following exports exist for backwards-compatibility.
 * They should probably be removed eventually.
 */
__exportStar(__webpack_require__(/*! ./FeedHandler */ "./node_modules/html-to-react/node_modules/htmlparser2/lib/FeedHandler.js"), exports);
exports.DomUtils = __importStar(__webpack_require__(/*! domutils */ "./node_modules/html-to-react/node_modules/domutils/lib/index.js"));
var FeedHandler_1 = __webpack_require__(/*! ./FeedHandler */ "./node_modules/html-to-react/node_modules/htmlparser2/lib/FeedHandler.js");
Object.defineProperty(exports, "RssHandler", ({ enumerable: true, get: function () { return FeedHandler_1.FeedHandler; } }));


/***/ }),

/***/ "./node_modules/lodash.camelcase/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.camelcase/index.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsAstral = '[' + rsAstralRange + ']',
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
    rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')',
  rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr,
  rsUpper + '+' + rsOptUpperContr,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 'ss'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = camelCase;


/***/ }),

/***/ "./src/js/components/CircularCount/editor.scss":
/*!*****************************************************!*\
  !*** ./src/js/components/CircularCount/editor.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/components/LineCount/editor.scss":
/*!*************************************************!*\
  !*** ./src/js/components/LineCount/editor.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/components/MeatballMenu/editor.scss":
/*!****************************************************!*\
  !*** ./src/js/components/MeatballMenu/editor.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/components/MeatballMenuItem/editor.scss":
/*!********************************************************!*\
  !*** ./src/js/components/MeatballMenuItem/editor.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/components/alignment/editor.scss":
/*!*************************************************!*\
  !*** ./src/js/components/alignment/editor.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/components/unit-picker/editor.scss":
/*!***************************************************!*\
  !*** ./src/js/components/unit-picker/editor.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/ramda/src/addIndex.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/addIndex.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _concat =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_concat.js */ "./node_modules/ramda/src/internal/_concat.js");

var _curry1 =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_curry1.js */ "./node_modules/ramda/src/internal/_curry1.js");

var curryN =
/*#__PURE__*/
__webpack_require__(/*! ./curryN.js */ "./node_modules/ramda/src/curryN.js");
/**
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 *
 * This would turn, for instance, [`R.map`](#map) function into one that
 * more closely resembles `Array.prototype.map`. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Function
 * @category List
 * @sig (((a ...) -> b) ... -> [a] -> *) -> (((a ..., Int, [a]) -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      const mapIndexed = R.addIndex(R.map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */


var addIndex =
/*#__PURE__*/
_curry1(function addIndex(fn) {
  return curryN(fn.length, function () {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);

    args[0] = function () {
      var result = origFn.apply(this, _concat(arguments, [idx, list]));
      idx += 1;
      return result;
    };

    return fn.apply(this, args);
  });
});

module.exports = addIndex;

/***/ }),

/***/ "./node_modules/ramda/src/bind.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/bind.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _arity =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_arity.js */ "./node_modules/ramda/src/internal/_arity.js");

var _curry2 =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_curry2.js */ "./node_modules/ramda/src/internal/_curry2.js");
/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      const log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */


var bind =
/*#__PURE__*/
_curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});

module.exports = bind;

/***/ }),

/***/ "./node_modules/ramda/src/curryN.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/curryN.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _arity =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_arity.js */ "./node_modules/ramda/src/internal/_arity.js");

var _curry1 =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_curry1.js */ "./node_modules/ramda/src/internal/_curry1.js");

var _curry2 =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_curry2.js */ "./node_modules/ramda/src/internal/_curry2.js");

var _curryN =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_curryN.js */ "./node_modules/ramda/src/internal/_curryN.js");
/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */


var curryN =
/*#__PURE__*/
_curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }

  return _arity(length, _curryN(length, [], fn));
});

module.exports = curryN;

/***/ }),

/***/ "./node_modules/ramda/src/equals.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/equals.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _curry2 =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_curry2.js */ "./node_modules/ramda/src/internal/_curry2.js");

var _equals =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_equals.js */ "./node_modules/ramda/src/internal/_equals.js");
/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */


var equals =
/*#__PURE__*/
_curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});

module.exports = equals;

/***/ }),

/***/ "./node_modules/ramda/src/filter.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/filter.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _curry2 =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_curry2.js */ "./node_modules/ramda/src/internal/_curry2.js");

var _dispatchable =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_dispatchable.js */ "./node_modules/ramda/src/internal/_dispatchable.js");

var _filter =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_filter.js */ "./node_modules/ramda/src/internal/_filter.js");

var _isObject =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_isObject.js */ "./node_modules/ramda/src/internal/_isObject.js");

var _reduce =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_reduce.js */ "./node_modules/ramda/src/internal/_reduce.js");

var _xfilter =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_xfilter.js */ "./node_modules/ramda/src/internal/_xfilter.js");

var keys =
/*#__PURE__*/
__webpack_require__(/*! ./keys.js */ "./node_modules/ramda/src/keys.js");
/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */


var filter =
/*#__PURE__*/
_curry2(
/*#__PURE__*/
_dispatchable(['fantasy-land/filter', 'filter'], _xfilter, function (pred, filterable) {
  return _isObject(filterable) ? _reduce(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }

    return acc;
  }, {}, keys(filterable)) : // else
  _filter(pred, filterable);
}));

module.exports = filter;

/***/ }),

/***/ "./node_modules/ramda/src/find.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/find.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _curry2 =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_curry2.js */ "./node_modules/ramda/src/internal/_curry2.js");

var _dispatchable =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_dispatchable.js */ "./node_modules/ramda/src/internal/_dispatchable.js");

var _xfind =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_xfind.js */ "./node_modules/ramda/src/internal/_xfind.js");
/**
 * Returns the first element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Dispatches to the `find` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      const xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
 *      R.find(R.propEq('a', 4))(xs); //=> undefined
 */


var find =
/*#__PURE__*/
_curry2(
/*#__PURE__*/
_dispatchable(['find'], _xfind, function find(fn, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }

    idx += 1;
  }
}));

module.exports = find;

/***/ }),

/***/ "./node_modules/ramda/src/forEach.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/forEach.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _checkForMethod =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_checkForMethod.js */ "./node_modules/ramda/src/internal/_checkForMethod.js");

var _curry2 =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_curry2.js */ "./node_modules/ramda/src/internal/_curry2.js");
/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @see R.addIndex
 * @example
 *
 *      const printXPlusFive = x => console.log(x + 5);
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 */


var forEach =
/*#__PURE__*/
_curry2(
/*#__PURE__*/
_checkForMethod('forEach', function forEach(fn, list) {
  var len = list.length;
  var idx = 0;

  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }

  return list;
}));

module.exports = forEach;

/***/ }),

/***/ "./node_modules/ramda/src/includes.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/includes.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _includes =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_includes.js */ "./node_modules/ramda/src/internal/_includes.js");

var _curry2 =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_curry2.js */ "./node_modules/ramda/src/internal/_curry2.js");
/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 * Also works with strings.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.includes(3, [1, 2, 3]); //=> true
 *      R.includes(4, [1, 2, 3]); //=> false
 *      R.includes({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.includes([42], [[42]]); //=> true
 *      R.includes('ba', 'banana'); //=>true
 */


var includes =
/*#__PURE__*/
_curry2(_includes);

module.exports = includes;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_arity.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/src/internal/_arity.js ***!
  \***************************************************/
/***/ (function(module) {

function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };

    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };

    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };

    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };

    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };

    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };

    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };

    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };

    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };

    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };

    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };

    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}

module.exports = _arity;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_arrayFromIterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/ramda/src/internal/_arrayFromIterator.js ***!
  \***************************************************************/
/***/ (function(module) {

function _arrayFromIterator(iter) {
  var list = [];
  var next;

  while (!(next = iter.next()).done) {
    list.push(next.value);
  }

  return list;
}

module.exports = _arrayFromIterator;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_checkForMethod.js":
/*!************************************************************!*\
  !*** ./node_modules/ramda/src/internal/_checkForMethod.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _isArray =
/*#__PURE__*/
__webpack_require__(/*! ./_isArray.js */ "./node_modules/ramda/src/internal/_isArray.js");
/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implementation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */


function _checkForMethod(methodname, fn) {
  return function () {
    var length = arguments.length;

    if (length === 0) {
      return fn();
    }

    var obj = arguments[length - 1];
    return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
}

module.exports = _checkForMethod;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_complement.js":
/*!********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_complement.js ***!
  \********************************************************/
/***/ (function(module) {

function _complement(f) {
  return function () {
    return !f.apply(this, arguments);
  };
}

module.exports = _complement;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_concat.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_concat.js ***!
  \****************************************************/
/***/ (function(module) {

/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];
  idx = 0;

  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }

  idx = 0;

  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }

  return result;
}

module.exports = _concat;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry1.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curry1.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _isPlaceholder =
/*#__PURE__*/
__webpack_require__(/*! ./_isPlaceholder.js */ "./node_modules/ramda/src/internal/_isPlaceholder.js");
/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

module.exports = _curry1;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry2.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curry2.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _curry1 =
/*#__PURE__*/
__webpack_require__(/*! ./_curry1.js */ "./node_modules/ramda/src/internal/_curry1.js");

var _isPlaceholder =
/*#__PURE__*/
__webpack_require__(/*! ./_isPlaceholder.js */ "./node_modules/ramda/src/internal/_isPlaceholder.js");
/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;

      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b);
        });

      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

module.exports = _curry2;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry3.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curry3.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _curry1 =
/*#__PURE__*/
__webpack_require__(/*! ./_curry1.js */ "./node_modules/ramda/src/internal/_curry1.js");

var _curry2 =
/*#__PURE__*/
__webpack_require__(/*! ./_curry2.js */ "./node_modules/ramda/src/internal/_curry2.js");

var _isPlaceholder =
/*#__PURE__*/
__webpack_require__(/*! ./_isPlaceholder.js */ "./node_modules/ramda/src/internal/_isPlaceholder.js");
/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;

      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        });

      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1(function (_c) {
          return fn(a, b, _c);
        });

      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder(c) ? _curry1(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}

module.exports = _curry3;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curryN.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curryN.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _arity =
/*#__PURE__*/
__webpack_require__(/*! ./_arity.js */ "./node_modules/ramda/src/internal/_arity.js");

var _isPlaceholder =
/*#__PURE__*/
__webpack_require__(/*! ./_isPlaceholder.js */ "./node_modules/ramda/src/internal/_isPlaceholder.js");
/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;

    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;

      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }

      combined[combinedIdx] = result;

      if (!_isPlaceholder(result)) {
        left -= 1;
      }

      combinedIdx += 1;
    }

    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
  };
}

module.exports = _curryN;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_dispatchable.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_dispatchable.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _isArray =
/*#__PURE__*/
__webpack_require__(/*! ./_isArray.js */ "./node_modules/ramda/src/internal/_isArray.js");

var _isTransformer =
/*#__PURE__*/
__webpack_require__(/*! ./_isTransformer.js */ "./node_modules/ramda/src/internal/_isTransformer.js");
/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer created by [transducerCreator] to return a new transformer
 * (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} transducerCreator transducer factory if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */


function _dispatchable(methodNames, transducerCreator, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }

    var obj = arguments[arguments.length - 1];

    if (!_isArray(obj)) {
      var idx = 0;

      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, Array.prototype.slice.call(arguments, 0, -1));
        }

        idx += 1;
      }

      if (_isTransformer(obj)) {
        var transducer = transducerCreator.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return transducer(obj);
      }
    }

    return fn.apply(this, arguments);
  };
}

module.exports = _dispatchable;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_equals.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_equals.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _arrayFromIterator =
/*#__PURE__*/
__webpack_require__(/*! ./_arrayFromIterator.js */ "./node_modules/ramda/src/internal/_arrayFromIterator.js");

var _includesWith =
/*#__PURE__*/
__webpack_require__(/*! ./_includesWith.js */ "./node_modules/ramda/src/internal/_includesWith.js");

var _functionName =
/*#__PURE__*/
__webpack_require__(/*! ./_functionName.js */ "./node_modules/ramda/src/internal/_functionName.js");

var _has =
/*#__PURE__*/
__webpack_require__(/*! ./_has.js */ "./node_modules/ramda/src/internal/_has.js");

var _objectIs =
/*#__PURE__*/
__webpack_require__(/*! ./_objectIs.js */ "./node_modules/ramda/src/internal/_objectIs.js");

var keys =
/*#__PURE__*/
__webpack_require__(/*! ../keys.js */ "./node_modules/ramda/src/keys.js");

var type =
/*#__PURE__*/
__webpack_require__(/*! ../type.js */ "./node_modules/ramda/src/type.js");
/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparison of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */


function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator);

  var b = _arrayFromIterator(bIterator);

  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  } // if *a* array contains any element that is not included in *b*


  return !_includesWith(function (b, aItem) {
    return !_includesWith(eq, aItem, b);
  }, b, a);
}

function _equals(a, b, stackA, stackB) {
  if (_objectIs(a, b)) {
    return true;
  }

  var typeA = type(a);

  if (typeA !== type(b)) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }

  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
        return a === b;
      }

      break;

    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && _objectIs(a.valueOf(), b.valueOf()))) {
        return false;
      }

      break;

    case 'Date':
      if (!_objectIs(a.valueOf(), b.valueOf())) {
        return false;
      }

      break;

    case 'Error':
      return a.name === b.name && a.message === b.message;

    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }

      break;
  }

  var idx = stackA.length - 1;

  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }

    idx -= 1;
  }

  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));

    case 'Set':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));

    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;

    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = keys(a);

  if (keysA.length !== keys(b).length) {
    return false;
  }

  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);
  idx = keysA.length - 1;

  while (idx >= 0) {
    var key = keysA[idx];

    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }

    idx -= 1;
  }

  return true;
}

module.exports = _equals;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_filter.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_filter.js ***!
  \****************************************************/
/***/ (function(module) {

function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }

    idx += 1;
  }

  return result;
}

module.exports = _filter;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_functionName.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_functionName.js ***!
  \**********************************************************/
/***/ (function(module) {

function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}

module.exports = _functionName;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_has.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/src/internal/_has.js ***!
  \*************************************************/
/***/ (function(module) {

function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = _has;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_includes.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_includes.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _indexOf =
/*#__PURE__*/
__webpack_require__(/*! ./_indexOf.js */ "./node_modules/ramda/src/internal/_indexOf.js");

function _includes(a, list) {
  return _indexOf(list, a, 0) >= 0;
}

module.exports = _includes;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_includesWith.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_includesWith.js ***!
  \**********************************************************/
/***/ (function(module) {

function _includesWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }

    idx += 1;
  }

  return false;
}

module.exports = _includesWith;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_indexOf.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_indexOf.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var equals =
/*#__PURE__*/
__webpack_require__(/*! ../equals.js */ "./node_modules/ramda/src/equals.js");

function _indexOf(list, a, idx) {
  var inf, item; // Array.prototype.indexOf doesn't exist below IE9

  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;

          while (idx < list.length) {
            item = list[idx];

            if (item === 0 && 1 / item === inf) {
              return idx;
            }

            idx += 1;
          }

          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];

            if (typeof item === 'number' && item !== item) {
              return idx;
            }

            idx += 1;
          }

          return -1;
        } // non-zero numbers can utilise Set


        return list.indexOf(a, idx);
      // all these types can utilise Set

      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }

    }
  } // anything else not covered above, defer to R.equals


  while (idx < list.length) {
    if (equals(list[idx], a)) {
      return idx;
    }

    idx += 1;
  }

  return -1;
}

module.exports = _indexOf;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isArguments.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isArguments.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _has =
/*#__PURE__*/
__webpack_require__(/*! ./_has.js */ "./node_modules/ramda/src/internal/_has.js");

var toString = Object.prototype.toString;

var _isArguments =
/*#__PURE__*/
function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return _has('callee', x);
  };
}();

module.exports = _isArguments;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isArray.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isArray.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
module.exports = Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
};

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isArrayLike.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isArrayLike.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _curry1 =
/*#__PURE__*/
__webpack_require__(/*! ./_curry1.js */ "./node_modules/ramda/src/internal/_curry1.js");

var _isArray =
/*#__PURE__*/
__webpack_require__(/*! ./_isArray.js */ "./node_modules/ramda/src/internal/_isArray.js");

var _isString =
/*#__PURE__*/
__webpack_require__(/*! ./_isString.js */ "./node_modules/ramda/src/internal/_isString.js");
/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 *      _isArrayLike({nodeType: 1, length: 1}) // => false
 */


var _isArrayLike =
/*#__PURE__*/
_curry1(function isArrayLike(x) {
  if (_isArray(x)) {
    return true;
  }

  if (!x) {
    return false;
  }

  if (typeof x !== 'object') {
    return false;
  }

  if (_isString(x)) {
    return false;
  }

  if (x.length === 0) {
    return true;
  }

  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }

  return false;
});

module.exports = _isArrayLike;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isObject.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isObject.js ***!
  \******************************************************/
/***/ (function(module) {

function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

module.exports = _isObject;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isPlaceholder.js":
/*!***********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isPlaceholder.js ***!
  \***********************************************************/
/***/ (function(module) {

function _isPlaceholder(a) {
  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

module.exports = _isPlaceholder;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isString.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isString.js ***!
  \******************************************************/
/***/ (function(module) {

function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}

module.exports = _isString;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isTransformer.js":
/*!***********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isTransformer.js ***!
  \***********************************************************/
/***/ (function(module) {

function _isTransformer(obj) {
  return obj != null && typeof obj['@@transducer/step'] === 'function';
}

module.exports = _isTransformer;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_map.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/src/internal/_map.js ***!
  \*************************************************/
/***/ (function(module) {

function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);

  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }

  return result;
}

module.exports = _map;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_objectIs.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_objectIs.js ***!
  \******************************************************/
/***/ (function(module) {

// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function _objectIs(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
}

module.exports = typeof Object.is === 'function' ? Object.is : _objectIs;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_reduce.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_reduce.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _isArrayLike =
/*#__PURE__*/
__webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/ramda/src/internal/_isArrayLike.js");

var _xwrap =
/*#__PURE__*/
__webpack_require__(/*! ./_xwrap.js */ "./node_modules/ramda/src/internal/_xwrap.js");

var bind =
/*#__PURE__*/
__webpack_require__(/*! ../bind.js */ "./node_modules/ramda/src/bind.js");

function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }

    idx += 1;
  }

  return xf['@@transducer/result'](acc);
}

function _iterableReduce(xf, acc, iter) {
  var step = iter.next();

  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }

    step = iter.next();
  }

  return xf['@@transducer/result'](acc);
}

function _methodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
}

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';

function _reduce(fn, acc, list) {
  if (typeof fn === 'function') {
    fn = _xwrap(fn);
  }

  if (_isArrayLike(list)) {
    return _arrayReduce(fn, acc, list);
  }

  if (typeof list['fantasy-land/reduce'] === 'function') {
    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
  }

  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }

  if (typeof list.next === 'function') {
    return _iterableReduce(fn, acc, list);
  }

  if (typeof list.reduce === 'function') {
    return _methodReduce(fn, acc, list, 'reduce');
  }

  throw new TypeError('reduce: list must be array or iterable');
}

module.exports = _reduce;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_reduced.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_reduced.js ***!
  \*****************************************************/
/***/ (function(module) {

function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x : {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}

module.exports = _reduced;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_xfBase.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xfBase.js ***!
  \****************************************************/
/***/ (function(module) {

module.exports = {
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
};

/***/ }),

/***/ "./node_modules/ramda/src/internal/_xfilter.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xfilter.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _curry2 =
/*#__PURE__*/
__webpack_require__(/*! ./_curry2.js */ "./node_modules/ramda/src/internal/_curry2.js");

var _xfBase =
/*#__PURE__*/
__webpack_require__(/*! ./_xfBase.js */ "./node_modules/ramda/src/internal/_xfBase.js");

var XFilter =
/*#__PURE__*/
function () {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;

  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return XFilter;
}();

var _xfilter =
/*#__PURE__*/
_curry2(function _xfilter(f, xf) {
  return new XFilter(f, xf);
});

module.exports = _xfilter;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_xfind.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xfind.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _curry2 =
/*#__PURE__*/
__webpack_require__(/*! ./_curry2.js */ "./node_modules/ramda/src/internal/_curry2.js");

var _reduced =
/*#__PURE__*/
__webpack_require__(/*! ./_reduced.js */ "./node_modules/ramda/src/internal/_reduced.js");

var _xfBase =
/*#__PURE__*/
__webpack_require__(/*! ./_xfBase.js */ "./node_modules/ramda/src/internal/_xfBase.js");

var XFind =
/*#__PURE__*/
function () {
  function XFind(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }

  XFind.prototype['@@transducer/init'] = _xfBase.init;

  XFind.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, void 0);
    }

    return this.xf['@@transducer/result'](result);
  };

  XFind.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, input));
    }

    return result;
  };

  return XFind;
}();

var _xfind =
/*#__PURE__*/
_curry2(function _xfind(f, xf) {
  return new XFind(f, xf);
});

module.exports = _xfind;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_xmap.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xmap.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _curry2 =
/*#__PURE__*/
__webpack_require__(/*! ./_curry2.js */ "./node_modules/ramda/src/internal/_curry2.js");

var _xfBase =
/*#__PURE__*/
__webpack_require__(/*! ./_xfBase.js */ "./node_modules/ramda/src/internal/_xfBase.js");

var XMap =
/*#__PURE__*/
function () {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XMap.prototype['@@transducer/init'] = _xfBase.init;
  XMap.prototype['@@transducer/result'] = _xfBase.result;

  XMap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return XMap;
}();

var _xmap =
/*#__PURE__*/
_curry2(function _xmap(f, xf) {
  return new XMap(f, xf);
});

module.exports = _xmap;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_xtake.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xtake.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _curry2 =
/*#__PURE__*/
__webpack_require__(/*! ./_curry2.js */ "./node_modules/ramda/src/internal/_curry2.js");

var _reduced =
/*#__PURE__*/
__webpack_require__(/*! ./_reduced.js */ "./node_modules/ramda/src/internal/_reduced.js");

var _xfBase =
/*#__PURE__*/
__webpack_require__(/*! ./_xfBase.js */ "./node_modules/ramda/src/internal/_xfBase.js");

var XTake =
/*#__PURE__*/
function () {
  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }

  XTake.prototype['@@transducer/init'] = _xfBase.init;
  XTake.prototype['@@transducer/result'] = _xfBase.result;

  XTake.prototype['@@transducer/step'] = function (result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
    return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
  };

  return XTake;
}();

var _xtake =
/*#__PURE__*/
_curry2(function _xtake(n, xf) {
  return new XTake(n, xf);
});

module.exports = _xtake;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_xwrap.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xwrap.js ***!
  \***************************************************/
/***/ (function(module) {

var XWrap =
/*#__PURE__*/
function () {
  function XWrap(fn) {
    this.f = fn;
  }

  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };

  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };

  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  return XWrap;
}();

function _xwrap(fn) {
  return new XWrap(fn);
}

module.exports = _xwrap;

/***/ }),

/***/ "./node_modules/ramda/src/keys.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/keys.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _curry1 =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_curry1.js */ "./node_modules/ramda/src/internal/_curry1.js");

var _has =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_has.js */ "./node_modules/ramda/src/internal/_has.js");

var _isArguments =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_isArguments.js */ "./node_modules/ramda/src/internal/_isArguments.js"); // cover IE < 9 keys issues


var hasEnumBug = !
/*#__PURE__*/
{
  toString: null
}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']; // Safari bug

var hasArgsEnumBug =
/*#__PURE__*/
function () {
  'use strict';

  return arguments.propertyIsEnumerable('length');
}();

var contains = function contains(list, item) {
  var idx = 0;

  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }

    idx += 1;
  }

  return false;
};
/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values, R.toPairs
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */


var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ?
/*#__PURE__*/
_curry1(function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) :
/*#__PURE__*/
_curry1(function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }

  var prop, nIdx;
  var ks = [];

  var checkArgsLength = hasArgsEnumBug && _isArguments(obj);

  for (prop in obj) {
    if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }

  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;

    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];

      if (_has(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }

      nIdx -= 1;
    }
  }

  return ks;
});
module.exports = keys;

/***/ }),

/***/ "./node_modules/ramda/src/map.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/map.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _curry2 =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_curry2.js */ "./node_modules/ramda/src/internal/_curry2.js");

var _dispatchable =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_dispatchable.js */ "./node_modules/ramda/src/internal/_dispatchable.js");

var _map =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_map.js */ "./node_modules/ramda/src/internal/_map.js");

var _reduce =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_reduce.js */ "./node_modules/ramda/src/internal/_reduce.js");

var _xmap =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_xmap.js */ "./node_modules/ramda/src/internal/_xmap.js");

var curryN =
/*#__PURE__*/
__webpack_require__(/*! ./curryN.js */ "./node_modules/ramda/src/curryN.js");

var keys =
/*#__PURE__*/
__webpack_require__(/*! ./keys.js */ "./node_modules/ramda/src/keys.js");
/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex, R.pluck, R.project
 * @example
 *
 *      const double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */


var map =
/*#__PURE__*/
_curry2(
/*#__PURE__*/
_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return curryN(functor.length, function () {
        return fn.call(this, functor.apply(this, arguments));
      });

    case '[object Object]':
      return _reduce(function (acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, keys(functor));

    default:
      return _map(fn, functor);
  }
}));

module.exports = map;

/***/ }),

/***/ "./node_modules/ramda/src/reduce.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/reduce.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _curry3 =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_curry3.js */ "./node_modules/ramda/src/internal/_curry3.js");

var _reduce =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_reduce.js */ "./node_modules/ramda/src/internal/_reduce.js");
/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */


var reduce =
/*#__PURE__*/
_curry3(_reduce);

module.exports = reduce;

/***/ }),

/***/ "./node_modules/ramda/src/reject.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/reject.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _complement =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_complement.js */ "./node_modules/ramda/src/internal/_complement.js");

var _curry2 =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_curry2.js */ "./node_modules/ramda/src/internal/_curry2.js");

var filter =
/*#__PURE__*/
__webpack_require__(/*! ./filter.js */ "./node_modules/ramda/src/filter.js");
/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      const isOdd = (n) => n % 2 !== 0;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */


var reject =
/*#__PURE__*/
_curry2(function reject(pred, filterable) {
  return filter(_complement(pred), filterable);
});

module.exports = reject;

/***/ }),

/***/ "./node_modules/ramda/src/slice.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/slice.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _checkForMethod =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_checkForMethod.js */ "./node_modules/ramda/src/internal/_checkForMethod.js");

var _curry3 =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_curry3.js */ "./node_modules/ramda/src/internal/_curry3.js");
/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */


var slice =
/*#__PURE__*/
_curry3(
/*#__PURE__*/
_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));

module.exports = slice;

/***/ }),

/***/ "./node_modules/ramda/src/startsWith.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/src/startsWith.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _curry2 =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_curry2.js */ "./node_modules/ramda/src/internal/_curry2.js");

var equals =
/*#__PURE__*/
__webpack_require__(/*! ./equals.js */ "./node_modules/ramda/src/equals.js");

var take =
/*#__PURE__*/
__webpack_require__(/*! ./take.js */ "./node_modules/ramda/src/take.js");
/**
 * Checks if a list starts with the provided sublist.
 *
 * Similarly, checks if a string starts with the provided substring.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> [a] -> Boolean
 * @sig String -> String -> Boolean
 * @param {*} prefix
 * @param {*} list
 * @return {Boolean}
 * @see R.endsWith
 * @example
 *
 *      R.startsWith('a', 'abc')                //=> true
 *      R.startsWith('b', 'abc')                //=> false
 *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
 *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
 */


var startsWith =
/*#__PURE__*/
_curry2(function (prefix, list) {
  return equals(take(prefix.length, list), prefix);
});

module.exports = startsWith;

/***/ }),

/***/ "./node_modules/ramda/src/take.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/take.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _curry2 =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_curry2.js */ "./node_modules/ramda/src/internal/_curry2.js");

var _dispatchable =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_dispatchable.js */ "./node_modules/ramda/src/internal/_dispatchable.js");

var _xtake =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_xtake.js */ "./node_modules/ramda/src/internal/_xtake.js");

var slice =
/*#__PURE__*/
__webpack_require__(/*! ./slice.js */ "./node_modules/ramda/src/slice.js");
/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      const personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      const takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */


var take =
/*#__PURE__*/
_curry2(
/*#__PURE__*/
_dispatchable(['take'], _xtake, function take(n, xs) {
  return slice(0, n < 0 ? Infinity : n, xs);
}));

module.exports = take;

/***/ }),

/***/ "./node_modules/ramda/src/toPairs.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/toPairs.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _curry1 =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_curry1.js */ "./node_modules/ramda/src/internal/_curry1.js");

var _has =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_has.js */ "./node_modules/ramda/src/internal/_has.js");
/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs, R.keys, R.values
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */


var toPairs =
/*#__PURE__*/
_curry1(function toPairs(obj) {
  var pairs = [];

  for (var prop in obj) {
    if (_has(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }

  return pairs;
});

module.exports = toPairs;

/***/ }),

/***/ "./node_modules/ramda/src/type.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/type.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _curry1 =
/*#__PURE__*/
__webpack_require__(/*! ./internal/_curry1.js */ "./node_modules/ramda/src/internal/_curry1.js");
/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */


var type =
/*#__PURE__*/
_curry1(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});

module.exports = type;

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ (function(module) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerStyleSheet": function() { return /* binding */ Je; },
/* harmony export */   "StyleSheetConsumer": function() { return /* binding */ le; },
/* harmony export */   "StyleSheetContext": function() { return /* binding */ ue; },
/* harmony export */   "StyleSheetManager": function() { return /* binding */ ye; },
/* harmony export */   "ThemeConsumer": function() { return /* binding */ Le; },
/* harmony export */   "ThemeContext": function() { return /* binding */ Ge; },
/* harmony export */   "ThemeProvider": function() { return /* binding */ Fe; },
/* harmony export */   "__PRIVATE__": function() { return /* binding */ Ke; },
/* harmony export */   "createGlobalStyle": function() { return /* binding */ We; },
/* harmony export */   "css": function() { return /* binding */ Ce; },
/* harmony export */   "isStyledComponent": function() { return /* binding */ N; },
/* harmony export */   "keyframes": function() { return /* binding */ Ue; },
/* harmony export */   "useTheme": function() { return /* binding */ Ze; },
/* harmony export */   "version": function() { return /* binding */ C; },
/* harmony export */   "withTheme": function() { return /* binding */ Xe; }
/* harmony export */ });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/styled-components/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.typeOf)(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return"function"==typeof e}function _(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="5.3.3",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),O={},R= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:0;function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?0:new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),x=new Map,k=new Map,V=1,B=function(e){if(x.has(e))return x.get(e);for(;k.has(V);)V++;var t=V++;return true&&((0|t)<0||t>1<<30)&&j(16,""+t),x.set(e,t),k.set(t,e),t},z=function(e){return k.get(e)},M=function(e,t){t>=V&&(V=t+1),x.set(e,t),k.set(t,e)},G="style["+A+'][data-styled-version="5.3.3"]',L=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},Y=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(L);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(M(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},q=function(){return"undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.3.3");var i=q();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(G),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=z(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=A+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return!1}return!0}var oe=ne("5.3.3"),se=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&0,this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=Ne(this.rules,e,t,n).join(""),i=ee(te(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),ie=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,s=void 0===e?E:e,i=s.options,a=void 0===i?E:i,c=s.plugins,u=void 0===c?w:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,s){return 0===r&&-1!==ae.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(ie,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),le=ue.Consumer,de=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ue)||he}function me(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(de)||pe}function ye(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e.stylisPlugins),n=t[0],s=t[1],c=fe(),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return ce({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ue.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1___default().createElement(de.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1___default().Children.only(e.children):0))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return"-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(_e(e))return"";if(N(e))return"."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isElement)(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!_e(t[i])&&(Array.isArray(t[i])&&t[i].isCss||b(t[i])?s.push(be(i)+":",t[i],";"):S(t[i])?s.push.apply(s,e(t[i],i)):s.push(be(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"]?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ae=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ce(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ae(Ne(g(w,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ae(Ne(g(e,n)))}var Ie=/invalid hook call/i,Pe=new Set,Oe=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",r=console.error;try{var o=!0;console.error=function(e){if(Ie.test(e))o=!1,Pe.delete(n);else{for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];r.apply(void 0,[e].concat(s))}},(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),o&&!Pe.has(n)&&(console.warn(n),Pe.add(n))}catch(e){Ie.test(e.message)&&Pe.delete(n)}finally{console.error=r}}},Re=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},De=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,je=/(^-|-$)/g;function Te(e){return e.replace(De,"-").replace(je,"")}var xe=function(e){return ee(ne(e)>>>0)};function ke(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var Ve=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Be=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function ze(e,t,n){var r=e[n];Ve(t)&&Ve(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(Ve(i))for(var a in i)Be(a)&&ze(e,i[a],a)}return e}var Ge=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),Le=Ge.Consumer;function Fe(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),n=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return function(e,t){if(!e)return j(14);if(b(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:j(7)}return Array.isArray(e)||"object"!=typeof e?j(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Ge.Provider,{value:n},e.children):null}var Ye={};function qe(e,t,n){var o=N(e),i=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":Te(e);Ye[n]=(Ye[n]||0)+1;var r=n+"-"+xe("5.3.3"+n+Ye[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?Te(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new se(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in b(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Re(t,(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),s=me(),i=t?e.generateAndInjectStyles(E,o,s):e.generateAndInjectStyles(n,o,s);return true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(i), true&&!t&&r&&r(i),i}(i,r,y, true?e.warnTooManyClasses:0),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"],_):!N||(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_,C)}(C,e,t,P)};return O.displayName=f,(C=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(ke(e)?e:Te(_(e)));return qe(e,v({},o,{attrs:S,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}), true&&(Oe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(f,g)),C.toString=function(){return"."+C.styledComponentId},i&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var He=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isValidElementType)(r))return j(1,String(r));var s=function(){return t(r,o,Ce.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v({},o,{},n))},s.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(qe,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){He[e]=He(e)}));var $e=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=re(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function We(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Ce.apply(void 0,[e].concat(n)),a="sc-global-"+xe(JSON.stringify(i)),u=new $e(i,a);function l(e){var t=fe(),n=me(),o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&i.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),t.server&&h(l,e,t,o,n),(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)((function(){if(!t.server)return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,O,n,o);else{var s=v({},t,{theme:Re(t,r,l.defaultProps)});u.renderStyles(e,s,n,o)}}return true&&Oe(a),react__WEBPACK_IMPORTED_MODULE_1___default().memo(l)}function Ue(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ce.apply(void 0,[e].concat(n)).join(""),s=xe(o);return new ve(s,o)}var Je=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=q();return"<style "+[n&&'nonce="'+n+'"',A+'="true"','data-styled-version="5.3.3"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?j(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return j(2);var n=((t={})[A]="",t["data-styled-version"]="5.3.3",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=q();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1___default().createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?j(2):react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ye,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return j(3)},e}(),Xe=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((function(t,n){var o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),i=e.defaultProps,a=Re(t,o,i);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+_(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+_(e)+")",t},Ze=function(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge)},Ke={StyleSheet:Z,masterSheet:he}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ __webpack_exports__["default"] = (He);
//# sourceMappingURL=styled-components.browser.esm.js.map


/***/ }),

/***/ "./node_modules/styled-components/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/styled-components/node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = (0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/styled-components/node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["richText"];

/***/ }),

/***/ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/maps/decode.json":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/maps/decode.json ***!
  \***********************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}');

/***/ }),

/***/ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/maps/entities.json":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/maps/entities.json ***!
  \*************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}');

/***/ }),

/***/ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/maps/legacy.json":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/maps/legacy.json ***!
  \***********************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}');

/***/ }),

/***/ "./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/maps/xml.json":
/*!********************************************************************************************************!*\
  !*** ./node_modules/html-to-react/node_modules/dom-serializer/node_modules/entities/lib/maps/xml.json ***!
  \********************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}');

/***/ }),

/***/ "./php/blocks/tweet-quotes/block.json":
/*!********************************************!*\
  !*** ./php/blocks/tweet-quotes/block.json ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"QuotesDLX","apiVersion":2,"name":"mediaron/quotes-dlx","category":"text","icon":"<svg width=\'100%\' height=\'100%\' viewBox=\'0 0 4450 4450\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' xml:space=\'preserve\' xmlns:serif=\'http://www.serif.com/\' style=\'fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;\'\'><g transform=\'matrix(4.16667,0,0,4.16667,-1325.8,-2025.45)\'><path fill=\'#9932cc\' d=\'M852.07,1553.89C1146.14,1553.89 1385.98,1314.05 1385.98,1020.01C1385.98,725.948 1146.14,486.109 852.07,486.109C558.033,486.109 318.193,725.948 318.193,1020.01C318.193,1314.05 558.033,1553.89 852.07,1553.89Z\'/><path d=\'M645.766,833.41C718.162,813.992 792.571,856.965 811.989,929.362C838.72,1029.11 795.378,1186.69 610.36,1211.24C650.471,1170.11 675.614,1140.15 686.018,1100.12C624.08,1102.5 566.509,1062 549.813,999.605C530.396,927.208 573.368,852.798 645.766,833.41Z\' style=\'fill:white;\'/><path d=\'M988.445,833.41C1060.84,813.992 1135.28,856.965 1154.67,929.362C1181.4,1029.11 1138.09,1186.69 953.069,1211.24C993.151,1170.11 1018.29,1140.15 1028.7,1100.12C966.761,1102.5 909.188,1062 892.493,999.605C873.104,927.208 916.049,852.798 988.445,833.41Z\' style=\'fill:white;\'/></g></svg>","description":"WordPress Twitter block that makes it dead simple for users to share your quotes.","keywords":["click","tweet","twitter","share","quote","blockquote","dlx","quotes","dlx","quo"],"version":"1.0.0","textdomain":"quotes-dlx","attributes":{"show_copy":{"type":"boolean","default":true},"show_permalink":{"type":"boolean","default":true},"template":{"type":"string","default":"light"},"button_style":{"type":"string","default":"default"},"share_text":{"type":"string","default":""},"share_text_override":{"type":"string","default":""},"share_button_text":{"type":"string","default":"Click to Tweet"},"share_text_override_enabled":{"type":"boolean","default":false},"align":{"type":"string","default":"center"},"hashtags":{"type":"array","default":[]},"twitter_username":{"type":"string","default":""},"maximum_width":{"type":"number","default":850},"maximum_width_unit":{"type":"string","default":"px"},"rtl":{"type":"boolean","default":false},"tweet_button_alignment":{"type":"string","default":"right"},"tweet_icon_alignment":{"type":"string","default":"right"},"tweet_button_enabled":{"type":"boolean","default":true},"tweet_button_display":{"type":"string","default":"full"},"tweet_styles_disabled":{"type":"boolean","default":false},"anchor":{"type":"string","default":""},"anchor_prefix":{"type":"string","default":"qdlx"},"has_anchor":{"type":"boolean","default":true},"url_shortener":{"type":"boolean","default":true},"url_shortening_service":{"type":"string","default":"none"},"permalink":{"type":"string","default":""},"manualPermalink":{"type":"string","default":""},"enable_links_in_tweet":{"type":"boolean","default":true},"enable_contextual_menu":{"type":"boolean","default":true},"enable_copy_text":{"type":"boolean","default":true},"enable_copy_tweet":{"type":"boolean","default":true},"enable_copy_link":{"type":"boolean","default":true},"enable_tweet_this":{"type":"boolean","default":true},"preview":{"type":"boolean","default":false},"blockOnly":{"type":"boolean","default":false},"defaultsApplied":{"type":"boolean","default":false},"transforming":{"type":"boolean","default":false}},"example":{"attributes":{"preview":true,"blockOnly":true,"share_text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada dui id nisi vulputate semper. Nam sagittis ac nulla id pharetra. Maecenas congue, tellus a blandit cursus, lorem dolor hendrerit erat, sed luctus arcu velit eget ligula.","template":"purple-bliss","enable_contextual_menu":true,"enable_copy_text":true,"enable_copy_tweet":true,"enable_copy_link":true,"enable_tweet_this":true,"maximum_width":800,"maximum_width_unit":"px"}},"supports":{"anchor":true,"align":true,"className":true},"editorScript":"quotes-dlx-block","editorStyle":"quotes-dlx-block-editor-styles","style":"quotes-dlx-frontend","viewScript":"quotes-dlx-actions"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*********************************************!*\
  !*** ./src/js/blocks/tweet-quotes/index.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _php_blocks_tweet_quotes_block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../php/blocks/tweet-quotes/block.json */ "./php/blocks/tweet-quotes/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/js/blocks/tweet-quotes/edit.js");
/* harmony import */ var _components_icons_QuotesIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/icons/QuotesIcon */ "./src/js/components/icons/QuotesIcon.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_php_blocks_tweet_quotes_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: function save() {
    return null;
  },
  icon: /*#__PURE__*/React.createElement(_components_icons_QuotesIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fill: "#9932cc"
  }),
  transforms: {
    from: [{
      type: 'block',
      blocks: ['bctt/clicktotweet'],
      transform: function transform(_ref) {
        var tweet = _ref.tweet,
            username = _ref.username,
            via = _ref.via,
            url = _ref.url,
            urlcustom = _ref.urlcustom,
            prompt = _ref.prompt;
        var twitterUsername = username;

        if (!via) {
          twitterUsername = '';
        }

        var bcttAttributes = {
          share_text: tweet,
          share_button_text: prompt,
          twitter_username: twitterUsername,
          enable_links_in_tweet: url,
          has_anchor: url,
          transforming: true
        };

        if (url && '' !== urlcustom) {
          bcttAttributes.permalink = urlcustom;
          bcttAttributes.url_shortening_service = 'manual';
        }

        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('mediaron/quotes-dlx', bcttAttributes);
      }
    }, {
      type: 'block',
      blocks: ['core/pullquote'],
      transform: function transform(_ref2) {
        var value = _ref2.value;
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('mediaron/quotes-dlx', {
          share_text: value
        });
      }
    }, {
      type: 'block',
      blocks: ['core/paragraph'],
      isMultiBlock: true,
      // eslint-disable-next-line no-unused-vars
      transform: function transform(paragraphs, innerBlocks) {
        var content = paragraphs.map(function (attributes) {
          return attributes.content; // eslint-disable-next-line quotes
        }).join('\r\n\r\n'); // Trim spacing at end.

        content.replace('/s+$/', '');
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('mediaron/quotes-dlx', {
          share_text: content
        });
      }
    }, {
      type: 'block',
      blocks: ['core/quote'],
      transform: function transform(_ref3) {
        var value = _ref3.value,
            align = _ref3.align;
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('mediaron/quotes-dlx', {
          share_text: value,
          align: align
        });
      }
    }, {
      type: 'block',
      blocks: ['core/verse'],
      transform: function transform(_ref4) {
        var content = _ref4.content;
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('mediaron/quotes-dlx', {
          share_text: content
        });
      }
    }, {
      type: 'block',
      blocks: ['has/click-to-share'],
      transform: function transform(_ref5) {
        var shareText = _ref5.shareText,
            clickText = _ref5.clickText;
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('mediaron/quotes-dlx', {
          share_text: shareText,
          share_button_text: clickText,
          transforming: true
        });
      }
    }, {
      type: 'block',
      blocks: ['coblocks/click-to-tweet'],
      transform: function transform(_ref6) {
        var buttonText = _ref6.buttonText,
            content = _ref6.content,
            via = _ref6.via;
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('mediaron/quotes-dlx', {
          share_text: content,
          share_button_text: buttonText,
          twitter_username: via,
          transforming: true
        });
      }
    }, {
      type: 'enter',
      regExp: /^quotesdlx$/,
      transform: function transform() {
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('mediaron/quotes-dlx');
      }
    }],
    to: [{
      type: 'block',
      blocks: ['core/paragraph'],
      transform: function transform(_ref7) {
        var share_text = _ref7.share_text;
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/paragraph', {
          content: (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.toHTMLString)({
            // Stolen from: https://github.com/WordPress/gutenberg/pull/23562/files
            value: (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.create)({
              html: share_text,
              preserveWhiteSpace: true
            }),
            multilineTag: 'p'
          })
        });
      }
    }, {
      type: 'block',
      blocks: ['core/quote'],
      transform: function transform(_ref8) {
        var share_text = _ref8.share_text;
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/quote', {
          value: (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.toHTMLString)({
            // Stolen from: https://github.com/WordPress/gutenberg/pull/23562/files
            value: (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.create)({
              html: share_text
            }),
            multilineTag: 'p'
          })
        });
      }
    }, {
      type: 'block',
      blocks: ['core/pullquote'],
      transform: function transform(_ref9) {
        var share_text = _ref9.share_text;
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/pullquote', {
          value: (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.toHTMLString)({
            // Stolen from: https://github.com/WordPress/gutenberg/pull/23562/files
            value: (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.create)({
              html: share_text
            }),
            multilineTag: 'p'
          })
        });
      }
    }]
  }
});
}();
/******/ })()
;
//# sourceMappingURL=quotes-dlx.js.map