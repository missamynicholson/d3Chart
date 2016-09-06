import React from 'react';

const renderShadedRect = (props) => {
  return (coords, index) => {
    const limitProps = {
      x: props.padding,
      y: props.yScale(coords.confidenceUpper),
      height: props.yScale(coords.confidenceLower) - props.yScale(coords.confidenceUpper),
      width: props.width - (props.padding * 2),
      fill: "black",
      opacity: 0.25,
      key: index
    };
    return <rect {...limitProps} />;
  };
};

export default (props) => {
  return <g>{ props.data.map(renderShadedRect(props)) }</g>
}
