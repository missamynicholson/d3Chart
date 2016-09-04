import React                from 'react';
import {connect}            from 'react-redux';
import * as actionCreators  from '../lib/action-creators';
import ScatterPlot          from './scatter-plot';

const styles = {
  width   : 500,
  height  : 500,
  padding : 30,
};


const dataSet = [[1, 25, 55, 85, "red"], [2, 40, 50, 60, "blue"]];

export default class Chart extends React.Component{
  constructor(props) {
    super(props);
    this.state = { data: dataSet };
  }


  render() {
    return <div>
      <div>
	<p>% Uplift</p>
      </div>
      <ScatterPlot {...this.state} {...styles} />
    </div>
  }
};
