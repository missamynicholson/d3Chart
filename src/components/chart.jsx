import React                from 'react';
import {connect}            from 'react-redux';
import * as actionCreators  from '../lib/action-creators';
import ScatterPlot          from './scatter-plot';

const styles = {
  width   : 500,
  height  : 500,
  padding : 50,
};

const name = {testName: "Counted content per user"};

const us7 = [ {sampleSize: 4132, countedContent: 16333, stdDev: 8.05,  cohort: "control"}, 
	      {sampleSize: 4159, countedContent: 16670, stdDev: 8.49,  cohort: "controlAd"}, 
	      {sampleSize: 4423, countedContent: 21781, stdDev: 10.72, cohort: "higherAd"} ];


const uk7 = [ {sampleSize: 8441, countedContent: 46652, stdDev: 10.4437, cohort: "control"}, 
	      {sampleSize: 8463, countedContent: 48209, stdDev: 11.3999, cohort: "controlAd"}, 
	      {sampleSize: 8520, countedContent: 49770, stdDev: 11.3102, cohort: "higherAd"} ];


const eu7 = [ {sampleSize: 6967, countedContent: 44595, stdDev: 12.6414, cohort: "control"}, 
	      {sampleSize: 6985, countedContent: 44180, stdDev: 11.9653, cohort: "controlAd"}, 
	      {sampleSize: 7063, countedContent: 45009, stdDev: 12.4898, cohort: "higherAd"} ];



const as7 = [ {sampleSize: 2669, countedContent: 14003, stdDev: 10.8513, cohort: "control"}, 
	      {sampleSize: 2657, countedContent: 44180, stdDev: 11.9653, cohort: "controlAd"}, 
	      {sampleSize: 2572, countedContent: 12573, stdDev: 5.896,   cohort: "higherAd"} ];


const colours = ["black", "blue", "red"];

export default class Chart extends React.Component{

  calcMean(countedContent, sampleSize) {
	return (countedContent / sampleSize);
  };

  calcStdError(stdDev, sampleSize) {
	return (stdDev / Math.sqrt(sampleSize));
  };

  calcConfidence(stdError, mean) {
	return {
		upper: (mean + (1.96 * stdError)),
		lower: (mean - (1.96 * stdError))
	};
  };

  createDataSet(testData) {
  	var arr = new Array(testData.length);
	for (var i = 0; i < testData.length; i++) {
		 arr[i] = new Object(5);
		 arr[i].xValue = i + 1;
		 arr[i].confidenceLower = this.calcConfidence(this.calcStdError(testData[i].stdDev, testData[i].sampleSize), this.calcMean(testData[i].countedContent, testData[i].sampleSize)).lower;
		 arr[i].mean = this.calcMean(testData[i].countedContent, testData[i].sampleSize);
		 arr[i].confidenceUpper = this.calcConfidence(this.calcStdError(testData[i].stdDev, testData[i].sampleSize), this.calcMean(testData[i].countedContent, testData[i].sampleSize)).upper;
		 arr[i].colour = colours[i];
		 arr[i].cohort = testData[i].cohort; 
	}
	return arr;
  };

  constructor(props) {
    super(props);
    this.state = { data: this.createDataSet(us7) };
  }


  render() {
    return <div>
      <ScatterPlot {...this.state} {...styles} {...name} />
    </div>
  }
};
