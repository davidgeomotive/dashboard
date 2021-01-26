// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require('chartist');

// ##############################
// // // variables used to create animation on charts
// #############################
var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;

var barAnimation = {
  draw: function (data) {
    if (data.type === 'bar') {
      data.element.animate({
        opacity: {
          begin: (data.index + 1) * delays2,
          dur: durations2,
          from: 0,
          to: 1,
          easing: 'ease',
        },
      });
    }
  },
};

var lineAnimation = {
  draw: function (data) {
    if (data.type === 'line' || data.type === 'area') {
      data.element.animate({
        d: {
          begin: 600,
          dur: 700,
          from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
          to: data.path.clone().stringify(),
          easing: Chartist.Svg.Easing.easeOutQuint,
        },
      });
    } else if (data.type === 'point') {
      data.element.animate({
        opacity: {
          begin: (data.index + 1) * delays,
          dur: durations,
          from: 0,
          to: 1,
          easing: 'ease',
        },
      });
    }
  },
};

// ##############################
// // // Total conversion
// #############################

const totalConversionChart = {
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[42, 47, 53, 44, 37, 30, 30]],
  },

  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0,
    }),
    low: 0,
    high: 75, // we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  // for animation
  animation: lineAnimation,
};

// ##############################
// // // Conversions
// #############################

const conversionsChart = {
  total: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[3000, 3630, 3498, 3326, 3242, 2244, 2031]],
  },
  comparer: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [
      [9, 12, 11, 11, 9, 7, 7],
      [1, 1, 1, 1, 1, 0, 0],
    ],
    simulatedData: '90%',
  },
  researcher: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [
      [3, 3, 3, 3, 3, 2, 2],
      [0, 0, 0, 0, 0, 0, 0],
    ],
    simulatedData: '90%',
  },
  first: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [
      [6, 8, 8, 6, 7, 5, 4],
      [1, 1, 1, 1, 1, 1, 0],
    ],
    simulatedData: '90%',
  },
  buyer: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [
      [13, 16, 17, 15, 15, 12, 9],
      [1, 1, 1, 1, 1, 1, 1],
    ],
    simulatedData: '90%',
  },
  inspirational: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [
      [6, 7, 6, 6, 6, 4, 4],
      [1, 1, 1, 1, 1, 1, 1],
    ],
    simulatedData: '90%',
  },
  options: {
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0,
    },
  },
  responsiveOptions: [
    [
      'screen and (max-width: 640px)',
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          },
        },
      },
    ],
  ],
  animation: barAnimation,
};

// ##############################
// // // Conversions percents
// #############################

const conversionsPercentChart = {
  comparer: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [
      [1.72, 1.59, 1.54, 1.58, 1.58, 1.47, 1.56],
      [0.96, 0.68, 0.71, 0.73, 0.88, 0.0, 0.0],
      [2.22, 2.1, 2.02, 2.06, 2.03, 2.1, 2.23],
    ],
  },
  researcher: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [
      [0.53, 0.43, 0.44, 0.44, 0.44, 0.4, 0.5],
      [0, 0, 0, 0, 0, 0, 0],
      [0.75, 0.62, 0.63, 0.63, 0.62, 0.57, 0.72],
    ],
  },
  first: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [
      [1.0, 1.05, 1.06, 0.98, 1.09, 1.11, 0.85],
      [0.8, 0.65, 0.65, 0.78, 0.76, 1.02, 0.0],
      [1.57, 1.69, 1.71, 1.53, 1.74, 1.68, 1.54],
    ],
  },
  buyer: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [
      [6.19, 6.16, 6.12, 6.27, 6.11, 6.53, 6.76],
      [2.44, 2.0, 1.89, 2.17, 2.13, 2.78, 3.7],
      [11.5, 11.59, 11.56, 11.72, 11.45, 12.0, 12.16],
    ],
  },
  inspirational: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [
      [1.75, 1.68, 1.7, 1.65, 1.86, 1.72, 2.05],
      [1.39, 1.16, 1.35, 1.32, 1.47, 1.92, 2.27],
      [4.29, 4.22, 4.17, 4.05, 4.55, 3.92, 4.71],
    ],
  },
  options: {
    axisY: {
      offset: 50,
      labelInterpolationFnc: function (value) {
        return value + ' %';
      },
      scaleMinSpace: 15,
    },

    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0,
    },
  },
  responsiveOptions: [
    [
      'screen and (max-width: 640px)',
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          },
        },
      },
    ],
  ],
  animation: barAnimation,
};

// ##############################
// // // Conversion Lift to Baseline %
// #############################

const conversionsLiftChart = {
  comparer: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[206, 308, 284, 232, 206, 0, 0]],
  },
  researcher: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[0, 0, 0, 0, 0, 0, 0]],
  },
  first: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[229, 261, 229, 197, 196, 0, 0]],
  },
  buyer: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[468, 643, 608, 542, 509, 319, 318]],
  },
  inspirational: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[258, 361, 308, 306, 258, 207, 154]],
  },
  options: {
    axisY: {
      offset: 50,
      labelInterpolationFnc: function (value) {
        return value + ' %';
      },
      scaleMinSpace: 15,
    },

    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0,
    },
  },
  responsiveOptions: [
    [
      'screen and (max-width: 640px)',
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          },
        },
      },
    ],
  ],
  animation: barAnimation,
};

// ##############################
// // // Personalized content
// #############################

const personalizedContentChart = {
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[1441, 1831, 1780, 1680, 1589, 1182, 1012]],
  },
  options: {
    low: 0,
    high: 2500,
    lineSmooth: Chartist.Interpolation.simple(),
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  responsiveOptions: [
    [
      'screen and (max-width: 640px)',
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          },
        },
      },
    ],
  ],
  animation: lineAnimation,
};

// ##############################
// // // Detected
// #############################

const detectedChart = {
  comparer: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[636, 599, 870, 834, 694, 472, 480]],
    simulatedData: '21%',
  },
  researcher: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[654, 571, 788, 780, 700, 467, 440]],
    simulatedData: '20%',
  },
  first: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[745, 725, 824, 822, 790, 507, 453]],
    simulatedData: '23%',
  },
  buyer: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[238, 243, 347, 306, 241, 187, 181]],
    simulatedData: '8%',
  },
  inspirational: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[378, 346, 492, 464, 358, 278, 249]],
    simulatedData: '12%',
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0,
    }),
    low: 0,
    high: 1500, // we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  animation: lineAnimation,
};

// ##############################
// // // Send
// #############################

const sendChart = {
  total: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[3000, 3630, 3498, 3326, 3242, 2244, 2031]],
  },
  comparer: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[572, 539, 783, 751, 625, 425, 432]],
    simulatedData: '90%',
  },
  researcher: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[589, 514, 709, 702, 630, 420, 396]],
    simulatedData: '90%',
  },
  first: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[671, 653, 742, 740, 711, 456, 408]],
    simulatedData: '90%',
  },
  buyer: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[214, 219, 312, 275, 217, 168, 163]],
    simulatedData: '90%',
  },
  inspirational: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[340, 311, 443, 418, 322, 250, 224]],
    simulatedData: '90%',
  },
  options: {
    axisX: {
      showGrid: false,
    },

    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0,
    },
  },
  responsiveOptions: [
    [
      'screen and (max-width: 640px)',
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          },
        },
      },
    ],
  ],
  animation: barAnimation,
};

// ##############################
// // // Baseline Content
// #############################

const baselineChart = {
  total: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [[925, 1143, 1103, 1042, 1004, 721, 634]],
  },
  comparer: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[572, 539, 783, 751, 625, 425, 432]],
    simulatedData: '90%',
  },
  researcher: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[589, 514, 709, 702, 630, 420, 396]],
    simulatedData: '90%',
  },
  first: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[671, 653, 742, 740, 711, 456, 408]],
    simulatedData: '90%',
  },
  buyer: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[214, 219, 312, 275, 217, 168, 163]],
    simulatedData: '90%',
  },
  inspirational: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[340, 311, 443, 418, 322, 250, 224]],
    simulatedData: '90%',
  },
  options: {
    horizontalBars: true,
    reverseData: true,
    seriesBarDistance: 10,
    chartPadding: {
      top: 20,
      right: 30,
      bottom: 0,
      left: 0,
    },
  },
  responsiveOptions: [
    [
      'screen and (max-width: 640px)',
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          },
        },
      },
    ],
  ],
  animation: barAnimation,
};

// ##############################
// // // Viewed
// #############################

const viewedChart = {
  total: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[10000, 12100, 11661, 11086, 10806, 7480, 6770]],
  },
  comparer: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[445, 419, 609, 584, 486, 330, 336]],
    simulatedData: '70%',
  },
  researcher: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[458, 400, 552, 546, 490, 327, 308]],
    simulatedData: '70%',
  },
  first: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[410, 399, 453, 452, 435, 279, 249]],
    simulatedData: '55%',
  },
  buyer: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[119, 122, 174, 153, 121, 94, 91]],
    simulatedData: '50%',
  },
  inspirational: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[132, 121, 172, 162, 125, 97, 87]],
    simulatedData: '35%',
  },
  options: {
    showArea: true,
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  animation: lineAnimation,
};

module.exports = {
  personalizedContentChart,
  baselineChart,
  viewedChart,
  sendChart,
  detectedChart,
  totalConversionChart,
  conversionsChart,
  conversionsPercentChart,
  conversionsLiftChart,
};
