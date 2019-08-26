// Code goes here
var app = angular.module('MyApp', []);
app.controller('MyCtrl', function ($scope) {
  $('#example').DataTable();
  var trace1 = {
    x: [0, 1, 2, 3, 4, 5],
    y: [1.5, 1, 1.3, 0.7, 0.8, 0.9],
    type: 'scatter'
  };

  var trace2 = {
    x: [0, 1, 2, 3, 4, 5],
    y: [1, 0.8, 0.2, -1.6, 0.3, 0.8],
    type: 'scatter'
  };

  var trace3 = {
    x: [0, 1, 2, 3, 4, 5],
    y: [1, 0.3, 0.7, -1.9, 0.4, 0.8],
    type: 'bar'
  };


  var trace4 = {
    x: [0, 1, 2, 3, 4, 5],
    y: [1, 0.5, 0.7, -1.2, 0.3, 0.4],
    type: 'scatter'
  };

  var data1 = [trace1, trace2];
  var data2 = [trace2, trace1];
  var data3 = [trace3, trace4];
  var layout = {
    title: 'Charts Title',
    showlegend: true,
    "legend": {
      "orientation": "h"
    }
  };

  var config = {
    displayModeBar: false,
    toImageButtonOptions: {
      format: 'svg', // one of png, svg, jpeg, webp
      filename: 'custom_image',
      height: 400,
      width: 500,
      scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
    }
  };

  Plotly.newPlot('chart1', data1, layout, config);
  Plotly.newPlot('chart2', data3, layout, config);
  Plotly.newPlot('chart3', data2, layout, config);


  $scope.chartWithContentDownload = function () {
    $('.svg-container, #example').printThis({
      
    });
  };
});