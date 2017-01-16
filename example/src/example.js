var React = require('react');
var ReactDOM = require('react-dom');
var LosantDashboardBlock = require('react-losant-dashboard-block');

var App = React.createClass({
	render () {
		return (
			<div>
				<LosantDashboardBlock
					dashboardId="56f0918f2d198e01002b05d4"
					blockId="SyPLQVEe" />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
