import React from 'react';

const renderCircles = (props) => {
	return (coords, index) => {
		const circleProps = {
			cx: props.xScale(coords.xValue),
			cy: props.yScale(coords.mean),
			r: 5,
			fill: coords.colour,
			key: index
		};
		return <circle {...circleProps} />;
	};
};

export default (props) => {
	return <g>{ props.data.map(renderCircles(props)) }</g>
}
