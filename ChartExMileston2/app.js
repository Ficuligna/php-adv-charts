function printChartLine(){
  var labels= ["gen","feb","mar","apr","mag","giu","lugl","ago","sett","ott","nov","dic"]
  $.ajax({
    url: "server.php",
    method: "GET",
    success: function(data){
      var ctx = $('#graph1');
      var myChart = new Chart(ctx, {
        type: data.fatturato.type,
        data: {
          labels: labels,
          datasets: [{
            label: 'Vendite',
            data: data.fatturato.data,
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      })
    }
  });
}

function printChartPie(){
  $.ajax({
    url: "server.php",
    method: "GET",
    success: function(data){
      var ctx = $('#graph2');
      var myChart = new Chart(ctx, {
        type: data.typeAgent,
        data: {
          labels: data.labels,
          datasets: [{
            label: 'Vendite',
            data: data.sell,
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      })
    }
  });
}


function init(){
  printChartLine();
  printChartPie();
}

$(document).ready(init);
