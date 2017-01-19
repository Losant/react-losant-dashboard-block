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
var React = require('react');
var ReactDOM = require('react-dom');
var LosantDashboardBlock = require('react-losant-dashboard-block');

var App = React.createClass({

	getInitialState() {
		return {
			dashboardId:'56f0918f2d198e01002b05d4',
			blockId:'SyPLQVEe', // office plants
			theme:'light',
			width:'100%',
			height:'240px'
		};
	},

	_handleChange(event) {
		console.log(event.target.name, event.target.value);
		this.setState({[event.target.name]: event.target.value});
	},

	render () {
		const {dashboardId, blockId, theme, width, height} = this.state;
		return (
			<div>
{/*}
				<input name="dashboardId" value={dashboardId} onChange={this._handleChange} />
				<input name="blockId" value={blockId} onChange={this._handleChange} />
				<input name="width" value={width} onChange={this._handleChange} />
				<input name="height" value={height} onChange={this._handleChange} />
				<input name="theme" type="radio" value="light" onChange={this._handleChange} checked={theme === 'light'} />
				<input name="theme" type="radio" value="dark" onChange={this._handleChange} checked={theme === 'dark'} />
{*/}
				<LosantDashboardBlock
					theme={theme}
					width={width}
					height={height}
					dashboardId={dashboardId}
					blockId={blockId} />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
