'use strict';
(function () {
  var cloud = {
    x: 100,
    y: 10,
    width: 420,
    height: 270,
    gap: 10
  };

  var gistograma = {
    width: 40,
    height: 150,
    font: 50
  };

  var barheight = cloud.height - cloud.gap * 2 - gistograma.height;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, cloud.width, cloud.height);
  };

  var renderTitle = function (ctx, texts, x, y, color) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = color;
    ctx.fillText(texts, x, y);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  var colorRgb = [0, 0, 255];

  var randomInteger = window.randomInteger();

  var randomColor = function (arr) {
    var colorStr = '';
    for (var i = 0; i < arr.length; i++) {
      if (colorRgb[i] > 0) {
        colorStr += randomInteger().toString(16);
      } else {
        colorStr += '0' + colorRgb[i].toString(16);
      }
    }
    return '#' + colorStr;
  };

  var setRandomColor = function (ctx, name) {
    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = randomColor(colorRgb);
    }
  };

  var renderColumn = function (ctx, x, y, width, height) {
    ctx.fillRect(x, y, width, height);
  };

  var renderTimeTotal = function (ctx, times, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillText(Math.round(times), x, y);
  };

  var renderPlayer = function (ctx, players, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillText(players, x, y);
  };

  var renderChart = function (ctx, name, x, y, width, height) {
    setRandomColor(ctx, name);
    renderColumn(ctx, x, y, width, height);
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, cloud.x + cloud.gap, cloud.y + cloud.gap, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, cloud.x, cloud.y, '#fff');
    renderTitle(ctx, 'Ура вы победили!', cloud.x + cloud.gap, cloud.y * 5, '#000');
    renderTitle(ctx, 'Список результатов:', cloud.x + cloud.gap, cloud.y * 7, '#000');
    var maxTime = getMaxElement(times);
    var timeTotal = function () {
      var total = Math.round((barheight * times[i]) / maxTime);
      return total;
    };

    for (var i = 0; i < names.length; i++) {
      var renderX = cloud.x + gistograma.width + (gistograma.font + gistograma.width) * i;
      var renderY = cloud.y + gistograma.height + gistograma.font * 2;
      var renderColor = '#000';
      renderPlayer(ctx, names[i], renderX, renderY, renderColor);
      renderChart(ctx, names[i], renderX, renderY - cloud.gap * 2, gistograma.width, -timeTotal());
      renderTimeTotal(ctx, times[i], renderX, cloud.height - gistograma.font - timeTotal(), renderColor);
    }
  };
})();

