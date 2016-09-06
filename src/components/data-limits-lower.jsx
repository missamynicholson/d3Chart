import React from 'react';

const renderLimits = (props) => {
  return (coords, index) => {
    const limitProps = {
      x1: props.xScale(coords.xValue - 0.05),
      y1: props.yScale(coords.confidenceLower),
      x2: props.xScale(coords.xValue + 0.05),
      y2: props.yScale(coords.confidenceLower),
      strokeWidth: "2",
      stroke: coords.colour,
      key: index
    };
    return <line {...limitProps} />;
  };
};

export default (props) => {
  return <g>{ props.data.map(renderLimits(props)) }</g>
}
