// // Set new default font family and font color to mimic Bootstrap's default styling
// Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
// Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
// var ctx = document.getElementById("myBarChart");

const sample_2 = [
  {month: "January", rev: 1215, loss: 584},
  {month: "February", rev: 352, loss: 125},
  {month: "March", rev: 2567, loss: 1405},
  {month: "April", rev: 5216, loss: 3405},
  {month: "May", rev: 3462, loss: 5032},
  {month: "June", rev: 9585, loss: 4150}
]
var myLineChart = new Chart(document.getElementById("myBarChart"), {
  type: 'bar',
  data: {
    labels: sample_2.map(row => row.month),
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: sample_2.map(row => row.rev),
      font: 
      {
        size: 20
    }
    },{
    label: "Loss",
    backgroundColor: "rgb(238, 130, 238)",
    borderColor: "rgb(238, 130, 238)",
    data: sample_2.map(row => row.loss),
    font: 
      {
        size: 20
    }
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 10
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    plugins: {
        legend: {
        display: true
        },
        title: {
            display: true,
            text: 'Custom Chart Title',
            font: {
                size: 40
            },
            padding: {
                top: 10,
                bottom: 100
            }
        }
    }
}});
