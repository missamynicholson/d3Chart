import React from 'react';

const renderLimits = (props) => {
  return (coords, index) => {
    const limitProps = {
      x1: props.xScale(coords.xValue),
      y1: props.yScale(coords.confidenceLower),
      x2: props.xScale(coords.xValue),
      y2: props.yScale(coords.confidenceUpper),
      strokeWidth: "2",
      stroke: coords.colour,
      opacity: "0.5",
      strokeDasharray: "3,3",
      key: index
    };
    return <line {...limitProps} />;
  };
};

export default (props) => {
  return <g>{ props.data.map(renderLimits(props)) }</g>
}
