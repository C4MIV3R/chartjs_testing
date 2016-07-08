window.onload = function() {
  console.log('The DOM is ready');
};

function destroyCharts() {
  investmentChart.destroy();
  totalDeployedChart.destroy();
  console.log('Charts have been cleared');
};
