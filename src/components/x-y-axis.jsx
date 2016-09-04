import React  from 'react';
import Axis   from './axis';

export default (props) => {
  const xSettings = {
    translate: 'translate(0,' + (props.height - props.padding) + ')',
    scale: props.xScale,
    orient: 'bottom',
    ticks: 2,
  };
  const ySettings = {
    translate: 'translate(' + props.padding + ', 0)',
    scale: props.yScale,
    orient: 'left',
    ticks: 5,
  };
  return <g className="xy-axis">
    <Axis {...xSettings}/>
    <Axis {...ySettings}/>
  </g>
}
