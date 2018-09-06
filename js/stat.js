'use strict';

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

var colorRgb = {
  red: 0,
  green: 0,
  blue: 255
};

var randomColor = function () {
  var red = colorRgb.red;
  var green = colorRgb.green;
  var blue = colorRgb.blue;
  if (red !== 0) {
    red = Math.floor(Math.random() * 256)
    ;
  }
  if (green !== 0) {
    green = Math.floor(Math.random() * 256);
  }
  if (blue === 255) {
    blue = Math.floor(Math.random() * 256);
  }

  return '#' + red.toString(16) + green.toString(16) + blue.toString(16);
};

var getRandomColor = function (ctx, names) {
  if (names === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = randomColor();
  }
  return ctx.fillStyle;
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

var renderChart = function (ctx, names, x, y, width, height) {
  getRandomColor(ctx, names);
  renderColumn(ctx, x, y, width, height);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, cloud.x + cloud.gap, cloud.y + cloud.gap, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, cloud.x, cloud.y, '#fff');
  renderTitle(ctx, 'Ура вы победили!', cloud.x + cloud.gap, cloud.y * 5, '#000');
  renderTitle(ctx, 'Список результатов:', cloud.x + cloud.gap, cloud.y * 7, '#000');
  var maxTime = getMaxElement(times);
  var timeTotal = function () {
    var Total = Math.round((barheight * times[i]) / maxTime);
    return Total;
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


