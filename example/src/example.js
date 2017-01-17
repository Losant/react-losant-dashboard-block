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
