require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-losant-dashboard-block":[function(require,module,exports){
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 Losant IoT, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*jshint esversion: 6 */
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var LosantDashboardBlock = (function (_Component) {
	_inherits(LosantDashboardBlock, _Component);

	function LosantDashboardBlock() {
		_classCallCheck(this, LosantDashboardBlock);

		_get(Object.getPrototypeOf(LosantDashboardBlock.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(LosantDashboardBlock, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var dashboardId = _props.dashboardId;
			var blockId = _props.blockId;
			var width = _props.width;
			var height = _props.height;
			var style = _props.style;
			var theme = _props.theme;
			var ctx = _props.ctx;

			if (!dashboardId || !blockId) {
				return _react2['default'].createElement(
					'div',
					{
						style: _extends({}, { width: width, height: height, lineHeight: height }, { style: style }, { background: '#f5f4f3', textAlign: 'center' }) },
					_react2['default'].createElement(
						'span',
						{ style: { display: 'inline-block', verticalAlign: 'middle', lineHeight: 'normal' } },
						_react2['default'].createElement(
							'code',
							null,
							'dashboardId'
						),
						' and ',
						_react2['default'].createElement(
							'code',
							null,
							'blockId'
						),
						' are required.'
					)
				);
			}
			var host = 'https://app.losant.com';
			var url = host + '/#/block/' + dashboardId + '/' + blockId + '?theme=' + theme;
			Object.keys(ctx || {}).forEach(function (key) {
				var val = ctx[key];
				url += '&ctx[' + key + ']=' + val;
			});
			return _react2['default'].createElement('iframe', {
				frameBorder: 0,
				style: style,
				src: url,
				width: width,
				height: height });
		}
	}]);

	return LosantDashboardBlock;
})(_react.Component);

LosantDashboardBlock.propTypes = {
	blockId: _react.PropTypes.string,
	ctx: _react.PropTypes.object,
	dashboardId: _react.PropTypes.string,
	height: _react.PropTypes.string, // CSS units
	style: _react.PropTypes.object,
	theme: _react.PropTypes.oneOf(['light', 'dark']),
	width: _react.PropTypes.string };

// CSS units
LosantDashboardBlock.defaultProps = {
	theme: 'light',
	width: '100%',
	height: '240px'
};

exports['default'] = LosantDashboardBlock;
module.exports = exports['default'];

},{"react":undefined}]},{},[]);
