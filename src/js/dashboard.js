import $ from 'jquery'
import ApexCharts from 'apexcharts'

$(() => {
  const options = {
    chart: {
      height: 410,
      type: 'bar',
      stacked: true,
      toolbar: {
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false
        }
      }
    },
    legend: {
      show: false
    },
    tooltip: {
      shared: true
    },
    labels: {
      formater: value => `$${value}`
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        name: 'Base Pay',
        data: [1800, 1900, 2000, 1800, 1500, 0, 0, 0, 0]
      },
      {
        name: 'Commission',
        data: [1940, 2040, 2140, 1940, 1600, 0, 0, 0, 0]
      },
      {
        name: 'Bonus',
        data: [600, 700, 750, 700, 600, 0, 0, 0, 0]
      }
    ],
    colors: ['#002d60', '#0f93f5', '#48ecb0'],
    xaxis: {
      type: 'datetime',
      categories: [
        '01/01/2019 GMT',
        '02/01/2019 GMT',
        '03/01/2019 GMT',
        '04/01/2019 GMT',
        '05/01/2019 GMT',
        '06/01/2019 GMT',
        '07/01/2019 GMT',
        '08/01/2019 GMT',
        '09/01/2019 GMT'
      ]
    }
  }

  const optionsCommission = {
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: function(chart, w, e) {
          console.log(chart, w, e)
        }
      },
      toolbar: {
        show: false
      }
    },
    colors: [
      '#0f93f5',
      '#0f93f5',
      '#0f93f5',
      '#0f93f5',
      '#0f93f5',
      '#0f93f5',
      '#0f93f5',
      '#0f93f5',
      '#f7f9fa',
      '#f7f9fa',
      '#f7f9fa',
      '#f7f9fa'
    ],
    plotOptions: {
      bar: {
        columnWidth: '35px',
        distributed: true,
        radius: 6,
        endingShape: 'flat',
        colors: {
          backgroundBarOpacity: 1
        },
        style: {
          opacity: 1
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        data: [
          1800,
          2400,
          1600,
          1900,
          2200,
          1900,
          1700,
          1500,
          1700,
          1650,
          1600,
          1550
        ]
      }
    ],
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      labels: {
        style: {
          colors: [
            '#747474',
            '#747474',
            '#747474',
            '#747474',
            '#747474',
            '#747474',
            '#747474',
            '#747474',
            '#d1d1d1',
            '#d1d1d1',
            '#d1d1d1',
            '#d1d1d1'
          ],
          fontSize: '14px'
        }
      }
    },
    yaxis: {
      tickAmount: 3,
      axisTicks: {
        color: '#202020',
        fontSize: 14
      },
      labels: {
        style: {
          color: '#202020',
          fontSize: 14
        }
      }
    },
    grid: {
      show: true,
      borderColor: '#f1f1f1',
      strokeDashArray: 28,

      xaxis: {
        lines: {
          show: false,
          offsetX: 0,
          offsetY: 0
        }
      },
      yaxis: {
        lines: {
          show: false,
          offsetX: 0,
          offsetY: 0
        }
      }
    }
  }

  const chart = new ApexCharts(document.querySelector('#comp-total'), options)

  const chartCommission = new ApexCharts(
    document.querySelector('#commission-total'),
    optionsCommission
  )

  chart.render()

  chartCommission.render()

  $('.side-menu-toggle').on('click', () => {
    setTimeout(() => {
      chart.updateSeries(options.series)
    }, 3000)
  })
})
