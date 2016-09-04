import React from 'react';

const renderLimits = (props) => {
  return (coords, index) => {
    const limitProps = {
      x1: props.xScale(coords[0]),
      y1: props.yScale(coords[1]),
      x2: props.xScale(coords[0]),
      y2: props.yScale(coords[3]),
      strokeWidth: "2",
      stroke: coords[4],
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
