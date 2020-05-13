function permissCheck(){
  $("button").click(function(){
    var permiss = $("select").val();
    $.ajax({
      url:"server.php",
      method: "GET",
      data: {permiss: permiss},
      success: function(data){
        i = 0;
        for (var graph of data) {
          i += 1;
          printChart(
            $(".graph:nth-child("+i+")"),
            graph.type,
            graph.data,
            graph.labels
          );
        }
      }
    })
  });
}

function printChart(ctx,type,data,labels){
  var boolean = true;
  var datasets = [];
  if (isNaN(data[0])) {
    for (var i = 0; i < data.length; i++) {
      datasets[i]= {
        label: "team" + (i+1),
        data:data[i]
      }
    }
  }else {
    datasets[0] ={
     label: "vendite",
     data: data
   }
  }
  var myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: datasets
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

function init(){
  permissCheck();
}

$(document).ready(init);
