// Code only for testing and presentation purposes
//------------------------------------------------

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(reloadChart);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Example from google charts website
function drawPieChart(counter){
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     1],
    ['Eat',      2],
    ['Commute',  1.5],
    ['Watch TV', 2],
    ['Sleep',    0.7* counter]
  ]);

  var options = {
    title: 'My Daily Activities'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

// Just 4fun, display animated chart
async function reloadChart() {
  var count_up = true;
  var counter = 0;

  for(counter;counter<1000;counter++){
    drawPieChart(counter)
    await sleep(100);
  }
}
