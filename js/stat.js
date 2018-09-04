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

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, cloud.X + cloud.GAP, cloud.Y + cloud.GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, cloud.X, cloud.Y, '#fff');
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 110, 50);
  ctx.fillText('Список результатов:', 110, 70);
  var maxTime = getMaxElement(times);
  var randColor = function () {
    var red;
    var green;
    var blue;
    red = Math.floor(Math.random() * (256));
    green = Math.floor(Math.random() * (256));
    blue = 255;
    return '#' + red.toString(16) + green.toString(16) + blue.toString(16);
  };
  var timeTotal = function () {
    var Total = Math.round((barHeight * times[i]) / maxTime);
    return Total;
  };
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], cloud.X + gistograma.WIDTH + (gistograma.FONT + gistograma.WIDTH) * i, cloud.Y + gistograma.HEIGHT + gistograma.FONT * 2);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = randColor();
    }
    ctx.fillRect(cloud.X + gistograma.WIDTH + (gistograma.FONT + gistograma.WIDTH) * i, cloud.Y - cloud.GAP * 2 + gistograma.HEIGHT + gistograma.FONT * 2, gistograma.WIDTH, -timeTotal());
    ctx.fillStyle = '#000';
    ctx.fillText(timeTotal(), cloud.X + gistograma.WIDTH + (gistograma.FONT + gistograma.WIDTH) * i, cloud.HEIGHT - timeTotal() - gistograma.FONT);
  }
};


