import React from 'react';

const renderTitles = (props) => {
  return (coords, index) => {
    const titleProps = {
      textAnchor: "middle",
      transform: "translate(" + (125  + (index * 85)) + "," + (props.height - 10) + ")",
      stroke: coords.colour,
      key: index
    };
    return <text {...titleProps}>{coords.cohort}</text>;
  };
};

export default (props) => {
  return <g>{ props.data.map(renderTitles(props)) }</g>
}
