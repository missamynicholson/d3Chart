import React from 'react';

const renderCircles = (props) => {
  return (coords, index) => {
    const circleProps = {
      cx: props.xScale(coords[0]),
      cy: props.yScale(coords[2]),
      r: 5,
      fill: coords[4],
      key: index
    };
    return <circle {...circleProps} />;
  };
};

export default (props) => {
  return <g>{ props.data.map(renderCircles(props)) }</g>
}