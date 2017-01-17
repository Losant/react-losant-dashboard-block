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
	dashboardId: _react.PropTypes.string,
	blockId: _react.PropTypes.string,
	theme: _react.PropTypes.oneOf(['light', 'dark']),
	style: _react.PropTypes.object,
	width: _react.PropTypes.string, // CSS units
	height: _react.PropTypes.string // CSS units
};

LosantDashboardBlock.defaultProps = {
	//dashboardId: '56f0918f2d198e01002b05d4',
	//blockId: 'SyPLQVEe',
	theme: 'light',
	width: '100%',
	height: '240px'
};

exports['default'] = LosantDashboardBlock;
module.exports = exports['default'];