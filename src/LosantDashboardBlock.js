/*jshint esversion: 6 */
import React, {Component, PropTypes} from 'react';

class LosantDashboardBlock extends Component {

	render() {
		const {dashboardId, blockId, width, height, style, theme} = this.props;
		if(!dashboardId || !blockId) {
			return (
				<div
					style={Object.assign({}, {width, height, lineHeight: height}, {style}, {background: '#f5f4f3', textAlign:'center'})}>
					<span style={{display:'inline-block',verticalAlign:'middle',lineHeight:'normal'}}>
						<code>dashboardId</code> and <code>blockId</code> are required.
					</span>
				</div>);
		}
		const url = `https://app.losant.com/#/block/${dashboardId}/${blockId}?theme=${theme}`;
		return (
			<iframe
				frameBorder={0}
				style={style}
				src={url}
				width={width}
				height={height} />
		);
	}
}

LosantDashboardBlock.propTypes = {
	dashboardId: PropTypes.string,
	blockId: PropTypes.string,
	theme: PropTypes.oneOf(['light','dark']),
	style: PropTypes.object,
	width: PropTypes.string, // CSS units
	height: PropTypes.string // CSS units
};

LosantDashboardBlock.defaultProps = {
	//dashboardId: '56f0918f2d198e01002b05d4',
	//blockId: 'SyPLQVEe',
	theme: 'light',
	width: '100%',
	height: '240px'
};

export default LosantDashboardBlock;
