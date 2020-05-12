function printChartLine(){
  var labels= ["gen","feb","mar","apr","mag","giu","lugl","ago","sett","ott","nov","dic"]
  console.log(labels);
  $.ajax({
    url: "server.php",
    method: "GET",
    success: function(data){
      var ctx = $("#graph1");
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Vendite',
            data: data,
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
    },
    error: function(err){
      console.error(err);
    }

  });
};





function init(){
  printChartLine();
}

$(document).ready(init);
