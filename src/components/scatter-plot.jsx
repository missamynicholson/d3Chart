import React            from 'react';
import d3               from 'd3';
import DataCircles      from './data-circles';
import DataLimitsLower  from './data-limits-lower';
import DataLimitsUpper  from './data-limits-upper';
import DataDashedLine   from './data-dashed-line';
import XYAxis           from './x-y-axis';
import AxisLabels       from './axis-labels';

const xMax   = (data)  => d3.max(data, (d) => d.xValue);
const yMax   = (data)  => d3.max(data, (d) => d.confidenceUpper);
const yMin   = (data)  => d3.min(data, (d) => d.confidenceLower);

const xScale = (props) => {
	return d3.scale.linear()
	       .domain([0, xMax(props.data) * 1.5])
	       .range([props.padding, props.width - props.padding * 2]);
};

const yScale = (props) => {
	return d3.scale.linear()
	       .domain([yMin(props.data), yMax(props.data)])
	       .range([props.height - props.padding, props.padding]);
};

const marshalProps = (props) => {
	const scales = { xScale: xScale(props), yScale: yScale(props) };
	return Object.assign({}, props, scales);
};

export default (props) => {
	const d3Props = marshalProps(props);
	return  <svg width={d3Props.width} height={d3Props.height}>
			<DataCircles {...d3Props} />
    			<DataLimitsLower {...d3Props} />
    			<DataLimitsUpper {...d3Props} />
    			<DataDashedLine {...d3Props} />
    			<XYAxis {...d3Props}/>
    			<text y="10" x="-300" stroke="#0000" transform="rotate(-90)">{props.testName}</text>
    			<AxisLabels {...d3Props} />
    		</svg>
}
