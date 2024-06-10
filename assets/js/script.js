var options = {
  series: [
    {
      data: [54, 63, 60, 65, 60, 68, 60]
    },
  ],
  chart: {
    height: 265,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#922c88'],
  // dataLabels: {
  //   enabled: true,
  // },
  stroke: {
    curve: 'smooth'
  },
  // grid: {
  //   borderColor: '#e7e7e7',
  //   row: {
  //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
  //     opacity: 0.5
  //   },
  // },
  markers: {
    size: 6,
    colors: '#922c88',
    strokeColors: '#922c88',
    strokeWidth: 2,
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisTicks: {
      show: false,
    },
    tickPlacement: 'between',
  },
  yaxis: {
    min: 50,
    max: 70,
    stepSize: 5,
  },
  legend: {
    show: false
  }
};

var chart = new ApexCharts(document.querySelector("#salesChart"), options);
chart.render();