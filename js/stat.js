'use strict';

var cloud = {
  X: 100,
  Y: 10,
  WIDTH: 420,
  HEIGHT: 270,
  GAP: 10
};

var gistograma = {
  WIDTH: 40,
  HEIGHT: 150,
  FONT: 50
};

var barHeight = cloud.HEIGHT - cloud.GAP * 2 - gistograma.HEIGHT;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, cloud.WIDTH, cloud.HEIGHT);
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
  RED: 0,
  GREEN: 0,
  BLUE: 255
};

var randomColor = function () {
  var red = colorRgb.RED;
  var green = colorRgb.GREEN;
  var blue = colorRgb.BLUE;
  if (red === 0) {
    red = Math.floor(Math.random() * (256))
    ;
  }
  if (green === 0) {
    green = Math.floor(Math.random() * (256));
  }
  if (blue === 0) {
    blue = Math.floor(Math.random() * (256));
  }

  return '#' + red.toString(16) + green.toString(16) + blue.toString(16);
};

var getRandomColor = function (ctx, names) {
  if (names === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = randomColor();
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

var renderChart = function (ctx, names, x, y, width, height) {
  getRandomColor(ctx, names);
  renderColumn(ctx, x, y, width, height);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, cloud.X + cloud.GAP, cloud.Y + cloud.GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, cloud.X, cloud.Y, '#fff');
  renderTitle(ctx, 'Ура вы победили!', cloud.X + cloud.GAP, cloud.Y * 5, '#000');
  renderTitle(ctx, 'Список результатов:', cloud.X + cloud.GAP, cloud.Y * 7, '#000');
  var maxTime = getMaxElement(times);
  var timeTotal = function () {
    var Total = Math.round((barHeight * times[i]) / maxTime);
    return Total;
  };

  for (var i = 0; i < names.length; i++) {
    renderPlayer(ctx, names[i], cloud.X + gistograma.WIDTH + (gistograma.FONT + gistograma.WIDTH) * i, cloud.Y + gistograma.HEIGHT + gistograma.FONT * 2, '#000');
    renderChart(ctx, names[i], cloud.X + gistograma.WIDTH + (gistograma.FONT + gistograma.WIDTH) * i, cloud.Y - cloud.GAP * 2 + gistograma.HEIGHT + gistograma.FONT * 2, gistograma.WIDTH, -timeTotal());
    renderTimeTotal(ctx, times[i], cloud.X + gistograma.WIDTH + (gistograma.FONT + gistograma.WIDTH) * i, cloud.HEIGHT - gistograma.FONT - timeTotal(), '#000');
  }
};


