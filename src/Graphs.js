const Chart = require('chart.js');
var React = require('react');
var LineChart = require("react-chartjs").Line;

class Graphs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [20,30,40,50,60,70,80]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [12,13,14,15,16,17,18]
                }
            ]
    }
  }

}
  render() {

    return (
      <div className="container">
        <LineChart data={this.state.chartData} options={this.state.chartOptions} width="600" height="250"/>
      </div>
    )
  }
}

module.exports = Graphs;
