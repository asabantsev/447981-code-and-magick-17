'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 150;
var CLOUD_Y = 260;
var TEXT_X = 150;
var TEXT_Y = 35;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var GAP = 50;
var FONT_GAP = 35;
var FONT_HEIGHT = 20;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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

var randomInteger = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

var getColor = function (name) {
  return name === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, 0.' + randomInteger(5, 9) + ')';
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');
  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', TEXT_X, TEXT_Y);
  ctx.fillText('Список результатов:', TEXT_X, TEXT_Y + FONT_HEIGHT);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + (GAP + BAR_WIDTH) * i, CLOUD_Y);
    ctx.fillText(Math.round(times[i]), CLOUD_X + (GAP + BAR_WIDTH) * i, CLOUD_Y - FONT_GAP - (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = getColor(names[i]);
    ctx.fillRect(CLOUD_X + (GAP + BAR_WIDTH) * i, GAP + FONT_GAP + BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};
