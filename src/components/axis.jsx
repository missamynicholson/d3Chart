import React from 'react';
import d3    from 'd3';

export default class Axis extends React.Component {
  componentDidUpdate() {
    this.renderAxis();
  }

  componentDidMount() {
    this.renderAxis();
  }

  renderAxis() {
    var node  = this.refs.axis;
    var axis = d3.svg.axis().orient(this.props.orient).ticks(this.props.ticks).scale(this.props.scale).tickValues(this.props.tickValues);
    d3.select(node).call(axis);
  }

  render() {
    return <g className="axis" ref="axis" transform={this.props.translate}></g>
  }
}
