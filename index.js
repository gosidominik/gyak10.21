const { keyIn } = require('readline-sync');
const { fillMap, drawMap } = require('./map');

const width = 20;
const height = 10;

let map = [];
const apples = [];
const player = { pos: { x: 1, y: 1 }, score: 0 };

let key;
do {
  map = fillMap(width, height, player, apples);
  drawMap(map);

  key = keyIn();
  if (key === 's') {
    player.pos.y++;
    if (player.pos.y === height - 1) {
      player.pos.y = height - 2;
    }
  } else if (key === 'w') {
    player.pos.y--;
    if (player.pos.y === 0) {
      player.pos.y = 1;
    }
  } else if (key === 'a') {
    player.pos.x--;
    if (player.pos.x === 0) {
      player.pos.x = 1;
    }
  } else if (key === 'd') {
    player.pos.x++;
    if (player.pos.x === width - 1) {
      player.pos.x = width - 2;
    }
  }
} while (key !== 'q');