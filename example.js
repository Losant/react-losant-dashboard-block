require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var React = require('react');
var ReactDOM = require('react-dom');
var LosantDashboardBlock = require('react-losant-dashboard-block');

var App = React.createClass({
	displayName: 'App',

	getInitialState: function getInitialState() {
		return {
			dashboardId: '56f0918f2d198e01002b05d4',
			blockId: 'SyPLQVEe', // office plants
			theme: 'light',
			width: '100%',
			height: '240px'
		};
	},

	_handleChange: function _handleChange(event) {
		console.log(event.target.name, event.target.value);
		this.setState(_defineProperty({}, event.target.name, event.target.value));
	},

	render: function render() {
		var _state = this.state;
		var dashboardId = _state.dashboardId;
		var blockId = _state.blockId;
		var theme = _state.theme;
		var width = _state.width;
		var height = _state.height;

		return React.createElement(
			'div',
			null,
			React.createElement(LosantDashboardBlock, {
				theme: theme,
				width: width,
				height: height,
				dashboardId: dashboardId,
				blockId: blockId })
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
/*}
			<input name="dashboardId" value={dashboardId} onChange={this._handleChange} />
			<input name="blockId" value={blockId} onChange={this._handleChange} />
			<input name="width" value={width} onChange={this._handleChange} />
			<input name="height" value={height} onChange={this._handleChange} />
			<input name="theme" type="radio" value="light" onChange={this._handleChange} checked={theme === 'light'} />
			<input name="theme" type="radio" value="dark" onChange={this._handleChange} checked={theme === 'dark'} />
{*/

},{"react":undefined,"react-dom":undefined,"react-losant-dashboard-block":undefined}]},{},[1]);
