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
import React, {Component, PropTypes} from 'react';

class LosantDashboardBlock extends Component {

	render() {
		const {dashboardId, blockId, width, height, style, theme, ctx} = this.props;
		if(!dashboardId || !blockId) {
			return (
				<div
					style={Object.assign({}, {width, height, lineHeight: height}, {style}, {background: '#f5f4f3', textAlign:'center'})}>
					<span style={{display:'inline-block',verticalAlign:'middle',lineHeight:'normal'}}>
						<code>dashboardId</code> and <code>blockId</code> are required.
					</span>
				</div>);
		}
		const host = 'https://app.losant.com';
		let url = `${host}/#/block/${dashboardId}/${blockId}?theme=${theme}`;
		Object.keys(ctx || {}).forEach((key) => {
			const val = ctx[key];
			url+= `&ctx[${key}]=${val}`;
		});
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
	blockId: PropTypes.string,
	ctx: PropTypes.object,
	dashboardId: PropTypes.string,
	height: PropTypes.string, // CSS units
	style: PropTypes.object,
	theme: PropTypes.oneOf(['light','dark']),
	width: PropTypes.string, // CSS units
};

LosantDashboardBlock.defaultProps = {
	theme: 'light',
	width: '100%',
	height: '240px'
};

export default LosantDashboardBlock;
